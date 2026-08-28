---
name: builder-type-inventory
description: How to enumerate the distinct size/weight/colour combinations on a screen of this site without double-counting inherited type
metadata:
  type: feedback
---

"How many distinct type styles are on the first screen" is a recurring review question here. Answer
it by keying on `fontSize / fontWeight / color` from `getComputedStyle`, but only for elements that
own a non-empty direct text child node, and only where `getBoundingClientRect()` intersects the
viewport. Skip `.sr-only` and anything inside it.

**Why:** Every ancestor inherits the computed type of its children's text, so walking
`document.querySelectorAll('*')` and reading computed style counts `body`, `.plan`, `.plan__header`
and `.plan__intro` as separate 19px/400 entries and inflates the inventory. The direct-text-node
filter is what makes the count mean "styles a reader can see" rather than "elements in the tree".
The `.sr-only` `<h1>` is real text with real computed style and is not on screen at all.

**How to apply:** The baseline reading for the first screen of `/plan/` is 6 combinations at both
1440x1080 and 390x664 (it was 7 until the introduction gave up its size step on 2026-08-28), and the
two viewports now differ only in that the section title steps down 1px on mobile. Counting the whole
page adds the three underlined link styles and reads 9; if a whole-page walk returns 10, one of them
is the `<title>` element in `<head>`, which owns direct text and must be filtered out by restricting
the walk to `document.body`. Report the sample text next to each key: the question behind the count
is usually whether one weight is doing two jobs, and only the sample shows that. Note that a weight
appearing twice at different sizes is not automatically a defect - 600 legitimately sets the 13px
identity wordmark and the 16px product names - so judge by role, not by count.

Related: [[builder-visual-measurement]], [[project-spacing-token-rule]]
