---
type: process
universe: live
status: verified
verified: 2026-09-20
commit: b0f5840
---

# Publish

Merge to `main` is the release. GitHub Pages builds `/` and serves `castle.rocktalk.holdings`.

## Input → Movement → Output

- **Input:** a PR that passed `04_pr` human check
- **Movement:** merge → Pages build → HTTPS
- **Output:** live HTML/CSS/JS/assets

## Steps

1. Human merges (phone checklist in [`../../_shared/phone-pr-check.md`](../../_shared/phone-pr-check.md))
2. Wait for Pages `built`
3. GET `/` on the custom domain

## Consumes / produces

- **consumes:** [pages-deploy](../objects/pages-deploy.md)
- **produces:** the public site

## If you change this

- **Hits:** everything visitors fetch
- **Does not hit:** the ICM map (unless those files were in the same merge)

## See

- Source: `CNAME`; host: Pages `main` `/`
