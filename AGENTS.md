# in-the-loop-studio

This file overrides `../AGENTS.md` on conflict.

## Read first

- Product or copy changes: read `PRODUCT.md`.
- Layout, identity or interaction changes: read `DESIGN.md`.
- Deployment or external assets: read `HANDOFF.md`.

## Authority

This is a two-page studio site: a concise homepage and a Plan reading surface. It is a quiet
background-check and explanation surface, not a sales funnel.

Shared copy and changeable data live in `src/config.ts`. `Agent-native startup operations` is an
explicit repository-level exception to the parent vocabulary ban.

The homepage presents Signal, Skills, Harness, Agents and Newsletter, then links to `/plan`. The
Plan page explains the same system with the supplied copy and the same five-part register. Signal and
Newsletter are concepts, not routes. Keep `Projects in development` and the email action retired
unless Ryan requests them again.

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
the supplied copy remains intact, the Plan keeps a clear reading rhythm, and navigation works in both directions.
