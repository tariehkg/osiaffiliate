/**
 * JSON-LD builders. Each returns a plain object; Layout serialises whatever
 * it is handed in `jsonld`.
 *
 * One rule matters: rating markup is only emitted from scores the staff have
 * actually set. While SCORES_PROVISIONAL is true the product schema carries
 * the application details and nothing about ratings.
 */
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SCORES_PROVISIONAL, absoluteUrl } from '../site';

export interface Crumb {
  label: string;
  href: string;
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo.svg'),
    description: SITE_DESCRIPTION,
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/articles?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbLd(trail: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export interface ListedItem {
  name: string;
  url: string;
}

/** A shortlist or a hub is an ordered list of the things on it. */
export function itemListLd(name: string, items: ListedItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: absoluteUrl(p.url),
    })),
  };
}

export interface ProductLdInput {
  name: string;
  path: string;
  description: string;
  category: string;
  vendorUrl: string;
  /** "Free plan available" etc. — the qualitative plan line. */
  plan: string;
}

export function softwareApplicationLd(p: ProductLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    url: absoluteUrl(p.path),
    sameAs: p.vendorUrl,
    description: p.description,
    applicationCategory: p.category,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      description: p.plan,
      // Price is deliberately not stated: the site describes pricing shape,
      // not figures, and a wrong figure in schema is worse than none.
      availability: 'https://schema.org/OnlineOnly',
    },
  };
}

export interface ReviewLdInput extends ProductLdInput {
  score: number;
  authorName: string;
  authorPath: string;
  authorIsPerson: boolean;
  published: Date;
  title: string;
}

/**
 * A critic review: one author, one score. Returns null while scores are
 * provisional, so the caller can spread it away and emit nothing.
 */
export function reviewLd(r: ReviewLdInput) {
  if (SCORES_PROVISIONAL) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: r.title,
    url: absoluteUrl(r.path),
    datePublished: r.published.toISOString(),
    itemReviewed: softwareApplicationLd(r),
    reviewRating: { '@type': 'Rating', ratingValue: r.score, bestRating: 5, worstRating: 1 },
    author: {
      '@type': r.authorIsPerson ? 'Person' : 'Organization',
      name: r.authorName,
      url: absoluteUrl(r.authorPath),
    },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

export interface Faq {
  q: string;
  a: string;
}

export function faqPageLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Article schema for everything in the articles collection. */
export function articleLd(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  authorName: string;
  authorPath: string;
  authorIsPerson: boolean;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: {
      '@type': a.authorIsPerson ? 'Person' : 'Organization',
      name: a.authorName,
      url: absoluteUrl(a.authorPath),
    },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    ...(a.image ? { image: a.image.startsWith('http') ? a.image : absoluteUrl(a.image) } : {}),
  };
}
