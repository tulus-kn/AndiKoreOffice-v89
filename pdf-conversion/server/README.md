# Opsi 2 — Edit via konversi backend (FastAPI + pdf2docx)

Rute kedua saat pengguna mau mengedit PDF **dengan bantuan server**. Aplikasi
mengunggah biner PDF ke layanan ini, server mengubahnya menjadi DOCX yang bisa
diedit, lalu hasilnya diunduh dan dibuka di tab Word aplikasi.

## Jalankan lokal

```bash
cd server
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export AUTH_TOKEN=           # kosongkan hanya untuk uji lokal
uvicorn main:app --host 127.0.0.1 --port 8137
```

Cek:

```bash
curl http://127.0.0.1:8137/healthz
curl -F "file=@contoh.pdf" "http://127.0.0.1:8137/convert?to=docx" -o hasil.docx
```

Bila `AUTH_TOKEN` diisi, sertakan header:

```bash
curl -H "Authorization: Bearer <token>" -F "file=@contoh.pdf" \
  "http://127.0.0.1:8137/convert?to=docx" -o hasil.docx
```

## Deploy Docker

```bash
docker build -t pdf-converter .
docker run -p 8000:8000 -e AUTH_TOKEN=<token-panjang> -e MAX_MB=15 pdf-converter
```

Pasang di belakang reverse proxy HTTPS (mis. Caddy/Nginx). Endpoint terbuka
tanpa kunci bila `AUTH_TOKEN` kosong — produksi wajib diisi.

## Endpoint

| Metode | Path | Keterangan |
|--------|------|------------|
| GET | `/healthz` | Cek hidup, tidak perlu auth |
| POST | `/convert?to=docx` | Multipart field `file`; balikkan DOCX |

Batas: ukuran PDF ≤ `MAX_MB` (default 15 MB); sniff `%PDF-` di awal berkas;
folder sementara dibersihkan oleh `BackgroundTasks` setelah respons selesai.

## Lisensi

`pdf2docx` menarik PyMuPDF **AGPL-3.0**. Sisi layanan server tunduk pada AGPL;
tinjau sebelum dipakai produk tertutup. Alternatif tanpa AGPL: LibreOffice
headless (filter PDF→DOCX di beberapa distribusi terbatas) atau mesin konversi
komersial.

## Catatan kualitas

Untuk dokumen campuran teks/tabel hasilnya paling konsisten dibanding rute
offline, tetapi judul/nama bisa terpotong vertikal, beberapa label menyatu, dan
baris bisa meleset. Perbaikan umum: atur pemisahan paragraf di `pdf2docx` atau
praproses dokumen sumber.
