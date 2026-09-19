# Requirements — Personal Year Money Flow Tracker (Aurum fork)

Base app: Aurum (existing features — accounts, transactions, categories,
budgets, recurring items, net worth, goals, CSV import — are kept as-is
and are NOT re-specified here). Everything below is new/changed behavior
to add on top.

## 1. Year income
- Define recurring income sources (e.g. salary): amount + frequency
  (monthly/weekly/yearly), auto-projected across the year
  (e.g. 2000€/mo × 12 = 24000€/yr).
- Support a different amount in specific months (manual override per
  month) without breaking the yearly projection.
- Support one-off income (gifts, bonuses) added to the year total without
  being recurring.

## 2. Objects (spending owners)
- New grouping entity, separate from existing Category: an "Object"
  represents who/what the spending is for (e.g. Me, Fiancée, Dog, Car,
  Family — user-defined, not a fixed list).
- Each Object contains multiple recurring items, each with its own
  Category (e.g. Object "Me" → Category "Gym" → 100€/week).
- View: per-Object monthly and yearly total spend.

## 3. Recurring item lifetimes
- Every recurring income/expense item supports a start date and an
  optional end date (e.g. a 1-year gym membership stops being counted
  after its end date; no end date = runs indefinitely).
- Existing recurring items without a lifetime keep running indefinitely
  (backward compatible).

## 4. Yearly observation page
- Single page/view per year showing:
  - Year income (total, projected from recurring + one-off + overrides)
  - Year outgoing so far (actual, from real recorded transactions)
  - Year outgoing total (actual so far + projected remaining recurring
    occurrences respecting lifetimes)
  - Year money left at year end (income − outgoing total)
- Must reconcile real recorded transactions with recurring-item
  projections without double-counting.

## 5. What-if scenarios
- Let the user add a hypothetical recurring or one-off item (e.g. "car
  loan, 333€/mo") and see its impact on the year-end money-left figure,
  without committing it as a real item.

## 6. One-time transactions
- Already covered by Aurum's existing transaction feature — reuse as-is,
  no changes required.

## 7. Year comparison (inspired by Ocular)
- View this year vs. previous year(s) side by side (income, expenses,
  ending balance) — brought over from Ocular's Compare page since Aurum
  has no year-over-year view today.

## 8. Currency
- Keep Aurum's existing single-currency behavior as-is. No multi-currency
  work required.

## 9. Non-functional
- All of the above must be toggleable/hideable via a setting (see
  AGENTS.md fork requirements) so the app can behave like vanilla Aurum
  when the toggle is off.
- No prioritization/phasing is defined here — sequencing is decided at
  implementation-planning time.