# Academic Homepage for GitHub Pages

A clean, modern, and extensible static academic homepage template for an Embodied AI researcher.  
This project is designed to run directly on GitHub Pages with no backend and no build step.

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── README.md
```

## Deploy to GitHub Pages

1. Create (or use) a repository named:
   - `YOUR_GITHUB_USERNAME.github.io` (recommended for user site), or
   - any repository name (for project site).
2. Upload all files in this folder to the repository root.
3. In GitHub repository settings:
   - Open `Settings` -> `Pages`
   - Under **Build and deployment**, choose:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` (or `master`) and `/ (root)`
4. Save and wait for deployment.
5. Visit:
   - `https://YOUR_GITHUB_USERNAME.github.io/` (user site), or
   - `https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME/` (project site).

## Customize Personal Information

Update placeholders in `index.html`:

- `YOUR NAME`
- `Your Institution`
- `Your City, Your Country`
- `your.email@example.com`
- `YOUR_GITHUB_USERNAME`
- Google Scholar placeholder link
- OG URL/image placeholders in `<meta property="og:*">`

Also replace placeholders in `script.js` publication author fields if needed.

## Add / Edit Publications, Projects, News

All data is centralized in `script.js`:

- `projects` array -> Selected Projects section
- `publications` array -> Publications section
- `newsItems` array -> Recent News section

### Add a project

Add one object to `projects`:

```js
{
  title: "Project Title",
  description: "Short project description.",
  tags: ["Tag1", "Tag2"],
  links: { code: "#", paper: "#", page: "#" }
}
```

### Add a publication

Add one object to `publications`:

```js
{
  title: "Paper Title",
  authors: "Author A, Author B",
  venue: "Conference / Journal, Year",
  links: { paper: "#", code: "#", project: "#" }
}
```

### Add a news item

Add one line in `newsItems`:

```js
"[2026.05] Your update here."
```

## Assets You Should Add

Create or replace these files in `assets/`:

- `favicon.ico` (site icon)
- `CV.pdf` (your CV)
- `profile.jpg` (optional, if you want to replace the placeholder block)
- `og-image.png` (for social preview)

## Feature Highlights

- Sticky navbar with anchor links
- Responsive layout (desktop + mobile)
- Light / dark mode toggle with local storage persistence
- Subtle section reveal animation
- Back-to-top button
- Lightweight page loader
- SEO and Open Graph meta placeholders

## Notes

- The page is intentionally factual and placeholder-based to avoid fabricated personal details.
- No external framework is required.
- You can expand sections incrementally without changing core structure.
