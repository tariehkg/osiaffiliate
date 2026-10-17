/** US public prices checked 16 October 2026; these are examples, not checkout quotes. */
export const crmCostPlans = [
  { id: 'pipedrive-growth', name: 'Pipedrive Growth', annual: 39, monthly: 49, upfront: 0 },
  { id: 'pipedrive-lite', name: 'Pipedrive Lite', annual: 14, monthly: 24, upfront: 0 },
  { id: 'zoho-standard', name: 'Zoho CRM Standard', annual: 14, monthly: 20, upfront: 0 },
  { id: 'close-essentials', name: 'Close Essentials', annual: 35, monthly: 49, upfront: 0 },
  { id: 'close-growth', name: 'Close Growth', annual: 99, monthly: 109, upfront: 0 },
  { id: 'hubspot-pro', name: 'HubSpot Sales Hub Professional', annual: 90, monthly: 100, upfront: 1500 },
] as const;
