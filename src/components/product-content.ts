/**
 * Per-product facts and copy for the product pages and listing rows, keyed by
 * the `slug` in `data.ts`. The editorial reasoning stays in `picks-detail.ts`;
 * this file holds the structured, scannable parts a directory listing needs.
 *
 * Rules, same as the rest of the site:
 *  - Qualitative only. No prices, seat counts, contact limits or percentages.
 *  - Nothing a vendor's own public site would not confirm. If unsure, say less.
 *  - `bestFor` and `skipIf` are short chips: three to five words each.
 *  - FAQ answers are two to four sentences, in the site's plain voice, and may
 *    link nowhere — they are also emitted as FAQPage schema.
 */

export type PricingModel = 'free' | 'trial' | 'paid';

export type Segment = 'solo' | 'small-team' | 'agency';

export const segmentLabel: Record<Segment, string> = {
  solo: 'Solo operator',
  'small-team': 'Small team',
  agency: 'Agency or consultant',
};

export const pricingLabel: Record<PricingModel, string> = {
  free: 'Free plan',
  trial: 'Free trial',
  paid: 'Paid only',
};

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductContent {
  /** The company that makes it, as they name themselves. */
  vendor: string;
  /** How you can start: a lasting free plan, a trial, or paid from day one. */
  pricing: PricingModel;
  /** Who it fits. Drives the segment filter on category pages. */
  segments: Segment[];
  /** One sentence for the listing row and the meta description. */
  tagline: string;
  /** Three to four short chips. */
  bestFor: string[];
  /** Two to three short chips — the honest limits. */
  skipIf: string[];
  /** How the vendor structures what you pay for, in one or two plain sentences. */
  pricingShape: string;
  /** What you get without paying, in one sentence — or what the trial covers. */
  freeTier: string;
  /** Four to six questions a buyer actually types into Google about this tool. */
  faqs: ProductFaq[];
}

