# OSI Affiliate — Brand Guide

Extracted from the live homepage code (`src/components/Hero.astro`, `CategoryBrowser.astro`,
`Stance.astro`, `CategoryDirectory.astro`, `ContributeCta.astro`, `SiteNav.astro`,
`SiteFooter.astro`, `Mark.astro`) and the design tokens in `src/styles/theme.css` and
`src/styles/base.css`. Every value below exists in the codebase today — nothing here is
aspirational or invented. If a change is made to a token or a section, update this file in the
same commit.

## Brand overview

OSI Affiliate is a curated software-shortlist site: five categories of business software (CRM,
email marketing, website builders, project management, SEO tools), two to four real picks in
each, with current pricing framed qualitatively and the reasoning shown. It exists as a direct
answer to the two dominant patterns in this space — open marketplaces like Capterra/G2 (1,600+
listings, disclosure as an afterthought) and vendor-sponsored "best of" content. The site's whole
premise, stated on the homepage and in the footer, is: *we also make money from affiliate links,
but we say which ones, and the pick we'd actually choose still comes first.*

The audience is a solopreneur or small-business owner replacing a specific tool, not an enterprise
procurement team — someone who wants "the whole shortlist, not page one of forty" and can act on a
plain-language recommendation without a login or a demo call.

**Personality:** confident, editorial, plain-spoken. It reads like a considered buying guide
written by one person with an opinion, not a marketplace or a lead-gen funnel. It is comfortable
saying "skip it if…" and comfortable saying nothing looks finished ("nothing here is final").

## Color tokens

Defined in `src/styles/theme.css` under `@theme static`. These compile directly into Tailwind
utilities: `bg-brand-*`, `text-brand-*`, `border-brand-*`, `ring-brand-*`.

| Token | Hex | Tailwind class (example) | Use it for |
|---|---|---|---|
| `--color-brand-primary` | `#2451E8` | `bg-brand-primary` / `text-brand-primary` | Cobalt. Structural signal only — selected states, filled CTAs, link underlines, the category-browser's active hue. Never a full-bleed wash or gradient. |
| `--color-brand-secondary` | `#0F1B33` | `bg-brand-secondary` / `text-brand-secondary` | Deep navy. The two inverted, full-bleed sections only: the Stance block and the footer. |
| `--color-brand-accent` | `#F2A93B` | `bg-brand-accent` / `text-brand-accent` | Warm amber. Used sparingly and only as a *marker* — the mark's leading half, the Stance pull-quote's lead-in rule and its emphasised clause, the disclosure note's left border, the footer's lead-in rule, the filled portion of rating stars (`Stars.astro`), and the sample-figures notice's left border (`SampleNotice.astro`). Never a background wash or a large filled area. |
| `--color-brand-bg` | `#FAFAF8` | `bg-brand-bg` / `text-brand-bg` | The page's base paper. Warm neutral — deliberately not cream and not pink. |
| `--color-brand-surface` | `#F1F0EC` | `bg-brand-surface` / `text-brand-surface` | The one step darker than paper — trust panels, the closing strip, table headers, disabled-field backgrounds. Used to change "rooms" without going all the way to an inverted section. |
| `--color-brand-text` | `#14181F` | `text-brand-text` | Primary ink. Almost always used through `color-mix(in oklab, var(--color-brand-text) N%, transparent)` rather than at full opacity, to get body-copy and muted tiers from one token instead of a second gray scale. |
| `--color-brand-muted` | `#6B7280` | `text-brand-muted` | Secondary/disabled text — breadcrumbs, disabled form controls, captions. |

### Derived tones (generated from the tokens above, in `src/styles/base.css`)

These are not separate brand colors — they are `color-mix()` formulas computed from the seven
tokens above, defined once as `:root` custom properties so every component references the same
math instead of hand-picking a new hex:

