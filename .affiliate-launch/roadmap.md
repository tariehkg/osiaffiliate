# Launch Roadmap — OSI Affiliate

## The Pitch
A curated B2B software directory for small businesses, solopreneurs, and marketers — modeled on Capterra and G2's format, but deliberately not their scale. Instead of an open marketplace listing thousands of vendors, OSI Affiliate picks 5 high-commission, high-demand software categories (CRM, Email Marketing, Website Builders, Project Management, SEO Tools) and gives each a short, opinionated shortlist. Money comes from individual per-vendor affiliate programs, joined as each software company is added, with the business model disclosed prominently rather than buried — the gap the research found in both major competitors.

## Category Map
5 categories: **CRM & Sales**, **Email Marketing & Automation**, **Website & Funnel Builders**, **Project Management & Productivity**, **SEO & Marketing Tools**. 12 total routes — 5 category hubs, 3 head-to-head comparison pages (CRM, Email, Website Builders), plus How We Pick, Disclosure, About, and Contact. Full detail in `.affiliate-launch/taxonomy.md`.

## What the Competition Is Doing
Capterra and G2 (now under one owner after a January 2026 acquisition) monetize through vendor-paid lead generation and placement, not classic affiliate links — and disclose that thinly, with "Sponsored" as the only in-line signal. Both list every vendor who signs up (1,600+ in CRM alone), which is comprehensive but overwhelming. Full findings in `.affiliate-launch/competitor-scan.md`.

## Concepts on the Table

**1. The Short List** — Ink-navy and brass, serif display type, ranked-list format capped at 5-6 picks per category. Editorial, restrained, trust-forward. Fonts: Lora + Work Sans.

**2. The Comparison Engine** — Deep indigo and amber, geometric sans, a real comparison matrix above the fold. Matches the comparison-table pattern buyers already trust from G2/Capterra, executed cleaner. Fonts: Sora + IBM Plex Sans.

**3. The Toolkit** — Teal, mustard, and coral, rounded friendly type, homepage built around an interactive "build your stack" picker. Aimed at the solopreneur specifically, not an enterprise IT buyer. Fonts: Plus Jakarta Sans + Karla.

Full detail, palettes, and rationale in `.affiliate-launch/concepts.json`.

## What Gets Built
- Astro 7 project with Tailwind CSS v4 + React
- All 12 taxonomy pages scaffolded as real routes — not a single-page site
- 3 homepage concepts as Astro pages, each with its nav/footer wired to the real 5-category taxonomy
- Cloudflare Workers deployment config (static output)

## Previewing Your Concepts
After approval, run: `npm run dev`
Then open:
- `localhost:4321/route-1-the-short-list`
- `localhost:4321/route-2-the-comparison-engine`
- `localhost:4321/route-3-the-toolkit`
