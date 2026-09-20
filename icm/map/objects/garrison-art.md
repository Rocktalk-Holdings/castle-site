---
type: object
cluster: assets
universe: live
status: verified
entity: assets/garrison/
verified: 2026-09-20
commit: b0f5840
---

# Garrison art

Approved JPG portraits for section `06`. Product: "the garrison" / buddy faces. Files: `assets/garrison/{logo,tech,furry}*.jpg`.

## Why this shape

Drew's art law (`59b379b`): SVG buddy recreations are forbidden. SVG stays for chrome (favicon, arrow, diagrams). Faces are square crops in a 3×2 / 6×1 strip.

## Shape

- Six cards, `img src="assets/garrison/…"` — `index.html:554`
- Files: `logo-00.jpg`, `logo-04.jpg`, `tech-01.jpg`, `tech-07.jpg`, `furry-00.jpg`, `furry2-09.jpg`
- Chrome (allowed SVG): `assets/favicon.svg`

## Connected to

- **joins:** [page-copy](page-copy.md) names (Ash, Cleo, Pax, Nova, Rex, Sol)
- **looks-like-but-is-not:** [architecture-figures](architecture-figures.md), [og-share-image](og-share-image.md)

## If you change this

- **Hits:** the character strip, alt text, filenames if you do not keep them
- **Does not hit:** constitution copy, tokens, domain

## Surfaces

| Surface | Role |
|---|---|
| visitor | sees faces |
| agent | `icm/areas/assets` |
| owner | rejects unofficial renders |

## See

- Source: `assets/garrison/`, `index.html` section `06`
