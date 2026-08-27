---
name: In The Loop
description: A restrained studio index and continuous-system plan.
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
  page-top: "clamp(96px, 14vh, 144px)"
  page-bottom: "80px"
  page-mobile-top: "56px"
  page-mobile-bottom: "40px"
  section: "96px"
  section-mobile: "68px"
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

The homepage is the concise studio argument. The Plan page is the slower explanation of the same
five-part learning system. They share one visual world but have different reading rhythms.

**Key Characteristics:**

- One 600px reading measure
- White paper, dark ink and restrained grey
- Compact identity instead of broad navigation
- Hairline structure instead of cards
- The five-part register as the page's only explanatory structure
- No footer or client-side JavaScript

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
the Plan introduction 18px. Other roles remain stable.

**The Exact Language Rule.** Homepage copy lives in `src/config.ts`; Plan copy lives in
`src/pages/plan.astro` with shared introduction and register data in `src/config.ts`. Do not
paraphrase it. This ASCII document writes the interface action as `Read the plan ->`; the interface
renders the right-arrow glyph. `end-to-end` is always hyphenated.

## Layout

Both routes use a centered 600px shell with 24px gutters. Desktop page padding starts between 96px
and 144px and ends at 80px. The visible A6 mark is 26px; the mark-to-copy gap is 12px.

The homepage moves from identity to headline after 88px, from headline to the five-part register
after 52px, and from the register to `Read the plan ->` after 43px. Register rows use a 92px name
column, a flexible description column, a 24px gap and 19px/20px vertical padding.

The Plan identity-to-introduction gap is 88px. The visible page title is deliberately omitted.
The first two opening lines sit 7px apart; the conclusion follows after 19px. Sections are separated
by 96px and headings sit 22px above body copy. Prose remains within 600px.

At 600px and below, page padding becomes 56px/40px. The homepage and Plan opening gap becomes 62px,
register rows stack name above description and Plan sections separate by 68px. The opening line gaps
become 6px and 17px. At 360px and below, gutters reduce to 20px.

**The One Argument Rule.** Do not add a second homepage action, a footer or unavailable-product
links. The Plan identity is the only return path.

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

The 26px A6 mark sits beside a two-line 13px lockup: the name at 600 and the discipline at 400 in
muted ink. It is static on the homepage. On the Plan page, the lockup is a 48px home target with a
visible focus outline and a subtle 140ms press scale. Reduced motion removes the transition.

### Homepage register and action

Signal, Skills, Harness, Agents and Newsletter are plain, non-interactive rows because their
products do not have live destinations. `Read the plan ->` is the sole homepage link. It has a 48px
target and a resting underline that clears 3:1; hover strengthens the underline without moving the
layout.

### Plan essay

The Plan is one continuous article: founding question, system overview, stay close to the frontier,
install the context, let use decide and share what we learn. The same five-part register from the
homepage is its only visual structure. There is no visible page title, diagram, local table of
contents, sticky navigation or footer.

## Do's and Don'ts

### Do

- **Do** state one shared truth once.
- **Do** preserve exact copy, the 600px measure and the compact A6 lockup.
- **Do** keep links truthful and add a visual only when it clarifies more than the words.
- **Do** verify both routes at 1440px, 390px and 320px after visual changes.

### Don't

- **Don't** add cards, ordinal numbers, broad navigation or a footer.
- **Don't** turn Signal or Newsletter into routes without a new user job.
- **Don't** add client logos, testimonials, metrics, case studies, pricing or invented maturity.
- **Don't** use decorative imagery, gradients, shadows or animation for its own sake.
