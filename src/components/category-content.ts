/**
 * The long-form buyer's guide on each category page — the part the big
 * directories put under the listings ("What is X software?", features, how
 * to choose, FAQs) and the part that ranks.
 *
 * Keyed by the category `id` in `data.ts`. Same rules as everywhere else:
 * qualitative, no invented figures, plain voice, and every recommendation
 * points at a pick that is actually on the shortlist.
 */

export interface CategoryFaq {
  q: string;
  a: string;
}

export interface CategoryFeature {
  name: string;
  /** Why it matters to a small business, one or two sentences. */
  why: string;
}

export interface CategoryContent {
  /** <title>. Under 60 characters; the year is added by the page. */
  seoTitle: string;
  /** Meta description. Under 160 characters. */
  seoDescription: string;
  /** The h1. "Best CRM software for small business" — plain, matches the query. */
  h1: string;
  /** One paragraph under the h1: who this page is for and what it does. */
  intro: string;
  /** "What is X software?" — two to three short paragraphs. */
  whatIs: string[];
  /** Five to seven features worth checking for, with why. */
  features: CategoryFeature[];
  /** How to choose: four to six numbered steps, one sentence each plus one of detail. */
  howToChoose: { step: string; detail: string }[];
  /** Six to eight questions buyers actually search for. Answers two to four sentences. */
  faqs: CategoryFaq[];
}

