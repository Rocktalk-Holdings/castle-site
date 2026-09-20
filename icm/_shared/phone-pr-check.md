# Human MD / PR check (factory)

Owner often reviews on a phone. The PR is the edit surface they will actually read.

## Agent writes

- Title: what changed on the live page, in one line.
- Body, in this order: **what a visitor will see** → **files** → **how you verified** → **what the owner should look at**.
- Paste changed sentences (not just "updated copy").
- Attach one desktop and one phone screenshot when layout or color moved.
- Call out `CNAME`, `mailto:`, or constitution wording in bold if those moved.

## Human does (on the phone)

1. Read the pasted sentences. If one would sound wrong in a sales meeting, comment and do not merge.
2. Open the screenshots. Check contrast and that no section is blank.
3. If the diff is only `icm/` or Markdown, confirm no product file moved.
4. Merge to `main` only when this check is done. Pages publishes `main` `/` — merge **is** deploy.

## Do not merge

- Framework / bundler additions.
- Product files relocated "for ICM."
- SVG buddy redraws.
- Domain or mailbox changes without an explicit ask in the PR title.
