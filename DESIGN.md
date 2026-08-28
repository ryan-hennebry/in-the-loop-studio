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
  riser-register: "56px"
  riser-register-mobile: "15px"
  riser-register-max: "112px"
  riser-register-max-mobile: "32px"
  riser-action: "44px"
  riser-action-mobile: "15px"
  riser-action-max: "96px"
  riser-action-max-mobile: "32px"
  riser-close: "18px"
  riser-close-mobile: "21px"
  riser-grow: "1:2:2:9"
  riser-grow-mobile: "3:1:1:5"
  section: "72px"
  section-mobile: "56px"
  lockup-gap: "88px"
  lockup-gap-mobile: "32px"
  section-close: "144px"
  section-close-mobile: "96px"
  close-rule: "60px"
  close-rule-mobile: "32px"
  page-top: "clamp(96px, 14vh, 144px)"
  page-top-home: "clamp(64px, 8vh, 96px)"
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
- A two-part colophon closing both pages, and no client-side JavaScript, page transition
  included

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
padding carries one extra optical pixel. Desktop page padding starts between 96px and 144px on the
Plan and between 64px and 96px on the homepage, and ends 48px below the colophon on the homepage and
80px below it on the Plan. The homepage opens higher because it is one screen rather than an essay:
its top margin is a share of the screen it has, `clamp(64px, 8vh, 96px)` set on `[data-page="home"]`
above 600px, where the Plan keeps the shared `clamp(96px, 14vh, 144px)`. The visible A6 mark is
26px; the mark-to-copy gap is 12px.

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
screen leaves over: 46px and one share from the identity to the headline, 56px and two shares from
the headline to the five-part register, 44px and two shares from the register to `Read the plan ->`,
and 18px and nine shares from the action to the colophon. The four shares are named tokens,
`--grow-open`, `--grow-register`, `--grow-action` and `--grow-close`, so the proportion is stated
once and can differ by width. The two interior risers are capped, at 112px and 96px, so the
headline, the register and the action keep reading as one block however tall the window is.
`flex-shrink` is 0 on all four, so a screen too short for the page takes a scrollbar rather than an
interval below its floor, and nothing on the page is measured in script. Register rows use a 92px
name column, a flexible description column, a 24px gap and 19px/20px vertical padding.

The shares are 1:2:2:9 above 600px. They were 3:1:1:5, and that pushed the opening down: at 1440x900
the headline began 242px from the top, 27 per cent of the screen, while the riser below the register
measured 39.8px against 39px of padding inside each register row. `--page-top` is fixed padding
taken before the risers divide what is left, so on a tall screen the whole surplus went to the
risers and the opening stayed where it was. Tschichold's canon puts the top margin at about half the
bottom, and dividing the surplus three to five drove that ratio toward one to one, which is the
proportion the eye reads as sinking. Giving the opening one share instead of three, the two interior
risers two each instead of one, and the closing riser nine instead of five brings the headline to
165px, 18 per cent, and leaves the register more air around it than inside it. The register row's
own padding was not touched: 19px/20px is already generous, and the deficit was outside the rows
rather than inside them.

Those floors came from fixed intervals of 88px, 52px and 43px, lowered by 42px, 14px and 14px in the
same three to one to one the risers grew in at the time, so that a screen which already held the
page stayed composed exactly as it was: the height came back as surplus and the surplus was divided
the way it was taken. The two interior floors were raised again, to 56px and 44px with their caps at
112px and 96px, when the shares changed. A riser that takes two shares needs a floor to match, or a
short window composes on one proportion and a tall one on another.

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

