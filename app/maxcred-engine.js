// MaxCred fee-aware demo engine — verified launch dataset.
(function(){
const C=window.MAXCRED_CARDS||[],GST=.18;
const money=n=>'₹'+Math.round(Math.max(0,n)).toLocaleString('en-IN');

function spend(){
  const s={};
  document.querySelectorAll('.spend').forEach(r=>{
    const label=(r.querySelector('label')?.textContent||'').toLowerCase();
    const v=Number(r.querySelector('input')?.value||0);
    let k='other';
    if(label.includes('utility')||label.includes('bill')) k='utilities';
    else if(label.includes('online')||label.includes('shopping')) k='online';
    else if(label.includes('travel')) k='travel';
    else if(label.includes('fuel')) k='fuel';
    else if(label.includes('dining')) k='dining';
    else if(label.includes('rent')) k='rent';
    else if(label.includes('wallet')) k='wallet';
    else if(label.includes('upi')) k='upi';
    s[k]=(s[k]||0)+Math.max(0,v);
  });
  return s;
}
function waiverEligible(c,s){
  let t=Object.values(s).reduce((a,b)=>a+b,0)*12;
  if(c.id==='axis-cashback') t-=((s.rent||0)+(s.wallet||0))*12;
  if(c.id==='sbi-cashback') t-=((s.rent||0)+(s.wallet||0)+(s.fuel||0)+(s.utilities||0))*12;
  return Math.max(0,t);
}
function feeInfo(c,s){
  const f=c.fees||{};
  if(!f.annual)return {listed:0,charged:0,waived:true,threshold:0,eligible:waiverEligible(c,s)};
  const eligible=waiverEligible(c,s),waived=!!(f.waiverThreshold&&eligible>=f.waiverThreshold);
  const listed=f.annual*(f.gst?1+GST:1);
  return {listed,charged:waived?0:listed,waived,threshold:f.waiverThreshold||0,eligible};
}
function reward(c,s){
  const r=c.rewards||{};let v=0;
  if(c.id==='sbi-cashback'){const on=Math.min(s.online||0,(r.monthlyOnlineCap||Infinity)/r.online);v+=on*r.online+Math.max(0,(s.online||0)-on)*r.offline;v+=((s.other||0)+(s.dining||0)+(s.travel||0)+(s.upi||0))*r.offline;}
  else if(c.id==='airtel-axis'){v+=Math.min(s.utilities||0,(r.utilitiesCapMonthly||Infinity)/r.utilitiesAirtelApp)*r.utilitiesAirtelApp;v+=Math.min((s.dining||0)+(s.online||0),(r.preferredCapMonthly||Infinity)/r.preferredApps)*r.preferredApps;v+=((s.other||0)+(s.travel||0)+(s.fuel||0)+(s.upi||0))*r.other;}
  else if(c.id==='axis-cashback')v+=((s.online||0)+(s.other||0)+(s.dining||0)+(s.travel||0)+(s.upi||0))*r.defaultCashback;
  else if(c.id==='hdfc-millennia'){const preferred=Math.min(s.online||0,r.onlinePreferredCap||Infinity);v+=preferred*r.onlinePreferred;v+=(Math.max(0,(s.online||0)-preferred)+(s.other||0)+(s.dining||0)+(s.travel||0)+(s.upi||0))*r.defaultCashback;}
  else if(c.id==='amazon-pay-icici')v+=(s.online||0)*r.amazonPrime+((s.other||0)+(s.dining||0)+(s.travel||0)+(s.upi||0))*r.other;
  else if(c.id==='axis-ace')v+=(s.utilities||0)*r.utilityGpay+(s.dining||0)*r.dining+(s.online||0)*r.online+((s.other||0)+(s.travel||0)+(s.upi||0))*r.defaultCashback;
  else if(c.id==='idfc-first-millennia'){const online=Math.max(0,s.online||0),base=Math.min(online,r.onlineThreshold||20000),inc=Math.max(0,online-base);v+=base*r.onlineBase+inc*r.onlineIncremental;v+=((s.other||0)+(s.dining||0)+(s.travel||0)+(s.upi||0))*r.offline;}
  return v*12;
}
function value(c,s){const f=feeInfo(c,s),rw=reward(c,s);return {card:c,reward:rw,fee:f.charged,feeInfo:f,net:rw-f.charged};}
function combos(a,max){const out=[];function walk(i,p){if(p.length)out.push(p.slice());if(p.length===max)return;for(;i<a.length;i++){p.push(a[i]);walk(i+1,p);p.pop();}}walk(0,[]);return out;}
function wallet(cs,s){let rr=0,ff=0;const alloc={};for(const [k,v] of Object.entries(s)){if(!v)continue;let best=cs[0],bv=-1;for(const c of cs){const x={[k]:v},q=reward(c,x);if(q>bv){bv=q;best=c;}}if(best)(alloc[best.id]??={})[k]=v;}for(const c of cs){const x=alloc[c.id]||{};rr+=reward(c,x);ff+=feeInfo(c,s).charged;}return {reward:rr,fee:ff,net:rr-ff,alloc};}
window.maxcredEvaluate=function(s){const cards=C.filter(c=>c.recommendationReady),all=combos(cards,3);let best=null;for(const cs of all){const v=wallet(cs,s);if(!best||v.net>best.net)best={...v,cards:cs};}return best||{cards:[],reward:0,fee:0,net:0,alloc:{}};};
function categoryLabel(k){return ({online:'Online / shopping',dining:'Dining',travel:'Travel',utilities:'Utilities / bills',fuel:'Fuel',upi:'UPI',other:'Other'})[k]||k;}
function allocationText(alloc){const keys=Object.keys(alloc||{});return keys.length?keys.map(categoryLabel).join(' · '):'Best overall wallet fit';}

function polish(){
  const count=C.filter(c=>c.recommendationReady).length;
  const cards=document.getElementById('cards');
  if(cards){
    cards.style.gridTemplateColumns='repeat(auto-fit,minmax(220px,1fr))';
    const h=cards.previousElementSibling;
    if(h&&h.tagName==='P')h.innerHTML=`Pick the cards you currently hold. <strong>${count} verified cards</strong> are available in this demo.`;
  }
  const style=document.createElement('style');style.textContent=`.choice{min-height:158px}.choice:after{content:'Select';display:inline-block;margin-top:10px;font-size:11px;font-weight:800;color:#64748b}.choice.selected:after{content:'Selected ✓';color:#7b5b00}.result-hero{position:relative}.result-hero:after{content:'Fees + waiver rules applied';position:absolute;right:22px;bottom:18px;font-size:11px;color:#b9c9d8;font-weight:700}@media(max-width:800px){.result-hero:after{position:static;display:block;margin-top:14px}}`;document.head.appendChild(style);
}

window.optimize=function(){
  try{
    const s=spend(),names=[...document.querySelectorAll('.choice.selected strong')].map(x=>x.textContent.trim()),cur=C.filter(c=>names.includes(c.name));
    const current=cur.length?wallet(cur,s):{net:0,reward:0,fee:0,alloc:{}},best=window.maxcredEvaluate(s),gain=best.net-current.net;
    document.getElementById('current').textContent=money(current.net);document.getElementById('optimized').textContent=money(best.net);document.getElementById('gain').textContent=(gain>=0?'+':'−')+money(Math.abs(gain));
    const rec=document.querySelector('.result .recs');
    if(rec)rec.innerHTML=best.cards.map((c,i)=>{const e=value(c,s),f=e.feeInfo,fit=Math.min(99,Math.max(68,Math.round(68+31*Math.max(0,e.net)/Math.max(1,best.net))));const feeLine=!f.listed?'Lifetime free / no annual fee':f.waived?`Annual fee waived · ₹${f.threshold.toLocaleString('en-IN')} threshold met`:`Annual fee ₹${Math.round(f.charged).toLocaleString('en-IN')} incl. GST · waiver at ₹${Math.round(f.threshold).toLocaleString('en-IN')}`;return `<div class="rec"><div class="role">${i?'Accelerator':'Primary recommendation'}</div><h3>${c.name}</h3><div class="reason"><b>Best for:</b> ${allocationText(best.alloc[c.id])}</div><div class="reason" style="margin-top:7px">${c.note}</div><div class="score">Net annual value · ${money(e.net)}</div><div class="bar"><i style="width:${fit}%"></i></div><div class="reason" style="margin-top:10px"><b>${feeLine}</b></div><div class="reason" style="margin-top:5px">Verified ${c.verifiedDate}</div></div>`;}).join('');
    const totalCards=C.filter(c=>c.recommendationReady).length,feeSummary=best.cards.map(c=>{const f=feeInfo(c,s);return f.waived?'fee waived':!f.listed?'lifetime free':`${money(f.charged)} fee`;}).join(' · '),n=document.querySelector('.notice');
    if(n)n.innerHTML=`<b>Why this wallet:</b> MaxCred compared up to 3-card combinations across ${totalCards} verified cards, allocated each spending category to the strongest available reward economics, and applied annual-fee waiver rules. <b>Fees:</b> ${feeSummary}.`;
    document.getElementById('results').classList.add('show');document.getElementById('results').scrollIntoView({behavior:'smooth'});
  }catch(e){console.error('MaxCred analysis failed',e);const n=document.querySelector('.notice');if(n){n.innerHTML='<b>Analysis could not be completed.</b> Please refresh and try again.';n.style.display='block';}}
};
polish();
})();
