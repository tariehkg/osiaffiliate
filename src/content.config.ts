import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Authors are the staff. One JSON array (src/data/authors.json); each `id` is
 * the /authors/[id] URL segment and the value an article's `author` points at.
 * `placeholder: true` marks a profile that has not been filled in yet: the
 * pages draw it with the site's dashed "not real yet" treatment rather than
 * pretending it is a person.
 */
const authors = defineCollection({
  loader: file('src/data/authors.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      avatar: image(),
      placeholder: z.boolean().default(false),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

export const articleTypes = ['review', 'best', 'alternatives', 'pricing', 'comparison', 'guide'] as const;
export const categoryIds = ['crm', 'email', 'sites', 'pm', 'seo'] as const;

const criterion = z.object({
  label: z.string(),
  /** Editor's score, 0–5, one decimal. */
  score: z.number().min(0).max(5),
  note: z.string().optional(),
});

/**
 * The structured half of a product review (or a pricing guide). The prose
 * lives in the markdown body; this is what the score tile, the summary box,
 * the pros and cons, the comparison tables and the schema markup read.
 */
const product = z.object({
  name: z.string(),
  vendor: z.string(),
  /** Stable product id, kebab-case — shared by the review and its pricing guide. */
  id: z.string(),
  monogram: z.string(),
  role: z.string(),
  url: z.string().url(),
  urlLabel: z.string(),
  pricing: z.enum(['free', 'trial', 'paid']),
  plan: z.string(),
  segments: z.array(z.enum(['solo', 'small-team', 'agency'])).default([]),
  score: z.number().min(0).max(5).optional(),
  criteria: z.array(criterion).default([]),
  pros: z.array(z.string()).default([]),
  cons: z.array(z.string()).default([]),
  bestFor: z.array(z.string()).default([]),
  notFor: z.array(z.string()).default([]),
  summary: z.array(z.string()).default([]),
  verdict: z.string().optional(),
  pricingShape: z.string().optional(),
  freeTier: z.string().optional(),
});

/**
 * Every article on the site — reviews, best-of lists, alternatives lists,
 * pricing guides, head-to-head comparisons and guides — is one markdown file
 * in src/content/articles/. The file name is the URL: hubspot-crm-review.md
 * is /hubspot-crm-review.
 *
 * `draft: true` keeps an article out of every page and feed; see
 * getArticles() in src/components/articles.ts, the only door into this
 * collection.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(articleTypes),
      category: z.enum(categoryIds).optional(),
      author: reference('authors'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      /** Shown first on the homepage feed and the category hub. */
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      /** One or two lede paragraphs rendered above the structured blocks. */
      intro: z.array(z.string()).default([]),
      image: z
        .object({
          src: image(),
          alt: z.string(),
          credit: z.string().optional(),
        })
        .optional(),
      product: product.optional(),
      /** best / alternatives: the reviews this list is made of, in order. */
      picks: z.array(z.object({ review: z.string(), bestFor: z.string() })).default([]),
      /** comparison: the two reviews and the dimension table. */
      compare: z
        .object({
          a: z.string(),
          b: z.string(),
          rows: z.array(z.object({ dim: z.string(), a: z.string(), b: z.string() })),
          calls: z.array(z.object({ name: z.string(), who: z.string() })),
        })
        .optional(),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { authors, articles };
