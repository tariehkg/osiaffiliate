/**
 * JSON-LD builders. Each returns a plain object; Layout serialises whatever
 * it is handed in `jsonld`.
 *
 * The one rule that matters: `aggregateRating` and `review` are only ever
 * emitted from real data. In SAMPLE_MODE (see ratings.ts) the product schema
 * carries the application details and nothing about ratings.
 */
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, absoluteUrl } from '../site';
import { SAMPLE_MODE, getRating, type RatingSummary } from './ratings';

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
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?q={search_term_string}` },
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

export interface ListedProduct {
  name: string;
  url: string;
}

/** A category page is an ordered list of the products on it. */
export function itemListLd(name: string, items: ListedProduct[]) {
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
  slug: string;
  name: string;
  path: string;
  description: string;
  category: string;
  vendorUrl: string;
  /** "Free plan available" etc. — the qualitative plan line. */
  plan: string;
}

export function softwareApplicationLd(p: ProductLdInput) {
  const base: Record<string, unknown> = {
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

  const r: RatingSummary = getRating(p.slug);
  if (!SAMPLE_MODE && r.count > 0) {
    base.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: r.average,
      ratingCount: r.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return base;
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

/** Article schema for blog posts. */
export function articleLd(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  authorName: string;
  authorPath: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    datePublished: a.published.toISOString(),
    author: { '@type': 'Organization', name: a.authorName, url: absoluteUrl(a.authorPath) },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    ...(a.image ? { image: a.image.startsWith('http') ? a.image : absoluteUrl(a.image) } : {}),
  };
}
