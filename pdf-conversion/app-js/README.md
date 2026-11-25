# Modul sisi app (JS) — Opsi 1 inti + bridge Opsi 2 + dialog setelan

Tiga berkas di folder ini hidup di lapisan shim aplikasi (sebelum bundle minified):

- `pdf-reconstruct.js` — inti **Opsi 1** (rekonstruksi offline di perangkat).
- `convert-bridge.js` — klien **Opsi 2** (kirim PDF ke backend) sekaligus
  tempat memasang fallback lokal Opsi 1.
- `pdf-convert-settings.js` — dialog pengaturan penyedia, gaya seperti dialog
  setelan AI: pilih provider gratis/berbayar, isi alamat + kunci, simpan.

## convert-bridge.js (klien server + fallback)

Global: `window.__genofficePdfConvert`.

Konfigurasi di localStorage (hanya di perangkat):

| Kunci | Isi |
|-------|-----|
| `ak.pdfconv.endpoint` | Base URL server konversi (https). Kosong = rute server nonaktif. |
| `ak.pdfconv.token` | Bearer token server; boleh kosong bila server tanpa kunci. |

API:

```js
const bridge = window.__genofficePdfConvert;
bridge.isConfigured();                       // boolean
const r = await bridge.convert(pdfBytes, "CV.pdf");
// r.ok -> { blob, filename: "CV.docx" }
// gagal -> { ok:false, code: NOT_CONFIGURED | BAD_URL | TOO_LARGE |
//            UNAUTHORIZED | BAD_RESPONSE | TIMEOUT | NETWORK }

// Pasang fallback Opsi 1; dipakai otomatis bila server nonaktif/gagal.
bridge.setLocalFallback(async (bytes, name) => ({ ok: true, blob, filename }));
const r2 = await bridge.convertWithFallback(pdfBytes, "CV.pdf");
```

Keamanan yang sudah diterapkan:

- Hanya URL `https:`; tolak kredensial di URL dan port eksplisit.
- `credentials: "omit"`, `redirect: "error"`, token lewat header `Authorization`
  (bukan query string).
- Batas 15 MB, timeout 60 detik via `AbortController`.

Uji logika dengan Node 22 (stub `localStorage`/`fetch`): 10 asersi lolos —
konfigurasi kosong `NOT_CONFIGURED`, http `BAD_URL`, https sukses mengembalikan
DOCX, header token benar, fallback lokal dipakai saat server 500.

## pdf-convert-settings.js (dialog penyedia)

Global: `window.__akOpenPdfConvertSettings`.

Dialog memilih rute konversi, dikelompokkan **Gratis** dan **Berbayar**:

- Gratis self-host: Render, Google Cloud Run (kuota).
- Berbayar self-host: Railway, Fly.io.
- SaaS: iLovePDF, PDF.co, Apify PDF→Word (perlu adapter format terpisah).

Penyimpanan localStorage (dibaca bridge):

| Kunci | Isi |
|-------|-----|
| `ak.pdfconv.provider` | id penyedia terpilih |
| `ak.pdfconv.endpoint` | base URL server / API; kosong = rute nonaktif |
| `ak.pdfconv.token` | Bearer token / API key |

Validasi: alamat harus HTTPS, tanpa nama pengguna/kata sandi/port di URL;
kosong diizinkan sebagai tanda rute server dinonaktifkan. Tombol ber-atribut
`data-pdfconv="settings"` membuka dialog ini; sampai bundle menambahkan tombol
tersebut, dialog bisa dipanggil dari konsol lewat global di atas.

Uji logika Node 22 (stub DOM/localStorage): 9 asersi lolos — dialog terbentuk,
http ditolak, https + kunci tersimpan, alamat kosong menandai rute nonaktif.

## pdf-reconstruct.js (inti Opsi 1)

Modul rekonstruksi offline memakai pdf.js (sudah dibundel di APK:
`pdf.worker.min-*.mjs`) untuk membaca teks per item, mengelompokkan menjadi
baris dan blok, lalu menyusun ulang:

- `renderAbsoluteHtml()` — HTML berposisi absolut yang meniru tata letak halaman;
- `buildDocxModel()` — model blok polos (paragraf + koordinat) untuk writer DOCX.

```js
import { extractItems, groupLines, groupBlocks,
         renderAbsoluteHtml, buildDocxModel } from "./pdf-reconstruct.js";

const tc = await page.getTextContent();
const blocks = groupBlocks(groupLines(extractItems(tc)));
const html   = renderAbsoluteHtml(blocks, viewport);
const model  = buildDocxModel(blocks);
```

## Status & batas

- Uji logika rekonstruksi dengan Node 22 pada teks sintetis lolos: baseline
  sebaris terbentuk, spasi antar item benar, model blok ber keluar.
- **Belum** diangkut ke alur UI bundle APK. Titik integrasi: jembatan
  `pdfApi` di `shim/android-shim.js` / `window.__genofficePdfTools`, dan
  `window.__genofficePdfConvert` untuk rute server.
- Gambar belum diekstrak; perlu jalur render halaman atau ambil objek gambar
  dari pdf.js.
- Deteksi tabel dua kolom masih heuristik; layout multi-kolom, teks melengkung,
  dan font tanpa ToUnicode bisa meleset atau kosong.
- Writer DOCX dari `model` belum dibuat; tahap ini membentuk blok dulu.

## Kapan dipakai

- **Opsi 2** lewat bridge: rute utama untuk dokumen campuran teks/tabel, bila
  server tersedia dan perangkat online.
- **Opsi 1** rekonstruksi: fallback offline ketika backend tidak bisa dijangkau,
  atau untuk dokumen sederhana. Tidak perlu server maupun unggah data keluar
  perangkat.
