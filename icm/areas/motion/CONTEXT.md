# Area — motion

One job: change how the page reveals or reacts, without restyling it.

## Inputs

- Working: ../../../castle.js
- Working (class names only): ../../../style.css (`.anatomy-table`, `.arch-svg`, `.will-reveal`, `.visible`)
- Reference: ../../_shared/verify.md

Do NOT load: garrison assets, copy sections, `CNAME`.

## Edit surfaces

- `castle.js`: `initAnatomyReveal`, `initNavScroll`, `initOffscreenPause`, `initDiagramReveal`
- CSS classes those functions toggle — only if the ticket says the motion is broken

## Do not touch

- Copy. Tokens. A new animation library. Removing the reduced-motion early-return.

## Leftover (live risk)

`initAnatomyReveal` references `svgs` (`castle.js:21`) before any `svgs` exists in that function. On a normal visit this throws and can leave anatomy rows at `opacity: 0`. Diagrams were later made fail-safe (visible unless JS adds `.will-reveal`). If you touch motion, fix or isolate that line — do not copy the bug into a new helper.

## Process

1. Keep the IIFE + `'use strict'`. No frameworks.
2. Prefer IntersectionObserver + a class. Reduced-motion = add `.visible` and return.
3. Diagrams must remain visible if JS never runs.

## Outputs

- Edited `castle.js` (and CSS only if the class contract changed)

## Verify

- Console clean on load. Scroll the anatomy table and Fig. 1 / Fig. 2.
- Toggle reduced-motion: nothing stays invisible.

## Human check

Owner watches a short screen recording, or two screenshots: mid-scroll anatomy visible, diagrams visible with JS disabled (or described as such).
