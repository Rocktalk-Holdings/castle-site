# Stationed-agent cold start

You have no memory of this repo. Orient in three reads, then stop loading.

## Read 1 — root catalog

Open [`../AGENTS.md`](../AGENTS.md). Answer: what is this, where does the page live, where do I go for this task.

## Read 2 — this map's catalog

Open [`CONTEXT.md`](CONTEXT.md). Answer: which shelf (areas / map / runbook) matches the task. Note the name collisions so you do not edit the metaphor when you meant the file.

## Read 3 — one contract

| Task sounds like | Open |
|---|---|
| change words, colors, motion, pictures, or the domain | the matching file under [`areas/`](areas/) |
| what is X / what else moves if I touch X | [`map/CONTEXT.md`](map/CONTEXT.md) then **one** card |
| do the change end to end | [`runbook/01_triage/CONTEXT.md`](runbook/01_triage/CONTEXT.md) |
| I am a human, not an agent | still this file; then the area; then open a PR |

Do not crawl `icm/` after that. Load `_shared/` only when the contract you opened lists it.

## Hard stops (every session)

- Do not mass-move `index.html`, `style.css`, `castle.js`, `CNAME`, or `assets/`.
- Do not add a bundler, framework, or build step.
- Do not redraw buddy characters as SVG (art law: SVG is chrome only).
- Do not invent a second accent color or a castle-tower illustration.
- Do not change `CNAME` unless the human named the domain task.
- Status of a maintenance run = whatever exists in `runbook/*/output/`.
- Merge only after the human gate in [`runbook/04_pr/CONTEXT.md`](runbook/04_pr/CONTEXT.md).
