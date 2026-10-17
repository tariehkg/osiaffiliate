/** US Email plan examples inspected in the live pricing selector, 16 October 2026.
 * Monthly equivalents billed annually, not month-to-month offers. */
export const activeCampaignRates: Record<number, Record<string, number>> = {
  1000: { Starter: 15, Plus: 49, Pro: 79, Enterprise: 145 },
  2500: { Starter: 39, Plus: 95, Pro: 149, Enterprise: 255 },
  5000: { Starter: 79, Plus: 145, Pro: 205, Enterprise: 375 },
};
export interface ActiveCampaignInputs {
  contacts: number; users: number; actions: number; sends: number;
  branches: boolean; advanced: boolean; crm: boolean;
  quote: number | null; extras: number; upfront: number;
}
export function activeCampaignPlan(inputs: ActiveCampaignInputs) {
  const { contacts, users, actions, sends, branches, advanced, crm, quote, extras, upfront } = inputs;
  const valid = Object.hasOwn(activeCampaignRates, contacts)
    && Number.isInteger(users) && users >= 1 && users <= 1000
    && Number.isInteger(actions) && actions >= 1 && actions <= 1000
    && Number.isInteger(sends) && sends >= 0 && sends <= 1000000000
    && [extras, upfront, ...(quote === null ? [] : [quote])].every((v) => Number.isFinite(v) && v >= 0 && v <= 10000000 && Math.abs(v * 100 - Math.round(v * 100)) < 0.00001);
  if (!valid) return { valid: false as const };
  const plan = advanced ? 'Pro' : branches || actions > 5 || crm ? 'Plus' : 'Starter';
  const includedUsers = plan === 'Pro' ? 3 : 1;
  const extraUsers = Math.max(0, users - includedUsers);
  const needsUserQuote = extraUsers > 0;
  const publicRate = activeCampaignRates[contacts][plan] ?? null;
  const monthly = quote ?? (needsUserQuote ? null : publicRate);
  const multiplier = plan === 'Pro' ? 12 : 10;
  const allowance = contacts * multiplier;
  return {
    valid: true as const, plan, publicRate, monthly, includedUsers, extraUsers, needsUserQuote,
    year: monthly === null ? null : (monthly + extras) * 12 + upfront,
    ongoing: monthly === null ? null : (monthly + extras) * 12,
    allowance, over: allowance === null ? null : sends > allowance,
    crmExtra: crm,
    rateSource: quote === null ? 'public annual-price example' : 'your whole-account quote',
  };
}
