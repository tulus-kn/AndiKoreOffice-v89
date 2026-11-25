/* Andi Kore Office — Integrity Guard
 * Memeriksa keutuhan berkas aplikasi. Jika ada yang diubah/ditambah, aplikasi
 * menampilkan layar peringatan dan membekukan antarmuka.
 */
(function () {
  "use strict";
  if (window.__akGuard) return;
  window.__akGuard = { version: "1.0" };

  var QUICK = {"/shell.js": "IPXIJe0Izeauay350WhWGSPgtIIg2OgZN4bA5tn5jzU=", "/shim/android-shim.js": "p/wMa821hsCVA3ffwaq175x0R1VANYMqE7Ahbvr3ntQ=", "/shim/mm-core.js": "pg0E4+H8ghFg2Hy7BDl+3Uewti50VV0Cd3IXwqT4Zc8=", "/shim/mail-merge-ui.js": "oeuQT/wfg9niHBgoBbLle7hK8m0xsmi19I118oDlmR0=", "/shim/xls-heal.js": "CfTgOs1GQykWMDkhSs9UwCugnBULJ6Gjg3CrAKyloR4=", "/shim/pc-macro.js": "B84nuK2gEC2ZUnnI1Sn43WEj0QITLpwEOXCOSvxJfog=", "/shim/jszip.min.js": "2iY+iOMtHeBkoE5Qd1wlldBcuwVb1xgPZNNmBeh2d2Q=", "/shim/ak-tools.js": "izOyCXiU+gvInLi8f5T6wFlXmHSw62LyQwRI272Sr3s=", "/shim/ai-settings.js": "I22QDahcq5RSz2NZAp0IDgGWUnkyD2sayJsXz+7Vyzc=", "/shim/robot-hitung-grafik.js": "wu5gq5OJcA9icHbsOsK2o1dHaR7YUB3n+qDSx2pGtZk=", "/shim/prompt-lib.js": "+ntzm+vJS714sb75qX48UUX5a3yrz+L5mF3RfAK0XfY=", "/shim/robot-makro.js": "ZqC2bOU2i0AVGiVd6TKBuJXRBkU42Ut0qqxxHYOfrDA=", "/shim/pptxgen.bundle.js": "aKIpDEy5yjuju0UGZrVzWrDZn9QUewJRqnCdvaTXw1o=", "/shim/pptx-studio.js": "YSyksvHjozx/5OgKgKMgj4/0URKNgiwQ9n0/9aqtA8k=", "/ak-theme.js": "Q485Gwp7EGhzoLOsAhmopIKp6LUQ1lf06Gu6CDBpfqo="};
  var FULL = {"/shim/xlsx.full.min.js": "bPXEMm9drAXQE3tEf6iTXrx/1P1aTQ0r3qkzYH3HmTw=", "/shim/exceljs.min.js": "2+x/zf0rgKgeLh+8qIkPLxbd2WWN7n+4Lool+ehS52w=", "/shim/pdf-tools.js": "/sLoc+coMNz1QGxWYA6mTU5y87NB3dhIt//A5Gsd6vQ=", "/shim/slides-host.js": "ABe03+Qeq5LE/3B88lxdJDvwUmqqJ+gFBHVReBjxNsA=", "/shim/touch-zoom.js": "O1azoPGzhhxLFkfXwWkbZ2jczIH0IZ1Nqszvg2ynJ6Q=", "/shim/zen-tab-anim.js": "wi9Yh/9mSRUwYY2nX/sBwwgAtGVP4cLHb8pAnddS5uY=", "/shim/macro-ui.js": "0fDF9tNlkvgmaj8H73S/lXlLJeXR207Kml1uw8uBIf4=", "/shim/vba-preserve.js": "rhzgOPkm4fRRAFF4bCdKFYOw6pdimfDIqlGD57HNPYw=", "/shim/vba-run.js": "QOQmIqQSbh7aQHNFBhpl5E0s8hfcaPUGRIj+bwrCDV8=", "/shim/terbilang.js": "PBX5MkLUdS93spt2pK1Bb6/0jpmP4t9b9mTHlJSYo9Y=", "/shim/sheet-check.js": "26C41MhNQrIe1zEv3F9ATgSm7UDcnedF9zbyQmJFajg=", "/shim/ai-panel.js": "vitSFsbjWcrzEb810PXiJ5AhB0nbnMY7Tge+dPImqsA=", "/shim/ai-anywhere.js": "XQANBtmv5EggktwZ1/cp3bovZrmboGDBYe0+IbHXR7Y=", "/docs/assets/index-dYhkQH15.js": "cF551PitlPBilrfBdQD11p+YJ0XgV6R6U1Z/qo1Yie4=", "/sheets/assets/index-DNpYkj0j.js": "hR479NUvMpq8zDRczAajaxbitNZYKhphuV9Xs2cTy90=", "/slides/assets/index-DH8g-BFp.js": "1XXYnIu63K81yfSMdLs0/VUukpylrEnaUD6h1iAnQAs=", "/pdf/assets/index-DvwRUmOd.js": "6QbA0GeupCfq48C9eV+O5qyfxCdliosSSVSD6J/hQf4=", "/markdown/assets/index-DfjR4kE1.js": "e6vpSyMkNxFU4vwGgHS19lOM9ydvY6Xhy5vsUasIq+4=", "/html/assets/index-BJL5WS9U.js": "50dMB6pGbeo16envwFwjbHvAwWs3uB4H3nynfBIXNE0="};
  var XOR = 0xa5;

  function encode(buf) {
    var d = new Uint8Array(buf), s = "", i;
    for (i = 0; i < d.length; i++) s += String.fromCharCode(d[i] ^ XOR);
    return btoa(s);
  }

  function baseRoot() {
    var list = [].slice.call(document.scripts || []);
    var hit = list.filter(function (s) { return s.src && /\/guard\.js/i.test(s.src); })[0];
    if (!hit) return "";
    return hit.src.replace(/\/shim\/guard\.js.*$/i, "");
  }

  var ROOT = baseRoot();

  function shaOf(url) {
    return fetch(url, { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status + " " + url);
      return r.arrayBuffer();
    }).then(function (buf) {
      return crypto.subtle.digest("SHA-256", buf);
    }).then(encode);
  }

  var problems = [];

  function checkOne(rel, expect) {
    return shaOf(ROOT + rel).then(function (got) {
      if (got !== expect) problems.push(rel);
    }).catch(function (e) {
      if (String(e.message || "").indexOf("HTTP") === -1) problems.push(rel + " (tidak terbaca)");
      else problems.push(rel + " (hilang)");
    });
  }

  function runSet(set) {
    var keys = Object.keys(set);
    return keys.reduce(function (p, k) {
      return p.then(function () { return checkOne(k, set[k]); });
    }, Promise.resolve());
  }

  function block() {
    if (window.__akGuardBlocked) return;
    window.__akGuardBlocked = true;
    window.__AK_TAMPERED = true;
    var css = document.createElement("style");
    css.textContent = "html,body{overflow:hidden!important}#ak-guard{position:fixed;inset:0;z-index:2147483647;background:#0b1020;" +
      "display:flex;flex-direction:column;align-items:center;justify-content:center;padding:26px;box-sizing:border-box;" +
      "font:400 14px/1.6 -apple-system,Roboto,sans-serif;color:#e5e7eb;text-align:center}" +
      "#ak-guard .ico{width:64px;height:64px;border-radius:50%;background:#3b1220;display:flex;align-items:center;justify-content:center;margin-bottom:18px}" +
      "#ak-guard h2{margin:0 0 8px;font:700 18px/1.3 -apple-system,Roboto,sans-serif;color:#fecdd3}" +
      "#ak-guard p{margin:0;max-width:420px;color:#9ca3af;font-size:13px}" +
      "#ak-guard ul{margin:16px 0 0;padding:12px 16px;max-height:34vh;overflow:auto;border:1px solid #1f2937;border-radius:10px;" +
      "text-align:left;font:12px/1.7 ui-monospace,monospace;color:#fca5a5;background:#0f172a;list-style:none}" +
      "#ak-guard .foot{margin-top:18px;font-size:11.5px;color:#4b5563}";
    document.head.appendChild(css);
    var el = document.createElement("div");
    el.id = "ak-guard";
    el.innerHTML = '<div class="ico"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fb7185" stroke-width="2">' +
      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div>' +
      "<h2>Aplikasi telah dimodifikasi</h2>" +
      "<p>Berkas program tidak cocok dengan versi aslinya. Untuk keamanan dokumen Anda, antarmuka dibekukan.</p>" +
      "<ul>" + problems.slice(0, 12).map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
      '<div class="foot">Andi Kore Office · integrity guard v1.0</div>';
    document.documentElement.appendChild(el);
    document.documentElement.style.pointerEvents = "none";
    el.style.pointerEvents = "auto";
  }

  function verifyPageScripts() {
    var known = QUICK;
    Object.keys(FULL).forEach(function (k) { known[k] = FULL[k]; });
    var unknown = [];
    [].slice.call(document.scripts || []).forEach(function (s) {
      if (!s.src) return;
      var u = s.src.split("?")[0];
      var tail = u.replace(ROOT, "");
      if (!/^\//.test(tail)) return;
      if (/\/guard\.js$/i.test(tail)) return;
      if (!known[tail]) unknown.push(tail);
    });
    if (unknown.length) {
      unknown.forEach(function (u) { if (problems.indexOf(u + " (tidak dikenal)") === -1) problems.push(u + " (tidak dikenal)"); });
    }
  }

  function boot() {
    if (!window.crypto || !crypto.subtle) return;
    runSet(QUICK).then(function () {
      verifyPageScripts();
      if (problems.length) block();
      else if (window.requestIdleCallback) setTimeout(function () { runSet(FULL).then(function () { if (problems.length) block(); }); }, 25000);
      else setTimeout(function () { runSet(FULL).then(function () { if (problems.length) block(); }); }, 25000);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
