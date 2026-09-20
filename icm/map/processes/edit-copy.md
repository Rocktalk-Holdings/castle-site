---
type: process
universe: live
status: verified
verified: 2026-09-20
commit: b0f5840
---

# Edit copy

A human (or agent) changes marketing sentences in `index.html` and a person merges the PR.

## Input → Movement → Output

- **Input:** a named section + [`../../_shared/voice-and-art.md`](../../_shared/voice-and-art.md)
- **Movement:** edit HTML text; PR; phone read
- **Output:** new sentences on `main` (then the live host)

## Steps

1. Contract: [`../../areas/copy/CONTEXT.md`](../../areas/copy/CONTEXT.md)
2. Ticket from [`../../_templates/change-ticket.md`](../../_templates/change-ticket.md)
3. Run [`../../runbook/CONTEXT.md`](../../runbook/CONTEXT.md)

## Consumes / produces

- **consumes:** [page-copy](../objects/page-copy.md)
- **produces:** updated `index.html` on `main`

## If you change this

- **Hits:** visitor-facing claims
- **Does not hit:** `CNAME`, JPG bytes

## See

- Source: `index.html`
