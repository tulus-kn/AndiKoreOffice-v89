/* Andi Kore Office — Pustaka Makro untuk Sheets
   Menjalankan operasi bergaya makro Excel langsung di HP (tanpa VBA, tanpa internet).
   Pola diadaptasi dari contoh makro VBA publik berlisensi MIT (mis. Marius-Dragan/VBA-CODE:
   CaseChange, MergeMultipleCellsIntoOne, SplitStringInMultipleCells, SortActiveSheets),
   ditulis ulang untuk mesin Sheets di aplikasi ini. */
(function () {
  'use strict';
  if (window.__akMakro) return;
  window.__akMakro = true;

  function api() {
    var a = window.__univerAPI;
    if (!a || !a.getActiveWorkbook) return null;
    var wb = a.getActiveWorkbook();
    return wb || null;
  }

  function pilih() {
    var wb = api();
    if (!wb) return { ok: false, error: 'Sheets belum siap. Buka berkas Spreadsheet dulu.' };
    var sheet = wb.getActiveSheet();
    if (!sheet) return { ok: false, error: 'Tidak ada lembar aktif.' };
    var sel = sheet.getSelection && sheet.getSelection();
    var r = sel && sel.getActiveRange && sel.getActiveRange();
    if (!r || !r.getValues) return { ok: false, error: 'Blok dulu sel yang mau diolah.' };
    var v = r.getValues();
    if (!v || !v.length || !v[0]) return { ok: false, error: 'Blok yang dipilih kosong.' };
    var awal = r.getRange ? r.getRange() : null;
    var pos = (awal && awal.startRow != null) ? { row: awal.startRow, col: awal.startColumn } : null;
    if (!pos && r.getRow) pos = { row: r.getRow(), col: r.getColumn() };
    return { ok: true, sheet: sheet, values: v, range: r, pos: pos };
  }

  function tulis(sheet, row, col, values) {
    var r = sheet.getRange(row, col, values.length, values[0].length);
    if (r && r.setValues) { r.setValues(values); return true; }
    return false;
  }

  function teks(v) { return v == null ? '' : String(v); }

  /* ---------- operasi ---------- */
  var OPS = [
    {
      id: 'upper', t: 'Huruf jadi BESAR', d: 'Ubah seluruh teks di blok terpilih menjadi huruf besar.',
      run: function (s) {
        var n = 0;
        var v = s.values.map(function (row) {
          return row.map(function (c) { if (typeof c === 'string' && c) n++; return typeof c === 'string' ? c.toUpperCase() : c; });
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 ' + n + ' sel diubah ke huruf besar.';
      }
    },
    {
      id: 'lower', t: 'Huruf jadi kecil', d: 'Ubah seluruh teks di blok terpilih menjadi huruf kecil.',
      run: function (s) {
        var n = 0;
        var v = s.values.map(function (row) {
          return row.map(function (c) { if (typeof c === 'string' && c) n++; return typeof c === 'string' ? c.toLowerCase() : c; });
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 ' + n + ' sel diubah ke huruf kecil.';
      }
    },
    {
      id: 'proper', t: 'Huruf Awal Besar', d: 'Jadikan setiap kata berawalan huruf besar (seperti PROPER di Excel).',
      run: function (s) {
        var n = 0;
        var v = s.values.map(function (row) {
          return row.map(function (c) {
            if (typeof c !== 'string' || !c) return c;
            n++;
            return c.toLowerCase().replace(/(^|[\s\-\/\.(])([a-z\u00e0-\u00ff])/g, function (m, a, b) { return a + b.toUpperCase(); });
          });
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 ' + n + ' sel dirapikan kapitalisasinya.';
      }
    },
    {
      id: 'trim', t: 'Rapikan spasi', d: 'Hapus spasi berlebih di awal/akhir dan spasi ganda di tengah teks.',
      run: function (s) {
        var n = 0;
        var v = s.values.map(function (row) {
          return row.map(function (c) {
            if (typeof c !== 'string') return c;
            var t = c.replace(/\s+/g, ' ').trim();
            if (t !== c) n++;
            return t;
          });
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 ' + n + ' sel dirapikan spasinya.';
      }
    },
    {
      id: 'urut', t: 'Urutkan naik', d: 'Urutkan baris blok terpilih menurut kolom pertama (angka dulu, lalu teks).',
      run: function (s) {
        var asli = s.values.slice();
        var v = s.values.slice().sort(function (a, b) {
          var x = a[0], y = b[0];
          var nx = typeof x === 'number', ny = typeof y === 'number';
          if (nx && ny) return x - y;
          if (nx) return -1;
          if (ny) return 1;
          return teks(x).localeCompare(teks(y), 'id');
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        var sama = asli.every(function (r, i) { return teks(r[0]) === teks(v[i][0]); });
        return sama ? 'Blok sudah urut dari awal \u2014 tidak ada yang berubah.' : 'Selesai \u2014 ' + v.length + ' baris diurutkan menurut kolom pertama.';
      }
    },
    {
      id: 'transpose', t: 'Tukar baris & kolom', d: 'Putar blok terpilih: baris jadi kolom, kolom jadi baris (di tempat yang sama).',
      run: function (s) {
        var baris = s.values.length, kolom = s.values[0].length;
        if (baris * kolom > 4000) return 'Blok terlalu besar (maks 4.000 sel) \u2014 putar blok lebih kecil.';
        var v = [];
        for (var c = 0; c < kolom; c++) {
          var row = [];
          for (var r = 0; r < baris; r++) row.push(s.values[r][c]);
          v.push(row);
        }
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 blok ' + baris + '\u00d7' + kolom + ' diputar menjadi ' + kolom + '\u00d7' + baris + '.';
      }
    },
    {
      id: 'gabung', t: 'Gabung sel jadi satu', d: 'Gabungkan seluruh isi blok menjadi satu teks, dipisah koma, ditulis di sel pertama.',
      run: function (s) {
        var bagian = [];
        s.values.forEach(function (row) {
          row.forEach(function (c) { var t = teks(c).trim(); if (t) bagian.push(t); });
        });
        if (!bagian.length) return 'Blok itu tidak berisi teks apa pun.';
        tulis(s.sheet, s.pos.row, s.pos.col, [[bagian.join(', ')]]);
        return 'Selesai \u2014 ' + bagian.length + ' isi digabung ke sel pertama blok.';
      }
    },
    {
      id: 'pisah', t: 'Pisah teks ke sel', d: 'Pisahkan teks di sel pertama blok menurut koma/titik koma, tulis ke kanan.',
      run: function (s) {
        var sumber = teks(s.values[0][0]).trim();
        if (!sumber) return 'Sel pertama blok kosong \u2014 tidak ada yang bisa dipisah.';
        var bagian = sumber.split(/[,;]\s*/).filter(function (x) { return x.trim(); });
        if (bagian.length < 2) return 'Tidak ada pemisah koma/titik koma di sel pertama.';
        tulis(s.sheet, s.pos.row, s.pos.col, [bagian]);
        return 'Selesai \u2014 teks dipisah menjadi ' + bagian.length + ' sel (ke kanan).';
      }
    },
    {
      id: 'nomor', t: 'Isi nomor urut', d: 'Isi 1, 2, 3, \u2026 dari atas ke bawah di kolom terpilih (menimpa isi kolom itu).',
      run: function (s) {
        var v = s.values.map(function (row, i) { return [i + 1]; });
        var c = [];
        v.forEach(function (r) { c.push(r[0]); });
        tulis(s.sheet, s.pos.row, s.pos.col, c.map(function (n) { return [n]; }));
        return 'Selesai \u2014 nomor 1 sampai ' + c.length + ' terisi di kolom itu.';
      }
    },
    {
      id: 'teksangka', t: 'Teks jadi angka', d: 'Ubah teks angka (1.234,5 / 12,5 / Rp 900) menjadi angka asli agar bisa dihitung.',
      run: function (s) {
        var n = 0, lewat = 0;
        var v = s.values.map(function (row) {
          return row.map(function (c) {
            if (typeof c === 'number') return c;
            if (typeof c !== 'string') return c;
            var t = c.trim().replace(/^rp\.?\s*/i, '').replace(/%$/, '');
            if (!t) return c;
            var angka = null;
            if (/^[-+]?[0-9]{1,3}(\.[0-9]{3})+(,[0-9]+)?$/.test(t)) angka = Number(t.replace(/\./g, '').replace(',', '.'));
            else if (/^[-+]?[0-9]+(,[0-9]+)?$/.test(t)) angka = Number(t.replace(',', '.'));
            else if (/^[-+]?[0-9]+(\.[0-9]+)?$/.test(t)) angka = Number(t);
            if (angka === null || !isFinite(angka)) { lewat++; return c; }
            n++;
            return angka;
          });
        });
        tulis(s.sheet, s.pos.row, s.pos.col, v);
        return 'Selesai \u2014 ' + n + ' teks diubah menjadi angka' + (lewat ? ', ' + lewat + ' sel dilewati (bukan angka).' : '.');
      }
    },
    {
      id: 'dedup', t: 'Hapus baris kembar', d: 'Buang baris yang isinya sama persis dengan baris di atasnya (baris pertama dipertahankan).',
      run: function (s) {
        var kunci = {}, unik = [], buang = 0;
        s.values.forEach(function (row) {
          var k = row.map(function (c) { return teks(c).trim().toLowerCase(); }).join('\u0001');
          if (kunci[k]) { buang++; return; }
          kunci[k] = 1; unik.push(row);
        });
        if (!buang) return 'Tidak ada baris kembar di blok itu.';
        tulis(s.sheet, s.pos.row, s.pos.col, unik);
        var kosong = [];
        for (var i = 0; i < buang; i++) kosong.push(s.values[0].map(function () { return ''; }));
        tulis(s.sheet, s.pos.row + unik.length, s.pos.col, kosong);
        return 'Selesai \u2014 ' + buang + ' baris kembar dibuang; ' + unik.length + ' baris tersisa, sisa di bawahnya dikosongkan.';
      }
    },
    {
      id: 'dup', t: 'Cari duplikat', d: 'Laporkan nilai yang muncul lebih dari sekali di blok terpilih (tidak mengubah data).',
      run: function (s) {
        var hitung = {}, urut = [];
        s.values.forEach(function (row) {
          row.forEach(function (c) {
            var t = teks(c).trim();
            if (!t) return;
            var k = t.toLowerCase();
            if (!hitung[k]) { hitung[k] = { t: t, n: 0 }; urut.push(k); }
            hitung[k].n++;
          });
        });
        var dup = urut.filter(function (k) { return hitung[k].n > 1; });
        if (!dup.length) return 'Tidak ada duplikat di blok itu \u2014 semua nilai berbeda.';
        var d = dup.slice(0, 12).map(function (k) { return '\u2022 ' + hitung[k].t + ' (' + hitung[k].n + 'x)'; }).join('\n');
        return 'Ditemukan ' + dup.length + ' nilai berulang:\n' + d + (dup.length > 12 ? '\n\u2026 dan ' + (dup.length - 12) + ' lainnya' : '') + '\n\nData tidak diubah.';
      }
    }
  ];

  /* ---------- panel ---------- */
  function panel() {
    var lama = document.getElementById('ak-makro-sheet');
    if (lama) lama.parentNode.removeChild(lama);
    var wrap = document.createElement('div');
    wrap.id = 'ak-makro-sheet';
    wrap.style.cssText = 'position:fixed;inset:0;background:rgba(12,18,28,.55);z-index:2147483000;display:flex;align-items:flex-end';
    var box = document.createElement('div');
    box.style.cssText = 'width:100%;max-height:86vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:14px 14px 20px';

    var head = document.createElement('div');
    head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:4px';
    var h = document.createElement('div');
    h.style.cssText = 'font:700 15px/1.3 inherit;color:#16233a';
    h.textContent = 'Pustaka Makro';
    var x = document.createElement('button');
    x.type = 'button'; x.textContent = 'Tutup';
    x.style.cssText = 'border:0;background:#eef2f8;border-radius:10px;padding:8px 12px;font:600 12.5px/1 inherit;color:#33425c';
    head.appendChild(h); head.appendChild(x);

    var sub = document.createElement('div');
    sub.style.cssText = 'font-size:12px;color:#5a6b84;line-height:1.45;margin-bottom:10px';
    sub.textContent = 'Blok dulu selnya, lalu ketuk satu makro. Semua dijalankan di HP ini \u2014 tanpa internet.';

    var out = document.createElement('div');
    out.style.cssText = 'display:none;white-space:pre-wrap;background:#f6f8fc;border:1px solid #e5e9f0;border-radius:12px;padding:10px;font-size:12.5px;color:#243043;margin-bottom:10px';

    var list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:8px';

    OPS.forEach(function (op) {
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:10px;align-items:flex-start;border:1px solid #e5e9f0;border-radius:12px;padding:10px;background:#fafbfe';
      var main = document.createElement('div');
      main.style.cssText = 'flex:1;min-width:0';
      var t = document.createElement('div');
      t.style.cssText = 'font:700 13px/1.3 inherit;color:#16233a;margin-bottom:3px';
      t.textContent = op.t;
      var d = document.createElement('div');
      d.style.cssText = 'font-size:12px;color:#5a6b84;line-height:1.45';
      d.textContent = op.d;
      main.appendChild(t); main.appendChild(d);
      var go = document.createElement('button');
      go.type = 'button'; go.textContent = 'Jalankan';
      go.style.cssText = 'flex:0 0 auto;border:0;border-radius:10px;padding:9px 12px;background:#2A4BFF;color:#fff;font:700 12.5px/1 inherit';
      go.addEventListener('click', function () {
        out.style.display = 'block';
        var s = pilih();
        if (!s.ok) { out.textContent = s.error; return; }
        try {
          out.textContent = op.run(s);
        } catch (e) {
          out.textContent = 'Gagal: ' + (e && e.message ? e.message : e);
        }
      });
      row.appendChild(main); row.appendChild(go);
      list.appendChild(row);
    });

    var foot = document.createElement('div');
    foot.style.cssText = 'margin-top:12px;font-size:11.5px;color:#7a8699;line-height:1.5';
    foot.textContent = 'Pola diadaptasi (MIT) dari Marius-Dragan/VBA-CODE: CaseChange, MergeMultipleCellsIntoOne, SplitStringInMultipleCells, SortActiveSheets \u2014 ditulis ulang untuk mesin Sheets di aplikasi ini. Makro VBA mentah tidak bisa dieksekusi di Android.';

    box.appendChild(head); box.appendChild(sub); box.appendChild(out); box.appendChild(list); box.appendChild(foot);
    wrap.appendChild(box);
    function tutup() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }
    x.addEventListener('click', tutup);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) tutup(); });
    document.body.appendChild(wrap);
  }

  /* ---------- tombol ---------- */
  function pasang() {
    if (!document.body) { setTimeout(pasang, 80); return; }
    if (document.getElementById('ak-makro-fab')) return;
    var b = document.createElement('button');
    b.id = 'ak-makro-fab';
    b.type = 'button';
    b.textContent = 'Makro';
    b.style.cssText = 'position:fixed;left:14px;bottom:150px;z-index:9998;height:38px;padding:0 16px;border:0;border-radius:19px;background:linear-gradient(135deg,#0f766e,#115e59);color:#fff;font:700 13px/1 -apple-system,Roboto,sans-serif;box-shadow:0 6px 18px rgba(15,118,110,.34)';
    b.addEventListener('click', panel);
    document.body.appendChild(b);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pasang);
  else pasang();
  setInterval(pasang, 3000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) pasang(); });
  window.__akMakroPanel = panel;
})();
