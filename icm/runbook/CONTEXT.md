# runbook — triage → change → verify → PR

The repeating maintenance unit is **one change**. Numbered folders are the sequence. A stage is COMPLETE when its `output/` holds a real file (not only `.gitkeep`).

| Stage | Job | Input | Output | Human check |
|---|---|---|---|---|
| [`01_triage`](01_triage/CONTEXT.md) | name the area and the surfaces | the ask | `output/<slug>.md` | owner agrees the ticket is the ask |
| [`02_change`](02_change/CONTEXT.md) | edit only those surfaces | the ticket | note + product diff | — (gate is at 03/04) |
| [`03_verify`](03_verify/CONTEXT.md) | prove the page still works | the diff | `output/verify.md` | a person can repeat the checks |
| [`04_pr`](04_pr/CONTEXT.md) | open a phone-readable PR | verify note | PR URL | owner reads and merges |

Factory (every run): [`../_shared/`](../_shared/)
Product (this run): each stage's `output/`

Nothing advances until a person has read the last output. Merge to `main` publishes.
