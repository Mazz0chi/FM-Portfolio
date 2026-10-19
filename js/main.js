/* Franco Mazzochi, portfolio interactions.
   Vanilla JS, no build step. Data comes from js/projects.js. */
(() => {
  const LANG = document.documentElement.lang === "es" ? "es" : "en";
  const T = {
    en: { web: "Website", ux: "UX/UI", brand: "Brand & graphics", year: "Year", role: "Role", type: "Type", copied: "Email copied", preview: "preview", projects: "projects" },
    es: { web: "Sitio web", ux: "UX/UI", brand: "Marca y gráfica", year: "Año", role: "Rol", type: "Tipo", copied: "Email copiado", preview: "vista previa", projects: "proyectos" }
  }[LANG];

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = matchMedia("(min-width: 901px)");
  const pick = (v) => (v && typeof v === "object" ? v[LANG] : v);
  const IMG = (name) => `assets/images/work/${name}.webp`;

  /* ---------------- smooth scroll ---------------- */
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  const scrollToEl = (el) => {
    if (!el) return;
    const offset = el.id === "hero" ? 0 : -90;
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.3 });
    else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    closeSheet();
    scrollToEl(el);
  });

  // keep the section when switching language
  $$("[data-lang-link]").forEach((a) => a.addEventListener("click", () => {
    const id = navCurrent;
    if (id) a.href = a.getAttribute("href").split("#")[0] + "#" + id;
  }));

  /* ---------------- nav: active pill + mobile sheet ---------------- */
  const navLinks = $$(".nav__links a");
  const pill = $(".nav__pill");
  let navCurrent = "";
  const movePill = (link) => {
    navLinks.forEach((a) => a.classList.toggle("is-active", a === link));
    if (!link) { pill.style.opacity = 0; return; }
    pill.style.opacity = 1;
    pill.style.width = link.offsetWidth + "px";
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
  };
  // sections without their own link light up the closest one
  const linkFor = { videos: "projects", toolkit: "experience" };
  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navCurrent = en.target.id;
      const target = "#" + (linkFor[navCurrent] || navCurrent);
      movePill(navLinks.find((a) => a.getAttribute("href") === target) || null);
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["hero", "projects", "videos", "about", "experience", "toolkit", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionIO.observe(el);
  });

  const sheet = $("#sheet"), menuBtn = $("#menuBtn");
  function closeSheet() {
    sheet.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = '<i class="ph ph-list"></i>';
    lenis && lenis.start();
  }
  menuBtn.addEventListener("click", () => {
    const open = !sheet.classList.contains("is-open");
    if (!open) return closeSheet();
    sheet.classList.add("is-open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.innerHTML = '<i class="ph ph-x"></i>';
    lenis && lenis.stop();
  });

  /* ---------------- buttons: fill grows from the cursor side ---------------- */
  document.addEventListener("pointerover", (e) => {
    const b = e.target.closest(".btn");
    if (!b || b.contains(e.relatedTarget)) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--mx", e.clientX - r.left + "px");
    b.style.setProperty("--my", e.clientY - r.top + "px");
  });

  /* ---------------- reveal on scroll ---------------- */
  const revealIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  const watchReveal = (root = document) => $$(".rv:not(.in)", root).forEach((el) => revealIO.observe(el));

  /* ---------------- work grid ---------------- */
  const projects = window.PROJECTS || [];
  const grid = $("#grid");
  const chips = $$(".chip");
  let filter = "all";
  let visible = projects;

  chips.forEach((c) => {
    const f = c.dataset.filter;
    $("sup", c).textContent = f === "all" ? projects.length : projects.filter((p) => p.cat === f).length;
  });

  // Row rhythm: 7/5, then 4/4/4, then 5/7, then 4/4/4. Leftovers stretch so no cell is ever empty.
  const ROWS = [[7, 5], [4, 4, 4], [5, 7], [4, 4, 4]];
  function spans(n) {
    const out = [];
    let r = 0;
    while (out.length < n) {
      const row = ROWS[r++ % ROWS.length];
      const left = n - out.length;
      if (left >= row.length) out.push(...row);
      else if (left === 1) out.push(12);
      else out.push(...Array(left).fill(12 / left));
    }
    return out;
  }

  function cardHTML(p, span) {
    const wide = span === 12;
    const size = wide ? " card--wide" : span >= 5 ? " card--lg" : "";
    return `<article class="card${size}" style="--span:${span};--vt:card-${p.slug}">
      <button class="card__btn" data-slug="${p.slug}" aria-haspopup="dialog">
        <div class="card__media">
          <img src="${IMG(p.img)}" alt="${p.title} ${T.preview}" loading="lazy" decoding="async">
          <span class="card__go" aria-hidden="true"><i class="ph ph-arrow-up-right"></i></span>
        </div>
        <div class="card__meta">
          <div>
            <h3 class="card__title">${p.title}</h3>
            <p class="card__role">${pick(p.role)}</p>
          </div>
          ${wide ? `<p class="lede" style="font-size:1rem">${pick(p.desc).split(". ")[0]}.</p>` : ""}
          <span class="card__year mono">${p.year}</span>
        </div>
      </button>
    </article>`;
  }

  function renderGrid(first = false) {
    visible = filter === "all" ? projects : projects.filter((p) => p.cat === filter);
    const s = spans(visible.length);
    grid.innerHTML = visible.map((p, i) => cardHTML(p, s[i])).join("");
    $$(".card", grid).forEach((c, i) => {
      if (first) { c.classList.add("rv"); c.style.setProperty("--d", i % 3); }
    });
    if (first) watchReveal(grid);
  }
  renderGrid(true);

  chips.forEach((c) => c.addEventListener("click", () => {
    if (c.dataset.filter === filter) return;
    filter = c.dataset.filter;
    chips.forEach((x) => x.setAttribute("aria-pressed", String(x === c)));
    if (document.startViewTransition && !reduced) document.startViewTransition(() => renderGrid());
    else renderGrid();
  }));

  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".card__btn");
    if (b) openProject(b.dataset.slug);
  });

  /* ---------------- project dialog ---------------- */
  const dlg = $("#dlg"), dlgContent = $("#dlgContent"), dlgCount = $("#dlgCount");
  let current = -1;

  function fillDialog(p, dir = 0) {
    const links = p.links.map((l, i) => `<a class="btn ${i ? "btn--ghost" : "btn--accent"}" href="${pick(l.url)}" target="_blank" rel="noopener">${pick(l.label)}${i ? "" : ' <i class="ph ph-arrow-up-right"></i>'}</a>`).join("");
    const imgs = [p.img, ...(p.gallery || [])].map((n) => `<div class="dlg__media"><img src="${IMG(n)}" alt="${p.title} ${T.preview}"></div>`).join("");
    dlgContent.innerHTML = `
      ${imgs}
      <h2 class="dlg__title" id="dlgTitle">${p.title}</h2>
      <dl class="dlg__info">
        <div><dt>${T.year}</dt><dd>${p.year}</dd></div>
        <div><dt>${T.role}</dt><dd>${pick(p.role)}</dd></div>
        <div><dt>${T.type}</dt><dd>${T[p.cat]}</dd></div>
      </dl>
      <p class="dlg__desc">${pick(p.desc)}</p>
      <div class="tags dlg__tags">${pick(p.tags).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="dlg__links">${links}</div>`;
    dlgCount.textContent = `${String(current + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;
    if (dir) {
      dlgContent.style.setProperty("--dir", dir > 0 ? "28px" : "-28px");
      dlgContent.classList.remove("is-swapping");
      void dlgContent.offsetWidth;
      dlgContent.classList.add("is-swapping");
    }
    $(".dlg__body").scrollTop = 0;
  }

  function openProject(slug) {
    current = visible.findIndex((p) => p.slug === slug);
    if (current < 0) { filter = "all"; visible = projects; current = projects.findIndex((p) => p.slug === slug); }
    if (current < 0) return;
    fillDialog(visible[current]);
    dlg.showModal();
    requestAnimationFrame(() => dlg.classList.add("is-open"));
    lenis && lenis.stop();
    history.replaceState(null, "", `?p=${slug}${location.hash}`);
  }
  function closeProject() {
    if (!dlg.open) return;
    dlg.classList.remove("is-open");
    setTimeout(() => dlg.close(), reduced ? 0 : 450);
    lenis && lenis.start();
    history.replaceState(null, "", location.pathname + location.hash);
  }
  function step(dir) {
    current = (current + dir + visible.length) % visible.length;
    fillDialog(visible[current], dir);
    history.replaceState(null, "", `?p=${visible[current].slug}${location.hash}`);
  }
  dlg.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeProject();
    const s = e.target.closest("[data-step]");
    if (s) step(+s.dataset.step);
  });
  dlg.addEventListener("cancel", (e) => { e.preventDefault(); closeProject(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  const deep = new URLSearchParams(location.search).get("p");
  if (deep) openProject(deep);

  /* ---------------- video rail ---------------- */
  const rail = $("#rail");
  rail.innerHTML = (window.VIDEOS || []).map((v) => `
    <a class="vid vid--${v.kind}" href="${v.url}" target="_blank" rel="noopener">
      <div class="vid__media">
        <img src="${IMG(v.img)}" alt="${v.title}" loading="lazy" decoding="async" draggable="false">
        <span class="vid__play" aria-hidden="true"><i class="ph-fill ph-play"></i></span>
      </div>
      <div class="vid__meta"><b>${v.title}</b><span class="mono">${v.url.includes("instagram") ? "Instagram" : "YouTube"} ${v.year}</span></div>
    </a>`).join("");

  const railBtns = $$("[data-rail]");
  const railState = () => {
    railBtns[0].disabled = rail.scrollLeft < 8;
    railBtns[1].disabled = rail.scrollLeft + rail.clientWidth > rail.scrollWidth - 8;
  };
  railBtns.forEach((b) => b.addEventListener("click", () => rail.scrollBy({ left: +b.dataset.rail * rail.clientWidth * 0.75, behavior: "smooth" })));
  let railTick = false;
  rail.addEventListener("scroll", () => {
    if (railTick) return;
    railTick = true;
    requestAnimationFrame(() => { railState(); railTick = false; });
  }, { passive: true });
  railState();

  // drag to scroll with the mouse (touch already scrolls natively).
  // Links start a native link-drag in Firefox and Safari, which cancels the gesture, so block it.
  rail.addEventListener("dragstart", (e) => e.preventDefault());
  let drag = null;
  rail.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    drag = { x: e.clientX, left: rail.scrollLeft, moved: false };
  });
  window.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 5) { drag.moved = true; rail.classList.add("is-grabbing"); }
    if (drag.moved) rail.scrollLeft = drag.left - dx;
  });
  const endRailDrag = () => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    rail.classList.remove("is-grabbing");
    if (moved) {
      // settle on the nearest card once released
      const card = $$(".vid", rail).reduce((best, el) => Math.abs(el.offsetLeft - rail.scrollLeft - parseFloat(getComputedStyle(rail).paddingLeft)) < Math.abs(best.offsetLeft - rail.scrollLeft - parseFloat(getComputedStyle(rail).paddingLeft)) ? el : best);
      rail.scrollTo({ left: card.offsetLeft - parseFloat(getComputedStyle(rail).paddingLeft), behavior: "smooth" });
    }
  };
  window.addEventListener("pointerup", endRailDrag);
  window.addEventListener("pointercancel", endRailDrag);

  /* ---------------- principles: highlight the one in focus ---------------- */
  const principles = $$(".principle");
  const pIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) principles.forEach((p) => p.classList.toggle("is-active", p === en.target));
  }), { rootMargin: "-42% 0px -42% 0px" });
  principles.forEach((p) => pIO.observe(p));
  if (principles[0]) principles[0].classList.add("is-active");

  /* ---------------- experience accordion ---------------- */
  $$(".xp__head").forEach((h) => h.addEventListener("click", () => {
    const item = h.parentElement;
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    h.setAttribute("aria-expanded", String(open));
  }));

  /* ---------------- count up ---------------- */
  const counters = $$("[data-count]");
  if (!reduced) counters.forEach((c) => (c.textContent = "0+"));
  else counters.forEach((c) => (c.textContent = c.dataset.count + "+"));
  const countIO = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    countIO.unobserve(en.target);
    const end = +en.target.dataset.count, t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      en.target.textContent = Math.round(end * (1 - Math.pow(1 - k, 4))) + "+";
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  if (!reduced) counters.forEach((c) => countIO.observe(c));

  /* ---------------- copy email ---------------- */
  const toast = $("#toast");
  let toastTimer;
  const showToast = (msg) => {
    $("span", toast).textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2200);
  };
  $("#copyEmail").addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(email); showToast(T.copied); }
    catch { location.href = "mailto:" + email; }
  });

  watchReveal();

  /* =========================================================
     HERO CANVAS
     Hover a layer to inspect it, drag it with Move (V),
     draw with Pen (P), edit copy with Text (T), Reset (R).
     ========================================================= */
  const hero = $("#hero");
  const sel = $("#sel"), selName = $(".sel__name", sel), selSize = $(".sel__size", sel);
  const collab = $("#collab");
  const ink = $("#ink");
  const layers = $$("[data-layer]", hero);
  const editables = $$("[data-editable]", hero);
  const original = editables.map((el) => el.innerHTML);
  let tool = "move";
  let selected = null;     // clicked layer
  let hovered = null;
  let userActive = false;

  const rel = (el) => {
    const r = el.getBoundingClientRect(), h = hero.getBoundingClientRect();
    return { x: r.left - h.left, y: r.top - h.top, w: r.width, h: r.height };
  };
  function showSel(el, instant = false) {
    if (!el) { sel.classList.remove("is-on"); return; }
    const { x, y, w, h } = rel(el);
    sel.classList.toggle("is-instant", instant);
    sel.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
    sel.style.width = w + 12 + "px";
    sel.style.height = h + 12 + "px";
    selName.textContent = el.dataset.layer;
    selSize.textContent = `${Math.round(w)} × ${Math.round(h)}`;
    sel.classList.add("is-on");
  }

  function setTool(t) {
    if (t === "reset") return resetCanvas();
    tool = t;
    hero.classList.remove("tool-move", "tool-pen", "tool-text");
    hero.classList.add("tool-" + t);
    $$(".tool[data-tool]").forEach((b) => b.dataset.tool !== "reset" && b.setAttribute("aria-pressed", String(b.dataset.tool === t)));
    editables.forEach((el) => el.toggleAttribute("contenteditable", t === "text"));
    if (t === "text") {
      const h1 = editables[0];
      h1.focus();
      const range = document.createRange();
      range.selectNodeContents(h1);
      range.collapse(false);
      const s = getSelection(); s.removeAllRanges(); s.addRange(range);
      selected = h1; showSel(h1);
    }
  }
  $$(".tool").forEach((b) => b.addEventListener("click", () => setTool(b.dataset.tool)));

  function resetCanvas() {
    layers.forEach((el) => {
      el.style.transition = "transform .7s cubic-bezier(.16,1,.3,1)";
      el.style.transform = "";
      el.dataset.tx = el.dataset.ty = 0;
      setTimeout(() => (el.style.transition = ""), 700);
    });
    editables.forEach((el, i) => (el.innerHTML = original[i]));
    ink.innerHTML = "";
    selected = null;
    setTool("move");
    setTimeout(() => showSel(hovered), 720);
  }

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const typing = e.target.isContentEditable || /INPUT|TEXTAREA/.test(e.target.tagName);
    if (e.key === "Escape" && tool === "text") { e.target.blur && e.target.blur(); setTool("move"); return; }
    if (typing || dlg.open || !desktop.matches) return;
    const r = hero.getBoundingClientRect();
    if (r.bottom < 80) return; // only while the canvas is on screen
    const map = { v: "move", p: "pen", t: "text", r: "reset" };
    const t = map[e.key.toLowerCase()];
    if (t) { e.preventDefault(); setTool(t); }
  });

  // hover + select
  hero.addEventListener("pointerover", (e) => {
    if (!desktop.matches) return;
    const l = e.target.closest("[data-layer]");
    if (l && l !== hovered) { hovered = l; if (!dragging) showSel(l); }
  });
  hero.addEventListener("pointerout", (e) => {
    if (!desktop.matches || dragging) return;
    const to = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest("[data-layer]");
    if (!to && e.target.closest("[data-layer]")) { hovered = null; showSel(selected); }
  });
  hero.addEventListener("pointerenter", () => { userActive = true; collab.classList.remove("is-on"); });
  hero.addEventListener("pointerleave", () => { userActive = false; hovered = null; showSel(selected); scheduleDemo(2500); });

  // move tool: drag layers around (no native image/link drag while doing it)
  hero.addEventListener("dragstart", (e) => e.preventDefault());
  let dragging = null;
  hero.addEventListener("pointerdown", (e) => {
    if (tool !== "move" || !desktop.matches || e.button !== 0) return;
    const l = e.target.closest("[data-layer]");
    if (!l) { selected = null; showSel(hovered); return; }
    selected = l;
    dragging = { el: l, x: e.clientX, y: e.clientY, tx: +l.dataset.tx || 0, ty: +l.dataset.ty || 0, moved: false };
    e.preventDefault();
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragging.x, dy = e.clientY - dragging.y;
    if (!dragging.moved && Math.hypot(dx, dy) < 4) return;
    if (!dragging.moved) { dragging.moved = true; dragging.el.classList.add("is-dragging"); }
    const tx = dragging.tx + dx, ty = dragging.ty + dy;
    dragging.el.style.transform = `translate(${tx}px, ${ty}px)`;
    dragging.el.dataset.tx = tx; dragging.el.dataset.ty = ty;
    showSel(dragging.el, true);
  });
  const endLayerDrag = () => {
    if (!dragging) return;
    const d = dragging;
    dragging = null;
    d.el.classList.remove("is-dragging");
    if (d.moved) {
      // swallow the click that follows a drag so links inside a layer don't fire
      const swallow = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
      window.addEventListener("click", swallow, { capture: true, once: true });
      setTimeout(() => window.removeEventListener("click", swallow, { capture: true }), 60);
    }
    showSel(d.el);
  };
  window.addEventListener("pointerup", endLayerDrag);
  window.addEventListener("pointercancel", endLayerDrag);

  // pen tool: freehand strokes
  let stroke = null;
  ink.addEventListener("pointerdown", (e) => {
    if (tool !== "pen") return;
    const h = hero.getBoundingClientRect();
    stroke = document.createElementNS("http://www.w3.org/2000/svg", "path");
    stroke.dataset.d = `M${e.clientX - h.left} ${e.clientY - h.top}`;
    stroke.setAttribute("d", stroke.dataset.d + " l0.1 0");
    ink.appendChild(stroke);
    ink.setPointerCapture(e.pointerId);
  });
  ink.addEventListener("pointermove", (e) => {
    if (!stroke) return;
    const h = hero.getBoundingClientRect();
    stroke.dataset.d += ` L${(e.clientX - h.left).toFixed(1)} ${(e.clientY - h.top).toFixed(1)}`;
    stroke.setAttribute("d", stroke.dataset.d);
  });
  ink.addEventListener("pointerup", () => (stroke = null));

  window.addEventListener("resize", () => {
    showSel(selected || hovered, true);
    const active = navLinks.find((a) => a.classList.contains("is-active"));
    if (active) movePill(active);
  });

  // collaborator cursor: a short self-running demo of the canvas
  const demoOrder = layers.filter((l) => l.dataset.demo).sort((a, b) => a.dataset.demo - b.dataset.demo);
  let demoIdx = 0, demoTimer = null, heroVisible = true, cur = { x: 0, y: 0 };
  function scheduleDemo(delay) {
    clearTimeout(demoTimer);
    if (reduced || !desktop.matches) return;
    demoTimer = setTimeout(demoStep, delay);
  }
  function demoStep() {
    if (userActive || !heroVisible || dlg.open || tool !== "move") return scheduleDemo(2500);
    const l = demoOrder[demoIdx++ % demoOrder.length];
    const { x, y, w, h } = rel(l);
    const to = { x: x + w * 0.72, y: y + h * 0.62 };
    collab.classList.add("is-on");
    collab.animate(
      [{ transform: `translate(${cur.x}px, ${cur.y}px)` }, { transform: `translate(${to.x}px, ${to.y}px)` }],
      { duration: 1200, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }
    ).finished.then(() => {
      cur = to;
      if (!userActive) { selected = null; showSel(l); }
      scheduleDemo(2200);
    }).catch(() => {});
  }
  new IntersectionObserver(([en]) => { heroVisible = en.isIntersecting; }).observe(hero);
  if (!reduced) {
    const start = rel(demoOrder[0] || hero);
    cur = { x: start.x + start.w + 60, y: start.y - 40 };
    collab.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
    scheduleDemo(2600);
  }
})();
