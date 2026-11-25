"""
Kerangka generik rebuild dokumen (Opsi 3) — contoh dengan data dummy.

Jangan menaruh nama, foto, email, atau nomor pribadi asli di repo ini.
Ganti DATA dengan hasil ekstraksi dari PDF sumber pada implementasi nyata,
dan atur tata letak sesuai jenis dokumen.
"""

import os
from docx import Document
from docx.shared import Pt, Inches

BASE = os.path.dirname(os.path.abspath(__file__))

# Data dummy — ganti dengan field hasil ekstraksi PDF.
DATA = {
    "nama": "Contoh Nama",
    "kontak": "kontak@contoh.test | 08xx-xxxx-xxxx",
    "foto": "",  # path foto lokal; jangan commit foto pribadi
    "judul": "Contoh Jabatan",
    "data_pribadi": [
        ("Tempat, Tanggal Lahir", "Kota, 1 Januari 1990"),
        ("Email", "kontak@contoh.test"),
    ],
    "pendidikan": [
        ("2010 – 2014", "Nama Universitas", "Jurusan Contoh"),
    ],
    "pengalaman": [
        ("2015 – Sekarang", "Nama Perusahaan", "Jabatan Contoh"),
    ],
}


def build(out_path: str) -> Document:
    doc = Document()

    # Judul / identitas
    h = doc.add_paragraph()
    h.add_run(DATA["nama"]).bold = True
    h.add_run(f"  — {DATA['judul']}")
    doc.add_paragraph(DATA["kontak"])

    if DATA["foto"] and os.path.exists(DATA["foto"]):
        doc.add_picture(DATA["foto"], width=Inches(1.2))

    # Bagian: data pribadi (tabel dua kolom)
    doc.add_paragraph("Data Pribadi").bold = True
    table = doc.add_table(rows=0, cols=2)
    for label, nilai in DATA["data_pribadi"]:
        row = table.add_row().cells
        row[0].text = label
        row[1].text = nilai

    # Bagian lain
    doc.add_paragraph("Pendidikan").bold = True
    for tahun, sekolah, jurusan in DATA["pendidikan"]:
        doc.add_paragraph(f"{tahun} — {sekolah}, {jurusan}", style="List Bullet")

    doc.add_paragraph("Pengalaman").bold = True
    for tahun, perusahaan, jabatan in DATA["pengalaman"]:
        doc.add_paragraph(f"{tahun} — {perusahaan}, {jabatan}", style="List Bullet")

    doc.save(out_path)
    return doc


if __name__ == "__main__":
    build(os.path.join(BASE, "contoh-hasil.docx"))
