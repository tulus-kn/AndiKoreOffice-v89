/* Andi Kore Office — alat bantu: Ekspor PDF (pengganti cetak) + Bantuan Rumus */
(function () {
  'use strict';
  var isSheets = false;
  try { isSheets = !!window.__univerAPI || /\/sheets\//.test(location.pathname); } catch (e) {}
  var isDoc = false;
  try { isDoc = !isSheets && (/\/docs\//.test(location.pathname) || /\/slides\//.test(location.pathname)); } catch (e) {}

  function el(tag, css, txt) {
    var n = document.createElement(tag);
    if (css) n.style.cssText = css;
    if (txt != null) n.textContent = txt;
    return n;
  }
  function toast(msg, bad) {
    var t = document.getElementById('ak-tools-toast');
    if (!t) {
      t = el('div', 'position:fixed;left:12px;right:12px;bottom:20px;z-index:2147483000;background:#152a5a;color:#fff;padding:11px 14px;border-radius:12px;font:600 13px/1.4 -apple-system,Roboto,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.28);opacity:0;transition:opacity .18s');
      t.id = 'ak-tools-toast';
      document.body.appendChild(t);
    }
    t.style.background = bad ? '#8c1f1f' : '#152a5a';
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.style.opacity = '0'; }, 3600);
  }
  function b64(bytes) {
    try {
      if (window.__genofficePdfTools && window.__genofficePdfTools.toBase64) return window.__genofficePdfTools.toBase64(bytes);
    } catch (e) {}
    var s = '', arr = new Uint8Array(bytes), i;
    for (i = 0; i < arr.length; i += 4096) {
      s += String.fromCharCode.apply(null, arr.subarray(i, i + 4096));
    }
    return btoa(s);
  }

  /* ---------- kumpulkan teks dari editor ---------- */
  function docText() {
    var frame = document.querySelector('.doc-frame');
    try {
      if (frame && frame.contentDocument) {
        var body = frame.contentDocument.body;
        if (body && body.innerText && body.innerText.trim().length > 12) return body.innerText;
      }
    } catch (e) {}
    try {
      var sel = document.activeElement;
      if (sel && sel.innerText && sel.innerText.trim().length > 12) return sel.innerText;
    } catch (e) {}
    return '';
  }
  function sheetText() {
    var lines = [];
    try {
      var api = window.__univerAPI;
      var wb = api && api.getActiveWorkbook && api.getActiveWorkbook();
      var sh = wb && wb.getActiveSheet && wb.getActiveSheet();
      var rng = sh && sh.getDataRange && sh.getDataRange();
      var vals = rng && rng.getValues && rng.getValues();
      if (vals && vals.length) {
        lines.push('# ' + ((sh.getSheetName && sh.getSheetName()) || 'Sheet'));
        for (var r = 0; r < vals.length; r++) {
          var row = vals[r] || [];
          var cells = [];
          for (var c = 0; c < row.length; c++) {
            var v = row[c];
            cells.push(v == null ? '' : String(v));
          }
          if (cells.join('').trim()) lines.push(cells.join('\t'));
        }
      }
    } catch (e) {}
    return lines.join('\n');
  }

  /* ---------- PDF dari teks ---------- */
  function buildPdf(title, text) {
    var T = window.__genofficePdfTools;
    if (!T || !T.PDFDocument) return Promise.reject(new Error('Modul PDF tidak tersedia di halaman ini'));
    return T.PDFDocument.create().then(function (doc) {
      return doc.embedFont('Helvetica').then(function (font) {
        var W = 595.28, H = 841.89, M = 54, FS = 11, LH = 15.6;
        var maxW = W - M * 2;
        var lines = String(text || '').replace(/\r/g, '').split('\n');
        var page = doc.addPage([W, H]);
        var y = H - M, pageCount = 1;
        function newPage() { page = doc.addPage([W, H]); y = H - M; pageCount++; }
        function writeLine(s, size, bold) {
          if (y < M + LH) newPage();
          page.drawText(s, { x: M, y: y, size: size, font: font });
          y -= LH;
        }
        writeLine(title || 'Dokumen', 15, true);
        y -= 6;
        for (var i = 0; i < lines.length; i++) {
          var raw = lines[i].replace(/\u00a0/g, ' ');
          if (!raw.trim()) { y -= LH * 0.6; continue; }
          var words = raw.split(/\s+/), cur = '';
          for (var w = 0; w < words.length; w++) {
            var cand = cur ? cur + ' ' + words[w] : words[w];
            var wd = 0;
            try { wd = font.widthOfTextAtSize(cand, FS); } catch (e) { wd = cand.length * 5.6; }
            if (wd > maxW && cur) { writeLine(cur, FS); cur = words[w]; }
            else cur = cand;
          }
          if (cur) writeLine(cur, FS);
        }
        var foot = 'Andi Kore Office \u00b7 diekspor ' + new Date().toLocaleString('id-ID');
        page.drawText(foot, { x: M, y: M - 22, size: 8, font: font });
        return doc.save();
      });
    });
  }

  function savePdf(name, bytes) {
    var data = b64(bytes);
    var fs = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Filesystem;
    if (fs && fs.writeFile) {
      return fs.writeFile({ path: 'Ekspor/' + name, data: data, directory: 'DOCUMENTS', recursive: true })
        .then(function (r) { return 'Documents/Ekspor/' + name; })
        .catch(function () {
          return fs.writeFile({ path: name, data: data, directory: 'DATA', recursive: true })
            .then(function () { return 'data aplikasi/' + name; });
        });
    }
    return Promise.reject(new Error('Penyimpanan tidak tersedia'));
  }

  function doExport() {
    var title = (document.querySelector('.tab-title, .doc-tab-name, .ak-doc-title') || {}).textContent || 'Dokumen';
    var text = isSheets ? sheetText() : docText();
    if (!text.trim()) { toast('Tidak ada teks untuk diekspor. Buka berkas dan tunggu sampai tampil.', true); return; }
    toast('Membuat PDF\u2026');
    buildPdf(title.trim(), text).then(function (bytes) {
      var stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
      return savePdf('AndiKore-' + stamp + '.pdf', bytes).then(function (where) {
        toast('PDF disimpan: ' + where + ' \u2014 buka File Manager lalu cetak/bagikan dari sana.');
      });
    }).catch(function (e) {
      toast('Gagal membuat PDF: ' + (e && e.message ? e.message : e), true);
    });
  }

  /* ---------- Bantuan Rumus (Spreadsheet) ---------- */
  var FORMULAS = [
    { f: '=SUM(A1:A10)', d: 'Menjumlahkan rentang' },
    { f: '=AVERAGE(B2:B20)', d: 'Rata-rata' },
    { f: '=IF(C2>60;"Lulus";"Tidak")', d: 'Kondisi sederhana' },
    { f: '=COUNTIF(D2:D50;">0")', d: 'Menghitung yang memenuhi syarat' },
    { f: '=SUMIF(E2:E50;"Jakarta";F2:F50)', d: 'Jumlah dengan syarat' },
    { f: '=VLOOKUP(A2;$H$2:$K$40;3;FALSE)', d: 'Mencari nilai dari tabel lain' },
    { f: '=ROUND(G2;2)', d: 'Membulatkan 2 desimal' },
    { f: '=TEXT(H2;"dd/mm/yyyy")', d: 'Format tanggal' },
    { f: '=CONCATENATE(A2;" - ";B2)', d: 'Menggabung teks' },
    { f: '=TERBILANG(I2)', d: 'Angka menjadi kata (Indonesia)' }
  ];
  var KNOWN = ('SUM AVERAGE MIN MAX COUNT COUNTA COUNTIF COUNTIFS SUMIF SUMIFS IF IFS AND OR NOT ROUND ROUNDUP ROUNDDOWN ABS ' +
    'VLOOKUP HLOOKUP INDEX MATCH TEXT CONCATENATE CONCAT LEFT RIGHT MID LEN TRIM UPPER LOWER PROPER SUBSTITUTE ' +
    'TODAY NOW DATE YEAR MONTH DAY HOUR MINUTE SUM SQRT POWER IFERROR IFNA UNIQUE FILTER XLOOKUP SORT ' +
    'STDEV VAR MEDIAN MODE SUMPRODUCT RANK LARGE SMALL TERBILANG').split(' ');

  function checkFormula(src) {
    var out = [];
    var f = String(src || '').trim();
    if (!f) return ['Tulis rumus dulu, mis. =SUM(A1:A10)'];
    if (f[0] !== '=') out.push('Rumus harus dimulai dengan tanda =.');
    var depth = 0, q = false;
    for (var i = 1; i < f.length; i++) {
      var ch = f[i];
      if (ch === '"') q = !q;
      if (q) continue;
      if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (depth < 0) { out.push('Tanda ) berlebih di posisi ' + (i + 1) + '.'); depth = 0; } }
    }
    if (q) out.push('Tanda kutip ganda belum ditutup.');
    if (depth > 0) out.push('Kurang ' + depth + ' tanda ) penutup.');
    var fn = f.match(/^=\s*([A-Z][A-Z0-9.]*)\s*\(/i);
    if (fn) {
      var name = fn[1].toUpperCase();
      if (KNOWN.indexOf(name) < 0) out.push('Fungsi ' + name + ' tidak dikenali \u2014 cek ejaan (mis. VLOOKUP, SUMIF).');
    }
    if (/;\s*;/.test(f)) out.push('Ada argumen kosong (dua titik koma berurutan).');
    if (/,\s*[A-Z]{2,}\d/.test(f) && out.length === 0) out.push('Catatan: di aplikasi ini pemisah argumen sebaiknya titik koma ( ; ), bukan koma.');
    if (!out.length) out.push('Struktur rumus terbaca baik.');
    return out;
  }

  function insertFormula(f) {
    try {
      var api = window.__univerAPI;
      var wb = api && api.getActiveWorkbook && api.getActiveWorkbook();
      var sh = wb && wb.getActiveSheet && wb.getActiveSheet();
      var rng = sh && sh.getActiveRange && sh.getActiveRange();
      if (rng && rng.setValue) { rng.setValue(f); toast('Rumus dimasukkan ke sel aktif.'); return; }
    } catch (e) {}
    toast('Tidak bisa menulis: sel aktif tidak ditemukan.', true);
  }

  function openFormulaPanel() {
    var old = document.getElementById('ak-rumus-panel');
    if (old) { old.remove(); return; }
    var p = el('div', 'position:fixed;right:10px;left:10px;bottom:14px;z-index:2147482999;max-height:66vh;overflow:auto;background:#fff;border:1px solid #d6dee9;border-radius:16px;padding:14px;box-shadow:0 12px 40px rgba(9,18,40,.3);font:500 13px/1.45 -apple-system,Roboto,sans-serif;color:#152a5a');
    p.id = 'ak-rumus-panel';
    var h = el('div', 'display:flex;align-items:center;gap:8px;margin-bottom:10px');
    h.innerHTML = '<b style="flex:1;font-size:14px">Bantuan Rumus</b>';
    var x = el('button', 'border:0;background:#eef2f8;border-radius:999px;width:28px;height:28px;font:700 15px/1 inherit;color:#152a5a', '\u00d7');
    x.addEventListener('click', function () { p.remove(); });
    h.appendChild(x);
    p.appendChild(h);
    var inp = el('textarea', 'width:100%;box-sizing:border-box;min-height:52px;border:1px solid #d6dee9;border-radius:10px;padding:9px;font:600 13px/1.4 ui-monospace,monospace;color:#101828;background:#fff');
    inp.placeholder = '=SUM(A1:A10)';
    inp.value = '=SUM(A1:A10)';
    var res = el('div', 'margin:8px 0;padding:9px 11px;border-radius:10px;background:#f4f7fb;color:#2b3a55;font-size:12.5px;white-space:pre-wrap');
    var btns = el('div', 'display:flex;gap:8px;margin-bottom:10px');
    var chk = el('button', 'flex:1;border:0;border-radius:10px;padding:10px;background:#2A4BFF;color:#fff;font:700 12.5px/1 inherit', 'Periksa');
    var ins = el('button', 'flex:1;border:1px solid #d6dee9;border-radius:10px;padding:10px;background:#fff;color:#152a5a;font:700 12.5px/1 inherit', 'Tulis ke sel aktif');
    btns.appendChild(chk); btns.appendChild(ins);
    chk.addEventListener('click', function () { res.textContent = checkFormula(inp.value).join('\n'); });
    ins.addEventListener('click', function () { insertFormula(inp.value.trim()); });
    p.appendChild(inp); p.appendChild(btns); p.appendChild(res);
    var title = el('div', 'font:700 12.5px/1 inherit;color:#5a6b86;margin:6px 0 8px', 'Contoh rumus \u2014 ketuk untuk mencoba');
    p.appendChild(title);
    FORMULAS.forEach(function (it) {
      var row = el('button', 'display:block;width:100%;text-align:left;border:1px solid #e3e8f1;border-radius:10px;padding:9px 10px;margin-bottom:7px;background:#fbfcfe;color:#152a5a');
      row.innerHTML = '<div style="font:700 12.5px/1.3 ui-monospace,monospace">' + it.f.replace(/</g, '&lt;') + '</div><div style="font-size:11.5px;color:#66748a;margin-top:3px">' + it.d + '</div>';
      row.addEventListener('click', function () { inp.value = it.f; res.textContent = checkFormula(it.f).join('\n'); });
      p.appendChild(row);
    });
    document.body.appendChild(p);
    res.textContent = checkFormula(inp.value).join('\n');
  }

  /* ---------- tombol melambung ---------- */
  function makeFab(id, bottom, label, tip, onClick) {
    var b = el('button', 'position:fixed;right:14px;bottom:' + bottom + 'px;z-index:2147482998;width:46px;height:46px;border-radius:50%;border:0;background:#152a5a;color:#fff;font:800 12px/1 -apple-system,Roboto,sans-serif;box-shadow:0 6px 18px rgba(9,18,40,.28)', label);
    b.id = id; b.title = tip; b.type = 'button';
    b.addEventListener('click', onClick);
    document.body.appendChild(b);
    return b;
  }

  function makePdfFab() {
    var b = el('button', 'position:fixed;left:50%;transform:translateX(-50%);bottom:96px;z-index:2147482998;height:46px;padding:0 20px;border-radius:23px;border:0;background:#152a5a;color:#fff;font:800 13px/1 -apple-system,Roboto,sans-serif;box-shadow:0 6px 18px rgba(9,18,40,.28)', 'PDF');
    b.id = 'ak-tools-fab';
    b.type = 'button';
    b.title = 'Ekspor PDF (pengganti cetak)';
    b.addEventListener('click', doExport);
    document.body.appendChild(b);
  }

  /* jangan menutupi kotak catatan/komentar: naikkan tombol bila bertabrakan */
  function keepClear() {
    var teks = [];
    var nodes = document.querySelectorAll('textarea, input[type="text"]');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!n.getClientRects().length) continue;
      var r = n.getBoundingClientRect();
      if (r.height < 18 || r.bottom > window.innerHeight + 4) continue;
      teks.push(r);
    }
    var batas = null;
    for (var j = 0; j < teks.length; j++) {
      if (teks[j].top > window.innerHeight * 0.45) {
        batas = batas === null ? teks[j].top : Math.min(batas, teks[j].top);
      }
    }
    var daftar = [
      { el: document.getElementById('ak-tools-fab'), base: 96 },
      { el: document.getElementById('ak-rumus-fab'), base: 208 },
      { el: document.querySelector('.zen-ai-fab'), base: 96 }
    ];
    for (var k = 0; k < daftar.length; k++) {
      var it = daftar[k];
      if (!it.el) continue;
      var mau = it.base;
      if (batas !== null) {
        var naik = window.innerHeight - batas + 12;
        if (naik > mau) mau = naik;
      }
      it.el.style.bottom = mau + 'px';
    }
  }

  function boot() {
    var lama = document.getElementById('ak-tools-fab');
    if (lama && lama.style.left !== '50%') lama.remove();
    if (document.getElementById('ak-tools-fab')) return;
    if (!(isDoc || isSheets)) return;
    makePdfFab();
    if (isSheets) makeFab('ak-rumus-fab', 208, '\u0192x', 'Bantuan Rumus', openFormulaPanel);
  }

  window.__akExportPdf = doExport;
  window.__akCheckFormula = checkFormula;
  if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(boot, 400);
  else document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 400); });
  setInterval(boot, 2500);
  setInterval(keepClear, 700);
  document.addEventListener('focusin', keepClear);
  document.addEventListener('focusout', function () { setTimeout(keepClear, 120); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) boot(); });
})();
