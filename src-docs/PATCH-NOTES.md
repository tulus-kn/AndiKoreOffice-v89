# Patch Lanjutan Keamanan v89 — Andi Kore Office

Lanjutan dari patch tahap pertama. Overlay ini menutup celah yang belum diurus
pada `shell.js`, `ai-settings.js`, dan `ai-panel.js` (ketiganya diambil dari
aset APK v88 dan diperbaiki di tempat).

## Berkas yang diubah

| Berkas | Perubahan |
| --- | --- |
| `assets/public/shell.js` | Uji koneksi Gemini memakai header `x-goog-api-key`, bukan `?key=` di query URL; `redirect: 'error'`, `credentials: 'omit'`. Allowlist host AI sudah ada dari patch tahap pertama. |
| `assets/public/shim/ai-settings.js` | Tambah fungsi `akAllowed()` (allowlist 6 host HTTPS resmi). Saat simpan, base URL ditolak bila tidak masuk allowlist. Provider Ollama/lokal (`http://127.0.0.1:11434`) dihapus dari daftar. |
| `assets/public/shim/ai-panel.js` | Tambah `akAllowed()`; fetch menolak endpoint tak terizinkan; kunci dikirim lewat header `x-goog-api-key`, bukan query; `redirect: 'error'`, `credentials: 'omit'`. |

## Allowlist host yang diizinkan

```
generativelanguage.googleapis.com
api.openai.com
api.anthropic.com
api.groq.com
api.deepseek.com
openrouter.ai
```

Aturan tambahan: protokol `https:` saja, tanpa username/password di URL, tanpa port.
Endpoint kustom dan Ollama lokal tidak didukung pada jalur yang diperketat.

## Validasi yang sudah dijalankan

- `node --check` lolos untuk `shell.js`, `ai-settings.js`, `ai-panel.js`.
- Tidak ada lagi `:generateContent?key=` di ketiga berkas.
- Tidak ada secret literal yang tertanam di berkas patch.

## Belum selesai (perlu perubahan di level proyek/Android)

1. **Android Keystore untuk API key** — kunci masih disimpan di `localStorage`
   WebView. Perlu plugin native yang menyimpan kunci terenkripsi di Android
   Keystore; jangan lanjutkan menyimpan secret di localStorage.
2. **Storage Access Framework** — ganti `MANAGE_EXTERNAL_STORAGE`/all-files
   access dengan SAF atau scoped storage lewat picker dokumen.
3. **Release signing** — build dari proyek sumber, bukan overlay APK lama.
   Amankan keystore di GitHub Secrets/keystore terkelola; zipalign dan sign
   dengan kunci rilis yang sama agar update tidak gagal. Jangan sertakan
   `.jks`, kunci privat, password, atau API key di repo/APK.
4. **P1 lanjutan** — sanitasi XSS pada render HTML/Markdown, validasi MIME/
   ukuran/URI, perlindungan ZIP bomb, audit plugin native
   (`OpenIntentPlugin`, `PdfExportPlugin`, `SelectionMenuPlugin`), update
   dependensi rentan, pengujian perangkat dan offline.

## Audit P1 satu per satu (segmen v89, 2026-11-25)

### #7 Penyimpanan API key — sebagian ditutup di lapisan web; Keystore terblokir native
- Lokasi localStorage yang menyimpan key: `tkn_ai_key`, `tkn_ai_model`,
  `ak.ai.key`, `ak.ai.model`, `ak.ai.base`, `ak.ai.provider` di
  `shell.js`, `shim/ai-panel.js`, `shim/ai-anywhere.js`, `shim/ai-settings.js`,
  `ak-theme.js`.
- Verifikasi: nilai key **tidak** ditulis ke `console.log/warn/error`, tidak
  muncul di query URL, dan di UI ditampilkan ter-mask (`Wt()`).
- Batasan faktual: hanya plugin `@capacitor/filesystem` yang terdaftar di
  `capacitor.plugins.json`; tidak ada plugin Preferences/secure-storage.
  Enkripsi Android Keystore / EncryptedSharedPreferences sejati **tidak dapat**
  dilakukan dari lapisan overlay WebView — perlu plugin native (atau
  `@capacitor/preferences` dengan enkripsi) ditambahkan ke wrapper dan
  proyek di-recompile.
- Status: mitigasi lapisan web selesai; migrasi Keystore = item native yang
  tertunda. Jangan anggap localStorage terenkripsi.

### #8 Izin penyimpanan — `MANAGE_EXTERNAL_STORAGE` belum bisa dihapus di overlay
- Manifest terverifikasi (androguard): permission `INTERNET`,
  `MANAGE_EXTERNAL_STORAGE`, dan permission dinamis receiver milik app.
- Akses Filesystem memakai direktori `DATA`, `DOCUMENTS`, `CACHE`; alur
  buka file lewat `OpenIntentPlugin` (`pickFile`, `putFileBlob`,
  `storageAccessStatus`, `requestStorageAccess`).
- Penghapusan `MANAGE_EXTERNAL_STORAGE` tanpa pengganti akan memutus alur
  listing/akses dokumen. Migrasi ke SAF picker / scoped storage adalah
  perubahan wrapper native, bukan patch overlay.
- Status: tertunda di level proyek Android.

