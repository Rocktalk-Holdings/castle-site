# Area — style

One job: change look and layout without rewriting the story.

## Inputs

- Working: ../../../style.css
- Reference: ../../_shared/voice-and-art.md
- Reference: ../../_shared/verify.md

Do NOT load: garrison JPGs, `CNAME`, runbook history.

## Edit surfaces

- `style.css` `:root` tokens (`--clr-*`, `--sp-*`, `--t-*`)
- Section layout blocks (search the component comment: Nav, Hero, Problem, Anatomy, …)
- Reduced-motion and `(hover: none)` overrides

## Do not touch

- A second accent color. Lightening `--clr-text-muted` without a 4.5:1 check. Reverting `.label-mono` to the accent token. Adding a tower / illustration background. Moving CSS into a framework. `index.html` copy.

## Process

1. Prefer a token change over a one-off hex.
2. Keep the 8pt grid and 1px rule furniture.
3. Anatomy rows stay `opacity: 0` until `.visible` — if you change that, also read the motion area (fail-safe: rows must not stay blank if JS throws).

## Outputs

- Edited `style.css`

## Verify

- Desktop and ~390px. Reduced-motion: anatomy + diagrams visible.
- Eyebrows still `#A8C6DE` unless the ticket asks to change them.

## Human check

Owner opens the two screenshots (wide + phone) in the PR. Reject if type feels decorative or the page gained a second color story.
