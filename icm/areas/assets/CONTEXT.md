# Area — assets

One job: swap chrome or garrison art without rewriting the page.

## Inputs

- Working: ../../../assets/ and the `<img>` / favicon tags in ../../../index.html
- Reference: ../../_shared/voice-and-art.md

Do NOT load: `style.css` tokens, `castle.js`, `CNAME`.

## Edit surfaces

- `assets/favicon.svg` (theme-aware C mark — chrome, SVG allowed)
- `assets/garrison/*.jpg` — keep the six filenames the HTML already uses unless you update every `src`
- `assets/og-castle.png` — **ghost**: meta tags point here; the file is not in the repo. Adding it is an assets task.

## Do not touch

- Redrawing buddies as SVG (art law). Inventing a seventh character without an approved render. Replacing JPGs with AI stand-ins Drew did not approve. The inline architecture SVGs (those live in `index.html`).

## Process

1. Drop the new file next to the old one. Prefer same filename + same square crop.
2. Only then change `index.html` `src` / `alt`.
3. Keep `loading="lazy"` on garrison images.

## Outputs

- New or replaced files under `assets/`
- `index.html` path/alt updates if names changed

## Verify

- All six garrison URLs 200. Favicon loads. If you added OG: `assets/og-castle.png` is 1200×630 and the meta path matches.

## Human check

Owner looks at the six faces on a phone. Reject any character that is not an approved render.
