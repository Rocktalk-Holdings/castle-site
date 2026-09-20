# Area — deploy

One job: change how the site is hosted, not what it says.

## Inputs

- Working: ../../../CNAME
- Reference: ../../_shared/verify.md
- Reference: ../../_shared/phone-pr-check.md

Do NOT load: copy, CSS, garrison art.

## Edit surfaces

- `CNAME` — currently `castle.rocktalk.holdings`
- GitHub Pages: source `main` `/` (host setting, not a file)

## Do not touch

- Page files "to make deploy easier." Adding Netlify/Vercel/a Dockerfile unless the ticket is a host move. `mailto:` (copy area).

## Process

1. Treat any `CNAME` edit as a named task with an extra human yes.
2. Merge to `main` **is** publish. There is no separate release job.
3. After merge, hit https://castle.rocktalk.holdings/ and confirm HTTPS.

## Outputs

- Edited `CNAME` and/or a note that only host settings changed

## Verify

- `CNAME` is a single hostname, no `https://`.
- After merge: custom domain still serves `index.html`, not a directory listing of `icm/`.

## Human check

Owner must say yes to the domain in the PR title. Do not merge a `CNAME` change from a drive-by cleanup.
