window.MAXCRED_CARDS = [
  {
    id: 'sbi-cashback', issuer: 'SBI Card', name: 'CASHBACK SBI Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-26',
    fees: { joining: 999, annual: 999, waiverThreshold: 200000, gst: true },
    rewards: { online: 0.05, offline: 0.01, monthlyOnlineCap: 10000 },
    exclusions: ['utilities','insurance','fuel','rent','wallet','education','jewellery','railways','merchant EMI','flexipay EMI'],
    source: 'https://www.sbicard.com/en/personal/credit-cards/cashback-sbi-card.html', sourceLabel: 'SBI Card official',
    note: 'Renewal fee is reversed when preceding-year annual spend is at least ₹2 lakh.'
  },
  {
    id: 'airtel-axis', issuer: 'Axis Bank', name: 'Airtel Axis Bank Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-29',
    fees: { joining: 500, annual: 500, waiverThreshold: 200000, gst: true },
    rewards: { airtel: 0.25, utilitiesAirtelApp: 0.10, preferredApps: 0.10, other: 0.01, airtelCapMonthly: 250, utilitiesCapMonthly: 250, preferredCapMonthly: 500 },
    exclusions: ['selected transaction categories'],
    source: 'https://www.axis.bank.in/cards/credit-card/airtel-axis-bank-credit-card', sourceLabel: 'Axis Bank official card page',
    note: 'Annual fee of ₹500 is waived from the second year when eligible annual spends exceed ₹2 lakh. Rent and wallet-load transactions do not count toward the waiver. Current Airtel cashback terms are subject to the revised caps shown by Axis Bank.'
  },
  {
    id: 'axis-cashback', issuer: 'Axis Bank', name: 'Axis Bank Cashback Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-26',
    fees: { joining: 1000, annual: 1000, waiverThreshold: 400000, gst: true },
    rewards: { defaultCashback: 0.01 }, exclusions: ['rent MCC 6513','wallet MCC 6540'],
    source: 'https://www.axisbank.com/docs/default-source/ld/axis-bank-cashback-credit-card-tnc.pdf', sourceLabel: 'Axis Bank official card terms',
    note: 'Annual fee is exempted when eligible spends reach ₹4 lakh in the anniversary year; rent and wallet MCCs are excluded from the waiver calculation.'
  },
  {
    id: 'hdfc-millennia', issuer: 'HDFC Bank', name: 'HDFC Bank Millennia Credit Card', network: 'Visa/Mastercard', recommendationReady: true, verifiedDate: '2026-08-27',
    fees: { joining: 1000, annual: 1000, waiverThreshold: 100000, gst: true },
    rewards: { onlinePreferred: 0.05, onlinePreferredCap: 20000, defaultCashback: 0.01, defaultCap: 100000 },
    exclusions: ['fuel','rent','government','cash advance','fees','smart EMI'],
    source: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/5d94cc09-80b7-4073-8c9f-22fad88054f0', sourceLabel: 'HDFC Bank official terms',
    note: '5% cashback applies to the listed online merchants with a ₹1,000 monthly cap; other eligible spends earn 1% subject to the separate ₹1,000 monthly cap.'
  },
  {
    id: 'amazon-pay-icici', issuer: 'ICICI Bank', name: 'Amazon Pay ICICI Bank Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-27',
    fees: { joining: 0, annual: 0, waiverThreshold: 0, gst: true },
    rewards: { amazonPrime: 0.05, amazonNonPrime: 0.03, other: 0.01 },
    exclusions: ['fuel','rent','taxes','education','cash advances'],
    source: 'https://campaigns.icicibank.com/Amazon_pay_ICICI/index.html', sourceLabel: 'ICICI Bank official card page',
    note: 'No joining or annual fee; Amazon.in earns 5% for Prime members and 3% for non-Prime members, with 1% on other eligible spends.'
  },
  {
    id: 'axis-ace', issuer: 'Axis Bank', name: 'Axis Bank ACE Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-27',
    fees: { joining: 499, annual: 499, waiverThreshold: 200000, gst: true },
    rewards: { utilityGpay: 0.05, dining: 0.04, online: 0.04, defaultCashback: 0.015 },
    exclusions: ['EMI','wallet','cash withdrawal','rent','fuel surcharge transactions'],
    source: 'https://www.axisbank.com/docs/default-source/default-document-library/credit-card-tnc/terms-and-conditions-for-ace-credit-card.pdf', sourceLabel: 'Axis Bank official ACE terms',
    note: '5% cashback on utility bill payments and recharge through Google Pay; 4% on Swiggy/Zomato/Ola; 1.5% on other eligible spends.'
  },
  {
    id: 'idfc-first-millennia', issuer: 'IDFC FIRST Bank', name: 'FIRST Millennia Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-27',
    fees: { joining: 0, annual: 0, waiverThreshold: 0, gst: true },
    rewards: { onlineBase: 0.0075, onlineIncremental: 0.025, onlineThreshold: 20000, offline: 0.0075 },
    exclusions: ['fuel','insurance','EMI','cash withdrawal for threshold calculation'],
    source: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/credit-card/cc-details-image/pdf/FIRST%20Millennia%20Product%20Guide.pdf', sourceLabel: 'IDFC FIRST Bank official product guide',
    note: 'Lifetime-free card; 3X rewards on online spends up to ₹20,000 per billing cycle and 10X rewards on incremental online spends above ₹20,000; 3X on offline spends.'
  }
];

