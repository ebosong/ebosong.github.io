const publications = [
  {
    title: "[Placeholder] Paper Title One",
    authors: "YOUR NAME, Co-author A, Co-author B",
    venue: "Conference / Journal, 2026",
    area: "Embodied AI",
    summary:
      "One-sentence summary of the core idea, task, and contribution of this paper.",
    links: { Paper: "#", Code: "#", BibTeX: "#" },
  },
  {
    title: "[Placeholder] Paper Title Two",
    authors: "YOUR NAME, Co-author C, Co-author D",
    venue: "Conference / Journal, 2025",
    area: "Autonomous Driving",
    summary:
      "One-sentence summary of the method, benchmark, or system introduced in this work.",
    links: { Paper: "#", Code: "#", BibTeX: "#" },
  },
  {
    title: "[Placeholder] Paper Title Three",
    authors: "YOUR NAME, Co-author E, Co-author F",
    venue: "Workshop / Preprint, 2025",
    area: "UAV Navigation",
    summary:
      "One-sentence summary of the navigation problem and the main experimental result.",
    links: { Paper: "#", Code: "#", BibTeX: "#" },
  },
];

function linkList(links) {
  return Object.entries(links)
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
    .join("");
}

function renderPublications() {
  const list = document.getElementById("publicationList");
  if (!list) return;

  list.innerHTML = publications
    .map(
      (paper) => `
      <article class="publication-item">
        <div class="meta-row">
          <span class="badge highlight">${paper.venue}</span>
          <span class="badge">${paper.area}</span>
        </div>
        <h3 class="publication-title">${paper.title}</h3>
        <p class="publication-meta">${paper.authors}</p>
        <p class="publication-summary">${paper.summary}</p>
        <div class="links">${linkList(paper.links)}</div>
      </article>
    `
    )
    .join("");
}

function setupYear() {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupPageTransitions() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const overlay = document.createElement("div");
  overlay.className = "route-transition";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  const lastTransition = sessionStorage.getItem("routeTransition");
  if (lastTransition) {
    const [x, y] = lastTransition.split(",");
    document.body.style.setProperty("--tx", `${x || 50}vw`);
    document.body.style.setProperty("--ty", `${y || 50}vh`);
    document.body.classList.add("route-arriving");
    sessionStorage.removeItem("routeTransition");
    window.setTimeout(() => document.body.classList.remove("route-arriving"), 640);
  }

  document.querySelectorAll("a[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const target = new URL(href, window.location.href);
      if (target.origin !== window.location.origin) return;
      if (target.pathname === window.location.pathname && target.hash === window.location.hash) {
        return;
      }

      event.preventDefault();
      const x = Math.round((event.clientX / window.innerWidth) * 100);
      const y = Math.round((event.clientY / window.innerHeight) * 100);
      document.body.style.setProperty("--tx", `${x}vw`);
      document.body.style.setProperty("--ty", `${y}vh`);
      sessionStorage.setItem("routeTransition", `${x},${y}`);
      document.body.classList.add("route-leaving");
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = target.href;
      }, 520);
    });
  });
}

function setupCyberpunkEffects() {
  document.querySelectorAll("h1").forEach((heading) => {
    heading.dataset.glitch = heading.textContent;
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (reduceMotion || !finePointer) return;

  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = "1";
  });

  window.addEventListener("pointerleave", () => {
    glow.style.opacity = "0";
  });
}

renderPublications();
setupYear();
setupCyberpunkEffects();
setupPageTransitions();