At 600px and below the homepage compresses to hold one screen. Page padding becomes 24px on both
routes, ending 16px below the colophon on the homepage and 40px below it on the Plan; the homepage's
higher opening is gated above 600px and does not apply here. The Plan's opening gap becomes 32px.
The homepage's four riser floors become 15px, 15px, 15px and 21px, with both interior caps at 32px,
and the shares go back to 3:1:1:5. A phone has almost no surplus to divide, so the desktop's 1:2:2:9
would buy nothing there and would spend the little there is on the wrong intervals; the mobile
composition is tuned to hold one screen at 390px and is left exactly as it was. Register rows stack
name above description on a 4px gap with 12px/13px vertical padding. Plan sections separate by 56px
and the closing interval becomes 96px. The opening line gaps stay at 12px and 32px. Only intervals
between whole blocks compress on mobile; intervals inside the prose do not, because Plan body type
is 16px/1.625 at both widths. At 360px and below, gutters reduce to 20px.

Measured against the built output, the homepage document height now equals the viewport height
exactly at 1920x1080, 1728x1117, 1512x982, 1440x1080, 1440x900, 1440x800, 430x780, 412x811, 393x659,
390x664 and 360x700. The whole argument, register, action and colophon included, is visible there
without scrolling: the page ends at the foot of the screen on current phones and on a laptop window.

Two screens still scroll, and both are recorded rather than fixed. A 375x553 viewport, an iPhone SE
2 or 3 under its browser chrome, runs 94px long; a 320x460, the first generation SE, runs 218px
long. Closing either would mean cutting a register row, dropping a type size or shrinking a tap
target, and none of those is for sale. No type size shrinks to reach the fit, no copy is cut, there
is no horizontal overflow or console error at any of those widths on either route, and every link on
the site measures 48px: the homepage action, the Plan's home link, its closing contact link, and the
colophon's wordmark and author link on both pages.

**The One Argument Rule.** Do not add a second homepage action or unavailable-product links. The
colophon is the only structure allowed below the argument, and it is a signature rather than a
second action: one line of 13px identity type, two links, and nothing that competes for the reader
the homepage action has just asked for. The Plan may close with one quiet mailto link set as the
last line of the page, carrying no heading of its own and separated by a bespoke 144px closing
interval, with a hairline 60px wide on desktop and 32px at 600px and below set 14px above it. The
closing turns from describing the company's work to addressing the reader, and with no heading to
mark that turn the standard section interval was indistinguishable from a normal section break: the
hairline and the longer interval are the only signal the turn gets. The closing line is still prose,
not furniture, and gains no container, bracket or box. The Plan's lockup and the colophon wordmark
are the two return paths, at the top and at the foot of the same page, and there is no third.

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

## Motion and states

Every interactive element carries `.link` and takes its rest, hover, press and focus states from one
place. An element may override a declaration where its job genuinely differs; nothing restates a
link state of its own.

**One animated channel.** The resting underline is `#858a8f` at 0.075em on a 0.17em offset, and
hover takes it to ink. That colour crossing is the only thing that animates, over `--link-motion`,
140ms, on `--ease-out`. Hover used to thicken the underline as well. Chromium does not transition
`text-decoration-thickness`: Web Animations interpolates it, but a CSS transition snaps it at frame
0, so an eased colour and a stepped weight arrived apart and the mark read as fattening before it
darkened. Colour is the only part of a real underline that animates reliably, so the thickness
change and its place in the transition list are both gone. Rebuilding the underline as a separate
element or a gradient would animate more and would cost `text-decoration-skip-ink`. The
rest-to-hover colour step is 5.06:1 and carries the hover on its own.

**One press, in one channel.** Every link on the site presses the way it hovers: whatever is muted
about it comes up to ink, and nothing moves. `.primary-link` and `.identity__home` used to scale to
0.98 instead, and that scale fought the hover it arrives under. The arrow sits 127px from a
`transform-origin: left center` on a 135.06px box, so the press drew it 2.5px back the instant the
pointer went down and undid five sixths of the 3px it had just travelled: the click read as the
arrow snapping backwards rather than as a confirmation. A press is in any case only ever seen alone
under a coarse pointer, because hover is behind `(hover: hover) and (pointer: fine)` and the tap
highlight is suppressed. There the colour step is much the louder of the two, a 5.06:1 crossing
against a 2 per cent shrink of a 48px target that is barely legible. A transform never applied to a
non-replaced inline box either, so `.plan__contact`, `.colophon__home` and `.colophon__link` could
not have taken a scale in the first place. One `.link:active` rule now covers all five.

