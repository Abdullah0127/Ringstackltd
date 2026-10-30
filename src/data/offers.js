export const offers = [
  { id: 1, title: "HS INTERNET/CABLE IB SPANISH T3", campaignType: "CPA", productType: "Inbound Call", industry: "Insurance", vertical: "Internet/Cable", paymentTerms: "Weekly - Net 7", payoutMethod: "Pay Per Transfer Duration", payout: "$19", states: "CA,TX,FL", schedule: "Mon-Fri 9-5", bufferSeconds: 300, dateAvailable: "2025-05-14" },
  { id: 2, title: "INS ACA/IB EDM T4", campaignType: "CPL", productType: "Inbound Call", industry: "Insurance", vertical: "ACA Health Insurance", paymentTerms: "Biweekly - Net 15", payoutMethod: "Revenue Share", payout: "$55", percentage: 60, states: "All", schedule: "Mon-Sun", dateAvailable: "2026-05-19" },
  { id: 3, title: "AUTO INSURANCE LIVE TRANSFER T2", campaignType: "CPA", productType: "Live Transfer", industry: "Insurance", vertical: "Auto Insurance", paymentTerms: "Weekly - Net 7", payoutMethod: "Pay Per Call", payout: "$40", states: "All", schedule: "Mon-Fri", dateAvailable: "2026-01-10" },
  { id: 4, title: "MORTGAGE TRAFFIC CAMPAIGN", campaignType: "CPL", productType: "Traffic", industry: "Financial Services", vertical: "Mortgage", paymentTerms: "Monthly", payoutMethod: "Revenue Share", payout: "$25", states: "US", schedule: "Daily", dateAvailable: "2026-02-01" },
  { id: 5, title: "LEGAL FORM FILL CAMPAIGN", campaignType: "CPL", productType: "Form Fill", industry: "Legal", vertical: "Personal Injury", paymentTerms: "Biweekly", payoutMethod: "Pay Per Lead", payout: "$35", states: "CA,NY", schedule: "Mon-Fri", dateAvailable: "2026-03-15" },
];
export const filterOptions = {
  campaignTypes: ["CPA","CPL"],
  productTypes: ["Inbound Call","Traffic","Live Transfer","Form Fill"],
  industries: ["Legal","Real Estate","Home Services","Travel","B2B","Health/Wellness","Insurance","Financial Services","Consumer Incentive/Rewards"],
  verticals: ["Internet/Cable","ACA Health Insurance","Auto Insurance","Mortgage","Personal Injury"]
};
