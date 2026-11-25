/**
 * Opsi 1 — Rekonstruksi tata letak PDF di sisi aplikasi (JS, offline).
 *
 * Prototipe memakai pdf.js (sudah ada di bundle aplikasi: pdf.worker.min-*.mjs)
 * untuk membaca teks per blok/baris beserta koordinat, lalu menyusun ulang:
 *   - HTML berposisi absolut (tampilan mendekati PDF), atau
 *   - model blok polos (JSON) yang nanti ditulis ke DOCX oleh writer dokumen.
 *
 * Catatan batas:
 *   - Ekstraksi gambar dari pdf.js tidak disertakan di prototipe ini; gambar
 *     diambil lewat jalur render halaman / assets terpisah bila perlu.
 *   - Pengelompokan tabel dua kolom masih heuristik; layout multi-kolom rumit
 *     dan teks melengkung bisa meleset.
 *   - Modul ini belum di-angkut ke bundle; titik integrasi ada di
 *     window.__genofficePdfTools / bridge pdfApi di android-shim.js.
 */

const Y_TOLERANCE = 2.5;       // pt, toleransi baseline sebaris
const LINE_GAP_RATIO = 0.6;    // rasio tinggi baris untuk memisah paragraf

/**
 * Ambil item teks per halaman dari pdf.js page.getTextContent().
 * @param {object} textContent hasil page.getTextContent()
 * @returns {Array<{text:string,x:number,y:number,height:number,fontName:string}>}
 */
export function extractItems(textContent) {
  return (textContent.items || [])
    .filter((it) => typeof it.str === "string")
    .map((it) => ({
      text: it.str,
      x: it.transform[4],
      y: it.transform[5],
      height: it.height || 0,
      fontName: it.fontName || "",
    }));
}

/**
 * Kelompokkan item menjadi baris berdasarkan baseline (koordinat y).
 */
export function groupLines(items) {
  const byY = new Map();
  for (const it of items) {
    let bucket = [...byY.values()].find((b) => Math.abs(b.y - it.y) <= Y_TOLERANCE);
    if (!bucket) {
      bucket = { y: it.y, items: [] };
      byY.set(bucket.y, bucket);
    }
    bucket.items.push(it);
  }
  return [...byY.values()]
    .map((b) => {
      const sorted = b.items.slice().sort((a, z) => a.x - z.x);
      const text = sorted
        .reduce((acc, s, i) => {
          if (i === 0) return s.text;
          const sep = /\s$/.test(acc) || /^\s/.test(s.text) ? "" : " ";
          return acc + sep + s.text;
        }, "")
        .replace(/\s+/g, " ")
        .trim();
      const height = Math.max(...sorted.map((s) => s.height), 0);
      return {
        y: b.y,
        x: sorted[0]?.x ?? 0,
        height,
        text,
        fontName: sorted[0]?.fontName || "",
      };
    })
    .filter((l) => l.text)
    .sort((a, z) => z.y - a.y || a.x - z.x); // koordinat PDF: y naik ke atas
}

/**
 * Gabungkan baris jadi blok/paragraf berdasarkan jarak vertikal dan
 * tumpang tindih sumbu-x.
 */
export function groupBlocks(lines) {
  const blocks = [];
  let current = null;
  for (const line of lines) {
    if (!current) {
      current = { lines: [line], y: line.y, x: line.x };
      continue;
    }
    const gap = current.lines[0].height || line.height || 10;
    const dy = Math.abs(current.y - line.y);
    const sameColumn = Math.abs(current.x - line.x) < 20;
    if (dy <= gap * LINE_GAP_RATIO && sameColumn) {
      current.lines.push(line);
      current.y = line.y;
    } else {
      blocks.push(current);
      current = { lines: [line], y: line.y, x: line.x };
    }
  }
  if (current) blocks.push(current);
  return blocks.map((b) => ({
    x: b.x,
    y: b.lines[b.lines.length - 1].y,
    text: b.lines.map((l) => l.text).join(" "),
    lines: b.lines,
  }));
}

/**
 * Bangun HTML berposisi absolut yang meniru tata letak halaman.
 * @param {Array} blocks hasil groupBlocks()
 * @param {{width:number,height:number}} pageSize ukuran halaman dalam pt
 */
export function renderAbsoluteHtml(blocks, pageSize) {
  const lines = blocks.flatMap((b) => b.lines);
  const maxH = Math.max(...lines.map((l) => l.height), 10);
  const style =
    "position:relative;overflow:hidden;background:#fff;" +
    `width:${pageSize.width}pt;height:${pageSize.height}pt;font-family:Carlito, sans-serif;`;
  const parts = lines.map((l) => {
    const fontSize = (l.height || maxH) * 0.9;
    return (
      `<div style="position:absolute;left:${l.x}pt;top:${pageSize.height - l.y}pt;` +
      `font-size:${fontSize}pt;line-height:1.2;">${escapeHtml(l.text)}</div>`
    );
  });
  return `<div style="${style}">${parts.join("")}</div>`;
}

/**
 * Model blok polos untuk writer DOCX (paragraf + teks).
 * Tabel dua kolom dideteksi heuristik oleh writer di tahap lanjut.
 */
export function buildDocxModel(blocks) {
  return {
    paragraphs: blocks.map((b) => ({
      text: b.text,
      x: Math.round(b.x * 10) / 10,
      y: Math.round(b.y * 10) / 10,
      lineCount: b.lines.length,
    })),
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Contoh alur pemakaian bila objek pdf.js halaman sudah tersedia:
 *
 *   const tc = await page.getTextContent();
 *   const blocks = groupBlocks(groupLines(extractItems(tc)));
 *   const html = renderAbsoluteHtml(blocks, viewport);
 *   const model = buildDocxModel(blocks);
 */
