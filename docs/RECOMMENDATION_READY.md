# Recommendation-Ready Standard

A card can be used by the production recommendation engine only when these critical fields are verified or explicitly N/A:

- annual/joining fee
- fee waiver condition
- base reward/cashback mechanic
- accelerated/category rewards
- reward/cashback caps
- material exclusions
- redemption value and fees where applicable
- major eligibility constraints
- lounge conditions where used in ranking
- forex/fuel/UPI rules where relevant to the user's spend
- source URL/document
- verified date
- active/current status

## Safety rule
If a critical value is missing, the engine must not invent or estimate it. The card is `NOT_RECOMMENDATION_READY` until verified.

## Demo rule
The public demo may launch with a verified subset. Database completeness is not a prerequisite for launch, but recommendation accuracy is.
