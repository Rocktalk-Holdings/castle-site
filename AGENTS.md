# Castle site

Static GitHub Pages page for Castle (Rocktalk Holdings). Live: https://castle.rocktalk.holdings
Product files stay at repo root. Do not move them into numbered folders.

## Where things live

| Path | Job |
|---|---|
| `index.html` | copy, sections, inline SVG diagrams |
| `style.css` | tokens + layout |
| `castle.js` | reveal + nav shadow |
| `assets/` | favicon + garrison JPGs |
| `CNAME` | Pages custom domain |
| `icm/` | maintenance map (this catalog) |

## Route by task

| If | Open | Then stop |
|---|---|---|
| stationed / cold start | [`icm/COLD-START.md`](icm/COLD-START.md) | one area `CONTEXT.md` |
| what is X / what else moves | [`icm/map/CONTEXT.md`](icm/map/CONTEXT.md) | one object card |
| copy, style, JS, art, domain | [`icm/areas/CONTEXT.md`](icm/areas/CONTEXT.md) | that area |
| run a change | [`icm/runbook/CONTEXT.md`](icm/runbook/CONTEXT.md) | human gate each stage |
| new area or ticket | copy from [`icm/_templates/`](icm/_templates/) | |

## The one rule

Nothing merges until a person has read the last output. Owner often reviews on a phone — write the PR for that.
