/**
 * Helpers shared by every page that reads the `articles` collection.
 *
 * getArticles() is the one door into the collection. Every page reads through
 * it, so an article marked `draft: true` cannot turn up in a feed, a menu, a
 * hub, the search index or as a generated page — in dev or in the build.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categoryById, type Category, type Tone } from './data';

export type Article = CollectionEntry<'articles'>;
export type Author = CollectionEntry<'authors'>;
export type ArticleType = Article['data']['type'];

/** Published articles only, newest first. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => data.draft !== true);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAuthors(): Promise<Author[]> {
  return getCollection('authors');
}

export function articleUrl(a: Article): string {
  return `/${a.id}`;
}

export function authorUrl(id: string): string {
  return `/authors/${id}`;
}

/** The word the site uses for each kind of article, in sentence case. */
export const typeLabel: Record<ArticleType, string> = {
  review: 'Review',
  best: 'Best of',
  alternatives: 'Alternatives',
  pricing: 'Pricing guide',
  comparison: 'Head to head',
  guide: 'Guide',
};

/** Plural, for index headings and menu groups. */
export const typePlural: Record<ArticleType, string> = {
  review: 'Reviews',
  best: 'Best-of lists',
  alternatives: 'Alternatives',
  pricing: 'Pricing guides',
  comparison: 'Comparisons',
  guide: 'Guides',
};

export const ofType = (list: Article[], type: ArticleType) => list.filter((a) => a.data.type === type);
export const inCategory = (list: Article[], id: string) => list.filter((a) => a.data.category === id);
export const byId = (list: Article[], id: string) => list.find((a) => a.id === id);

export function categoryOf(a: Article): Category | undefined {
  return categoryById(a.data.category);
}

/** The colour tone an article's thumbnail takes: its category's, or paper. */
export function toneOf(a: Article): Tone {
  return categoryOf(a)?.tone ?? 'surface';
}

/** The big words on the typographic thumbnail. */
export function thumbTitle(a: Article): string {
  const d = a.data;
  switch (d.type) {
    case 'review':
    case 'pricing':
      return d.product?.name ?? d.title;
    case 'comparison':
      return d.title.split(':')[0];
    case 'best': {
      const c = categoryOf(a);
      return c ? `Best ${c.short}` : d.title.split(':')[0];
    }
    case 'alternatives':
      return d.product?.name ? `${d.product.name} alternatives` : d.title.split(' in ')[0];
    default:
      return d.title;
  }
}

/** "22 September 2026" — the site writes in British English. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Whole minutes at a steady 220 words a minute, never less than one. */
export function readingMinutes(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Reviews in a category, best score first — what "top rated" lists read. */
export function topRated(list: Article[], categoryId?: string): Article[] {
  return ofType(list, 'review')
    .filter((a) => !categoryId || a.data.category === categoryId)
    .sort((a, b) => (b.data.product?.score ?? 0) - (a.data.product?.score ?? 0));
}

/** "4.4" — one decimal, never "4.40". */
export function fmtScore(n: number): string {
  return n.toFixed(1);
}

export interface IndexEntry {
  /** Display title. */
  t: string;
  /** URL path. */
  u: string;
  /** Kind: hub, review, best, comparison … */
  k: string;
  /** Extra search terms. */
  x: string[];
}

/** The site search index: every hub and every published article. */
export function buildSearchIndex(list: Article[]): IndexEntry[] {
  const hubs: IndexEntry[] = categories.map((c) => ({
    t: c.name,
    u: c.hub,
    k: 'hub',
    x: [c.short, `best ${c.short}`, `${c.short} software`],
  }));
  const items: IndexEntry[] = list.map((a) => ({
    t: a.data.title,
    u: articleUrl(a),
    k: a.data.type,
    x: [
      ...(a.data.product ? [a.data.product.name, `${a.data.product.name} ${a.data.type}`] : []),
      ...a.data.tags,
      thumbTitle(a),
    ],
  }));
  return [...hubs, ...items];
}