- `--color-primary-dark`, `--color-primary-deep` — hover/pressed states of cobalt.
- `--surface-alt` — a cool-tinted alternate to `--color-brand-surface`, for a section that needs
  to read as "a different room" without a full inversion (used in the hero's background wash).
- `--amber-wash`, `--amber-line`, `--amber-deep` — amber as a 13% background tint, a 55%-opacity
  rule, and a text-safe deepened version (raw accent fails contrast for body text on paper).
- `--line`, `--line-strong`, `--line-invert` — the one hairline color (13% / 22% / white 16% of
  text-on-bg) used for every shared cell edge across the site's lattice/table motif.
- `--shadow-sm`, `--shadow-md`, `--shadow-brand` — `--shadow-brand` is tinted with cobalt rather
  than gray. Prefer it over a plain gray shadow; a gray shadow under everything reads as generic.

**Rule:** never write a new hex value in a component. If an existing token or derived tone doesn't
cover the case, add a new `color-mix()` derived from a `@theme` token to `base.css`, or a new
token to `@theme` — see the Do's and don'ts section below.

## Typography

Font families are declared in `@theme` (`src/styles/theme.css`); the size/weight scale lives in
`src/styles/base.css` as `:root` custom properties and applies sitewide.

**Families:**
- `--font-heading`: `'Outfit Variable', system-ui, -apple-system, sans-serif` — every `h1`–`h6`
  (set globally in `base.css`), plus anywhere else display-weight type is needed (buttons, tiles,
  the nav wordmark).
- `--font-body`: `'Inter Variable', system-ui, -apple-system, sans-serif` — `body` copy, applied
  once at the `<body>` level; nothing needs to opt in.

Both ship as self-hosted variable fonts via `@fontsource-variable/outfit` and
`@fontsource-variable/inter`, imported in `src/styles/global.css`.

**Size scale** (`--fs-*`, `base.css`), smallest to largest:

| Token | Size | Used for |
|---|---|---|
| `--fs-caption` | `0.8125rem` (13px) | Micro labels, meta text |
| `--fs-small` | `0.9375rem` (15px) | Nav links, small UI text |
| `--fs-body` | `1.0625rem` (17px) | The real reading size for paragraphs |
| `--fs-lede` | `clamp(1.1875rem, 0.9vw + 1rem, 1.375rem)` (19–22px) | Intro/lede paragraphs under a heading |
| `--fs-h4` | `1.25rem` (20px) | Smallest heading tier (card/sub-item titles) |
| `--fs-h3` | `clamp(1.5rem, 1vw + 1.25rem, 1.75rem)` (24–28px) | Card and subsection headings |
| `--fs-h2` | `clamp(2.25rem, 3vw + 1rem, 3.25rem)` (36–52px) | Section headings |
| `--fs-display` | `clamp(2.5rem, 2vw + 2rem, 3.5rem)` (40–56px) | Large statements, pull-quotes |
| `--fs-h1` | `clamp(3.5rem, 5vw + 2rem, 6.5rem)` (56–104px) | Hero only |

This scale is deliberately dramatic between tiers — an earlier audit found everything clustered
between 13–18px with no real hierarchy below the `h1`. Each tier should look **obviously**
different in scale from its neighbor, not subtly different.

**Weights** (`--fw-*`, both families support the full variable axis — use it, don't default to
400/700 only):

| Token | Value | Typical use |
|---|---|---|
| `--fw-light` | 340 | Lede/subhead copy that needs to look genuinely light, not just "not bold" |
| `--fw-regular` | 400 | Nav links, default body weight |
| `--fw-medium` | 500 | Links, small labels, secondary emphasis |
| `--fw-semibold` | 600 | Default heading weight |
| `--fw-bold` | 700 | Hero `h1`, page titles |
| `--fw-black` | 820 | The one heading on the page making a specific numeric claim (the category-count heading) — reserve for a single, deliberate moment, not every heading |

**Line height / usage rules:**
- Base `body`: `line-height: 1.6`.
- All headings (global rule in `base.css`): `line-height: 1.08`, `letter-spacing: -0.028em`,
  `font-weight: 600` by default, `text-wrap: balance`. Individual sections override weight and
  letter-spacing tighter for display sizes (hero `h1` goes to `-0.042em` at `line-height: 1.01`).
  Larger sizes get tighter tracking and tighter leading; body copy stays open (1.5–1.7).
  Paragraphs use `text-wrap: pretty`.
- Never mix families: headings are always `font-heading` (Outfit), running copy is always
  `font-body` (Inter). The only cross-over is UI chrome set in the heading face at small sizes
  (buttons, chips, tags) for a crisper, more "product" feel than body text gives.

## Spacing and layout

Defined in `src/styles/base.css` `:root`.

- **Max content width:** `--wrap: 78rem` (~1248px), applied via the shared `.wrap` utility
  (`max-width: var(--wrap); margin-inline: auto`).
- **Side gutter:** `--gutter: clamp(1.25rem, 4vw, 3rem)` — fluid, not a fixed breakpoint jump.
- **Section vertical rhythm:** every section's `padding-block` is a fluid `clamp()`, not a fixed
  token, roughly scaled to that section's visual weight. Representative real values:
  - Lightest (closing strip / `ContributeCta`): `clamp(2.25rem, 5vw, 3.25rem)` top
  - Standard section (`CategoryBrowser`, `CategoryDirectory`): `clamp(2.75rem–3.25rem, 5.5–7vw, 4.5–6rem)`
  - Heaviest (`Hero`, `Stance` — the two most prominent sections): `clamp(3.25rem–3.75rem, 8–9vw, 6–7rem)`
  
  Pattern to follow for a new section: pick a weight tier (light / standard / heavy) and use a
  `clamp()` in that section's range rather than a fixed rem value, so spacing scales with
  viewport instead of jumping at breakpoints.
- **Internal gaps:** there is no fixed 4/8-point spacing scale. Component-internal gaps are
  hand-set per layout, clustering around `0.3–0.75rem` for tight/inline groups (chip rows, icon +
  label) and `1–2.5rem` for section-internal groups (card grids, header + lede). Match the
  existing nearby value rather than inventing a new one.
- **Borders/radius:** hairline borders use `--line` / `--line-strong` (13%/22% mixes of
  `--color-brand-text`), 1px. Corner radius is small and consistent: `2–4px` on cards, rows, and
  panels (`.rail-item` 3px, `.lead` 3px, `.tile` 4px, `.dir-grp` uses a drawn top rule instead of
  radius); pills/buttons are fully round (`border-radius: 999px`); the one exception is the
  disabled email field in `ContributeCta` at `10px`.

**Breakpoints** (`min-width`, mobile-first; found across component `<style>` blocks — there is no
central breakpoint token file, these are the values actually in use):

`30rem` (480px) · `34rem` (544px) · `44rem` (704px) · `52rem` (832px) · `54rem` (864px) ·
`60rem` (960px) · `64rem` (1024px) · `68rem` (1088px) · `70rem` (1120px) · `72rem` (1152px)

A handful of components also use the `max-width` just below one of these (e.g. `59.9375rem`) to
write the "below this breakpoint" half of a rule explicitly rather than relying on cascade order.
Reuse one of the values above for a new responsive rule instead of picking an arbitrary number.

## Visual tone

- **Color is structural, not decorative.** Cobalt marks state (selected/active/link/CTA); amber
  marks "the thing we want read" and stops — never a background wash. A page that uses amber for
  emphasis everywhere has used it for nothing.
- **Flat over glossy.** Hairline borders and one brand-tinted shadow (`--shadow-brand`) do the
  depth work — not drop shadows on everything, not gradients as decoration. The homepage's two
  gradients are both functional (a hero glow, a top-of-page tone lift), not surface texture.
- **Dramatic type hierarchy, not a soft one.** Headings jump tiers obviously; body copy stays
  restrained. A page that looks "AI-generated" usually has a type scale clustered in one narrow
  band — this system deliberately avoids that.
- **Motion is quiet and fails safe.** The scroll-reveal pattern (`[data-rise]`) shows content by
  default and only hides what's already below the fold, measured client-side, so a slow or broken
  script never blanks the page. Respect `prefers-reduced-motion` everywhere motion is added.
- **Plain-spoken honesty as a visual choice, not just copy.** The affiliate disclosure is set at
  body size with an amber marker, directly under the `h1` — not footnote-sized, not buried. A
  disabled control (the "not open yet" email field) is styled to visibly look non-functional
  (dashed border, muted color) rather than pretending to work.

## Do's and don'ts

Captured from the design rules already encoded in the codebase's own component comments and from
the production-hardening pass done on this project.

**Do:**
- Use `color-mix(in oklab, var(--color-brand-*) N%, transparent)` to get a tint/tone instead of a
  new hex — this is how every muted-text, tinted-background, and hover state in the codebase is
  built.
- Use the `.pill` / `Button` component for every CTA — solid for the primary action, line for a
  secondary one, invert only on a navy/inverted section.
- Reserve `--color-brand-secondary` (navy, full-bleed inversion) for moments that should read as
  the loudest or most deliberate statement on the page. It appears twice on the homepage on
  purpose (Stance, footer) — a third inverted section would flatten the effect.
- Keep motion reveal fail-safe: content must be visible by default in CSS; JS only ever *hides*
  what's provably below the fold, never the reverse.
- Prefer editorial, specific copy ("Skip it if…", "Nothing here is final") over generic marketing
  language.

**Don't:**
- Don't hand-write a hex value in a component `<style>` block — every color must trace back to a
  `@theme` token or a `color-mix()` derived from one.
- Don't use a plain gray `box-shadow` — a gray shadow under everything is called out in the
  codebase itself as "the single most common AI-generated tell." Use `--shadow-brand` (or
  `--shadow-sm`/`--shadow-md`, which are still tinted off brand text, not pure black/gray).
- Don't wash a section background in amber, or use amber for more than one emphasis element per
  section.
- Don't apply `will-change` in base/shared CSS or to a selector matching many elements — only
  right before an animation, removed after.
- Don't add a second inverted (navy) section next to an existing one without a real reason; it's
  the site's rarest, loudest gesture.
- Don't invent a new spacing or breakpoint value casually — match the nearest existing `clamp()`
  range or breakpoint (see Spacing and layout above).

## Image treatment

The marketing pages are still built from typography, color and one shared SVG mark
(`Mark.astro`), with no photography. The blog is the one place photos appear: each post's
featured image, shown by `PostList.astro` (the lead photo and ledger thumbnails) and on
`src/pages/blog/[id].astro` (the wide hero). Author avatars (`AuthorCard.astro`) currently use
the brand mark itself (`src/assets/images/authors/osi-affiliate.svg`), because the site uses no
personal bylines. Every photo follows the same surface and card system as the rest of the site,
so it doesn't look like a foreign element dropped onto the page:

- **Source and licence:** photos are CC0 from Wikimedia Commons, stored in
  `src/assets/images/blog/` and credited in each post's `featuredImage.credit`, which is shown
  under the hero.
- **Cropping:** 3:2 in lists and on small screens; a 21:9 letterbox for the post hero from
  `44rem` up, so the title and the opening paragraph still share the first screen. Crops are
  done with CSS `aspect-ratio` + `object-fit: cover`, not by re-cutting the file.
- **Corner radius:** `2–4px`, matching cards and panels elsewhere (not fully square, not
  heavily rounded). Use the same radius as the container it sits in.
- **Border:** a 1px hairline in `--line` (or `--line-strong` if it needs to read as a distinct
  object on a busy background), the same edge treatment every card/panel/table on the site uses.
- **Shadow:** if an image needs to lift off the page, use `--shadow-brand` (cobalt-tinted), not a
  plain gray shadow — consistent with the "don't" above.
- **No filters, overlays, or duotones exist in the current system** — if a future design needs one
  (e.g. a scrim behind text on a hero photo), it should be built from the existing tokens
  (e.g. a `linear-gradient` into `--color-brand-secondary`) rather than a new arbitrary color, the
  same way the Hero and Stance background gradients are built today.
- **Dimensions:** always set `width`/`height` explicitly (required by the image-handling rules in
  `CLAUDE.md`) rather than letting an image's intrinsic ratio drive layout.

## Ratings

The rating layer (`src/components/Stars.astro`, `RatingBadge.astro`, `RatingSummary.astro`,
`RateWidget.astro`, `SampleNotice.astro`, with the data model in `src/components/ratings.ts`)
follows the same rules as everything else on the site: color is a marker, depth is a hairline,
and a control that does not work is styled so it looks like it does not work.

- **Stars are amber, and fractional.** `Stars.astro` draws one SVG path five times, twice: a
  hairline layer underneath and an amber layer on top, clipped with `clip-path: inset()` to the
  exact value. A 4.3 shows as four full stars and a third of a fifth — never rounded to a whole
  star, and never a half-star glyph. Amber because a rating is "the thing we want read"; the
  numeric value beside it (rendered by the caller) is the accessible text, so the SVG itself is
  `aria-hidden`. This is the one place amber appears more than once in a section, and it is
  allowed because the five stars are a single mark.
- **Bars are cobalt on a hairline track.** The distribution and criteria bars in
  `RatingSummary.astro` are the site's lattice reduced to a rule: a track in `--line`, a fill in
  `--color-brand-primary`, square ends, no gradients, no rounded pills. Every bar carries its
  number as text, so the chart reads without color.
- **The vote is five real radio inputs.** `RateWidget.astro` renders each star as an
  `<input type="radio">` with a visible label, so a rating is one click, works with arrow keys,
  and reads to a screen reader as "Rate 4 out of 5". Picking a star unfolds the optional criteria
  and review fields. The `compact` variant (listing rows) is the stars alone; choosing one links
  to the product page with the star carried as `?rate=N`.
- **A closed control looks closed.** Until ratings post somewhere, the form's submit is a
  genuinely `disabled` pill with a dashed `--line-strong` border and `--color-brand-muted` text,
  and the note under it says so — the same convention as the closed email field in
  `ContributeCta`. Do not restyle it to look live before it is.
- **Sample figures are labelled as such.** `SAMPLE_MODE` in `ratings.ts` is `true` while every
  number in `sampleRatings` is illustrative. While it is on, `SampleNotice.astro` renders a
  one-line notice (body size, 3px amber left border — the same device as the affiliate
  disclosure) wherever a rating is shown, and renders nothing once the flag is off. The badge's
  honest empty state is the text "Not rated yet", not a row of grey stars.
- **Schema only from real data.** `AggregateRating` (and `review`) JSON-LD is emitted by
  `src/components/seo.ts` only when `SAMPLE_MODE` is false and the count is above zero. A sample
  average is fabricated as far as Google is concerned, and fabricated review markup earns a
  manual action. Never add rating markup to a page by hand.

## Directory pages

The five category pages (`src/pages/*-software.astro`, `website-builders.astro`,
`seo-marketing-tools.astro`, rendered by `src/components/CategoryHub.astro`) and the product
pages (`src/pages/[hub]/[slug].astro`) share one anatomy, so a reader who has learned one has
learned them all.

**Category page** (`CategoryHub.astro`), top to bottom:

1. Page head with the buyer question, the affiliate disclosure, and the sample-figures notice.
2. The catalog: `FilterRail.astro` beside the listing. From `64rem` up it is a two-column grid,
   the rail at `15rem` and `position: sticky`; below that the rail stacks above the rows. Every
   filter is a real checkbox or radio with a build-time count, and the script only ever hides or
   reorders the sibling `[data-listing]` rows — with no script, every row shows in editorial
   order.
3. The ranked ledger: one `ProductCard.astro` per pick, drawn as rows sharing a single hairline
   (`--line`) between them — no cards, no shadows, no radius beyond the tile's. Left to right on
   a wide screen: tile and rank, name and rating line, tagline and best-for/skip-if chips,
   pricing shape, actions, and a compact one-click `RateWidget`.
4. The at-a-glance table: the shortlist as a grid, `--color-brand-surface` head, hairline cells.
5. The buyer's guide (`CategoryGuide.astro`): what the category is, features as a ruled
   two-column list, and numbered how-to-choose steps, set in the reading column.
6. The FAQ (`Faq.astro`): one ruled list of `<details>` elements, so the open/closed state is
   the browser's own and it works with no script. The page emits matching `FAQPage` schema from
   `seo.ts` so what Google reads is what is shown.

**Product page** (`src/pages/[hub]/[slug].astro`):

1. `ProductHero.astro`: tile, name, vendor and category, the `RatingBadge` line, and the two
   actions (visit the vendor; rate it here) in a bordered column from `60rem` up.
2. The in-page ruler under the hero: a row of section links between two hairlines, with a
   cobalt underline on hover. From `70rem` up it is `position: sticky` at `top: 3.5rem`, directly
   under the site nav; below that the site nav grows its category strip, so the ruler scrolls
   with the page rather than fighting for the top edge. One hairline, no shadow — it reads as
   the page's ruler, not a toolbar.
3. Sections alternate paper and surface: overview (paper), ratings (surface), pricing (paper),
   best-for (surface), alternatives (paper), questions. Surface sections (`.ps-alt`) carry a
   hairline top and bottom so the change of room is drawn, not implied. Every section uses the
   standard `clamp(2.25rem, 5vw, 3.75rem)` vertical rhythm.

Rule for a new directory component: it joins the ledger, not a card grid. Rows share edges,
depth is a hairline, and any state the reader can change (a filter, an open answer, a vote) is
a real form control before it is a script.
