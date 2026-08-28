---
name: builder-focus-on-padded-inline
description: An outline cannot fit a link padded to a 48px target inside a text line; outline-offset is uniform, so prove the impossibility with arithmetic before hunting for a value
metadata:
  type: feedback
---

When a link is padded to a 48px tap target inside running prose, no `outline-offset` value can
produce a ring that both clears the neighbouring lines and stays outside the word. Work the
arithmetic before trying values: the ring's outer edge is `box_top - offset - width`, so clearing a
glyph band above needs an offset at least as negative as `box_top - band_bottom - width`; but the
offset applies to all four sides, so that same inset is taken off each end of the run. On this site
the closing contact link needs -8.75px vertically and the run is only 88.63px wide, so the ring's
own sides would cut through the first and last letters. Two successive passes tried -1px and then
-9px against that.

**Why:** The constraint is geometric, not a matter of taste, and it is invisible until both axes are
written down. A padded inline is the only shape on the site where the box and the mark disagree.

**How to apply:** State the impossibility, then move the mark off the box. `text-decoration-line:
underline overline` in the focus colour draws two rules inside the link's own content box, so it
cannot reach a neighbour at any width and it shifts nothing. It is also one of the few things
forced colours repaint rather than drop, so it needs no High Contrast fallback, where a
`box-shadow` ring would need one and would be invisible without it. A `background-clip: content-box`
tint works geometrically too, but reads as a text selection, which this site already spends a token
on.

Related: [[builder-interaction-probes]], [[builder-paint-vs-box]]
