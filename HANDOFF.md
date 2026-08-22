# Handoff: in-the-loop.studio

## Built

Nothing yet. This repo holds `AGENTS.md`, `CLAUDE.md`, this file and `verify.sh`. There is no Astro
project and no copy.

The domain is owned, at Porkbun, expiring 2027-06-11. It currently serves the superseded
operator-led agent studio site, which sells a priced service ladder the current direction retired.
That site is replaced, not amended.

## Test

Run `./verify.sh`. Today it checks house style on the Markdown and then reports that no site exists.
Once `src/` lands it also runs the copy gate that matters most on this surface: no "we", no prices,
no `/work` route. Those three are the specific ways this page has drifted before.

Copy is not signed off by a script. Run it through the four-lens panel in
`../shared/voice-and-tone.md` and read the synthesis verdict before shipping any of it.

## Next

1. Settle the positioning line with Ryan. Everything else on the page is arranged around it, so it
   comes first, and it is not drafted unilaterally.
2. Scaffold the Astro project on Cloudflare Workers, sharing the stack with Startup Skills.
3. Write the page: positioning line, links out to Startup Skills, the Feed and the identity page, a
   contact action. Tone reference interfaceoffice.com, structure reference ibelick.com.
4. Add newsletter capture, live from day one and shared with Startup Skills.
5. Build the `/newsletter` archive route against the `in-the-loop-newsletter` repo. Read the 16
   consolidation decision docs before choosing the ESP.
6. Deploy over the existing site on the live domain.

Effort estimate from the consolidation plan: about two days. This is item 2 of 3 in the build
sequence, behind the identity page and ahead of Startup Skills.

At launch all four surfaces go live and only Startup Skills is announced. This page ships quietly.
