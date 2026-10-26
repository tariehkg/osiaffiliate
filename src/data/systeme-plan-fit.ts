/** Rendered public monthly matrix, 18 October 2026. Null means unlimited for this field only. */
export const systemeFields = ['contacts','funnels','steps','courses','rules','workflows','domains','students','webinars'] as const;
export type SystemeField = typeof systemeFields[number];
export type SystemeNeeds = Record<SystemeField,number>;
export const systemePlans = [
 {name:'Free',monthly:0,caps:{contacts:2000,funnels:3,steps:15,courses:1,rules:1,workflows:1,domains:1,students:500,webinars:0}},
 {name:'Startup',monthly:17,caps:{contacts:5000,funnels:10,steps:50,courses:5,rules:10,workflows:5,domains:3,students:null,webinars:0}},
 {name:'Webinar',monthly:47,caps:{contacts:10000,funnels:50,steps:300,courses:20,rules:100,workflows:20,domains:10,students:null,webinars:10}},
 {name:'Unlimited',monthly:97,caps:{contacts:null,funnels:null,steps:null,courses:null,rules:null,workflows:null,domains:null,students:null,webinars:null}},
] as const;
export function systemePlanFit(needs:SystemeNeeds){
 if(!systemeFields.every(f=>Number.isFinite(needs[f])&&Number.isInteger(needs[f])&&needs[f]>=0&&needs[f]<=1e9))return {valid:false,plan:null,reason:'Enter whole non-negative requirements in every field.'};
 const plan=systemePlans.find(p=>systemeFields.every(f=>p.caps[f]===null||needs[f]<=p.caps[f]!))!;
 const lower=systemePlans.filter(p=>p.monthly<plan.monthly).map(p=>({name:p.name,failed:systemeFields.filter(f=>p.caps[f]!==null&&needs[f]>p.caps[f]!)}));
 return {valid:true,plan,reason:lower.map(p=>`${p.name} is below your ${p.failed.join(', ')} requirement${p.failed.length===1?'':'s'}.`).join(' ')||'Your stated requirements fit the checked Free limits. Verify feature behavior in your own pilot.'};
}
export function systemeFitCsv(needs:SystemeNeeds){const r=systemePlanFit(needs);return [['OSI Affiliate Systeme.io plan-fit worksheet — public monthly matrix checked 2026-10-18'],['Requirement','Your count','Lowest listed fit','Monthly software USD','12 monthly payments USD','Observed pilot result'],...systemeFields.map(f=>[f,needs[f],r.plan?.name??'Invalid',r.plan?.monthly??'Unknown',r.plan?r.plan.monthly*12:'Unknown','']),['This checks only the listed capacity limits, not every entitlement, permission, integration, deliverability or real checkout. Annual price not verified. Domain registration, processor fees, tax and third-party costs remain separate.']].map(row=>row.map(x=>'"'+String(x).replaceAll('"','""')+'"').join(',')).join('\r\n');}
