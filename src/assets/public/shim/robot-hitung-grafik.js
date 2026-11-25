/* Andi Kore Office — Robot Hitung dan Grafik untuk Sheets
   Hitung dilakukan di HP (tanpa internet). AI hanya dipakai untuk menjelaskan hasil.
   Tombol "Hitung" muncul di kanan bawah halaman Sheets setelah angka diblok. */
(function () {
  'use strict';
  if (window.__akRobotHitung) return;
  window.__akRobotHitung = true;

  /* ---------- 1. baca blok terpilih ---------- */
  function bacaData() {
    var api = window.__univerAPI;
    if (!api || !api.getActiveWorkbook) return { ok: false, error: 'Sheets belum siap. Buka berkas Spreadsheet dulu.' };
    var wb = api.getActiveWorkbook();
    if (!wb) return { ok: false, error: 'Tidak ada buku kerja aktif.' };
    var sheet = wb.getActiveSheet();
    if (!sheet) return { ok: false, error: 'Tidak ada lembar aktif.' };
    var sel = sheet.getSelection && sheet.getSelection();
    var range = sel && sel.getActiveRange && sel.getActiveRange();
    if (!range || !range.getValues) return { ok: false, error: 'Blok dulu angka yang mau dihitung.' };
    var values = range.getValues();
    if (!values || !values.length) return { ok: false, error: 'Tidak ada data yang dipilih.' };
    return { ok: true, values: values, range: range, sheet: sheet };
  }

  /* ---------- 2. ubah sel menjadi angka dengan aturan yang jelas ---------- */
  function keAngka(sel) {
    if (sel == null) return null;
    if (typeof sel === 'number') return isFinite(sel) ? sel : null;      /* boolean & tanggal tidak dihitung */
    if (typeof sel !== 'string') return null;
    var t = sel.trim();
    if (!t) return null;
    if (/^[-+]?[0-9]+(,[0-9]+)?$/.test(t)) t = t.replace(',', '.');      /* desimal koma: 12,5 */
    else if (/^[-+]?[0-9]{1,3}(\.[0-9]{3})+(,[0-9]+)?$/.test(t)) t = t.replace(/\./g, '').replace(',', '.'); /* 1.234,5 */
    else if (/^[-+]?[0-9]{1,3}(,[0-9]{3})+(\.)?/.test(t) && /^[-+]?[0-9]{1,3}(,[0-9]{3})+$/.test(t)) t = t.replace(/,/g, ''); /* 1,234 */
    else if (/^[-+]?[0-9]+(\.[0-9]+)?$/.test(t)) t = t;
    else return null;                                                    /* teks, persen, mata uang: dilewati */
    var n = Number(t);
    return isFinite(n) ? n : null;
  }

  function hitung(values) {
    var angka = [], dilewati = 0;
    values.forEach(function (baris) {
      (baris || []).forEach(function (sel) {
        var n = keAngka(sel);
        if (n === null) { if (sel !== null && sel !== '' && String(sel).trim() !== '') dilewati++; return; }
        angka.push(n);
      });
    });
    if (!angka.length) return { ok: false, error: 'Tidak ada angka di blok itu. Blok sel angka, bukan judul atau huruf.' };
    var total = angka.reduce(function (a, b) { return a + b; }, 0);
    return {
      ok: true,
      jumlah: angka.length,
      total: total,
      rata: total / angka.length,
      terbesar: Math.max.apply(null, angka),
      terkecil: Math.min.apply(null, angka),
      angka: angka,
      dilewati: dilewati
    };
  }

  function r2(n) { return Math.round(n * 100) / 100; }

  /* ---------- 3. tulis hasil, tanpa menimpa data yang sudah ada ---------- */
  function selKosong(sheet, row, col, baris, kolom) {
    for (var r = 0; r < baris; r++) {
      for (var c = 0; c < kolom; c++) {
        try {
          var v = sheet.getRange(row + r, col + c, 1, 1).getValue();
          if (v !== null && v !== '' && String(v).trim() !== '') return false;
        } catch (e) { return false; }
      }
    }
    return true;
  }

  function tulisHasil(sheet, range, hasil) {
    var baris = [
      ['Total', r2(hasil.total)],
      ['Jumlah data', hasil.jumlah],
      ['Rata-rata', r2(hasil.rata)],
      ['Terbesar', hasil.terbesar],
      ['Terkecil', hasil.terkecil]
    ];
    var jumlahBaris = 1;
    try { jumlahBaris = range.getValues().length; } catch (e) {}
    var awalBaris = 0, awalKolom = 0;
    try { awalBaris = range.getRow(); } catch (e) {}
    try { awalKolom = range.getColumn(); } catch (e) {}

    var kandidat = [
      [awalBaris + jumlahBaris + 1, awalKolom],   /* tepat di bawah blok */
      [awalBaris, awalKolom + (range.getValues()[0] || []).length + 1] /* di kanan blok */
    ];
    for (var i = 0; i < kandidat.length; i++) {
      var rb = kandidat[i][0], cb = kandidat[i][1];
      if (!selKosong(sheet, rb, cb, baris.length, 2)) continue;
      try {
        baris.forEach(function (b, k) {
          var r = sheet.getRange(rb + k, cb, 1, 2);
          if (r && r.setValues) r.setValues([[b[0], b[1]]]);
          else if (r && r.setValue) r.setValue(b[0] + ': ' + b[1]);
        });
        return { ok: true, baris: rb + 1, kolom: cb + 1 };
      } catch (e) { return { ok: false, error: e && e.message ? e.message : String(e) }; }
    }
    return { ok: false, error: 'sel di bawah dan di kanan blok sudah terisi' };
  }

  /* ---------- 4. grafik batang dengan garis nol ---------- */
  function gambarGrafik(canvas, angka) {
    var dpr = window.devicePixelRatio || 1;
    var w = 480, h = 180;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = '100%'; canvas.style.height = (h / 1) + 'px';
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f4f6fb'; ctx.fillRect(0, 0, w, h);

    var maks = Math.max.apply(null, angka), min = Math.min.apply(null, angka);
    var atas = Math.max(maks, 0), bawah = Math.min(min, 0);
    var rentang = (atas - bawah) || 1;
    var tinggiGrafik = h - 34;
    var nolY = 6 + (atas / rentang) * tinggiGrafik;

    ctx.strokeStyle = '#c9d2e3'; ctx.beginPath();
    ctx.moveTo(0, nolY); ctx.lineTo(w, nolY); ctx.stroke();

    var n = Math.min(angka.length, 20);
    var lebar = w / n;
    for (var i = 0; i < n; i++) {
      var v = angka[i];
      var y = 6 + ((atas - Math.max(v, 0)) / rentang) * tinggiGrafik;
      var tinggi = Math.abs(v) / rentang * tinggiGrafik;
      ctx.fillStyle = v < 0 ? '#c2410c' : '#2A4BFF';
      ctx.fillRect(i * lebar + 4, v >= 0 ? y : nolY, Math.max(2, lebar - 8), Math.max(1, tinggi));
      ctx.fillStyle = '#111827'; ctx.font = '10px sans-serif';
      var label = String(Math.round(v * 100) / 100);
      ctx.fillText(label, i * lebar + 4, h - 6);
    }
  }

  /* ---------- 5. AI hanya menjelaskan, bukan menghitung ---------- */
  function tanyaAI(hasil, cb) {
    var prompt = 'Jelaskan dalam Bahasa Indonesia sederhana, maksimal 3 kalimat. Data: total ' + r2(hasil.total) +
      ', jumlah data ' + hasil.jumlah + ', rata-rata ' + r2(hasil.rata) + ', terbesar ' + hasil.terbesar +
      ', terkecil ' + hasil.terkecil + '. Sebutkan apakah grafik batang atau garis yang lebih cocok dan alasannya.';
    if (window.__akAiAsk) {
      window.__akAiAsk(prompt, '').then(function (res) {
        cb(res && res.ok ? String(res.answer) : 'AI tidak menjawab: ' + ((res && res.error) || 'tidak diketahui'));
      }, function () { cb('Tidak bisa menghubungi AI. Cek internet dan Setelan \u2192 AI Assistant.'); });
      return;
    }
    cb('Panel AI belum siap di halaman ini.');
  }

  /* ---------- 6. panel ---------- */
  function buatPanel() {
    var lama = document.getElementById('ak-robot-hitung');
    if (lama) lama.remove();
    var wadah = document.createElement('div');
    wadah.id = 'ak-robot-hitung';
    wadah.style.cssText = 'position:fixed;inset:0;z-index:10002;background:rgba(9,16,38,.46);display:flex;align-items:flex-end;justify-content:center';
    wadah.innerHTML = '<div style="background:#fff;color:#111827;border-radius:16px 16px 0 0;width:100%;max-width:560px;padding:16px;box-sizing:border-box;font:400 13px/1.5 sans-serif;max-height:88vh;overflow:auto">'
      + '<b style="font-size:15px">Robot Hitung dan Grafik</b>'
      + '<p style="color:#6b7280;margin:4px 0 10px">Blok angka di tabel dulu, lalu tekan Hitung. Angka dihitung di HP ini, bukan oleh AI.</p>'
      + '<div style="display:flex;gap:8px"><button type="button" data-hitung style="flex:1;border:0;background:#0a2e96;color:#fff;border-radius:10px;padding:11px;font-weight:700">Hitung</button>'
      + '<button type="button" data-tutup style="border:1px solid #d7dbe0;background:#fff;border-radius:10px;padding:11px">Tutup</button></div>'
      + '<div data-hasil style="margin-top:10px;background:#f8fafc;border:1px solid #e5e9f0;border-radius:10px;padding:10px;white-space:pre-wrap;display:none"></div>'
      + '<canvas data-grafik style="margin-top:10px;border:1px solid #e5e9f0;border-radius:10px;display:none"></canvas>'
      + '<div data-ai style="margin-top:10px;background:#f1f5fc;border-radius:10px;padding:10px;white-space:pre-wrap;display:none"></div></div>';
    wadah.querySelector('[data-tutup]').addEventListener('click', function () { wadah.remove(); });
    wadah.addEventListener('click', function (e) { if (e.target === wadah) wadah.remove(); });
    wadah.querySelector('[data-hitung]').addEventListener('click', function () {
      var hasilBox = wadah.querySelector('[data-hasil]');
      var grafik = wadah.querySelector('[data-grafik]');
      var aiBox = wadah.querySelector('[data-ai]');
      hasilBox.style.display = 'block';
      hasilBox.textContent = 'Robot sedang menghitung\u2026';
      grafik.style.display = 'none';
      aiBox.style.display = 'none';
      var data = bacaData();
      if (!data.ok) { hasilBox.textContent = data.error; return; }
      var hasil = hitung(data.values);
      if (!hasil.ok) { hasilBox.textContent = hasil.error; return; }

      var tulis = tulisHasil(data.sheet, data.range, hasil);
      hasilBox.textContent = 'Total: ' + r2(hasil.total)
        + '\nJumlah data: ' + hasil.jumlah
        + '\nRata-rata: ' + r2(hasil.rata)
        + '\nTerbesar: ' + hasil.terbesar
        + '\nTerkecil: ' + hasil.terkecil
        + (hasil.dilewati ? '\nDilewati (bukan angka): ' + hasil.dilewati + ' sel' : '')
        + '\n\n' + (tulis.ok
          ? 'Hasil ditulis di tabel mulai sel ' + tulis.kolom + tulis.baris + '.'
          : 'Hasil TIDAK ditulis ke tabel: ' + tulis.error + '. Angka di atas tetap benar \u2014 salin manual bila perlu.');

      if (hasil.angka.length > 1) {
        grafik.style.display = 'block';
        gambarGrafik(grafik, hasil.angka);
      }
      aiBox.style.display = 'block';
      aiBox.textContent = 'AI sedang menjelaskan\u2026';
      tanyaAI(hasil, function (teks) { aiBox.textContent = teks; });
    });
    document.body.appendChild(wadah);
  }

  /* ---------- 7. tombol di kanan bawah ---------- */
  function pasangTombol() {
    if (!/\/sheets\//.test(location.pathname)) return;
    if (document.getElementById('ak-btn-hitung')) return;
    var btn = document.createElement('button');
    btn.id = 'ak-btn-hitung';
    btn.type = 'button';
    btn.textContent = 'Hitung';
    btn.style.cssText = 'position:fixed;right:14px;bottom:264px;z-index:9000;border:0;border-radius:23px;height:46px;padding:0 16px;background:#0a2e96;color:#fff;font:700 13px/1 sans-serif;box-shadow:0 6px 20px rgba(9,16,38,.28)';
    btn.addEventListener('click', buatPanel);
    document.body.appendChild(btn);
  }

  function jaga() {
    pasangTombol();
    if (!document.getElementById('ak-btn-hitung')) setTimeout(pasangTombol, 1200);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', jaga);
  else jaga();
  setTimeout(jaga, 1500);
  setInterval(pasangTombol, 3000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) pasangTombol(); });
  window.__akRobotHitungPanel = buatPanel;
})();
