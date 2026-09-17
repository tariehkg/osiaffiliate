/**
 * The homepage's real content.
 *
 * Every product here is a real, current, well-known tool. The `plan` line is
 * a qualitative statement about how the vendor sells it (free plan / free
 * trial / paid only) rather than a hard price, because the site has not
 * verified a specific dollar figure for every tier. No ratings, no review
 * counts, no testimonials — the site has no real ones yet and does not
 * invent them.
 *
 * `monogram` is a typographic stand-in, deliberately not an approximation of
 * any vendor's actual logo.
 */

export interface Pick {
  name: string;
  monogram: string;
  /** One short, honest line on what the tool is for. Our own editorial note. */
  role: string;
  /** How the vendor sells it. Qualitative on purpose. */
  plan: string;
  /**
   * Stable anchor id (kebab-case) for this pick's section on its category hub
   * page — e.g. `<article id="hubspot-crm">` on /crm-software. Lets any other
   * part of the site (the homepage directory, internal links) deep-link to a
   * specific real pick with `${hub}#${slug}` instead of duplicating text.
   */
  slug: string;
}

export interface Category {
  /** Stable id used for the radio inputs driving the zero-JS browser. */
  id: string;
  /** Nav label — short. */
  short: string;
  /** Full category name. */
  name: string;
  hub: string;
  comparison?: { label: string; href: string };
  /** The buyer question this category answers, in plain language. */
  question: string;
  picks: Pick[];
}

export const categories: Category[] = [
  {
    id: 'crm',
    short: 'CRM & Sales',
    name: 'CRM & Sales',
    hub: '/crm-software',
    comparison: {
      label: 'HubSpot vs Pipedrive',
      href: '/crm-software/hubspot-vs-pipedrive',
    },
    question: 'Where do leads live, and what makes sure nobody gets dropped?',
    picks: [
      {
        name: 'HubSpot CRM',
        monogram: 'Hs',
        role: 'Broadest free tier; grows into marketing and service',
        plan: 'Free plan available',
        slug: 'hubspot-crm',
      },
      {
        name: 'Pipedrive',
        monogram: 'Pd',
        role: 'Pipeline-first, built around the next action on a deal',
        plan: 'Free trial, then paid per seat',
        slug: 'pipedrive',
      },
      {
        name: 'Close',
        monogram: 'Cl',
        role: 'Calling and email built in, for teams that sell by phone',
        plan: 'Free trial, then paid per seat',
        slug: 'close',
      },
      {
        name: 'monday CRM',
        monogram: 'mo',
        role: 'Sales boards for teams already on monday.com',
        plan: 'Free trial, then paid per seat',
        slug: 'monday-crm',
      },
    ],
  },
  {
    id: 'email',
    short: 'Email Marketing',
    name: 'Email Marketing & Automation',
    hub: '/email-marketing-software',
    comparison: {
      label: 'GetResponse vs AWeber',
      href: '/email-marketing-software/getresponse-vs-aweber',
    },
    question: 'What sends the emails, and what follows up while you sleep?',
    picks: [
      {
        name: 'GetResponse',
        monogram: 'Gr',
        role: 'Email plus landing pages and funnels in one account',
        plan: 'Free plan available',
        slug: 'getresponse',
      },
      {
        name: 'AWeber',
        monogram: 'Aw',
        role: 'Long-running, simple list tooling with human support',
        plan: 'Free plan available',
        slug: 'aweber',
      },
      {
        name: 'ActiveCampaign',
        monogram: 'Ac',
        role: 'The deepest automation builder of the three',
        plan: 'Free trial, then paid by contacts',
        slug: 'activecampaign',
      },
    ],
  },
  {
    id: 'sites',
    short: 'Website Builders',
    name: 'Website & Funnel Builders',
    hub: '/website-builders',
    comparison: {
      label: 'Systeme.io vs Webflow',
      href: '/website-builders/systemeio-vs-webflow',
    },
    question: 'What do you actually build the site or the funnel on?',
    picks: [
      {
        name: 'Systeme.io',
        monogram: 'Sy',
        role: 'Funnels, email and checkout bundled for solo operators',
        plan: 'Free plan available',
        slug: 'systeme-io',
      },
      {
        name: 'Webflow',
        monogram: 'Wf',
        role: 'Designer-grade control over layout and CMS structure',
        plan: 'Free to build, paid to launch on your domain',
        slug: 'webflow',
      },
    ],
  },
  {
    id: 'pm',
    short: 'Project Management',
    name: 'Project Management & Productivity',
    hub: '/project-management-software',
    question: 'What keeps the work organised without becoming the work?',
    picks: [
      {
        name: 'Notion',
        monogram: 'No',
        role: 'Docs and databases in the same place; shape it yourself',
        plan: 'Free plan available',
        slug: 'notion',
      },
      {
        name: 'ClickUp',
        monogram: 'Cu',
        role: 'Most features per seat, if you can stand the settings',
        plan: 'Free plan available',
        slug: 'clickup',
      },
      {
        name: 'Asana',
        monogram: 'As',
        role: 'Opinionated task and project structure out of the box',
        plan: 'Free plan available',
        slug: 'asana',
      },
    ],
  },
  {
    id: 'seo',
    short: 'SEO Tools',
    name: 'SEO & Marketing Tools',
    hub: '/seo-marketing-tools',
    question: 'What tells you why you are not being found, and what to fix?',
    picks: [
      {
        name: 'Semrush',
        monogram: 'Se',
        role: 'Widest toolkit: keywords, competitors, site audits, ads',
        plan: 'Limited free account, then paid',
        slug: 'semrush',
      },
      {
        name: 'Ahrefs',
        monogram: 'Ah',
        role: 'Strongest backlink and referring-domain data',
        plan: 'Paid plans; free Webmaster Tools for your own site',
        slug: 'ahrefs',
      },
      {
        name: 'Moz Pro',
        monogram: 'Mz',
        role: 'Friendlier learning curve; good rank tracking',
        plan: 'Free trial, then paid monthly',
        slug: 'moz-pro',
      },
    ],
  },
];

/** How picks are actually chosen. Stated as it is, including the limits. */
export const method = [
  {
    title: 'We read the pricing page, not the press release',
    body: 'Every plan line on this site is checked against the vendor’s own current pricing and docs, and re-checked when they change it.',
  },
  {
    title: 'We have not hands-on tested every tool',
    body: 'This is research, not a lab. Where a pick rests on documented features rather than our own daily use, we say so on the page instead of implying otherwise.',
  },
  {
    title: 'Paid placement cannot buy a position',
    body: 'No vendor pays to appear here or to rank higher. We earn a commission when you sign up through some of our links, and that never reorders a shortlist.',
  },
  {
    title: 'A short list stays short',
    body: 'Two to four picks per category. If a tool no longer earns its slot, it comes out rather than being kept for the extra link.',
  },
];
