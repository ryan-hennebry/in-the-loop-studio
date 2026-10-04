# in-the-loop-studio

This file overrides `../AGENTS.md` on conflict.

## Read first

- Product scope, cross-product links, shared infrastructure or build sequence: read
  `../PRODUCT-DIRECTION.md`. It owns the relationship between the independent products and requires
  `/grill-me` before a major cross-repository change; this repo owns the Studio implementation and
  release gates.
- Product or copy changes: read `PRODUCT.md`.
- Layout, identity or interaction changes: read `DESIGN.md`.
- Deployment or external assets: read `HANDOFF.md`.

## Authority

This is a two-page studio site: a concise homepage and a Plan reading surface. It is a quiet
background-check and explanation surface, not a sales funnel.

Shared copy and changeable data live in `src/config.ts`. `Agent-native startup operations` is an
explicit repository-level exception to the parent vocabulary ban.

The homepage presents Skills, Signal, Harness, Agents and Newsletter, then links to `/plan`. Skills
is the first register row and links to `https://startupskills.dev/`; the other rows remain concepts,
not links. The Plan page explains the causal sequence in four prose sections: discover what matters,
install the context, let use decide and share what we learn. Signal and Newsletter are not routes.
Keep `Projects in development` retired unless Ryan requests it again. The Plan then closes with one
quiet mailto to `ryan@in-the-loop.studio`, written as inline prose set apart by the standard section
interval and carrying no heading of its own. The homepage keeps no contact action.

Both pages close on the same colophon: `In The Loop` at the left and `by Ryan Hennebry` at the
right, linking to Ryan's LinkedIn. The wordmark links home from the Plan only; on the homepage it is
plain text, because a link to the page already open leads nowhere. So the Plan's colophon carries
two links and the homepage's carries one, and the line reads identically either way. It is a
signature, not a navigation bar: it offers no menu, names no destination the page has not already
earned, and never competes with the actions above it. Skills and LinkedIn are the site's outbound
links; the colophon carries no mailto, and the Plan's closing line remains the only contact on the
site.

## Truth

Use the supplied first-person plural only for the company's shared work and learning. Publish no
invented team, client proof, testimonials, results, provenance, prices or service ladder. `/` and
`/plan` are the only routes.

## Identity

The A6 mark is a white dot and open loop on `#9DA3A8`, flat and without border, gradient or shadow.
The vector master is `public/brand/in-the-loop-mark.svg`; small favicons use optically adjusted
geometry. The visible lockup follows the compact two-line treatment in `DESIGN.md`.

## Completion

Run `./verify.sh`. For visual changes, inspect `/` and `/plan` at 1440px, 390px and 320px. Completion
means the production build passes, both pages load without browser errors or horizontal overflow,
the supplied copy remains intact, the Plan keeps a clear reading rhythm, and navigation works in
both directions.

The homepage must also hold one screen without scrolling on current phones and laptop windows. It
ends exactly at the foot of the screen at 360x700, 390x664, 393x659, 412x811, 430x780 and at 1440px
by 800px and taller. A 375x553 and a 320x460 still scroll, by 94px and 218px, and that is accepted:
closing either would cost a register row, a type size or a tap target.
