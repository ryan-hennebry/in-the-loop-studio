---
name: builder-interaction-probes
description: How to prove hover, press, focus-ring and transition-curve claims on this site deterministically, including the three false negatives that mouse-driven probes produce
metadata:
  type: feedback
---

Interaction claims here must be proved with a probe that removes timing and pointer type from the
question, not with `page.hover()` plus a sleep.

**Why:** Three mouse-driven readings on this site were wrong in ways that looked right.
(1) On a fine pointer, `mouse.down()` also satisfies `:hover`, so a press rule that sets the same
colour as hover measures as "changed" even when the press rule does not exist. The press states on
`.plan__contact`, `.colophon__home` and `.colophon__link` only matter under a coarse pointer, where
hover is gated out. (2) Screenshotting during a transition races the compositor, so a 140ms curve
samples as three indistinguishable frames. (3) `getBoundingClientRect()` on a focused element is not
where the ring is painted.

**How to apply:** For press states, open a context with `has_touch=True, is_mobile=True` (which makes
`(pointer: coarse)` and `(hover: none)` match), then force the state through CDP:
`CSS.forcePseudoState({nodeId, forcedPseudoClasses: ["active"]})` after `DOM.enable` and `CSS.enable`.
Diff the computed style against rest and report which properties changed; "NOTHING" is the answer
that catches a dead press. For an easing curve, hover, grab the running animation with
`el.getAnimations({subtree: true})` (the arrow's transition lives on the `::after`, so `subtree` is
required), `pause()` it and step `currentTime`, screenshotting each sample. That yields an exact
filmstrip; compose the variants into one image with a red line at the rest position and look at it,
because the numbers alone do not show that a front-loaded curve is over before the eye arrives. For
an outline, screenshot focused and unfocused with the same clip and diff the pixels: Chromium paints
the ring's outer edge at `box_top - outline-offset - outline-width`, so a positive offset paints
above the box and a negative one paints inside it. Make the clip taller than the ring, or the bottom
edge falls outside the frame and the measured span is short.

Related: [[builder-visual-measurement]], [[builder-paint-vs-box]], [[builder-verification-commands]]
