/* Andi Kore Office — mesin tema & panel donasi.
   Tidak menyentuh shell.js: semua penyesuaian dilakukan di DOM setelah render. */
(function () {
  'use strict';

  try { localStorage.removeItem('andikore.storageAsked.v1'); } catch (e) {}

  var K_THEME = 'ak.theme.v1';
  var K_COLOR = 'ak.textColor.v1';
  var THEME_KEY = 'genoffice.shell.theme.v1';

  var COLORS = [
    { hex: '#0E1726', name: 'Hitam', mode: 'light' },
    { hex: '#66748A', name: 'Abu', mode: 'light' },
    { hex: '#2A4BFF', name: 'Biru', mode: 'light' },
    { hex: '#12703F', name: 'Hijau', mode: 'light' },
    { hex: '#D63A2F', name: 'Merah', mode: 'light' },
    { hex: '#FFFFFF', name: 'Putih', mode: 'dark' }
  ];

  var DANA = '0878 7503 7701';
  var DANA_RAW = '6287875037701';
  var MANDIRI = '1270 0136 1371 4';
  var MANDIRI_RAW = '1270013613714';
  var HOLDER = 'Noviandi A. Dj. Kore';

  function read(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
  function hexi(hex) {
    try {
      var h = String(hex || '').replace('#', '');
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
      function f(c) { return c <= 0.0396 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    } catch (e) { return 0.5; }
  }

  function themeMode() { return read(K_THEME, 'system'); }
  function colorHex() { return read(K_COLOR, '#0E1726'); }

  function colorMeta(hex) {
    for (var i = 0; i < COLORS.length; i++) if (COLORS[i].hex === hex) return COLORS[i];
    return COLORS[0];
  }

  /* ---------- terapkan tema + warna huruf ---------- */
  function apply() {
    var root = document.documentElement;
    var mode = themeMode();
    var hex = colorHex();
    var meta = colorMeta(hex);

    // warna yang tidak terbaca di tema berlawanan otomatis memindahkan tema
    if (meta.mode === 'dark' && mode === 'light') { mode = 'dark'; write(K_THEME, mode); }
    if (meta.mode === 'light' && mode === 'dark' && hex === '#0E1726') { /* tetap boleh */ }

    root.setAttribute('data-theme', mode);
    try { localStorage.setItem(THEME_KEY, JSON.stringify(mode === 'system' ? 'system' : mode)); } catch (e) {}
    var sysDark = false;
    try { sysDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); } catch (e) {}
    var effectiveDark = mode === 'dark' || (mode === 'system' && sysDark);
    var lum = hexi(hex);
    if (effectiveDark) {
      root.style.removeProperty('--text');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--text-tertiary');
      return;
    }
    if (!effectiveDark && lum > 0.82) {
      root.style.setProperty('--text', '#0e1726');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--text-tertiary');
      return;
    }
    root.style.setProperty('--text', hex);
    if (hex === '#FFFFFF') {
      root.style.setProperty('--text-secondary', '#B6C1D2');
      root.style.setProperty('--text-tertiary', '#96A3BA');
    } else {
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--text-tertiary');
    }
  }

  /* ---------- bahasa ---------- */
  var LANGS = [['id', 'Indonesia'], ['en', 'English'], ['zh', '\u4e2d\u6587']];
  var LANG_KEY = 'ak.lang.v1';
  function getLang() {
    try {
      var v = localStorage.getItem(LANG_KEY);
      if (v === 'en' || v === 'zh' || v === 'id') return v;
    } catch (e) {}
    return 'id';
  }
  function setLang(code) {
    try {
      localStorage.setItem(LANG_KEY, code);
      localStorage.setItem('genoffice.android.lang', JSON.stringify(code));
    } catch (e) {}
  }
  var UI = {
    id: { lang: 'Bahasa', appearance: 'Tampilan', thanks: 'Terima kasih', light: 'Terang', dark: 'Gelap', system: 'Sistem', note: 'Warna Putih otomatis memakai tema Gelap supaya tulisan tetap terbaca.', noteLang: 'Pilih bahasa aplikasi. Aplikasi akan dimuat ulang.', bar1: 'Berkas', bar2: 'Ruang', bar3: 'Setelan' },
    en: { lang: 'Language', appearance: 'Appearance', thanks: 'Thanks', light: 'Light', dark: 'Dark', system: 'System', note: 'Choosing white text switches the theme to Dark automatically.', noteLang: 'Pick the app language. The app will reload.', bar1: 'Files', bar2: 'Space', bar3: 'Settings' },
    zh: { lang: '\u8bed\u8a00', appearance: '\u5916\u89c2', thanks: '\u81f4\u8c22', light: '\u6d45\u8272', dark: '\u6df1\u8272', system: '\u8ddf\u968f\u7cfb\u7edf', note: '\u9009\u62e9\u767d\u8272\u6587\u5b57\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u6df1\u8272\u4e3b\u9898\u3002', noteLang: '\u9009\u62e9\u754c\u9762\u8bed\u8a00\uff0c\u5e94\u7528\u5c06\u91cd\u65b0\u52a0\u8f7d\u3002', bar1: '\u6587\u4ef6', bar2: '\u7a7a\u95f4', bar3: '\u8bbe\u7f6e' }
  };
  function t(k) { var m = UI[getLang()] || UI.id; return m[k] || UI.id[k]; }


  var ABOUT_ID = {
    'Your Office, Reimagined': 'Kantor Anda, dirancang ulang',
    'A powerful and modern office suite for Android. Create, edit, and manage your documents, spreadsheets, and presentations, anytime, anywhere.':
      'Rangkaian kantor modern untuk Android. Buat, sunting, dan kelola dokumen, spreadsheet, serta presentasi — kapan saja, di mana saja.',
    'App Information': 'Informasi Aplikasi',
    'App Name': 'Nama aplikasi',
    'Version': 'Versi',
    'Platform': 'Platform',
    'Package Name': 'Nama paket',
    'Status': 'Status',
    'Storage not accessible': 'Penyimpanan tidak dapat diakses',
    'Local Workspace': 'Ruang kerja lokal',
    'Storage Location': 'Lokasi penyimpanan',
    'Document Files': 'Berkas dokumen',
    'Total Size': 'Ukuran total',
    'Recent List': 'Daftar terakhir',
    'Preferences': 'Preferensi',
    'File Preview': 'Pratinjau berkas',
    'Default Format': 'Format bawaan',
    'Maintenance': 'Pemeliharaan',
    'Manage your app data and performance.': 'Kelola data dan performa aplikasi.',
    'Refresh File Index': 'Segarkan indeks berkas',
    'Re-scan local files and update the index.': 'Pindai ulang berkas lokal dan perbarui indeksnya.',
    'Refresh': 'Segarkan',
    'Clear Recent Files': 'Hapus riwayat berkas',
    'Remove your recent file history.': 'Hapus riwayat berkas yang terakhir dibuka.',
    'Clear': 'Hapus',
    'Reload Application': 'Muat ulang aplikasi',
    'Restart the app to apply changes.': 'Mulai ulang aplikasi untuk menerapkan perubahan.',
    'Reload': 'Muat ulang',
    'Known Limitations': 'Batasan yang diketahui',
    'What this Android build does not do — stated plainly, so nothing surprises you later.':
      'Apa yang belum bisa dilakukan build Android ini — disampaikan terus terang supaya tidak mengejutkan nanti.',
    'Excel charts, pivot tables, conditional formatting, slicers':
      'Grafik Excel, tabel pivot, format bersyarat, slicer',
    'Restored on save: charts, pivot tables and caches, slicers, drawings and conditional formatting are copied back from the original file. If the merge cannot be validated the file is saved exactly as the engine wrote it':
      'Dikembalikan saat menyimpan: grafik, pivot beserta cache-nya, slicer, gambar, dan format bersyarat disalin kembali dari berkas asli. Kalau penggabungan tidak lolos pemeriksaan, berkas disimpan apa adanya seperti keluaran mesin.',
    'ActiveX controls': 'Kontrol ActiveX',
    'Parts and control definitions are carried over, but ActiveX buttons still do not run code':
      'Bagian dan definisi kontrol tetap dibawa, tetapi tombol ActiveX masih belum menjalankan kode.',
    'Legacy formats': 'Format lama',
    '.doc and .ppt are still not supported. Spreadsheets in old or foreign containers — .xls, .xlsb, .ods, .numbers — are converted to .xlsx when you open them, so you can read and edit the data; any macros inside those files are NOT carried over by the conversion':
      '.doc dan .ppt belum didukung. Spreadsheet dalam wadah lama atau asing — .xls, .xlsb, .ods, .numbers — dikonversi ke .xlsx saat dibuka, jadi datanya tetap bisa dibaca dan disunting; makro di dalamnya TIDAK ikut terbawa konversi.',
    'Printing on Android': 'Mencetak di Android',
    'Not available yet — the print action reports “not supported”':
      'Dialog cetak Android belum tersedia di build ini (butuh plugin native). Penggantinya: tombol PDF di kanan bawah mengubah dokumen/lembar menjadi berkas PDF di Documents/Ekspor, lalu kamu cetak atau bagikan dari aplikasi lain.',
    'AI panel': 'Panel AI',
    'Available in Spreadsheet: bring your own Gemini key (Tentang → AI Assistant). Without a key the panel only explains how to add one':
      'Tersedia di Dokumen, Spreadsheet, Slide, dan PDF — percakapan berlanjut, bisa langsung menulis ke lembar kerja, dan mendukung Gemini, OpenAI/Groq, serta Claude lewat kunci API Anda sendiri. Tanpa kunci, panel hanya menjelaskan cara mengisinya.',
    'Cloud & real-time collaboration': 'Cloud & kolaborasi waktu nyata',
    'Offline only: no cloud sync, no co-editing like Google Docs or Office 365':
      'Hanya luring: tanpa sinkronisasi cloud, tanpa penyuntingan bersama seperti Google Docs atau Office 365.',
    'Formulas': 'Rumus',
    'Common functions work, but very new or rare Excel functions may be missing or return a different result':
      'Fungsi umum berjalan; fungsi Excel yang sangat baru atau langka bisa belum ada. Untuk memeriksa rumus sebelum dipakai: ketuk tombol fx di Spreadsheet (memeriksa kurung, kutip, nama fungsi) dan menuliskan hasilnya ke sel aktif.',
  };

  var ABOUT_ZH = {
    'Your Office, Reimagined': '你的办公室，重新构想',
    'A powerful and modern office suite for Android. Create, edit, and manage your documents, spreadsheets, and presentations, anytime, anywhere.':
      '面向 Android 的现代办公套件。随时随事创建、编辑和管理文档、表格与演示文稿。',
    'App Information': '应用信息',
    'App Name': '应用名称',
    'Version': '版本',
    'Platform': '平台',
    'Package Name': '包名',
    'Status': '状态',
    'Storage not accessible': '无法访问存储',
    'Local Workspace': '本地工作区',
    'Storage Location': '存储位置',
    'Document Files': '文档文件',
    'Total Size': '总大小',
    'Recent List': '最近列表',
    'Preferences': '偏好设置',
    'File Preview': '文件预览',
    'Default Format': '默认格式',
    'Maintenance': '维护',
    'Manage your app data and performance.': '管理应用数据与性能。',
    'Refresh File Index': '刷新文件索引',
    'Re-scan local files and update the index.': '重新扫描本地文件并更新索引。',
    'Refresh': '刷新',
    'Clear Recent Files': '清除最近文件',
    'Remove your recent file history.': '删除最近打开的记录。',
    'Clear': '清除',
    'Reload Application': '重新加载应用',
    'Restart the app to apply changes.': '重启应用以应用更改。',
    'Reload': '重新加载',
    'Known Limitations': '已知限制',
    'What this Android build does not do — stated plainly, so nothing surprises you later.':
      '这个 Android 版本暂时做不到的事，直接写清楚，免得以后意外。',
    'Excel charts, pivot tables, conditional formatting, slicers': 'Excel 图表、数据透视表、条件格式、切片器',
    'Restored on save: charts, pivot tables and caches, slicers, drawings and conditional formatting are copied back from the original file. If the merge cannot be validated the file is saved exactly as the engine wrote it':
      '保存时会还原：图表、数据透视表及其缓存、切片器、图形和条件格式都从原文件复制回来。若合并校验不通过，文件按引擎输出原样保存。',
    'ActiveX controls': 'ActiveX 控件',
    'Parts and control definitions are carried over, but ActiveX buttons still do not run code':
      '部件和控件定义会保留，但 ActiveX 按钮仍不会执行代码。',
    'Legacy formats': '旧格式',
    '.doc and .ppt are still not supported. Spreadsheets in old or foreign containers — .xls, .xlsb, .ods, .numbers — are converted to .xlsx when you open them, so you can read and edit the data; any macros inside those files are NOT carried over by the conversion':
      '.doc 与 .ppt 仍不支持。旧容器或其他格式的表格 — .xls、.xlsb、.ods、.numbers — 打开时会转换为 .xlsx，数据可读可改；其中宏不会被转换保留。',
    'Printing on Android': 'Android 打印',
    'Not available yet — the print action reports “not supported”':
      '暂不可用 — 打印操作会提示“不支持”。',
    'AI panel': 'AI 面板',
    'Available in Spreadsheet: bring your own Gemini key (Tentang → AI Assistant). Without a key the panel only explains how to add one':
      '表格、文档、幻灯片均可用：自带 API 密钥（设置 → AI）。未填密钥时面板只说明填写方式。',
    'Cloud & real-time collaboration': '云端与实时协作',
    'Offline only: no cloud sync, no co-editing like Google Docs or Office 365':
      '仅离线：没有云同步，也没有 Google Docs 或 Office 365 那样的共同编辑。',
    'Formulas': '公式',
    'Common functions work, but very new or rare Excel functions may be missing or return a different result':
      '常用函数可用，但很新或少见的 Excel 函数可能缺失或结果不同。'
  };


  /* ---------- terjemahan teks beranda ---------- */
  var TEXT_MAP = {
    'Good morning': 'Selamat pagi',
    'Good afternoon': 'Selamat siang',
    'Good evening': 'Selamat sore',
    'Good night': 'Selamat malam',
    'What would you like to create today?': 'Mau buat apa hari ini?',
    'Open a file or start something new. Everything stays on this device.':
      'Buka berkas atau mulai yang baru. Semua tersimpan di perangkat ini.',
    'Recent': 'Terakhir',
    'Starred': 'Berbintang',
    'Files': 'Berkas',
    'Docs': 'Dokumen',
    'Sheets': 'Spreadsheet',
    'Slides': 'Slide',
    'Open local file': 'Buka berkas lokal',
    'On this device': 'Di perangkat ini',
    'Workspace': 'Ruang kerja',
    'Create new': 'Buat baru',
    'Search files': 'Cari berkas',
    'All': 'Semua',
    'No files yet': 'Belum ada berkas',
    'Create a document or open a file from this device to get started.':
      'Buat dokumen atau buka berkas dari perangkat ini untuk mulai.',
    'Open a file': 'Buka berkas',
    'Files': 'Berkas'
  };

  var TEXT_MAP_ZH = {
    'Good morning': '\u65e9\u4e0a\u597d', 'Good afternoon': '\u4e0b\u5348\u597d',
    'Good evening': '\u665a\u4e0a\u597d', 'Good night': '\u665a\u5b89',
    'What would you like to create today?': '\u4eca\u5929\u60f3\u505a\u4ec0\u4e48\uff1f',
    'Open a file or start something new. Everything stays on this device.':
      '\u6253\u5f00\u6587\u4ef6\u6216\u65b0\u5efa\u3002\u6240\u6709\u5185\u5bb9\u90fd\u4fdd\u5b58\u5728\u672c\u673a\u3002',
    'Recent': '\u6700\u8fd1', 'Starred': '\u5df2\u661f\u6807', 'Files': '\u6587\u4ef6',
    'Docs': '\u6587\u6863', 'Sheets': '\u8868\u683c', 'Slides': '\u5e7b\u706f\u7247',
    'Open local file': '\u6253\u5f00\u672c\u5730\u6587\u4ef6', 'On this device': '\u5728\u672c\u673a',
    'Workspace': '\u5de5\u4f5c\u533a', 'Create new': '\u65b0\u5efa',
    'Search files': '\u641c\u7d22\u6587\u4ef6', 'All': '\u5168\u90e8',
    'No files yet': '\u8fd8\u6ca1\u6709\u6587\u4ef6',
    'Create a document or open a file from this device to get started.':
      '\u65b0\u5efa\u6587\u6863\u6216\u4ece\u672c\u673a\u6253\u5f00\u6587\u4ef6\u5f00\u59cb\u4f7f\u7528\u3002',
    'Open a file': '\u6253\u5f00\u6587\u4ef6'
  };

  function translate(root) {
    var lang = getLang();
    if (lang === 'en') return;
    window.__akTranslating = true;
    var __done = function () { window.__akTranslating = false; };
    var base = lang === 'zh' ? TEXT_MAP_ZH : lang === 'en' ? {} : TEXT_MAP;
    var extra = lang === 'zh' ? ABOUT_ZH : lang === 'en' ? {} : ABOUT_ID;
    var map = {};
    if (lang !== 'en') { for (var k0 in extra) map[k0] = extra[k0]; for (var k1 in base) map[k1] = base[k1]; }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var node, changed = 0;
    while ((node = walker.nextNode())) {
      var t = node.nodeValue;
      if (!t) continue;
      var trimmed = t.trim();
      if (map[trimmed]) {
        var nv = t.replace(trimmed, map[trimmed]);
        if (nv !== node.nodeValue) { node.nodeValue = nv; changed++; }
      }
    }
    // label atribut
    var aria = root.querySelectorAll('[aria-label="Create new"]');
    var newLabel = lang === 'zh' ? '\u65b0\u5efa' : lang === 'en' ? 'Create new' : 'Buat baru';
    for (var i = 0; i < aria.length; i++) aria[i].setAttribute('aria-label', newLabel);
    __done();
  }

  /* ---------- kartu donasi ---------- */
  function donateMarkup() {
    return '' +
      '<div class="ak-dh">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-7-9.3A3.9 3.9 0 0 1 12 7.6 3.9 3.9 0 0 1 19 10.7C19 15.6 12 20 12 20z"/></svg>' +
      '<span>Donasi seikhlasnya</span>' +
      '<button class="ak-qr" type="button" data-ak-qr><i>QR</i> pindai</button>' +
      '</div>' +
      '<button class="ak-row" type="button" data-ak-copy="' + MANDIRI_RAW + '">' +
      '<b>Mandiri</b><span>' + MANDIRI + '</span><small>' + HOLDER + '</small></button>' +
      '<button class="ak-row" type="button" data-ak-copy="' + DANA_RAW + '">' +
      '<b>DANA</b><span>' + DANA + '</span><small>' + HOLDER + '</small></button>';
  }

  function patchDonate() {
    var box = document.querySelector('.donate-sticky .donate-box');
    if (!box || box.getAttribute('data-ak') === '1') return;
    box.setAttribute('data-ak', '1');
    box.removeAttribute('data-copy-account');
    box.className = 'ak-donate';
    box.innerHTML = donateMarkup();
    box.addEventListener('click', function (ev) {
      var qr = ev.target.closest('[data-ak-qr]');
      if (qr) { ev.preventDefault(); ev.stopPropagation(); openQr(); return; }
      var copy = ev.target.closest('[data-ak-copy]');
      if (copy) { ev.preventDefault(); ev.stopPropagation(); copyText(copy.getAttribute('data-ak-copy')); }
    }, true);
  }

  /* ---------- panel QR + rekening ---------- */
  function ensureSheet() {
    if (document.getElementById('ak-sheet')) return document.getElementById('ak-sheet');
    var el = document.createElement('div');
    el.id = 'ak-sheet';
    el.className = 'ak-sheet';
    el.hidden = true;
    el.innerHTML =
      '<div class="ak-panel" role="group" aria-label="Donasi seikhlasnya">' +
      '<div class="ak-grab"></div>' +
      '<h3>Donasi seikhlasnya</h3>' +
      '<p class="ak-sub">Biaya server, sertifikat penandatanganan, dan pengembangan fitur. Aplikasi tetap berfungsi penuh tanpa donasi.</p>' +
      '<div class="ak-qrbox">' +
      '<img src="./shim/assets/dana-qr.png" alt="QR DANA" />' +
      '<b>Pindai lewat aplikasi DANA</b>' +
      '<small>' + DANA + ' · a.n. ' + HOLDER + '</small>' +
      '</div>' +
      '<div class="ak-accts">' +
      '<button class="ak-row" type="button" data-ak-copy="' + MANDIRI_RAW + '"><b>Mandiri</b><span>' + MANDIRI + '</span><em>salin</em></button>' +
      '<button class="ak-row" type="button" data-ak-copy="' + DANA_RAW + '"><b>DANA</b><span>' + DANA + '</span><em>salin</em></button>' +
      '</div>' +
      '<button class="ak-close" type="button" data-ak-close>Tutup</button>' +
      '</div>';
    el.addEventListener('click', function (ev) {
      if (ev.target === el || ev.target.closest('[data-ak-close]')) { closeQr(); return; }
      var copy = ev.target.closest('[data-ak-copy]');
      if (copy) copyText(copy.getAttribute('data-ak-copy'));
    });
    document.body.appendChild(el);
    return el;
  }
  function openQr() {
    var el = ensureSheet();
    el.hidden = false;
  }
  function closeQr() {
    var el = document.getElementById('ak-sheet');
    if (el) el.hidden = true;
  }

  function copyText(text) {
    var done = function () { toast('Nomor rekening disalin'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { legacy(text, done); });
    } else legacy(text, done);
  }
  function legacy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }

  /* ---------- kartu Tampilan + ucapan terima kasih di Tentang ---------- */
  function appearanceCard() {
    var modes = [['light', t('light')], ['dark', t('dark')], ['system', t('system')]];
    var mode = document.documentElement.getAttribute('data-theme') || themeMode();
    var hex = colorHex();
    var segs = modes.map(function (m) {
      var on = (mode === m[0] || (m[0] === 'system' && mode === 'system')) ? ' aria-pressed="true"' : ' aria-pressed="false"';
      return '<button type="button" data-ak-mode="' + m[0] + '"' + on + '>' + m[1] + '</button>';
    }).join('');
    var dots = COLORS.map(function (c) {
      var on = c.hex === hex ? ' aria-pressed="true"' : ' aria-pressed="false"';
      var ring = c.hex === '#FFFFFF' ? ';box-shadow:inset 0 0 0 1px #d9e2f0' : '';
      return '<button type="button" data-ak-color="' + c.hex + '" aria-label="' + c.name + '" title="' + c.name + '"' + on +
        ' style="background:' + c.hex + ring + '"></button>';
    }).join('');
    return '<section class="ak-card" data-ak-card="appearance">' +
      '<h2>' + t('appearance') + '</h2>' +
      '<div class="ak-seg">' + segs + '</div>' +
      '<div class="ak-colors">' + dots + '<span class="ak-cname">' + colorMeta(hex).name + '</span></div>' +
      '<p class="ak-note">' + t('note') + '</p>' +
      '</section>';
  }

  function thanksCard() {
    return '<section class="ak-card" data-ak-card="thanks">' +
      '<h2>Special Thanks</h2>' +
      '<div class="ak-thanks">' +
      '<div class="ak-g"><b>Aplikasi awal</b><p>Zen Office — pembuat awal aplikasi ini. Fondasi antarmuka, penyunting dokumen, dan penyimpanan lokal berasal dari karya mereka.</p></div>' +
      '<div class="ak-g"><b>Asisten &amp; alat</b><p>Dola AI dan Muse AI — bantuan penyusunan kode, perbaikan bug, dan pengujian.</p></div>' +
      '<div class="ak-g"><b>Pengembang</b><p>Noviandi A. Dj. Kore (Andi Kore) — arah desain, fitur makro, dan pemeliharaan aplikasi.</p></div>' +
      '<div class="ak-g"><b>Keluarga</b><p>Istri dan anak-anak: Holy, Clara, dan Tulus — untuk dukungan dan kesabaran setiap hari.</p></div>' +
      '</div>' +
      '<div class="ak-verse">Dan di atas semuanya: terima kasih kepada TUHAN YESUS Kristus, yang selalu memberi kesehatan, kekuatan, dan kesempatan untuk berkarya.<em>Kolose 3:23</em></div>' +
      '</section>';
  }

  var AI_DEF = {
    gemini: { base: 'https://generativelanguage.googleapis.com/v1beta', model: 'gemini-3.8-flash' },
    openai: { base: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
    anthropic: { base: 'https://api.anthropic.com/v1', model: 'claude-3-5-sonnet-latest' },
    groq: { base: 'https://api.groq.com/openai/v1', model: 'openai/gpt-oss-120b' },
    deepseek: { base: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
    openrouter: { base: 'https://openrouter.ai/api/v1', model: 'openai/gpt-4o-mini' }
  };
  function aiGet(k, fb) {
    try { var v = localStorage.getItem(k); return v == null || v === '' ? fb : v; } catch (e) { return fb; }
  }
  function aiCard() {
    var prov = aiGet('ak.ai.provider', 'gemini');
    if (!AI_DEF[prov]) prov = 'gemini';
    var base = aiGet('ak.ai.base', AI_DEF[prov].base);
    var model = aiGet('ak.ai.model', AI_DEF[prov].model);
    var key = aiGet('ak.ai.key', '');
    var opts = [['gemini', 'Google Gemini'], ['groq', 'Groq (gratis, cepat)'], ['openai', 'OpenAI'], ['deepseek', 'DeepSeek'], ['openrouter', 'OpenRouter'], ['anthropic', 'Anthropic Claude']]
      .map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === prov ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
    return '<section class="ak-card" data-ak-card="ai">' +
      '<h2>AI</h2>' +
      '<div class="ak-field"><label>Penyedia</label><select data-ak-ai-prov>' + opts + '</select></div>' +
      '<div class="ak-field"><label>Alamat API</label><input data-ak-ai-base type="url" value="' + base + '" spellcheck="false"></div>' +
      '<div class="ak-field"><label>Model</label><input data-ak-ai-model type="text" value="' + model + '" spellcheck="false"></div>' +
      '<div class="ak-field"><label>Kunci API</label><input data-ak-ai-key type="password" value="' + key + '" placeholder="sk-... / AIza..." autocomplete="off"></div>' +
      '<div class="ak-btns"><button type="button" class="ak-btn-primary" data-ak-ai-save>Simpan</button><button type="button" class="ak-btn" data-ak-ai-test>Uji</button></div>' +
      '<p class="ak-note" data-ak-ai-status>Pilih "OpenAI / kompatibel" untuk OpenAI, DeepSeek, Groq, OpenRouter — cukup ganti alamat API. Gemini dan Claude juga didukung.</p>' +
      '</section>';
  }

  function langCard() {
    var cur = getLang();
    var segs = LANGS.map(function (l) {
      var on = l[0] === cur ? ' aria-pressed="true"' : ' aria-pressed="false"';
      return '<button type="button" data-ak-lang="' + l[0] + '"' + on + '>' + l[1] + '</button>';
    }).join('');
    return '<section class="ak-card" data-ak-card="lang">' +
      '<h2>' + t('lang') + '</h2>' +
      '<div class="ak-seg">' + segs + '</div>' +
      '<p class="ak-note">' + t('noteLang') + '</p>' +
      '</section>';
  }

  function polishHome() {
    var hero = document.querySelector('.hero');
    if (hero && !hero.querySelector('.ak-hero-chip')) {
      var h1 = hero.querySelector('h1, .hero-title');
      if (h1) {
        var chip = document.createElement('div');
        chip.className = 'ak-hero-chip';
        var d = new Date();
        var bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
        chip.textContent = d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
        h1.parentNode.insertBefore(chip, h1);
      }
    }
    /* buang tombol Buat dokumen & Buat spreadsheet di kerangka kosong */
    try {
      var btns = document.querySelectorAll('button');
      for (var bi = 0; bi < btns.length; bi++) {
        var tx = (btns[bi].textContent || '').replace(/\s+/g, ' ').trim();
        if (/^Buat dokumen$|^Buat spreadsheet$|^New document$|^New spreadsheet$/i.test(tx)) {
          var row = btns[bi].parentElement;
          btns[bi].remove();
          if (row && row.children.length === 0) row.remove();
        }
      }
    } catch (e) {}
    /* rapikan Beranda: tanpa ubin, filter tepat di bawah subjudul */
    try {
      var grid = document.querySelector('.quick-cards, .quick-grid');
      if (grid) grid.remove();
      var pill = document.querySelector('[data-filter]');
      var bar = pill && pill.parentElement;
      if (bar && bar.getAttribute('data-ak') !== '1') {
        var sub = null;
        var ps = document.querySelectorAll('#home-view p, #home p, .home-scroll p');
        for (var k = 0; k < ps.length; k++) {
          if (/Buka berkas|mulai yang baru|Open a file/i.test(ps[k].textContent || '')) { sub = ps[k]; break; }
        }
        if (sub && bar.contains(sub) === false) {
          bar.setAttribute('data-ak', '1');
          bar.classList.add('ak-filter-row');
          sub.parentNode.insertBefore(bar, sub.nextSibling);
        }
      }
    } catch (e) {}

  }

  function storageBanner() {
    var body = document.body.textContent || '';
    var bad = /Storage not accessible|Penyimpanan tidak dapat diakses|Local storage is not available/i.test(body);
    if (!bad) {
      var old = document.getElementById('ak-storage-bar');
      if (old) old.remove();
      return;
    }
    var host = document.querySelector('[data-view-panel="files"], #files-view, .files-view, .files-page');
    if (!host || document.getElementById('ak-storage-bar')) return;
    var bar = document.createElement('div');
    bar.id = 'ak-storage-bar';
    bar.className = 'ak-storage-bar';
    bar.innerHTML = '<span>Penyimpanan belum diizinkan — berkas tidak bisa dihapus atau dibuka.</span><button type="button">Beri izin</button>';
    bar.querySelector('button').addEventListener('click', function () {
      var about = document.getElementById('about-button');
      if (about) about.click();
      setTimeout(function () {
        var btn = null;
        var all = document.querySelectorAll('.about-page button');
        for (var i = 0; i < all.length; i++) {
          if (/izin penyimpanan|storage permission/i.test(all[i].textContent || '')) { btn = all[i]; break; }
        }
        if (btn) btn.click();
      }, 350);
    });
    if (host.firstChild) host.insertBefore(bar, host.firstChild);
    else host.appendChild(bar);
  }

  function embedCredits(page) {
    var cards = page.querySelectorAll('.about-card');
    var aboutCard = null, creditsCard = null;
    for (var i = 0; i < cards.length; i++) {
      var h = cards[i].querySelector('h2');
      var txt = h ? h.textContent : '';
      if (/Open Source & (Credits|Licen)/i.test(txt)) creditsCard = cards[i];
      if (/About Andi Kore Office/i.test(txt)) aboutCard = cards[i];
    }
    if (creditsCard) creditsCard.style.setProperty('display', 'none', 'important');
    if (!aboutCard || aboutCard.getAttribute('data-ak-credits') === '1') return;
    aboutCard.setAttribute('data-ak-credits', '1');
    aboutCard.insertAdjacentHTML('beforeend',
      '<div class="ak-inline">' +
        '<div><b>Lisensi</b><span>GenOffice \u00a9 2026 Mainfunc, Inc. \u2014 Apache License 2.0. Komponen pihak ketiga memakai lisensinya masing-masing.</span></div>' +
        '<div><b>Special Thanks</b><span>Zen Office \u00b7 Dola AI &amp; Muse AI \u00b7 Noviandi A. Dj. Kore \u00b7 Istri dan anak-anak saya: Holy, Clara, dan Tulus \u00b7 dan TUHAN YESUS Kristus, yang selalu memberi kesehatan kepada kita semua (Kolose 3:23).</span></div>' +
      '</div>');
  }


  var aboutWant = 'about';
  function storageRow() {
    var card = null;
    var h2s = document.querySelectorAll('.about-card h2');
    for (var i = 0; i < h2s.length; i++) {
      if (/preferensi|preferences/i.test(h2s[i].textContent)) { card = h2s[i].closest('.about-card'); break; }
    }
    if (!card || card.getAttribute('data-ak-storage') === '1') return;
    card.setAttribute('data-ak-storage', '1');
    var row = document.createElement('div');
    row.className = 'ak-storage-row';
    row.innerHTML = '<b>Izin penyimpanan</b><small>Diperlukan agar berkas bisa dibuka dan disimpan.</small><button type="button">Minta izin akses semua berkas</button>';
    row.querySelector('button').addEventListener('click', function () {
      try {
        var P = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.OpenIntent;
        if (P && P.requestStorageAccess) P.requestStorageAccess();
      } catch (e) {}
      row.querySelector('small').textContent = 'Ikuti instruksi di layar, aktifkan izin, lalu kembali ke aplikasi.';
    });
    card.appendChild(row);
  }

  function aiCardStyle() {
    if (document.getElementById('ak-ai-card-css')) return;
    var st = document.createElement('style');
    st.id = 'ak-ai-card-css';
    st.textContent = '.ak-ai-card{display:none!important}body.ak-mode-about .ak-ai-card{display:block!important}';
    document.head.appendChild(st);
  }

  function aiCardSync() {
    aiCardStyle();
    var page = document.querySelector('.about-page');
    if (!page) { document.body.classList.remove('ak-mode-about'); return; }
    var visSet = false, visInfo = false;
    var cards = page.querySelectorAll('.about-card');
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('ak-ai-card')) continue;
      if (!cards[i].getClientRects().length) continue;
      var h = cards[i].querySelector('h2');
      var t = h ? h.textContent : '';
      if (/preferensi|preferences|ai assistant|pemeliharaan|ruang kerja|workspace/i.test(t)) visSet = true;
      if (/batasan|limitation|special thanks|licenses|tentang|app info|informasi aplikasi/i.test(t)) visInfo = true;
    }
    if (visInfo && !visSet) document.body.classList.add('ak-mode-about');
    else document.body.classList.remove('ak-mode-about');
    var extra = page.querySelector('.ak-ai-card');
    if (extra && !(visInfo && !visSet)) extra.style.setProperty('display', 'none', 'important');
  }

  setInterval(aiCardSync, 400);

  function applyMode(page, mode) {
    ensureAiCard(page);
    var SET = /preferensi|preferences|ai assistant|pemeliharaan|ruang kerja/i;
    var INFO = /informasi aplikasi|batasan|known limitations|special thanks|tentang|licenses|open source|credits|about andi kore|app info/i;
    page.setAttribute('data-ak-mode', mode);
    var cards = page.querySelectorAll('.about-card');
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].classList.contains('ak-ai-card')) continue;
      var h = cards[i].querySelector('h2');
      var title = h ? h.textContent : '';
      var hide = false;
      if (mode === 'settings') hide = INFO.test(title) && !SET.test(title);
      else if (mode === 'about') hide = SET.test(title);
      cards[i].style.setProperty('display', hide ? 'none' : '', hide ? 'important' : '');
    }
    if (mode === 'about') document.body.classList.add('ak-mode-about');
    else document.body.classList.remove('ak-mode-about');
    aiCardSync();
  }
  function openPanel(mode) {
    filterAbout(mode);
    var tries = 0;
    (function ensure() {
      var page = document.querySelector('.about-page');
      if (!page) {
        var btn = document.getElementById('about-button');
        if (btn) btn.click();
        else {
          var alt = document.querySelector('[data-view="about"]');
          if (alt) alt.click();
        }
      } else {
        applyMode(page, mode);
        if (mode === 'settings') storageRow();
      }
      tries++;
      if (tries < 12) setTimeout(ensure, 260);
    })();
  }
  function ensureAiCard(page) {
    if (page.querySelector('.ak-ai-card')) return;
    var cards = page.querySelectorAll('.about-card');
    var target = null;
    for (var i = 0; i < cards.length; i++) {
      var h = cards[i].querySelector('h2');
      if (h && /batasan|limitation/i.test(h.textContent || '')) { target = cards[i]; break; }
    }
    if (!target) return;
    var card = document.createElement('div');
    card.className = 'about-card ak-ai-card';
    card.style.cssText = 'border:1px solid rgba(120,146,196,.35);border-radius:14px;padding:16px 18px;margin:12px 0 16px;background:rgba(120,150,220,.10)';
    card.innerHTML =
      '<h2 style="margin:0 0 8px;font-size:16px;color:inherit">Kelebihan dan batasan</h2>' +
      '<div style="font-size:13px;line-height:1.6;color:inherit;opacity:.92">' +

      '<p style="margin:0 0 6px"><b>Kelebihan</b></p>' +
      '<ul style="margin:0 0 12px;padding-left:18px">' +
      '<li><b>AI membaca tanpa memblok</b> — kalau tidak ada teks yang diblok, AI membaca seluruh isi lembar kerja (maks 6.000 karakter) dan menyebut sumber konteksnya.</li>' +
      '<li><b>AI menulis langsung</b> — di Docs dan Sheets, perintah "tulis…/buat…/rapikan…" langsung mengubah lembar kerja; teks yang diblok diganti, bukan ditambah.</li>' +
      '<li><b>Percakapan berlanjut</b> — pertanyaan berikutnya masih ingat jawaban sebelumnya; tombol <b>Baru</b> menghapus riwayat.</li>' +
      '<li><b>7 penyedia AI</b> — Gemini, Groq, OpenAI, DeepSeek, OpenRouter, Claude. Kunci disimpan di perangkat, tidak dikirim ke server lain.</li>' +
      '<li><b>Pustaka prompt</b> — 8 perintah siap pakai (ringkas, perbaiki ejaan, surat resmi, analisis tabel, kerangka presentasi, terjemah, caption, tabel jadi narasi) plus tambah/imporm sendiri.</li>' +
      '<li><b>11 makro lokal di Sheets</b> — huruf besar/kecil/Awal Besar, rapikan spasi, urutkan, tukar baris-kolom, gabung dan pisah teks, isi nomor urut, teks jadi angka, hapus baris kembar, cari duplikat. Jalan di HP, tanpa internet.</li>' +
      '<li><b>Slide Studio</b> — membuat berkas <b>.pptx asli</b> dari kerangka teks atau dari AI; teksnya objek teks, jadi bisa diedit di PowerPoint.</li>' +
      '<li><b>Buat gambar</b> — panel AI bisa membuat gambar lewat OpenAI atau Gemini, lalu menyimpannya ke Documents/Ekspor.</li>' +
      '<li><b>Hitung dan grafik lokal</b> — total, rata-rata, terbesar, terkecil dan grafik dikerjakan di perangkat; AI hanya menjelaskan.</li>' +
      '<li><b>PDF asli</b> — ekspor dokumen jadi PDF A4 lewat pustaka pdf-lib, tanpa aplikasi tambahan.</li>' +
      '<li><b>Bahasa Indonesia, tema gelap</b> — antarmuka dan AI memakai Bahasa Indonesia; tema gelap mengurangi silau.</li>' +
      '</ul>' +

      '<p style="margin:0 0 6px"><b>Batasan yang perlu diketahui</b></p>' +
      '<ul style="margin:0 0 12px;padding-left:18px">' +
      '<li><b>Slides dan PDF: AI hanya membaca</b> — AI menjawab dan merangkum, tetapi tidak menulis ke dalam slide. Untuk membuat slide berisi teks, pakai <b>Buat Slide</b> (menghasilkan .pptx baru).</li>' +
      '<li><b>AI butuh internet dan kunci sendiri</b> — aplikasi tidak menyediakan kunci. Biaya, kuota, dan pemblokiran model berasal dari penyedia, bukan dari aplikasi.</li>' +
      '<li><b>Gambar hanya OpenAI dan Gemini</b> — Groq, DeepSeek, OpenRouter, Claude tidak bisa membuat gambar. OpenAI butuh saldo/billing aktif.</li>' +
      '<li><b>Tidak ada mesin VBA di Android</b> — makro di sini adalah operasi yang ditulis ulang agar bekerja di HP, bukan VBA asli. VBA penuh hanya jalan di Excel (Windows).</li>' +
      '<li><b>Bacaan AI dibatasi 6.000 karakter</b> — dokumen sangat panjang dipotong; bagian yang terlewat tidak dibaca.</li>' +
      '<li><b>Format rumit bisa berubah</b> — AI menulis teks, bukan tata letak. Tabel, kolom, dan gaya khusus bisa kehilangan bentuk aslinya.</li>' +
      '<li><b>Tidak ada sinkronisasi awan</b> — berkas hanya di perangkat; tidak ada kolaborasi atau cadangan otomatis.</li>' +
      '<li><b>Dipasang manual (sideload)</b> — tidak lewat Play Store, jadi Android bisa menampilkan peringatan saat memasang pembaruan. Tanda tangan aplikasi tetap konsisten.</li>' +
      '</ul>' +

      '<p style="margin:0 0 6px"><b>Berlaku di mana?</b></p>' +
      '<div style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12.5px">' +
      '<tr style="text-align:left"><th style="padding:5px 8px;border-bottom:1px solid rgba(120,146,196,.35)">Aplikasi</th><th style="padding:5px 8px;border-bottom:1px solid rgba(120,146,196,.35)">Baca isi</th><th style="padding:5px 8px;border-bottom:1px solid rgba(120,146,196,.35)">Tulis hasil</th><th style="padding:5px 8px;border-bottom:1px solid rgba(120,146,196,.35)">Makro</th></tr>' +
      '<tr><td style="padding:5px 8px">Docs (Word)</td><td style="padding:5px 8px">Ya</td><td style="padding:5px 8px">Ya — kursor / ganti blok</td><td style="padding:5px 8px">Tidak</td></tr>' +
      '<tr><td style="padding:5px 8px">Sheets (Excel)</td><td style="padding:5px 8px">Ya — sel terpakai</td><td style="padding:5px 8px">Ya — sel/rentang aktif</td><td style="padding:5px 8px">Ya — 11 operasi lokal</td></tr>' +
      '<tr><td style="padding:5px 8px">Slides (PowerPoint)</td><td style="padding:5px 8px">Ya</td><td style="padding:5px 8px">Tidak — hanya menjawab</td><td style="padding:5px 8px">Buat .pptx baru</td></tr>' +
      '<tr><td style="padding:5px 8px">PDF</td><td style="padding:5px 8px">Ya</td><td style="padding:5px 8px">Tidak (hanya baca)</td><td style="padding:5px 8px">Tidak</td></tr>' +
      '</table></div>' +
      '<p style="margin:8px 0 0;opacity:.8;font-size:12.5px">Di Slides, penulisan ke slide tidak didukung karena editor tidak menyediakan kotak teks otomatis; jalur yang tersedia adalah membuat presentasi baru lewat tombol "Buat Slide".</p>' +
      '</div>';
    target.parentNode.insertBefore(card, target);
  }

  function filterAbout(mode) {
    var page = document.querySelector('.about-page');
    ensureBack(mode === 'settings' || mode === 'about');
    if (page) applyMode(page, mode);
    if (mode === 'settings') storageRow();
    clearInterval(window.__akModeTimer);
    var tries = 0;
    window.__akModeTimer = setInterval(function () {
      tries++;
      var pg = document.querySelector('.about-page');
      if (pg) applyMode(pg, mode);
      if (tries > 8) clearInterval(window.__akModeTimer);
    }, 300);
  }


  function goBeranda() {
    document.body.classList.remove('ak-mode-about');
    var nav = document.querySelector('[data-view="recent"], [data-view="files"]');
    if (nav) { nav.click(); }
    else {
      var brand = document.getElementById('brand-home');
      if (brand) brand.click();
    }
    setTimeout(function () {
      var about = document.querySelector('.about-page');
      var hidden = about && about.offsetParent !== null;
      if (hidden) {
        about.style.setProperty('display', 'none', 'important');
        var home = document.getElementById('home');
        if (home) home.classList.remove('is-hidden');
        var hv = document.getElementById('home-view');
        if (hv) hv.classList.remove('is-hidden');
      }
      var back = document.querySelector('.ak-back');
      if (back) back.remove();
    }, 260);
  }

  function ensureBack(show) {
    var b = document.querySelector('.ak-back');
    if (!show) { if (b) b.remove(); return; }
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.className = 'ak-back';
      b.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg><span>Beranda</span>';
      b.addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        goBeranda();
      }, true);
      document.body.appendChild(b);
    }
  }

  function patchAbout() {
    var page = document.querySelector('.about-page');
    if (!page) return;
    if (page.getAttribute('data-ak') === '1') return;
    page.setAttribute('data-ak', '1');
    embedCredits(page);
    filterAbout(aboutWant);

    var ai = null;
    page.querySelectorAll('h2').forEach(function (h) {
      if (/AI Assistant|AI/i.test(h.textContent) && h.closest('.about-card')) ai = h.closest('.about-card');
    });
    if (ai && ai.getAttribute('data-ak-ai') !== '1') {
      ai.setAttribute('data-ak-ai', '1');
      var card = document.createElement('div');
      card.className = 'about-card';
      card.setAttribute('data-ak-card', 'ai');
      card.innerHTML = '<h2>AI Assistant</h2>' +
        '<div class="ak-field"><label>Penyedia</label><select data-ak-ai-prov>' +
        [['gemini', 'Google Gemini'], ['groq', 'Groq (gratis, cepat)'], ['openai', 'OpenAI'], ['deepseek', 'DeepSeek'], ['openrouter', 'OpenRouter'], ['anthropic', 'Anthropic Claude']]
          .map(function (o) { return '<option value="' + o[0] + '"' + (aiGet('ak.ai.provider', 'gemini') === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
        '</select></div>' +
        '<div class="ak-field"><label>Alamat API</label><input data-ak-ai-base type="url" spellcheck="false" value="' + aiGet('ak.ai.base', AI_DEF[aiGet('ak.ai.provider', 'gemini')] ? AI_DEF[aiGet('ak.ai.provider', 'gemini')].base : AI_DEF.gemini.base) + '"></div>' +
        '<div class="ak-field"><label>Model</label><input data-ak-ai-model type="text" spellcheck="false" value="' + aiGet('ak.ai.model', (AI_DEF[aiGet('ak.ai.provider', 'gemini')] || AI_DEF.gemini).model) + '"></div>' +
        '<div class="ak-field"><label>Kunci API</label><input data-ak-ai-key type="password" autocomplete="off" placeholder="sk-... / AIza..." value="' + aiGet('ak.ai.key', '') + '"></div>' +
        '<div class="ak-btns"><button type="button" class="ak-btn-primary" data-ak-ai-save>Simpan</button></div>' +
        '<p class="ak-note" data-ak-ai-status>Tujuh penyedia siap pakai: Gemini, Groq, OpenAI, DeepSeek, OpenRouter, dan Claude. Kalau satu penyedia diblokir jaringan, ganti ke penyedia lain \u2014 kunci API tiap penyedia berbeda.</p>';
      ai.parentNode.replaceChild(card, ai);
    }

    page.addEventListener('change', function (ev) {
      var sel = ev.target.closest('[data-ak-ai-prov]');
      if (!sel) return;
      var def = AI_DEF[sel.value];
      if (!def) return;
      var c = sel.closest('[data-ak-card="ai"]');
      c.querySelector('[data-ak-ai-base]').value = def.base;
      c.querySelector('[data-ak-ai-model]').value = def.model;
    });
    page.addEventListener('click', function (ev) {
      var btn = ev.target.closest('[data-ak-ai-save]');
      if (!btn) return;
      var c = btn.closest('[data-ak-card="ai"]');
      var pv = c.querySelector('[data-ak-ai-prov]').value;
      var bu = c.querySelector('[data-ak-ai-base]').value.trim() || AI_DEF[pv].base;
      var md = c.querySelector('[data-ak-ai-model]').value.trim() || AI_DEF[pv].model;
      var ky = c.querySelector('[data-ak-ai-key]').value.trim();
      try {
        localStorage.setItem('ak.ai.provider', pv);
        localStorage.setItem('ak.ai.base', bu);
        localStorage.setItem('ak.ai.model', md);
        localStorage.setItem('ak.ai.key', ky);
        if (pv === 'gemini' && ky) localStorage.setItem('tkn_ai_key', ky);
      } catch (e) {}
      var st = c.querySelector('[data-ak-ai-status]');
      if (st) st.textContent = 'Tersimpan: ' + pv + ' \u00b7 ' + md;
    });
  }

  function refreshAppearance() {
    var page = document.querySelector('.about-page');
    var card = page && page.querySelector('[data-ak-card="appearance"]');
    if (!card) return;
    card.outerHTML = appearanceCard();
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest && ev.target.closest('button, a, [role="button"]');
    if (!t) return;
    var tx = (t.textContent || '').trim();
    if (/^(Pengaturan|Setelan|Settings)$/i.test(tx)) { aboutWant = 'settings'; setTimeout(function () { filterAbout('settings'); }, 260); }
    else if (/^(Tentang|About)$/i.test(tx)) { aboutWant = 'about'; setTimeout(function () { filterAbout('about'); }, 260); }
  }, true);
  window.__akAboutMode = filterAbout;
  window.__akOpenPanel = openPanel;

  /* ---------- jaring aman: tombol buat berkas tidak diam saja ---------- */
  function storageWarn() {
    var old = document.querySelector('.ak-warn');
    if (old) old.remove();
    var b = document.createElement('div');
    b.className = 'ak-warn';
    b.innerHTML = '<b>Berkas baru tidak bisa dibuat</b><p>Aplikasi belum punya izin penyimpanan, jadi dokumen tidak tersimpan. Beri izin "Akses semua berkas" untuk Andi Kore Office, lalu coba lagi.</p><button type="button">Buka pengaturan izin</button>';
    b.querySelector('button').addEventListener('click', function () {
      try {
        var P = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.OpenIntent;
        if (P && P.requestStorageAccess) P.requestStorageAccess();
      } catch (e) {}
      b.remove();
    });
    document.body.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.remove(); }, 12000);
  }

  document.addEventListener('click', function (ev) {
    var n = ev.target.closest && ev.target.closest('[data-new]');
    if (!n) return;
    var before = document.querySelectorAll('#tabstrip [data-tab]').length;
    setTimeout(function () {
      var after = document.querySelectorAll('#tabstrip [data-tab]').length;
      var frame = document.querySelector('.doc-frame');
      if (after === before && !frame) storageWarn();
    }, 1100);
  }, true);

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('#brand-home');
    if (!b) return;
    var about = document.querySelector('.about-page');
    if (about && about.offsetParent !== null) setTimeout(goBeranda, 80);
  }, true);

  /* ---------- observer ringan ---------- */
  var timer = 0;
  var lastLang = '';
  function schedule() {
    var home = document.getElementById('home-view');
    if (home && home.childElementCount) translate(home);
    var langNow = getLang();
    if (langNow !== lastLang) { translate(document.body); lastLang = langNow; }
    storageBanner();
    polishHome();
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (home && home.childElementCount) {
        translate(home);
        patchDonate();
        patchAbout();
      }
      var lg = getLang();
      if (lg !== lastLang) { translate(document.body); lastLang = lg; }
      polishHome();
      placeFab();
      syncDonate();
      syncBadge();
    }, 40);
  }

  function placeFab() {
    try {
      var frame = document.querySelector('.doc-frame');
      var fr = frame && frame.getBoundingClientRect();
      if (fr && fr.height > 40) { var bk = document.querySelector('.ak-back'); if (bk) bk.remove(); }
    } catch (e) {}
    var fab = document.querySelector('.akmm-fab');
    if (fab) fab.style.setProperty('display', 'none', 'important');
    /* di dalam editor (Word/Excel) tombol tetap tersedia, tapi ringkas */
    var frames = document.querySelectorAll('iframe');
    for (var i = 0; i < frames.length; i++) {
      try {
        var doc = frames[i].contentDocument;
        if (!doc) continue;
        var f = doc.querySelector('.akmm-fab');
        if (f && f.getAttribute('data-ak') !== '1') {
          f.setAttribute('data-ak', '1');
          f.style.setProperty('left', 'auto', 'important');
          f.style.setProperty('right', '14px', 'important');
          f.style.setProperty('bottom', '152px', 'important');
          f.style.setProperty('background', '#2a4bff', 'important');
          f.style.setProperty('height', '34px', 'important');
          f.style.setProperty('padding', '0 12px', 'important');
          f.style.setProperty('border-radius', '17px', 'important');
          f.style.setProperty('font-size', '12px', 'important');
          f.style.setProperty('box-shadow', '0 8px 20px rgb(42 75 255 / 28%)', 'important');
          f.style.setProperty('opacity', '0.9', 'important');
        }
      } catch (e) {}
    }
  }


  /* ---------- rel kiri (Word/Excel/PowerPoint/...) ---------- */
  var ICONS = {
    home: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="3"/><path d="M8 21h8"/></svg>',
    docx: '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></svg>',
    xlsx: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 10h16M10 10v10"/></svg>',
    pptx: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="3"/><path d="M8 21h8M12 17v4"/></svg>',
    pdf:  '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>',
    md:   '<svg viewBox="0 0 24 24"><path d="M5 4h9l5 5v11H5z"/><path d="M14 4v5h5"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 4l2.6 5.4 5.9.8-4.3 4.1 1 5.7-5.2-2.8-5.2 2.8 1-5.7L5.5 10.2l5.9-.8z"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.9"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6"/><path d="M12 8.4v.2M12 11.4v4.2"/></svg>'
  };

  function railItem(key, label, handler, badge) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ak-r-item';
    b.setAttribute('data-ak-rail', key);
    b.innerHTML = '<i class="ak-r-ico">' + ICONS[key] + '</i><span>' + label + '</span>' +
      (badge ? '<b class="ak-r-badge"></b>' : '');
    b.addEventListener('click', function (ev) { ev.preventDefault(); handler(); });
    return b;
  }

  function buildRail() {
    if (document.querySelector('.ak-rails')) return;
    if (!window.matchMedia('(max-width: 760px)').matches) return;
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    document.documentElement.classList.add('ak-mobile');

    var rail = document.createElement('nav');
    rail.className = 'ak-rails';

    function goHome() {
      var brand = document.getElementById('brand-home');
      if (brand) brand.click();
      else window.scrollTo(0, 0);
    }
    function clickByText(sel, words) {
      var nodes = document.querySelectorAll(sel);
      for (var i = 0; i < nodes.length; i++) {
        var tx = (nodes[i].textContent || '').trim().toLowerCase();
        for (var j = 0; j < words.length; j++) {
          if (tx === words[j].toLowerCase()) { nodes[i].click(); return true; }
        }
      }
      return false;
    }
    function goView(view) {
      goHome();
      if (view === 'starred') clickByText('[data-view], button', ['favorit', 'starred']);
    }
    function goType(kind) {
      goHome();
      var names = { docx: ['dokumen', 'docs'], xlsx: ['spreadsheet', 'sheets'], pptx: ['slide', 'slides'], pdf: ['pdf', 'pdfs'], md: ['notes', 'markdown'] };
      setTimeout(function () { clickByText('[data-filter], button', names[kind] || []); }, 60);
    }
    function goAbout() {
      var about = document.getElementById('about-button');
      if (about) about.click();
      setBeranda(false);
      markActive('about');
    }
    function markActive(key) {
      rail.querySelectorAll('.ak-r-item').forEach(function (n) {
        n.classList.toggle('is-active', n.getAttribute('data-ak-rail') === key);
      });
    }

    rail.appendChild(railItem('home', t('bar1'), function () { goView('recent'); markActive('home'); }, false));
    rail.appendChild(railItem('docx', 'Word', function () { goType('docx'); markActive('docx'); }, true));
    rail.appendChild(railItem('xlsx', 'Excel', function () { goType('xlsx'); markActive('xlsx'); }, false));
    rail.appendChild(railItem('pptx', 'PowerPoint', function () { goType('pptx'); markActive('pptx'); }, false));
    var sep1 = document.createElement('div'); sep1.className = 'ak-r-sep'; rail.appendChild(sep1);
    rail.appendChild(railItem('pdf', 'PDF', function () { goType('pdf'); markActive('pdf'); }, false));
    rail.appendChild(railItem('md', 'Markdown', function () { goType('md'); markActive('md'); }, false));
    var sep2 = document.createElement('div'); sep2.className = 'ak-r-sep'; rail.appendChild(sep2);
    rail.appendChild(railItem('star', 'Favorit', function () { goView('starred'); markActive('star'); }, false));
    rail.appendChild(railItem('gear', 'Pengaturan', goAbout, false));
    rail.appendChild(railItem('info', 'Tentang', goAbout, false));

    var scrim = document.createElement('div');
    scrim.className = 'ak-scrim';
    scrim.addEventListener('click', function () { document.body.classList.remove('ak-drawer-open'); });
    document.body.appendChild(scrim);

    var myMenu = document.createElement('button');
    myMenu.type = 'button';
    myMenu.className = 'ak-menu-btn';
    myMenu.setAttribute('aria-label', 'Menu');
    myMenu.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h10M4 17h13"/></svg>';
    myMenu.addEventListener('click', function (ev) {
      ev.preventDefault(); ev.stopPropagation();
      document.body.classList.toggle('ak-drawer-open');
    }, true);
    document.body.appendChild(myMenu);

    var menuBtn = null;
    if (menuBtn) {
      menuBtn.addEventListener('click', function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        document.body.classList.toggle('ak-drawer-open');
      }, true);
    }
    document.addEventListener('click', function (ev) {
      if (!document.body.classList.contains('ak-drawer-open')) return;
      var item = ev.target.closest && ev.target.closest('.ak-r-item');
      if (item) document.body.classList.remove('ak-drawer-open');
    }, true);

    document.body.appendChild(rail);
    markActive('home');
    setBeranda(true);

    /* bilah ketik di bawah */
    var composer = document.createElement('div');
    composer.className = 'ak-composer';
    composer.innerHTML = '<span>Ketik nama file / cari... atau buat baru</span>' +
      '<button class="ak-go" type="button" aria-label="Cari atau buat baru">' +
      '<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button>';
    composer.addEventListener('click', function () {
      var plus = document.querySelector('[data-new-tab]');
      if (plus) plus.click();
    });
    document.body.appendChild(composer);
  }

  /* kotak donasi: menempel hanya di Beranda */
  var berandaOn = true;
  function setBeranda(on) {
    berandaOn = !!on;
    syncDonate();
  }
  function syncDonate() {
    var home = document.getElementById('home');
    var editing = !!(home && home.classList.contains('is-hidden'));
    document.body.classList.toggle('ak-editing', editing);
    var sticky = document.querySelector('.donate-sticky');
    if (!sticky) return;
    var show = berandaOn && !document.getElementById('home').classList.contains('is-hidden');
    sticky.classList.toggle('is-out', !show);
  }

  /* badge: jumlah tab yang belum disimpan */
  function syncBadge() {
    var n = document.querySelectorAll('#tabstrip .tab-dot').length;
    document.querySelectorAll('.ak-r-item[data-ak-rail="docx"] .ak-r-badge').forEach(function (b) {
      b.textContent = n;
      b.classList.toggle('on', n > 0);
    });
  }

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-ak-new]');
    if (!b) return;
    var t = b.getAttribute('data-ak-new');
    var q = document.querySelector('.quick-card[data-new="' + t + '"]');
    if (q) q.click();
  }, true);

  function boot() {
    try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){ apply(); }); } catch (e) {}
    apply();
    ensureSheet();
    schedule();
    var target = document.getElementById('home-view') || document.body;
    new MutationObserver(schedule).observe(target, { childList: true, subtree: true });
    // beranda sering dirender ulang saat ganti tab
    document.addEventListener('click', function () { setTimeout(schedule, 60); }, true);
    window.addEventListener('focus', schedule);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

