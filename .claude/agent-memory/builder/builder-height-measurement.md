---
name: builder-height-measurement
description: documentElement.scrollHeight clamps to the viewport on this site's short homepage; measure body.getBoundingClientRect().height for the real document height
metadata:
  type: feedback
---

When measuring page height here, read `document.body.getBoundingClientRect().height`, not
`document.documentElement.scrollHeight`.

**Why:** The homepage is shorter than most phone viewports, and `scrollHeight` on the document
element is floored at the viewport height. At 390x844 it reported 844 for a 643px document, which
looks like a page that exactly fills the screen and is really a page with 200px to spare. A
before/after table built on `scrollHeight` alone would have shown no change at all at 390, 393
and 412.

**How to apply:** Report both if a task asks for `scrollHeight`, and state which one carries the
argument. Fit is judged against the realistic visible height under browser chrome, roughly 664px at
390x844, 672px at 393x852, 811px at 412x915, 553px at 375x667 and 460px at 320x568, not against the
raw viewport.

Related: [[builder-visual-measurement]], [[builder-verification-commands]]
