# OSI Affiliate

Staff-written reviews, shortlists and comparisons of business software for solopreneurs and small
teams. Astro 7, Tailwind v4, deployed on Cloudflare Workers.

## Run it

```bash
npm install
npx astro dev --background --port 4327
```

Then open http://localhost:4327. Stop with `npx astro dev stop`. Build with `npm run build`; lint
with `npm run lint`.

## Where things are

| What | Where |
|---|---|
| Articles (reviews, best-of, alternatives, pricing, comparisons, guides) | `src/content/articles/*.md` — file name is the URL |
| Article schema | `src/content.config.ts` |
| Staff profiles | `src/data/authors.json` (+ avatars in `src/assets/images/authors/`) |
| Categories | `src/components/data.ts` |
| Page templates | `src/components/ArticlePage.astro`, `src/components/CategoryHubPage.astro` |
| Design tokens | `src/styles/theme.css`, `src/styles/base.css`; brand rules in `docs/brand-guide.md` |
| Component inventory | `/design-system` (`src/pages/design-system.astro`) |

## Writing a review

Copy any `*-review.md`, change the frontmatter (`product` block: name, vendor, url, pricing,
score, the five `criteria`, pros, cons, bestFor, notFor, summary, verdict) and write the body under
`##` headings. Set `author` to an id from `authors.json`. The review appears in the menus, the
hub, the footer, the search index and the feeds on the next build.

## Provisional scores

`SCORES_PROVISIONAL` in `src/site.ts` is `true`: every scored page shows a one-line note and no
Review schema is emitted. Flip it to `false` once the staff have replaced the seed scores.
