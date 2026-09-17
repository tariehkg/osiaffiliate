/**
 * The full software-category taxonomy shown in the homepage's directory
 * wall — every group and category name a real, standard term used across
 * the software-directory industry (the same names Capterra, G2, GetApp
 * etc. all use, because they describe real market categories, not any one
 * company's invention).
 *
 * `href: null` means the category is real and coming, but not built yet —
 * it renders as plain text, never a link, so nothing on this page ever
 * points at a page that doesn't exist. The 5 categories that ARE built
 * point at their real routes and reuse the exact names from `data.ts`.
 *
 * Flip one live by giving it an `href` once its hub page exists — that's
 * the only change needed anywhere for it to go live in this section.
 */

export interface DirectoryEntry {
  name: string;
  href: string | null;
}

export interface DirectoryGroup {
  group: string;
  entries: DirectoryEntry[];
}

export const directoryGroups: DirectoryGroup[] = [
  {
    group: 'CRM & Sales Software',
    entries: [
      { name: 'CRM Software', href: '/crm-software' },
      { name: 'Sales Engagement Software', href: null },
      { name: 'Sales Enablement Software', href: null },
      { name: 'Lead Generation Software', href: null },
      { name: 'Contract Management Software', href: null },
      { name: 'Sales Forecasting Software', href: null },
    ],
  },
  {
    group: 'Marketing Software',
    entries: [
      { name: 'Email Marketing Software', href: '/email-marketing-software' },
      { name: 'SEO Software', href: '/seo-marketing-tools' },
      { name: 'Marketing Automation Software', href: null },
      { name: 'Social Media Management Software', href: null },
      { name: 'Content Marketing Software', href: null },
      { name: 'Affiliate Marketing Software', href: null },
      { name: 'Marketing Analytics Software', href: null },
    ],
  },
  {
    group: 'Website & E-Commerce Software',
    entries: [
      { name: 'Website Builder Software', href: '/website-builders' },
      { name: 'E-Commerce Platforms', href: null },
      { name: 'Landing Page Software', href: null },
      { name: 'Website Analytics Software', href: null },
      { name: 'Online Form Builder Software', href: null },
    ],
  },
  {
    group: 'Collaboration & Productivity Software',
    entries: [
      { name: 'Project Management Software', href: '/project-management-software' },
      { name: 'Task Management Software', href: null },
      { name: 'Team Chat Software', href: null },
      { name: 'Document Management Software', href: null },
      { name: 'Time Tracking Software', href: null },
      { name: 'Video Conferencing Software', href: null },
    ],
  },
  {
    group: 'Customer Service Software',
    entries: [
      { name: 'Help Desk Software', href: null },
      { name: 'Live Chat Software', href: null },
      { name: 'Customer Success Software', href: null },
      { name: 'Knowledge Base Software', href: null },
    ],
  },
  {
    group: 'HR Software',
    entries: [
      { name: 'Core HR Software', href: null },
      { name: 'Payroll Software', href: null },
      { name: 'Applicant Tracking Software', href: null },
      { name: 'Time & Attendance Software', href: null },
      { name: 'Employee Engagement Software', href: null },
    ],
  },
  {
    group: 'Accounting & Finance Software',
    entries: [
      { name: 'Accounting Software', href: null },
      { name: 'Invoicing Software', href: null },
      { name: 'Expense Management Software', href: null },
      { name: 'Budgeting Software', href: null },
    ],
  },
  {
    group: 'IT & Security Software',
    entries: [
      { name: 'Password Management Software', href: null },
      { name: 'VPN Software', href: null },
      { name: 'Backup Software', href: null },
      { name: 'IT Ticketing Software', href: null },
    ],
  },
  {
    group: 'AI Software',
    entries: [
      { name: 'AI Chatbot Software', href: null },
      { name: 'AI Writing Software', href: null },
      { name: 'AI Image Generation Software', href: null },
    ],
  },
];

export const directoryTotals = {
  groups: directoryGroups.length,
  entries: directoryGroups.reduce((n, g) => n + g.entries.length, 0),
  live: directoryGroups.reduce((n, g) => n + g.entries.filter((e) => e.href).length, 0),
};
