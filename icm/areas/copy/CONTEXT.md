# Area — copy

One job: change the words on the page.

## Inputs

- Working: ../../../index.html (only the section named in the ticket)
- Reference: ../../_shared/voice-and-art.md
- Reference: ../../_shared/verify.md

Do NOT load: `style.css`, `castle.js`, `assets/`, the whole `map/objects/` folder.

## Edit surfaces

- `index.html` section comments `00`–`08` (nav, hero, problem, answer, anatomy, architecture, day, garrison, constitution, commission, footer)
- `<title>`, meta description, Open Graph / Twitter text
- Anatomy table cell copy; diagram `aria-label` + HTML comments if the words in the figure change

## Do not touch

- Inline SVG geometry (that's copy-adjacent but owned by the figure). Class names. `src=` on garrison images. `CNAME`. `mailto:` unless the ticket names the mailbox.

## Process

1. Open the named section in `index.html`.
2. Change the sentences. Keep martial nouns from voice-and-art.md.
3. If you add a heading, keep the `label-mono` numbering consecutive.

## Outputs

- Edited `index.html`
- Ticket update in `icm/runbook/02_change/output/` when this is a full run

## Verify

- Serve repo root. Scroll the section. `#commission` still jumps.
- No leftover placeholder text. Section ids still match nav / CTA hrefs.

## Human check

Owner reads the **pasted new sentences** in the PR on a phone. If a line would sound wrong in a sales meeting, edit in place before merge.
