/**
 * Reader ratings — the data model, and the numbers the pages currently show.
 *
 * READ THIS BEFORE EDITING.
 *
 * Every figure in `sampleRatings` below is SAMPLE DATA, put here so the rating
 * components render as they will once real votes exist. No reader has rated
 * anything yet. Because of that:
 *
 *  - `SAMPLE_MODE` is true. While it is, every page that shows a rating also
 *    shows a one-line notice saying the figures are samples, and the JSON-LD
 *    on product pages deliberately omits `aggregateRating` — Google issues
 *    manual actions for fabricated review markup, and a sample average is
 *    fabricated as far as Google is concerned.
 *  - `reviews` is empty on purpose. A written review from a person who does
 *    not exist is a different thing from a sample number, and the site does
 *    not do it.
 *
 * When ratings go live: replace `sampleRatings` with the real store, set
 * `SAMPLE_MODE` to false, and the notice, the schema and the review lists
 * all switch over on their own.
 */

export const SAMPLE_MODE = true;

/** The four things a reader scores besides the overall star. */
export const criteria = [
  { key: 'ease', label: 'Ease of use' },
  { key: 'value', label: 'Value for money' },
  { key: 'support', label: 'Support' },
  { key: 'fit', label: 'Does the job' },
] as const;

export type CriterionKey = (typeof criteria)[number]['key'];

export interface RatingSummary {
  /** Mean overall score, 1–5, one decimal. */
  average: number;
  /** How many readers have rated. */
  count: number;
  /** Votes at each star, index 0 = 1 star … index 4 = 5 stars. */
  distribution: [number, number, number, number, number];
  /** Mean score per criterion, 1–5. */
  criteria: Record<CriterionKey, number>;
  /** Share of raters who said they would recommend it, 0–1. */
  recommend: number;
}

export interface Review {
  id: string;
  slug: string;
  rating: number;
  title: string;
  body: string;
  /** First name and initial, or "Verified user". */
  author: string;
  role?: string;
  date: string;
  pros?: string;
  cons?: string;
}

/* ------------------------------------------------------------------------
   SAMPLE DATA. Numbers are illustrative and are not measurements of anything.
   ------------------------------------------------------------------------ */
const sampleRatings: Record<string, RatingSummary> = {
  'hubspot-crm': {
    average: 4.4,
    count: 128,
    distribution: [3, 6, 14, 41, 64],
    criteria: { ease: 4.3, value: 4.0, support: 4.2, fit: 4.6 },
    recommend: 0.89,
  },
  pipedrive: {
    average: 4.6,
    count: 97,
    distribution: [1, 2, 8, 30, 56],
    criteria: { ease: 4.7, value: 4.4, support: 4.3, fit: 4.7 },
    recommend: 0.93,
  },
  close: {
    average: 4.5,
    count: 41,
    distribution: [0, 2, 3, 13, 23],
    criteria: { ease: 4.4, value: 3.9, support: 4.6, fit: 4.6 },
    recommend: 0.9,
  },
  'monday-crm': {
    average: 4.1,
    count: 36,
    distribution: [1, 3, 7, 12, 13],
    criteria: { ease: 4.3, value: 3.8, support: 4.0, fit: 4.0 },
    recommend: 0.81,
  },
  getresponse: {
    average: 4.3,
    count: 74,
    distribution: [2, 3, 9, 26, 34],
    criteria: { ease: 4.2, value: 4.5, support: 4.1, fit: 4.3 },
    recommend: 0.87,
  },
  aweber: {
    average: 4.2,
    count: 58,
    distribution: [1, 4, 8, 20, 25],
    criteria: { ease: 4.6, value: 4.1, support: 4.7, fit: 3.9 },
    recommend: 0.86,
  },
  activecampaign: {
    average: 4.4,
    count: 83,
    distribution: [2, 4, 7, 24, 46],
    criteria: { ease: 3.8, value: 4.1, support: 4.2, fit: 4.8 },
    recommend: 0.88,
  },
  'systeme-io': {
    average: 4.5,
    count: 66,
    distribution: [1, 2, 5, 19, 39],
    criteria: { ease: 4.4, value: 4.9, support: 4.3, fit: 4.4 },
    recommend: 0.92,
  },
  webflow: {
    average: 4.3,
    count: 71,
    distribution: [2, 4, 8, 22, 35],
    criteria: { ease: 3.6, value: 4.0, support: 4.1, fit: 4.7 },
    recommend: 0.85,
  },
  notion: {
    average: 4.6,
    count: 142,
    distribution: [2, 3, 10, 34, 93],
    criteria: { ease: 4.4, value: 4.7, support: 4.0, fit: 4.6 },
    recommend: 0.93,
  },
  clickup: {
    average: 4.2,
    count: 88,
    distribution: [3, 6, 12, 26, 41],
    criteria: { ease: 3.7, value: 4.5, support: 4.1, fit: 4.5 },
    recommend: 0.84,
  },
  asana: {
    average: 4.4,
    count: 104,
    distribution: [2, 4, 9, 35, 54],
    criteria: { ease: 4.6, value: 4.0, support: 4.2, fit: 4.5 },
    recommend: 0.9,
  },
  semrush: {
    average: 4.3,
    count: 79,
    distribution: [2, 4, 10, 25, 38],
    criteria: { ease: 4.0, value: 3.7, support: 4.2, fit: 4.7 },
    recommend: 0.86,
  },
  ahrefs: {
    average: 4.5,
    count: 91,
    distribution: [1, 3, 7, 28, 52],
    criteria: { ease: 4.5, value: 3.8, support: 4.0, fit: 4.8 },
    recommend: 0.91,
  },
  'moz-pro': {
    average: 4.1,
    count: 47,
    distribution: [1, 4, 9, 16, 17],
    criteria: { ease: 4.5, value: 4.0, support: 4.4, fit: 3.9 },
    recommend: 0.83,
  },
};

const reviews: Review[] = [];

/* ------------------------------------------------------------------------
   Read side. Pages only ever call these.
   ------------------------------------------------------------------------ */

const EMPTY: RatingSummary = {
  average: 0,
  count: 0,
  distribution: [0, 0, 0, 0, 0],
  criteria: { ease: 0, value: 0, support: 0, fit: 0 },
  recommend: 0,
};

export function getRating(slug: string): RatingSummary {
  return sampleRatings[slug] ?? EMPTY;
}

export function getReviews(slug: string): Review[] {
  return reviews.filter((r) => r.slug === slug);
}

/** True once at least one reader has rated it. */
export function isRated(slug: string): boolean {
  return getRating(slug).count > 0;
}

/** Total ratings across a set of slugs — the number a category page quotes. */
export function totalRatings(slugs: string[]): number {
  return slugs.reduce((n, s) => n + getRating(s).count, 0);
}

/** "4.4" — one decimal, never "4.40". */
export function fmtAverage(n: number): string {
  return n.toFixed(1);
}

/** Share of votes at a given star, 0–1. */
export function share(r: RatingSummary, star: 1 | 2 | 3 | 4 | 5): number {
  return r.count ? r.distribution[star - 1] / r.count : 0;
}
