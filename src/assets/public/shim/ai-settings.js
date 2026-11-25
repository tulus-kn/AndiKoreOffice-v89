/* Andi Kore Office — dialog setelan AI dengan banyak penyedia */
(function () {
  'use strict';
  /* Host AI yang diizinkan oleh kebijakan keamanan: HTTPS resmi saja.
     Endpoint kustom / Ollama lokal tidak didukung pada jalur yang diperketat. */
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
  var P = {
    gemini: { l: 'Google Gemini', b: 'https://generativelanguage.googleapis.com/v1beta', m: 'gemini-3.8-flash', h: 'AIza... / AQ...' },
    groq: { l: 'Groq (gratis, cepat)', b: 'https://api.groq.com/openai/v1', m: 'openai/gpt-oss-120b', h: 'gsk_...' },
    openai: { l: 'OpenAI', b: 'https://api.openai.com/v1', m: 'gpt-4o-mini', h: 'sk-...' },
    deepseek: { l: 'DeepSeek', b: 'https://api.deepseek.com/v1', m: 'deepseek-chat', h: 'sk-...' },
    openrouter: { l: 'OpenRouter', b: 'https://openrouter.ai/api/v1', m: 'openai/gpt-4o-mini', h: 'sk-or-...' },
    anthropic: { l: 'Anthropic Claude', b: 'https://api.anthropic.com/v1', m: 'claude-3-5-sonnet-latest', h: 'sk-ant-...' }
  };
  function g(k, d) { try { var v = localStorage.getItem(k); return v == null || v === '' ? d : v; } catch (e) { return d; } }
  function s(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function prov() { var p = g('ak.ai.provider', 'gemini'); return P[p] ? p : 'gemini'; }
  function css() {
    if (document.getElementById('ak-ais-css')) return;
    var st = document.createElement('style');
    st.id = 'ak-ais-css';
    st.textContent = '#ak-ais{position:fixed;inset:0;z-index:2147483001;background:rgba(6,12,26,.55);display:flex;align-items:flex-end}'
      + '#ak-ais .box{width:100%;max-height:88vh;overflow:auto;background:#fff;border-radius:18px 18px 0 0;padding:18px 16px 22px;font:500 13.5px/1.45 -apple-system,Roboto,sans-serif;color:#152a5a}'
      + '#ak-ais h3{margin:0 0 4px;font-size:17px}'
      + '#ak-ais .sub{margin:0 0 12px;font-size:12px;color:#6b7a90}'
      + '#ak-ais label{display:block;font:700 12px/1.3 inherit;color:#4a5a72;margin:12px 0 6px}'
      + '#ak-ais select,#ak-ais input{width:100%;box-sizing:border-box;border:1px solid #d6dee9;border-radius:10px;padding:11px;font:600 13px/1.2 inherit;color:#101828;background:#fff}'
      + '#ak-ais .note{font-size:12px;color:#6b7a90;margin:8px 0 0}'
      + '#ak-ais .row{display:flex;gap:8px;margin-top:16px}'
      + '#ak-ais .primary{flex:1;border:0;border-radius:12px;padding:13px;background:#2A4BFF;color:#fff;font:700 14px/1 inherit}'
      + '#ak-ais .plain{flex:0 0 auto;border:1px solid #d6dee9;border-radius:12px;padding:13px 16px;background:#fff;color:#152a5a;font:700 14px/1 inherit}'
      + '#ak-ais .status{margin-top:10px;padding:9px 11px;border-radius:10px;background:#f1f5fc;font-size:12.5px;color:#2b3a55;white-space:pre-wrap}';
    document.head.appendChild(st);
  }
  function close() { var m = document.getElementById('ak-ais'); if (m) m.remove(); }
  function open() {
    css(); close();
    var cur = prov();
    var m = document.createElement('div');
    m.id = 'ak-ais';
    var opts = Object.keys(P).map(function (k) {
      return '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' + P[k].l + '</option>';
    }).join('');
    m.innerHTML = '<div class="box"><h3>AI Assistant</h3>'
      + '<p class="sub">Pilih penyedia, tempel kuncinya, simpan. Kunci hanya disimpan di perangkat ini.</p>'
      + '<label>Penyedia</label><select data-ais-prov>' + opts + '</select>'
      + '<label>Alamat API</label><input data-ais-base type="url" spellcheck="false" value="' + g('ak.ai.base', P[cur].b) + '">'
      + '<label>Model</label><input data-ais-model type="text" spellcheck="false" value="' + g('ak.ai.model', P[cur].m) + '">'
      + '<label>Kunci API</label><input data-ais-key type="password" autocomplete="off" value="' + g('ak.ai.key', '') + '" placeholder="' + P[cur].h + '">'
      + '<p class="note" data-ais-note>Penyedia aktif: ' + P[cur].l + '. Kalau jaringan memblokir satu penyedia, ganti ke penyedia lain \u2014 kuncinya berbeda.</p>'
      + '<div class="row"><button class="primary" type="button" data-ais-save>Simpan</button><button class="plain" type="button" data-ais-cancel>Batal</button></div>'
      + '<div class="status" data-ais-status style="display:none"></div></div>';
    document.body.appendChild(m);
    var sel = m.querySelector('[data-ais-prov]');
    sel.addEventListener('change', function () {
      var d = P[sel.value];
      m.querySelector('[data-ais-base]').value = d.b;
      m.querySelector('[data-ais-model]').value = d.m;
      m.querySelector('[data-ais-key]').placeholder = d.h;
      m.querySelector('[data-ais-note]').textContent = 'Penyedia aktif: ' + d.l + '. Kalau jaringan memblokir satu penyedia, ganti ke penyedia lain \u2014 kuncinya berbeda.';
    });
    m.querySelector('[data-ais-cancel]').addEventListener('click', close);
    m.addEventListener('click', function (ev) { if (ev.target === m) close(); });
    m.querySelector('[data-ais-save]').addEventListener('click', function () {
      var pv = sel.value;
      var b = m.querySelector('[data-ais-base]').value.trim() || P[pv].b;
      var md = m.querySelector('[data-ais-model]').value.trim() || P[pv].m;
      var ky = m.querySelector('[data-ais-key]').value.trim();
      /* Tolak base URL yang tidak ada di allowlist HTTPS resmi. */
      if (!akAllowed(b)) {
        var st0 = m.querySelector('[data-ais-status]');
        st0.style.display = 'block';
        st0.textContent = 'Alamat API tidak diizinkan: hanya host HTTPS resmi dari daftar keamanan.';
        return;
      }
      s('ak.ai.provider', pv); s('ak.ai.base', b); s('ak.ai.model', md); s('ak.ai.key', ky);
      if (pv === 'gemini' && ky) s('tkn_ai_key', ky);
      s('tkn_ai_model', md);
      if (window.__akAiResetConvo) { try { window.__akAiResetConvo(); } catch (e) {} }
      var st = m.querySelector('[data-ais-status]');
      st.style.display = 'block';
      st.textContent = 'Tersimpan: ' + P[pv].l + ' \u00b7 ' + md + (ky ? ' \u00b7 kunci ' + ky.length + ' karakter' : ' \u00b7 kunci masih kosong');
    });
  }
  window.__akOpenAiSettings = open;

  /* cegat tombol "Gemini API key" milik aplikasi supaya dialog kita yang muncul */
  document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('[data-ai="key"]') : null;
    if (!t) return;
    ev.preventDefault(); ev.stopPropagation();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    open();
  }, true);
})();
