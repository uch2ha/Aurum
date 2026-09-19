# AGENTS.md

This is a personal fork of Aurum (`uch2ha/Aurum`, upstream `Zproger/Aurum`).
It exists to implement the features described in `REQUIREMENTS.md`.
General working rules live in `CLAUDE.md`; the quality/PR bar is in
`CONTRIBUTING.md`; the REST API reference is `DOCS.md`.

Rule precedence: `CLAUDE.md` (general) → this file (fork specifics). Where the
two overlap, the stricter rule wins. Do not duplicate `CLAUDE.md` here.

## What we are building
`REQUIREMENTS.md` is the source of truth for every feature to add (year income,
Objects grouping, recurring-item lifetimes, yearly observation page, what-if
scenarios, year comparison). Read it before starting any feature.

## Upstream-sync rules (most important)
The fork must stay mergeable with upstream with minimal conflicts:
- Additive only — new files, new routes/services/models, new pages/components.
  Do NOT edit, rename, move, or restructure existing files or public API shapes.
- If a shared internal must change, keep the diff minimal and isolated.
- Every new user-facing feature is gated behind a setting so it can be hidden,
  restoring near-vanilla behavior when off.
- New tables/columns use a hand-written Alembic migration; never edit existing
  tables destructively.
- Never delete or rewrite content in upstream files beyond what a feature
  strictly requires.

## Layout & conventions
Code lives in `backend/` (FastAPI), `frontend/` (React+TS), `e2e/` (Playwright).
Commands, layering, i18n (ru+en), migrations and the definition of done are in
`CONTRIBUTING.md`. Add sub-`AGENTS.md` files under `frontend/` and `backend/`
as those areas grow.

## Non-negotiable
Follow `CLAUDE.md` exactly: reply in Russian, mobile-first UI, no sensitive
data in code or commits, short commit messages with no model/session refs.