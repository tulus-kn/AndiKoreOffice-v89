# AndiKoreOffice-v89

Rilisan Android **Andi Kore Office 3 Plus v89** (package `com.andikore.office`),
dengan patch keamanan P1 dari audit v88.

## Berkas rilis

| Berkas | Keterangan |
| --- | --- |
| `releases/android/Andi-Kore-Office-3-Plus-v89.apk` | APK ter-signed (v1/v2/v3), zipalign |
| `src/assets/public/` | Aset web/JS yang terbungkus APK (shell, shim, render) |
| `src-docs/PATCH-NOTES.md` | Catatan patch, audit P1, dan item yang masih tertunda |

## Identitas signing

- Keystore rilis baru: **CN=Andy Kore, O=AndiKore, L=Kupang, C=ID**
- SHA256 sertifikat:
  `09:63:2B:43:D6:B2:E6:EE:71:AA:64:39:79:D5:C6:01:1F:78:F3:15:8E:D2:7A:B6:63:DB:66:E7:78:6D:C1:13`

> Catatan: sertifikat ini **berbeda** dari build v88. Instalasi v88 yang sudah
> ada harus di-uninstall dulu sebelum memasang v89; Android menolak update
> langsung bila sertifikat berbeda.

## Keamanan

- Kunci API tidak lagi diletakkan di query URL; dikirim lewat header pada
  endpoint HTTPS resmi yang ada di allowlist.
- `usesCleartextTraffic=false`, `debuggable=false`, `allowBackup=false`.
- Kunci rilis (`.jks`) dan password **tidak** disimpan di repo ini.

## Status

Build ini dirakit dari overlay APK v88 dan ditandatangani keystore rilis baru.
Sebelum distribusi luas, lakukan uji perangkat nyata (buka/tutup dokumen,
panel AI, mode offline). Item native yang masih tertunda tercantum di
`src-docs/PATCH-NOTES.md`.