**One thing moves.** The homepage arrow travels 3px on hover, on `--ease-arrow`,
`cubic-bezier(0.4, 0, 0.2, 1)`, over the same 140ms. The shared `--ease-out`,
`cubic-bezier(0.23, 1, 0.32, 1)`, is front-loaded: 54 per cent of the travel lands in
the first 20ms and 90 per cent in the first 50ms, so a 3px move on it has a perceived duration of
around 50ms, below the 100ms floor for immediate feedback, and reads as a twitch rather than as
motion. Holding that curve and raising the duration to 180ms was measured and rejected: it is still
88 per cent travelled at 60ms, so the twitch survives, the extra time is a tail with nothing in it,
and it would slow every underline on the site to fix one arrow. A colour crossing is one event
whatever its shape, which is why everything else keeps `--ease-out`.

**Forced colours.** In Windows High Contrast the system repaints every decoration in its own colour,
which collapses rest and hover into the same mark. Thickness survives that override where colour
does not, so a `forced-colors: active` block gives hover 0.16em there. It is a state, not a
transition; nothing animates it.

**Focus.** Links take a 2px `#555b60` outline offset 3px, with 2px rounding. `.plan__contact` is the
one exception and takes no outline at all. It is padded to a 48px target inside a 26px line, so its
box overlaps the line above by construction and no offset escapes that: the shared 3px outset
painted its top edge at y 535.38 and -1px painted it at 539.38, both inside a glyph band above that
runs 531.63 to 547.38. Clearing that band needs -8.75px, and an inset that deep on an 88.63px run
would draw the ring's own sides through the first and last letters. So that one link is marked on
the line rather than around it, in the same focus colour at the same 2px: one rule above the word
and one below, painted at 551.88 and 572.88, inside its own 20px content box. They cannot reach a
neighbouring line at any width, they shift nothing, and `text-decoration` survives forced colours,
where a `box-shadow` would not be painted at all.

**Page transition.** Navigation between the two routes cross-fades over 220ms on `--ease-out`,
declared with `@view-transition { navigation: auto }`. It is CSS the browser
runs itself, so the zero-JavaScript budget is intact: `dist` still ships exactly two script elements
and both are the JSON-LD identity graph. Only `.identity__lockup` is named, as `identity`. Its group
animates between positions while its old and new snapshots are given `animation: none` and full
opacity, so the lockup holds still and stays solid while the page changes underneath it. The
colophon is deliberately not named: it sits at y=833.81 on the homepage and y=1959.38 on the Plan at
1440x900, so naming it would send it 1,126px down the screen on every navigation.

Support is partial and the degradation is silent. Chrome and Edge 126 and Safari 18.2 run it.
Firefox has no cross-document view transitions, Bugzilla 1860854 is open, so it ignores the block
and navigates as it always did; there is nothing to fall back to and nothing to detect. The
reduced-motion guard is nested inside the block as a second `@view-transition` with
`navigation: none`, because the general guard at the foot of the file targets `*`, `*::before`
and `*::after`, and those selectors do not reach the `::view-transition` pseudo-elements, which hang
off the document root in a separate tree.

## Components

### Identity

The 26px A6 mark sits beside a 13px lockup. Both routes carry the identical full lockup: the name at
600 and the discipline at 400 in muted ink. The Plan makes that lockup a 48px home target with a
visible focus outline, and it presses by bringing its discipline line up to ink over 140ms, the same
step its hover makes. Reduced motion removes the transition. That home link centres its flex item
rather than letting it stretch, so the lockup box measures 36.38px on both routes; stretched it was
38px on the Plan, and the named view transition would have animated the 1.62px difference on every
navigation.

### Homepage register and action

