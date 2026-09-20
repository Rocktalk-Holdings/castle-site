---
type: object
cluster: page
universe: live
status: verified
entity: index.html
verified: 2026-09-20
commit: b0f5840
---

# Architecture figures

Two inline SVGs in section `04`: Fig. 1 inside one Castle; Fig. 2 a castle per customer. Not the anatomy `<table>`.

## Why this shape

The metaphor is the org chart. Figures are HTML, not image files, so text can be brightened without exporting art. They stay painted if JS never runs (`style.css` comment at the `.will-reveal` rule).

## Shape

- Fig. 1 `svg.arch-svg` viewBox `0 0 620 400` — `index.html:254`
- Fig. 2 viewBox `0 0 380 340` — `index.html:374`
- HTML comments + `aria-label` are the text alternative
- Reveal class: `.will-reveal` / `.visible` — `style.css:522`, `castle.js:75`

## Connected to

- **joins:** [page-copy](page-copy.md) (same nouns), [motion-js](motion-js.md)
- **looks-like-but-is-not:** [garrison-art](garrison-art.md) (photos, not diagrams)

## If you change this

- **Hits:** SVG fills/labels, `aria-label`, diagram CSS, diagram reveal JS
- **Does not hit:** garrison JPGs, favicon, `CNAME`

## Surfaces

| Surface | Role |
|---|---|
| visitor | reads |
| agent | copy (labels) or motion (reveal) |

## See

- Source: `index.html` section `04`
