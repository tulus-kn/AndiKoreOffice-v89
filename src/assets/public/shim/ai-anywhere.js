(function () {
  'use strict';
  if (window.__akAiAnywhere) return;
  window.__akAiAnywhere = true;

  var CFG = { provider: 'ak.ai.provider', base: 'ak.ai.base', model: 'ak.ai.model', key: 'ak.ai.key' };
  var GEMINI_KEY = 'tkn_ai_key';
  var DEFAULTS = {
    gemini: { base: 'https://generativelanguage.googleapis.com/v1beta', model: 'gemini-3.8-flash' },
    openai: { base: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
    anthropic: { base: 'https://api.anthropic.com/v1', model: 'claude-3-5-sonnet-latest' },
    groq: { base: 'https://api.groq.com/openai/v1', model: 'openai/gpt-oss-120b' },
    deepseek: { base: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
    openrouter: { base: 'https://openrouter.ai/api/v1', model: 'openai/gpt-4o-mini' },
  };
  var ALLOWED = [
    'generativelanguage.googleapis.com',
    'api.openai.com',
    'api.anthropic.com',
    'api.groq.com',
    'api.deepseek.com',
    'openrouter.ai'
  ];
  function akAllowed(raw) {
    try {
      var u = new URL(raw);
      return u.protocol === 'https:' && !u.username && !u.password && !u.port && ALLOWED.indexOf(u.hostname) !== -1;
    } catch (_) { return false; }
  }
  function cfg(k, fallback) {
    try { var v = localStorage.getItem(k); return v == null || v === '' ? fallback : v; } catch (e) { return fallback; }
  }
  function provider() {
    var p = cfg(CFG.provider, 'gemini');
    return DEFAULTS[p] ? p : 'gemini';
  }
  function baseUrl() {
    var p = provider();
    var raw = cfg(CFG.base, DEFAULTS[p].base).replace(/\/+$/, '');
    return akAllowed(raw) ? raw : DEFAULTS[p].base;
  }
  function modelName() {
    return cfg(CFG.model, DEFAULTS[provider()].model);
  }
  var isDocs = /\/docs\//.test(location.pathname);
  var isSlides = /\/slides\//.test(location.pathname);
  var isSheets = /\/sheets\//.test(location.pathname);
  if (!isDocs && !isSlides && !isSheets) return;

  function getKey() {
    var k = (cfg(CFG.key, '') || '').trim();
    if (k) return k;
    try { return (localStorage.getItem(GEMINI_KEY) || '').trim(); } catch (e) { return ''; }
  }

  function modelList(base, key) {
    return fetchJson(base.replace(/\/+$/, '') + '/models', { 'Authorization': 'Bearer ' + key }, null)
      .then(function (r) {
        var arr = (r.j && (r.j.data || r.j.models)) || [];
        var ids = [];
        for (var i = 0; i < arr.length && ids.length < 6; i++) {
          var id = arr[i].id || arr[i].name || arr[i].model;
          if (id) ids.push(String(id).replace(/^models\//, ''));
        }
        return ids;
      }).catch(function () { return []; });
  }

  var convo = [];
  window.__akAiAsk = function (prompt, context) { return callApi(prompt, context); };
  window.__akAiResetConvo = function () { convo.length = 0; };
  function callApi(prompt, context) {
    var key = getKey();
    var prov = provider();
    var base = baseUrl();
    var model = modelName();
    var text = (context ? 'Konteks teks terpilih:\n' + context + '\n\n' : '') + prompt;

    if (prov === 'gemini') {
      var gUrl = base + '/models/' + encodeURIComponent(model) + ':generateContent';
      var gBody = {
        systemInstruction: { parts: [{ text: 'Jawab dalam Bahasa Indonesia yang jelas dan ringkas. Ikuti bahasa yang dipakai pengguna bila bukan bahasa Indonesia.' }] },
        contents: convo.map(function (c) {
          return { role: c.role === 'assistant' ? 'model' : 'user', parts: [{ text: c.content }] };
        }).concat([{ role: 'user', parts: [{ text: text }] }])
      };
      var gRead = function (r) {
        if (!r.ok) return { ok: false, status: r.status, error: describe(r) };
        var c = r.j && r.j.candidates && r.j.candidates[0];
        var parts = c && c.content && c.content.parts ? c.content.parts : [];
        return { ok: true, answer: (parts.map(function (x) { return x.text || ''; }).join('\n').trim() || '(jawaban kosong)') };
      };
      var gCall = function (mdl) {
        var u2 = base + '/models/' + encodeURIComponent(mdl) + ':generateContent';
        return fetchJson(u2, { 'Content-Type': 'application/json', 'x-goog-api-key': key }, gBody).then(gRead);
      };
      return (function attempt(n) {
        return gCall(model).then(function (res) {
          var msg = (res && res.error) || '';
          var busy = /high demand|overloaded|try again later|resource exhausted|sedang sibuk|503|429/i.test(msg) || res.status === 429 || res.status === 503;
          if (res.ok || !busy || n >= 2) return res;
          return new Promise(function (r) { setTimeout(r, n === 0 ? 2500 : 6000); }).then(function () { return attempt(n + 1); });
        });
      })(0);
    }

    if (prov === 'anthropic') {
      return fetchJson(base + '/messages', {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      }, { model: model, max_tokens: 2048, messages: [{ role: 'user', content: text }] })
        .then(function (r) {
          if (!r.ok) return { ok: false, error: describe(r) };
          var blocks = r.j && r.j.content ? r.j.content : [];
          return { ok: true, answer: (blocks.map(function (b) { return b.text || ''; }).join('\n').trim() || '(jawaban kosong)') };
        });
    }

    /* default: OpenAI-compatible (OpenAI, DeepSeek, Groq, OpenRouter, Ollama, LM Studio, dll) */
    var chatUrl = /\/chat\/completions$/.test(base) ? base : base + '/chat/completions';
    return fetchJson(chatUrl, {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    }, { model: model, messages: [
      { role: 'system', content: 'Jawab dalam Bahasa Indonesia yang jelas dan ringkas. Ikuti bahasa yang dipakai pengguna bila bukan bahasa Indonesia.' }
    ].concat(convo).concat([{ role: 'user', content: text }]) })
      .then(function (r) {
        if (!r.ok) {
          var em = describe(r);
          if (/does not exist|no access|invalid model|permission denied|not authorized|unauthorized|forbidden|model/i.test(em)) {
            return modelList(base, key).then(function (ids) {
              var extra = ids.length ? '\n\nModel yang tersedia di akunmu: ' + ids.join(', ') : '';
              return { ok: false, error: em + extra };
            });
          }
          return { ok: false, error: em };
        }
        var ch = r.j && r.j.choices && r.j.choices[0];
        var msg = ch && ch.message ? ch.message.content : '';
        return { ok: true, answer: (String(msg || '').trim() || '(jawaban kosong)') };
      });
  }

  function withTimeout(p, ms, label) {
    return new Promise(function (resolve) {
      var done = false;
      var t = setTimeout(function () { if (!done) { done = true; resolve({ timeout: true, label: label }); } }, ms);
      Promise.resolve(p).then(function (v) { if (!done) { done = true; clearTimeout(t); resolve(v); } },
        function (e) { if (!done) { done = true; clearTimeout(t); resolve({ err: (e && (e.message || e.error)) || String(e) }); } });
    });
  }
  function probeImage(url, ms) {
    return new Promise(function (resolve) {
      var img = new Image();
      var finished = false;
      var t = setTimeout(function () { if (!finished) { finished = true; resolve('timeout'); } }, ms);
      img.onload = function () { if (!finished) { finished = true; clearTimeout(t); resolve('ok'); } };
      img.onerror = function () { if (!finished) { finished = true; clearTimeout(t); resolve('diblokir'); } };
      img.src = url + (url.indexOf('?') < 0 ? '?' : '&') + 't=' + Date.now();
    });
  }

  function nativeHttp() {
    try {
      var c = window.Capacitor;
      if (!c || !c.Plugins) return null;
      var h = c.Plugins.CapacitorHttp;
      return h && h.request ? h : null;
    } catch (e) { return null; }
  }

  function bridgeJson(url, headers, body, method) {
    return new Promise(function (resolve) {
      var done = false;
      var id = 'ak' + Math.random().toString(36).slice(2);
      var finish = function (v) { if (!done) { done = true; clearTimeout(t); window.removeEventListener('message', onMsg); resolve(v); } };
      var t = setTimeout(function () { finish({ ok: false, status: 0, j: null, net: 'timeout 22 detik (halaman utama)' }); }, 22000);
      var onMsg = function (ev) {
        var d = ev.data;
        if (!d || d.__akAiRes !== true || d.id !== id) return;
        if (d.err) return finish({ ok: false, status: 0, j: null, net: d.err });
        var j = d.text;
        try { j = JSON.parse(j); } catch (e) { j = null; }
        finish({ ok: d.status >= 200 && d.status < 300, status: d.status, j: j });
      };
      window.addEventListener('message', onMsg);
      try {
        window.top.postMessage({ __akAi: true, id: id, url: url, method: method || 'POST', headers: headers,
          body: body ? JSON.stringify(body) : undefined }, location.origin);
      } catch (e) { finish({ ok: false, status: 0, j: null, net: 'jembatan gagal: ' + e.message }); }
    });
  }

  function imgModelName() {
    return cfg('ak.ai.imagemodel', '');
  }

  function buatGambar(prompt) {
    var key = getKey();
    var prov = provider();
    var base = baseUrl();

    if (!key) return Promise.resolve({ ok: false, error: 'Kunci API belum diisi. Buka Setelan \u2192 AI Assistant.' });

    if (prov === 'openai' || /openai\.com/i.test(base)) {
      if (!/api\.openai\.com/.test(base)) base = 'https://api.openai.com/v1';
      var m = imgModelName() || 'gpt-image-1';
      var url = base + '/images/generations';
      return fetchJson(url, { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key }, {
        model: m, prompt: prompt, n: 1, size: '1024x1024'
      }).then(function (r) {
        if (!r.ok) {
          var msg = describe(r);
          if (/insufficient_quota|billing|quota|credit/i.test(String(msg))) {
            msg = 'Kunci OpenAI tidak punya saldo/billing aktif. Isi saldo di platform.openai.com lalu coba lagi.';
          }
          return { ok: false, error: msg };
        }
        var d = (r.j && r.j.data && r.j.data[0]) || {};
        if (d.b64_json) return { ok: true, dataUrl: 'data:image/png;base64,' + d.b64_json, model: m, prov: 'OpenAI' };
        if (d.url) return { ok: true, dataUrl: d.url, model: m, prov: 'OpenAI' };
        return { ok: false, error: 'Server tidak mengembalikan gambar.' };
      });
    }

    if (prov === 'gemini') {
      var kandidat = imgModelName() ? [imgModelName()] : ['gemini-2.5-flash-image', 'gemini-2.0-flash-preview-image-generation', 'gemini-2.0-flash-exp'];
      var body = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
      };
      var satu = function (mdl) {
        return fetchJson(base + '/models/' + encodeURIComponent(mdl) + ':generateContent', { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body)
          .then(function (r2) { return { r: r2, mdl: mdl }; });
      };
      return (function coba(i) {
        if (i >= kandidat.length) return Promise.resolve({ ok: false, error: 'Tidak ada model gambar Gemini yang menjawab. Coba lagi nanti atau pakai kunci OpenAI.' });
        return satu(kandidat[i]).then(function (x) {
          var r = x.r;
          if (!r.ok) {
            var msg = describe(r);
            var sibuk = /high demand|overloaded|try again later|resource exhausted|sedang sibuk|429|503/i.test(msg) || r.status === 429 || r.status === 503;
            if (sibuk) return { ok: false, error: 'Server gambar Gemini sedang sibuk (' + x.mdl + '). Coba lagi beberapa menit lagi \u2014 bukan kesalahan aplikasi.' };
            if (/not found|does not exist|invalid|not supported|permission/i.test(msg) || r.status === 404) return coba(i + 1);
            return { ok: false, error: msg };
          }
          var parts = (r.j && r.j.candidates && r.j.candidates[0] && r.j.candidates[0].content && r.j.candidates[0].content.parts) || [];
          for (var k = 0; k < parts.length; k++) {
            var inl = parts[k].inlineData || parts[k].inline_data;
            if (inl && inl.data) {
              return { ok: true, dataUrl: 'data:' + (inl.mimeType || inl.mime_type || 'image/png') + ';base64,' + inl.data, model: x.mdl, prov: 'Gemini' };
            }
          }
          return coba(i + 1);
        });
      })(0);
    }

    return Promise.resolve({ ok: false, error: 'Penyedia ini tidak mendukung pembuatan gambar. Yang bisa: OpenAI (kunci ChatGPT API) dan Gemini. Sekarang penyedia aktif: ' + prov + '.' });
  }

  function simpanGambar(dataUrl) {
    try {
      var vine = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Filesystem;
      if (!vine) return Promise.resolve('Tidak bisa menulis berkas di perangkat ini.');
      var isi = String(dataUrl);
      var b64 = isi.indexOf('base64,') > -1 ? isi.split('base64,')[1] : '';
      if (!b64) return Promise.resolve('Gambar berasal dari tautan, bukan data \u2014 buka tautan itu lalu simpan manual.');
      var cap = window.Capacitor;
      var dir = (cap.getPlatform && cap.getPlatform() === 'android') ? 'DOCUMENTS' : 'DATA';
      var nama = 'AndiKore-gambar-' + new Date().toISOString().slice(0, 19).replace(/[^0-9]/g, '') + '.png';
      var jalur = (dir === 'DOCUMENTS' ? 'Ekspor/' : '') + nama;
      return vine.writeFile({ path: jalur, data: b64, directory: dir, recursive: true }).then(function () {
        return dir === 'DOCUMENTS' ? 'Tersimpan: Documents/Ekspor/' + nama : 'Tersimpan di penyimpanan aplikasi: ' + nama;
      }).catch(function (e) { return 'Gagal menyimpan: ' + (e && e.message ? e.message : 'tidak diketahui'); });
    } catch (e) { return Promise.resolve('Gagal menyimpan gambar.'); }
  }

  function fetchJson(url, headers, body) {
    if (!akAllowed(url)) return Promise.resolve({ ok: false, status: 0, j: null, net: 'alamat diblokir kebijakan keamanan' });
    var safeHeaders = {};
    Object.keys(headers || {}).forEach(function (k) {
      if (['authorization', 'content-type', 'x-api-key', 'x-goog-api-key', 'anthropic-version'].indexOf(k.toLowerCase()) !== -1 && typeof headers[k] === 'string') safeHeaders[k] = headers[k];
    });
    headers = safeHeaders;
    if (body && typeof body === 'object') {
      var bstr = JSON.stringify(body);
      if (bstr.length > 8000000) return Promise.resolve({ ok: false, status: 0, j: null, net: 'ukuran permintaan melebihi batas 8 MB' });
    }
    if (window.top !== window) {
      var pB = bridgeJson(url, headers, body, body ? 'POST' : 'GET');
      var pD = fetchFallback();
      return new Promise(function (resolve) {
        var left = 2, best = null;
        var take = function (r) {
          if (!r) return;
          if (r.ok || r.status) return resolve(r);
          if (!best || (r.net && !best.net)) best = r;
          if (--left === 0) resolve(best || { ok: false, status: 0, net: 'gagal' });
        };
        pB.then(take, take);
        pD.then(take, take);
      });
    }
    return fetchFallback();
    function nativeTry() {
    var http = nativeHttp();
    if (http) {
      return Promise.race([
        http.request({
          url: url, method: 'POST', headers: headers, data: body,
          connectTimeout: 9000, readTimeout: 9000
        }),
        new Promise(function (_, reject) { setTimeout(function () { reject(new Error('native timeout 9s')); }, 9000); })
      ]).then(function (res) {
        var j = res && res.data;
        if (typeof j === 'string') { try { j = JSON.parse(j); } catch (e) { j = null; } }
        var st = res && res.status ? res.status : 0;
        return { ok: st >= 200 && st < 300, status: st, j: j };
      }).catch(function (e) {
        return { ok: false, status: 0, j: null, net: (e && (e.message || e.error)) || String(e) };
      });
    }
    return { ok: false, status: 0, j: null, net: 'jalur native tidak tersedia' };
    }
    function fetchFallback() {
    var ctrl = null, timer = 0;
    try { ctrl = new AbortController(); timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, 20000); } catch (e) {}
    return fetch(url, { method: body ? 'POST' : 'GET', headers: headers, body: body ? JSON.stringify(body) : undefined, redirect: 'error', credentials: 'omit', signal: ctrl ? ctrl.signal : undefined })
      .then(function (res) {
        clearTimeout(timer);
        return res.json().then(function (j) { return { ok: res.ok, status: res.status, j: j }; })
          .catch(function () { return { ok: false, status: res.status, j: null }; });
      })
      .catch(function (e) {
        clearTimeout(timer);
        var m = e && e.message ? e.message : String(e);
        if (e && e.name === 'AbortError') m = 'tidak ada jawaban dalam 20 detik';
        else if (/Failed to fetch|Network request failed|Load failed/i.test(m)) m = 'permintaan diblokir / server tidak dapat dijangkau dari aplikasi';
        return { ok: false, status: 0, j: null, net: m };
      });
    }
  }

  function describe(r) {
    var jj = r.j || {};
    if (/high demand|overloaded|try again later|resource exhausted/i.test(((jj.error && jj.error.message) || ''))) {
      return 'Server AI sedang sibuk (bukan kesalahan aplikasi atau kunci). Coba lagi beberapa saat lagi.';
    }
    var em = (jj.error && jj.error.message) || '';
    if (/no longer available|not found|not supported|does not exist/i.test(em)) {
      return em + '\n\nGanti model di Pengaturan \u2192 AI Assistant (mis. ' + (provider() === 'gemini' ? 'gemini-3.8-flash' : 'model yang tersedia di akunmu') + '), lalu Simpan.';
    }
    if (/permission denied|permission_denied|not authorized|invalid api key|unauthorized|forbidden/i.test(em) || r.status === 401 || r.status === 403) {
      return 'Kunci API tidak diizinkan untuk model ini (' + (em || 'HTTP ' + r.status) + ').\n\nPeriksa Setelan \u2192 AI Assistant: penyedia dan kunci harus cocok (kunci Gemini untuk Gemini, gsk_ untuk Groq, sk- untuk OpenAI). Kalau kunci benar tetapi tetap ditolak, modelnya mungkin tidak tersedia untuk akun itu \u2014 ganti model.';
    }
    if (r.net) return 'Gagal menghubungi server: ' + r.net + ' — periksa koneksi internet, alamat API, dan kunci API.';
    var j = r.j || {};
    var msg = (j.error && (j.error.message || j.error)) || j.message || ('HTTP ' + r.status);
    return String(msg);
  }
  function selectionText() {
    try {
      var frame = document.querySelector('.doc-frame');
      if (frame && frame.contentWindow && frame.contentWindow.getSelection) {
        var s2 = frame.contentWindow.getSelection().toString();
        if (s2 && s2.trim()) return s2.slice(0, 4000);
      }
    } catch (e) {}
    try {
      var s = window.getSelection && window.getSelection();
      return s ? String(s.toString()).slice(0, 4000) : '';
    } catch (e) { return ''; }
  }

  /* seluruh isi lembar kerja, dipakai kalau pengguna tidak memblok apa pun */
  function dokumenText() {
    try {
      if (isSheets && window.__univerAPI) {
        var wb = window.__univerAPI.getActiveWorkbook && window.__univerAPI.getActiveWorkbook();
        var sh = wb && wb.getActiveSheet && wb.getActiveSheet();
        var rng = sh && sh.getDataRange && sh.getDataRange();
        var vals = rng && rng.getValues && rng.getValues();
        if (vals && vals.length) {
          var baris = [];
          for (var r = 0; r < vals.length && baris.length < 200; r++) {
            var cells = [];
            for (var c = 0; c < (vals[r] || []).length && c < 20; c++) {
              var v = vals[r][c];
              cells.push(v == null ? '' : String(v));
            }
            if (cells.join('').trim()) baris.push(cells.join(' | '));
          }
          return baris.join('\n').slice(0, 6000);
        }
      }
    } catch (e) {}
    try {
      var frame = document.querySelector('.doc-frame');
      if (frame && frame.contentDocument && frame.contentDocument.body) {
        var t = String(frame.contentDocument.body.innerText || '').trim();
        if (t) return t.slice(0, 6000);
      }
    } catch (e) {}
    try {
      var t2 = String(document.body ? document.body.innerText || '' : '').trim();
      return t2.slice(0, 6000);
    } catch (e) { return ''; }
  }

  var panel = null;
  var fab = null;

  function build() {
    if (document.querySelector('.zen-ai-fab')) return;
    fab = document.createElement('button');
    fab.className = 'zen-ai-fab';
    fab.type = 'button';
    fab.textContent = 'AI';
    fab.setAttribute('aria-label', 'Asisten AI');
    fab.style.cssText = [
      'position:fixed', 'right:14px', 'bottom:96px', 'z-index:2147482000',
      'border:0', 'border-radius:50%', 'width:46px', 'height:46px', 'padding:0',
      'display:grid', 'place-items:center',
      'background:#2A4BFF', 'color:#fff', 'font:700 12.5px/1 -apple-system,Roboto,sans-serif',
      'box-shadow:0 8px 22px rgba(9,16,38,.28)', 'letter-spacing:.04em'
    ].join(';');
    fab.addEventListener('click', open);
    document.body.appendChild(fab);
  }

  function open() {
    if (panel) { close(); return; }
    panel = document.createElement('div');
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Asisten AI');
    panel.style.cssText = [
      'position:fixed', 'inset:auto 0 0 0', 'z-index:2147483000',
      'background:#fff', 'color:#101828', 'border-radius:20px 20px 0 0',
      'box-shadow:0 -12px 40px rgba(9,15,26,.28)', 'padding:14px 14px 18px',
      'max-height:74vh', 'display:flex', 'flex-direction:column', 'gap:10px',
      'font:400 14px/1.5 -apple-system,Roboto,sans-serif'
    ].join(';');

    var head = document.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;gap:8px';
    var title = document.createElement('strong');
    title.textContent = isSheets ? 'AI untuk Excel' : isSlides ? 'AI untuk Slide' : 'AI untuk Dokumen';
    title.style.cssText = 'flex:1;font-size:15px;letter-spacing:-.01em';
    var x = document.createElement('button');
    x.type = 'button';
    x.textContent = '×';
    x.style.cssText = 'border:0;background:#f1f4f9;color:#475467;width:30px;height:30px;border-radius:50%;font-size:16px;line-height:1';
    x.addEventListener('click', close);
    head.appendChild(title); head.appendChild(x);

    var hint = document.createElement('div');
    hint.style.cssText = 'font-size:12px;color:#66748a';
    var sel = selectionText();
    hint.textContent = sel
      ? 'Konteks: teks yang kamu pilih (' + sel.length + ' karakter).'
      : 'Tanpa memblok, AI membaca seluruh isi lembar kerja (maks 6.000 karakter).';

    var ta = document.createElement('textarea');
    ta.placeholder = 'Tanya apa saja, atau perintah: "kerjakan: buat ringkasan 3 poin"';
    ta.style.cssText = 'width:100%;box-sizing:border-box;min-height:74px;resize:none;border:1px solid #dde3ed;border-radius:12px;padding:10px;font:inherit;background:#fbfcfe';

    var row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:8px';
    var ask = document.createElement('button');
    ask.type = 'button';
    ask.textContent = 'Tanya AI';
    ask.style.cssText = 'flex:1;border:0;border-radius:12px;padding:12px;background:#2A4BFF;color:#fff;font:700 13px/1 inherit';
    var copy = document.createElement('button');
    copy.type = 'button';
    copy.textContent = 'Salin';
    copy.style.cssText = 'flex:0 0 auto;border:1px solid #dde3ed;border-radius:12px;padding:12px 14px;background:#fff;color:#243043;font:600 13px/1 inherit';
    var fresh = document.createElement('button');
    fresh.type = 'button';
    fresh.textContent = 'Baru';
    fresh.style.cssText = 'flex:0 0 auto;border:1px solid #dde3ed;border-radius:12px;padding:12px 12px;background:#fff;color:#243043;font:600 13px/1 inherit';
    var imgBtn = document.createElement('button');
    imgBtn.type = 'button';
    imgBtn.textContent = 'Gambar';
    imgBtn.style.cssText = 'flex:0 0 auto;border:1px solid #dde3ed;border-radius:12px;padding:12px 12px;background:#fff;color:#243043;font:600 13px/1 inherit';
    row.appendChild(ask); row.appendChild(imgBtn); row.appendChild(copy); row.appendChild(fresh);

    var pustaka = document.createElement('button');
    pustaka.type = 'button';
    pustaka.textContent = 'Pustaka prompt';
    pustaka.style.cssText = 'align-self:flex-start;border:1px solid #d6dee9;border-radius:10px;background:#fff;color:#2A4BFF;font:600 12.5px/1 inherit;padding:9px 12px';
    pustaka.addEventListener('click', function () {
      if (window.__akPromptPick) window.__akPromptPick(function (tx) { ta.value = tx; ta.focus(); });
      else { ta.value = 'Ringkas isi lembar kerja menjadi 5 poin utama.'; ta.focus(); }
    });

    var autoRow = document.createElement('label');
    autoRow.style.cssText = 'display:flex;align-items:center;gap:8px;margin-top:2px;font-size:12.5px;color:#4a5a72';
    var autoChk = document.createElement('input');
    autoChk.type = 'checkbox';
    autoChk.checked = true;
    autoChk.style.cssText = 'width:16px;height:16px';
    var autoTxt = document.createElement('span');
    autoTxt.textContent = 'Perintah langsung ditulis ke lembar kerja';
    autoRow.appendChild(autoChk); autoRow.appendChild(autoTxt);

    var out = document.createElement('div');
    out.style.cssText = 'display:none;flex:1;overflow:auto;background:#f6f8fc;border:1px solid #e5e9f0;border-radius:12px;padding:11px;white-space:pre-wrap;font-size:13px';

    var ins = null;
    if (isDocs || isSheets) {
      ins = document.createElement('button');
      ins.type = 'button';
      ins.textContent = isSheets ? 'Tulis ke sel aktif' : 'Tulis di lembar kerja';
      ins.disabled = true;
      ins.style.cssText = 'border:0;border-radius:12px;padding:11px;background:#eef2ff;color:#2440d0;font:600 13px/1 inherit';
    }

    panel.appendChild(head);
    panel.appendChild(hint);
    try {
      ta.style.setProperty('color', '#101828', 'important');
      ta.style.setProperty('background', '#ffffff', 'important');
      ta.style.setProperty('border', '1px solid #d6dee9', 'important');
      ta.style.setProperty('caret-color', '#2A4BFF', 'important');
      if (!document.getElementById('ak-ai-placeholder')) {
        var st = document.createElement('style');
        st.id = 'ak-ai-placeholder';
        st.textContent = '[role="group"] textarea::placeholder{color:#8b94a3!important;opacity:1!important}' +
          '[role="group"] textarea,[role="group"] input{color:#101828!important}';
        document.head.appendChild(st);
      }
    } catch (e) {}
    panel.appendChild(ta);
    panel.appendChild(pustaka);
    panel.appendChild(autoRow);
    panel.appendChild(row);
    if (ins) panel.appendChild(ins);
    panel.appendChild(out);
    var diag = document.createElement('button');
    diag.type = 'button';
    diag.textContent = 'Uji koneksi ke server AI';
    diag.style.cssText = 'margin-top:8px;border:1px solid #d6dee9;background:#fff;color:#2A4BFF;border-radius:10px;padding:9px 12px;font:600 12.5px/1 -apple-system,Roboto,sans-serif';
    diag.addEventListener('click', function () {
      out.style.display = 'block';
      out.textContent = 'Menguji\u2026';
      var lines = [];
      lines.push('Penyedia: ' + provider());
      lines.push('Alamat: ' + baseUrl());
      lines.push('Model: ' + modelName());
      lines.push('Kunci API: ' + (getKey() ? ('ada (' + getKey().slice(0, 6) + '\u2026, ' + getKey().length + ' karakter)') : 'KOSONG'));
      var host = 'https://generativelanguage.googleapis.com';
      var h = nativeHttp();
      lines.push('Jalur jaringan: fetch WebView');
      var probe = function (url, label) {
        return Promise.all([probeImage(url.replace(/\/v1beta$/,'') + '/favicon.ico', 10000), withTimeout(fetch(url, { mode: 'no-cors' }), 10000, label)])
          .then(function (r) {
            var pic = r[0] === 'timeout' ? 'TIDAK ADA RESPON' : 'server menjawab';
            var fx = r[1] && r[1].timeout ? 'timeout' : (r[1] && r[1].err ? 'gagal' : 'ok');
            return label + ': ' + pic + ' (fetch: ' + fx + ')';
          });
      };
      var tFetch = function (url, opts, ms) {
        var c = null, t = 0;
        try { c = new AbortController(); t = setTimeout(function(){ try{c.abort();}catch(e){} }, ms); } catch(e){}
        var o = opts || {}; o.signal = c ? c.signal : undefined;
        return fetch(url, o).then(function (r) { clearTimeout(t); return 'ok ' + r.status; })
          .catch(function (e) { clearTimeout(t); return 'gagal: ' + (e && e.message ? e.message : e); });
      };
      var tXhr = function (url) {
        return new Promise(function (res) {
          try {
            var x = new XMLHttpRequest();
            x.open('GET', url, true);
            x.timeout = 10000;
            x.onload = function () { res('ok ' + x.status); };
            x.onerror = function () { res('gagal jaringan'); };
            x.ontimeout = function () { res('habis waktu'); };
            x.send();
          } catch (e) { res('gagal: ' + e.message); }
        });
      };
      Promise.all([
        tFetch('https://www.google.com/generate_204', { mode: 'no-cors' }, 10000),
        tXhr('https://www.google.com/generate_204'),
        tFetch('index.html', {}, 6000),
        (window.top === window ? Promise.resolve('sama') : bridgeJson('https://www.google.com/generate_204', {}, null, 'GET')
          .then(function (r) { return r.status ? ('ok ' + r.status) : ('gagal: ' + r.net); })),
        bridgeJson(baseUrl() + '/', {}, null, 'GET')
          .then(function (r) { return r.status ? ('ok ' + r.status) : ('gagal: ' + (r.net || 'tanpa jawaban')); })
      ]).then(function (rs) {
        out.textContent = lines.join('\n') +
          '\n\nonline: ' + (navigator.onLine ? 'ya' : 'tidak') +
          '\nbuka: ' + (window.top !== window ? 'di dalam iframe' : 'halaman utama') +
          '\nfetch google: ' + rs[0] +
          '\nxhr google: ' + rs[1] +
          '\nfetch berkas lokal: ' + rs[2] +
          '\nfetch google (halaman utama): ' + rs[3] +
          '\nalamat API ini: ' + rs[4] +
          '\n\nKirim tangkapan layar ini.';
      });
    });
    panel.appendChild(diag);
    document.body.appendChild(panel);
    ta.focus();

    var last = '';

    function cariApiSlide() {
      var cands = [window.slidesApi, window.__genofficeSlidesAdapter, window.__univerAPI];
      for (var i = 0; i < cands.length; i++) if (cands[i]) cands.push(cands[i]);
      try {
        for (var k in window) {
          var o = window[k];
          if (o && typeof o === 'object' && typeof o.getActivePage === 'function') cands.push(o);
        }
      } catch (e) {}
      for (var j = 0; j < cands.length; j++) {
        if (cands[j] && typeof cands[j] === 'object') return cands[j];
      }
      return null;
    }

    function tulisLewatApiSlide(text) {
      var api = cariApiSlide();
      if (!api) return false;
      try {
        var page = api.getActivePage && api.getActivePage();
        var el = page && page.getActiveElement && page.getActiveElement();
        if (el && typeof el.setText === 'function') { el.setText(text); return true; }
        if (el && typeof el.setTextBody === 'function') { el.setTextBody(text); return true; }
        if (api.insertText) { api.insertText(text); return true; }
        if (page && page.addElement) {
          page.addElement({ type: 'text', text: text, x: 80, y: 260, width: 760, height: 260 });
          return true;
        }
      } catch (e) {}
      return false;
    }

    function tombolKotakTeks() {
      var nodes = document.querySelectorAll('button, [role="button"], .ribbon-tool, [data-tool]');
      for (var i = 0; i < nodes.length; i++) {
        var t = (nodes[i].textContent || '').trim();
        var a = (nodes[i].getAttribute('aria-label') || nodes[i].title || '').trim();
        if (/^(kotak teks|text box|teks|text|insert text)$/i.test(t) || /(kotak teks|text box)/i.test(a)) return nodes[i];
      }
      return null;
    }

    function klikTengahSlide() {
      var c = document.querySelector('canvas');
      if (!c) return;
      var r = c.getBoundingClientRect();
      var x = r.left + r.width / 2, y = r.top + r.height / 2;
      ['pointerdown', 'pointerup', 'click'].forEach(function (tp) {
        try {
          c.dispatchEvent(new MouseEvent(tp, { bubbles: true, cancelable: true, clientX: x, clientY: y, view: window }));
        } catch (e) {}
      });
    }

    function tunggu(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

    function tulisKeCatatan(text) {
      var tas = document.querySelectorAll('textarea');
      for (var i = 0; i < tas.length; i++) {
        var ta2 = tas[i];
        if (!ta2.getClientRects().length) continue;
        var ph = (ta2.placeholder || '') + ' ' + (ta2.getAttribute('aria-label') || '');
        if (/catatan|notes/i.test(ph) || ta2.offsetHeight > 60) {
          try {
            ta2.focus();
            ta2.value = (ta2.value ? ta2.value + '\n' : '') + text;
            ta2.dispatchEvent(new Event('input', { bubbles: true }));
            ta2.dispatchEvent(new Event('change', { bubbles: true }));
            return true;
          } catch (e) {}
        }
      }
      return false;
    }

    function klikTabRibbon(nama) {
      var tabs = document.querySelectorAll('.ribbon-tabs button, .ribbon-tab, [role="tab"]');
      for (var i = 0; i < tabs.length; i++) {
        var t = (tabs[i].textContent || '').trim();
        if (new RegExp('^(' + nama.join('|') + ')$', 'i').test(t)) {
          try { tabs[i].click(); return true; } catch (e) {}
        }
      }
      return false;
    }

    function insertIntoSides(text) {
      if (tulisLewatApiSlide(text)) return { ok: true, where: 'slide' };
      try {
        var a = document.activeElement;
        if (a && (a.isContentEditable || /^(INPUT|TEXTAREA)$/.test(a.tagName))) {
          document.execCommand('insertText', false, text);
          return { ok: true, where: 'slide' };
        }
      } catch (e) {}

      return (function () {
        /* 1) coba lewat alat "Kotak Teks" di ribbon */
        return (function () {
          var btn = tombolKotakTeks();
          if (btn) {
            try { btn.click(); } catch (e) {}
            return tunggu(400).then(function () {
              klikTengahSlide();
              return tunggu(500);
            }).then(function () {
              if (tulisLewatApiSlide(text)) return { ok: true, where: 'slide' };
              try {
                var ed = document.activeElement;
                if (ed && (ed.isContentEditable || /^(INPUT|TEXTAREA)$/.test(ed.tagName))) {
                  document.execCommand('insertText', false, text);
                  return { ok: true, where: 'slide' };
                }
                var box = document.querySelector('[contenteditable="true"]');
                if (box) {
                  box.focus();
                  document.execCommand('insertText', false, text);
                  return { ok: true, where: 'slide' };
                }
              } catch (e) {}
              return null;
            });
          }
          return Promise.resolve(null);
        })().then(function (hasil) {
          if (hasil) return hasil;
          /* 2) pindah ke tab Beranda/Sisip lalu cari alat teks di sana */
          return (function () {
            var pindah = klikTabRibbon(['Beranda', 'Home', 'Sisip', 'Insert', 'Alat']);
            if (!pindah) return Promise.resolve(null);
            return tunggu(350).then(function () {
              var b2 = tombolKotakTeks();
              if (!b2) return null;
              try { b2.click(); } catch (e) { return null; }
              return tunggu(450).then(function () {
                klikTengahSlide();
                return tunggu(500);
              }).then(function () {
                if (tulisLewatApiSlide(text)) return { ok: true, where: 'slide' };
                try {
                  var ed2 = document.activeElement;
                  if (ed2 && (ed2.isContentEditable || /^(INPUT|TEXTAREA)$/.test(ed2.tagName))) {
                    document.execCommand('insertText', false, text);
                    return { ok: true, where: 'slide' };
                  }
                } catch (e) {}
                return null;
              });
            });
          })();
        }).then(function (hasil2) {
          if (hasil2) return hasil2;
          /* 3) jaminan terakhir: Catatan Pembicara (tetap tersimpan di .pptx) */
          if (tulisKeCatatan(text)) return { ok: true, where: 'notes' };
          return { ok: false, where: 'none' };
        });
      })();
    }

    function insertAtCursor(text) {
      if (isSlides) { return { ok: false, where: 'readonly' }; }
      if (isSheets) {
        try {
          var api = window.__univerAPI;
          var wb = api && api.getActiveWorkbook && api.getActiveWorkbook();
          var sh = wb && wb.getActiveSheet && wb.getActiveSheet();
          var rng = sh && sh.getActiveRange && sh.getActiveRange();
          if (rng && rng.setValue) { rng.setValue(text); return true; }
        } catch (e) {}
      }
      try {
        var el = document.activeElement;
        if (el && (el.isContentEditable || /^(INPUT|TEXTAREA)$/.test(el.tagName))) {
          document.execCommand('insertText', false, text);
          return true;
        }
        var selEl = window.getSelection();
        if (selEl && selEl.rangeCount && !selEl.isCollapsed) {
          var r = selEl.getRangeAt(0);
          r.deleteContents();
          r.insertNode(document.createTextNode(text));
          return true;
        }
      } catch (e) {}
      return false;
    }

    /* ---------- mode perintah terbatas ---------- */
    function runTheme(mode) {
      var m = /gelap|dark/i.test(mode) ? 'dark' : 'light';
      try { localStorage.setItem('ak.theme.v1', JSON.stringify(m)); localStorage.setItem('genoffice.shell.theme.v1', m); } catch (e) {}
      document.documentElement.setAttribute('data-theme', m);
      if (window.__zenApplyTheme) { try { window.__zenApplyTheme(); } catch (e) {} }
      return 'Tema diubah ke ' + (m === 'dark' ? 'gelap' : 'terang') + '.';
    }
    function runLang(v) {
      var code = 'id';
      if (/english|inggris/i.test(v)) code = 'en';
      else if (/zh|中文|mandarin/i.test(v)) code = 'zh';
      try { localStorage.setItem('ak.lang.v1', code); localStorage.setItem('genoffice.android.lang', code); } catch (e) {}
      return 'Bahasa diset ke ' + code.toUpperCase() + ' (berlaku setelah muat ulang).';
    }
    function runMacro(name) {
      var m = window.__genofficeMacros;
      if (!m || !m.run) return 'Mesin makro tidak tersedia di halaman ini.';
      try { m.run(name); return 'Makro "' + name + '" dijalankan.'; }
      catch (e) { return 'Makro gagal: ' + (e && e.message ? e.message : String(e)); }
    }
    function detectCommand(q) {
      var m;
      if ((m = q.match(/^\s*(?:jalankan|run)\s+makro\s+(.+)$/i))) {
        var nm = m[1].trim();
        return { label: 'Jalankan makro: ' + nm, run: function () { return runMacro(nm); } };
      }
      if ((m = q.match(/^\s*(?:tema|theme)\s+(gelap|terang|dark|light)\s*$/i))) {
        var mode = m[1];
        return { label: 'Ganti tema ke ' + mode, run: function () { return runTheme(mode); } };
      }
      if ((m = q.match(/^\s*(?:bahasa|language)\s+(.+)$/i))) {
        var lg = m[1].trim();
        return { label: 'Ganti bahasa ke ' + lg, run: function () { return runLang(lg); } };
      }
      if ((m = q.match(/^\s*(?:isi|set)\s+sel\s+([a-z]+[0-9]+)\s*(?:=|jadi|menjadi)\s+(.+)$/i))) {
        var cell = m[1].toUpperCase(), val = m[2];
        return { label: 'Isi sel ' + cell + ' = "' + val + '"', run: function () {
          try {
            var api = window.__univerAPI, wb = api && api.getActiveWorkbook();
            var sh = wb && wb.getActiveSheet();
            var rng = sh && sh.getRange(cell);
            if (rng && rng.setValue) { rng.setValue(val); return 'Sel ' + cell + ' diisi.'; }
            return 'Tidak bisa mengisi sel: spreadsheet tidak aktif.';
          } catch (e) { return 'Gagal mengisi sel: ' + (e && e.message ? e.message : String(e)); }
        } };
      }
      if ((m = q.match(/^\s*(kerjakan|buat|susun|karang|perbaiki|rapikan|ringkas|terjemahkan|lengkapi|isi)\s*[:\uff1a]\s*([\s\S]+)$/i))) {
        var instr = m[2].trim();
        return { kind: 'tulis', label: 'AI akan ' + m[1].toLowerCase() + ' ini, lalu hasilnya langsung ditulis di ' + (isSheets ? 'sel aktif' : 'posisi kursor') + ': "' + instr.slice(0, 70) + '"',
          run: function () {
            return callApi(instr, selectionText()).then(function (res) {
              if (!res.ok) return 'Permintaan ditolak: ' + res.error;
              var ans = String(res.answer);
              return Promise.resolve(insertAtCursor(ans)).then(function (v) {
                var r = hasilIns(v);
                if (r.ok && r.where === 'notes') return 'AI sudah menjawab, tetapi slide menolak kotak teks baru \u2014 jadi teksnya ditulis ke CATATAN PEMBICARA slide ini (tetap tersimpan di .pptx).\n\n' + ans;
                if (r.ok) return 'Selesai \u2014 hasil sudah ditulis di lembar kerja.\n\n' + ans;
                if (r.where === 'readonly') return 'Di Slides, AI hanya membaca dan menjawab \u2014 tidak menulis ke slide (sesuai pilihanmu). Salin jawaban ini dengan tombol Salin bila perlu ditempel manual.\n\n' + ans;
                return 'AI sudah menjawab, tetapi tidak bisa menulis karena kursor tidak aktif. Klik area teks dokumen lalu ulangi.\n\n' + ans;
              });
            });
          } };
      }
      if ((m = q.match(/^\s*(?:tolong\s+|coba\s+|bisa\s+kamu\s+)?(tuliskan|tulis|buatkan|buat|susun|karangkan|karang|perbaiki|rapikan|ringkas|ringkaskan|terjemahkan|lengkapi|tambahkan|ganti|ubah|isi)\b\s*[:\uff1a]?\s*([\s\S]*)$/i))) {
        var kata = m[1].toLowerCase(), isi = (m[2] || '').trim();
        if (!isi) return null;
        return { kind: 'tulis', label: 'AI akan ' + kata + ', lalu hasilnya langsung ditulis di ' + (isSheets ? 'sel aktif' : 'lembar kerja') + ': "' + isi.slice(0, 70) + '"',
          run: function () {
            return callApi(isi, selectionText()).then(function (res) {
              if (!res.ok) return 'Permintaan ditolak: ' + res.error;
              var ans = String(res.answer);
              return Promise.resolve(insertAtCursor(ans)).then(function (v) {
                var r = hasilIns(v);
                if (r.ok && r.where === 'notes') return 'AI sudah menjawab, tetapi slide menolak kotak teks baru \u2014 jadi teksnya ditulis ke CATATAN PEMBICARA slide ini (tetap tersimpan di .pptx).\n\n' + ans;
                if (r.ok) return 'Selesai \u2014 hasil sudah ditulis di lembar kerja.\n\n' + ans;
                if (isSlides) return 'AI sudah menjawab, tetapi slide belum bisa ditulisi otomatis. Tekan alat "Teks / Kotak Teks" di ribbon, ketuk kanvas sekali, lalu ulangi perintah.\n\n' + ans;
                return 'AI sudah menjawab, tetapi tidak bisa menulis karena kursor tidak aktif. Klik area teks dokumen lalu ulangi.\n\n' + ans;
              });
            });
          } };
      }
      m = q.match(/^\s*(?:sisip(?:kan)?|tulis)\s*:\s*([\s\S]+)$/i) || q.match(/^\s*(?:sisip(?:kan)?|tulis)\s+([\s\S]+)$/i);
      if (m) {
        var txt = m[1].trim();
        return { label: 'Sisipkan teks di kursor (' + txt.length + ' karakter)', run: function () {
          return Promise.resolve(insertAtCursor(txt)).then(function (v) {
            var r = hasilIns(v);
            if (r.ok && r.where === 'notes') return 'Slide menolak kotak teks baru \u2014 teks ditulis ke Catatan Pembicara slide ini.';
            return r.ok ? 'Teks disisipkan.' : 'Kursor tidak aktif di editor. Klik area teks dulu.';
          });
        } };
      }
      return null;
    }
    function showConfirm(act, q) {
      panel.querySelectorAll('[data-ak-cmd]').forEach(function (n) { n.remove(); });
      var box = document.createElement('div');
      box.setAttribute('data-ak-cmd', '1');
      box.style.cssText = 'position:relative;border:1px solid #d6def0;border-radius:12px;padding:10px 12px;background:#f4f7ff;display:flex;flex-direction:column;gap:8px;font:500 13px/1.4 inherit;color:#152a5a';
      box.innerHTML = '<b>Aksi terdeteksi</b><span></span><div style="display:flex;gap:8px"><button type="button" data-ak-run style="flex:1;border:0;border-radius:9px;padding:9px;background:#2A4BFF;color:#fff;font:700 12.5px/1 inherit">Jalankan</button><button type="button" data-ak-cancel style="flex:1;border:1px solid #cfd8ea;border-radius:9px;padding:9px;background:#fff;color:#152a5a;font:700 12.5px/1 inherit">Batal</button></div>';
      box.querySelector('span').textContent = act.label;
      box.querySelector('[data-ak-run]').addEventListener('click', function () {
        var finish = function (r) { out.style.display = 'block'; out.textContent = r; box.remove(); };
        var res;
        try { res = act.run(); } catch (e) { return finish('Gagal: ' + (e && e.message ? e.message : String(e))); }
        if (res && typeof res.then === 'function') {
          out.style.display = 'block';
          out.textContent = 'Mengerjakan\u2026';
          box.querySelector('[data-ak-run]').disabled = true;
          res.then(finish, function (e) { finish('Gagal: ' + (e && e.message ? e.message : String(e))); });
        } else finish(res);
      });
      box.querySelector('[data-ak-cancel]').addEventListener('click', function () { box.remove(); out.style.display = 'block'; out.textContent = 'Dibatalkan. Tidak ada yang diubah.'; });
      panel.insertBefore(box, ta);
    }

    ask.addEventListener('click', function () {
      var q = ta.value.trim();
      if (!q) { out.style.display = 'block'; out.textContent = 'Tulis pertanyaan atau perintah lebih dulu.'; return; }
      var act = detectCommand(q);
      if (act) {
        panel.querySelectorAll('[data-ak-cmd]').forEach(function (n) { n.remove(); });
        if (autoChk.checked && act.kind === 'tulis' && act.run) {
          out.style.display = 'block';
          out.textContent = 'Mengerjakan perintah: ' + q.slice(0, 60) + '\u2026';
          ask.disabled = true;
          var done = function (r) { ask.disabled = false; out.textContent = r; };
          try {
            var pr = act.run();
            if (pr && typeof pr.then === 'function') pr.then(done, function (e) { done('Gagal: ' + (e && e.message ? e.message : String(e))); });
            else done(pr);
          } catch (e) { done('Gagal: ' + (e && e.message ? e.message : String(e))); }
          return;
        }
        showConfirm(act, q);
        return;
      }
      var key = getKey();
      if (!key) {
        out.style.display = 'block';
        out.textContent = 'Kunci API belum diisi.\nBuka Setelan \u2192 kartu AI \u2192 isi penyedia, alamat, model, dan kunci API.';
        return;
      }
      out.style.display = 'block';
      out.textContent = 'Menghubungi ' + modelName() + '\u2026';
      ask.disabled = true;
      var blok = selectionText();
      var ctx = blok;
      if (!ctx) {
        var semua = dokumenText();
        if (semua) ctx = semua;
      }
      callApi(q, ctx).then(function (res) {
        ask.disabled = false;
        if (!res.ok) { out.textContent = 'Permintaan ditolak: ' + res.error; return; }
        last = res.answer;
        convo.push({ role: 'user', content: q });
        convo.push({ role: 'assistant', content: String(res.answer) });
        if (convo.length > 12) convo.splice(0, convo.length - 12);
        out.textContent = last;
        if (!blok && ctx) {
          out.textContent = last + '\n\n\u2014 dibaca dari seluruh isi lembar kerja (' + ctx.length + ' karakter) \u2014';
        } else if (blok) {
          out.textContent = last + '\n\n\u2014 konteks: teks yang kamu blok (' + blok.length + ' karakter) \u2014';
        }
        if (ins) ins.disabled = false;
      });
    });

    imgBtn.addEventListener('click', function () {
      var minta = (ta.value || '').trim();
      out.style.display = 'block';
      if (!minta) { out.textContent = 'Tulis dulu gambar apa yang mau dibuat, mis. "poster promo kopi susu, gaya minimalis".'; ta.focus(); return; }
      imgBtn.disabled = true;
      var lama = imgBtn.textContent;
      imgBtn.textContent = '...';
      out.textContent = 'Membuat gambar...';
      buatGambar(minta).then(function (g) {
        imgBtn.disabled = false;
        imgBtn.textContent = lama;
        if (!g.ok) { out.textContent = 'Gambar tidak dibuat: ' + g.error; return; }
        out.textContent = '';
        var card = document.createElement('div');
        card.style.cssText = 'display:flex;flex-direction:column;gap:8px';
        var im = document.createElement('img');
        im.src = g.dataUrl;
        im.style.cssText = 'width:100%;border-radius:10px;display:block';
        var info = document.createElement('div');
        info.style.cssText = 'font-size:12px;color:#4a5a72';
        info.textContent = g.prov + ' \u00b7 ' + (g.model || '') + ' \u00b7 ketuk lama untuk menyimpan';
        var sim = document.createElement('button');
        sim.type = 'button';
        sim.textContent = 'Simpan ke Ekspor';
        sim.style.cssText = 'align-self:flex-start;border:1px solid #dde3ed;border-radius:10px;padding:9px 12px;background:#fff;color:#243043;font:600 12.5px/1 inherit';
        sim.addEventListener('click', function () {
          sim.disabled = true;
          simpanGambar(g.dataUrl).then(function (t) { info.textContent = t; sim.textContent = 'Tersimpan'; });
        });
        card.appendChild(im); card.appendChild(info); card.appendChild(sim);
        out.appendChild(card);
      });
    });

    fresh.addEventListener('click', function () {
      convo.length = 0;
      out.style.display = 'block';
      out.textContent = 'Percakapan baru. Riwayat sebelumnya sudah dihapus.';
      ta.value = '';
      ta.focus();
    });

    copy.addEventListener('click', function () {
      if (!last) return;
      try {
        navigator.clipboard.writeText(last);
        copy.textContent = 'Tersalin';
        setTimeout(function () { copy.textContent = 'Salin'; }, 1400);
      } catch (e) {}
    });

    if (ins) {
      ins.addEventListener('click', function () {
        if (!last) return;
        Promise.resolve(insertAtCursor(last)).then(function (v) {
          var r = hasilIns(v);
          if (r.ok && r.where === 'notes') out.textContent += '\n\n\u2014 ditulis ke Catatan Pembicara slide ini (bukan di atas slide) \u2014';
          else if (r.ok) out.textContent += '\n\n\u2014 disisipkan di lembar kerja \u2014';
          else if (r.where === 'readonly') out.textContent += '\n\n(Di Slides, AI hanya membaca dan menjawab.)';
          else out.textContent += '\n\n(Kursor tidak aktif di editor \u2014 klik area teks dokumen lalu coba lagi.)';
        });
      });
    }
  }

  function close() {
    if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
    panel = null;
  }

  function boot() { if (!fab) build(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
