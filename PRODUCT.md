# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitor is an early-stage founder, operator or hiring manager encountering Ryan or In
The Loop with little context. They need to understand the work, then be able to read how the company
plans to learn what an agent-native startup should become.

## Product Purpose

In The Loop is the hub for Ryan's work on how startups operate now that agents work. The homepage
states that position and introduces Skills, Agents, Harness, Signal and Newsletter. The Plan page
explains the causal sequence from finding what matters to learning from customers.

## Positioning

The settled position is `Agent-native startup operations`, expressed through the line `Building the
systems startups need now that agents work.` Signal curates what matters on the frontier. Skills
indexes agent skills for startup work. The Harness installs startup context. Agents package valuable
workflows. Newsletter shares learning and brings customers, use and feedback back into the system.

## Operating Context

The site is a quiet public background-check and explanation surface, not a sales funnel. Visitors
may arrive from Ryan's personal site, LinkedIn, GitHub or a direct introduction. The homepage must
work in one pass; the Plan page rewards a slower read.

## Capabilities and Constraints

- `/` and `/plan` are the only rendered pages. `/skills` is a 302 to
  `https://startupskills.dev/skills`, not another studio page.
- The homepage links its first register row, Skills, to `https://startupskills.dev/` and its second,
  Agents, to `https://ryanhennebry.xyz/competitor-intel-agent/`, and retains `Read the plan ->`; the
  Plan identity returns home.
- Harness, Signal and Newsletter remain concepts, not links to unavailable products.
- Signal and Newsletter are not routes.
- Shared homepage and Plan metadata remain centralised in `src/config.ts`.
- The Plan uses prose only. Add a visual only when it makes a relationship clearer than the words
  already do.
- No invented team, client proof, testimonials, results, prices or provenance.
- The studio repository is the entire scope; `ryanhennebry.xyz` remains untouched.

## Brand Commitments

The name is In The Loop. The A6 identity is a white dot and open loop on `#9DA3A8`, with no border,
gradient or shadow. Exact homepage and Plan copy must not be paraphrased; `end-to-end` is always
hyphenated.
Interface Office and ibelick are craft references; the studio remains recognisably its own brand.

## Product Principles

- Make the position legible before asking for attention.
- Let each line and interaction perform one necessary job.
- State one shared truth once.
- Express craft through proportion, typography and detail, not decoration.
