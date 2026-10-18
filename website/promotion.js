(() => {
  "use strict";

  const site = "https://ixiehao.github.io/MotorcycleName/";
  const supported = ["en", "zh-CN", "zh-TW", "ja"];
  const requested = new URLSearchParams(location.search).get("lang");
  const lang = supported.includes(requested) ? requested : "zh-CN";
  const copy = {
    en: {
      meta: "MotorcycleName | Four-language motorcycle model index",
      desc: "Search 1,592 motorcycle model names across English, Simplified Chinese, Traditional Chinese, and Japanese.",
      eyebrow: "MOTORCYCLE NAME INDEX · FOUR LANGUAGES",
      title: "One motorcycle. Four names. One search.",
      intro: "Compare model names across English, Simplified Chinese, Traditional Chinese, and Japanese by model, brand, or record ID.",
      searchLabel: "Search a model, brand, year, or record ID",
      searchHint: "Search names in all four languages, production years, and record IDs.",
      placeholder: "CBR · Gold Wing · ゴールドウイング · Honda",
      overviewKicker: "THE INDEX",
      overviewTitle: "Database at a glance",
      models: "models",
      brands: "Brands",
      version: "Dataset version",
      updated: "Updated",
      directoryEyebrow: "THE DIRECTORY",
      directory: "Model directory",
      directoryCopy: "Compare names side by side and filter by brand or model status. Press / to focus search.",
      brand: "Brand",
      status: "Model status",
      reset: "Clear filters",
      loading: "Loading motorcycle names…",
      loadingLabel: "Loading…",
      resultCount: (start, end, total) => "Showing " + start + "–" + end + " of " + total + " models",
      previewCountLoading: (count, remaining) => "Showing " + count + " preview models · " + remaining + " more are loading.",
      previewCountFailed: (count) => "Showing " + count + " preview models · the full dataset could not load.",
      previewEmptyLoading: "No match in the preview yet; the full dataset is still loading.",
      previewEmptyFailed: "No match in the preview. The full dataset could not load.",
      noResults: "No models match these filters.",
      emptyTitle: "No matching models",
      emptyBody: "Try another spelling or clear your filters.",
      loadFailed: "The database could not be loaded.",
      loadFailedHint: "Check your connection and try again.",
      retry: "Retry loading",
      missing: "Not listed",
      unknownBrand: "Unknown brand",
      years: "Years",
      languageLabels: ["English", "Simplified Chinese", "Traditional Chinese", "Japanese"],
      languageNav: "Choose language",
      languageKey: "Available name languages",
      skipLink: "Skip to model directory",
      repository: "GitHub",
      dataLink: "Data & methodology",
      trustTitle: "A reference for search and translation",
      trust: "Names and sales status can vary by market and over time. Confirm formal naming with the manufacturer.",
      tableCaption: (count) => "Motorcycle brands, " + count + " model names in four languages, and production years",
      tableBrand: "Brand / ID",
      pageLabel: (page, pages) => "Page " + page + " of " + pages,
      previous: "Previous",
      next: "Next",
      footerVersion: (version, date) => "Data v" + version + " · Updated " + date,
      license: "CC BY-SA 4.0",
      statuses: { current: "Current", discontinued: "Discontinued", concept: "Concept" }
    },
    "zh-CN": {
      meta: "摩托车名称资料库｜MotorcycleName 四语车型速查",
      desc: "四语摩托车名称资料库，收录 1,592 款车型，支持英文、简体中文、繁体中文与日文检索。",
      eyebrow: "全球摩托车名称索引 · 四种语言",
      title: "一台摩托车，四种语言名，一次查清。",
      intro: "按车型、品牌或数据编号检索，直接对照英文、简体中文、繁体中文与日文名称。",
      searchLabel: "搜索车型、品牌、年份或数据编号",
      searchHint: "可搜索四语名称、生产年份或数据编号。",
      placeholder: "CBR · 金翼 · ゴールドウイング · Honda",
      overviewKicker: "THE INDEX",
      overviewTitle: "资料库概览",
      models: "款车型",
      brands: "品牌",
      version: "数据版本",
      updated: "最近更新",
      directoryEyebrow: "车型检索",
      directory: "车型目录",
      directoryCopy: "并列对照四语名称，并按品牌或车型状态筛选。按 / 可快速聚焦搜索框。",
      brand: "品牌",
      status: "车型状态",
      reset: "清除条件",
      loading: "正在载入摩托车名称…",
      loadingLabel: "正在载入…",
      resultCount: (start, end, total) => "显示第 " + start + "–" + end + " 条，共 " + total + " 款车型",
      previewCountLoading: (count, remaining) => "正在显示 " + count + " 条预览数据 · 另有 " + remaining + " 条正在载入。",
      previewCountFailed: (count) => "当前显示 " + count + " 条预览数据 · 完整资料载入失败。",
      previewEmptyLoading: "预览资料中暂未找到，完整资料仍在载入。",
      previewEmptyFailed: "预览资料中未找到，完整资料也未能载入。",
      noResults: "没有符合条件的车型。",
      emptyTitle: "没有找到匹配车型",
      emptyBody: "试试其他拼写，或清除筛选条件。",
      loadFailed: "暂时无法载入资料库。",
      loadFailedHint: "请检查网络连接后重试。",
      retry: "重新载入",
      missing: "尚未收录",
      unknownBrand: "未知品牌",
      years: "生产年份",
      languageLabels: ["英文", "简体中文", "繁体中文", "日文"],
      languageNav: "切换界面语言",
      languageKey: "名称提供语言",
      skipLink: "跳到车型目录",
      repository: "GitHub",
      dataLink: "数据与方法",
      trustTitle: "供查找与翻译参考",
      trust: "车型名称和销售状态可能因市场与时间而异；正式名称请以制造商公布的信息为准。",
      tableCaption: (count) => "摩托车品牌、" + count + " 款车型的四语名称与生产年份",
      tableBrand: "品牌 / ID",
      pageLabel: (page, pages) => "第 " + page + " / " + pages + " 页",
      previous: "上一页",
      next: "下一页",
      footerVersion: (version, date) => "数据版本 " + version + " · 更新于 " + date,
      license: "CC BY-SA 4.0",
      statuses: { current: "在售", discontinued: "停产", concept: "概念" }
    },
    "zh-TW": {
      meta: "摩托車名稱資料庫｜MotorcycleName 四語車型速查",
      desc: "四語摩托車名稱資料庫，收錄 1,592 款車型，支援英文、簡體中文、繁體中文與日文搜尋。",
      eyebrow: "全球摩托車名稱索引 · 四種語言",
      title: "一輛摩托車，四種語言名，一次查清。",
      intro: "依車型、品牌或資料編號搜尋，直接對照英文、簡體中文、繁體中文與日文名稱。",
      searchLabel: "搜尋車型、品牌、年份或資料編號",
      searchHint: "可搜尋四語名稱、生產年份或資料編號。",
      placeholder: "CBR · 金翼 · ゴールドウイング · Honda",
      overviewKicker: "THE INDEX",
      overviewTitle: "資料庫概覽",
      models: "款車型",
      brands: "品牌",
      version: "資料版本",
      updated: "最近更新",
      directoryEyebrow: "車型搜尋",
      directory: "車型目錄",
      directoryCopy: "並列對照四語名稱，並依品牌或車型狀態篩選。按 / 可快速聚焦搜尋框。",
      brand: "品牌",
      status: "車型狀態",
      reset: "清除條件",
      loading: "正在載入摩托車名稱…",
      loadingLabel: "正在載入…",
      resultCount: (start, end, total) => "顯示第 " + start + "–" + end + " 筆，共 " + total + " 款車型",
      previewCountLoading: (count, remaining) => "目前顯示 " + count + " 筆預覽資料 · 另有 " + remaining + " 筆正在載入。",
      previewCountFailed: (count) => "目前顯示 " + count + " 筆預覽資料 · 完整資料載入失敗。",
      previewEmptyLoading: "預覽資料中尚未找到，完整資料仍在載入。",
      previewEmptyFailed: "預覽資料中未找到，完整資料也無法載入。",
      noResults: "沒有符合條件的車型。",
      emptyTitle: "找不到符合的車型",
      emptyBody: "試試其他拼法，或清除篩選條件。",
      loadFailed: "目前無法載入資料庫。",
      loadFailedHint: "請檢查網路連線後再試一次。",
      retry: "重新載入",
      missing: "尚未收錄",
      unknownBrand: "未知品牌",
      years: "生產年份",
      languageLabels: ["英文", "簡體中文", "繁體中文", "日文"],
      languageNav: "切換介面語言",
      languageKey: "名稱提供語言",
      skipLink: "跳至車型目錄",
      repository: "GitHub",
      dataLink: "資料與方法",
      trustTitle: "供查找與翻譯參考",
      trust: "車型名稱和銷售狀態可能因市場與時間而異；正式名稱請以製造商公布的資訊為準。",
      tableCaption: (count) => "摩托車品牌、" + count + " 款車型的四語名稱與生產年份",
      tableBrand: "品牌 / ID",
      pageLabel: (page, pages) => "第 " + page + " / " + pages + " 頁",
      previous: "上一頁",
      next: "下一頁",
      footerVersion: (version, date) => "資料版本 " + version + " · 更新於 " + date,
      license: "CC BY-SA 4.0",
      statuses: { current: "現售", discontinued: "停產", concept: "概念" }
    },
    ja: {
      meta: "MotorcycleName｜4言語対応のバイク名データベース",
      desc: "英語・簡体字中国語・繁体字中国語・日本語で1,592車種を検索できる多言語バイク名データベース。",
      eyebrow: "MOTORCYCLE NAME INDEX · 4 LANGUAGES",
      title: "バイクの名前を、4言語でまとめて検索。",
      intro: "車種名、ブランド名、またはデータ ID から、英語・簡体字中国語・繁体字中国語・日本語の名称を照合できます。",
      searchLabel: "車種名、ブランド、年式、データ ID を検索",
      searchHint: "4言語の名称、生産年、データ ID を検索できます。",
      placeholder: "CBR · Gold Wing · ゴールドウイング · Honda",
      overviewKicker: "THE INDEX",
      overviewTitle: "データベース概要",
      models: "車種",
      brands: "ブランド",
      version: "データ版",
      updated: "更新日",
      directoryEyebrow: "車種検索",
      directory: "車種一覧",
      directoryCopy: "4言語の名称を並べて確認し、ブランドや販売状況で絞り込めます。/ キーで検索欄に移動します。",
      brand: "ブランド",
      status: "販売状況",
      reset: "条件をクリア",
      loading: "バイク名を読み込み中…",
      loadingLabel: "読み込み中…",
      resultCount: (start, end, total) => total + "車種中 " + start + "–" + end + "件を表示",
      previewCountLoading: (count, remaining) => count + "件のプレビューを表示中 · 残り " + remaining + "件を読み込み中です。",
      previewCountFailed: (count) => count + "件のプレビューを表示中 · 全データを読み込めませんでした。",
      previewEmptyLoading: "プレビューでは見つかりません。全データを読み込み中です。",
      previewEmptyFailed: "プレビューでは見つからず、全データも読み込めませんでした。",
      noResults: "条件に一致する車種はありません。",
      emptyTitle: "一致する車種がありません",
      emptyBody: "別の表記を試すか、絞り込みを解除してください。",
      loadFailed: "データベースを読み込めませんでした。",
      loadFailedHint: "ネットワークを確認して、もう一度お試しください。",
      retry: "再読み込み",
      missing: "未収録",
      unknownBrand: "不明なブランド",
      years: "生産年",
      languageLabels: ["英語", "簡体字中国語", "繁体字中国語", "日本語"],
      languageNav: "表示言語を選択",
      languageKey: "名称の対応言語",
      skipLink: "車種一覧へ移動",
      repository: "GitHub",
      dataLink: "データと方法",
      trustTitle: "検索・翻訳の参考資料",
      trust: "名称や販売状況は市場や時期によって異なる場合があります。正式名称はメーカーの情報をご確認ください。",
      tableCaption: (count) => "バイクブランド、" + count + "車種の4言語名と生産年",
      tableBrand: "ブランド / ID",
      pageLabel: (page, pages) => pages + "ページ中 " + page + "ページ",
      previous: "前へ",
      next: "次へ",
      footerVersion: (version, date) => "データ " + version + " · 更新日 " + date,
      license: "CC BY-SA 4.0",
      statuses: { current: "販売中", discontinued: "生産終了", concept: "コンセプト" }
    }
  };

  const t = copy[lang];
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  document.documentElement.lang = lang;
  document.title = t.meta;
  window.siteLanguage = lang;
  window.siteCopy = t;

  const canonical = site + "?lang=" + encodeURIComponent(lang);
  document.querySelector("#canonical").href = canonical;
  document.querySelector("#og-url").content = canonical;
  document.querySelector("#og-image-alt")?.setAttribute("content", t.meta);
  ["#meta-description", "#og-description", "#twitter-description"].forEach((selector) => {
    const node = document.querySelector(selector);
    if (node) node.content = t.desc;
  });
  ["#og-title", "#twitter-title"].forEach((selector) => {
    const node = document.querySelector(selector);
    if (node) node.content = t.meta;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "MotorcycleName",
    description: t.desc,
    url: canonical,
    sameAs: "https://github.com/ixiehao/MotorcycleName",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    inLanguage: supported
  };
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schema);
  document.head.append(schemaScript);

  const labels = {
    "#brand-caption": lang === "en" ? "Multilingual motorcycle name index" : lang === "ja" ? "多言語バイク名データベース" : lang === "zh-TW" ? "多語摩托車名稱資料庫" : "摩托车名称资料库",
    "#eyebrow": t.eyebrow,
    "#hero-title": t.title,
    "#hero-description": t.intro,
    "#search-label": t.searchLabel,
    "#search-hint": t.searchHint,
    "#overview-kicker": t.overviewKicker,
    "#overview-title": t.overviewTitle,
    "#model-count-label": t.models,
    "#brand-count-label": t.brands,
    "#version-count-label": t.version,
    "#updated-count-label": t.updated,
    "#directory-eyebrow": t.directoryEyebrow,
    "#directory-title": t.directory,
    "#directory-copy": t.directoryCopy,
    "#brand-label": t.brand,
    "#status-label": t.status,
    "#reset": t.reset,
    "#loading-label": t.loadingLabel,
    "#heading-brand": t.tableBrand,
    "#heading-years": t.years,
    "#retry-load": t.retry,
    "#skip-link": t.skipLink,
    "#repository-label": t.repository,
    "#data-link-label": t.dataLink,
    "#trust-title": t.trustTitle,
    "#footer-note": t.trust,
    "#license-link": t.license,
    "#previous": t.previous,
    "#next": t.next,
    "#table-caption": t.tableCaption("1,592")
  };
  Object.entries(labels).forEach(([selector, value]) => setText(selector, value));
  document.querySelector("#query").placeholder = t.placeholder;
  document.querySelector("#language-nav").setAttribute("aria-label", t.languageNav);
  document.querySelector("#language-key").setAttribute("aria-label", t.languageKey);
  document.querySelector("#repository-link").setAttribute("aria-label", t.repository);
  document.querySelector(".mark").setAttribute("aria-label", "MotorcycleName");
  document.querySelector(".filters").setAttribute("aria-label", t.status + " and " + t.brand);
  document.querySelector("#pagination").setAttribute("aria-label", t.directory + " pagination");
  const languageUrl = new URL(location.href);
  document.querySelectorAll("#language-nav a[data-language]").forEach((anchor) => {
    const code = anchor.dataset.language;
    languageUrl.searchParams.set("lang", code);
    anchor.href = languageUrl.pathname + languageUrl.search + languageUrl.hash;
    if (code === lang) anchor.setAttribute("aria-current", "page");
    else anchor.removeAttribute("aria-current");
  });

  const statusOptions = document.querySelectorAll("#status option");
  const statusCopy = { "": lang === "en" ? "All statuses" : lang === "ja" ? "すべて" : lang === "zh-TW" ? "全部狀態" : "全部状态" };
  Object.assign(statusCopy, t.statuses);
  statusOptions.forEach((option) => {
    if (statusCopy[option.value]) option.textContent = statusCopy[option.value];
  });
})();
