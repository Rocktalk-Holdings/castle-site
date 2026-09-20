---
type: object
cluster: motion
universe: live
status: verified
entity: castle.js
verified: 2026-09-20
commit: b0f5840
---

# Motion JS

`castle.js` — no framework. Anatomy row reveal, nav shadow, optional loop pause, diagram reveal.

## Why this shape

Motion is progressive. Reduced-motion short-circuits to `.visible`. Diagrams were later made visible-by-default so a failed observer cannot hide them.

## Shape

- IIFE + `prefers-reduced-motion` — `castle.js:5`
- `initAnatomyReveal` — `castle.js:11` (**leftover:** `svgs` at line 21 is unbound)
- `initNavScroll` — `castle.js:43`
- `initDiagramReveal` — `castle.js:75`

## Connected to

- **joins:** [architecture-figures](architecture-figures.md), anatomy rows in [page-copy](page-copy.md)
- **looks-like-but-is-not:** CSS transitions (those live in `style.css`)

## If you change this

- **Hits:** whether section `03`/`04` appear; nav bar shadow
- **Does not hit:** copy, tokens, deploy

## Surfaces

| Surface | Role |
|---|---|
| visitor | sees motion |
| agent | `icm/areas/motion` |

## See

- Source: `castle.js`
