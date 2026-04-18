const projects = [
  {
    status: "Active",
    title: "Long-Horizon UAV Navigation",
    description:
      "Learning-based aerial navigation for GPS-denied or partially observable environments, with emphasis on active perception, obstacle avoidance, and mission-level planning.",
    tags: ["UAV", "Navigation", "Active Perception", "Planning"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    status: "Active",
    title: "World Models for Embodied Agents",
    description:
      "Predictive latent dynamics for counterfactual rollout, uncertainty-aware planning, and policy learning across simulated and real embodied tasks.",
    tags: ["World Model", "Embodied AI", "Prediction", "Control"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    status: "Prototype",
    title: "Vision-Language-Action Navigation",
    description:
      "Grounding language instructions in maps, visual observations, waypoints, and executable action sequences for mobile and aerial robots.",
    tags: ["VLA", "Multimodal", "Grounding", "Robot Learning"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    status: "Active",
    title: "Interactive Autonomous Driving",
    description:
      "Closed-loop behavior prediction and planning for urban traffic, with attention to interaction, safety, uncertainty, and rare corner cases.",
    tags: ["Autonomous Driving", "Prediction", "Planning", "Safety"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    status: "Exploration",
    title: "RL and Imitation for Mobility",
    description:
      "Data-efficient policies that combine offline logs, demonstrations, model-based rollouts, and online refinement for navigation and driving.",
    tags: ["RL", "Imitation Learning", "Offline Data", "Sim-to-Real"],
    links: { code: "#", paper: "#", page: "#" },
  },
  {
    status: "Benchmark",
    title: "Embodied Autonomy Evaluation",
    description:
      "Scenario suites, stress tests, and metrics for evaluating embodied decision systems beyond open-loop accuracy.",
    tags: ["Benchmark", "Datasets", "Simulation", "Evaluation"],
    links: { code: "#", paper: "#", page: "#" },
  },
];

const publications = [
  {
    title: "[Placeholder] Learning World Models for Long-Horizon UAV Navigation",
    authors: "YOUR NAME, Co-author A, Co-author B",
    venue: "Conference / Journal / Preprint, 2026",
    links: { paper: "#", code: "#", project: "#" },
  },
  {
    title: "[Placeholder] Uncertainty-Aware Planning for Interactive Autonomous Driving",
    authors: "YOUR NAME, Co-author C, Co-author D",
    venue: "Conference / Journal / Workshop, 2025",
    links: { paper: "#", code: "#", project: "#" },
  },
  {
    title: "[Placeholder] Vision-Language-Action Grounding for Embodied Agents",
    authors: "YOUR NAME, Co-author E, Co-author F",
    venue: "Conference / Journal / Preprint, 2025",
    links: { paper: "#", code: "#", project: "#" },
  },
];

const newsItems = [
  {
    date: "2026.04",
    text: "Homepage revised into a lab-style embodied autonomy research page.",
  },
  {
    date: "2026.03",
    text: "Working on world models, UAV navigation, and closed-loop embodied decision making.",
  },
  {
    date: "2026.02",
    text: "Exploring VLA-style instruction following for aerial and mobile robots.",
  },
  {
    date: "2026.01",
    text: "Building autonomous driving evaluation notes around interaction, uncertainty, and safety.",
  },
  {
    date: "2025.12",
    text: "Started organizing research artifacts for code, datasets, demos, and reading notes.",
  },
];

const resources = [
  {
    title: "Code",
    description:
      "Add repositories for navigation, planning, perception, VLA experiments, or autonomous driving benchmarks.",
    links: { GitHub: "https://github.com/YOUR_GITHUB_USERNAME" },
  },
  {
    title: "Datasets",
    description:
      "Link collected logs, simulation scenarios, annotated trajectories, or dataset documentation.",
    links: { Dataset: "#" },
  },
  {
    title: "Project Demos",
    description:
      "Add videos, interactive demos, project pages, or benchmark dashboards for selected systems.",
    links: { Demos: "#" },
  },
  {
    title: "Reading Notes",
    description:
      "Collect notes on embodied AI, robot learning, autonomous driving, world models, and safe RL.",
    links: { Notes: "#" },
  },
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-status">${project.status}</div>
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
  list.innerHTML = newsItems
    .map(
      (item) => `
      <li>
        <span class="news-date">${item.date}</span>
        <span class="news-text">${item.text}</span>
      </li>
    `
    )
    .join("");
}

function renderResources() {
  const grid = document.getElementById("resourceGrid");
  if (!grid) return;
  grid.innerHTML = resources
    .map((resource) => {
      const links = Object.entries(resource.links)
        .map(
          ([label, href]) =>
            `<a href="${href}" target="_blank" rel="noopener">${label}</a>`
        )
        .join("");

      return `
        <article class="resource-card">
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <div class="resource-links">${links}</div>
        </article>
      `;
    })
    .join("");
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
  const revealItems = document.querySelectorAll(".reveal");
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
  revealItems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add("visible");
      return;
    }
    observer.observe(el);
  });
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
renderResources();
setupThemeToggle();
setupNav();
setupReveal();
setupBackToTop();
setupLoader();
setupYear();
