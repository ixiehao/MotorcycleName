(() => {
  "use strict";

  const copy = window.siteCopy;
  const lang = window.siteLanguage || "zh-CN";
  const body = document.body;
  const query = document.querySelector("#query");
  const brand = document.querySelector("#brand");
  const status = document.querySelector("#status");
  const reset = document.querySelector("#reset");
  const rows = document.querySelector("#rows");
  const summary = document.querySelector("#summary");
  const resultsContainer = document.querySelector("#results-container");
  const pagination = document.querySelector("#pagination");
  const previous = document.querySelector("#previous");
  const next = document.querySelector("#next");
  const pageLabel = document.querySelector("#page-label");
  const retryButton = document.querySelector("#retry-load");
  const footerVersion = document.querySelector("#footer-version");
  const languages = ["en", "zh-CN", "zh-TW", "ja"];
  const pageSize = 60;
  const localSources = [
    body.dataset.localSource,
    body.dataset.remoteSourceOne,
    body.dataset.remoteSourceTwo
  ].filter(Boolean);
  let models = [];
  let totalModels = 0;
  let previewActive = false;
  let fullLoaded = false;
  let fullFailed = false;
  let page = 1;
  let renderTimer = 0;

  const params = new URLSearchParams(location.search);
  query.value = params.get("q") || "";
  status.value = params.get("status") || "";
  page = Math.max(1, Number.parseInt(params.get("page") || "1", 10) || 1);

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[character]);
  }

  function normalise(value) {
    return String(value ?? "")
      .normalize("NFKC")
      .toLocaleLowerCase()
      .replace(/[\s\-‐‑–—_/·・,、，.。:：;；]+/gu, " ")
      .trim();
  }

  function formatNumber(value) {
    return new Intl.NumberFormat(lang).format(Number(value) || 0);
  }

  function formatDate(value) {
    if (!value) return "—";
    const date = new Date(String(value).slice(0, 10) + "T00:00:00Z");
    if (Number.isNaN(date.getTime())) return String(value);
    return new Intl.DateTimeFormat(lang, {
      year: "numeric", month: "short", day: "numeric", timeZone: "UTC"
    }).format(date);
  }

  function filteredModels() {
    const term = normalise(query.value);
    return models.filter((model) => {
      if (brand.value && model.brand !== brand.value) return false;
      if (status.value && model.status !== status.value) return false;
      if (!term) return true;
      const searchable = [
        model.id, model.brand, model.note, model.years,
        model.segment, model.body_style, model.powertrain,
        ...languages.map((key) => model.names?.[key])
      ].map(normalise).join(" ");
      return searchable.includes(term);
    });
  }

  function displayName(value) {
    const name = String(value ?? "").trim();
    if (!name || name === "—" || name === "-" || name.toLocaleLowerCase() === "n/a") {
      return '<span class="missing-value">' + escapeHtml(copy.missing) + "</span>";
    }
    return escapeHtml(name);
  }

  function updateSummary(found, start, end) {
    if (previewActive && found === 0) {
      summary.textContent = fullFailed ? copy.previewEmptyFailed : copy.previewEmptyLoading;
      return;
    }
    if (found === 0) {
      summary.textContent = copy.noResults;
      return;
    }
    if (previewActive) {
      summary.textContent = fullFailed
        ? copy.previewCountFailed(formatNumber(found))
        : copy.previewCountLoading(formatNumber(found), formatNumber(Math.max(0, totalModels - models.length)));
      return;
    }
    summary.textContent = copy.resultCount(formatNumber(start), formatNumber(end), formatNumber(found));
  }

  function rowMarkup(model) {
    const state = ["current", "discontinued", "concept"].includes(String(model.status))
      ? String(model.status) : "current";
    const stateLabel = copy.statuses[state] || state;
    const labels = copy.languageLabels;
    return "<tr>" +
      '<td class="model-cell"><span class="brand">' + escapeHtml(model.brand || copy.unknownBrand) + "</span>" +
      '<span class="model-id">' + escapeHtml(model.id) + "</span>" +
      '<span class="status ' + state + '">' + escapeHtml(stateLabel) + "</span></td>" +
      '<td class="name-cell" data-label="' + escapeHtml(labels[0]) + '">' + displayName(model.names?.en) + "</td>" +
      '<td class="name-cell" data-label="' + escapeHtml(labels[1]) + '">' + displayName(model.names?.["zh-CN"]) + "</td>" +
      '<td class="name-cell" data-label="' + escapeHtml(labels[2]) + '">' + displayName(model.names?.["zh-TW"]) + "</td>" +
      '<td class="name-cell" data-label="' + escapeHtml(labels[3]) + '">' + displayName(model.names?.ja) + "</td>" +
      '<td class="year" data-label="' + escapeHtml(copy.years) + '">' + displayName(model.years) + "</td></tr>";
  }

  function render() {
    const list = filteredModels();
    const pages = Math.max(1, Math.ceil(list.length / pageSize));
    page = Math.min(page, pages);
    const startIndex = (page - 1) * pageSize;
    const shown = list.slice(startIndex, startIndex + pageSize);
    const rangeStart = list.length ? startIndex + 1 : 0;
    const rangeEnd = Math.min(startIndex + pageSize, list.length);

    updateSummary(list.length, rangeStart, rangeEnd);
    pagination.hidden = list.length <= pageSize;
    pageLabel.textContent = copy.pageLabel(page, pages);
    previous.disabled = page === 1;
    next.disabled = page === pages;
    retryButton.hidden = !fullFailed;
    resultsContainer.setAttribute("aria-busy", String(previewActive && !fullFailed));

    if (!shown.length) {
      const message = previewActive
        ? (fullFailed ? copy.previewEmptyFailed : copy.previewEmptyLoading)
        : copy.emptyBody;
      rows.innerHTML = '<tr class="empty-row"><td class="empty-cell" colspan="6"><strong>' +
        escapeHtml(copy.emptyTitle) + "</strong>" + escapeHtml(message) + "</td></tr>";
      return;
    }
    rows.innerHTML = shown.map(rowMarkup).join("");
  }

  function updateUrl() {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    const values = {
      q: query.value.trim(),
      brand: brand.value,
      status: status.value,
      page: page > 1 ? String(page) : ""
    };
    Object.entries(values).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    });
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }

  function applyUrlFilters() {
    const url = new URL(location.href);
    query.value = url.searchParams.get("q") || "";
    status.value = url.searchParams.get("status") || "";
    const requestedBrand = url.searchParams.get("brand") || "";
    brand.value = [...brand.options].some((option) => option.value === requestedBrand) ? requestedBrand : "";
    page = Math.max(1, Number.parseInt(url.searchParams.get("page") || "1", 10) || 1);
    render();
  }

  async function requestJson(source, timeoutMs) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs || 9000);
    try {
      const response = await fetch(source, { cache: "no-cache", signal: controller.signal });
      if (!response.ok) throw new Error("HTTP " + response.status);
      return await response.json();
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function applyData(data, isPreview) {
    const nextModels = data.models?.list || [];
    if (!nextModels.length) throw new Error("empty database");
    const selectedBrand = brand.value || new URL(location.href).searchParams.get("brand") || "";
    const defaultOption = brand.querySelector('option[value=""]')?.outerHTML || "";
    const brands = [...new Set(nextModels.map((model) => model.brand).filter(Boolean))]
      .sort((left, right) => left.localeCompare(right, lang));
    models = nextModels;
    totalModels = Number(data.meta?.coverage?.models || data.preview?.total_models || nextModels.length);
    previewActive = isPreview;
    brand.innerHTML = defaultOption + brands.map((name) =>
      '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + "</option>"
    ).join("");
    if (brands.includes(selectedBrand)) brand.value = selectedBrand;

    const availableStatuses = new Set(nextModels.map((model) => model.status).filter(Boolean));
    [...status.options].forEach((option) => {
      if (option.value) option.hidden = !availableStatuses.has(option.value);
    });

    const coverage = data.meta?.coverage || {};
    document.querySelector("#brand-count").textContent = formatNumber(coverage.brands ?? data.brands?.length ?? 0);
    document.querySelector("#model-count").textContent = formatNumber(coverage.models ?? totalModels);
    document.querySelector("#version-count").textContent = data.meta?.database_version || "—";
    document.querySelector("#updated-count").textContent = formatDate(data.meta?.updated);
    footerVersion.textContent = copy.footerVersion(data.meta?.database_version || "—", formatDate(data.meta?.updated));
    document.querySelector("#table-caption").textContent = copy.tableCaption(totalModels);

    applyUrlFilters();
    if (!isPreview) {
      fullLoaded = true;
      fullFailed = false;
      resultsContainer.setAttribute("aria-busy", "false");
    }
  }

  function showUnavailable() {
    resultsContainer.setAttribute("aria-busy", "false");
    summary.textContent = copy.loadFailed;
    rows.innerHTML = '<tr class="empty-row"><td class="empty-cell" colspan="6"><strong>' +
      escapeHtml(copy.loadFailed) + "</strong>" + escapeHtml(copy.loadFailedHint) + "</td></tr>";
    retryButton.hidden = false;
  }

  async function loadFull() {
    fullFailed = false;
    retryButton.hidden = true;
    summary.textContent = copy.loading;
    for (const source of localSources) {
      try {
        const data = await requestJson(source, 9000);
        applyData(data, false);
        fullLoaded = true;
        fullFailed = false;
        return true;
      } catch (_) {
        // Try the next official data mirror.
      }
    }
    fullFailed = true;
    resultsContainer.setAttribute("aria-busy", "false");
    if (models.length) render();
    else showUnavailable();
    return false;
  }

  async function load() {
    const fullRequest = loadFull();
    try {
      const preview = await requestJson(body.dataset.previewSource, 4500);
      if (!fullLoaded) applyData(preview, true);
    } catch (_) {
      // Full database mirrors remain available if the preview file is absent.
    }
    await fullRequest;
  }

  function scheduleRender() {
    page = 1;
    updateUrl();
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(render, 90);
  }

  query.addEventListener("input", scheduleRender);
  query.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && query.value) {
      query.value = "";
      scheduleRender();
    }
  });
  brand.addEventListener("change", scheduleRender);
  status.addEventListener("change", scheduleRender);
  reset.addEventListener("click", () => {
    query.value = "";
    brand.value = "";
    status.value = "";
    page = 1;
    updateUrl();
    render();
    query.focus();
  });
  previous.addEventListener("click", () => {
    page = Math.max(1, page - 1);
    updateUrl();
    render();
  });
  next.addEventListener("click", () => {
    page += 1;
    updateUrl();
    render();
  });
  retryButton.addEventListener("click", () => {
    resultsContainer.setAttribute("aria-busy", "true");
    void loadFull();
  });
  window.addEventListener("popstate", applyUrlFilters);
  window.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || event.isComposing) return;
    const target = event.target;
    if (target?.isContentEditable || ["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(target?.tagName)) return;
    event.preventDefault();
    query.focus();
  });

  void load();
})();
