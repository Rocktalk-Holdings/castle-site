---
type: object
cluster: page
universe: live
status: verified
entity: index.html
verified: 2026-09-20
commit: b0f5840
---

# Page shell

Nav, main landmark, commission block, and footer — the chrome around the story. Not the section essays.

## Why this shape

One long `index.html` so GitHub Pages can publish the root with no build. Chrome is a few named blocks so copy edits do not require a layout rewrite.

## Shape

- `nav.site-nav` + wordmark + `#commission` CTA — `index.html:35`
- `section#commission` + `mailto:drew@rocktalk.holdings` — `index.html:643`
- `footer.site-footer` — `index.html:664`
- Script last: `castle.js` — `index.html:673`

## Connected to

- **owns:** jump targets the hero/nav CTAs use
- **owned-by:** the root page
- **joins:** [design-tokens](design-tokens.md) (`.site-nav`, `.btn-*`), [motion-js](motion-js.md) (nav shadow)
- **looks-like-but-is-not:** [page-copy](page-copy.md) (the essays inside `<main>`)

## If you change this

- **Hits:** CTA labels, mailbox, footer attribution, fixed-nav offset in CSS
- **Does not hit:** garrison JPGs, `CNAME`

## Surfaces

| Surface | Role |
|---|---|
| visitor | reads / taps Commission |
| agent | writes via `icm/areas/copy` (words) or `style` (chrome look) |
| owner | phone PR |

## See

- Source: `index.html` (nav / `#commission` / footer)
