---
type: object
cluster: design
universe: live
status: verified
entity: style.css
verified: 2026-09-20
commit: b0f5840
---

# Design tokens

`:root` in `style.css` — the factory for color, space, and type. One accent.

## Why this shape

Severe Swiss, operational. Changing a token should retint the page. One-off hexes exist only where Drew asked (eyebrow `#A8C6DE`).

## Shape

- Ground / text / accent — `style.css:13`
- 8pt spacing — `style.css:25`
- Type scale + hero clamp — `style.css:37`
- Reduced-motion wipe — `style.css:67`
- Leftover: `.hero-eyebrow` — `style.css:206` (no matching HTML)

## Connected to

- **owned-by:** every styled block
- **looks-like-but-is-not:** inline SVG fills in Fig. 1/2 (those hexes are duplicated in the SVG)

## If you change this

- **Hits:** the whole page look; contrast of muted body (`5c9757d`)
- **Does not hit:** HTML section order, JS observers, `CNAME`

## Surfaces

| Surface | Role |
|---|---|
| visitor | sees |
| agent | `icm/areas/style` |

## See

- Source: `style.css:11`
