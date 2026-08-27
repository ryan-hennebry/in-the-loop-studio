---
name: feedback-verify-copy-gate
description: Copy changes in this repo must be mirrored in verify.sh's phrase gates, and src/config.ts's curly apostrophes are intentional
metadata:
  type: feedback
---

Any change to settled copy on `/` or `/plan` must be mirrored in the matching `for phrase in ...`
list in `verify.sh`, and `src/config.ts` legitimately contains curly apostrophes (U+2019, two of
them as of 2026-08-27, both in `PLAN_INTRO`) that must NOT be normalised to ASCII.

**Why:** `verify.sh` matches those phrases with `grep -Fq` (literal), so both sides must stay
byte-identical. The ASCII house-style gate only scans root `*.md`, not `src/`, so the apostrophe is
allowed there on purpose and is also asserted against the built `dist/plan/index.html` description
meta tag. "Fixing" it breaks three assertions at once.

**How to apply:** Before editing any user-visible string in `src/config.ts` or `src/pages/*.astro`,
grep `verify.sh` for the old string and update it in the same commit. Never run a blanket
smart-quote-to-ASCII pass over `src/`. There are three gate sites, not one: the config phrase list,
the `src/pages/plan.astro` phrase list, and the `dist/plan/index.html` description assertion near
the foot of the file, which spells the whole joined introduction out. Miss the third and the copy
gates pass while the search-and-sharing gate fails. Root `*.md` is the opposite rule: the ASCII gate
covers it, so quote the same sentence there with a straight apostrophe.

Related: [[project-two-page-studio-constraints]]
