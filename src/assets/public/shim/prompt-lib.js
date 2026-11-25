/* Pustaka Prompt — prompt siap pakai + impor milikmu sendiri (lokal, tidak ikut ke APK) */
(function () {
  var KEY = 'ak.prompts.v1';
  var BASE = [
    { t: 'Ringkas dokumen', x: 'Ringkas isi lembar kerja ini menjadi 5 poin utama, tiap poin maksimal 90 karakter, tanpa nomor.' },
    { t: 'Perbaiki ejaan', x: 'Perbaiki ejaan, tanda baca, dan kapitalisasi seluruh teks di lembar kerja tanpa mengubah makna atau susunan paragraf.' },
    { t: 'Surat resmi', x: 'Buat surat resmi Bahasa Indonesia dari data di lembar kerja: kepala surat, nomor, isi, penutup, dan tanda tangan.' },
    { t: 'Analisis tabel', x: 'Periksa tabel di lembar kerja: temukan anomali, nilai kosong, dan tren utama. Jelaskan dalam 5 baris.' },
    { t: 'Struktur presentasi', x: 'Susun kerangka presentasi 8 slide dari isi lembar kerja: judul tiap slide dan 3 poin isinya.' },
    { t: 'Terjemahkan', x: 'Terjemahkan seluruh isi lembar kerja ke bahasa Inggris formal, pertahankan istilah teknis dan nama diri.' },
    { t: 'Caption medsos', x: 'Buat 3 caption media sosial dari isi lembar kerja: satu informatif, satu santai, satu dengan ajakan bertindak.' },
    { t: 'Tabel jadi narasi', x: 'Ubah data tabel di lembar kerja menjadi narasi satu paragraf yang mudah dibaca, sebutkan angka penting.' }
  ];

  function baca() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (raw && raw.length) return raw;
    } catch (e) {}
    return BASE.map(function (p, i) { return { id: 'd' + i, t: p.t, x: p.x }; });
  }
  function tulis(arr) {
    try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch (e) {}
  }

  function buka(cb) {
    var lama = document.getElementById('ak-prompt-sheet');
    if (lama) lama.parentNode.removeChild(lama);

    var wrap = document.createElement('div');
    wrap.id = 'ak-prompt-sheet';
    wrap.style.cssText = 'position:fixed;inset:0;background:rgba(12,18,28,.55);z-index:2147483000;display:flex;align-items:flex-end';
    var box = document.createElement('div');
    box.style.cssText = 'width:100%;max-height:82vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:14px 14px 20px;box-shadow:0 -8px 30px rgba(0,0,0,.25)';
    var head = document.createElement('div');
    head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px';
    var h = document.createElement('div');
    h.style.cssText = 'font:700 15px/1.3 inherit;color:#16233a';
    h.textContent = 'Pustaka Prompt';
    var x = document.createElement('button');
    x.type = 'button'; x.textContent = 'Tutup';
    x.style.cssText = 'border:0;background:#eef2f8;border-radius:10px;padding:8px 12px;font:600 12.5px/1 inherit;color:#33425c';
    head.appendChild(h); head.appendChild(x);

    var list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:8px';
    var arr = baca();
    arr.forEach(function (p, idx) {
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:8px;align-items:flex-start;border:1px solid #e5e9f0;border-radius:12px;padding:10px;background:#fafbfe';
      var main = document.createElement('div');
      main.style.cssText = 'flex:1;min-width:0';
      var t = document.createElement('div');
      t.style.cssText = 'font:700 13px/1.3 inherit;color:#16233a;margin-bottom:3px';
      t.textContent = p.t;
      var d = document.createElement('div');
      d.style.cssText = 'font-size:12px;color:#5a6b84;line-height:1.45;max-height:34px;overflow:hidden';
      d.textContent = p.x;
      main.appendChild(t); main.appendChild(d);
      var pakai = document.createElement('button');
      pakai.type = 'button'; pakai.textContent = 'Pakai';
      pakai.style.cssText = 'flex:0 0 auto;border:0;border-radius:10px;padding:9px 12px;background:#2A4BFF;color:#fff;font:700 12.5px/1 inherit';
      pakai.addEventListener('click', function () {
        try { cb(p.x); } catch (e) {}
        tutup();
      });
      var hapus = document.createElement('button');
      hapus.type = 'button'; hapus.textContent = 'x';
      hapus.style.cssText = 'flex:0 0 auto;border:1px solid #e5e9f0;background:#fff;border-radius:10px;padding:9px 10px;font:600 12.5px/1 inherit;color:#8a97ab';
      hapus.addEventListener('click', function () {
        var now = baca().filter(function (q) { return q.id !== p.id; });
        tulis(now); tutup(); buka(cb);
      });
      row.appendChild(main); row.appendChild(pakai); row.appendChild(hapus);
      list.appendChild(row);
    });

    var add = document.createElement('button');
    add.type = 'button'; add.textContent = 'Tambah prompt sendiri';
    add.style.cssText = 'width:100%;margin-top:10px;border:1px dashed #c9d4e4;border-radius:12px;padding:11px;background:#fff;font:600 13px/1 inherit;color:#2A4BFF';

    var impor = document.createElement('button');
    impor.type = 'button'; impor.textContent = 'Impor dari berkas (.json / .txt)';
    impor.style.cssText = 'width:100%;margin-top:8px;border:1px solid #e5e9f0;border-radius:12px;padding:11px;background:#fafbfe;font:600 13px/1 inherit;color:#33425c';

    var status = document.createElement('div');
    status.style.cssText = 'margin-top:8px;font-size:12px;color:#5a6b84';

    add.addEventListener('click', function () {
      var t2 = prompt('Judul prompt:'); if (!t2) return;
      var x2 = prompt('Isi perintah untuk AI:'); if (!x2) return;
      var now = baca().concat([{ id: 'u' + Date.now(), t: String(t2).slice(0, 60), x: String(x2) }]);
      tulis(now); tutup(); buka(cb);
    });

    impor.addEventListener('click', function () {
      var inp = document.createElement('input');
      inp.type = 'file'; inp.accept = '.json,.txt,text/plain,application/json';
      inp.style.display = 'none';
      inp.addEventListener('change', function () {
        var f = inp.files && inp.files[0]; if (!f) return;
        var rd = new FileReader();
        rd.onload = function () {
          var teks = String(rd.result || '');
          var masuk = [];
          try {
            var j = JSON.parse(teks);
            var kandidat = Array.isArray(j) ? j : (j.prompts || j.items || []);
            kandidat.forEach(function (o, i) {
              if (typeof o === 'string') masuk.push({ id: 'i' + Date.now() + i, t: o.slice(0, 40), x: o });
              else if (o && (o.x || o.text || o.prompt || o.content)) masuk.push({ id: 'i' + Date.now() + i, t: String(o.t || o.title || 'Impor ' + (i + 1)).slice(0, 60), x: String(o.x || o.text || o.prompt || o.content) });
            });
          } catch (e) {
            teks.split(/\n{2,}/).forEach(function (blok, i) {
              var b = blok.trim(); if (b.length < 8) return;
              masuk.push({ id: 'i' + Date.now() + i, t: b.slice(0, 40).replace(/\n/g, ' '), x: b });
            });
          }
          if (!masuk.length) { status.textContent = 'Berkas tidak berisi prompt yang bisa dibaca.'; return; }
          tulis(baca().concat(masuk));
          status.textContent = masuk.length + ' prompt ditambahkan (hanya tersimpan di HP ini).';
          setTimeout(function () { tutup(); buka(cb); }, 700);
        };
        rd.readAsText(f);
      });
      document.body.appendChild(inp); inp.click();
    });

    box.appendChild(head); box.appendChild(list); box.appendChild(add); box.appendChild(impor); box.appendChild(status);
    wrap.appendChild(box);
    function tutup() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }
    x.addEventListener('click', tutup);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) tutup(); });
    document.body.appendChild(wrap);
  }

  window.__akPromptPick = buka;
  window.__akPromptAdd = function (t, x) {
    var now = baca().concat([{ id: 'u' + Date.now(), t: t, x: x }]);
    tulis(now);
  };
})();