Signal, Skills, Harness, Agents and Newsletter are plain, non-interactive rows because their
products do not have live destinations. `Read the plan ->` is the sole homepage link. It has a 48px
target and a resting underline that clears 3:1; hover takes that underline to ink without moving the
layout. The link is declared `inline-flex` but is a flex item of `.main`, so it blockifies, and
`align-self: flex-start` holds it to its own content at 135.06px. Without that it stretched the
whole measure, 608px at 1440px and the full column on a phone, and several hundred pixels of empty
paper carried a pointer. The arrow is an `::after` pseudo-element on the label carrying `content:
"\2192" / ""`, so the glyph is drawing rather than copy and the empty alternative text keeps it out
of the accessible name. It is the one thing on either page that moves: hover translates it 3px, into
3px of trailing padding the label reserves at rest, so the announced movement happens and the link's
own box does not change size. It travels on `--ease-arrow` rather than the shared `--ease-out`.

### Colophon

Both pages close on the same line: the studio wordmark at the left, linking home, and `by Ryan
Hennebry` at the right, linking to LinkedIn. It borrows the identity's 13px role, so the page ends
in the voice it opened in, and it carries no rule, box or background; the interval above it is the
only separation it needs. On the Plan that interval is the fixed 224px footer gap. On the homepage
it is the closing riser, which starts at 18px and grows, so the colophon adds no margin of its own
and the page's last interval is whatever the screen has left.

Both links take every state from the shared `.link` base and add nothing but a 48px target, bought
with 16px of symmetric vertical padding and an equal negative margin so the line itself does not
move. Both are inline runs inside their spans rather than direct flex items: as a flex item the
wordmark measures 50.188px, because a flex item is sized by its line box and an inline by its font
metrics. The wordmark takes the whole link treatment rather than the lockup's, which hovers by
bringing its muted second line up to ink; the wordmark is already ink at 600 and has no muted line
to bring, so that idiom would produce a hover that changed nothing, and inverting it would read as
the link being disabled. Underlining both halves also ends a real inconsistency: one 13px line used
to carry a rule under one half of itself and nothing under the other.

LinkedIn remains the site's one outbound link, and the colophon carries no mailto: contact belongs
to the Plan's closing line, which is prose, and putting the same offer in furniture would say it
twice.

### Plan essay

The Plan is one continuous article: founding question, discover what matters, install the context,
let use decide and share what we learn, then one quiet closing line offering contact under no
heading of its own. It is prose only. There is no visible page title, diagram, register, local table
of contents or sticky navigation. The essay ends on the shared colophon, which belongs to the shell
rather than to the essay. The closing carries no heading; a hairline at 15% of the current text
colour, flush left with the measure and 60px wide on desktop and 32px at 600px and below, is the
only rule on the page and marks the turn a heading would otherwise make. It is drawn as a
pseudo-element, so it adds no markup and stays out of the accessibility tree. The closing contact
link is a plain inline prose link; symmetric vertical padding and an equal negative margin give it a
48px tap target without disturbing the 26px paragraph interval, and it does not wrap. Its focus mark
is the site's one exception: not a ring but a 2px rule above the word and another below it, in the
focus colour, because a 48px target inside a 26px line has no outline offset that clears the glyph
band above without cutting the word itself. The marks paint at 551.88 and 572.88, inside the link's
own content box.

## Do's and Don'ts

### Do

- **Do** state one shared truth once.
- **Do** preserve exact copy, the 600px measure and the compact A6 lockup.
- **Do** keep links truthful and add a visual only when it clarifies more than the words.
- **Do** verify both routes at 1440px, 390px and 320px after visual changes.

### Don't

- **Don't** add cards, ordinal numbers or broad navigation.
- **Don't** grow the colophon: it carries the studio name, the author and their two links.
- **Don't** turn Signal or Newsletter into routes without a new user job.
- **Don't** add client logos, testimonials, metrics, case studies, pricing or invented maturity.
- **Don't** use decorative imagery, gradients, shadows or animation for its own sake.
