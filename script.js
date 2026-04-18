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

renderPublications();
setupYear();
