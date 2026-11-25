/* Andi Kore Office — Slide Studio
   Membuat berkas .pptx asli dari kerangka teks (atau dari AI) memakai PptxGenJS (MIT). */
(function () {
  'use strict';
  if (window.__akSlideStudio) return;
  window.__akSlideStudio = true;

  var TEMA = {
    bersih: { nama: 'Bersih', bg: 'FFFFFF', judul: '11223A', isi: '33425C', aksen: '2A4BFF', sub: '6B7A90' },
    gelap:  { nama: 'Gelap',  bg: '0E1626', judul: 'FFFFFF', isi: 'C9D6E8', aksen: '4F7BFF', sub: '8FA3BF' },
    hangat: { nama: 'Hangat', bg: 'FBF7F0', judul: '3B2A1C', isi: '5C4632', aksen: 'B4552A', sub: '8A6D55' }
  };

  function el(tag, css, txt) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (txt != null) e.textContent = txt;
    return e;
  }

  function fs() {
    try {
      if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Filesystem) return window.Capacitor.Plugins.Filesystem;
    } catch (e) {}
    return null;
  }

  function simpan(b64, nama) {
    var f = fs();
    if (!f) return Promise.resolve({ ok: false, msg: 'Penyimpanan perangkat tidak tersedia.' });
    var dir = 'DATA', jalur = 'AndiKore/Slide/' + nama;
    try {
      if (window.Capacitor.getPlatform && window.Capacitor.getPlatform() === 'android') { dir = 'DOCUMENTS'; jalur = 'Ekspor/' + nama; }
    } catch (e) {}
    return f.writeFile({ path: jalur, data: b64, directory: dir, recursive: true }).then(function () {
      return { ok: true, msg: (dir === 'DOCUMENTS' ? 'Tersimpan: Documents/Ekspor/' : 'Tersimpan: ') + nama };
    }).catch(function () {
      return f.writeFile({ path: 'AndiKore/Slide/' + nama, data: b64, directory: 'DATA', recursive: true }).then(function () {
        return { ok: true, msg: 'Tersimpan di penyimpanan aplikasi: AndiKore/Slide/' + nama };
      }).catch(function (e2) { return { ok: false, msg: 'Gagal menyimpan: ' + (e2 && e2.message ? e2.message : 'tidak diketahui') }; });
    });
  }

  function parseKerangka(teks) {
    var baris = String(teks || '').split(/\r?\n/);
    var out = [];
    baris.forEach(function (b) {
      var t = b.trim();
      if (!t) return;
      if (/^#/.test(t)) { out.push({ jenis: 'bagian', judul: t.replace(/^#+\s*/, '') }); return; }
      var p = t.split('|');
      var judul = p[0].trim();
      var poin = (p[1] || '').split(/[;\u2022]/).map(function (x) { return x.trim(); }).filter(Boolean);
      out.push({ jenis: 'isi', judul: judul, poin: poin });
    });
    return out;
  }

  function bangun(kerangka, kunci) {
    if (!window.PptxGenJS) return Promise.reject(new Error('Pustaka pembuat slide belum termuat.'));
    var t = TEMA[kunci] || TEMA.bersih;
    var pptx = new window.PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Andi Kore Office';
    var judulDeck = (kerangka.filter(function (k) { return k.jenis === 'bagian'; })[0] || {}).judul || 'Presentasi';

    var sampul = pptx.addSlide();
    sampul.background = { color: t.bg };
    sampul.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 10, h: 0.22, fill: { color: t.aksen } });
    sampul.addText(judulDeck, { x: 0.7, y: 2.05, w: 8.6, h: 1.2, fontSize: 34, bold: true, color: t.judul, valign: 'mid' });
    sampul.addText('Dibuat dengan Andi Kore Office', { x: 0.7, y: 3.5, w: 8.6, h: 0.5, fontSize: 12, color: t.sub });

    kerangka.forEach(function (k) {
      var s = pptx.addSlide();
      s.background = { color: t.bg };
      if (k.jenis === 'bagian') {
        s.addShape(pptx.ShapeType.rect, { x: 0.7, y: 2.2, w: 0.09, h: 1.1, fill: { color: t.aksen } });
        s.addText(k.judul, { x: 0.95, y: 2.1, w: 8.2, h: 1.3, fontSize: 30, bold: true, color: t.judul, valign: 'mid' });
        return;
      }
      s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.16, h: 5.63, fill: { color: t.aksen } });
      s.addText(k.judul, { x: 0.65, y: 0.42, w: 8.9, h: 0.9, fontSize: 24, bold: true, color: t.judul });
      var daftar = k.poin.length ? k.poin.map(function (p2) {
        return { text: p2, options: { bullet: { indent: 18 }, breakLine: true } };
      }) : [{ text: '(tambahkan poin di sini)', options: { color: t.sub } }];
      s.addText(daftar, { x: 0.7, y: 1.5, w: 8.7, h: 3.6, fontSize: 16, color: t.isi, lineSpacingMultiple: 1.25, valign: 'top' });
    });

    return pptx.write({ outputType: 'base64' });
  }

  function buat(nama, kerangka, kunci) {
    return bangun(kerangka, kunci).then(function (b64) {
      var stamp = new Date().toISOString().slice(0, 16).replace(/[^0-9]/g, '');
      var namaFile = 'AndiKore-' + (nama || 'Slide') + '-' + stamp + '.pptx';
      namaFile = namaFile.replace(/[\\/:*?"<>|]/g, '-');
      return simpan(b64, namaFile);
    });
  }

  function panel() {
    var lama = document.getElementById('ak-slide-sheet');
    if (lama) lama.parentNode.removeChild(lama);
    var wrap = el('div', 'position:fixed;inset:0;background:rgba(12,18,28,.55);z-index:2147483000;display:flex;align-items:flex-end');
    wrap.id = 'ak-slide-sheet';
    var box = el('div', 'width:100%;max-height:88vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:14px 14px 20px');

    var head = el('div', 'display:flex;justify-content:space-between;align-items:center;margin-bottom:6px');
    head.appendChild(el('div', 'font:700 15px/1.3 inherit;color:#16233a', 'Buat Slide (.pptx)'));
    var x = el('button', 'border:0;background:#eef2f8;border-radius:10px;padding:8px 12px;font:600 12.5px/1 inherit;color:#33425c', 'Tutup');
    head.appendChild(x);

    var sub = el('div', 'font-size:12px;color:#5a6b84;line-height:1.5;margin-bottom:9px');
    sub.textContent = 'Satu baris = satu slide. Tulis "Judul | poin 1; poin 2". Awali # untuk slide judul bagian. Berkas .pptx asli, bisa dibuka PowerPoint.';

    var ta = el('textarea', 'width:100%;box-sizing:border-box;min-height:120px;border:1px solid #dde3ed;border-radius:12px;padding:10px;font:inherit;background:#fbfcfe');
    ta.placeholder = '# Rencana 2027\nRingkasan | target tahun; anggaran; risiko\nLangkah | riset pasar; uji coba; peluncuran';

    var temaRow = el('div', 'display:flex;gap:8px;margin:10px 0');
    var aktif = 'bersih';
    Object.keys(TEMA).forEach(function (k) {
      var b = el('button', 'flex:1;border:1px solid #dde3ed;border-radius:10px;padding:9px;background:' + (k === aktif ? '#2A4BFF' : '#fff') + ';color:' + (k === aktif ? '#fff' : '#33425c') + ';font:600 12.5px/1 inherit', TEMA[k].nama);
      b.addEventListener('click', function () {
        aktif = k;
        Array.prototype.forEach.call(temaRow.children, function (c) { c.style.background = '#fff'; c.style.color = '#33425c'; });
        b.style.background = '#2A4BFF'; b.style.color = '#fff';
      });
      temaRow.appendChild(b);
    });

    var row = el('div', 'display:flex;gap:8px');
    var go = el('button', 'flex:1;border:0;border-radius:12px;padding:12px;background:#2A4BFF;color:#fff;font:700 13px/1 inherit', 'Buat .pptx');
    var ai = el('button', 'flex:0 0 auto;border:1px solid #dde3ed;border-radius:12px;padding:12px 14px;background:#fff;color:#243043;font:600 13px/1 inherit', 'Buat dari AI');
    var contoh = el('button', 'flex:0 0 auto;border:1px solid #dde3ed;border-radius:12px;padding:12px 12px;background:#fff;color:#243043;font:600 13px/1 inherit', 'Contoh');
    row.appendChild(go); row.appendChild(ai); row.appendChild(contoh);

    var out = el('div', 'display:none;white-space:pre-wrap;background:#f6f8fc;border:1px solid #e5e9f0;border-radius:12px;padding:10px;font-size:12.5px;color:#243043;margin-top:10px');

    var foot = el('div', 'margin-top:10px;font-size:11.5px;color:#7a8699;line-height:1.5');
    foot.textContent = 'Dibuat dengan PptxGenJS (MIT, gitbrent/PptxGenJS). Slide memakai teks asli, bukan gambar \u2014 jadi bisa diedit di PowerPoint.';

    function pesan(t) { out.style.display = 'block'; out.textContent = t; }

    contoh.addEventListener('click', function () {
      ta.value = '# Rencana Kerja 2027\nRingkasan | target utama; anggaran; risiko\nKondisi saat ini | data penjualan; kapasitas; pesaing\nLangkah 2027 | riset pasar; uji coba; peluncuran\nTim | peran; jadwal; kebutuhan alat\nPenutup | ringkasan; ajakan bertindak';
    });

    go.addEventListener('click', function () {
      var k = parseKerangka(ta.value);
      if (!k.length) { pesan('Tulis dulu kerangkanya, atau ketuk Contoh.'); return; }
      go.disabled = true;
      pesan('Menyusun ' + (k.length + 1) + ' slide...');
      buat('Slide', k, aktif).then(function (r) {
        go.disabled = false;
        pesan((r.ok ? 'Selesai. ' : '') + r.msg + (r.ok ? '\nBuka lewat Beranda \u2192 Slides, atau bagikan berkasnya.' : ''));
      }).catch(function (e) {
        go.disabled = false;
        pesan('Gagal membuat slide: ' + (e && e.message ? e.message : e));
      });
    });

    ai.addEventListener('click', function () {
      if (typeof window.__akAiAsk !== 'function') { pesan('Panel AI belum siap di halaman ini.'); return; }
      var minta = (ta.value || '').trim();
      ai.disabled = true;
      pesan('AI menyusun kerangka...');
      window.__akAiAsk('Buat kerangka presentasi Bahasa Indonesia tentang: ' + (minta || 'rencana kerja tahun depan') +
        '\n\nBalas HANYA dengan format ini, tanpa penjelasan:\n# Judul Deck\nJudul slide | poin 1; poin 2; poin 3\nJudul slide | poin 1; poin 2\n(minimal 5 slide isi, maksimal 12)').then(function (res) {
        ai.disabled = false;
        if (!res || !res.ok) { pesan('AI gagal: ' + ((res && res.error) || 'tidak diketahui') + '\nTulis kerangka manual lalu ketuk Buat .pptx.'); return; }
        var ans = String(res.answer || '');
        ta.value = ans;
        var k = parseKerangka(ans);
        if (k.length < 2) { pesan('AI menjawab, tetapi bentuknya bukan kerangka. Salin jawaban di kotak lalu rapikan, atau buat manual.'); return; }
        pesan('AI selesai \u2014 kerangka terisi. Menyusun .pptx...');
        return buat('Slide-AI', k, aktif).then(function (r) {
          pesan((r.ok ? 'Selesai. ' : '') + r.msg);
        });
      });
    });

    box.appendChild(head); box.appendChild(sub); box.appendChild(ta); box.appendChild(temaRow); box.appendChild(row); box.appendChild(out); box.appendChild(foot);
    wrap.appendChild(box);
    function tutup() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }
    x.addEventListener('click', tutup);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) tutup(); });
    document.body.appendChild(wrap);
  }

  function pasang() {
    if (!document.body) { setTimeout(pasang, 80); return; }
    if (document.getElementById('ak-slide-fab')) return;
    var b = el('button', 'position:fixed;left:14px;bottom:96px;z-index:9998;height:40px;padding:0 16px;border:0;border-radius:20px;background:linear-gradient(135deg,#c2410c,#9a3412);color:#fff;font:700 13px/1 -apple-system,Roboto,sans-serif;box-shadow:0 6px 18px rgba(154,52,18,.34)', 'Buat Slide');
    b.id = 'ak-slide-fab';
    b.type = 'button';
    b.addEventListener('click', panel);
    document.body.appendChild(b);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pasang);
  else pasang();
  setInterval(pasang, 3000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) pasang(); });
})();
