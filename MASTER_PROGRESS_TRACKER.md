# MaxCred — India-wide Personalized Credit-Card Optimization

**Last updated:** 30 Aug 2026  
**Launch target:** 2–3 day free web demo

## 1. Executive status

| Workstream | Status | Current state | Next action |
|---|---|---|---|
| Free web demo | 🟢 | Live GitHub Pages build with optimizer flow | Final end-to-end QA and demo freeze |
| Card dataset | 🟡 | 7 verified launch cards | Expand issuer/card coverage after demo freeze |
| Recommendation engine | 🟢 | 1–3 card combinations, category allocation, net annual value | Validate edge cases against known examples |
| Fees & waivers | 🟢 | Listed fee, GST treatment and waiver thresholds incorporated | Continue source verification as cards expand |
| Spending inputs | 🟢 | Core categories; Airtel-specific bill input removed | Keep inputs simple for demo |
| Results UX | 🟢 | Current vs optimized value, gain, recommendations and fee explanation | Final polish only |
| Master progress tracker | 🟢 | This single-page tracker | Keep updated as launch gates move |

## 2. Completed

- GitHub Pages demo deployed.
- Analysis engine connected to the web app.
- Launch dataset expanded to 7 recommendation-ready cards.
- Card-specific reward logic implemented for the launch set.
- Annual fees and waiver thresholds incorporated into net-value calculations.
- Airtel bill-specific spending field removed.
- Recommendation results redesigned to explain primary/accelerator role, best-fit categories, net annual value and effective fee treatment.
- Demo flow supports current-wallet vs optimized-wallet comparison.

## 3. Current progress

### Demo
The demo is in **final QA / presentation-readiness**, not feature-expansion mode. The intended flow is:

**Select current cards → enter monthly spending → Analyze → compare current vs optimized value → review recommended 1–3 card wallet.**

### Data
The launch dataset is intentionally limited to verified cards. The current seven-card set includes SBI Cashback, Airtel Axis, Axis Cashback, HDFC Millennia, Amazon Pay ICICI, Axis ACE and IDFC FIRST Millennia.

### Product positioning
The free demo is designed to demonstrate the core proposition before the larger India-wide card universe is loaded: **MaxCred turns a user's spending pattern and current wallet into a higher-value card strategy while accounting for fees, waivers, caps and exclusions.**

## 4. Blockers / risks

- **No technical launch blocker currently identified in source code.**
- Final live QA is still required before calling the demo fully presentation-ready.
- The dataset is not yet India-wide; breadth is the main post-demo expansion item.
- Card terms can change, so issuer-source verification must continue as coverage expands.
- Recommendation economics should be validated with representative spending profiles before public claims are made.

## 5. Next concrete launch step

**Freeze and QA the 2–3 day free web demo end-to-end.**

Launch gate checklist:

- [ ] All 7 launch cards render on the live site.
- [ ] Card selection works reliably.
- [ ] Spending inputs calculate totals correctly.
- [ ] Analyze action renders results every time.
- [ ] Current vs optimized values are populated.
- [ ] Fee-waiver treatment is visible and logically consistent.
- [ ] Recommendations explain why each card is selected.
- [ ] Mobile layout passes a quick usability check.
- [ ] Demo URL is presentation-ready.

**After this gate:** begin India-wide card expansion and source-verification workflow without destabilizing the frozen demo.