### #9 Sanitasi XSS — lapisan aplikasi/AI aman; bundle renderer vendor perlu review lebih dalam
- Jawaban AI di `ai-panel.js` dan `ai-anywhere.js` dirender lewat
  `textContent`, bukan `innerHTML`; markup `innerHTML` yang ada hanya string
  statis. Shell memakai helper escape `f()` untuk nama file/label dinamis.
- Sisa permukaan: 3 pemakaian `dangerouslySetInnerHTML` di bundle renderer
  vendor (docs/sheets/slides) dan `eval`/`new Function` di pustaka vendor
  terbundel (exceljs/jszip/crypto). Ini tidak ditulis ulang di overlay;
  perlu review di proyek sumber dengan sanitasi schema renderer.
- Status: sink lapisan aplikasi terverifikasi aman; review bundle = follow-up.

### #10 Audit plugin native & dependensi — inventaris selesai; scan CVE butuh build/SBOM
- Plugin native di DEX (`com.andikore.office`): `MainActivity`,
  `OpenIntentPlugin`, `PdfExportPlugin`, `SelectionMenuPlugin`; plus
  `@capacitor/filesystem`, shim Cordova, dan `CapacitorHttp` di lapisan web.
- Sumber Java plugin ini tidak ada di APK; audit kode sumber dan pemetaan CVE
  dependensi Android butuh proyek build + SBOM/dexdump. Tidak ada
  `apksigner`/`aapt2`/`dexdump` di VM ini.
- Status: inventaris selesai; audit kode sumber plugin & scan CVE DEX =
  follow-up di lingkungan build.

## Bukti kehilangan keystore rilis (2026-11-25)

- Jejak log sesi lama menunjukkan keystore rilis dibuat di sana lewat
  `keytool -genkeypair -keystore work/ak-release.jks -alias andikore`,
  DN `CN=Andi Kore Office, O=AndiKore, L=Kupang, C=ID`, RSA 2048,
  storepass/keypass `AndiKore2026`.
- Sertifikat publik hasil log: SHA256
  `1493f2d277bedf75c20749e7b2b901daddf1f73684aa46da34887d444f9f0ceb`
  — cocok dengan sertifikat yang menandatangani APK v88.
- Pencarian di VM ini: folder sesi lama sudah terhapus; tidak ada berkas
  `.jks`/`.keystore`/`.bks`/`.p12` selain `mobile/debug.keystore` (template).
  Repo `ZenOffice` tidak menyimpan keystore; CI memakai debug keystore yang
  dipin `patch-android.mjs`.
- Kunci privat tidak bisa diturunkan dari sertifikat publik v88, dan
  menjalankan ulang `keytool` dengan DN/password sama menghasilkan pasangan
  kunci berbeda (fingerprint beda), sehingga tetap tidak bisa update v88.
- **Keputusan (2026-11-25):** keystore rilis **baru** dibuat dengan identitas
  Andy Kore, karena kunci lama tidak dapat dipulihkan.
  - File: `ak-release-v89.jks`, alias `andikore`, JKS RSA 2048, SHA256withRSA.
  - DN: `CN=Andy Kore, O=AndiKore, L=Kupang, C=ID`, berlaku s/d 2054-04-12.
  - SHA256 cert: `09:63:2B:43:D6:B2:E6:EE:71:AA:64:39:79:D5:C6:01:1F:78:F3:15:8E:D2:7A:B6:63:DB:66:E7:78:6D:C1:13`.
  - Password kuat acak disimpan lokal di `ak-release-v89-CREDENTIALS.txt`
    (di luar clone repo). **Backup** file `.jks` dan password ini; jangan commit
    ke GitHub.
- Konsekuensi: sertifikat baru ≠ sertifikat v88. Instalasi v88 harus
  **uninstall dulu** sebelum install v89; Android menolak update langsung bila
  sertifikat berbeda.
- Password lama `AndiKore2026` sudah tidak dipakai lagi.

## Cara memakai overlay ini

Tempelkan berkas di `assets/public/...` pada proyek sumber sebelum build,
lakukan build ulang, zipalign, dan tanda tangani dengan kunci rilis asli.
Hasil modifikasi atas APK lama yang dihapus signature-nya **bukan** rilis
siap instal; jangan menonaktifkan pemeriksaan integritas `SigApp`.

## Perbaikan guard integritas (2026-11-26)

- Gejala: build v89 awal membekukan antarmuka dengan layar
  "Aplikasi telah dimodifikasi" dan menandai `/shell.js`,
  `/shim/ai-settings.js`, `/ak-theme.js` (lalu `/shim/ai-panel.js`,
  `/shim/ai-anywhere.js` pada cek delay).
- Penyebab: `shim/guard.js` menyimpan pin SHA-256 (di-XOR 0xa5, base64)
  untuk byte build v88. Setelah overlay patch mengubah JS, pin tidak cocok
  sehingga guard menilai berkas dimodifikasi.
- Tindakan: pin QUICK/FULL dihitung ulang dari byte build v89 aktual dan
  ditulis kembali ke `guard.js`; guard tetap aktif, hanya re-anchor ke v89.
- Verifikasi: seluruh pin cocok terhadap aset di APK final; signature
  v1/v2/v3 terverifikasi dengan sertifikat Andy Kore; `debuggable`,
  `allowBackup`, `usesCleartextTraffic` tetap nonaktif.
- SHA256 APK final: `c58194270c7d99210060b22f34ccc042cf70be43f17383b5a552831a69abdcae`.
