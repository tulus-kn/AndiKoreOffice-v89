"""
Layanan konversi PDF -> DOCX (Opsi 2: konversi via backend).

Endpoint utama:
  POST /convert?to=docx   multipart/form-data, field "file" = PDF
  GET  /healthz            cek hidup

Keamanan:
  - Jika AUTH_TOKEN di-set, semua endpoint selain /healthz wajib
    header `Authorization: Bearer <token>`.
  - Ukuran dibatasi MAX_MB.
  - Berkas sementara dihapus setelah respons selesai dikirim.

Catatan lisensi:
  pdf2docx menarik PyMuPDF (AGPL-3.0) sebagai dependensi. Menjalankan
  layanan ini di server berarti kewajiban AGPL pada sisi layanan;
  tinjau sebelum dipakai produksi. Untuk alternatif tanpa AGPL, ganti
  pipeline konversi dengan LibreOffice headless atau mesin lain.
"""

import os
import time
import shutil
import tempfile
import secrets
import logging

from fastapi import FastAPI, UploadFile, File, HTTPException, Header, Query
from fastapi.responses import FileResponse
from fastapi.background import BackgroundTasks

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("pdf-convert")

AUTH_TOKEN = os.environ.get("AUTH_TOKEN", "").strip()
MAX_MB = int(os.environ.get("MAX_MB", "15"))
MAX_BYTES = MAX_MB * 1024 * 1024

app = FastAPI(title="PDF -> DOCX converter", version="0.1.0")


def _check_auth(authorization: str | None) -> None:
    if not AUTH_TOKEN:
        return  # tidak dikunci bila token kosong (hanya untuk uji lokal)
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header wajib")
    scheme, _, token = authorization.partition(" ")
    if scheme.lower() != "bearer" or not secrets.compare_digest(token, AUTH_TOKEN):
        raise HTTPException(status_code=401, detail="Token tidak valid")


def _sniff_pdf(data: bytes) -> bool:
    return data[:5] == b"%PDF-"


@app.get("/healthz")
def healthz():
    return {"ok": True, "ts": int(time.time())}


@app.post("/convert")
async def convert(
    background: BackgroundTasks,
    file: UploadFile = File(...),
    to: str = Query("docx", pattern="^(docx|html)$"),
    authorization: str | None = Header(default=None),
):
    _check_auth(authorization)

    head = await file.read(5)
    if not _sniff_pdf(head):
        raise HTTPException(status_code=400, detail="Berkas bukan PDF yang valid")
    rest = await file.read(MAX_BYTES - 5 + 1)
    raw = head + rest
    if len(raw) > MAX_BYTES:
        raise HTTPException(status_code=413, detail=f"Ukuran melebihi {MAX_MB} MB")

    stem = os.path.splitext(os.path.basename(file.filename or "dokumen"))[0] or "dokumen"
    workdir = tempfile.mkdtemp(prefix="pdfconv-")
    pdf_path = os.path.join(workdir, "input.pdf")
    out_path = os.path.join(workdir, f"{stem}.docx")

    with open(pdf_path, "wb") as f:
        f.write(raw)

    if to != "docx":
        shutil.rmtree(workdir, ignore_errors=True)
        raise HTTPException(status_code=400, detail="Format keluaran didukung: docx")

    try:
        # Import di dalam handler agar startup tetap cepat bila mesin belum dipakai.
        from pdf2docx import Converter

        log.info("Mulai konversi: %s (%d bytes)", file.filename, len(raw))
        cv = Converter(pdf_path)
        cv.convert(out_path)
        cv.close()

        if not os.path.exists(out_path):
            raise HTTPException(status_code=500, detail="Hasil konversi tidak terbentuk")

        background.add_task(shutil.rmtree, workdir, ignore_errors=True)
        return FileResponse(
            out_path,
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            filename=os.path.basename(out_path),
        )
    except HTTPException:
        shutil.rmtree(workdir, ignore_errors=True)
        raise
    except Exception as exc:  # noqa: BLE001
        log.exception("Konversi gagal")
        shutil.rmtree(workdir, ignore_errors=True)
        raise HTTPException(status_code=500, detail=f"Konversi gagal: {exc}")
