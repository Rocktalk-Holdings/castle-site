# _templates/ — copy, then instantiate

New work is a copy of a template, not a blank page. Fill the copy; leave these files blank.

| Template | Becomes |
|---|---|
| [`area-CONTEXT.md`](area-CONTEXT.md) | `icm/areas/<name>/CONTEXT.md` |
| [`change-ticket.md`](change-ticket.md) | `icm/runbook/01_triage/output/<slug>.md` |
| [`object.md`](object.md) | `icm/map/objects/<card>.md` |
| [`process.md`](process.md) | `icm/map/processes/<card>.md` |

## Process

1. Copy the template to the destination path.
2. Replace `{braces}`.
3. Add one row to the shelf's `CONTEXT.md` or `objects/_index.md`.
4. Do not edit the template in place to "save a step."
