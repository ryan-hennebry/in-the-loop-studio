---
name: In The Loop
description: A restrained studio index and causal Plan.
colors:
  paper: "#ffffff"
  ink: "#17191b"
  muted: "#5f656b"
  rule: "#e1e3e4"
  focus: "#555b60"
  selection: "#e8e9ea"
  brand-a6: "#9da3a8"
typography:
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.24
    letterSpacing: "-0.026em"
  section-title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.022em"
  plan-intro:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.011em"
  plan-body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  identity:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  action:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  focus: "2px"
spacing:
  gutter: "24px"
  gutter-narrow: "20px"
  base: "4px"
  mark-gap: "12px"
  lede-line: "12px"
  heading-gap: "14px"
  register-pair: "24px"
  register-pair-mobile: "4px"
  para: "26px"
  lede-turn: "32px"
  register-row: "19px 20px"
  register-row-mobile: "12px 13px"
  action-gap: "43px"
  action-gap-mobile: "24px"
  register-top: "52px"
  register-top-mobile: "24px"
  section: "72px"
  section-mobile: "56px"
  lockup-gap: "88px"
  lockup-gap-mobile: "32px"
  section-close: "144px"
  section-close-mobile: "96px"
  close-rule: "60px"
  close-rule-mobile: "32px"
  page-top: "clamp(96px, 14vh, 144px)"
  page-mobile-top: "24px"
  page-bottom: "80px"
  page-mobile-bottom: "16px"
  plan-end: "160px"
  plan-end-mobile: "120px"
  footer-gap: "224px"
  footer-gap-mobile: "128px"
components:
  primary-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.focus}"
    padding: "0 8px"
    height: "48px"
---

# Design System: In The Loop

## Overview

**Creative North Star: "The Working Paper"**

In The Loop is composed, not decorated. A compact A6 identity, exact language, white space and quiet
rules make the company legible without turning the site into a sales
funnel.

The homepage is the concise studio argument. The Plan page is the slower causal explanation of how
that argument is carried out. They share one visual world but have different reading rhythms.

**Direction.** Each page answers an agreed direction rather than an assembly of parts. The homepage
is a studio index, composed rather than decorated: identity, proposition, the five-part system and a
direct path to the plan, with the whole studio argument inside the first viewport and no sales
funnel anywhere in it. The Plan is the company plan read as one learning system, not a roadmap or a
manifesto: a prose-only causal essay that opens on the compact identity, the founding question and
the start of the sequence. The approved comps were the Studio Register for the homepage, seed
34a1afad, and prose structure 5 for the Plan, seed 13e54a9e. Neither page is finished until its copy
is exact, its states are truthful, its next step is direct and the build is reviewed and written
down here; unreviewed and undocumented is unfinished. These directions used to ship as HTML comments
inside the pages themselves, where any visitor could read them. They are design intent, not markup,
and they live here now.

**Key Characteristics:**

- One 600px reading measure
- White paper, dark ink and restrained grey
- Compact identity instead of broad navigation
- Hairline structure instead of cards
- A five-part homepage register and a prose-only Plan
- A two-part colophon closing both pages, and no client-side JavaScript

## Colors

A6 grey is the identity colour. It belongs to the mark and brand assets. Do not darken the mark to
make it perform a functional job.

Dark ink carries primary text; muted ink carries descriptions and notes. Pale rules divide related
content without creating boxes. Focus and selection colours are reserved for their named states.

## Typography

Inter Variable is the only typeface. Weight and measure create the hierarchy; there is no display
font, uppercase label system or oversized type.

The homepage uses the Headline, Body, Identity and Action roles. The Plan adds Section Title, Plan
Intro and Plan Body. On screens up to 600px, the headline becomes 24px, the section title 22px and
the Plan introduction 18px. Other roles remain stable. The Plan introduction balances its line
breaks so its three sentences break at clause boundaries rather than at the last word that fits, and
carries -0.011em tracking so the second sentence holds one line down to 384px. Balanced wrapping is
for the introduction and the headings only; the Plan body does not use it.

