---
type: process
universe: live
status: verified
verified: 2026-09-20
commit: b0f5840
---

# Restyle

Change look through `style.css` (tokens first). Same PR/merge path as copy.

## Input → Movement → Output

- **Input:** a visual ask + current `:root`
- **Movement:** token or component CSS; two-width verify
- **Output:** new look on `main`

## Steps

1. [`../../areas/style/CONTEXT.md`](../../areas/style/CONTEXT.md)
2. Contrast check if text colors move
3. Runbook `03_verify` then `04_pr`

## Consumes / produces

- **consumes:** [design-tokens](../objects/design-tokens.md)
- **produces:** updated `style.css`

## If you change this

- **Hits:** every section that uses the token
- **Does not hit:** garrison filenames, domain

## See

- Source: `style.css`
