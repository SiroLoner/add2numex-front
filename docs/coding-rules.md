# Frontend Coding Rules

1. Use strict TypeScript; avoid `any` and preserve explicit domain types.
2. Keep calculation and API behavior in `src/services/`, UI behavior in components, and shared shapes in `src/types.ts`.
3. Prefer small components with one clear responsibility.
4. Keep all user-visible text in `src/i18n.ts` for both `en` and `vi`.
5. Do not add a dependency when the platform or existing code is sufficient.
6. Do not expose raw server errors, request payloads, SQL, tokens, or credentials.
7. Preserve keyboard access, visible focus, labels, and live feedback for interactive UI.
8. Add a focused test for changed calculation, validation, API parsing, or state behavior.
9. Do not mutate calculation input or share mutable state between steps.
10. Review the diff for scope and run `npm run verify` before merge.
