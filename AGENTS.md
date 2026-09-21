## Project overview

OSI Affiliate is a curated software-shortlist site — five categories of business software (CRM,
email marketing, website builders, project management, SEO tools), a short real shortlist in each,
built for a solopreneur or small-business owner replacing a specific tool rather than an enterprise
buyer. Stack: Astro 6 + Tailwind (v4, `@theme`) + React (for interactive islands where needed),
deployed on Cloudflare Workers via `@astrojs/cloudflare`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

All brand, color, and typography decisions live in [`docs/brand-guide.md`](docs/brand-guide.md).
Read it before making any design decision — color, type, spacing, tone, or image treatment.

## File structure

- **Components:** `src/components/` — PascalCase `.astro` files (e.g. `HeroSection.astro`).
- **Pages:** `src/pages/` — lowercase with hyphens (e.g. `about.astro`).
- **Styles and tokens:** `src/styles/global.css`, under the `@theme` block.

## Component rules — IMPORTANT

- Before building any new UI element, check `/design-system` for an existing component.
- If a match exists: import and reuse it — never rebuild what already exists.
- If no match exists: build the component in `src/components/`, add it to the design system page
  (`src/pages/design-system.astro`) with its name and file path, **then** use it in the page you're
  building.
- The design system page must always reflect every reusable component in `src/components/` — keep
  it updated whenever a component is added, renamed, or removed.

## Styling rules

- All colors and fonts are defined as Tailwind tokens in `src/styles/global.css` under `@theme`.
- Always use Tailwind utility classes with those tokens — never hard-code hex values or font names
  in components.
- To add a new color or font: add it to `@theme` first, then use the class. Update
  `docs/brand-guide.md` in the same change.

## Image handling

- Content images (photos, hero images, team photos, blog thumbnails) belong in
  `src/assets/images/` — **not** in `public/`. If images are found in `public/images/`, move them
  to `src/assets/images/` and update all references.
- Always use Astro's `<Image>` component (from `astro:assets`) for content images stored in
  `src/assets/`. Import the image file, then pass it to `<Image>` with explicit `width` and
  `height` props matching the intended display size. This gives automatic format conversion,
  responsive srcset, and lazy loading.
- For external images from R2 buckets: first add the R2 domain to `image.domains` or
  `image.remotePatterns` in `astro.config.mjs`, then use Astro's `<Image>` component the same way
  as local images. Never use `<img>` as a shortcut just because the config is missing — update the
  config instead.
- For third-party URLs you don't control (not R2): use a standard `<img>` tag with explicit
  `width` and `height`.
- Always include these props on every `<Image>`: `width`, `height`, `quality={80}` (prevents
  blurry default compression). For any image that changes size across breakpoints or spans a
  responsive container, always include both `widths` (array of pixel widths for srcset — include
  1x and 2x of the display size) and `sizes` (media query string matching your CSS breakpoints) —
  do not omit them on responsive images.
- Above-the-fold images (hero, header) must use `loading="eager"`, `fetchpriority="high"`, and
  `decoding="sync"`. All other images use `loading="lazy"` (Astro default).
- `public/` is only for system files that must be served at a fixed path: `favicon.ico`,
  `logo.svg`, `robots.txt`, OG images. No content images.
- Always include descriptive `alt` text on every image.

## Performance rules

- **Fonts:** Must be self-hosted via `@fontsource` or `@fontsource-variable` packages imported in
  `src/styles/global.css`. Never add Google Fonts `<link>` tags or `preconnect` hints to external
  font services — these add 1-2 seconds to first paint via render-blocking cross-origin requests.
- **`will-change`:** Avoid `will-change` entirely unless you are fixing a measured animation
  performance problem. Never put it in base CSS, never apply it to a selector that matches many
  elements, and never leave it on after an animation ends.
- **Below-fold sections:** Use `content-visibility: auto` with `contain-intrinsic-size: auto 600px`
  only on heavy, self-contained sections that start below the fold. Do not apply it to headers,
  heroes, sticky elements, footer, anchor-link target sections, or sections whose JS needs layout
  measurements before they enter the viewport.
- **No render-blocking external resources:** Do not add `<link rel="stylesheet">` to external
  domains in the `<head>`. All CSS and fonts must be same-origin (bundled into the `_astro/`
  directory).

## Visual work

When building or modifying any page, component, or visual element, load the `/frontend-design`
skill first. This ensures distinctive, high-quality design — not generic AI output.

## After every set of code changes

Run `npm run lint:fix` to auto-fix, then `npm run lint` to confirm no errors — do this before
reporting done.
