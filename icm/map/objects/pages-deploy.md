---
type: object
cluster: deploy
universe: live
status: verified
entity: CNAME
verified: 2026-09-20
commit: b0f5840
---

# Pages deploy

GitHub Pages publishes branch `main`, path `/`, custom domain `castle.rocktalk.holdings`. File: `CNAME`. Merge is deploy.

## Why this shape

A three-file site does not need a pipeline. The host setting plus one hostname file is the release valve.

## Shape

- `CNAME` contents: `castle.rocktalk.holdings`
- HTTPS enforced on that domain (host)
- Root files become public URLs; `icm/` is also fetchable if someone knows the path

## Connected to

- **owns:** the live hostname
- **looks-like-but-is-not:** [og-share-image](og-share-image.md) (share unfurl, not DNS)

## If you change this

- **Hits:** every visitor URL, email in OG `og:url`, HTTPS cert
- **Does not hit:** sentence wording, CSS tokens

## Surfaces

| Surface | Role |
|---|---|
| visitor | the live site |
| agent | `icm/areas/deploy` only when asked |
| owner | extra yes on domain diffs |

## See

- Source: `CNAME`
