/*
 * Bridge konversi PDF -> DOCX (Opsi 2: backend) dengan fallback lokal (Opsi 1).
 *
 * Global: window.__genofficePdfConvert
 *
 * Konfigurasi (localStorage, hanya di perangkat ini):
 *   ak.pdfconv.endpoint  Base URL server konversi, mis. https://contoh.com
 *                        kosong = rute server nonaktif.
 *   ak.pdfconv.token     Bearer token server (boleh kosong bila server tidak
 *                        memakai kunci).
 *
 * Keamanan:
 *   - Hanya URL https:; tolak kredensial di URL dan port eksplisit.
 *   - credentials: omit, redirect: error, tanpa cookie.
 *   - Batas ukuran 15 MB (selaras MAX_MB di server), timeout 60 detik.
 *   - Token tidak pernah dimasukkan ke query string, hanya header Authorization.
 *
 * Catatan: endpoint adalah server milik sendiri; allowlist host tetap diatur
 * di sisi server, bukan di berkas ini.
 */
(function () {
  "use strict";
  if (window.__genofficePdfConvert) return;

  var MAX_BYTES = 15 * 1024 * 1024;
  var TIMEOUT_MS = 60000;

  function g(k, d) {
    try { var v = localStorage.getItem(k); return v == null ? d : v; }
    catch (e) { return d; }
  }

  function validEndpoint(raw) {
    try {
      var u = new URL(raw);
      return u.protocol === "https:" &&
        !u.username && !u.password && !u.port &&
        u.hostname && u.hostname.length > 0;
    } catch (_) { return false; }
  }

  function getConfig() {
    return {
      endpoint: g("ak.pdfconv.endpoint", "").trim(),
      hasToken: g("ak.pdfconv.token", "").trim().length > 0
    };
  }

  function isConfigured() {
    var c = getConfig();
    return validEndpoint(c.endpoint);
  }

  var localFallback = null;
  function setLocalFallback(fn) { localFallback = typeof fn === "function" ? fn : null; }

  /**
   * Konversi PDF lewat server.
   * @param {Uint8Array|Blob|ArrayBuffer} pdfBytes
   * @param {string} filename
   * @returns {Promise<{ok:boolean, code?:string, status?:number, blob?:Blob, filename?:string, message?:string}>}
   */
  async function convert(pdfBytes, filename) {
    var endpoint = g("ak.pdfconv.endpoint", "").trim();
    if (!endpoint) return { ok: false, code: "NOT_CONFIGURED" };
    if (!validEndpoint(endpoint)) return { ok: false, code: "BAD_URL" };

    var size = pdfBytes && (pdfBytes.byteLength || pdfBytes.size) || 0;
    if (size > MAX_BYTES) return { ok: false, code: "TOO_LARGE" };

    var token = g("ak.pdfconv.token", "").trim();
    var url = endpoint.replace(/\/+$/, "") + "/convert?to=docx";

    var blob = pdfBytes instanceof Blob
      ? pdfBytes
      : new Blob([pdfBytes], { type: "application/pdf" });

    var fd = new FormData();
    fd.append("file", blob, filename || "dokumen.pdf");

    var headers = {};
    if (token) headers["Authorization"] = "Bearer " + token;

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);

    try {
      var resp = await fetch(url, {
        method: "POST",
        headers: headers,
        body: fd,
        redirect: "error",
        credentials: "omit",
        signal: ctrl.signal
      });

      if (resp.status === 401 || resp.status === 403) return { ok: false, code: "UNAUTHORIZED", status: resp.status };
      if (resp.status === 413) return { ok: false, code: "TOO_LARGE", status: resp.status };
      if (!resp.ok) return { ok: false, code: "BAD_RESPONSE", status: resp.status };

      var out = await resp.blob();
      if (!out || out.size === 0) return { ok: false, code: "BAD_RESPONSE" };

      var stem = String(filename || "dokumen").replace(/\.pdf$/i, "");
      return { ok: true, blob: out, filename: stem + ".docx" };
    } catch (e) {
      if (e && e.name === "AbortError") return { ok: false, code: "TIMEOUT" };
      return { ok: false, code: "NETWORK", message: String((e && e.message) || e) };
    } finally {
      clearTimeout(timer);
    }
  }

  /**
   * Coba server dulu; bila tidak terkonfigurasi/gagal dan fallback lokal
   * (Opsi 1) terpasang, pakai fallback tersebut.
   */
  async function convertWithFallback(pdfBytes, filename) {
    var r = await convert(pdfBytes, filename);
    if (r.ok) return r;
    if (typeof localFallback === "function") {
      try {
        var f = await localFallback(pdfBytes, filename);
        if (f && f.ok) return f;
      } catch (_) { /* jatuh ke hasil server */ }
    }
    return r;
  }

  window.__genofficePdfConvert = {
    getConfig: getConfig,
    isConfigured: isConfigured,
    convert: convert,
    convertWithFallback: convertWithFallback,
    setLocalFallback: setLocalFallback
  };
})();
