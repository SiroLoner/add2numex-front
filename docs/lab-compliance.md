# Applicable Lab Coverage

This frontend applies the repository governance, context, implementation, testing, and security criteria from Labs 1.1-5.2. Backend-only criteria such as domain aggregates, database DDL, OAuth authorization design, and production E2E deployment are out of scope because `frontend-spec.md` explicitly excludes them.

## Implemented

- Lab 1.1: README, CONTRIBUTING, issue templates, pull request template, docs, source, tests, scripts, and CI structure.
- Lab 1.2: `.copilotignore`, UI/Data/API decomposition in the existing specification, dependency and directory guardrails, and documentation-only PR disclosure.
- Lab 2.1: coding, API, and security Rules Pack plus an AI change scorecard.
- Lab 2.2: workspace Copilot instructions, source-of-truth documents, bilingual UI rule, and review constraints.
- Lab 3.1-3.2: existing frontend specification, API contract, scoped React services/components, and focused tests.
- Lab 4.1: Vitest test harness, repeatable `npm test`/`npm run verify`, and CI workflow.
- Lab 4.2: secret exclusion, dependency audit in CI, input/error disclosure rules, and API configuration hardening.

## Not applicable

- Domain models and database schema: no persistence or business domain exists in this frontend.
- Backend authentication/authorization: explicitly out of scope; production credentials must be handled by a backend proxy.
- Full E2E browser infrastructure, RCA, and close-out evidence: require a deployed backend and a completed feature incident; templates can be added when that workflow exists.
