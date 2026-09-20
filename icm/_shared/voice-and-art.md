# Voice and art (factory)

Source of truth is the live page plus these commit laws. This file does not replace `index.html`.

## Voice

- Martial and operational, not cute and not SaaS-bro.
- Recurring nouns: keep, keys, banner, walls, garrison, buddy, squire, knight, cabinet, ledger, glass, muster, marching orders, the line.
- "Evolv Buddies is Castle in Evolv's colors." Do not invert that (Castle is not a skin of Evolv).
- Constitution tone: coaching offered, never imposed; the model never holds the keys.
- CTA is "Commission your Castle" → `mailto:drew@rocktalk.holdings` unless Drew changes it.

## Art

- Severe / Swiss. Near-black ground `#0A0A0B`, warm off-white text `#F0EDE8`, **one** steel accent `#4A7FA5`.
- Type-only hero. No tower illustration. No decorative castle drawing after the 2026-08 corporate rebrand (`6855940`).
- Buddy faces are **approved JPG renders** in `assets/garrison/`. SVG is for non-character chrome only (favicon, CTA arrow, architecture diagrams). Do not recreate characters as SVG.
- Architecture figures are inline SVG in `index.html`. They must stay readable if JS fails (diagrams are visible by default; JS may add `.will-reveal`).
- Muted body text was darkened to clear 4.5:1 (`5c9757d`). Do not lighten `--clr-text-muted` without a contrast check.
- Section eyebrows were brightened to `#A8C6DE` (`91412ed`). Do not silently revert to the accent token.

## Looks-like-but-is-not

- A "more friendly" palette, a second accent, or a stock castle photo is a different product. Refuse it unless the human asked for a rebrand.
