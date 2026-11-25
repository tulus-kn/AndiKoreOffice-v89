# Opsi 3 — Edit via rebuild dari template

Rute ketiga: untuk dokumen dengan pola yang sudah dikenal (CV, formulir
internal, laporan standar), aplikasi mencocokkan field-nya lalu menyusun ulang
menjadi dokumen editable yang rapi, tanpa konversi mesin umum.

## Pola umum

1. Kenali jenis dokumen dari judul/struktur (mis. bagian *Data Pribadi*,
   *Pendidikan*, *Pengalaman*).
2. Ekstrak field: nama, kontak, foto, tabel, daftar pengalaman.
3. Bangun ulang ke DOCX dengan `python-docx`: heading, tabel dua kolom, gambar,
   spacing agar rapi.
4. Buka hasil di tab Word aplikasi.

`cv_template.example.py` adalah kerangka generik dengan data dummy. Isi field dan
atur tata letak per jenis dokumen; jangan menaruh data pribadi asli di repo.

## Kapan cocok

Dokumen berpola stabil. Hasil paling rapi dan editable, tetapi tiap format baru
perlu aturan ekstraksi dan tata letak sendiri. PDF acak tidak bisa di-rebuild
otomatis dengan pendekatan ini.

## Privasi

Contoh dokumen nyata, foto, dan kontak tidak disertakan di repo. Berkas hasil
rebuild pribadi tetap di luar Git (lihat `.gitignore`).
