# Tiga Rute Edit PDF di Aplikasi

Saat pengguna membuka file PDF dan menekan **Edit**, aplikasi tidak punya satu
mesin edit teks langsung (jembatan JS↔native belum mendukung pencocokan teks
PDFium). Sebagai gantinya, ada **tiga rute** untuk sampai ke dokumen yang bisa
diedit, masing-masing dengan trade-off berbeda.

## Alur keputusan saat buka PDF

```
Buka PDF ──► mau diedit?
              ├─ Offline / dokumen sederhana ──► Opsi 1: rekonstruksi di app
              ├─ Online, teks + tabel campuran ──► Opsi 2: konversi via server
              └─ Pola dikenal (CV, formulir) ───► Opsi 3: rebuild dari template
```

| Opsi | Folder | Yang terjadi saat dipilih | Butuh internet | Hasil editable | Kematangan |
|------|--------|---------------------------|----------------|----------------|------------|
| 1 | `app-js/` | pdf.js membaca PDF di perangkat, blok teks direkonstruksi jadi HTML posisi absolut / model dokumen yang diedit di app | Tidak | Sedang; heuristik blok & tabel | Prototipe modul JS |
| 2 | `server/` | PDF diunggah ke backend, server ubah ke DOCX, hasil diunduh lalu dibuka di tab Word app | Ya (server sendiri) | Bagus untuk dokumen umum; tabel/kolom kadang meleset | Lulus smoke test lokal |
| 3 | `rebuild-docx/` | Dokumen dicocokkan ke template yang dikenal, lalu disusun ulang jadi dokumen rapi editable | Tidak | Terbaik untuk pola yang dikenal | Pola + contoh placeholder |

## Penjelasan tiap rute

### Opsi 1 — Rekonstruksi di perangkat (offline)
Mesin pdf.js yang sudah dibundel di APK membaca item teks beserta koordinatnya,
mengelompokkan jadi baris dan blok, lalu menyusun ulang sebagai tampilan HTML
berposisi absolut atau model blok untuk writer dokumen. Tidak ada unggahan keluar
perangkat. Cocok sebagai fallback offline untuk dokumen sederhana.

**Batas**: multi-kolom, tabel rumit, dan gambar cenderung meleset/hilang; deteksi
tabel dua kolom masih heuristik; font tanpa ToUnicode bisa kosong.

### Opsi 2 — Konversi via backend
App mengirim biner PDF ke endpoint `/convert` (FastAPI + pdf2docx), server
mengembalikan DOCX editable, app menyimpan dan membukanya di tab Word. Hasil
paling konsisten untuk dokumen campuran teks/tabel, tetapi butuh hosting, token
autentikasi, dan penanganan unggahan besar.

**Batas**: kualitas tergantung mesin konversi; judul/label kadang terpotong atau
menyatu. Lihat catatan lisensi di bawah.

### Opsi 3 — Rebuild dari template
Untuk dokumen dengan pola stabil (CV, formulir internal, laporan standar), app
mencocokkan field yang dikenal lalu membangun ulang dokumen editable rapi dengan
python-docx sejenis. Hasil paling rapi, tetapi tiap format baru perlu aturan
ekstraksi dan tata letak sendiri; PDF acak tidak bisa di-rebuild otomatis.

## Catatan privasi

Contoh dokumen nyata (CV pribadi, foto, kontak) **tidak** disertakan di repo ini.
Folder `rebuild-docx/` hanya berisi pola generik dan contoh data dummy. Berkas
lokal yang memuat data pribadi harus tetap di luar Git (lihat `.gitignore`).

## Status yang sudah teruji

- **Opsi 2**: `uvicorn` lokal dijalankan; `GET /healthz` 200; `POST /convert?to=docx`
  menerima multipart `file`, mengembalikan DOCX hasil konversi. Gerbang Bearer token
  ada di kode (`AUTH_TOKEN`). Klien sisi app `app-js/convert-bridge.js` sudah ada:
  validasi HTTPS, token via header, batas 15 MB/timeout 60 dtk, kode error jelas,
  hook fallback Opsi 1; 10 asersi uji Node 22 lolos. Dialog setelan penyedia
  `app-js/pdf-convert-settings.js` sudah ada (gratis/berbayar, self-host/SaaS),
  9 asersi uji Node 22 lolos; tombol pembuka belum disambung ke bundle UI.
- **Opsi 1**: logika ekstraksi baris/blok diuji pada teks sintetis dengan Node 22;
  pengelompokan baseline, spasi antar item, dan model blok berjalan. Belum
  di-angkut ke alur UI bundle APK.
- **Opsi 3**: pola rebuild per dokumen didokumentasikan; implementasi nyata
  dikerjakan per template.

## Sisa pekerjaan (belum dikerjakan)

- Deploy Opsi 2 ke hosting (Dockerfile sudah disiapkan), pasang `AUTH_TOKEN`
  panjang, HTTPS, batas ukuran dan pembersihan temp (sudah ada di kode).
- Wiring bundle UI: tombol Edit/Convert memanggil `window.__genofficePdfConvert`
  sesuai kondisi (offline/online), tombol pembuka dialog setelan
  (`data-pdfconv="settings"` / `__akOpenPdfConvertSettings`), simpan DOCX hasil
  ke penyimpanan app. Bridge dan dialog shim sudah terpasang di `pdf/index.html`.
- Opsi 1: tambahkan ekstraksi gambar, deteksi tabel dua kolom, writer DOCX dari
  model blok.
- Verifikasi kualitas pada sampel PDF lain.

## Catatan lisensi (wajib tinjau sebelum produksi)

- `pdf2docx` menarik **PyMuPDF (AGPL-3.0)** sebagai dependensi. Menjalankan
  layanan Opsi 2 di server memicu kewajiban AGPL pada sisi layanan. Bila app
  tertutup dan backend tidak bisa diumumkan sumbernya, ganti mesin konversi
  (mis. LibreOffice headless) atau komersial.
- MuPDF viewer juga AGPL-3.0 — jangan dibundel ke APK tertutup.
- Kandidat lain: pdf2htmlEX (GPL), PdfiumAndroidKt (lisensi NOASSERTION belum
  diverifikasi). Cek ulang berkas lisensi sebelum memasukkan ke rilis.

## Jangan commit

- `.jks` keystore, kredensial, token GitHub, dan dokumen/CV pribadi pengguna.
- `.env` berisi token produksi; salin dari `.env.example`.
