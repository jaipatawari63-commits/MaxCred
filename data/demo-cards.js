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
