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
    fontWeightEmphasis: 600
    lineHeight: 1.55
    letterSpacing: "-0.011em"
  plan-body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    fontWeightEmphasis: 600
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
  riser-open: "46px"
  riser-open-mobile: "15px"
  riser-register: "38px"
  riser-register-mobile: "15px"
  riser-register-max: "76px"
  riser-register-max-mobile: "32px"
  riser-action: "29px"
  riser-action-mobile: "15px"
  riser-action-max: "64px"
  riser-action-max-mobile: "32px"
  riser-close: "18px"
  riser-close-mobile: "21px"
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
  page-bottom: "48px"
  page-mobile-bottom: "16px"
  plan-end: "80px"
  plan-end-mobile: "40px"
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
carries -0.011em tracking so the second sentence holds one line down to 381px. Balanced wrapping is
for the introduction and the headings only; the Plan body does not use it.

Emphasis on the Plan is one weight, 600, carried by `strong` and by nothing else. It marks the
product names in the body and the whole of the introduction's closing line, which is the essay's one
emphasised sentence and the turn from premise to purpose. That line takes no weight of its own in
CSS: the markup says which words are emphasised and one shared rule says how much.

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
48px below the colophon on the homepage and 80px below it on the Plan. The visible A6 mark is 26px;
the mark-to-copy gap is 12px.

Both pages sit in a `.shell` that is a flex column at least one screen tall, and `.main` is the only
part of that column allowed to grow. A page shorter than the screen therefore ends at the foot of
the screen, with its surplus absorbed above the colophon rather than below it; a page longer than
the screen simply runs on, and the colophon follows the last words. The screen is measured as
`100svh`, the small viewport, because that is the height a page which never scrolls permanently sits
in. A `100vh` declaration precedes it as a fallback for engines that predate `svh`, but Astro's CSS
minifier discards the duplicate property, so `dist` ships `100svh` alone and a pre-2022 engine gets
no fallback at all. That is accepted: the consequence there is a colophon that sits above the fold
on a short page, not a broken layout.

The homepage's macro intervals are not margins on its blocks. They are four empty `.riser` items in
that column, each holding a floor as its `flex-basis` and taking a share of whatever height the
screen leaves over: 46px and three shares from the identity to the headline, 38px and one share from
the headline to the five-part register, 29px and one share from the register to `Read the plan ->`,
and 18px and five shares from the action to the colophon. The two interior risers are capped, at
76px and 64px, so the headline, the register and the action keep reading as one block however tall
the window is. The two terminal risers are uncapped and divide the rest three to five, which holds
the argument a little above the optical centre. `flex-shrink` is 0 on all four, so a screen too
short for the page takes a scrollbar rather than an interval below its floor, and nothing on the
page is measured in script. Register rows use a 92px name column, a flexible description column, a
24px gap and 19px/20px vertical padding.

Those floors replaced fixed intervals of 88px, 52px and 43px, lowered by 42px, 14px and 14px: the
same three to one to one the risers grow in. That is what keeps a screen which already held the page
composed exactly as it was, because the height comes back as surplus and the surplus is divided the
way it was taken.

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
the column narrows. The colophon closes both pages. On the Plan it sits 224px below the last words,
128px at 600px and below, and the page then ends 80px beneath it on desktop and 40px on mobile.
Those tails were 160px and 120px, sized on the argument that a page with no footer needs a closing
interval at least twice its largest interval. The colophon terminates the page now, so that argument
is void and the air it bought has moved above the signature instead of below it. A long approach and
a short tail reads as an ending; 160px of empty paper under a signature reads as a page still
loading. Prose remains within 600px.

At 600px and below the homepage compresses to hold one screen. Page padding becomes 24px, ending
16px below the colophon on the homepage and 40px below it on the Plan. The Plan's opening gap
becomes 32px. The homepage's four riser floors become 15px, 15px, 15px and 21px, with both interior
caps at 32px; the shares are unchanged, so the page composes on the same proportions it does on a
desktop. Register rows stack name above description on a 4px gap with 12px/13px vertical padding.
Plan sections separate by 56px and the closing interval becomes 96px. The opening line gaps stay at
12px and 32px. Only intervals between whole blocks compress on mobile; intervals inside the prose do
not, because Plan body type is 16px/1.625 at both widths. At 360px and below, gutters reduce to
20px.

Measured against the built output, the homepage document height now equals the viewport height
exactly at 1440x1080, 1440x900, 1440x800, 430x780, 412x811, 393x659, 390x664 and 360x700. The whole
argument, register, action and colophon included, is visible there without scrolling: the page ends
at the foot of the screen on current phones and on a laptop window.

Two screens still scroll, and both are recorded rather than fixed. A 375x553 viewport, an iPhone SE
2 or 3 under its browser chrome, runs 94px long; a 320x460, the first generation SE, runs 218px
long. Closing either would mean cutting a register row, dropping a type size or shrinking a tap
target, and none of those is for sale. No type size shrinks to reach the fit, no copy is cut, there
is no horizontal overflow or console error at any of those widths on either route, and every link on
the site measures 48px: the homepage action, the Plan's home link, its closing contact link and the
colophon link on both pages.

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
needs. On the Plan that interval is the fixed 224px footer gap. On the homepage it is the closing
riser, which starts at 18px and grows, so the colophon adds no margin of its own and the page's last
interval is whatever the screen has left. The name link takes every state from the shared `.link`
base and adds nothing but a 48px target, bought with symmetric vertical padding and an equal
negative margin so the line itself does not move. It is the site's one outbound link, and the
colophon carries no mailto: contact belongs to the Plan's closing line, which is prose, and putting
the same offer in furniture would say it twice.

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
