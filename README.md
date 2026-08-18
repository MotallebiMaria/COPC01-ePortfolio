# Maria Motallebi — Professional ePortfolio

A static professional archive built for the University of Toronto co-op ePortfolio assignment. The site presents software engineering, systems, teaching, research, leadership, and recognition without publishing confidential workplace or student information.

## Local development

```bash
npm install
npm run dev
```

The project-site base path is `/COPC01-ePortfolio/`. Production checks are:

```bash
npm test
npm run check
npm run test:e2e
npm run build
```

Playwright requires Chromium. Install it locally with:

```bash
PLAYWRIGHT_BROWSERS_PATH=/tmp/copc01-playwright npx playwright install chromium
```

Regenerate the committed résumé PDF after changing résumé content:

```bash
npm run resume:pdf
```

## Content model

Archive content lives in `src/data/portfolio.ts`. Every entry has stable metadata, category-specific sections, evidence records, and one of four access labels:

- `PUBLIC` — safe to publish directly
- `REDACTED` — publish only after sensitive details are removed
- `SUMMARY ONLY` — describe the artifact without publishing the original
- `PRIVATE` — never include in the public repository

When adding an entry, keep its ID and slug unique, use verified dates and claims, and add evidence metadata even when the evidence cannot be published.

## Deployment

Pushing `main` runs content tests, browser-based responsive and accessibility checks, the static Astro build, and GitHub Pages deployment. In repository settings, the Pages source must be set to **GitHub Actions**.

The production URL is:

`https://motallebimaria.github.io/COPC01-ePortfolio/`

## Privacy

Do not add workplace source code, internal tickets, private URLs, credentials, evaluations, correspondence, student information, grades, identifiable feedback, or documents covered by confidentiality obligations. Public-safe reconstructions and summaries are preferred when the original artifact cannot be shared.

See [ASSIGNMENT-AUDIT.md](ASSIGNMENT-AUDIT.md) for the rubric mapping and [ASSET-CHECKLIST.md](ASSET-CHECKLIST.md) for optional image replacements.
