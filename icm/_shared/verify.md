# How to verify (factory)

No bundler. The site is three files plus `assets/`.

## Always

1. Serve the repo root (not `icm/`): `python3 -m http.server 8080 --directory .`
2. Open `/` and the section you changed. Confirm nav → `#commission` still jumps.
3. Confirm `castle.js` loads (no console `ReferenceError` on a normal refresh).
4. If you touched copy: read the new sentences aloud. Martial nouns still match [`voice-and-art.md`](voice-and-art.md).

## If you touched layout or tokens

- Desktop (~1280) and a narrow phone width (~390).
- `prefers-reduced-motion: reduce`: anatomy rows and diagrams stay visible.
- Hover is not required on touch (`(hover: none)` already disables hover fills).

## If you touched garrison or favicon

- All six `assets/garrison/*.jpg` paths in `index.html` 200.
- Favicon still at `/assets/favicon.svg`.

## If you touched `CNAME` or Pages

- Extra human yes. Live host is GitHub Pages, source `main` `/`, domain `castle.rocktalk.holdings`.

## Do not call this verified

- A single screenshot of the hero.
- Opening `icm/` in the browser instead of the page.
- "Looks fine in the editor."
