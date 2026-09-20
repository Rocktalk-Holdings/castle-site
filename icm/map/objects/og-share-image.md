---
type: object
cluster: assets
universe: ghost
status: verified
entity: assets/og-castle.png
verified: 2026-09-20
commit: b0f5840
---

# OG share image (ghost)

Meta tags name `https://castle.rocktalk.holdings/assets/og-castle.png` (`index.html:14`, `:23`). That file is **not** in the repo. Do not implement unfurl polish against it until someone adds the bytes.

## Why this shape

Launch wired the tags; the PNG never landed. Treating it as live would send an agent hunting a path that 404s.

## Shape

- `og:image` / `twitter:image` URLs only
- Declared 1200×630

## Connected to

- **joins:** [page-copy](page-copy.md) (title/description *are* live)
- **looks-like-but-is-not:** [garrison-art](garrison-art.md)

## If you change this

- **Hits:** adding the PNG, or retargeting meta to a real file
- **Does not hit:** on-page layout

## Surfaces

| Surface | Role |
|---|---|
| crawler | broken image until the ghost is filled |
| agent | `icm/areas/assets` only if the ticket is the OG file |

## See

- Source: `index.html:14` (link only)
