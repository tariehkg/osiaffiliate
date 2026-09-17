/**
 * Long-form editorial for every pick, keyed by the `slug` in `data.ts`.
 *
 * Kept separate from `data.ts` on purpose: `data.ts` is the shortlist itself
 * (name, monogram, role, plan, slug) and is read by the homepage. This file is
 * the category-hub reasoning — the paragraphs, the caveat, and the honest
 * outbound link — and is read only by the hub pages.
 *
 * Rules this file follows:
 *  - Qualitative only. No dollar figures, seat counts, contact limits or
 *    percentages, because none of those have been verified tier by tier.
 *  - No ratings, review counts or quotes. The site has none.
 *  - `url` is the vendor's own public homepage, nothing else. There is no
 *    affiliate tag on it, and the label says where you are going.
 *  - `skip` is a real reason not to buy the thing, not a softened compliment.
 */

export interface PickDetail {
  /** Vendor's own public site. Plain link, no affiliate parameters. */
  url: string;
  /** Shown on the button, so the destination is never a surprise. */
  urlLabel: string;
  /** Why it made the shortlist, and who it is actually for. */
  body: string[];
  /** The honest caveat. Headed "Skip it if" on the page. */
  skip: string;
}

/** One-line summary of each shortlist, used under the hub page's h1. */
export const hubSummary: Record<string, string> = {
  crm: 'Four CRMs made the list. One is free to start, one is built for people who live in a pipeline, one is for teams who sell by phone, and one only makes sense if you are already on monday.com.',
  email:
    'Three platforms made the list: one that bundles email with pages and funnels, one that keeps sending deliberately simple, and one built for people who really will draw a branching automation.',
  sites:
    'Two builders made the list, and they barely compete. One is a business in a box for a solo operator; the other is a design tool for people who want real control over the page.',
  pm: 'Three tools made the list, separated less by features than by who has to maintain them: one you shape yourself, one that gives you everything and expects you to prune it, and one that decides the structure for you.',
  seo: 'Three tools made the list. They overlap heavily on paper and differ in where their data is strongest — links, keywords, or a gentler way in.',
};

/**
 * Which two picks each category's head-to-head page covers, by slug. Lets a
 * hub page point the right entries at the comparison instead of guessing from
 * the comparison's label.
 */
export const comparePicks: Record<string, string[]> = {
  crm: ['hubspot-crm', 'pipedrive'],
  email: ['getresponse', 'aweber'],
  sites: ['systeme-io', 'webflow'],
};

/** What the hub page says about the list as a whole, under the summary. */
export const hubNote: Record<string, string> = {
  crm: 'Every one of these can store a contact and a deal. The reason to choose between them is what happens on the days nobody feels like updating the CRM.',
  email:
    'Deliverability talk is where email tools get sold. All three of these are long-established senders with real compliance teams, so we have written about what they are shaped like instead — that is the part you actually feel.',
  sites:
    'The question people ask is one question — “what do I build it on?” — but it hides two very different jobs. Work out which job you have first; the pick follows from it.',
  pm: 'Project tools fail for the same reason gym memberships do. We have weighted how much upkeep each one needs over how many features it ships with.',
  seo: 'These are the most expensive tools on the site, and the easiest to overbuy. Each entry below says what you are actually paying for.',
};

