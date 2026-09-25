# Frontend API Rules

- Use the approved `POST ${VITE_API_URL}` additions endpoint only.
- Send the documented `firstNumber` and `secondNumber` request fields as strings.
- Accept only documented numeric response shapes: `sum`, `result`, or `data.sum`.
- Reject non-finite or unreadable totals.
- Do not invent response fields, endpoints, retries, or status semantics.
- Keep the endpoint configurable through Vite environment variables.
- Treat browser-exposed Vite variables as public configuration, never as a secret store.
- Convert network and non-2xx failures into friendly user-facing errors.
