# MaxCred

India-wide personalized credit-card optimization platform.

## Launch objective
Build a free web demo that lets a user enter spending patterns, select current cards, and receive an optimized 1–3 card wallet with quantified annual value and clear reasons.

## Data principle
MaxCred must never invent card terms. Every recommendation-critical field must have an official source, an effective date, and a verification status. Missing critical data keeps a card out of the recommendation engine.

## Repository structure
- `data/` — canonical card data, current terms, future/historical changes, sources and progress exports
- `docs/` — data dictionary, parsing rules, recommendation-ready criteria and update workflow
- `scripts/` — parsing/validation utilities
- `app/` — web application
- `tests/` — automated data and recommendation tests

## Term versioning
Card terms are date-effective. Current terms are never overwritten when a future change is announced. Example: Axis terms effective before 28-Aug-2026 remain separate from terms effective 28-Aug-2026.

## Recommendation-ready rule
A card may enter the recommendation engine only when all critical economics are verified or explicitly marked not applicable: fees/waiver, reward/cashback mechanics, caps, exclusions, redemption/value, eligibility and relevant benefits.

## Data update workflow
1. Research official issuer source.
2. Record the exact source and verification date.
3. Parse the term into structured fields.
4. If a future effective date exists, create a new dated version instead of overwriting the current record.
5. Run validation checks.
6. Update progress and change log.
7. Only verified cards enter recommendation calculations.

## Demo deployment
The launch MVP is deployed through GitHub Pages from `main` using the workflow in `.github/workflows/pages.yml`.
