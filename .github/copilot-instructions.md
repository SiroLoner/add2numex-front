# Add2NumEx Copilot Instructions

- Treat `docs/frontend-spec.md` as the source of truth for user-visible behavior.
- Treat `docs/api-contract.md` as the source of truth for the backend integration.
- Use TypeScript, React, and the existing Vite setup; do not introduce a framework or dependency without a task requirement.
- Keep calculation rules in `src/services/` and presentation concerns in `src/components/`.
- Do not invent API fields, endpoints, authentication behavior, or business rules.
- Never hardcode tokens, credentials, personal data, or private endpoints.
- All user-facing text belongs in `src/i18n.ts` and must support English and Vietnamese.
- Validate user input at the UI boundary and preserve friendly, non-technical error messages.
- Add or update focused tests for changed behavior, then run `npm run verify`.
- AI-generated changes require human review of the diff and verification output.
