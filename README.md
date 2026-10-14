# Javier Hernández · Portfolio

Bilingual (English / Español) personal portfolio built with [Astro](https://astro.build).

Live: https://jedmalfe.github.io/portafolio/ (Spanish: `/es/`)

## Edit the content

All text lives in `src/i18n/content.ts`, one block per language. Change a sentence there and push to `main`; GitHub Actions rebuilds and publishes the site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/portafolio/
npm run build    # static output in dist/
```

## Structure

- `src/i18n/content.ts` — all copy, EN and ES
- `src/components/Page.astro` — page layout shared by both languages
- `src/pages/index.astro` (EN) and `src/pages/es/index.astro` (ES)
- `src/styles/global.css` — colours (navy, amber, teal) and layout
- `.github/workflows/deploy.yml` — build and deploy to GitHub Pages

## Moving to a custom domain

In `astro.config.mjs`, set `site` to the domain and remove `base`, then add the domain under the repository's Settings → Pages.
