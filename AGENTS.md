# in-the-loop-studio

in-the-loop.studio. One page plus one subpage. Parent workspace rules live in `../AGENTS.md`. This
file wins on conflict with it.

## What this surface is, and what it is not

The hub for In The Loop: the umbrella body of work, of which the studio is one part rather than a
separate brand. The page carries a positioning line, links out to the other projects, and a contact
action. That is the whole of it.

It is not a sales site. The near-term goal is a role, with freelance work taken alongside, so this
page exists to be found and to stand up to a background check, not to run a funnel. It does not
qualify anyone, and it does not ask for anything except an email if the reader wants one.

The identity page at ryanhennebry.xyz lists the same projects. That is additive on purpose, not a
duplication to be resolved: the person carries authority of his own instead of routing everything
through the studio, and the studio is one entry among his projects rather than the parent that holds
them. ibelick.com does the same thing, and it is the reference for structure. interfaceoffice.com is
the reference for tone.

## Routes

| Route | What |
|---|---|
| `/` | The positioning line, the links out, the contact action, newsletter capture |
| `/newsletter` | The archive, built from the `in-the-loop-newsletter` repo. The only subpage |

No `/work` page. No case studies. No pricing page.

## Hard constraints

- The voice is "I", never "we". There is one person here and the copy must not imply otherwise.
- No client logos, no invented team, no fabricated provenance, no testimonials.
- No prices anywhere on this surface, and no service ladder. The priced audit ladder was retired: it
  was never run on a real founder and it was built on superseded positioning.
- No claim about results the work has not earned. This is v0: no case study, no chart that goes up.
- The positioning line itself is not to be drafted unilaterally. It is the one sentence the whole
  surface rests on, so it is settled with Ryan.

## Newsletter

Monthly at launch, weekly later. Capture goes live on day one, here and on Startup Skills, feeding
one list. The archive route renders content from the `in-the-loop-newsletter` repo, which is where
the posts and the ESP integration live; this repo owns the route and the styling, not the content.
The old "no studio pitch, ever" guardrail on the newsletter is retired: it links here.

The ESP is not chosen. Buttondown is the leading candidate, pending 16 consolidation decision docs
harvested from the `feed` project. Read them before wiring anything up.

## Build shape

Astro, static, on Cloudflare Workers, matching Startup Skills so there is one stack to maintain
across two surfaces. No Tailwind. Hand-written CSS from the shared tokens.

## Read when relevant

- `../AGENTS.md` for the system. `../ryanhennebry.xyz/AGENTS.md` for the page that links here, and
  whose Projects list this page mirrors.
- `../shared/voice-and-tone.md` before writing a word of copy. It carries the voice bar, the four
  judge lenses and the banned words, and copy is verified against it before it ships.
- `../shared/design-system.md` and `../shared/design-engineering-taste.md` for tokens and the craft
  bar.
- `~/Projects/in-the-loop-archive/POSITIONING.md` for the previous position. Read it as history, not
  as instruction: it leads with a priced studio ladder that the current direction retired. The
  archive is harvest-only, so read it, copy out of it, never edit it.
