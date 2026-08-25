# MaxCred Data Dictionary

## Core card fields
- `Issuer`: issuing bank/provider.
- `Card Name`: exact marketed card name.
- `Network`: Visa/Mastercard/Amex/RuPay/etc.
- `Primary Category`: cashback, travel, premium, fuel, UPI, co-brand, etc.
- `Annual Fee`: recurring annual fee in INR.
- `Joining Fee`: joining/issuance fee in INR.
- `Fee Waiver`: exact qualifying spend/relationship condition.
- `Income Eligibility`: published eligibility where available.
- `Base Reward Rate`: standard eligible-spend earn rate.
- `Accelerated Reward`: category/partner/milestone earn rate.
- `Cashback Rate`: cashback by category where applicable.
- `Cashback Cap`: cap period and amount.
- `Reward Cap`: points/miles cap period and amount.
- `Reward Point Value`: redemption value and unit.
- `Domestic Lounge`: visits and spend conditions.
- `International Lounge`: visits and spend conditions.
- `Fuel Surcharge Waiver`: percentage, min/max transaction and cap.
- `Forex Markup`: foreign-currency markup.
- `UPI`: UPI earn/eligibility/limits.
- `Travel Benefits`: material travel benefits.
- `Dining Benefits`: material dining benefits.
- `Milestones`: spend milestones and rewards.
- `Redemption Options`: redemption channels and fees.
- `Exclusions`: transactions/categories excluded from rewards or waiver calculations.
- `Status`: active/legacy/discontinued.
- `Change Type`: current snapshot, future change, historical, correction.
- `Last Updated`: date the record was last edited.
- `Source`: official issuer URL/document.
- `Verified Date`: date source was checked.
- `Verification Status`: verified/partial/pending.

## Term version fields
Every material term change must carry `effective_from`. When an end date is known, store `effective_to`. Never replace a prior version when a future change is announced.
