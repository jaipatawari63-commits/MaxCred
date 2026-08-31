# MaxCred — Master Progress Tracker

_Last updated: 31 Aug 2026_

## Launch objective
Ship a polished **2–3 day free web demo** for India-wide personalized credit-card optimization: users select current cards, enter approximate monthly spending, and receive a quantified 1–3 card optimized wallet with clear reasons and fee/waiver treatment.

## Current status

| Workstream | Status | Current state | Next gate |
|---|---|---|---|
| Free web demo | 🟢 | GitHub Pages MVP deployed | End-to-end live QA |
| Card dataset | 🟡 | 7 recommendation-ready launch cards | Expand India-wide coverage after demo freeze |
| Recommendation engine | 🟢 | 1–3 card combinations, category allocation, net annual value | Validate demo scenarios |
| Fees & waivers | 🟢 | Listed fee, GST and waiver thresholds reflected | Verify edge cases |
| Spending UX | 🟢 | Airtel-specific bill input removed; core categories retained | Mobile QA |
| Results UX | 🟢 | Current vs optimized value, recommendations, best-for categories and fee treatment | Presentation polish |
| Data verification | 🟡 | Recommendation-critical fields require official source + verification date | Continue issuer research |
| India-wide expansion | 🟡 | Architecture and data principles established | Begin systematic issuer/card coverage |
| Master tracker | 🟢 | This single-page tracker is the source of launch status | Keep updated per release |

## Completed for the demo
- GitHub Pages deployment from `main`.
- Verified launch dataset with 7 recommendation-ready cards.
- Recommendation engine wired into the deployed site.
- Fee/waiver economics included in net annual value.
- Airtel bill spending field removed from the user questionnaire.
- Recommendation cards explain role, best-use categories, net annual value and effective fee status.

## Remaining launch blockers
1. Final live end-to-end QA on the public Pages build.
2. Confirm the analysis result renders reliably for realistic demo profiles.
3. Confirm fee-waiver edge cases and category exclusions behave correctly.
4. Confirm mobile layout and presentation flow.

## Next concrete launch step
**Freeze the current demo build after live QA and run one complete presentation scenario:**
`Select current cards → enter spending → Analyze → compare current/optimized value → review 1–3 card recommendation → verify fee/waiver explanation.`

If that scenario passes, the free demo is ready for presentation; India-wide card expansion continues as the next workstream rather than delaying the demo.

## Data principles
MaxCred must not invent card terms. Recommendation-critical fields need an official source, effective date, and verification status. Future term changes must be stored as date-effective versions instead of overwriting current terms.
