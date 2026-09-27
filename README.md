# Mengxue Academic Website

The bilingual academic portfolio for [mengxueyao.com](https://mengxueyao.com), built as a static Astro site and deployed with GitHub Pages.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
pnpm preview
```

`pnpm validate` checks the bilingual content pairs, runs Astro's type and content checks, builds the production site, and audits the generated HTML for internal links, metadata, image alternatives, and required bilingual routes.

## Deployment

Updates to `main` are validated, built, and published automatically by `.github/workflows/deploy.yml`. The custom domain is declared in `public/CNAME`, while `astro.config.mjs` supplies the canonical production URL used by Astro and the sitemap integration.

The previous Hugo site is retained in Git history and in the release backup created before the Astro launch.
