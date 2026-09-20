# effects/ — if you change X, open these

Catalog only. If this index and a card disagree, fix the card.

| You are changing | Open | Hits | Does not hit |
|---|---|---|---|
| Hero / problem / constitution sentences | [page-copy](../objects/page-copy.md), [edit-copy](../processes/edit-copy.md) | live argument, OG *text* | tokens, JPGs, `CNAME` |
| Nav, CTA label, mailbox, footer | [page-shell](../objects/page-shell.md) | chrome + `#commission` | garrison art |
| Fig. 1 / Fig. 2 labels or strokes | [architecture-figures](../objects/architecture-figures.md) | SVG + aria | garrison JPGs |
| Color, type, spacing, breakpoints | [design-tokens](../objects/design-tokens.md), [restyle](../processes/restyle.md) | whole look | HTML order, domain |
| Reveal / scroll / reduced-motion | [motion-js](../objects/motion-js.md) | anatomy + diagrams visibility | copy |
| Buddy faces or favicon | [garrison-art](../objects/garrison-art.md) | strip + `/assets/favicon.svg` | constitution |
| Share image | [og-share-image](../objects/og-share-image.md) | meta URL + new PNG | on-page layout |
| Domain or host | [pages-deploy](../objects/pages-deploy.md), [publish](../processes/publish.md) | live hostname | sentence wording |
| Merge to `main` | [publish](../processes/publish.md) | the public site | nothing — this *is* go-live |

## Outside the tree (ask the owner if silent)

These break without a grep hit inside the repo: DNS at the registrar, GitHub Pages UI, the mailbox `drew@rocktalk.holdings`, Slack/LinkedIn unfurls that cache OG, any agent prompt that hardcodes `castle.rocktalk.holdings`.
