---
name: project-two-page-studio-constraints
description: in-the-loop-studio ships two prose pages with a zero-JS budget; verify.sh gates structure, not just copy
metadata:
  type: project
---

`in-the-loop-studio` is a deliberately small two-route Astro site (`/` and `/plan/`) with a hard
zero-client-JavaScript budget and a prose-only Plan page.

**Why:** It is a quiet background-check and explanation surface, not a sales funnel. `verify.sh`
enforces this structurally, not just by convention: it counts `<script>` tags across `dist/` and
requires exactly 2 (the JSON-LD identity graphs, one per page), and it fails the build if
`<svg`, `<figure`, `<dl>`, "Diagram" or `plan-register` appear in `src/pages/plan.astro`.

**How to apply:** Never reach for a client-side interaction, an icon inline SVG, a definition list
or any visual structure on the Plan page, however small. Spacing and rhythm changes are the accepted
lever there. New routes are out of scope unless Ryan asks.

Related: [[feedback-verify-copy-gate]], [[builder-verification-commands]]