/* ================== drawer geser (akd) ================== */
(function () {
  var ICON = {
    home: '<path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1z"/>',
    word: '<path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M13 4v4h4"/><path d="M9 12h6M9 16h4"/>',
    excel: '<path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M13 4v4h4"/><path d="m9.5 11 5 5M14.5 11l-5 5"/>',
    ppt: '<rect x="3" y="4" width="18" height="12" rx="1.6"/><path d="M12 16v3M8 21h8"/><path d="M9.5 8h3.2a2.3 2.3 0 0 1 0 4.6H9.5z"/><path d="M9.5 8v6"/>',
    pdf: '<path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M13 4v4h4"/><path d="M9 15c2.2-.6 3.6-3 3.2-4.6-.4-1.4-1.7 0-1.2 2 .6 2.2 2 3.6 3 3.6"/>',
    md: '<path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M13 4v4h4"/><path d="M9 15v-3l2 2 2-2v3"/>',
    star: '<path d="m12 4 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 10.2l5.9-.9z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    info: '<circle cx="12" cy="12" r="8.2"/><path d="M12 11v5.5M12 8.2h.01"/>'
  };
  var ITEMS = [
    ['home', 'home', 'Beranda'],
    ['word', 'docx', 'Word'],
    ['excel', 'xlsx', 'Excel'],
    ['ppt', 'pptx', 'PowerPoint'],
    ['pdf', 'pdf', 'PDF'],
    ['md', 'md', 'Markdown'],
    ['sep', '', ''],
    ['star', 'starred', 'Favorit'],
    ['gear', 'settings', 'Pengaturan'],
    ['info', 'about', 'Tentang']
  ];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function svg(k, cls) {
    return '<svg viewBox="0 0 24 24" class="' + (cls || '') + '">' + (ICON[k] || '') + '</svg>';
  }

  function build() {
    if (document.querySelector('.akd-panel')) return;
    var scrim = el('div', 'akd-scrim');
    var edge = el('div', 'akd-edge');
    var panel = el('div', 'akd-panel');
    panel.innerHTML = '<div class="akd-head"><b>Menu</b><button type="button" data-akd-close>' + svg('home').replace('<path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1z"/>', '<path d="M6 6l12 12M18 6L6 18"/>') + '</button></div>';

    ITEMS.forEach(function (it) {
      if (it[0] === 'sep') { panel.appendChild(el('div', 'akd-sep')); return; }
      var b = el('button', 'akd-item');
      b.type = 'button';
      b.setAttribute('data-akd', it[1]);
      b.innerHTML = '<i>' + svg(it[0].replace('gear', 'gear').replace('ppt', 'ppt')) + '</i><span>' + it[2] + '</span>';
      if (it[1] === 'docx') b.innerHTML += '<em class="akd-badge" hidden>0</em>';
      panel.appendChild(b);
    });
    panel.appendChild(el('div', 'akd-foot', 'Usap dari tepi kiri untuk membuka menu. Menu menutup sendiri saat kamu pilih.'));
    document.documentElement.appendChild(scrim);
    document.documentElement.appendChild(edge);
    document.documentElement.appendChild(panel);
    document.documentElement.classList.add('akd-ready');

    scrim.addEventListener('click', close);
    panel.addEventListener('click', function (ev) {
      var c = ev.target.closest('[data-akd-close]');
      if (c) { close(); return; }
      var item = ev.target.closest('[data-akd]');
      if (!item) return;
      var key = item.getAttribute('data-akd');
      close();
      setTimeout(function () { go(key); }, 120);
    });
  }

  function open() {
    document.documentElement.classList.add('akd-open');
    syncActive();
  }
  function close() { document.documentElement.classList.remove('akd-open'); }
  function toggle() { document.documentElement.classList.toggle('akd-open'); }

  function syncActive() {
    var home = document.getElementById('home');
    var editing = home && home.classList.contains('is-hidden');
    var on = editing ? 'word' : 'home';
    document.querySelectorAll('.akd-item').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-akd') === on);
    });
    var n = document.querySelectorAll('#tabstrip .tab-dot').length;
    var badge = document.querySelector('.akd-badge');
    if (badge) { badge.textContent = n; badge.hidden = n === 0; }
  }

  function clickText(words) {
    var sel = '#sidebar button, #sidebar a, .sidebar button, .tabbar button, [data-filter], button';
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      var tx = (nodes[i].textContent || '').trim().toLowerCase();
      for (var j = 0; j < words.length; j++) if (tx === words[j]) { nodes[i].click(); return true; }
    }
    return false;
  }
  function goHome() {
    var b = document.getElementById('brand-home');
    if (b) { b.click(); return; }
    var h = document.querySelector('#sidebar [data-nav="home"], .sidebar-home');
    if (h) h.click();
  }
  function go(key) {
    if (key === 'home') { goHome(); return; }
    if (key === 'settings') { aboutWant = 'settings'; window.__akOpenPanel('settings'); return; }
    if (key === 'about') { aboutWant = 'about'; window.__akOpenPanel('about'); return; }
    if (key === 'starred') { goHome(); setTimeout(function () { clickText(['favorit', 'starred']); }, 80); return; }
    var map = { docx: ['dokumen', 'dokumen', 'word'], xlsx: ['spreadsheet', 'excel'], pptx: ['slide', 'powerpoint'], pdf: ['pdf', 'pdfs'], md: ['markdown', 'notes'] };
    goHome();
    setTimeout(function () { clickText(map[key] || []); }, 80);
  }

  /* usapan dari tepi kiri */
  var sx = 0, sy = 0, tracking = false;
  document.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    if (!t) return;
    sx = t.clientX; sy = t.clientY;
    tracking = sx < 34 || document.documentElement.classList.contains('akd-open');
  }, { passive: true });
  document.addEventListener('touchmove', function (e) {
    if (!tracking) return;
    var t = e.touches[0];
    if (!t) return;
    var dx = t.clientX - sx, dy = Math.abs(t.clientY - sy);
    if (dy > 46) { tracking = false; return; }
    if (dx > 52 && !document.documentElement.classList.contains('akd-open')) { open(); tracking = false; }
    if (dx < -52 && document.documentElement.classList.contains('akd-open')) { close(); tracking = false; }
  }, { passive: true });
  document.addEventListener('touchend', function () { tracking = false; }, { passive: true });

  function boot() {
    build();
    var mb = document.querySelector('header button, #tabbar-menu');
    if (mb) mb.addEventListener('click', function (ev) {
      ev.preventDefault(); ev.stopPropagation(); toggle();
    }, true);
    syncActive();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.__akdOpen = open;
})();
