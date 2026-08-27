---
name: feedback-verify-copy-gate
description: Copy changes in this repo must be mirrored in verify.sh's phrase gates, and src/config.ts's one curly apostrophe is intentional
metadata:
  type: feedback
---

Any change to settled copy on `/` or `/plan` must be mirrored in the matching `for phrase in ...`
list in `verify.sh`, and `src/config.ts` legitimately contains one curly apostrophe
("We’re still figuring out what that changes.") that must NOT be normalised to ASCII.

**Why:** `verify.sh` matches those phrases with `grep -Fq` (literal), so both sides must stay
byte-identical. The ASCII house-style gate only scans root `*.md`, not `src/`, so the apostrophe is
allowed there on purpose and is also asserted against the built `dist/plan/index.html` description
meta tag. "Fixing" it breaks three assertions at once.

**How to apply:** Before editing any user-visible string in `src/config.ts` or `src/pages/*.astro`,
grep `verify.sh` for the old string and update it in the same commit. Never run a blanket
smart-quote-to-ASCII pass over `src/`.

Related: [[project-two-page-studio-constraints]]