**The Exact Language Rule.** Homepage copy and the Plan introduction live in `src/config.ts`; the
rest of the Plan copy lives in `src/pages/plan.astro`. Do not
paraphrase it. The homepage action is the three words `Read the plan`; its arrow is drawn in CSS and
is not part of the copy, so the label alone is the accessible name. This ASCII document writes the
rendered action as `Read the plan ->`. `end-to-end` is always hyphenated.

## Layout

Both routes use a centered 600px shell with 24px gutters. Every layout interval on both pages is a
named custom property declared once in `:root` and overridden once in the 600px block; no interval
is a bare literal inside a rule or a `var()` fallback. Both pages therefore read from one scale
rather than from two. The scale is built on 4px; the only departure is the register row, whose lower
padding carries one extra optical pixel. Desktop page padding starts between 96px and 144px and ends
at 80px on the homepage and 160px on the Plan. The visible A6 mark is 26px; the mark-to-copy gap is
12px.

The homepage moves from identity to headline after 88px, from headline to the five-part register
after 52px, and from the register to `Read the plan ->` after 43px. Register rows use a 92px name
column, a flexible description column, a 24px gap and 19px/20px vertical padding.

`<body>` carries `data-page="home"` or `data-page="plan"`, and that attribute is how page-scoped
spacing such as the Plan's longer ending is applied: CSS custom properties inherit downward only, so
a value set on `.plan` cannot reach the `.shell` padding above it.

The Plan identity-to-introduction gap is 88px. Its lockup carries the same name and discipline line
as the homepage, and the visible page title is deliberately omitted.
The first two opening lines sit 12px apart; the conclusion follows after 32px. That turn is the
widest interval inside the prose, because it is the page's one rhetorical turn; at 26px it would tie
the ordinary paragraph gap optically and stop reading as a turn at all. Sections are separated by
72px, paragraphs inside a section by 26px, and a heading sits 14px above the body it introduces. A
heading is bound more tightly to its own copy than paragraphs are to each other; measured against
the paragraph gap those three intervals hold a 2.77 to 1 to 0.54 ratio, and that ratio is the page
rhythm. That heading gap is deliberately low because headings are set at 23px on a 1.3 line-height,
so they carry almost no half-leading and the box sits close to its own baseline; a declared gap
within about 6px of the paragraph gap therefore disappears optically. The bond has to be bought in
the box model rather than assumed from the declared numbers. The closing line is set apart by 144px
instead of 72px, and its hairline, 60px on desktop and 32px at 600px and below, sits 14px above the
copy, borrowing the heading gap in place of the heading the closing does not have; the interval is
measured to the hairline, not to the paragraph. The rule is sized as a fraction of the measure, so
it holds roughly a tenth of the column at every width rather than growing proportionally larger as
the column narrows. The colophon closes both pages: it sits 224px below the last content, 128px at
600px and below, and each page's own ending falls beneath it. Prose remains within 600px.

At 600px and below the homepage compresses to hold one screen. Page padding becomes 24px, ending at
16px on the homepage and 120px on the Plan. The homepage and Plan opening gap becomes 32px, the
headline-to-register gap 24px and the register-to-action gap 24px. Register rows stack name above
description on a 4px gap with 12px/13px vertical padding. Plan sections separate by 56px and the
closing interval becomes 96px. The opening line gaps stay at 12px and 32px. Only intervals between
whole blocks compress on mobile; intervals inside the prose do not, because Plan body type is
16px/1.625 at both widths. At 360px and below, gutters reduce to 20px.

The measured result is a 643px homepage at 360px wide and above, against the roughly 664px a
390x844 phone shows under its browser chrome. The whole argument, register and action included, is
visible there without scrolling. A 375x667 or 320x568 screen still scrolls, and that is accepted:
the remaining distance could only be bought from type size or from the register itself. No type size
shrinks to reach the fit, no copy is cut and no tap target falls below 48px.

