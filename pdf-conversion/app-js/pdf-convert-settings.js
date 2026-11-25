/*
 * Andi Kore Office — dialog setelan konverter PDF (Opsi 2).
 *
 * Gaya mengikuti dialog setelan AI: pilih penyedia, isi alamat + kunci,
 * simpan. Nilai disimpan di localStorage dan dibaca oleh
 * shim/pdf-convert-bridge.js melalui kunci:
 *   ak.pdfconv.provider  id penyedia terpilih
 *   ak.pdfconv.endpoint  base URL server / API
 *   ak.pdfconv.token     Bearer token / API key
 *
 * Keterangan:
 *   - kind "self"  : server hasil deploy sendiri (Dockerfile di scaffold),
 *                     format cocok dengan bridge multipart /convert.
 *   - kind "saas"   : layanan konversi pihak ketiga; alur autentikasi dan
 *                     responsnya beda, perlu adapter terpisah sebelum dipakai.
 */
(function () {
  'use strict';
  if (window.__akPdfConvSettings) return;
  window.__akPdfConvSettings = true;

  var P = {
    render: {
      l: 'Render · gratis (host sendiri)', tier: 'Gratis', kind: 'self',
      b: '', h: 'Bearer token server (opsional)',
      note: 'Deploy Dockerfile ke Render free, lalu tempel URL service-nya. Tidur setelah 15 menit idle.'
    },
    cloudrun: {
      l: 'Google Cloud Run · kuota gratis', tier: 'Gratis', kind: 'self',
      b: '', h: 'Bearer token server (opsional)',
      note: 'Scale to zero dalam kuota gratis bulanan; perlu verifikasi akun Google Cloud.'
    },
    railway: {
      l: 'Railway · trial / berbayar', tier: 'Berbayar', kind: 'self',
      b: '', h: 'Bearer token server (opsional)',
      note: '$5 trial sekali, lalu kredit $1/bulan; RAM dibatasi 0,5 GB.'
    },
    fly: {
      l: 'Fly.io · berbayar', tier: 'Berbayar', kind: 'self',
      b: '', h: 'Bearer token server (opsional)',
      note: 'Mulai ~$2,19/bulan per mesin kecil; container global.'
    },
    ilovepdf: {
      l: 'iLovePDF · free terbatas / Premium', tier: 'Berbayar', kind: 'saas',
      b: 'https://api.ilovepdf.com', h: 'Kunci rahasia API iLovePDF',
      note: 'SaaS: alur unggah → konversi → unduh perlu adapter terpisah dari bridge multipart.'
    },
    pdfco: {
      l: 'PDF.co · berbayar per kredit', tier: 'Berbayar', kind: 'saas',
      b: 'https://api.pdf.co/v1', h: 'API key PDF.co',
      note: 'Paket Basic $8,99/bulan (16.500 kredit); format respons perlu adapter.'
    },
    apify: {
      l: 'Apify PDF→Word · per dokumen', tier: 'Berbayar', kind: 'saas',
      b: 'https://api.apify.com/v2', h: 'Token API Apify',
      note: 'Sekitar $0,03 per dokumen berhasil; hasil berupa link unduhan, perlu adapter.'
    }
  };

  var FREE = ['render', 'cloudrun'];
  var PAID = ['railway', 'fly', 'ilovepdf', 'pdfco', 'apify'];

  function g(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }
  function s(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function prov() { var p = g('ak.pdfconv.provider', ''); return P[p] ? p : 'render'; }

  function validEndpoint(raw) {
    if (!raw) return true; // kosong = rute server nonaktif, diizinkan
    try {
      var u = new URL(raw);
      return u.protocol === 'https:' && !u.username && !u.password && !u.port && u.hostname && u.hostname.length > 0;
    } catch (_) { return false; }
  }

  function css() {
    if (document.getElementById('ak-pcs-css')) return;
    var st = document.createElement('style');
    st.id = 'ak-pcs-css';
    st.textContent = '#ak-pcs{position:fixed;inset:0;z-index:2147483001;background:rgba(6,12,26,.55);display:flex;align-items:flex-end}'
      + '#ak-pcs .box{width:100%;max-height:88vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:18px 16px 22px;font:500 13.5px/1.45 -apple-system,Roboto,sans-serif;color:#152a5a}'
      + '#ak-pcs h3{margin:0 0 4px;font-size:17px}'
      + '#ak-pcs .sub{margin:0 0 12px;font-size:12px;color:#6b7a90}'
      + '#ak-pcs label{display:block;font:700 12px/1.3 inherit;color:#4a5a72;margin:12px 0 6px}'
      + '#ak-pcs select,#ak-pcs input{width:100%;box-sizing:border-box;border:1px solid #d6dee9;border-radius:10px;padding:11px;font:600 13px/1.2 inherit;color:#101828;background:#fff}'
      + '#ak-pcs .note{font-size:12px;color:#6b7a90;margin:8px 0 0}'
      + '#ak-pcs .tag{display:inline-block;border-radius:8px;padding:2px 8px;font:700 11px/1.4 inherit;margin-left:6px}'
      + '#ak-pcs .tag.free{background:#e7f6ec;color:#177245}'
      + '#ak-pcs .tag.paid{background:#fdf0e7;color:#b4430f}'
      + '#ak-pcs .row{display:flex;gap:8px;margin-top:16px}'
      + '#ak-pcs .primary{flex:1;border:0;border-radius:12px;padding:13px;background:#2A4BFF;color:#fff;font:700 14px/1 inherit}'
      + '#ak-pcs .plain{flex:0 0 auto;border:1px solid #d6dee9;border-radius:12px;padding:13px 16px;background:#fff;color:#152a5a;font:700 14px/1 inherit}'
      + '#ak-pcs .status{margin-top:10px;padding:9px 11px;border-radius:10px;background:#f1f5fc;font-size:12.5px;color:#2b3a55;white-space:pre-wrap}';
    document.head.appendChild(st);
  }

  function close() { var m = document.getElementById('ak-pcs'); if (m) m.remove(); }

  function optionsHtml(cur) {
    function group(keys, label) {
      var inner = keys.map(function (k) {
        return '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' + P[k].l + '</option>';
      }).join('');
      return '<optgroup label="' + label + '">' + inner + '</optgroup>';
    }
    return group(FREE, 'Gratis') + group(PAID, 'Berbayar');
  }

  function open() {
    css(); close();
    var cur = prov();
    var m = document.createElement('div');
    m.id = 'ak-pcs';
    var tagCls = P[cur].tier === 'Gratis' ? 'free' : 'paid';
    m.innerHTML = '<div class="box"><h3>Konverter PDF <span class="tag ' + tagCls + '">' + P[cur].tier + '</span></h3>'
      + '<p class="sub">Pilih rute konversi ke Word. Alamat dan kunci hanya disimpan di perangkat ini; kosongkan alamat untuk menonaktifkan rute server.</p>'
      + '<label>Penyedia</label><select data-pcs-prov>' + optionsHtml(cur) + '</select>'
      + '<label>Alamat server / API</label><input data-pcs-base type="url" spellcheck="false" value="' + g('ak.pdfconv.endpoint', P[cur].b) + '">'
      + '<label>Token / API key</label><input data-pcs-key type="password" autocomplete="off" value="' + g('ak.pdfconv.token', '') + '" placeholder="' + P[cur].h + '">'
      + '<p class="note" data-pcs-note>' + P[cur].note + '</p>'
      + '<div class="row"><button class="primary" type="button" data-pcs-save>Simpan</button><button class="plain" type="button" data-pcs-cancel>Batal</button></div>'
      + '<div class="status" data-pcs-status style="display:none"></div></div>';
    document.body.appendChild(m);

    var sel = m.querySelector('[data-pcs-prov]');
    var baseInput = m.querySelector('[data-pcs-base]');
    var keyInput = m.querySelector('[data-pcs-key]');
    var note = m.querySelector('[data-pcs-note]');
    var tag = m.querySelector('.tag');

    sel.addEventListener('change', function () {
      var d = P[sel.value];
      baseInput.value = d.b;
      keyInput.placeholder = d.h;
      note.textContent = d.note;
      tag.textContent = d.tier;
      tag.className = 'tag ' + (d.tier === 'Gratis' ? 'free' : 'paid');
    });

    m.querySelector('[data-pcs-cancel]').addEventListener('click', close);
    m.addEventListener('click', function (ev) { if (ev.target === m) close(); });

    m.querySelector('[data-pcs-save]').addEventListener('click', function () {
      var pv = sel.value;
      var b = baseInput.value.trim();
      var ky = keyInput.value.trim();
      var st = m.querySelector('[data-pcs-status]');

      if (!validEndpoint(b)) {
        st.style.display = 'block';
        st.textContent = 'Alamat tidak valid: harus HTTPS, tanpa nama pengguna/kata sandi/port di URL.';
        return;
      }
      s('ak.pdfconv.provider', pv);
      s('ak.pdfconv.endpoint', b);
      s('ak.pdfconv.token', ky);

      st.style.display = 'block';
      st.textContent = b
        ? 'Tersimpan: ' + P[pv].l + ' · ' + b + (ky ? ' · kunci ' + ky.length + ' karakter' : ' · tanpa kunci')
        : 'Rute server dinonaktifkan. Pakai fallback offline bila tersedia.';
    });
  }

  window.__akOpenPdfConvertSettings = open;

  /* Hook untuk tombol yang nanti ditambahkan di bundle:
     elemen ber-atribut data-pdfconv="settings" membuka dialog ini. */
  document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('[data-pdfconv="settings"]') : null;
    if (!t) return;
    ev.preventDefault(); ev.stopPropagation();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    open();
  }, true);
})();
