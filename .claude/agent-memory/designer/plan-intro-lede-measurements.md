---
name: plan-intro-lede-measurements
description: Verified findings on the /plan intro lede - text-wrap pretty is inert on short paragraphs, the 390px wrap cliff and the -0.011em fix, and why a non-breaking space is forbidden there
metadata:
  type: project
---

Measured findings about the three PLAN_INTRO sentences on `/plan`. Shipped:
`.plan__intro { letter-spacing: -0.011em }` and `.plan__intro p { text-wrap: balance }`.
`.plan__copy p` keeps `pretty` and was deliberately left alone.

**`text-wrap: pretty` is INERT on a one-to-two-line paragraph in Chrome.** Forced to `normal`, the
line breaks were byte-identical at every width tested. Chrome's `pretty` only reworks the last few
lines of a block, so a short paragraph has nothing for it to optimise. Do not attribute bad
short-paragraph rag to it, and do not "fix" rag by adding it. `balance` is the property that acts
there. This is why the lede uses `balance` and the multi-line body copy keeps `pretty`.

**The 390px wrap was a 2.7px near-miss, not a design problem.** The sentence rendered at 344.7px
into a 342px container. `-0.011em` tracking buys ~9px and moves the one-line threshold to ~384px.

**Why:** the general rule is that the fix for a near-miss wrap is tracking or `balance`, and the
diagnosis should start by measuring the overflow - a sub-5px miss is a tracking problem, not a
copy or layout problem.

**How to apply:** never reach for a non-breaking space in PLAN_INTRO. `verify.sh` gates the three
strings with `grep -F`, so U+00A0 fails the build gate, and `PLAN_INTRO.join(" ")` feeds the meta
description, so it would leak into search results. The repo's ASCII gate on `*.md` is a separate
constraint with the same flavour.
See [[spacing-scale-plan-page]], [[itl-studio-constraints]].
