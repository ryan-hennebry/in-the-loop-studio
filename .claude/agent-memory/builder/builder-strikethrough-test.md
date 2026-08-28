---
name: builder-strikethrough-test
description: Prove an indicator does not cross neighbouring text by counting diff pixels that landed on ink already there, not by comparing row ranges
metadata:
  type: feedback
---

To prove a focus indicator, underline or rule does not strike neighbouring text, diff the focused
and unfocused frames and count the changed pixels **whose unfocused value was already ink and whose
row lies outside the element's own content box**. Report that count. Zero is the pass.

**Why:** Comparing the indicator's row range against a line's row range gives false positives that
waste a whole pass. A ring's left and right sides paint on every row it spans, so a naive row
overlap says "crosses" for the line the ring correctly surrounds. Row ranges also say "crosses" in
forced colours, because the forced canvas defeats any fixed ink threshold and every line merges
into one band. The ink-hit count is threshold-free in both cases: on this site it read 1289
subpixels before the fix and 0 after, at 1440px, 390px, 320px and under `forced_colors="active"`.

**How to apply:** Screenshot the same clip at `device_scale_factor=4` unfocused and focused, drive
focus from `Shift+Tab` then `Tab` rather than `.focus()` so `:focus-visible` actually matches, and
take the element's content box as `rect.top + paddingTop` to `rect.bottom - paddingBottom`. Playwright's
`new_context(forced_colors="active")` is enough to check High Contrast; derive the canvas colour as
the most common pixel in the unfocused frame rather than assuming white.

Related: [[builder-interaction-probes]], [[builder-focus-on-padded-inline]], [[builder-paint-vs-box]]
