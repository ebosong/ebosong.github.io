const projects = [
  {
    title: "UAV Long-range Navigation",
    description:
      "Learning-based navigation for aerial agents under sparse signals, dynamic obstacles, and partial observability.",
    tags: ["UAV", "Navigation", "RL", "Planning"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    title: "World Model-based Decision Making",
    description:
      "Latent dynamics modeling for long-horizon prediction and uncertainty-aware policy optimization.",
    tags: ["World Model", "Decision Making", "Control"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    title: "VLA for Embodied Agents",
    description:
      "Vision-language-action alignment for instruction following and grounded embodied task execution.",
    tags: ["VLA", "Multimodal", "Embodied AI"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    title: "RL for Autonomous Driving",
    description:
      "Safe and adaptive closed-loop driving policies with simulation-to-real transfer considerations.",
    tags: ["Autonomous Driving", "RL", "Safety"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    title: "Active Perception and Localization",
    description:
      "Joint active sensing and localization strategies for robust perception in long-horizon environments.",
    tags: ["Active Perception", "Localization", "Embodied"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    title: "Multimodal Embodied Planning",
    description:
      "Integrating visual, language, and temporal context for hierarchical planning and control.",
    tags: ["Multimodal", "Planning", "Robotics"],
    links: { code: "#", paper: "#", page: "#" },
  },
];

const publications = [
  {
    title: "[Placeholder] Title of Publication One",
    authors: "YOUR NAME, Co-author A, Co-author B",
    venue: "Conference / Journal, 2026",
    links: { paper: "#", code: "#", project: "#" },
  },
  {
    title: "[Placeholder] Title of Publication Two",
    authors: "YOUR NAME, Co-author C, Co-author D",
    venue: "Conference / Journal, 2025",
    links: { paper: "#", code: "#", project: "#" },
  },
  {
    title: "[Placeholder] Title of Publication Three",
    authors: "YOUR NAME, Co-author E, Co-author F",
    venue: "Conference / Journal, 2025",
    links: { paper: "#", code: "#", project: "#" },
  },
];

const newsItems = [
  "[2026.04] Homepage launched.",
  "[2026.03] Working on embodied intelligence, RL, and world models.",
  "[2026.02] Exploring multimodal planning for embodied agents.",
  "[2026.01] Ongoing studies on long-range navigation and active perception.",
  "[2025.12] Developing VLA-oriented system design for embodied control.",
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.links.code}" target="_blank" rel="noopener">Code</a>
          <a href="${project.links.paper}" target="_blank" rel="noopener">Paper</a>
          <a href="${project.links.page}" target="_blank" rel="noopener">Page</a>
        </div>
      </article>
    `
    )
    .join("");
}

function renderPublications() {
  const list = document.getElementById("publicationList");
  if (!list) return;
  list.innerHTML = publications
    .map(
      (paper) => `
      <article class="publication-item">
        <h3 class="publication-title">${paper.title}</h3>
        <p class="publication-meta">${paper.authors}<br />${paper.venue}</p>
        <div class="publication-links">
          <a href="${paper.links.paper}" target="_blank" rel="noopener">Paper</a>
          <a href="${paper.links.code}" target="_blank" rel="noopener">Code</a>
          <a href="${paper.links.project}" target="_blank" rel="noopener">Project</a>
        </div>
      </article>
    `
    )
    .join("");
}

function renderNews() {
  const list = document.getElementById("newsList");
  if (!list) return;
  list.innerHTML = newsItems.map((item) => `<li>${item}</li>`).join("");
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  if (!toggle || !label) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", initialTheme);
  label.textContent = initialTheme === "dark" ? "Light" : "Dark";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    label.textContent = next === "dark" ? "Light" : "Dark";
  });
}

function setupNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(expanded));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 380) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupLoader() {
  const loader = document.getElementById("page-loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 380);
  });
}

function setupYear() {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = String(new Date().getFullYear());
}

renderProjects();
renderPublications();
renderNews();
setupThemeToggle();
setupNav();
setupReveal();
setupBackToTop();
setupLoader();
setupYear();
