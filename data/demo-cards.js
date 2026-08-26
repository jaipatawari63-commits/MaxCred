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
    id: 'airtel-axis', issuer: 'Axis Bank', name: 'Airtel Axis Bank Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-26',
    fees: { joining: 500, annual: 500, waiverThreshold: 200000, gst: true },
    rewards: { airtel: 0.25, utilitiesAirtelApp: 0.10, preferredApps: 0.10, other: 0.01, airtelCapMonthly: 250, utilitiesCapMonthly: 250, preferredCapMonthly: 500 },
    exclusions: ['selected transaction categories'],
    source: 'https://www.axisbank.com/docs/default-source/default-document-library/credit-cards/terms-and-conditions-for-cashback-for-airtel-axis-bank-credit-card.pdf/1000', sourceLabel: 'Axis Bank official cashback terms',
    note: '25% Airtel bill cashback is capped at ₹250/month; 10% utility cashback via Airtel Thanks is capped at ₹250/month; preferred-app cashback is capped at ₹500/month.'
  },
  {
    id: 'axis-cashback', issuer: 'Axis Bank', name: 'Axis Bank Cashback Credit Card', network: 'Visa', recommendationReady: true, verifiedDate: '2026-08-26',
    fees: { joining: 1000, annual: 1000, waiverThreshold: 400000, gst: true },
    rewards: { defaultCashback: 0.01 }, exclusions: ['rent MCC 6513','wallet MCC 6540'],
    source: 'https://www.axisbank.com/docs/default-source/ld/axis-bank-cashback-credit-card-tnc.pdf', sourceLabel: 'Axis Bank official card terms',
    note: 'Annual fee is exempted when eligible spends reach ₹4 lakh in the anniversary year; rent and wallet MCCs are excluded from the waiver calculation.'
  }
];
