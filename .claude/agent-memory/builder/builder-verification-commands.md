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

`dist/viewport.html` is Ryan's hand-written phone probe. It is gitignored, has no source in
`public/`, and every `astro build` wipes it. Do NOT copy it back into `dist/` after a run: it
contains a `<script>`, and the script-budget assertion counts `<script` across all of `dist`, so a
restored probe makes the count 3 and fails the gate on any working copy where the probe is present
and a clean rebuild has not run. Only the build's own ordering (wipe, then count) has been hiding
that, which is why the gate never caught it. Keep the probe in the session scratchpad and serve it
from there; as of 2026-08-28 it is removed from `dist/` and nothing in the repo re-creates it.

To prove a commit passes rather than the working tree, add a detached worktree (`git worktree add
--detach <path> <sha>`) and symlink the repo's `node_modules` into it before running `./verify.sh`
there; the script runs `npm run build`, and a bare worktree has no dependencies. Building the
previous commit in the same worktree and diffing `dist/index.html`, `dist/plan/index.html` and
`dist/_astro` is the cheapest proof that a non-visual change left both pages untouched.

Related: [[project-two-page-studio-constraints]]
