---
name: builder-visual-measurement
description: How to measure rendered tap targets, hover states and overflow on this site without adding repo dependencies, plus three gotchas that produce false results
metadata:
  type: feedback
---

Measure the built site rather than asserting from CSS: serve `dist/` on a spare port
(`python3 -m http.server 4399 --directory dist`) and drive Chromium from a script kept in the
scratchpad, never in the repo. Port 4321 usually holds a live `astro dev` for this project, so do
not start another dev server.

**Why:** Playwright is not a dependency of this repo and must not become one (the site has a hard
zero-JS budget and a two-dependency `package.json`). It is available from the npx cache; an ESM
script must import it by absolute path, e.g.
`import { chromium } from '/Users/ryanhennebry/.npm/_npx/<hash>/node_modules/playwright/index.mjs'`,
because `NODE_PATH` does not apply to ESM resolution.

**How to apply:** Three gotchas have already produced wrong readings here. (0) `dist/` is only
refreshed by `npm run build` or `./verify.sh`, so measuring straight after editing `src/` measures
the previous commit. This has already happened: a homepage that ends exactly at the foot of a
390x664 screen measured 789px and looked like a 125px overflow, and the numbers were about to be
written into DESIGN.md as a failure. Rebuild first, every time, and sanity-check one value against
what the change was supposed to do before trusting the table. (1) The Plan's closing link
sits far below the fold: a raw `mouse.move` to its bounding-box centre lands off-screen and silently
reports no `:hover` and no `:active`. Call `scrollIntoView({block:'center'})` first, or use
`page.hover()`, which scrolls for you. (2) Chromium does not run CSS transitions on
`text-decoration-thickness` (Web Animations interpolates it, CSS transitions snap it), so a correct
transition declaration still measures as an instant thickness change. Sample colour, not thickness,
when proving a transition is live. Always stop the server and leave no `.playwright-mcp/` or PNGs
behind.

Related: [[builder-verification-commands]], [[project-two-page-studio-constraints]]
