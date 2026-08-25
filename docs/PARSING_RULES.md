# MaxCred Parsing Rules

1. Prefer official issuer pages, MITC, KFS, card-specific T&Cs and official benefit documents.
2. Capture the exact numeric mechanic: rate, denominator, cap, period, category and eligibility condition.
3. Separate permanent card economics from temporary promotions/offers.
4. Record exclusions explicitly; never assume an uncited category is eligible.
5. Store fee waiver thresholds separately from annual fee.
6. Store reward/cashback caps with their period (monthly, statement cycle, quarterly, annual, etc.).
7. Store redemption value and redemption fees separately from earn rate.
8. For lounge access, capture visit count plus spend/eligibility condition and network where relevant.
9. For forex/fuel/UPI, capture both rate and applicable limits/conditions.
10. If a source is ambiguous, mark the field pending rather than guessing.
11. If a future change is announced, create a future dated version; do not overwrite the current version.
12. A card is recommendation-ready only after all critical economics are verified or explicitly marked not applicable.
13. Every parsed record must include source, verified date and verification status.
