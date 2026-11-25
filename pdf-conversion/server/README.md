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

`PORT` dibaca otomatis oleh container; default 8000. Pasang di belakang reverse
proxy HTTPS. Endpoint terbuka tanpa kunci bila `AUTH_TOKEN` kosong — produksi
wajib diisi.

## Deploy host gratis

### Render (paling mudah, dari GitHub)

1. Buka [dashboard Render](https://dashboard.render.com) → **New → Web Service**,
   hubungkan repo `AndiKoreOffice-v89`.
2. **Root Directory**: `pdf-conversion/server`.
3. Paket **Free**; blueprint `render.yaml` sudah mengisi build/start command dan
   health check `/healthz`.
4. Tambah environment variable: `AUTH_TOKEN` (token acak panjang, isi di
   dashboard — jangan di commit), `MAX_MB=15`.
5. Setelah live, salin URL service (mis. `https://andikore-pdf-conv.onrender.com`),
   tempel di dialog app: **Alamat server/API**, dan isi token yang sama.

Batas free Render: tidur setelah 15 menit idle, cold start ~1 menit, tanpa disk
permanen, memori terbatas — cocok untuk uji coba dan trafik ringan.

### Google Cloud Run (serverless, kuota gratis)

1. Install `gcloud`, login dengan akun Google, buat project.
2. Dari folder `server/`:

```bash
gcloud run deploy andikore-pdf-conv \
  --source . --platform managed --region asia-southeast1 \
  --set-env-vars MAX_MB=15 \
  --set-secrets AUTH_TOKEN=auth-token:latest \
  --allow-unauthenticated --port 8000
```

3. Salin URL `.run.app` yang diberi, tempel ke dialog app. Kuota gratis: 2 juta
   request/bulan; cold start beberapa detik. Butuh kartu verifikasi akun, tidak
   otomatis kena biaya selama dalam kuota.

### Setelah endpoint terpasang

Buka dialog konverter di app (penyedia self-host), isi alamat + token. Bridge
mengirim PDF ke `/convert?to=docx` dan menyimpan DOCX hasil. Bila server
nonaktif/gagal, app jatuh ke fallback offline bila tersedia.

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
