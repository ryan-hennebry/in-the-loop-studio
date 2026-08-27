---
name: builder-verification-commands
description: ./verify.sh is the single completion gate for in-the-loop-studio; it builds and asserts against dist/
metadata:
  type: feedback
---

`./verify.sh` from the repo root is the only verification command needed here. It runs house style,
route, copy, brand-asset and `npm run build` checks, then asserts against the emitted `dist/`.
It exits non-zero on any failure and takes roughly 10 seconds.

**Why:** Assertions run against built output, not source, so a change that type-checks can still
fail the gate. Running only `npm run build` proves nothing about the copy, canonical URLs, sitemap
or script budget.

**How to apply:** Run `./verify.sh` and read the whole output before reporting any build as done.
For visual changes, also inspect `/` and `/plan` at 1440px, 390px and 320px, since no automated
check covers layout or horizontal overflow.

Related: [[project-two-page-studio-constraints]]
