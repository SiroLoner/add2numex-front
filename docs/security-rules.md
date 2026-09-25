# Frontend Security Rules

- Never commit API keys, bearer tokens, passwords, private URLs, certificates, or customer data.
- Do not rely on a browser environment variable to protect a secret; use a backend proxy for production credentials.
- Validate numbers before sending them and reject empty, negative, decimal, or unsafe values.
- Do not render raw server messages or response payloads to users.
- Use `JSON.stringify` for request bodies and avoid constructing URLs or code from user input.
- Keep dependency and secret checks in CI.
- Review accessibility and error states so security failures do not become misleading success states.
