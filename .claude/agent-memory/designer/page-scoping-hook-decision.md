---
name: page-scoping-hook-decision
description: Why data-page on body was chosen over :has() and custom-property inheritance for page-scoping shared .shell styles
metadata:
  type: project
---

To diverge `.shell` padding between `/` and `/plan` (the shell is shared and Base.astro has no
page-identifying class), recommended `<body data-page={isHome ? "home" : "plan"}>` plus
`[data-page="plan"] .shell { --page-end: var(--plan-end) }`, with `.shell` reading
`var(--page-end, 80px)` so print and homepage defaults survive.

**Rejected — custom property set on `.plan`:** impossible, not merely inelegant. Custom
properties inherit downward only and `.plan` is a descendant of `.shell`, so it can never
affect the ancestor's own padding. Worth remembering before proposing it again.

**Rejected — `.shell:has(.plan)`:** zero markup change and baseline-supported, but the shell
would infer page identity from what happens to be nested inside it. APOSD Ch.5 information
leakage / Ch.14 obvious code: `data-page` states the fact at its source and is greppable.

**Why:** The site is two pages with one shared layout; more page-scoped divergence is likely,
and a named hook generalises where `:has()` chains do not.

**How to apply:** Reuse `data-page` for any future page-scoped rule rather than adding a second
mechanism.
See [[itl-studio-constraints]].
