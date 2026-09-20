# 04_pr — phone-readable pull request

One job: put the change where the owner can merge it from a phone.

## Inputs

- Working: ../03_verify/output/verify.md
- Working: the product + `icm/` diff
- Reference: ../../_shared/phone-pr-check.md

Do NOT load: a new area to "also tidy."

## Process

1. Commit only this change. Push the feature branch.
2. Open a PR against `main`. Body follows phone-pr-check.md: visitor result → files → verify → what to look at.
3. Paste changed sentences. Attach wide + phone shots if layout moved.
4. Write `output/pr.md` with the PR URL.

## Outputs

- PR on `main`
- `output/pr.md`

## Human check

Owner runs the phone checklist. Merge **is** publish. Do not merge if the PR also relocated product files.
