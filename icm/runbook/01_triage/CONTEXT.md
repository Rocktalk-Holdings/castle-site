# 01_triage — name the change

One job: turn the ask into a ticket that names one area.

## Inputs

- Working: the human's ask (issue, Slack, PR comment)
- Reference: ../../areas/CONTEXT.md
- Reference: ../../map/effects/CONTEXT.md
- Reference: ../../_templates/change-ticket.md

Do NOT load: product files yet. Do not start editing.

## Process

1. Copy `_templates/change-ticket.md` → `output/<slug>.md`.
2. Fill area, edit surfaces, do-not-touch, Hits / Does not hit from `effects/`.
3. If two areas are truly required, say so in the ticket — still one slug.

## Outputs

- `output/<slug>.md`

## Human check

Owner (or the stationed human) reads the ticket title and the do-not-touch list. If the ask was "fix the hero" and the ticket opens `CNAME`, stop.