export const categoryContent: Record<string, CategoryContent> = {
  /* ---------------------------------------------------------------- CRM */
  crm: {
    seoTitle: 'Best CRM Software for Small Business',
    seoDescription:
      'Four CRMs shortlisted by our editors for small businesses, each with a reason to skip it. Readers rate every pick.',
    h1: 'Best CRM software for small business',
    intro:
      'This page is for a small-business owner or a two-person sales team choosing a CRM once and getting back to work. There are four picks, chosen by our editors rather than pulled from a database, and each one carries a reason to skip it. Readers rate every pick, so you can see how the shortlist holds up for people like you.',
    whatIs: [
      'A CRM, or customer relationship management tool, is the place where your leads and customers live. It holds each contact, what you have said to them, what they are worth as a deal and what is supposed to happen next. For a small business the point is not reporting. It is making sure nobody who asked for a quote gets forgotten because the note was in someone’s inbox.',
      'The tools come in roughly three shapes. Pipeline-first CRMs, like Pipedrive, open on stages and deals and are built around the next action. All-in-one platforms, like HubSpot CRM, put marketing, sales and support on one customer record and grow with you. Then there are CRMs with a specialism built in, such as Close, which folds calling and SMS into the record for teams who sell by phone.',
      'There is a fourth shape worth naming: the CRM that comes as part of a work platform you already use. monday CRM is the example on this list. It is rarely the best CRM judged on its own, but if your projects already run on monday.com, having sales tracked next to delivery in the same login is a real advantage.',
    ],
    features: [
      {
        name: 'A pipeline you will update',
        why: 'A CRM only works if the people using it keep it current. Look for a deal view that shows the next action first, because that is the part reps update without being asked.',
      },
      {
        name: 'Email logging without extra steps',
        why: 'If every email has to be copied in by hand, it will not be. Check whether the tool captures email against the contact automatically, or at least from a click inside your inbox.',
      },
      {
        name: 'Reminders and follow-up tasks',
        why: 'The failure mode of small-business sales is silence after the first reply. A task tied to a deal, with a date, is the cheapest fix there is.',
      },
      {
        name: 'Usable free tier or trial',
        why: 'You will not know if a CRM fits until real contacts are in it. A free plan or a proper trial lets you run a month of actual work before you commit.',
      },
      {
        name: 'Room for marketing and support',
        why: 'If you can imagine sending campaigns or answering support tickets from the same record next year, choose a tool that already has those modules, so you are not migrating twice.',
      },
      {
        name: 'Calling and texting built in',
        why: 'Only matters if you sell by phone, but then it matters a lot. A dialer inside the CRM means the call and the note happen in the same place.',
      },
      {
        name: 'Fits your existing tools',
        why: 'A CRM lives next to your inbox, calendar and whatever runs your projects. Check the integrations you need are native rather than promised.',
      },
    ],
    howToChoose: [
      {
        step: 'Decide whether you want a pipeline or a system of record.',
        detail:
          'If your day is deals and follow-ups, start with Pipedrive. If you want one customer record that marketing and support will share later, start with HubSpot CRM.',
      },
      {
        step: 'Be honest about how you sell.',
        detail:
          'Teams that live on the phone should look at Close, because the dialer sits inside the record. If your sales are inbound or handled over email, you do not need to pay for that.',
      },
      {
        step: 'Check what you already run on.',
        detail:
          'If projects already live on monday.com, monday CRM is worth a look for the shared login alone. If they do not, skip it and judge the other three on their merits.',
      },
      {
        step: 'Put real contacts in for a month.',
        detail:
          'Use the free plan or trial with live leads, not a demo dataset. The test is whether the pipeline is still accurate at the end of the month without anyone chasing.',
      },
      {
        step: 'Read the tier above the one you will start on.',
        detail:
          'The features that make a CRM pleasant often sit one plan up. Know what you will be paying for before the free tier runs out of road.',
      },
    ],
    faqs: [
      {
        q: 'Do I need a CRM if I use a spreadsheet?',
        a: 'Not until the spreadsheet starts losing you money. The moment two people are editing it, or a lead goes quiet because nobody owned the follow-up, you have outgrown it. A CRM adds reminders, email history and a clear next action, which is exactly what a spreadsheet cannot do.',
      },
      {
        q: 'Is free CRM software good enough for a small business?',
        a: 'Often, yes, for a while. HubSpot CRM’s free tier is the most usable we found, and you can run a real sales process on it before paying. The catch is that the jump to paid is a real step, so know what sits behind it before you build your process around a free plan.',
      },
      {
        q: 'What is the easiest CRM for a small business to learn?',
        a: 'Pipedrive is the quickest to make sense of if your work is a pipeline, because it opens on deals and asks what happens next. HubSpot CRM is broader and takes longer to settle into, but its basics are straightforward. Whichever you pick, the real learning curve is the habit of updating it, not the interface.',
      },
      {
        q: 'What is the difference between a CRM and email marketing software?',
        a: 'A CRM tracks individual relationships and deals: who said what, what stage they are at, what happens next. Email marketing software sends campaigns and automated sequences to lists. Some tools do both, HubSpot CRM among them, but if you only need one, buy one.',
      },
      {
        q: 'Should a solopreneur use a CRM?',
        a: 'If you sell anything that takes more than one conversation, yes. A CRM for one person is mostly a follow-up machine, so the free tier on HubSpot CRM or a light pipeline in Pipedrive covers it. Skip it if every sale is a single self-serve checkout with no follow-up.',
      },
      {
        q: 'How long does it take to set up a CRM?',
        a: 'For a small business, an afternoon to import contacts and define your pipeline stages, then a few weeks of using it before it feels natural. Keep the first version simple: a handful of stages and one owner per deal. Most CRM setups fail from too much structure, not too little.',
      },
      {
        q: 'Can I switch CRMs later without losing my data?',
        a: 'Contacts and deals move reasonably well, because every pick here can export them. What moves badly is the history: email threads, notes and activity rarely come across cleanly. That is why choosing for where you will be in two years matters more than picking the cheapest option today.',
      },
    ],
  },

  /* -------------------------------------------------------------- Email */
  email: {
    seoTitle: 'Best Email Marketing Software for Small Business',
    seoDescription:
      'Three email marketing platforms shortlisted by our editors for small businesses, with a reason to skip each. Readers rate every pick.',
    h1: 'Best email marketing software for small business',
    intro:
      'This page is for a small-business owner or solo marketer choosing the tool that sends the emails and follows up while they sleep. There are three picks, chosen by our editors rather than sorted from a database, and each carries an honest reason to skip it. Readers rate every pick, so you can see how each one holds up in real use.',
    whatIs: [
      'Email marketing software is the tool that sends a message to a list of people who asked to hear from you, and keeps you on the right side of the rules while doing it. It handles sign-up forms, list management, unsubscribes and the sending itself. Automation is the second half: sequences that go out on their own when someone joins, buys or clicks, which is what makes email work while you are doing something else.',
      'The tools come in three shapes. Simple senders, like AWeber, keep the path from a list to a broadcast short and are built for people who write to their readers regularly. Bundled platforms, like GetResponse, add landing pages, funnels and automation so one account runs the whole path from sign-up to sale. Automation-first platforms, like ActiveCampaign, are built around a branching builder for businesses whose follow-up is genuinely a system.',
      'Deliverability is where these tools get sold, and it is the least useful thing to compare. All three picks are long-established senders with real compliance teams. What you will actually feel day to day is the shape of the tool: how quickly you can get a broadcast out, whether the automation builder fits your head, and how much else you are paying for.',
    ],
    features: [
      {
        name: 'Sign-up forms and landing pages',
        why: 'A list has to come from somewhere. Check whether the tool builds the form or page itself, or expects you to have a website builder that does.',
      },
      {
        name: 'Automation that matches your plan',
        why: 'A welcome sequence needs a simple builder. Behaviour-triggered paths need a branching one. Buy the depth you will use, not the depth that demos well.',
      },
      {
        name: 'Segmentation and tags',
        why: 'Sending everything to everyone is how lists go stale. Tags or segments let you send the right message to the people who showed interest in it.',
      },
      {
        name: 'A sendable free plan',
        why: 'You cannot judge an email tool from screenshots. A free plan or trial you can genuinely send from lets you find out whether it fits before the list grows.',
      },
      {
        name: 'Reachable human support',
        why: 'It looks like a thin advantage until a send goes wrong on a Friday. Find out whether you can reach a person, and how.',
      },
      {
        name: 'Contact records for sales follow-up',
        why: 'If someone on your team follows up leads personally, a platform with contact records and deal stages saves syncing two products.',
      },
      {
        name: 'Reports you will actually read',
        why: 'Opens, clicks and unsubscribes are enough for a small business. Look for reporting you will check after each send, not dashboards you will never open.',
      },
    ],
    howToChoose: [
      {
        step: 'Write down what your email is actually for.',
        detail:
          'A weekly newsletter and a behaviour-triggered sales funnel are different products. Most small businesses are nearer the first than they think.',
      },
      {
        step: 'Match the tool to that job.',
        detail:
          'AWeber for a newsletter and a small list. GetResponse when you also need the pages and the funnel. ActiveCampaign when the follow-up logic is genuinely complicated and someone in-house will own it.',
      },
      {
        step: 'Check what you already pay for.',
        detail:
          'If you have a website or page builder you like, half of what GetResponse offers is duplicated. A pure sender will do the email part with less around it.',
      },
      {
        step: 'Send something real on the free plan or trial.',
        detail:
          'Import a small list, build one sequence, and note how long it took. The tool you can get a broadcast out of quickly is the one you will keep using.',
      },
      {
        step: 'Think about the list in two years.',
        detail:
          'Moving a list later is a chore, so consider whether the tool has a ceiling you will hit. ActiveCampaign has the most headroom of the three; AWeber has the least.',
      },
    ],
    faqs: [
      {
        q: 'Do I need email marketing software, or can I just use my normal email?',
        a: 'Once you are sending the same message to more than a handful of people, you need a proper tool. Ordinary email has no unsubscribe link, no consent record and no list management, and sending in bulk from it can get your domain flagged. Any of the three picks handles all of that on a free plan or trial.',
      },
      {
        q: 'Which email marketing tool is easiest for beginners?',
        a: 'AWeber is the shortest path from importing contacts to sending a broadcast, and it still has humans on support. GetResponse is nearly as straightforward and comes with more attached. ActiveCampaign has the steepest learning curve of the three, and that is the price of its automation depth.',
      },
      {
        q: 'Is free email marketing software good enough?',
        a: 'For a small list and a regular newsletter, yes. AWeber and GetResponse both have free plans you can genuinely send from. You will outgrow them by list size or by needing automation the free tier holds back, and by then you will know which paid plan is worth it.',
      },
      {
        q: 'What is email automation and do I need it?',
        a: 'Automation is a sequence that sends itself: a welcome series when someone joins, a follow-up when they click, a nudge when they stop short of buying. Nearly every business benefits from a simple welcome sequence, which all three picks can do. Branching, behaviour-driven automation is a different scale of commitment and mostly justifies ActiveCampaign.',
      },
      {
        q: 'What is the difference between email marketing and a CRM?',
        a: 'Email marketing sends to a list; a CRM tracks individual relationships and deals. ActiveCampaign has both sides in one product, which suits a business where a person follows up the leads the emails generate. If nobody follows up by hand, you do not need the CRM half.',
      },
      {
        q: 'How do I stop my emails landing in spam?',
        a: 'Mostly by sending to people who asked, keeping the list clean, and setting up domain authentication, which any established sender documents. Deliverability is not a feature you buy from one vendor over another; all three picks are established senders. What you do with the list matters more than which tool sends it.',
      },
      {
        q: 'Can I build landing pages with email marketing software?',
        a: 'With GetResponse, yes, and that is much of the point of it: pages, funnels and email sit in the same account. AWeber keeps to the simpler end of things by design. If you already have a site you like, use its pages and let the email tool just send.',
      },
    ],
  },

  /* -------------------------------------------------------- Site builders */
  sites: {
    seoTitle: 'Best Website Builders for Small Business',
    seoDescription:
      'Two website and funnel builders shortlisted by our editors for small businesses, with a reason to skip each. Readers rate both picks.',
    h1: 'Best website builders for small business',
    intro:
      'This page is for a small-business owner or solo operator deciding what to build the site, or the funnel, on. There are only two picks, chosen by our editors, because the two jobs they do barely overlap, and each one carries a reason to skip it. Readers rate both, so you can see how they hold up for people doing your kind of work.',
    whatIs: [
      'A website builder is the tool you design, publish and host a site with, without writing the front end yourself. For a small business the question sounds simple, what do I build it on, but it hides two jobs. One is a site that represents the brand: pages, a blog, a portfolio, something a customer reads before they trust you. The other is a funnel: a landing page, a form, a checkout, and the email that follows.',
      'The tools split along that line. Funnel-first builders, like Systeme.io, bundle pages, email, checkout and course hosting into one account for a solo operator with an offer to sell. Design-first builders, like Webflow, give you real control over layout and a structured CMS, and expect someone on your side to learn the tool. There are all-purpose builders between the two, but they tend to do both jobs adequately and neither well.',
      'Work out which job you have before you compare features. If the site is the brand, or a designer is involved, design control is the thing you are buying. If the site is really a path from a landing page to a payment, breadth and speed matter more than how bespoke the page looks. Most small businesses have one of these jobs, not both.',
    ],
    features: [
      {
        name: 'Real design control',
        why: 'If the site has to match what a designer drew, you need layout tools that work like design tools, not a set of templates with the colours swapped.',
      },
      {
        name: 'A structured CMS',
        why: 'A blog, a case-study library or a catalogue should be a collection with fields, not forty hand-built pages. Check how the builder handles repeating content.',
      },
      {
        name: 'Checkout and payment built in',
        why: 'If you sell an offer directly, taking money on the page without a third-party plug-in removes a whole category of things that break.',
      },
      {
        name: 'Email and funnels together',
        why: 'A funnel is a landing page plus what happens after the form. One account for both means one place to look when it stops working.',
      },
      {
        name: 'Hosting and your own domain',
        why: 'Check what it takes to launch on your own domain rather than a subdomain, and whether the free tier lets you build before you pay to publish.',
      },
      {
        name: 'Manageable learning curve',
        why: 'The best builder is worthless if nobody on your side will open it. Be honest about who is going to maintain the site after launch.',
      },
    ],
    howToChoose: [
      {
        step: 'Decide which job the site is doing.',
        detail:
          'Brand and content, or landing page to payment. The whole decision follows from this, so do not skip it.',
      },
      {
        step: 'If the site is a funnel, start with Systeme.io.',
        detail:
          'Pages, email, checkout and course hosting come in one account, and the free plan is real enough to launch something that takes money.',
      },
      {
        step: 'If the site is the brand, start with Webflow.',
        detail:
          'You get genuine layout control and a proper CMS, and you can build for free and pay when you launch on your own domain.',
      },
      {
        step: 'Name the person who will maintain it.',
        detail:
          'Webflow expects a builder on your side, in-house or hired. If there is nobody, the project stalls, and Systeme.io is the honest choice.',
      },
      {
        step: 'Check what you already pay for.',
        detail:
          'If you have an email platform you like, Systeme.io duplicates it. If you have a designer who works in another tool, ask them before choosing Webflow.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a website builder and a funnel builder?',
        a: 'A website builder produces pages people browse: a home page, an about page, a blog. A funnel builder produces a fixed path: landing page, form, checkout, follow-up email. Systeme.io is the funnel builder on this list and Webflow is the website builder, and they barely compete.',
      },
      {
        q: 'Is a free website builder good enough for a small business?',
        a: 'For a funnel, Systeme.io’s free plan is good enough to launch and take payment on, which is unusual. For a brand site, Webflow lets you build for free but you pay to launch on your own domain, which is fair. The free tier is for finding out whether the tool fits, not for staying on forever.',
      },
      {
        q: 'Do I need a designer to use a website builder?',
        a: 'Not for Systeme.io, whose templates are meant to be used as they are. Webflow is different: it is a design tool, and it rewards someone who understands layout. If nobody on your side wants to learn it, hire someone or choose the simpler tool.',
      },
      {
        q: 'Can I build an online course or membership site with a website builder?',
        a: 'Yes, on Systeme.io, where course and membership hosting is part of the same account as the pages and the email. Webflow is not built for that job. If courses are the business, that settles the choice.',
      },
      {
        q: 'Is Webflow too complicated for a small business?',
        a: 'It can be, if nobody will learn it. Webflow works with real layout concepts, box model, flex, grid and breakpoints, and the payoff is a fast, clean site that looks exactly as designed. Skip it if the site is a means to an end rather than an asset in itself.',
      },
      {
        q: 'Should my website and my email marketing be in the same tool?',
        a: 'If the site is a funnel, yes, and Systeme.io is built on that idea. If the site is the brand, keep them separate: Webflow for the site, a dedicated sender for the email. Bundles save money and logins, and they cost you the ability to change one part without the other.',
      },
      {
        q: 'How long does it take to build a small-business website?',
        a: 'On Systeme.io, a working funnel can be live in a day if the offer and the copy exist. A Webflow site takes as long as the design does, and the tool is rarely the bottleneck. Write the words first; every builder is faster when the content is ready.',
      },
    ],
  },

  /* ------------------------------------------------ Project management */
  pm: {
    seoTitle: 'Best Project Management Software for Small Business',
    seoDescription:
      'Three project management tools shortlisted by our editors for small teams, with a reason to skip each one. Readers rate every pick.',
    h1: 'Best project management software for small business',
    intro:
      'This page is for a small team or solo operator who needs the work kept organised without the tool becoming the work. There are three picks, chosen by our editors and weighted for how much upkeep each needs rather than how many features it ships. Each carries a reason to skip it, and readers rate every pick so you can see how they hold up.',
    whatIs: [
      'Project management software is where the work is written down: what needs doing, who owns it, when it is due, and what it depends on. For a small business the value is not Gantt charts. It is that a task assigned in the tool does not evaporate the way a task mentioned in a meeting does, and that anyone can see what is in flight without asking.',
      'The tools come in three shapes, separated less by features than by who maintains them. Workspace tools, like Notion, put docs and databases in one place and let you shape the system yourself. All-in-one tools, like ClickUp, ship everything and expect you to prune it. Opinionated task tools, like Asana, decide the structure for you so nobody has to design it.',
      'Project tools fail for the same reason gym memberships do: the sign-up is easy and the habit is not. The right pick is the one your team will still be updating in three months, which usually means the one that asks the least of the person who has to keep it tidy.',
    ],
    features: [
      {
        name: 'Tasks with owners and dates',
        why: 'The minimum that makes a tool useful. If a task can exist without an owner, it will, and it will not get done.',
      },
      {
        name: 'Docs next to the work',
        why: 'The brief, the task list it produced and the notes from the call should not live in three tools. Check how close the document sits to the task.',
      },
      {
        name: 'Views your team will use',
        why: 'List, board, calendar and timeline are all useful to someone. Make sure the one your team thinks in is there, and that the others can be hidden.',
      },
      {
        name: 'Sensible defaults',
        why: 'A tool that arrives quiet is easier to keep than one that arrives busy. Look at what it looks like before you configure anything.',
      },
      {
        name: 'Free plan for small teams',
        why: 'All three picks have one. Use it to find out whether your team updates the tool, which no feature list will tell you.',
      },
      {
        name: 'Notifications you can turn down',
        why: 'The fastest way to get a tool ignored is to let it shout. Check how much control you have over what pings whom.',
      },
      {
        name: 'Automations for the boring bits',
        why: 'Moving a card, assigning a reviewer, setting a due date. Small automations are what stop the tool needing a full-time administrator.',
      },
    ],
    howToChoose: [
      {
        step: 'Decide who will own the structure.',
        detail:
          'If one person is happy to design and maintain the system, Notion or ClickUp reward that. If nobody is, Asana decides the structure for you, and that is the feature.',
      },
      {
        step: 'Ask whether docs belong in the tool.',
        detail:
          'If your work is briefs, notes and lists that reference each other, Notion removes the wall between them. If your work is tasks with dates, you do not need that.',
      },
      {
        step: 'Count the tools you are replacing.',
        detail:
          'If you are consolidating time tracking, docs, goals and tasks into one, ClickUp usually has every piece. Treat the person who configures it as part of the cost.',
      },
      {
        step: 'Run one real project on the free plan.',
        detail:
          'Two or three weeks, with actual tasks and deadlines. The test is whether the tool is still accurate at the end without anyone chasing.',
      },
      {
        step: 'Turn things off before you turn things on.',
        detail:
          'Whichever you pick, start with fewer views, fields and notifications than you think you need. Most project tools are abandoned for being noisy, not for being thin.',
      },
    ],
    faqs: [
      {
        q: 'Does a small business really need project management software?',
        a: 'If more than one person is involved in the work and deadlines matter, yes, and the free plans on all three picks cost nothing to find out. A shared list with owners and dates catches the things that fall between people. If you work alone on one thing at a time, a good to-do list is enough.',
      },
      {
        q: 'What is the simplest project management tool for a small team?',
        a: 'Asana, because the structure is decided for you and a new person can be productive without a training session. Notion is simple to start with and easy to overbuild. ClickUp is the most capable and the least simple at its defaults.',
      },
      {
        q: 'Is Notion a project management tool?',
        a: 'It can be, if someone builds it into one. Notion gives you databases, views and no opinion about how to run a project, which works brilliantly when one person owns the structure and drifts into a junk drawer when nobody does. Skip it if you want the tool to impose a process.',
      },
      {
        q: 'Is free project management software good enough?',
        a: 'For a small team, usually. Notion, ClickUp and Asana all have free tiers a small team can genuinely work in, with timeline and reporting views tending to arrive on paid plans. Use the free plan to test the habit, then pay for the view you keep reaching for.',
      },
      {
        q: 'ClickUp or Asana for a small business?',
        a: 'Asana if you want to inherit a process; ClickUp if you want to build one and have someone willing to own the configuration. ClickUp has more in it and is busier at defaults. Asana is confident about how projects should look, and bending it is more work than leaving it.',
      },
      {
        q: 'How do I get my team to actually use the tool?',
        a: 'Choose the one that asks the least of them, keep the first version smaller than feels right, and make the tool the only place work is assigned. Most adoption failures are about upkeep, not features. If the tool is quiet and accurate, people come back to it.',
      },
      {
        q: 'Can project management software replace my docs and spreadsheets?',
        a: 'Notion is built on that idea and can hold the brief, the task list and the notes as one object. ClickUp has docs too, inside a much bigger product. Asana is a task tool first, so keep your documents where they are and link to them.',
      },
    ],
  },

  /* ------------------------------------------------------------- SEO */
  seo: {
    seoTitle: 'Best SEO Tools for Small Business',
    seoDescription:
      'Three SEO tools shortlisted by our editors for small businesses, with what you are actually paying for in each. Readers rate every pick.',
    h1: 'Best SEO tools for small business',
    intro:
      'This page is for a small-business owner or generalist marketer who wants to know why the site is not being found and what to fix. There are three picks, chosen by our editors, and they are the easiest tools on this site to overbuy, so each entry says what you are paying for. Readers rate every pick, so you can see how they hold up.',
    whatIs: [
      'SEO tools tell you how your site looks to a search engine and what stands between you and the people searching. They cover keyword research, which is what people type; site audits, which is what is broken on your pages; rank tracking, which is where you stand over time; and backlink data, which is who links to you and to the sites that outrank you.',
      'The picks overlap heavily on paper and differ in where their data is strongest. Broad toolkits, like Semrush, cover keywords, competitors, audits, local listings and paid search in one subscription. Link-first tools, like Ahrefs, have the strongest backlink index and a direct interface for anyone whose growth plan is link-led. Gentler tools, like Moz Pro, are laid out for someone learning the discipline and come with the clearest teaching material.',
      'These are the most expensive tools on the site, so the first question is not which is best but which job you have. Most small businesses need one of the four jobs done well, not all of them, and the cheapest way to get one job done is rarely to buy the whole toolkit.',
    ],
    features: [
      {
        name: 'Actionable keyword research',
        why: 'Volume alone is not a plan. Look for a view that shows what people search and how hard each term is to rank for, so you can pick fights you can win.',
      },
      {
        name: 'Site audits that explain themselves',
        why: 'A crawl that lists errors is noise. A crawl that says which ones matter and how to fix them is the feature.',
      },
      {
        name: 'Rank tracking over time',
        why: 'One position on one day means nothing. Tracking a set of terms weekly is how you find out whether the work is working.',
      },
      {
        name: 'Backlink and competitor data',
        why: 'If a competitor outranks you on authority rather than content, you need to see who links to them. Only pay for depth here if links are your plan.',
      },
      {
        name: 'Local search coverage',
        why: 'If customers find you by area, listings and local rankings matter more than national keyword volume. Check the tool covers them.',
      },
      {
        name: 'Teaching material and guides',
        why: 'Most small businesses do not need a better tool; they need to understand the one they have. Guides and plain explanations are worth weighting.',
      },
      {
        name: 'Free data for your site',
        why: 'Some tools give you audit and link data for a site you own without a subscription. Use that before you pay for anything.',
      },
    ],
    howToChoose: [
      {
        step: 'Name the one job you need done.',
        detail:
          'Keywords, audits, rank tracking or links. If you cannot name one, you are not ready to pay for an SEO tool, and free data on your own site is the place to start.',
      },
      {
        step: 'Start free on your own site.',
        detail:
          'Ahrefs Webmaster Tools gives you audit and backlink data for a site you own, and the Semrush free account is enough to look things up. Both cost nothing and answer the first questions.',
      },
      {
        step: 'If you are learning, start with Moz Pro.',
        detail:
          'Rank tracking, crawls and keyword research are laid out for someone taking SEO seriously for the first time, with the clearest teaching material of the three.',
      },
      {
        step: 'If links are the plan, choose Ahrefs.',
        detail:
          'Its backlink index is the strongest here and the interface is direct. Paste a domain, get the picture.',
      },
      {
        step: 'If one person covers everything, choose Semrush.',
        detail:
          'Keywords, competitors, audits, local listings and paid search in one subscription. Buy it for breadth, not for any single job.',
      },
      {
        step: 'Review the subscription every quarter.',
        detail:
          'SEO tools are easy to keep paying for after the project that justified them is done. If you only opened rank tracking last month, downsize.',
      },
    ],
    faqs: [
      {
        q: 'Does a small business need an SEO tool?',
        a: 'Not at first. The free data on your own site from Ahrefs Webmaster Tools answers whether you have a technical problem or a content problem. Pay for a tool once you know which job you need done regularly and someone has the time to do it.',
      },
      {
        q: 'What is the best free SEO tool?',
        a: 'For a site you own, Ahrefs Webmaster Tools, which gives you audit and backlink data without a subscription. The Semrush free account is real but narrow: enough to look something up, not enough to work in. Neither will let you research sites you do not own for free.',
      },
      {
        q: 'Semrush or Ahrefs for a small business?',
        a: 'Ahrefs if your work is links: digital PR, link building, or working out why a competitor outranks you on authority. Semrush if one person does all of marketing and needs keywords, audits, local listings and paid search in one place. Neither is cheap, so buy for the job you actually have.',
      },
      {
        q: 'Is Moz Pro good for beginners?',
        a: 'It is the gentlest entry point on this list that still does real work. Rank tracking, crawls and keyword research are laid out for someone learning, and the guides are the clearest in the category. Specialists will hit its edges sooner than they would with Ahrefs or Semrush.',
      },
      {
        q: 'What is Domain Authority and does Google use it?',
        a: 'Domain Authority is Moz’s own score for comparing sites against each other. It is useful for that, and it is not a metric Google publishes or uses. Treat it as a relative gauge, not a target.',
      },
      {
        q: 'How long before SEO work shows results?',
        a: 'Longer than any tool will tell you, and it depends on the site’s age, the competition and what you actually changed. Rank tracking in any of the three picks lets you see movement over months rather than guessing. If you need customers this week, SEO tooling is the wrong purchase.',
      },
      {
        q: 'Can I do SEO without any tools?',
        a: 'You can write for people, fix the obviously broken pages and earn links by being worth linking to, and none of that needs a subscription. What a tool adds is the ability to see what competitors do and to measure whether your work is landing. Start without one; buy when a specific question keeps coming up.',
      },
      {
        q: 'Do I need an SEO tool for local search?',
        a: 'If customers find you by area, yes, but you need a narrow slice of one. Semrush covers local listings and rankings within its toolkit, which is the reason to pick it over the others for this job. Check the specific local features before you buy, because the toolkit is easy to overbuy for one need.',
      },
    ],
  },
};
