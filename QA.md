# Release QA status

The checks below were performed against the local production build before the GitHub Pages release.

- Astro and TypeScript: 0 errors, 0 warnings, 0 hints
- Content translations: paired English and Chinese entries validated
- Static build: 42 HTML pages generated
- Build audit: internal references, canonical metadata, hreflang, image alternative text and bilingual routes passed
- Responsive smoke test: 19 representative route and viewport combinations passed
- Interaction checks: mobile menu, contextual language switch and publication filters passed
- Lighthouse mobile after the September content update: Performance 99, Accessibility 100, Best Practices 100, SEO 100
- Core metrics: LCP 1.8 s, CLS 0

Screenshots for 360×800, 390×844, 768×1024, 1440×900 and 1920×1080 are in `preview-screenshots/`.

## Maintainer notes

- Confirm that the British Academy award date should be 1 June 2026 (the supplied date did not include a year).
- Replace the legacy CV with an up-to-date approved PDF.
- Confirm the 2019 Chinese publication metadata; its previous DOI was removed because it resolves to an unrelated article.
- The CV, publication PDFs and corrected BibTeX files are local to this repository and no longer depend on legacy-site downloads.