export const productContent: Record<string, ProductContent> = {
  /* ---------------------------------------------------------------- CRM */
  'hubspot-crm': {
    vendor: 'HubSpot',
    pricing: 'free',
    segments: ['solo', 'small-team'],
    tagline:
      'The broadest free CRM for a small business, and the one that grows into marketing and support without a migration.',
    bestFor: ['Starting at zero cost', 'One customer record', 'Growing into marketing'],
    skipIf: ['You only want a pipeline', 'Budget-sensitive upgrades'],
    pricingShape:
      'Tiered hubs (sales, marketing, service) sold as Starter, Professional and Enterprise, with seats on top, and marketing plans that also scale with contact count.',
    freeTier:
      'A genuinely usable free CRM: contacts, companies, deals, a pipeline, email tracking and forms, with no card required.',
    faqs: [
      {
        q: 'Is HubSpot CRM really free?',
        a: 'Yes. The core CRM — contacts, companies, deals, a pipeline, forms and email tracking — is free with no card and no time limit. What you pay for are the Starter, Professional and Enterprise tiers of the sales, marketing and service hubs, which add automation, reporting and sequences on top.',
      },
      {
        q: 'Is HubSpot good for a small business?',
        a: 'For a one-to-ten-person business it is one of the best places to start, because you can run a real sales process on the free tier and add marketing or support later against the same contact record. The caveat is that the features which make HubSpot pleasant tend to sit one tier above the one you are on.',
      },
      {
        q: 'HubSpot or Pipedrive?',
        a: 'Pipedrive if selling is the job and you want reps working a pipeline from day one. HubSpot if you need to start free or can already picture email campaigns and support conversations attached to the same customer record. We compare them directly on the HubSpot vs Pipedrive page.',
      },
      {
        q: 'What does HubSpot cost as you grow?',
        a: 'The bill has more than one axis: hub tier, number of paid seats, and for marketing plans the size of your contact list. Upgrading for a single feature is the usual surprise, because features are bundled into tiers rather than sold individually.',
      },
      {
        q: 'Is it hard to leave HubSpot later?',
        a: 'Contacts, companies and deals export cleanly. It gets harder the more of your marketing lives inside it — forms, landing pages, email campaigns and support content — so decide early how much of the platform you intend to use.',
      },
    ],
  },
  pipedrive: {
    vendor: 'Pipedrive',
    pricing: 'trial',
    segments: ['solo', 'small-team'],
    tagline:
      'A pipeline-first CRM that opens on your deals and keeps asking one question: what is the next action, and when.',
    bestFor: ['Outbound and follow-up sales', 'Reps who own a number', 'Visual deal stages'],
    skipIf: ['You need marketing email', 'You want a free tier', 'You need a help desk'],
    pricingShape:
      'Paid per seat on tiered plans, from a basic pipeline up to tiers that add automation, reporting and forecasting, with a handful of optional add-ons for things like lead capture and campaigns.',
    freeTier:
      'No lasting free plan; a time-limited trial of the paid product, with no card needed to start it.',
    faqs: [
      {
        q: 'Is Pipedrive good for a small team?',
        a: 'Yes, and arguably it is at its best there. A team of two to twenty where someone is responsible for a number gets a tool that reps actually update, because updating it is how they see their own work. Larger teams with formal reporting needs will lean on the higher tiers.',
      },
      {
        q: 'Does Pipedrive have a free plan?',
        a: 'No. There is a free trial long enough to build a pipeline and run real deals through it, but after that it is a paid product per seat. If a permanent free tier matters, HubSpot is the pick on our CRM shortlist that has one.',
      },
      {
        q: 'Pipedrive or HubSpot?',
        a: 'Pipedrive if the job is selling and you want the pipeline to be the whole interface. HubSpot if you need to start free, or you can already see email campaigns and support tickets sitting against the same contact. We compare them directly on the HubSpot vs Pipedrive page.',
      },
      {
        q: 'Can Pipedrive send marketing emails?',
        a: 'Not as a core feature. It handles one-to-one sales email well, with tracking and templates, but campaigns are an optional add-on rather than part of the CRM, and it has no help desk. Plan on the rest of the customer lifecycle living in other tools.',
      },
      {
        q: 'Is Pipedrive easy to set up?',
        a: 'Easier than most. You define stages, import contacts and start moving deals, and a new rep can be working in it the same afternoon. The effort is in agreeing what each stage means, which is a team conversation rather than a software one.',
      },
    ],
  },
  close: {
    vendor: 'Close',
    pricing: 'trial',
    segments: ['small-team'],
    tagline:
      'A CRM with calling, SMS and email sequences built in, made for small teams that sell by picking up the phone.',
    bestFor: ['Inside sales teams', 'Daily outbound calling', 'Fewer tools in the loop'],
    skipIf: ['Inbound or self-serve sales', 'Selling over email and chat'],
    pricingShape:
      'Paid per seat on tiered plans, with the built-in phone system included rather than sold separately; calling usage itself is metered on top.',
    freeTier:
      'No free plan; a time-limited trial of the full product so you can test the dialer against your own list.',
    faqs: [
      {
        q: 'What is Close CRM best for?',
        a: 'Teams that sell on the phone. Calling, SMS and email sequences live inside the CRM, so the call happens where the record is and the logging is not a separate habit. For outbound volume that removes the gap between doing the work and recording it, which is where most CRM rollouts fail.',
      },
      {
        q: 'Does Close have a free plan?',
        a: 'No. There is a trial, and after that it is a premium per-seat product. That is the trade for having the phone system inside the CRM rather than bolted on through an integration.',
      },
      {
        q: 'Is Close good for a solo operator?',
        a: 'Usually not. It is priced and shaped for a team doing daily outbound, and a single person selling by email or through a website will pay for a dialer that rarely rings. Pipedrive or HubSpot on the same shortlist are the more natural fit.',
      },
      {
        q: 'Close or Pipedrive?',
        a: 'Close if your reps dial every day and you want calling, texting and sequences in one place. Pipedrive if the work is pipeline and follow-up driven but the phone is not the main channel, or if you want a lighter bill per seat. Both are sales-only tools rather than marketing platforms.',
      },
      {
        q: 'Does Close include a phone system?',
        a: 'Yes, that is the point of it. Calling, call recording, a power dialer and SMS are part of the product rather than a separate telephony subscription, though usage is still metered. Check that your country and numbers are supported before committing.',
      },
    ],
  },
  'monday-crm': {
    vendor: 'monday.com',
    pricing: 'trial',
    segments: ['small-team'],
    tagline:
      'Sales boards for teams already running on monday.com, so the pipeline lives in the tool everyone already opens each morning.',
    bestFor: ['Existing monday.com teams', 'Sales next to delivery', 'One login for work'],
    skipIf: ['Not already on monday.com', 'Judged purely as a CRM'],
    pricingShape:
      'Paid per seat on tiered plans, alongside monday.com’s other products, with the higher tiers unlocking more automations, integrations and reporting.',
    freeTier:
      'No lasting free plan for the CRM; a time-limited trial lets you build boards and test the pipeline before paying.',
    faqs: [
      {
        q: 'Is monday CRM a real CRM?',
        a: 'Yes, but it is a CRM built from monday.com’s board model rather than from a sales tool up. Contacts, deals, activities and automations are all there, and the views and permissions work exactly as they do elsewhere in monday.com. That is its strength for existing customers and its weakness for everyone else.',
      },
      {
        q: 'Should I use monday CRM if I am not on monday.com?',
        a: 'Probably not. Judged purely as a CRM against Pipedrive or HubSpot it is the less purposeful tool, and adopting a whole work platform to get a pipeline is a much bigger decision than picking a CRM. It earns its place on our list for teams who are already there.',
      },
      {
        q: 'Does monday CRM have a free plan?',
        a: 'Not a lasting one. There is a trial, and then it is paid per seat like the rest of monday.com. If you need a free CRM to start with, HubSpot is the pick on our shortlist that offers one.',
      },
      {
        q: 'monday CRM or HubSpot?',
        a: 'monday CRM if your team already runs projects on monday.com and you want sales tracked next to delivery with one login. HubSpot if you are choosing a CRM on its own merits, want to start free, or expect to add marketing and support later.',
      },
      {
        q: 'What does monday CRM do well?',
        a: 'Keeping sales in the same place as everything else. One board can hold the deal, the handover to delivery and the follow-up tasks, with the same automations your team has already learned. It is the shared surface that is the feature, not any single CRM capability.',
      },
    ],
  },

  /* -------------------------------------------------------------- Email */
  getresponse: {
    vendor: 'GetResponse',
    pricing: 'free',
    segments: ['solo', 'small-team'],
    tagline:
      'Email sending, landing pages and the automation between them in one account, for a solo operator who wants one bill.',
    bestFor: ['Lead capture end to end', 'One tool, one bill', 'Solo marketers'],
    skipIf: ['You already have a page builder', 'You only need sending'],
    pricingShape:
      'Tiered plans that scale with the size of your contact list, with the higher tiers adding automation depth, funnels, webinars and ecommerce features.',
    freeTier:
      'A lasting free plan that lets you build a list, design a landing page and send newsletters to a small audience without a card.',
    faqs: [
      {
        q: 'Is GetResponse free?',
        a: 'There is a genuine free plan, not just a trial. It covers a small list, a landing page and newsletter sending, which is enough to build and send from while you work out whether the business needs the rest. Automation and funnels arrive on the paid tiers.',
      },
      {
        q: 'Is GetResponse good for beginners?',
        a: 'Yes. The automation builder is capable without demanding a week of study, and the landing page and form tools mean you can run lead capture and follow-up end to end without stitching together other products. It is one of the gentler ways into marketing automation.',
      },
      {
        q: 'GetResponse or AWeber?',
        a: 'GetResponse if you want pages, funnels and automation bundled with the sending. AWeber if your email plan is to write to people regularly and you value simplicity and human support over a feature list. We compare them directly on the GetResponse vs AWeber page.',
      },
      {
        q: 'Can GetResponse build landing pages and funnels?',
        a: 'Yes, and that is half of what you are buying. Landing pages, forms and conversion funnels sit in the same account as the email list, so a funnel breaks in one place rather than three. If you already pay for a page builder you like, that half is wasted on you.',
      },
      {
        q: 'GetResponse or ActiveCampaign?',
        a: 'ActiveCampaign if your follow-up logic is genuinely complex and someone in-house wants to own it. GetResponse if you want adequate automation plus pages and funnels, and would rather not climb the steeper learning curve. Both are long-established senders.',
      },
    ],
  },
  aweber: {
    vendor: 'AWeber',
    pricing: 'free',
    segments: ['solo', 'small-team'],
    tagline:
      'Deliberately simple list tooling from one of the longest-running email senders, with a free plan and support that answers the phone.',
    bestFor: ['Newsletters and small lists', 'Non-technical senders', 'Reachable human support'],
    skipIf: ['Branching automations', 'Deep segmentation', 'Behavioural triggers'],
    pricingShape:
      'A free plan and paid tiers that scale with subscriber count, with the paid tiers removing branding and unlocking more automation, segmentation and analytics.',
    freeTier:
      'A lasting free plan for a small list that includes sending, sign-up forms, a landing page and basic sequences.',
    faqs: [
      {
        q: 'Does AWeber have a free plan?',
        a: 'Yes. The free plan covers a small list with sending, forms, a landing page and basic sequences, and it does not expire. You move to a paid tier when the list grows or you want the branding removed and the fuller automation and reporting.',
      },
      {
        q: 'Is AWeber good for a newsletter?',
        a: 'It is one of the best fits on our shortlist for exactly that. The path from importing contacts to sending a broadcast is short enough not to need a tutorial, and if your plan is “write to people regularly” rather than “build a machine”, you will not miss what it lacks.',
      },
      {
        q: 'AWeber or GetResponse?',
        a: 'AWeber if you want simple sending, a free plan and a human on the phone when something goes wrong. GetResponse if you also want landing pages, funnels and deeper automation in the same account. We compare them directly on the GetResponse vs AWeber page.',
      },
      {
        q: 'Can AWeber do automation?',
        a: 'Basic sequences, yes: a welcome series or a drip campaign is straightforward. Branching automations, behavioural triggers and deep segmentation are where you feel the ceiling, and ActiveCampaign on the same shortlist is the pick for that kind of work.',
      },
      {
        q: 'Is AWeber still a good choice?',
        a: 'For the right buyer, yes. It has been sending email for a very long time, deliverability is handled by a real compliance team, and its support is treated as a product feature rather than a cost centre. It is unambitious on purpose, which suits a lot of small businesses.',
      },
    ],
  },
  activecampaign: {
    vendor: 'ActiveCampaign',
    pricing: 'trial',
    segments: ['small-team', 'agency'],
    tagline:
      'The deepest automation builder on the shortlist, for a business whose email really is a system rather than a weekly newsletter.',
    bestFor: ['Complex automation logic', 'Behaviour-triggered follow-up', 'Email and CRM together'],
    skipIf: ['One newsletter a week', 'Nobody to own the builder'],
    pricingShape:
      'Tiered plans priced by the number of contacts on your list, with marketing and sales bundles sold separately or together and the higher tiers adding predictive and multi-user features.',
    freeTier:
      'No free plan; a time-limited trial of the platform with no card required, enough to build and test a real automation.',
    faqs: [
      {
        q: 'Is ActiveCampaign worth it for a small business?',
        a: 'Only if your email is a system. Different sequences by segment, behaviour-triggered follow-up and lead scoring are where the builder earns its price. If you send one newsletter a week, the part that justifies the cost is the part you would never open.',
      },
      {
        q: 'Does ActiveCampaign have a free plan?',
        a: 'No. There is a trial that does not need a card, and after that pricing scales with the size of your contact list. That structure rewards a list that converts over a list that is merely large, so prune before you import.',
      },
      {
        q: 'Is ActiveCampaign hard to learn?',
        a: 'It has the steepest learning curve of the three email tools we list. The automation builder is powerful precisely because it exposes branches, waits, goals and scoring, and someone in-house needs to want to own that. Expect a build phase before it pays back.',
      },
      {
        q: 'Does ActiveCampaign include a CRM?',
        a: 'Yes, a real one. Deals, pipelines and sales follow-up sit against the same contact as the marketing email, rather than being synced between two products. For a small team it can be the sales tool as well, though dedicated CRMs go further on pipeline management.',
      },
      {
        q: 'ActiveCampaign or GetResponse?',
        a: 'ActiveCampaign for automation depth and a built-in CRM. GetResponse for a free plan, landing pages and funnels bundled with adequate automation, and a gentler way in. Both are established senders; the choice is about how complex your follow-up logic will really get.',
      },
    ],
  },

  /* -------------------------------------------------------- Site builders */
  'systeme-io': {
    vendor: 'systeme.io',
    pricing: 'free',
    segments: ['solo'],
    tagline:
      'Funnels, email, checkout and course hosting in one account, so a solo operator can launch an offer without a team.',
    bestFor: ['Course creators and coaches', 'Sites that are funnels', 'Launching on a free plan'],
    skipIf: ['The site is the brand', 'A designer is involved'],
    pricingShape:
      'A free plan and tiered paid plans that raise the limits on contacts, funnels, courses and automation rules, with every plan covering the whole bundle rather than selling features separately.',
    freeTier:
      'A lasting free plan generous enough to build a funnel, send email and take a payment, not a demo.',
    faqs: [
      {
        q: 'Is Systeme.io really free?',
        a: 'Yes, and the free plan is the most generous of anything on this site. You can build a funnel, collect emails, host a course and take money on it without paying. The paid tiers raise the limits rather than unlocking the product.',
      },
      {
        q: 'What is Systeme.io best for?',
        a: 'A solo operator whose website is really a funnel: course creators, coaches and people selling one offer. Landing page, email follow-up, checkout and membership area all sit in one login and one bill, which is hard to beat on effort for a business of one.',
      },
      {
        q: 'Systeme.io or Webflow?',
        a: 'They barely compete. Systeme.io is a business in a box for a solo seller; Webflow is a design tool for people who want real control over the page. If you need email and checkout in the subscription, Systeme.io; if the site is the brand, Webflow. We compare them directly on the Systeme.io vs Webflow page.',
      },
      {
        q: 'Can I build a proper website on Systeme.io?',
        a: 'You can build pages and a simple site, but design control is limited and the templates read as templates. It is the right tool when the page has a job to do and the wrong one when the page has to feel bespoke.',
      },
      {
        q: 'Does Systeme.io replace my email marketing tool?',
        a: 'For a solo operator, usually yes. Broadcasts, sequences and basic automation are built in and connected to the funnels, which is the point. If you need the automation depth of a dedicated platform, you will feel the limits sooner.',
      },
    ],
  },
  webflow: {
    vendor: 'Webflow',
    pricing: 'free',
    segments: ['small-team', 'agency'],
    tagline:
      'Designer-grade control over layout and CMS structure, with fast hosting behind it, for a site that is a real business asset.',
    bestFor: ['Sites where design matters', 'Working with a designer', 'Structured CMS content'],
    skipIf: ['Nobody wants to learn it', 'You need email and checkout'],
    pricingShape:
      'Site plans paid per site, tiered by whether you need a CMS, ecommerce or higher traffic, plus separate workspace plans for the people building; you can design for free and pay when you publish to your own domain.',
    freeTier:
      'Free to build and preview on a Webflow subdomain; a paid site plan is needed to launch on your own domain.',
    faqs: [
      {
        q: 'Is Webflow free to use?',
        a: 'Free to build, paid to launch. You can design a whole site and preview it on a Webflow subdomain without paying, and the site plan starts when you connect your own domain. Workspace plans for teams of builders are a separate line.',
      },
      {
        q: 'Is Webflow hard to learn?',
        a: 'It expects a builder. You work with real layout concepts — box model, flex, grid, breakpoints — which is exactly why it produces clean sites and exactly why a non-designer can stall partway through. If nobody on your side wants to learn a design tool, pick something else.',
      },
      {
        q: 'Is Webflow good for a small business?',
        a: 'Good for a small business whose site is a real asset and who has a designer, in-house or hired, to ship what was designed. Less good for a business that just needs a page up by Friday and would rather not think about it again.',
      },
      {
        q: 'Webflow or Systeme.io?',
        a: 'Webflow if the site is the brand and you want control over every element. Systeme.io if the site is a funnel and you want email, checkout and courses in the same subscription. We compare them directly on the Systeme.io vs Webflow page.',
      },
      {
        q: 'Does Webflow have a CMS?',
        a: 'Yes, and it is the underrated half. Structured collections mean a blog, case-study library or product catalogue stays consistent as it grows instead of becoming a pile of hand-built pages. CMS features come with the relevant site plan.',
      },
    ],
  },

  /* ------------------------------------------------ Project management */
  notion: {
    vendor: 'Notion',
    pricing: 'free',
    segments: ['solo', 'small-team', 'agency'],
    tagline:
      'Docs and databases in the same place, with no opinion about how you work, for teams willing to design the system once.',
    bestFor: ['Docs and work together', 'One person owns the setup', 'Shaping your own system'],
    skipIf: ['You want an imposed process', 'Heavy resourcing needs'],
    pricingShape:
      'A free plan and tiered paid plans priced per member, with the higher tiers adding admin controls, larger guest allowances and more history, and AI features sold as an add-on or bundled depending on plan.',
    freeTier:
      'A lasting free plan that is fully usable for an individual and enough for a small team to find out whether Notion suits them.',
    faqs: [
      {
        q: 'Is Notion free for small teams?',
        a: 'There is a lasting free plan that individuals can use indefinitely, and it is enough for a small team to try the shared workspace properly. The paid plans, priced per member, add more room for collaborators, longer version history and admin controls.',
      },
      {
        q: 'Is Notion good for project management?',
        a: 'Good if one person owns the structure. Databases, views, relations and templates let you build a tracker that sits beside the brief and the meeting notes, which removes most tool switching. Without an owner it drifts into a junk drawer, and it has no built-in dependency or workload management.',
      },
      {
        q: 'Notion or ClickUp for a small team?',
        a: 'Notion if your work is documents first and you want the tracker to live inside them. ClickUp if you need a proper task manager with views, automations and time tracking, and have someone willing to configure it. Both need an owner; ClickUp needs one to prune, Notion needs one to build.',
      },
      {
        q: 'Notion or Asana?',
        a: 'Asana decides how projects should look and is productive on day one. Notion gives you the parts and lets you decide, which is better for a docs-heavy team and worse for one that wants a process handed to it. If your work does not fit tasks with dates, Notion.',
      },
      {
        q: 'Can Notion replace Google Docs?',
        a: 'For internal documentation, yes, and it often does. Pages, wikis and meeting notes are the core of it. It is weaker for heavily formatted external documents and for real-time editing at scale, so many teams keep a document tool alongside it.',
      },
    ],
  },
  clickup: {
    vendor: 'ClickUp',
    pricing: 'free',
    segments: ['small-team', 'agency'],
    tagline:
      'The most features per seat of any tool on the shortlist, provided someone on the team is willing to own the configuration.',
    bestFor: ['Replacing several tools', 'Maximum capability per seat', 'Teams with a configurer'],
    skipIf: ['Nobody has time to set it up', 'You want quiet defaults'],
    pricingShape:
      'A free plan and tiered paid plans priced per user, each unlocking more views, automations, storage and reporting, with AI sold as an add-on.',
    freeTier:
      'A lasting free plan that is unusually complete for the category, covering tasks, docs, several views and basic automation.',
    faqs: [
      {
        q: 'Is ClickUp free?',
        a: 'Yes, there is a free plan and it is more complete than most in the category: tasks, docs, whiteboards, multiple views and some automation. Paid plans, priced per user, raise the limits and add more views, reporting and integrations.',
      },
      {
        q: 'Is ClickUp good for small teams?',
        a: 'It can be excellent, on one condition: someone owns the setup. Left at defaults it is noisy, and the common failure is a team using a fraction of it while paying attention to all of it. Treat the person who configures and prunes it as part of the cost.',
      },
      {
        q: 'ClickUp or Asana?',
        a: 'ClickUp if you have a specific requirement — a view, a custom field, an automation, a report — and cannot afford a gap. Asana if you would rather inherit a sensible process and skip the build phase. Asana is calmer out of the box; ClickUp goes further once tuned.',
      },
      {
        q: 'ClickUp or Notion for a small team?',
        a: 'ClickUp if the job is tasks and you want proper project tooling with time tracking and automations. Notion if the job is documents and the tasks live inside them. Both reward an owner; the difference is whether that owner is turning things off or building things up.',
      },
      {
        q: 'Is ClickUp overwhelming?',
        a: 'Out of the box, yes, and the vendor’s own answer is to turn features off per space. That is a real fix, but it is work someone has to do and keep doing. If nobody on the team enjoys that kind of tinkering, an opinionated tool will serve you better.',
      },
    ],
  },
  asana: {
    vendor: 'Asana',
    pricing: 'free',
    segments: ['small-team'],
    tagline:
      'Opinionated project and task structure that works the obvious way on day one, for teams who would rather inherit a process.',
    bestFor: ['Clear ownership and deadlines', 'No build phase', 'Growing teams'],
    skipIf: ['You want a reshapeable workspace', 'Work that is not tasks with dates'],
    pricingShape:
      'A free plan for small teams and tiered paid plans priced per user, with timeline, reporting, workload and advanced automation arriving as you move up the tiers.',
    freeTier:
      'A lasting free plan for a small team covering projects, tasks, list, board and calendar views.',
    faqs: [
      {
        q: 'Is Asana free for small teams?',
        a: 'Yes, there is a lasting free plan for small teams with projects, tasks and the core list, board and calendar views. Timeline, reporting and workload views are where the paid tiers, priced per user, start to matter.',
      },
      {
        q: 'Is Asana good for a small business?',
        a: 'Very good for a team of five and up that wants clear ownership and visible deadlines without designing a system. A new person can be productive without a training session, and the structure holds up as the team grows, which is where more flexible tools tend to sag.',
      },
      {
        q: 'Asana or ClickUp?',
        a: 'Asana if you want a process handed to you and calm defaults. ClickUp if you need maximum features per seat and have someone willing to configure and prune it. Asana is easier to adopt; ClickUp is harder to outgrow.',
      },
      {
        q: 'Asana or Notion?',
        a: 'Asana for work that is tasks with owners and dates, run by a team that wants the tool to decide the structure. Notion for docs-heavy work where the tracker should sit beside the writing and you are happy to design the system yourself.',
      },
      {
        q: 'What are Asana’s limits?',
        a: 'It is confident about how projects should look, and bending it is more work than leaving it. If your work does not fit tasks with dates, or you want a docs-and-database workspace you can reshape, you will fight it. The most useful views also sit on paid tiers.',
      },
    ],
  },

  /* ------------------------------------------------------------- SEO */
  semrush: {
    vendor: 'Semrush',
    pricing: 'free',
    segments: ['small-team', 'agency'],
    tagline:
      'The widest SEO and marketing toolkit in one subscription: keywords, competitors, site audits, rank tracking and paid-search data.',
    bestFor: ['One person doing all SEO', 'Agency reporting', 'Competitor research'],
    skipIf: ['You only need one job done', 'Backlinks or ranks alone'],
    pricingShape:
      'Tiered subscriptions sold as Pro, Guru and Business that raise project, keyword and report limits as you move up, with additional users and specialist toolkits such as local or content sold as add-ons.',
    freeTier:
      'A lasting free account that lets you run a limited number of lookups and one small project, enough to look something up but not to work in.',
    faqs: [
      {
        q: 'Is Semrush free?',
        a: 'There is a free account, and it is real but narrow: a handful of lookups a day and one small project. It is enough to check a keyword or a competitor, not to run an SEO programme. The paid tiers are where the toolkit actually opens up.',
      },
      {
        q: 'Is Semrush worth it for a small business?',
        a: 'Worth it when one person has to cover several jobs — keyword research, site audits, rank tracking, competitor and paid-search analysis — and report on them. If you only need one of those, buying the whole toolkit is the most expensive way to get it.',
      },
      {
        q: 'Semrush or Ahrefs?',
        a: 'Semrush for breadth: more jobs covered in one subscription, including paid search and local listings. Ahrefs for link data, where its index is the strongest of the tools we list, and for a more direct interface. Many agencies end up with both; a small business should pick the one that matches its main job.',
      },
      {
        q: 'Semrush or Moz Pro?',
        a: 'Moz Pro is the gentler way in, with clearer teaching material and good rank tracking, and it is the better first tool for someone learning SEO. Semrush goes much wider and deeper once you know what you are looking for, and it is the one an agency will grow into.',
      },
      {
        q: 'What does Semrush actually include?',
        a: 'Keyword research, competitor comparison, site audits, rank tracking, backlink analysis, local listing management and paid-search data, plus content and social tools depending on tier and add-ons. The point is answering “what should we write”, “why did that page drop” and “what are they bidding on” without three logins.',
      },
    ],
  },
  ahrefs: {
    vendor: 'Ahrefs',
    pricing: 'paid',
    segments: ['agency', 'small-team'],
    tagline:
      'The strongest backlink and referring-domain data on the shortlist, in an interface that gets you to the answer quickly.',
    bestFor: ['Link-led growth plans', 'Digital PR and outreach', 'SEO specialists and agencies'],
    skipIf: ['Content-led on a budget', 'You need a free way in'],
    pricingShape:
      'Tiered subscriptions from Lite upwards, with usage-based limits on how much data you can pull and extra users, projects and credits sold on top; the free Webmaster Tools tier covers only sites you own.',
    freeTier:
      'No general free plan; free Webmaster Tools give audit and backlink data for sites you can verify as your own.',
    faqs: [
      {
        q: 'Does Ahrefs have a free plan?',
        a: 'Not for researching sites you do not own. Ahrefs Webmaster Tools is free and gives you site audits and backlink data for domains you can verify, which is genuinely useful for your own site. Competitor research needs a paid subscription.',
      },
      {
        q: 'Is Ahrefs worth it for a small business?',
        a: 'Worth it if your growth plan is link-led: digital PR, outreach, or working out why a competitor outranks you on authority rather than content. If your work is content-led and budget matters, it is a lot of subscription for the part you would use.',
      },
      {
        q: 'Ahrefs or Semrush?',
        a: 'Ahrefs for link data and a direct interface where you paste a domain and get the picture. Semrush for breadth across keywords, audits, ads and local listings in one bill. Decide which job you are actually paying for and pick the tool that is strongest at it.',
      },
      {
        q: 'What is Ahrefs best at?',
        a: 'Backlinks and referring domains. Its index is the strongest of the tools we list, and its keyword and content tools are good rather than merely present. Less time assembling a weekly report is a real feature when the report is weekly.',
      },
      {
        q: 'Are there usage limits on Ahrefs?',
        a: 'Yes, and they are worth understanding before you buy. Plans are tiered with limits on how much data you can pull, and heavy use can mean buying more capacity or a higher tier. Read the current pricing page rather than assuming a plan is unlimited.',
      },
    ],
  },
  'moz-pro': {
    vendor: 'Moz',
    pricing: 'trial',
    segments: ['solo', 'small-team'],
    tagline:
      'The gentlest entry point to real SEO tooling, with dependable rank tracking and the clearest teaching material in the category.',
    bestFor: ['First serious SEO tool', 'Learning the discipline', 'Consistent rank tracking'],
    skipIf: ['You need the deepest link index', 'You need the widest toolkit'],
    pricingShape:
      'Tiered subscriptions billed monthly or annually, with the tiers raising campaign, keyword and crawl limits and the number of users.',
    freeTier:
      'No lasting free plan; a time-limited trial of the full product, plus free limited tools on the Moz site for quick lookups.',
    faqs: [
      {
        q: 'Is Moz Pro good for beginners?',
        a: 'It is the pick on our list for exactly that. Rank tracking, site crawls and keyword research are laid out for someone learning SEO rather than someone who already thinks in link graphs, and the teaching material is the clearest in the category. Most small businesses need to understand their tool more than they need a better one.',
      },
      {
        q: 'Does Moz Pro have a free plan?',
        a: 'Not a lasting one. There is a trial of the full product, and Moz offers a few free limited tools on its site for quick lookups. After the trial it is a paid subscription, billed monthly or annually.',
      },
      {
        q: 'What is Domain Authority?',
        a: 'Moz’s own score for predicting how well a site is likely to rank, useful for comparing sites against each other. It is not a metric Google publishes or uses, so treat it as a comparison tool rather than a target.',
      },
      {
        q: 'Moz Pro or Semrush?',
        a: 'Moz Pro if you are taking SEO seriously for the first time and want a tool that teaches as you go. Semrush if you already know what you are looking for and need the widest toolkit, including paid search and local listings. Specialists hit the edges of Moz Pro sooner.',
      },
      {
        q: 'Moz Pro or Ahrefs?',
        a: 'Ahrefs if link data is the job; its backlink index is stronger. Moz Pro if you want a friendlier learning curve and solid rank tracking without a heavyweight subscription. On raw data breadth Ahrefs is ahead; on approachability Moz Pro is.',
      },
    ],
  },
};
