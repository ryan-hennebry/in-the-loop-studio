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

One side effect to undo every time: `astro build` empties `dist/`, and `dist/viewport.html` is
Ryan's hand-written phone probe that lives only there (it is gitignored and has no source in
`public/`). Every `./verify.sh` deletes it. Copy it to the scratchpad before the first build and
copy it back after the last one. Restore it after the run, never before: it contains a `<script>`,
and the script-budget assertion counts `<script` across all of `dist`, so a restored probe would
make the count 3 and fail the gate on the next run. The build's own ordering saves it (build wipes,
then counts), which is why the gate has never caught this.

Related: [[project-two-page-studio-constraints]]
