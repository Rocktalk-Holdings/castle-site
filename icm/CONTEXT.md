# icm/ — Castle site maintenance map

One job: route a later agent (or a human on a phone) to the one shelf that matches the task. The site files at repo root stay the source of truth. Cards and contracts cite them. This folder is not a second spec.

Form: **System map** + a four-stage maintenance pipeline. Product code was not moved.

## Universes

| Mark | Meaning |
|---|---|
| **live** | In force. Edit and cite these. |
| **leftover** | Still on disk, not the main path. Touch only if that path is in scope. |
| **ghost** | Named or linked, not present (or not wired). Do not implement against these. |

## Name collisions

| Word | In the product | In this repo |
|---|---|---|
| Castle | the sovereign AI-workforce install | this marketing site |
| Keep | the brains fortress | a row + a box in the anatomy / Fig. 1 SVG |
| Garrison | the working staff (buddies) | the character-strip section + `assets/garrison/` |
| Cabinet | the buddy's file home | a box in Fig. 1 |
| Context | the model's working set | every `CONTEXT.md` (routing, not essay) |

## Route (do not slurp)

| Shelf | Open when | Then |
|---|---|---|
| [`COLD-START.md`](COLD-START.md) | first load, stationed agent | stop after one more file |
| [`areas/CONTEXT.md`](areas/CONTEXT.md) | you will edit the site | that area's `CONTEXT.md` |
| [`map/CONTEXT.md`](map/CONTEXT.md) | you need "what is X / what else moves" | one object or process card |
| [`runbook/CONTEXT.md`](runbook/CONTEXT.md) | you are executing a change | `01_triage` → `04_pr` |
| [`_templates/CONTEXT.md`](_templates/CONTEXT.md) | new area, ticket, or card | copy, then fill |
| [`_shared/`](_shared/) | factory rules (voice, verify, phone PR) | load only what the contract names |

Do NOT load: the whole `map/objects/` folder, other areas, or prior runbook `output/` unless the stage contract names them.
