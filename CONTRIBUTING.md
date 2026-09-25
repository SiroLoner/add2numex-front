# Contributing

Use a branch named `feature/WO-<issue-id>-<short-description>`, `fix/WO-<issue-id>-<short-description>`, or `spike/WO-<issue-id>-<short-description>`. Do not push directly to the default branch.

Every pull request must link an issue or specification, pass CI, and receive at least one human review. AI-generated code and documentation are proposals until a human verifies the behavior, diff, tests, and security implications.

After a pull request is merged, keep the source branch on the remote. Delete a branch only when its owner explicitly requests deletion.

Do not place API keys, passwords, credentials, customer data, or private tokens in prompts, source files, issues, or commits. Run `npm run verify` before opening a pull request.
