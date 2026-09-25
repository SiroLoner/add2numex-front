# Add2NumEx Documentation

This directory is the working documentation source for the Add2NumEx frontend.

## Documents

- [Frontend specification](./frontend-spec.md): user flow, UI behavior, validation, and states.
- [API contract](./api-contract.md): current integration contract and known inconsistencies to resolve.
- [Code generation prompt](./code-generation-prompt.md): reusable context and constraints for AI-assisted changes.
- [Coding rules](./coding-rules.md): TypeScript, React, accessibility, and review rules.
- [API rules](./api-rules.md): frontend contract and response handling rules.
- [Security rules](./security-rules.md): secret, input, and error disclosure controls.
- [AI scorecard](./ai-scorecard.md): review checklist for AI-assisted changes.
- [Lab compliance](./lab-compliance.md): applicable and intentionally skipped lab criteria.

## Source of truth

- Product behavior and UI flow: `frontend-spec.md`.
- Backend integration: `api-contract.md`.
- Code conventions: the existing TypeScript configuration and surrounding source code.

Documentation describes the intended and observed behavior. It does not authorize adding new features or changing the API contract without an explicit decision.