export const pickDetail: Record<string, PickDetail> = {
  /* ---------------------------------------------------------------- CRM */
  'hubspot-crm': {
    url: 'https://www.hubspot.com',
    urlLabel: 'Visit hubspot.com',
    body: [
      'HubSpot is on this list because its free tier is the most usable free CRM we found, not because it is the cheapest way to end up paying. You get contacts, companies, deals, a pipeline, email tracking and forms without a card, and you can run a real sales process on that for a long time.',
      'It earns its slot for a second reason: it is one record of the customer that marketing and support can both work from later. If you can imagine wanting email campaigns, a help desk or a chat widget attached to the same contact next year, starting here saves you a migration.',
      'Best for a one-to-ten-person business that wants a system of record now and might grow into marketing automation. Worth knowing before you commit: the jump from free to paid tiers is a real step, seats and contact tiers both push the bill, and the features that make HubSpot pleasant tend to sit one tier above the one you are on.',
    ],
    skip: 'you only want a pipeline. HubSpot is broad by design, and you will be paying for — and clicking past — marketing and service tooling you never asked for. A focused CRM will feel faster every day.',
  },
  pipedrive: {
    url: 'https://www.pipedrive.com',
    urlLabel: 'Visit pipedrive.com',
    body: [
      'Pipedrive is the pick for people whose day is a pipeline. It opens on stages and deals rather than a dashboard, and its whole structure pushes one question at you: what is the next action on this deal, and when.',
      'That focus is the reason it made the list over several broader tools. Reps update it because updating it is how they see their own work, which is the only reliability test a CRM really has.',
      'Best for a small sales team — two people or twenty — where someone is responsible for a number and the process is mostly outbound or follow-up driven. It is a paid tool from the start; there is a trial, but no permanent free plan to hide in.',
    ],
    skip: 'you need marketing email, a help desk or a free tier. Pipedrive is deliberately a sales tool, so the rest of the customer lifecycle ends up in other subscriptions.',
  },
  close: {
    url: 'https://close.com',
    urlLabel: 'Visit close.com',
    body: [
      'Close made the list for one specific shape of team: the kind that sells on the phone. Calling, SMS and email sequences are built into the CRM rather than bolted on through a dialer integration, so the call happens where the record lives and the logging is not a separate habit.',
      'For a team doing real outbound volume, that removes the failure point that kills most CRM rollouts — the gap between doing the work and recording it.',
      'Best for inside sales and outbound teams who dial every day and want fewer tools in the loop. It is priced as a premium per-seat product with no free plan, which is the trade for having the phone system inside the CRM.',
    ],
    skip: 'your sales are inbound, self-serve or handled over email and chat. You would be paying a premium for a dialer nobody picks up.',
  },
  'monday-crm': {
    url: 'https://monday.com',
    urlLabel: 'Visit monday.com',
    body: [
      'monday CRM is on this list with an honest condition attached: it is the right answer mainly if your team already runs on monday.com. Then the sales pipeline becomes another board in the tool everyone already opens, with the same automations, views and permissions you have already learned.',
      'That shared-surface advantage is real and it is the reason it beats a second, better CRM for these teams. One login, one place where work lives, no arguing about which tool holds the truth about a customer.',
      'Best for teams already on monday.com for projects who want sales tracked next to delivery. It is a paid product per seat, with a trial rather than a lasting free tier.',
    ],
    skip: 'you are not already a monday.com team. Judged purely as a CRM against Pipedrive or HubSpot it is the less purposeful tool, and adopting the whole work platform to get it is a much bigger decision than picking a CRM.',
  },

  /* -------------------------------------------------------------- Email */
  getresponse: {
    url: 'https://www.getresponse.com',
    urlLabel: 'Visit getresponse.com',
    body: [
      'GetResponse made the list because it collapses three subscriptions into one account: email sending, landing pages, and the automation that connects them. For a solo operator, that is not a feature list — it is one bill and one place where a funnel breaks.',
      'The automation builder is genuinely capable without demanding a week of study, and the free plan is real enough to build and send from while you are still working out whether the business needs any of this.',
      'Best for a solopreneur or small marketing team running lead capture and follow-up end to end, who would rather have one adequate tool for each job than three excellent ones to reconcile.',
    ],
    skip: 'you already pay for a website or page builder you like. Half of what you are buying here is page and funnel tooling, and a pure email platform will do the sending part with less around it.',
  },
  aweber: {
    url: 'https://www.aweber.com',
    urlLabel: 'Visit aweber.com',
    body: [
      'AWeber is on this list for being deliberately unambitious. It has been sending email for a very long time, it has a free plan for a small list, and the path from importing contacts to sending a broadcast is short enough that you do not need a tutorial.',
      'It also still answers the phone. Reachable human support is a thin-looking advantage right up until a send goes wrong, and among the tools we looked at AWeber is the one that treats it as a product feature rather than a cost centre.',
      'Best for a newsletter, a small list, or anyone whose email plan is “write to people regularly” rather than “build a machine”. Also a reasonable pick for a non-technical owner who will be doing the sending themselves.',
    ],
    skip: 'you want branching automations, deep segmentation or behavioural triggers. AWeber can do basic sequences, but you will feel the ceiling, and moving a list later is a chore.',
  },
  activecampaign: {
    url: 'https://www.activecampaign.com',
    urlLabel: 'Visit activecampaign.com',
    body: [
      'ActiveCampaign earns its slot on automation depth. Its builder handles conditional branches, waits, scoring and goal-based paths comfortably, and it is the tool on this shortlist most likely to still fit once your follow-up logic gets genuinely complicated.',
      'It also has a real CRM side, so sales follow-up and marketing email can sit against the same contact rather than being synced between two products.',
      'Best for a business whose email actually is a system: different sequences by segment, behaviour-triggered follow-up, someone in-house who wants to own that. Pricing scales with contacts, so it rewards a list that converts rather than a list that is merely large.',
    ],
    skip: 'you send one newsletter a week. The builder that justifies the price is the one you would never open, and the learning curve is the steepest of the three.',
  },

  /* -------------------------------------------------------- Site builders */
  'systeme-io': {
    url: 'https://systeme.io',
    urlLabel: 'Visit systeme.io',
    body: [
      'Systeme.io is on this list as a business in a box. Funnels, email, checkout, and course or membership hosting come in the same account, which means one login and one bill for the whole path from landing page to payment.',
      'Its free plan is the most generous of anything on this site, and it is not a demo — you can launch something that takes money on it. For a solo operator with an offer and no team, that combination is hard to beat on effort per pound.',
      'Best for course creators, coaches and solo sellers whose website is really a funnel. The trade is deliberate: you get breadth and speed, and you give up fine control over how the pages look.',
    ],
    skip: 'the site is the brand. Design control is limited and the templates read as templates, so if a designer is involved or the page has to feel bespoke, you will fight it.',
  },
  webflow: {
    url: 'https://webflow.com',
    urlLabel: 'Visit webflow.com',
    body: [
      'Webflow made the list because it is the only pick here that gives you genuine design control without writing the front end yourself. You work with real layout concepts — box model, flex, grid, breakpoints — and it produces a fast, clean site with proper hosting behind it.',
      'Its CMS is the underrated half. Structured collections mean a blog, a case-study library or a product catalogue stay consistent as they grow, instead of becoming forty hand-built pages.',
      'Best for a business whose site is a real asset, and for anyone with a designer — in-house or hired — who needs to ship exactly what was designed. You can build for free and pay when you launch on your own domain.',
    ],
    skip: 'nobody on your side wants to learn a design tool, or you need email and checkout in the same subscription. Webflow expects a builder; if there is not one, the project stalls at 80 per cent.',
  },

  /* ------------------------------------------------ Project management */
  notion: {
    url: 'https://www.notion.com',
    urlLabel: 'Visit notion.com',
    body: [
      'Notion is on this list because it removes the wall between the document and the tracker. A project brief, the task list it produced and the notes from the call about it can be the same object, which is where most tool-switching friction actually comes from.',
      'It is also the most adaptable pick here, and that is the whole risk. Notion gives you databases and views and no opinion about how to run a project, so it works brilliantly when one person owns the structure and drifts into a junk drawer when nobody does.',
      'Best for small teams, agencies and solo operators who want their docs and their work in one place and are willing to design the system once. The free plan is enough to find out whether you are that kind of team.',
    ],
    skip: 'you want the tool to impose a process, or you need heavy dependency, workload and resourcing management. Notion will happily let you build something unmaintainable.',
  },
  clickup: {
    url: 'https://clickup.com',
    urlLabel: 'Visit clickup.com',
    body: [
      'ClickUp made the list on sheer coverage. Tasks, docs, goals, time tracking, whiteboards and a stack of views come in one product, including on a free plan that is unusually complete for the category.',
      'If you have a specific requirement — a particular view, a custom field, an automation, a report — ClickUp usually has it. That is a genuine advantage when you are replacing three tools and cannot afford a gap.',
      'Best for teams who want maximum capability per seat and have someone willing to own the configuration. Treat that person as part of the cost, because the default state of ClickUp is busy.',
    ],
    skip: 'nobody has time to set it up and turn things off. Left at defaults it is noisy, and the most common outcome is a team using ten per cent of it while paying attention to all of it.',
  },
  asana: {
    url: 'https://asana.com',
    urlLabel: 'Visit asana.com',
    body: [
      'Asana is the pick for teams who would rather inherit a process than design one. Projects, tasks, subtasks, assignees and due dates work the obvious way on day one, and a new person can be productive in it without a training session.',
      'That opinionated structure is the feature. It means less configuration, fewer arguments about how to use the tool, and a shape that holds up as the team grows — which is exactly where more flexible tools tend to sag.',
      'Best for teams of five and up who want clear ownership and visible deadlines without a build phase. There is a free tier for small teams, with timeline and reporting views arriving on paid plans.',
    ],
    skip: 'you want a docs-and-database workspace you can reshape, or your work does not fit tasks-with-dates. Asana is confident about how projects should look, and bending it is more work than leaving it.',
  },

  /* ------------------------------------------------------------- SEO */
  semrush: {
    url: 'https://www.semrush.com',
    urlLabel: 'Visit semrush.com',
    body: [
      'Semrush is on this list because it is the closest thing to a single marketing-visibility toolkit: keyword research, competitor comparison, site audits, rank tracking, local listings and paid-search data in one subscription.',
      'For a small team with one person doing all of SEO, that breadth beats a better single-purpose tool. You can answer “what should we write”, “why did that page drop” and “what are they bidding on” without three logins and three invoices.',
      'Best for in-house marketers and agencies who need to cover several jobs and report on them. The free account is real but narrow — enough to look something up, not enough to work in.',
    ],
    skip: 'you only need one of these jobs done. Buying the whole toolkit for backlink data or rank tracking alone is the most expensive way to get either.',
  },
  ahrefs: {
    url: 'https://ahrefs.com',
    urlLabel: 'Visit ahrefs.com',
    body: [
      'Ahrefs earns its slot on link data. Its index of backlinks and referring domains is the strongest of the tools here, and if your work involves digital PR, link building or working out why a competitor outranks you on authority rather than content, that is the number you live in.',
      'The interface is unusually direct for the category: paste a domain, get the picture. Less time spent assembling a report is a real feature when the report is weekly.',
      'Best for SEO specialists, agencies and anyone whose growth plan is link-led. If you own the site you are studying, their free Webmaster Tools tier gives you audit and backlink data for that site without a subscription.',
    ],
    skip: 'your work is content-led and you need a free or cheap way in. There is no general free tier for researching sites you do not own, and usage limits are worth understanding before you buy.',
  },
  'moz-pro': {
    url: 'https://moz.com',
    urlLabel: 'Visit moz.com',
    body: [
      'Moz Pro is on this list because it is the gentlest entry point to SEO tooling that still does real work. Rank tracking, site crawls and keyword research are laid out for someone who is learning the discipline, not someone who already thinks in link graphs.',
      'It comes with the clearest teaching material in the category, which matters more than it sounds: most small businesses do not need a better tool, they need to understand the one they have.',
      'Best for a small business owner or generalist marketer taking SEO seriously for the first time, and for consistent rank tracking without a heavyweight subscription.',
      'One label to read correctly: Domain Authority is Moz’s own score, useful for comparing sites against each other and not a metric Google publishes or uses.',
    ],
    skip: 'you need the deepest link index or the widest toolkit. On raw data breadth, Ahrefs and Semrush are ahead, and specialists will hit the edges of Moz Pro sooner.',
  },
};
