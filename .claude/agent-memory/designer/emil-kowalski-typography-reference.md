---
name: emil-kowalski-typography-reference
description: Measured spacing/hierarchy from Emil Kowalski's /ui/ articles, plus the boundary condition - his ratios only transfer where headings are body-sized
metadata:
  type: reference
---

Ryan treats Emil Kowalski's blog (emilkowal.ski, the `/ui/` articles) as the reference for how a
quiet long-form reading page should feel. Measured at 1440x900 from four live articles via
computed styles on 2026-08-27.

- Body 16px / 26.4px line-height (1.65). Column 644px, about 83 characters.
- Paragraph to paragraph: 26px (1.00 lh).
- Heading to its first paragraph: 20px (0.76 lh) - TIGHTER than a paragraph gap.
- Space above a heading: 56px (2.12 lh).
- Load-bearing ratio 56 : 26 : 20 = 2.8 : 1.3 : 1.
- Headings are NOT size-scaled. h2 is 16px, same as body. Hierarchy comes from weight (400 to
  550), opacity (body paragraphs 0.9, headings full) and the 56/20 spacing asymmetry alone.
- End of article: furniture at 80px (3.0 lh) and 128px (4.85 lh); page padding-bottom 64px. With
  prev/next, 64px trailing. Without, an explicit 96px spacer plus 64px padding = 160px trailing.
- No footer, no signature, no bio, no share row, no subscribe block.
- CTA is an inline text link as the last line of prose: 16px, weight 500, no background, border
  or padding, sitting exactly one paragraph gap (26px) after the final paragraph. The only loud
  CTA is a sticky banner ABOVE the reading column, never inside it.

BOUNDARY CONDITION - his ratios do NOT transfer wholesale, and the reason is specific. He does
not size-scale headings: his h2 is 16px, the same as his body, so his heading carries the same
leading and the same ink profile as a paragraph, and 20px-against-26px reads as a bond. Our
heading is 23px on line-height 1.3, which carries far less half-leading per side, so the same
declared numbers put our heading equidistant instead of bound. Copying his 0.77 heading ratio was
tried on /plan and failed; ours shipped at 0.54. Transpose his RATIO ONLY where the heading is
body-sized, otherwise re-measure ink to ink. See [[spacing-scale-plan-page]].

Caveats: mobile breakpoints were NOT measured (page padding may switch to 128px below 768px, but
that is inferred). Dark theme not measured. Derive mobile values from our own line-heights and
these ratios, not from Emil's mobile.

Use this when a spacing or reading-rhythm question comes up on the studio site; it is the
evidence base behind [[spacing-scale-plan-page]].