**The One Argument Rule.** Do not add a second homepage action or unavailable-product links. The
colophon is the only structure allowed below the argument, and it is a signature rather than a
second action: two spans of 13px identity type, one link, and nothing that competes for the reader
the homepage action has just asked for. The Plan may close with one quiet mailto link set as the
last line of the page, carrying no heading of its own and separated by a bespoke 144px closing
interval, with a hairline 60px wide on desktop and 32px at 600px and below set 14px above it. The
closing turns from describing the company's work to addressing the reader, and with no heading to
mark that turn the standard section interval was indistinguishable from a normal section break: the
hairline and the longer interval are the only signal the turn gets. The closing line is still prose,
not furniture, and gains no container, bracket or box. The Plan identity is the only return path.

## Elevation & Depth

The system is flat. It uses no shadows, gradients, overlays or tonal surface stacks. Hierarchy comes
from spacing, weight and hairline rules.

**The White Paper Rule.** A new surface begins on white and earns structure with type and rules, not
containers.

## Shapes

Most of the site is square and open. Rules are one pixel. Focus outlines may use 2px rounding.

The A6 mark is fixed artwork: a white dot and open loop on brand grey, with no border, gradient or
shadow. `public/brand/in-the-loop-mark.svg` is the vector master; favicons use optically adjusted
geometry for small sizes.

## Components

### Identity

The 26px A6 mark sits beside a 13px lockup. Both routes carry the identical full lockup: the name at
600 and the discipline at 400 in muted ink. The Plan makes that lockup a 48px home target with a
visible focus outline and a subtle 140ms press scale. Reduced motion removes the transition.

### Homepage register and action

Signal, Skills, Harness, Agents and Newsletter are plain, non-interactive rows because their
products do not have live destinations. `Read the plan ->` is the sole homepage link. It has a 48px
target and a resting underline that clears 3:1; hover strengthens the underline without moving the
layout. The arrow is an `::after` pseudo-element on the label carrying `content: "\2192" / ""`, so
the glyph is drawing rather than copy and the empty alternative text keeps it out of the accessible
name. It is the one thing on either page that moves: hover translates it 3px, into 3px of trailing
padding the label reserves at rest, so the announced movement happens and the link's own box does
not change size.

### Colophon

Both pages close on the same line: the studio name at the left, `by Ryan Hennebry` at the right,
linking to LinkedIn. It borrows the identity's 13px role, so the page ends in the voice it opened
in, and it carries no rule, box or background; the interval above it is the only separation it
needs. The name link takes every state from the shared `.link` base and adds nothing but a 48px
target, bought with symmetric vertical padding and an equal negative margin so the line itself does
not move. It is the site's one outbound link, and the colophon carries no mailto: contact belongs to
the Plan's closing line, which is prose, and putting the same offer in furniture would say it twice.

### Plan essay

The Plan is one continuous article: founding question, discover what matters, install the context,
let use decide and share what we learn, then one quiet closing line offering contact under no
heading of its own. It is prose only.
There is no visible page title, diagram, register, local table of contents or sticky navigation. The
essay ends on the shared colophon, which belongs to the shell rather than to the essay. The closing
carries no heading; a hairline at 15% of the current text colour, flush left with the measure and
60px wide on desktop and 32px at 600px and below, is the only rule on the page and marks the turn a
heading would otherwise make. It is drawn as a pseudo-element, so it adds no markup and stays out of
the accessibility tree. The closing contact link is a plain inline prose link; symmetric vertical
padding and an equal negative margin give it a 48px tap target without disturbing the 26px paragraph
interval, and it does not wrap.

## Do's and Don'ts

### Do

- **Do** state one shared truth once.
- **Do** preserve exact copy, the 600px measure and the compact A6 lockup.
- **Do** keep links truthful and add a visual only when it clarifies more than the words.
- **Do** verify both routes at 1440px, 390px and 320px after visual changes.

### Don't

- **Don't** add cards, ordinal numbers or broad navigation.
- **Don't** grow the colophon: it carries the studio name, the author and one link.
- **Don't** turn Signal or Newsletter into routes without a new user job.
- **Don't** add client logos, testimonials, metrics, case studies, pricing or invented maturity.
- **Don't** use decorative imagery, gradients, shadows or animation for its own sake.
