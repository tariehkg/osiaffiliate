import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

/* Placeholder staff profiles are noindexed, so they stay out of the sitemap. */
const placeholderAuthors = JSON.parse(readFileSync('./src/data/authors.json', 'utf8'))
  .filter((a) => a.placeholder)
  .map((a) => `/authors/${a.id}`);

// 'compile' pre-optimizes every astro:assets image at build time — right
// for the production build. In `astro dev`, though, it routes <Image>
// through a Cloudflare Images transform endpoint that the local dev server
// doesn't have bindings for, and the request throws instead of rendering —
// taking down the whole page mid-render. Fall back to 'passthrough'
// (serves the original file, no transform) in dev only, where the extra
// optimization doesn't matter anyway.
const isDev = process.argv.includes('dev');

export default defineConfig({
  site: 'https://www.osiaffiliate.com',
  output: 'static',
  // One URL per page, without a trailing slash: /about is about.html, so the
  // canonical, the sitemap and every internal link agree and nothing 307s.
  trailingSlash: 'never',
  build: { format: 'file' },
  adapter: cloudflare({
    imageService: isDev ? 'passthrough' : 'compile',
  }),
  integrations: [
    react(),
    // The design-system page is an internal inventory, and the /rate, /blog
    // and old /<hub>/<product> pages only forward to their new addresses.
    sitemap({
      filter: (page) =>
        !page.includes('/design-system') &&
        !/\/(rate|blog)(\/|$)/.test(page) &&
        !/\/(crm-software|email-marketing-software|website-builders|project-management-software|seo-marketing-tools)\/[^/]+/.test(page) &&
        !placeholderAuthors.some((path) => page.endsWith(path) || page.endsWith(`${path}/`)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Cloudflare's local Miniflare emulation writes SQLite state files
        // under .wrangler/state on every dev request. No reason for Vite's
        // file watcher to treat those writes as source changes.
        ignored: ['**/.wrangler/**'],
      },
    },
  },
});
