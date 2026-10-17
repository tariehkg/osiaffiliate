/**
 * The five software categories the site covers. Everything else about a
 * category — its shortlist, its reviews, its comparisons — is read from the
 * `articles` collection at build time, so this file is only the fixed facts:
 * the name, the URL, the buyer question and the colour tone its thumbnails
 * take.
 */

export type Tone = 'cobalt' | 'amber' | 'navy' | 'surface' | 'deep';

export interface Category {
  id: 'crm' | 'email' | 'sites' | 'pm' | 'home';
  /** Nav label — short. */
  short: string;
  /** Full category name. */
  name: string;
  /** Plain-English noun for running copy: "a CRM", "an email marketing tool". */
  noun: string;
  /** The category word as it reads mid-sentence: "CRM", "marketing", "home services". */
  plain: string;
  hub: string;
  /** The buyer question this category answers, in plain language. */
  question: string;
  /** Which of the site's five colour tones the category's thumbnails take. */
  tone: Tone;
  /** Extra search terms for the hub: old names, the trades it covers. */
  aliases?: string[];
}

export const categories: Category[] = [
  {
    id: 'crm',
    short: 'CRM',
    plain: 'CRM',
    name: 'CRM & Sales',
    noun: 'a CRM',
    hub: '/crm-software',
    question: 'Where do leads live, and what makes sure nobody gets dropped?',
    tone: 'cobalt',
  },
  {
    id: 'email',
    short: 'Marketing',
    plain: 'marketing',
    name: 'Marketing & Automation',
    noun: 'a marketing tool',
    hub: '/marketing-software',
    question: 'What gets your message out, and what follows up while you sleep?',
    tone: 'amber',
    aliases: ['email marketing', 'email', 'automation', 'newsletters'],
  },
  {
    id: 'sites',
    short: 'Website Builders',
    plain: 'website builder',
    name: 'Website & Funnel Builders',
    noun: 'a website builder',
    hub: '/website-builders',
    question: 'What do you actually build the site or the funnel on?',
    tone: 'navy',
  },
  {
    id: 'pm',
    short: 'Project Management',
    plain: 'project management',
    name: 'Project Management & Productivity',
    noun: 'a project management tool',
    hub: '/project-management-software',
    question: 'What keeps the work organised without becoming the work?',
    tone: 'surface',
  },
  {
    id: 'home',
    short: 'Home Services',
    plain: 'home services',
    name: 'Home Services',
    noun: 'a home services tool',
    hub: '/home-services-software',
    question: 'What books the jobs, quotes them, and gets you paid on time?',
    tone: 'deep',
    aliases: ['field service', 'scheduling', 'quoting', 'invoicing', 'trades', 'contractors'],
  },
];

export function categoryById(id?: string | null): Category | undefined {
  return categories.find((c) => c.id === id);
}