(function(){
  function enhance(){
    const cards=window.MAXCRED_CARDS,cardBox=document.getElementById('cards');
    if(cardBox){
      cardBox.innerHTML=`<div class="wallet-picker"><div class="wallet-search-row"><input id="cardSearch" class="wallet-search" type="search" placeholder="Search your cards…" autocomplete="off"><button id="clearCards" class="clear-cards" type="button">Clear</button></div><div id="cardResults" class="card-results"></div><div class="selected-label">Your cards <span>Tap to remove</span></div><div id="selectedCards" class="selected-cards"><span class="empty-wallet">No cards selected yet</span></div></div>`;
      const results=document.getElementById('cardResults'),selected=document.getElementById('selectedCards'),search=document.getElementById('cardSearch'),selectedIds=new Set();
      function hiddenChoices(){cardBox.querySelectorAll('.hidden-choice').forEach(x=>x.remove());selectedIds.forEach(id=>{const c=cards.find(x=>x.id===id);if(!c)return;const b=document.createElement('button');b.type='button';b.className='choice selected hidden-choice';b.innerHTML=`<strong>${c.name}</strong>`;b.style.display='none';cardBox.appendChild(b);});}
      function render(){const q=(search.value||'').trim().toLowerCase(),matches=cards.filter(c=>!q||(`${c.name} ${c.issuer}`.toLowerCase().includes(q)));results.innerHTML=matches.map(c=>`<button type="button" class="card-result ${selectedIds.has(c.id)?'picked':''}" data-id="${c.id}"><span><b>${c.name}</b><small>${c.issuer} · ${c.network}</small></span><i>${selectedIds.has(c.id)?'✓':'+'}</i></button>`).join('')||'<div class="no-results">No matching card found.</div>';selected.innerHTML=selectedIds.size?[...selectedIds].map(id=>{const c=cards.find(x=>x.id===id);return `<button type="button" class="card-chip" data-remove="${id}">${c.name}<span>×</span></button>`}).join(''):'<span class="empty-wallet">No cards selected yet</span>';hiddenChoices();results.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>{const id=b.dataset.id;selectedIds.has(id)?selectedIds.delete(id):selectedIds.add(id);render();});selected.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{selectedIds.delete(b.dataset.remove);render();});}
      document.getElementById('clearCards').onclick=()=>{selectedIds.clear();render();search.focus();};search.oninput=render;render();
    }
    const spendings=document.getElementById('spendings');
    if(spendings){const fields=[['Online & Shopping','online'],['Dining & Food','dining'],['Travel','travel'],['Fuel','fuel'],['UPI','upi'],['Bills & Other','utilities']];spendings.innerHTML=fields.map(([label,key])=>`<div class="spend"><label>${label}</label><input class="spend-input" data-key="${key}" type="number" min="0" inputmode="numeric" placeholder="₹0" value="0"></div>`).join('');spendings.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>{const total=[...spendings.querySelectorAll('input')].reduce((a,x)=>a+Math.max(0,Number(x.value||0)),0);document.getElementById('total').textContent='₹'+Math.round(total).toLocaleString('en-IN');}));}
    const mark=document.querySelector('.mark');
    if(mark)mark.innerHTML=`<svg viewBox="0 0 100 78" fill="none" aria-label="MaxCred flying horse logo"><path d="M10 56c18-2 29-13 34-30 2-8 1-14-2-20 12 5 21 14 24 25 8-7 18-9 29-6-6 6-11 13-13 21-4 16-18 25-34 23 6-4 9-9 10-15-10 6-20 7-30 2-5 3-11 3-18 0Z" fill="currentColor"/><path d="M42 7c-4 12-7 22-17 31" stroke="#00A79D" stroke-width="4" stroke-linecap="round"/><path d="M69 27c6 2 11 6 15 12" stroke="#F3D77A" stroke-width="3" stroke-linecap="round"/></svg>`;
    const style=document.createElement('style');style.textContent=`.cards{display:block!important;margin-top:20px}.wallet-picker{position:relative}.wallet-search-row{display:flex;gap:10px}.wallet-search{flex:1;border:1px solid var(--line);border-radius:14px;padding:14px 16px;outline:none;background:#fbfdff}.wallet-search:focus{border-color:var(--teal);box-shadow:0 0 0 4px rgba(0,167,157,.08)}.clear-cards{border:1px solid var(--line);background:#fff;border-radius:14px;padding:0 16px;font-weight:800;color:var(--muted);cursor:pointer}.card-results{margin-top:9px;border:1px solid var(--line);border-radius:15px;overflow:hidden;background:#fff;max-height:250px;overflow-y:auto;box-shadow:0 12px 30px rgba(7,26,49,.08)}.card-result{width:100%;display:flex;justify-content:space-between;align-items:center;text-align:left;border:0;border-bottom:1px solid #edf2f6;background:#fff;padding:12px 14px;cursor:pointer}.card-result:last-child{border-bottom:0}.card-result:hover,.card-result.picked{background:#fffcf2}.card-result b,.card-result small{display:block}.card-result small{color:var(--muted);margin-top:2px;font-size:11px}.card-result i{font-style:normal;font-size:20px;color:var(--teal);font-weight:900}.selected-label{display:flex;justify-content:space-between;margin-top:18px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:1px;color:var(--navy)}.selected-label span{font-weight:600;text-transform:none;letter-spacing:0;color:var(--muted)}.selected-cards{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px;min-height:34px}.card-chip{border:1px solid #ead9a0;background:#fffbf0;color:#5e4c14;border-radius:999px;padding:9px 12px;font-weight:800;cursor:pointer}.card-chip span{margin-left:7px;font-size:16px}.empty-wallet{color:var(--muted);font-size:13px;padding:7px 0}.no-results{padding:15px;color:var(--muted);font-size:13px}.spend{grid-template-columns:1fr 150px}.spend-input{font-weight:750}.mark svg{width:32px;height:32px}.mark{overflow:hidden}@media(max-width:800px){.wallet-search-row{gap:7px}.clear-cards{padding:0 12px}.spend{grid-template-columns:1fr 125px}}`;document.head.appendChild(style);
    window.loadExample=function(){const vals={online:18000,dining:7000,travel:12000,fuel:4000,upi:7000,utilities:6000};document.querySelectorAll('#spendings input').forEach(i=>i.value=vals[i.dataset.key]||0);const total=Object.values(vals).reduce((a,b)=>a+b,0);document.getElementById('total').textContent='₹'+total.toLocaleString('en-IN');};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance);else setTimeout(enhance,0);
})();
