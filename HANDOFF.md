# Handoff: in-the-loop.studio

## Built

The Astro site, static, on Cloudflare Workers, matching the Startup Skills stack. No Tailwind: the
CSS is hand written from `../shared/design-system.md`. Two routes, `/` and `/newsletter`, and
nothing else.

The positioning line is settled. The nav label is `AI-NATIVE STARTUP OPERATIONS` and the headline is
"I build the systems startups use to run on agents.", set over two lines with the break after
"startups". Neither is to be reworded, and the long descriptor list that used to sit under the
headline was cut on purpose. The headline carries the page.

Everything that is likely to change lives in `src/config.ts` and nowhere else: the outbound URLs
(`LINKS`), the capture endpoint (`CAPTURE_ENDPOINT`), the CTA label (`CTA_LABEL`) and the site URL.
No page hardcodes a URL or an email address.

Not deployed. The domain is owned, at Porkbun, expiring 2027-06-11, and it still serves the
superseded operator-led agent studio site that sells a priced service ladder the current direction
retired. That site is replaced, not amended, and replacing it is Ryan's call. `wrangler.jsonc` binds
no custom route for that reason.

## Test

Run `./verify.sh`. It checks house style on the Markdown, then the copy gate that matters most on
this surface: no "we", no prices, no `/work` route. Those three are the specific ways this page has
drifted before. It finishes with `npm run build`.

Copy is not signed off by a script. Run it through the four-lens panel in
`../shared/voice-and-tone.md` and read the synthesis verdict before shipping any of it.

## Next

1. Settle the CTA wording. It is `[ START A CONVERSATION ]` today, held in `CTA_LABEL`. The
   alternatives are `[ EMAIL ME ]` and `[ WHAT I'M WORKING ON ]`, and it is a one string change.
2. Choose the ESP. Read the 16 consolidation decision docs first. Buttondown is the standing
   assumption, Postmark the fallback. Wiring it is `CAPTURE_ENDPOINT` plus `CAPTURE_FIELD`, with no
   vendor SDK. Until the endpoint is set the form renders disabled and says it is not wired.
3. Fill in `LINKS.skills` when startupskills.ai is registered, and `LINKS.feed` when the Feed is
   built. Both are placeholders and both point at workers.dev today.
4. Pull the archive from the `in-the-loop-newsletter` repo once a first issue exists. `/newsletter`
   renders an empty state until then, and this repo owns the route and the styling, not the content.
5. Confirm `ryan@in-the-loop.studio` receives mail before the page goes live. The CTA points at it.
6. Deploy over the existing site on the live domain, on Ryan's say-so: set `SITE_URL`, add a
   `routes` block to `wrangler.jsonc`, then `npm run deploy`.

At launch all four surfaces go live and only Startup Skills is announced. This page ships quietly.
