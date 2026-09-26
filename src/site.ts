/**
 * One place for the facts about the site itself. Canonical URLs, the sitemap,
 * Open Graph tags and every JSON-LD block read from here, so the address is
 * never typed twice.
 */
export const SITE_URL = 'https://www.osiaffiliate.com';
export const SITE_NAME = 'OSI Affiliate';
export const SITE_TAGLINE = 'Business software, reviewed by staff who actually use it';
export const SITE_DESCRIPTION =
  'Independent reviews, shortlists and comparisons of business software for solopreneurs and small teams. Every tool is tested and scored by our staff, and we say plainly which links pay us.';

/**
 * The editor scores in the seed reviews were set before the staff testing
 * round was complete. While this is true, every page that shows a score also
 * shows a one-line note saying so, and the Review schema markup is withheld.
 * Flip it to false once the numbers are the staff's own.
 */
export const SCORES_PROVISIONAL = true;

/** Absolute URL for a site path. Accepts "/crm-software" or "crm-software". */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean === '/' ? '/' : clean.replace(/\/$/, '')}`;
}
