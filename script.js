const projects = [
  {
    mark: "Project",
    title: "Embodied World Models",
    venue: "Ongoing",
    area: "Embodied AI",
    description:
      "World-model-based prediction and planning for embodied agents in partially observable environments.",
    links: { Paper: "#", Code: "#", Page: "#" },
  },
  {
    mark: "Project",
    title: "UAV Navigation",
    venue: "Ongoing",
    area: "Aerial Robotics",
    description:
      "Robust aerial navigation with active perception, long-horizon planning, and uncertainty-aware control.",
    links: { Paper: "#", Code: "#", Demo: "#" },
  },
  {
    mark: "Project",
    title: "End-to-End Autonomous Driving",
    venue: "Ongoing",
    area: "Autonomous Driving",
    description:
      "Interactive prediction and planning for autonomous driving with safety-oriented evaluation.",
    links: { Paper: "#", Code: "#", Page: "#" },
  },
  {
    mark: "Survey",
    title: "VLA and World Models for Driving",
    venue: "Reading Notes",
    area: "VLA / AD",
    description:
      "A curated project line for papers on VLA, world models, and foundation models for autonomous driving.",
    links: { Notes: "#", Repo: "#" },
  },
];

const publications = [
  {
    title: "[Placeholder] Paper Title One",
    authors: "YOUR NAME, Co-author A, Co-author B",
    venue: "Conference / Journal, 2026",
    area: "Embodied AI",
    summary:
      "One-sentence summary of the core idea, task, and contribution of this paper.",
    links: { Paper: "#", Code: "#", Project: "#" },
  },
  {
    title: "[Placeholder] Paper Title Two",
    authors: "YOUR NAME, Co-author C, Co-author D",
    venue: "Conference / Journal, 2025",
    area: "Autonomous Driving",
    summary:
      "One-sentence summary of the method, benchmark, or system introduced in this work.",
    links: { Paper: "#", Code: "#", Project: "#" },
  },
  {
    title: "[Placeholder] Paper Title Three",
    authors: "YOUR NAME, Co-author E, Co-author F",
    venue: "Workshop / Preprint, 2025",
    area: "UAV Navigation",
    summary:
      "One-sentence summary of the navigation problem and the main experimental result.",
    links: { Paper: "#", Code: "#", Project: "#" },
  },
];

function linkList(links) {
  return Object.entries(links)
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-mark">${project.mark}</div>
        <div class="project-body">
          <div class="meta-row">
            <span class="badge highlight">${project.venue}</span>
            <span class="badge">${project.area}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="links">${linkList(project.links)}</div>
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

renderProjects();
renderPublications();
setupYear();
