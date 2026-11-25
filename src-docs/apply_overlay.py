#!/usr/bin/env python3
"""Tempelkan berkas overlay ke ekstraksi APK (folder assets/...).
Pemakaian: python3 apply_overlay.py <folder-ekstraksi-apk>
Tidak menandatangani APK. Build/sign rilis dilakukan dari proyek sumber.
"""
import pathlib, sys, shutil, hashlib

root = pathlib.Path(__file__).parent
overlay = root / "overlay"

if len(sys.argv) != 2:
    print(__doc__); sys.exit(1)
target = pathlib.Path(sys.argv[1])
if not (target / "assets").is_dir():
    print("Folder target tidak terlihat seperti ekstraksi APK (tidak ada assets/)."); sys.exit(1)

copied = []
for src in overlay.rglob("*"):
    if src.is_dir():
        continue
    rel = src.relative_to(overlay)
    dst = target / rel
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    copied.append(str(rel))

for c in copied:
    print("OK  ", c)
print(f"\n{len(copied)} berkas ditempelkan ke {target}")
print("Catatan: ini overlay sumber; lakukan build ulang, zipalign, dan signing rilis terpisah.")
