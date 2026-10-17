/** US self-service public prices and scoped limits checked 16 October 2026.
 * GR annual figures are derived from displayed monthly equivalents; AW annual totals are published cash totals. */
export type GrPlan = 'Starter' | 'Marketer' | 'Creator';
export type AwPlan = 'Lite' | 'Plus';
export type Billing = 'annual' | 'monthly';
export const grRates: Record<number, Record<GrPlan, { monthly: number; annual: number }>> = {
  1000: { Starter:{monthly:19,annual:186.96},Marketer:{monthly:59,annual:580.56},Creator:{monthly:69,annual:678.96} },
  2500: { Starter:{monthly:29,annual:285.36},Marketer:{monthly:69,annual:678.96},Creator:{monthly:79,annual:777.36} },
  5000: { Starter:{monthly:54,annual:531.36},Marketer:{monthly:95,annual:934.80},Creator:{monthly:109,annual:1072.56} },
};
export const awRates: Record<number, Record<AwPlan, { monthly: number; annual: number }>> = {
  500:{Lite:{monthly:15,annual:150},Plus:{monthly:30,annual:240}},
  1000:{Lite:{monthly:25,annual:250},Plus:{monthly:45,annual:450}},
  2500:{Lite:{monthly:35,annual:350},Plus:{monthly:55,annual:550}},
  5000:{Lite:{monthly:60,annual:600},Plus:{monthly:90,annual:900}},
};
export interface ComparisonInputs {
  grContacts:number; awContacts:number; grPlan:GrPlan; awPlan:AwPlan; billing:Billing;
  sends:number; workflows:number; grElements:number; users:number; pages:number;
  emailTests:boolean; branding:boolean; behavioral:boolean; webinar:boolean;
  grQuote:number|null;awQuote:number|null;grExtras:number;awExtras:number;grSetup:number;awSetup:number;
}
export interface SideResult {
  band:number|null; publicYear:number|null; baseYear:number|null; year:number|null; ongoing:number|null;
  allowance:number|null; over:boolean; issues:string[]; notes:string[]; quoteUsed:boolean; basis:string;
}
const moneyValid=(n:number)=>Number.isFinite(n)&&n>=0&&n<=10000000&&Math.abs(n*100-Math.round(n*100))<0.00001;
const integer=(n:number,min:number,max:number)=>Number.isInteger(n)&&n>=min&&n<=max;
const round=(n:number)=>Math.round((n+Number.EPSILON)*100)/100;
const bandFor=(count:number,bands:number[])=>bands.find(band=>count<=band)??null;
export function emailComparison(i:ComparisonInputs) {
  const valid=integer(i.grContacts,1,1000000)&&integer(i.awContacts,1,1000000)
    &&integer(i.sends,0,1000000000)&&integer(i.workflows,0,1000)&&integer(i.grElements,1,1000)
    &&integer(i.users,1,1000)&&integer(i.pages,0,1000)
    &&['Starter','Marketer','Creator'].includes(i.grPlan)&&['Lite','Plus'].includes(i.awPlan)
    &&['annual','monthly'].includes(i.billing)
    &&[i.grExtras,i.awExtras,i.grSetup,i.awSetup,...(i.grQuote===null?[]:[i.grQuote]),...(i.awQuote===null?[]:[i.awQuote])].every(moneyValid);
  if(!valid)return{valid:false as const};
  const grBand=bandFor(i.grContacts,[1000,2500,5000]); const awBand=bandFor(i.awContacts,[500,1000,2500,5000]);
  const make=(vendor:'gr'|'aw',band:number|null,quote:number|null,extras:number,setup:number):SideResult=>{
    const rate=band===null?null:vendor==='gr'?grRates[band][i.grPlan]:awRates[band][i.awPlan];
    const publicYear=rate===null?null:i.billing==='annual'?rate.annual:rate.monthly*12;
    const baseYear=quote===null?publicYear:round(quote*12);
    return{band,publicYear,baseYear,year:baseYear===null?null:round(baseYear+extras*12+setup),ongoing:baseYear===null?null:round(baseYear+extras*12),allowance:null,over:false,issues:[],notes:[],quoteUsed:quote!==null,basis:quote!==null?'Entered whole-account quote; confirm its actual payment terms':vendor==='gr'&&i.billing==='annual'?'Calculated from displayed annual-plan monthly equivalent; invoice rounding may differ':vendor==='aw'&&i.billing==='annual'?'Published annual cash total':'12 monthly payments at the observed regular monthly rate'};
  };
  const gr=make('gr',grBand,i.grQuote,i.grExtras,i.grSetup);const aw=make('aw',awBand,i.awQuote,i.awExtras,i.awSetup);
  if(grBand===null)gr.issues.push('No public price preset above 5,000 billable contacts in this checker. Obtain a compatible quote; counts do not certify capacity.');
  if(awBand===null)aw.issues.push('No public price or send-cap preset above 5,000 billable subscribers in this checker. Confirm both in a quote.');
  const grUsers=i.grPlan==='Starter'?3:5;
  if(i.users>grUsers)gr.issues.push(`Selected plan includes ${grUsers} users, below your ${i.users}. Check another plan or a compatible quote.`);
  if(i.grPlan==='Starter') {
    if(i.workflows>1)gr.issues.push('Starter includes one custom workflow; your count needs a different plan.');
    if(i.workflows>0&&i.grElements>6)gr.issues.push('Starter permits up to 6 elements per custom workflow. Your entered workflow is above this limit.');
    if(i.emailTests)gr.issues.push('Campaign email A/B tests are not included on Starter; check Marketer or Creator.');
    if(i.workflows>0)gr.notes.push('Starter workflow eligibility also excludes tags, scoring, course and ecommerce elements. Check your exact conditions, not just the element count.');
  }
  if(i.webinar&&i.grPlan!=='Creator')gr.issues.push('This selected plan does not establish an included webinar host. Creator documents 100 attendees; US lower-tier add-ons need confirmation.');
  if(i.behavioral)gr.notes.push('Verify the exact behavior condition and selected-tier entitlement in a trial; a workflow count is not a capability test.');
  if(i.awPlan==='Lite') {
    if(i.users>3)aw.issues.push('Lite includes 3 users; Plus documents unlimited users.');
    if(i.pages>3)aw.issues.push('Lite includes 3 landing pages; Plus documents unlimited landing pages.');
    if(i.workflows>3)aw.issues.push('Lite includes 3 workflows; Plus documents unlimited workflows.');
    if(i.branding)aw.issues.push('Lite retains the Powered by AWeber email badge; Plus removes it.');
    if(i.behavioral)aw.issues.push('The pricing table excludes behavioral automation from Lite. Check Plus and confirm the exact Split Path rule.');
    aw.notes.push('Lite also has 1 list and 1 saved custom segment; these requirements are not evaluated by the numeric inputs.');
  }
  if(i.webinar)aw.issues.push('The inspected AWeber webinar route uses external software/integration. Confirm its fit and add its quote; the shown email cost is not a complete webinar package.');
  if(awBand!==null){aw.allowance=awBand*(i.awPlan==='Lite'?10:12);aw.over=i.sends>aw.allowance;if(aw.over)aw.issues.push('Forecast exceeds this tier’s send allowance. AWeber documents automatic movement to a higher subscriber tier; the current base price is not a full forecast.');else if(i.sends===aw.allowance)aw.issues.push('Forecast reaches the published allowance. Confirm when automatic tier movement is triggered and how it changes your cost.');}
  gr.notes.push('Paid monthly email sends are advertised as unlimited, subject to current account and sending policies. This is not a delivery guarantee.');
  aw.notes.push('Send allowance uses purchased tier capacity, not the actual subscriber count. Confirm any automatic tier movement and later downgrade with support.');
  gr.notes.push('Billable memberships and monthly additions/status changes can differ from unique people; verify the count and list-extension charges.');
  aw.notes.push('Unsubscribes do not count toward billing under current help. Confirm duplicate-list and other account-specific billing rules.');
  return{valid:true as const,gr,aw};
}
export function comparisonCsv(i:ComparisonInputs):string|null {
  const result=emailComparison(i);if(!result.valid)return null;
  const rows:(string|number)[][]=[['Section','Item','Assumption or estimate','Observed result','Pass / fail / not tested']];
  const labels:Record<string,string>={grContacts:'GetResponse billable contacts',awContacts:'AWeber billable subscribers',grPlan:'GetResponse plan',awPlan:'AWeber plan',billing:'Public pricing basis',sends:'Monthly email sends',workflows:'Workflows required',grElements:'Elements in largest GetResponse workflow',users:'Users required',pages:'Landing pages required',emailTests:'Campaign email A/B tests required',branding:'Remove email provider badge',behavioral:'Behavior-based rules required',webinar:'Webinar route required',grQuote:'GetResponse whole-account quote, monthly equivalent USD',awQuote:'AWeber whole-account quote, monthly equivalent USD',grExtras:'GetResponse monthly extras USD',awExtras:'AWeber monthly extras USD',grSetup:'GetResponse one-time setup USD',awSetup:'AWeber one-time setup USD'};
  for(const [key,value]of Object.entries(i))rows.push(['Inputs',labels[key],value===null?'Not supplied':typeof value==='boolean'?(value?'Yes':'No'):String(value),'','']);
  for(const [vendor,side]of [['GetResponse',result.gr],['AWeber',result.aw]] as const){
    const entries:[string,string|number][]=[['Capacity preset',side.band??'Quote required'],['Selected-plan public yearly base USD',side.publicYear?.toFixed(2)??'Quote required'],['Entered quote used',String(side.quoteUsed)],['First year USD',side.year?.toFixed(2)??'Quote required'],['Later year USD',side.ongoing?.toFixed(2)??'Quote required'],['Price basis',side.basis],['Monthly send allowance',vendor==='GetResponse'?'Advertised unlimited on paid plans; policy applies':side.allowance??'Confirm in quote'],['Checked limits',side.issues.length?'Review required':'No selected limit conflict detected'],['Warnings',side.issues.join(' | ')||'None from selected checks'],['Scope notes',side.notes.join(' | ')]];
    for(const [label,value]of entries)rows.push([vendor,label,value,'','']);
  }
  for(const [check,expected]of [['Exact paid tier and date','Record the actual package and entitlement; trial access is not proof'],['Billable contacts','Check list memberships, statuses, billing window and invoice'],['Send budget','Include broadcasts and automated emails; verify upgrade/extension charges'],['Representative workflow','Reproduce the same condition/exit on eligible plans and record outputs'],['Email A/B route','Distinguish broadcast variants, behavior branches and random allocation'],['Branding / forms / pages','Check the actual email badge, published page and saved segment limits'],['Subscriber import','Use permitted fictional data; preserve suppression/consent and avoid duplicate welcomes'],['External webinar / course route','Validate connector, host capacity, fees and actual quote'],['Export / switch','Compare sample fields, tags, notes and suppression states before closing old account']] as const)rows.push(['Pilot',check,expected,'','']);
  rows.push(['Notes','Evidence','US public prices/limits checked 2026-10-16; GR annual base derived, AW annual base published. Unentered taxes, usage, external services, fees and renewal changes excluded. Blank observations are not completed tests.','','']);
  return rows.map(row=>row.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\r\n');
}
