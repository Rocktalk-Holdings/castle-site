# Schema — closed node types

| `type` | Lives in | Required frontmatter |
|---|---|---|
| object | `map/objects/` | `cluster`, `universe` (live\|leftover\|ghost), `status` (stub\|verified\|stale), `entity` |
| process | `map/processes/` | `universe`, `status` |
| ticket | `runbook/01_triage/output/` | `area`, `status` |

`status: verified` needs a date and a commit. Cards cite `path:line`. Product language and file names both appear once ("Garrison = `assets/garrison/` + section 06").
