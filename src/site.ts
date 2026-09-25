/**
 * One place for the facts about the site itself. Canonical URLs, the sitemap,
 * Open Graph tags and every JSON-LD block read from here, so the address is
 * never typed twice.
 */
export const SITE_URL = 'https://www.osiaffiliate.com';
export const SITE_NAME = 'OSI Affiliate';
export const SITE_TAGLINE = 'Short software shortlists, rated by the people who use them';
export const SITE_DESCRIPTION =
  'A curated directory of business software for solopreneurs and small teams: a short, editor-chosen shortlist in every category, rated by readers, with the business model stated on the page.';

/** Absolute URL for a site path. Accepts "/crm-software" or "crm-software". */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean === '/' ? '/' : clean.replace(/\/$/, '')}`;
}
