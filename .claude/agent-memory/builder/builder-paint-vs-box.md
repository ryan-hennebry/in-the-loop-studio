---
name: builder-paint-vs-box
description: Verify text-decoration claims by scanning painted pixels, not getBoundingClientRect; an element box is not the underline
metadata:
  type: feedback
---

A claim about where a rule, underline or hairline is drawn must be checked against painted pixels,
not against `getBoundingClientRect()`. Screenshot a tight clip below the baseline, decode it in a
blank page through a canvas, and read the ink runs.

**Why:** A review of the homepage action reported the underline running 21.6px past `Read the plan`.
That number is the label's element box (119.06px) minus its text run (97.42px), which is the arrow's
lead-in, glyph and trailing padding. The painted rule measures 97.54px and stops at the last `n`:
Chromium does not paint a propagated underline across an atomic inline-block pseudo-element or
across an inline's trailing padding. The whole fix would have been churn against a defect that is
not on screen.

**How to apply:** Two probes make these questions answerable. The baseline is the bottom of an
appended zero-size `inline-block` with `vertical-align: baseline`. Descender depth is the lowest ink
row below that baseline once `textDecorationLine` is set to `none` on the element. Underline offset
is then the top ink row of the rule minus the baseline. Scanning for gaps in the rule is not a
reliable skip-ink test, because the descender's own ink sits in the skipped gap and rejoins the
runs; crop at 12x or more and look. Note also that `text-decoration-color` and
`-thickness` do not inherit, so reading them off a child span reports `currentcolor`, not the link's
resting grey - read them off the element that carries `.link`.

Related: [[builder-visual-measurement]], [[builder-height-measurement]]
