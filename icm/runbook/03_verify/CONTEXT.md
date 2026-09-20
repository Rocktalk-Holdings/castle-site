# 03_verify — prove it on the real page

One job: run the area's verify list and write what you saw.

## Inputs

- Working: the product diff + ../02_change/output/<slug>.md
- Reference: ../../_shared/verify.md
- Reference: the area `CONTEXT.md` Verify section

Do NOT load: unrelated sections of `index.html` "for context."

## Process

1. Serve **repo root**: `python3 -m http.server 8080 --directory .`
2. Execute every bullet in the area Verify section.
3. Write `output/verify.md`: commands, URLs, pass/fail, leftover bugs you noticed but did not fix.

## Outputs

- `output/verify.md`

## Human check

A person can repeat the listed checks from the note alone. "LGTM" is not a note.
