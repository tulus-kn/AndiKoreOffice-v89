# Opsi 1 — Edit via rekonstruksi di app (JS, offline)

Rute pertama saat pengguna mau mengedit PDF **tanpa unggah ke server**. Modul
`pdf-reconstruct.js` memakai pdf.js (sudah dibundel di APK:
`pdf.worker.min-*.mjs`) untuk membaca teks per item, mengelompokkannya menjadi
baris dan blok, lalu menyusun ulang:

- `renderAbsoluteHtml()` — HTML berposisi absolut yang meniru tata letak halaman,
  sebagai dasar tampilan editable di app;
- `buildDocxModel()` — model blok polos (paragraf + koordinat) untuk writer DOCX.

## Alur saat dipilih

```js
import { extractItems, groupLines, groupBlocks,
         renderAbsoluteHtml, buildDocxModel } from "./pdf-reconstruct.js";

const tc = await page.getTextContent();
const blocks = groupBlocks(groupLines(extractItems(tc)));
const html   = renderAbsoluteHtml(blocks, viewport);
const model  = buildDocxModel(blocks);
```

## Status & batas

- Uji logika dengan Node 22 pada teks sintetis lolos: baseline sebaris terbentuk,
  spasi antar item benar, model blok ber keluar.
- **Belum** diangkut ke bundle APK. Titik integrasi: jembatan `pdfApi` di
  `shim/android-shim.js` / `window.__genofficePdfTools`.
- Gambar belum diekstrak; perlu jalur render halaman atau ambil objek gambar
  dari pdf.js.
- Deteksi tabel dua kolom masih heuristik (celah vertikal + tumpang tindih x);
  layout multi-kolom, teks melengkung, dan font yang tidak punya ToUnicode bisa
  meleset atau kosong.
- Writer DOCX dari `model` belum dibuat; tahap ini membentuk blok dulu.

## Kapan dipakai

Fallback offline ketika backend Opsi 2 tidak bisa dijangkau, atau untuk dokumen
sederhana. Hasilnya tidak sepresisi backend untuk dokumen kompleks, tapi tidak
perlu server maupun unggah data keluar perangkat.
