# MaxCred — Master Progress Tracker

_Last updated: 01 Sep 2026_

## Launch objective
Ship a polished **2–3 day free web demo** for India-wide personalized credit-card optimization: users select current cards, enter approximate monthly spending, and receive a quantified 1–3 card optimized wallet with clear reasons and fee/waiver treatment.

## Current status

| Workstream | Status | Current state | Next gate |
|---|---|---|---|
| Free web demo | 🟢 | GitHub Pages MVP deployed | End-to-end live QA + release freeze |
| Card dataset | 🟡 | 7 recommendation-ready launch cards | Expand India-wide coverage after demo freeze |
| Recommendation engine | 🟢 | 1–3 card combinations, category allocation, net annual value | Validate demo scenarios |
| Fees & waivers | 🟢 | Listed fee, GST and waiver thresholds reflected | Verify edge cases |
| Spending UX | 🟢 | Airtel-specific bill input removed; core categories retained | Mobile QA |
| Results UX | 🟢 | Current vs optimized value, recommendations, best-for categories and fee treatment | Presentation polish |
| Data verification | 🟡 | Recommendation-critical fields require official source + verification date | Continue issuer research |
| Excel ↔ GitHub sync | 🟢 | Current 7-card demo dataset reconciled to synchronized Excel master | Enforce sync on every future release |
| India-wide expansion | 🟡 | 376-card master universe retained; systematic recommendation-ready coverage still pending | Begin priority issuer/card verification |
| Codex development | 🟡 | Planned next development layer | Connect Codex to MaxCred repo after demo freeze |
| Social launch kit | 🟡 | Launch messaging/assets to be prepared in parallel | Finalize after demo freeze |
| Email/conversation kit | 🟡 | Outreach sequence to be prepared in parallel | Finalize after demo freeze |
| Advertising readiness | 🟡 | Reserved product space planned; monetization not active | Add non-influential placement framework later |
| Master tracker | 🟢 | This single-page tracker is the source of launch status | Keep updated per release |

## 3-day free-demo launch plan

### Day 1 — Product stability
- Complete live end-to-end QA.
- Fix card visibility, analysis rendering and recommendation issues.
- Verify annual-fee waiver and exclusion calculations.
- Verify Excel ↔ GitHub synchronization.
- Complete desktop/mobile presentation QA.

### Day 2 — Launch preparation
- Freeze demo candidate build.
- Prepare LinkedIn, Instagram, X and Facebook launch copy/assets.
- Prepare WhatsApp/shareable short message.
- Prepare email announcement, direct outreach, follow-up and feedback messages.
- Add lightweight feedback/issue capture.
- Confirm analytics/usage tracking required for the free demo.

### Day 3 — Public launch
- Publish the free demo publicly.
- Distribute social launch content.
- Begin direct email/conversation outreach.
- Track user feedback, bugs, usage and conversion signals.
- Prioritize rapid fixes without destabilizing the demo.

## Completed for the demo
- GitHub Pages deployment from `main`.
- Verified launch dataset with 7 recommendation-ready cards.
- Recommendation engine wired into the deployed site.
- Fee/waiver economics included in net annual value.
- Airtel bill spending field removed from the user questionnaire.
- Recommendation cards explain role, best-use categories, net annual value and effective fee status.
- Current GitHub demo card records reconciled against the Excel master and a synchronized Excel deliverable created on 01 Sep 2026.

## Database control rule
**Excel master is the canonical source of truth.** No card-term change should be promoted to the GitHub recommendation dataset unless it is represented in the master and supported by the required official source/verification fields. A future release should be blocked when Excel and GitHub card records do not reconcile.

## Codex development rule
Codex will be used for structured repository development, automated tests, synchronization tooling and deployment checks. It must not independently alter card economics; verified master data remains authoritative.

## Social and email launch rule
Prepare launch materials before public release, but do not publish/send on the user's behalf without approval. Messaging should position MaxCred as a personalized optimizer, not a generic "best credit cards" list.

## Advertising rule
Reserve UI space and architecture for future sponsored/partner placements, but **do not activate advertising during the free-demo launch**. Paid placement must never influence the recommendation engine or ranking.

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
