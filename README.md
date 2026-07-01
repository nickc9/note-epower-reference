# Note e-POWER Reference

A community-researched reference site for JDM Nissan Note e-POWER (HE12)
owners: OEM part numbers, aftermarket cross-references, and maintenance
guides.

Live site: https://nickc9.github.io/note-epower-reference/

## Status

This is a scaffold. Placeholder content (marked `PLACEHOLDER`) stands in for
real, verified part numbers and guides, which will be added over time.

## Stack

- [Astro](https://astro.build) (static site, content collections with the
  Content Layer glob loader, Zod schemas)
- [Pagefind](https://pagefind.app) for static full-text search
- Plain CSS (no framework), `prefers-color-scheme` dark mode
- Deployed to GitHub Pages via `withastro/action` + `actions/deploy-pages`

## Project structure

```text
/
├── src/
│   ├── content.config.ts        # Zod schemas for parts + guides collections
│   ├── content/
│   │   ├── parts/*.yaml         # One YAML file per part
│   │   └── guides/*.md          # One Markdown file per guide
│   ├── components/              # Header, Footer, badges
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── index.astro          # Home + search
│       ├── about.astro
│       ├── parts/index.astro    # Parts index, grouped + filterable by system
│       ├── parts/[slug].astro   # Part detail + community alternatives
│       ├── guides/index.astro
│       └── guides/[slug].astro
├── .github/
│   ├── workflows/deploy.yml
│   └── ISSUE_TEMPLATE/suggest-alternative.yml
└── astro.config.mjs             # site + base for GitHub Pages project site
```

## Adding a part

Add a new YAML file to `src/content/parts/`, filename becomes the slug.
See `src/content.config.ts` for the required schema and any existing file
under `src/content/parts/` for an example.

## Adding a guide

Add a new Markdown file to `src/content/guides/` with frontmatter matching
the schema in `src/content.config.ts`, then the guide body as Markdown.

## Community alternatives

Each part page has a "Suggest an alternative" flow backed by GitHub issues
(label `alternative-suggestion`, template
`.github/ISSUE_TEMPLATE/suggest-alternative.yml`). Suggestions are fetched
client-side from the GitHub API and ranked by 👍 reactions — see the
"Community alternatives & voting" section on the About page for the full
flow.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321/note-epower-reference/
npm run build     # astro build && pagefind --site dist
npm run preview
```

Pagefind's index is only generated during `npm run build`; in `npm run dev`
the search box falls back to a message explaining this.

## Contributing

Corrections, new part entries, and new guides are welcome via pull request.
Data on this site is community-researched and provided as-is — see the
[About page](https://nickc9.github.io/note-epower-reference/about/) for the
confidence-flag system and disclaimer.
