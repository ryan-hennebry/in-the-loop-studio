---
name: spacing-scale-plan-page
description: The shipped 4px spacing scale for /plan - 2.77:1:0.54 rhythm, --para 26px, why the heading bond needs a ~12px declared delta at 23px headings, the footerless closing-interval rule and the inline-CTA placement
metadata:
  type: project
---

SHIPPED. Job-named tokens in `src/styles/site.css` `:root`, page-scoped via
`[data-page="plan"] .shell`.

    --lede-line    12px   line to line inside the opening stanza
    --lede-turn    32px   lede body to its conclusion
    --heading-gap  14px   heading to the copy it owns
    --para         26px   paragraph to paragraph
    --lockup-gap   88px   identity to the essay
    --section      72px   section to section
    --plan-end    160px   last words to page end

Mobile overrides macro only: `--lockup-gap 64`, `--section 56`, `--plan-end 120`. The four micro
tokens have NO mobile override, deliberately - `.plan__copy` is 16px/1.625 at both breakpoints, so
intervals inside the prose must not compress. Only intervals between whole blocks do (x0.75).

Shipped ratio, section : para : heading-to-body = 72 : 26 : 14 = **2.77 : 1 : 0.54**.

**Why:** the original complaint was that the page felt off and wanted Emil-like space at the
bottom. Root cause was PROPORTION: a 12px paragraph gap against a 96px section gap is 8:1, cramped
inside sections and cavernous between them. Secondary: heading-to-body 22px against that 12px gap
put the heading FURTHER from its own copy than paragraphs sat from each other, inverting the
proximity bond.

**Rules worth keeping, in descending durability.**

1. *The heading bond needs a ~12px declared delta at this heading size, not ~6px.* 20px against a
   26px paragraph gap still failed. The heading is 23px on line-height 1.3, so it carries only
   ~0.95px of half-leading per side, and a short heading string has almost no descender ink, so its
   box bottom sits ~3px closer to its own baseline than a body paragraph's does. Ink to ink, a
   declared 6px delta delivered just 2.9px optical (33.70 vs 36.57). 14px against 26px is what
   shipped.
2. *Compute half-leading against the font's CONTENT AREA, not the em box.* Inter's
   ascent+descent is ~1.21em, so a 23px/1.3 heading has (29.9 - 27.85)/2 = ~1.0px per side, not
   the 3.45px the em-box arithmetic gives. My earlier optical-interval formula used the em box and
   overestimated the heading's leading by ~3.5x, which is exactly how 20px got proposed and failed.
   Declared deltas are a proxy; only ink-to-ink measurement settles a bond question.
3. *When a base interval moves, re-check every interval defined relative to it.* Raising `--para`
   without revisiting the lede tokens left `--lede-turn` below the new paragraph gap, making the
   page's one rhetorical turn its tightest major break. These tokens encode ratios but are stored
   as absolutes, so nothing enforces the relationship. Hence `--lede-line 12` and `--lede-turn 32`.
4. *Closing-interval rule.* A page with no footer, prev/next or end furniture needs a trailing
   interval >= 2x its largest in-prose interval, near 6 line-heights. Two derivations converged on
   160px: 2x `--section` 72 = 144, 1.82x `--lockup-gap` 88; and 6.06 lh transposed onto our 26px
   line = 158px.
5. *Tap targets on inline prose links.* An inline link has a ~20px content box at 16px Inter, so a
   48px target needs `padding-block: 14px; margin-block: -14px`. 11px measured 42px and failed.
   `white-space: nowrap` is REQUIRED or 320px splits the target into a 24px fragment. Shipped as
   `.plan__contact`.

**Rejected: a distinct `--movement` token for lede-to-first-section.** The initial diagnosis was
that lede-to-section and section-to-section sharing one declaration was the defect. Wrong remedy.
At `--section 72` the boundary is already marked twice by type - the lede is 19px/1.55 against
16px/1.625 sections, and its final paragraph is weight 500 against 400. A third spatial marker
double-marks the boundary. Both intervals are deliberately 72px; no `:first-of-type` exists.

**Rejected: an isolated block CTA.** 96px of isolation was proposed then reversed. The CTA ships
inline as the last child of `.plan__copy`, so its 26px interval comes free from `gap: var(--para)`
and it needed no new spacing CSS. At one paragraph gap it reads as the essay's last sentence
rather than a second argument.

Open, not acted on: hierarchy here is triple-marked - size 23px, weight 500, spacing asymmetry. If
the page reads shouty, the cheapest move is 23px -> 20px, NOT more spacing.
See [[emil-kowalski-typography-reference]], [[plan-intro-lede-measurements]],
[[itl-studio-constraints]], [[page-scoping-hook-decision]].
