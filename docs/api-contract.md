# API Contract

## Endpoint

`POST ${VITE_API_URL}` (defaults to `http://192.168.1.60:8080/api/v1/additions`)

The endpoint is configured through `VITE_API_URL` so environments do not require source changes.

## Current request sent by the frontend

```json
{
  "firstNumber": "123",
  "secondNumber": "456"
}
```

The values are sent as strings even though the UI validates them as safe integers.

## Accepted success responses

The client accepts any of these response shapes:

```json
{ "sum": 579 }
```

```json
{ "result": 579 }
```

```json
{ "data": { "sum": 579 } }
```

The resolved value must be finite and numeric.

## Error behavior

- Non-2xx responses become a user-facing friendly error.
- Network failures become a user-facing friendly error.
- A response without a readable numeric total is rejected.
- Raw server messages, SQL, tokens, and request details must not be shown to users.

## Contract decisions to confirm

- README currently documents `{a,b}`, while the implementation sends `{firstNumber,secondNumber}`. Choose one contract and update both the frontend and documentation.
- Authentication must be configured securely. A bearer token must never be committed to source code; `VITE_API_TOKEN` is only suitable for local integration because browser variables are public.
- For the LAN backend, create an ignored `.env.local` with `VITE_API_TOKEN` set to the exact value configured as `ADD2NUM_API_KEY` on `192.168.1.60`, then restart Vite.
- Define the expected error response schema and HTTP status mapping.
- Use an authenticated backend proxy for production deployments.
