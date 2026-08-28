---
name: builder-transformed-child-position
description: getBoundingClientRect on a parent does not move when its ::after translates; measure the arrow from painted pixels or the whole probe reads zero travel
metadata:
  type: feedback
---

The homepage arrow's position cannot be read from `.primary-link__label`'s
`getBoundingClientRect()`. A transform on a child or pseudo-element does not change the parent's
layout box, so the rect is identical hovered and unhovered. Measure the rightmost inked column of a
screenshot instead; the arrow is the rightmost ink in that clip.

**Why:** A press probe built on `labelRight` reported the hover travel as +0.000 and would have
concluded there was no conflict between the hover and the press, when the painted travel is +3.000
and the press pulled it back 2.500. The rect does track an *ancestor's* transform, which is what
makes the reading look plausible: the scale on `.primary-link` moved it, the translate on the
`::after` did not.

**How to apply:** Read `getComputedStyle(el, '::after').transform` for the declared value and the
painted ink for the result, and report both. The same clip at `device_scale_factor=4` quantises to
0.25px, which is enough to separate a 3px travel from a 2.5px retreat.

Related: [[builder-interaction-probes]], [[builder-paint-vs-box]]
