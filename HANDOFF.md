# Handoff: in-the-loop.studio

## Status (4 Oct 2026)

4 Oct 2026: cross-repo planning closed. Next step for this repo: none scheduled; route changes
wait for this repo's own review.

## Skills register link, 2026-09-23

Ryan asked for Skills to lead the studio homepage register and link directly to
`https://startupskills.dev/`. The Skills row is now a full-row link, with only its name underlined;
the four other rows remain non-interactive. `./verify.sh` passes, and the local page was visually
checked at desktop, 390px and 320px; the Skills row was clicked through to the live Startup Skills
homepage. Ryan reviewed the local preview and explicitly approved publication. Cloudflare Pages
deployment `0ab9c62c.in-the-loop.pages.dev` is live on `https://in-the-loop.studio/`; the public
page shows Skills first and its row reaches the Startup Skills homepage. The existing `/skills`
shortcut still returns 302 to `https://startupskills.dev/skills`. Post-deployment checks found the
expected `Content-Signal` and sitemap in `robots.txt`, and the Plan still serves its direct
`mailto:ryan@in-the-loop.studio` link without a `/cdn-cgi/` rewrite.

## Startup Skills link, 2026-09-23

`public/_redirects` now gives `/skills` a one-hop 302 to
`https://startupskills.dev/skills`. Ryan approved the first public noindex
Startup Skills deployment, and this same-day link was part of its V17 C4
handoff. The studio's two rendered pages are unchanged. The studio verifier
passed; the Pages deployment is `a98e7d3c`, and live requests confirm `/skills`
returns 302 while `/` and `/plan/` still return 200. Keep this redirect
temporary so the studio can reclaim `/skills` later without a cached 301.

## Mail

Cloudflare Email Routing is enabled for `in-the-loop.studio` on zone
`61e7ce9772a085983236241e9d85c2b1`, with status `ready` and a synced configuration. The domain
serves the three authoritative Cloudflare MX records, `route1.mx.cloudflare.net` at priority 71,
`route2.mx.cloudflare.net` at 15 and `route3.mx.cloudflare.net` at 88, and the SPF record
`v=spf1 include:_spf.mx.cloudflare.net ~all`. The enabled rule `Plan contact link` sits at
priority 0 and forwards the literal address `ryan@in-the-loop.studio` to the account owner's Gmail,
a destination verified on 2026-08-27. A catch-all drop rule exists but is disabled, so it does not
shadow that rule.

Delivery has been observed rather than only configured. Cloudflare's `emailRoutingAdaptiveGroups`
analytics dataset records exactly one event since 2026-07-28: a `forward` with status `delivered` at
2026-08-27 13:44 UTC. That status ends at the receiving MX accepting the message. DNS records only
prove that a server accepts mail, and `delivered` proves the same thing one step later; neither
proves the message lands in an inbox a human reads rather than a spam folder.

One improvement is still open and it blocks nothing. There is no `_dmarc` TXT record;
`_dmarc.in-the-loop.studio` returns an authoritative NODATA. DMARC is not required to receive mail
and does not affect delivery, but it improves deliverability and prevents trivial spoofing. The
suggested value is `v=DMARC1; p=none; rua=mailto:<owner inbox>`, added from the Cloudflare dashboard
or with a purpose-scoped API token: the current wrangler OAuth token carries `zone (read)` and no
`dns_records:write`, so it cannot write the record.

## Built

A static Astro site with two routes: `/` and `/plan/`. The homepage presents the compact 26px A6
lockup, settled proposition, five-part Skills/Signal/Harness/Agents/Newsletter register and the
`Read the plan ->` action. Since 2026-09-23 Skills is a full-row link to `https://startupskills.dev/`;
the other four concepts are non-interactive until they have real destinations.
Signal and Newsletter are not routes. Both pages close on a colophon: `In The Loop` at the left,
linking home from the Plan and set as plain text on the homepage, and `by Ryan Hennebry` at the
right, linking to LinkedIn, the colophon's one outbound link. There is no homepage email action and no
client JavaScript; the page transition between the two routes is CSS the browser runs itself.

The homepage's final register says `Curate what matters on the frontier.` and
`Index agent skills for startup work.` The Plan uses Ryan's final supplied copy as a prose-only
causal essay: discover what matters, install the context, let use decide and share what we learn.
Its visible title, system register and diagrams are removed. The opening uses tight premise spacing
followed by a larger gap before `In The Loop exists to explore it and build what's missing.`, the
essay's thesis, which is set at 550, the section title weight, so it reads as the equal of the four
headings it introduces. Its two clauses are each set as an inline block, which leaves the line one
legal break: every width from 320px to 470px turns after `In The Loop exists to explore it`, and
from 480px up the sentence holds one line. The break is bought in the layout rather than in the
copy, with no non-breaking space, because that same string is the Plan's meta description and the
copy gates match it literally. The introduction itself is set in the body register, 16px, and the
four section titles are 20px at 550: at 23px on a 570px measure they read as a second headline
rather than as the spine of the argument. 600 is reserved for the product names in the body, and 500
no longer appears on the Plan at all.

Plan spacing was rebuilt on a 4px scale. The opening lines sit 12px apart and the conclusion follows
after 32px at both widths. A heading sits 14px above its body, paragraphs inside a section sit 26px
apart, and sections separate by 72px on desktop and 56px on mobile. The lockup-to-opening gap is
88px on desktop and 32px on mobile. The colophon sits 224px below the Plan's last words on desktop
and 128px on mobile, and the page ends 80px below the colophon on desktop and 40px on mobile; the
homepage ends 48px below its colophon on desktop and 16px on mobile. Page-scoped spacing is applied
through the `data-page` attribute on `<body>`. The Plan closes with one quiet mailto link to
`ryan@in-the-loop.studio` as inline prose under no heading of its own, set apart by a bespoke 144px
closing interval on desktop and 96px on mobile, with a hairline at 15% of the current text colour
sitting 14px above it, 60px wide on desktop and 32px on mobile.

The homepage's vertical rhythm is elastic. Its four macro intervals are empty `.riser` items in a
flex column with floors of 46px, 56px, 44px and 18px on desktop and 15px, 15px, 15px and 21px at
600px and below, with the two interior risers capped at 112px and 96px on desktop and 32px on
mobile. They grow into whatever height the screen leaves over on named share tokens, 1:2:2:9 above
600px and 3:1:1:5 at 600px and below. Both routes now open at the same height, on one shared
`clamp(64px, 8vh, 96px)` above 600px and 24px on mobile. The Plan used to open lower, on
`clamp(96px, 14vh, 144px)`, and because the lockup is the one element on both routes that difference
was carried into the page transition rather than absorbed. The shell is a flex column at least
`100svh` tall and only `.main` grows, so a short page ends at the foot of the screen with the
surplus above the colophon. Astro's minifier drops the duplicate `100vh` fallback, so `dist` ships
`100svh` alone and a pre-2022 engine gets none.

Measured against the build, the homepage document height equals the viewport height exactly at
1920x1080, 1728x1117, 1512x982, 1440x1080, 1440x900, 1440x800, 430x780, 412x811, 393x659, 390x664
and 360x700. A 375x553 runs 94px long and a 320x460 runs 218px long, and both are accepted. No copy
was cut, no type size shrank, and every link measures 48px: the homepage action, the Plan's home
link, its closing contact link, the Plan colophon's wordmark and the author link on both pages.

`PRODUCT.md` holds product truth, `DESIGN.md` holds the implemented visual system, and
`src/config.ts` holds shared copy, routes and metadata values. Each page has an explicit title,
description, apex-domain canonical, Open Graph and Twitter metadata, and the same small WebSite and
Organization identity graph. The full A6 logo and web-icon system lives under `public/`;
`public/brand/social-card-1200x630.png` is the shared 1200x630 Open Graph and Twitter image.
`robots.txt` permits search crawling, names `sitemap.xml` and declares
`Content-Signal: search=yes,ai-train=no,use=reference`; the sitemap contains only the two real
canonical pages.

That signal is an express reservation of rights: index this site, read it and reference it, but do
not train a model on it. It names no crawler and disallows nothing. Cloudflare's Managed robots.txt
was enabled in the dashboard until 2026-08-28 and prepended nine blanket blocks, on ClaudeBot,
GPTBot, Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended, meta-externalagent and
CloudflareBrowserRenderingCrawler. They contradicted the `use=reference` signal printed beside them,
and they made a site about agent-native operations unreadable to the assistants a reader may ask
about it, so none of them was carried into this repository. The toggle is off, under AI Crawl
Control -> Signals, and the repository is the single source of truth for crawler policy again.

The implementation is committed on local `main`, which has not been pushed to `origin` and does not
need to be for a release. It was deployed on 2026-08-26 to the existing Cloudflare Pages project
`in-the-loop`, replacing the superseded site on `https://in-the-loop.studio` and
`https://www.in-the-loop.studio`. Production is now deployment `568c93cd`, uploaded on 2026-08-28
from commit `f5e1e54` on branch `main` and superseding the 2026-08-27 release
`c8df63de-0f24-4201-b69c-1439af9a9d1f`. `SITE_URL`, the trailing-slash route policy, package
deployment script and `wrangler.jsonc` describe the Pages production setup.

The Pages project has no git integration, so pushing to git triggers nothing. Production changes
only through a direct `wrangler pages deploy ./dist` upload of a fresh build.

Production matches local `main`. The Plan spacing rebuild, the `Discover what matters` rename, the
closing contact link, the colophon, the elastic homepage rhythm, the shortened page endings, the
drawn arrow, the `Share what we learn as we go.` register line, the replaced Plan introduction and
body copy, the desktop composition on 1:2:2:9 shares, the link interaction fixes, the Plan colophon
wordmark's home link, the cross-document page transition, the shared page top and the crawler policy
stated in `robots.txt` are all live. The Plan description now reads
`In The Loop exists to explore it and build what's missing.`

## Edge

Cloudflare dashboard settings can rewrite what production serves, and no gate in this repository can
see it. `verify.sh` is deliberately offline and inspects `dist`, so a page can pass every check here
and still reach a reader changed. Two settings were doing that and both were turned off on
2026-08-28. So read production directly after every deployment: fetch the live `robots.txt` and the
live `/plan/`, and confirm the crawler policy is this repository's file, the closing contact link is
a real `mailto:` and neither page carries a `/cdn-cgi/` script.

Managed robots.txt, under AI Crawl Control -> Signals, prepended a `Content-Signal` line of its own
and nine blanket `Disallow: /` blocks to the built file. The Built section above records what it
blocked and why none of it was carried here.

Email Address Obfuscation, under Scrape Shield and held as the zone setting `email_obfuscation`,
rewrote the Plan's closing contact link from `href="mailto:ryan@in-the-loop.studio"` to
`href="/cdn-cgi/l/email-protection#..."` and injected a third script,
`/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js`. The site's only call to action
then depended on injected JavaScript, on a site that ships none by design, and with JavaScript
disabled the link led to a Cloudflare interstitial instead of opening a mail client. It also broke
the zero-JavaScript budget in production while `verify.sh` still passed locally, because that gate
counts `<script` in `dist` and never sees what the edge injects. It was turned off by PATCHing the
zone setting to `off`: the Security -> Settings page renders an empty list on this account, so the
dashboard could not. Production then served `mailto:ryan@in-the-loop.studio`, exactly two `<script`
elements across the two pages and no `/cdn-cgi/scripts` reference.

## Test

`./verify.sh` passes against the current tree, and passed at each commit that produced it. It checks
the two-route boundary, local/production route agreement, exact homepage and Plan copy, truth
constraints, the diagram- and register-free Plan, brand assets and the production Astro build.
Re-run it before every deployment. The search and sharing gate checks crawl files, exact canonical
URLs, page-specific titles and descriptions, social-image metadata, the identity graph and the
absence of client JavaScript. It also asserts the `Content-Signal` line and that the built
`robots.txt` disallows nothing, so the shipped crawler policy cannot drift unnoticed again.

The current tree was also measured against the built output rather than asserted from the CSS:
`dist` served locally and driven headless at 1920x1080, 1728x1117, 1512x982, 1440x1080, 1440x900,
1440x800, 430x780, 412x811, 393x659, 390x664, 375x553, 360x700 and 320x460, on both routes. No
console error, no page error and no horizontal overflow at any of them, and none from 320px to
1920px on the width sweep. The homepage document height equals the viewport height at every one of
those sizes except 375x553 and 320x460, which run 94px and 218px long. Every link measures 48.000px
on both routes at 1440px, 390px and 320px. The homepage arrow translates 3px on hover without
changing the link's box, and every underline on the site moves from muted to ink on hover and again
on press.

Four interaction readings are worth carrying forward. `.primary-link` now measures 135.06px rather
than stretching the whole column, so it no longer puts a pointer over empty paper. The page
transition fires forward, on Back, from the Plan's top and from the Plan colophon's home link, and
is suppressed under `prefers-reduced-motion: reduce` in all four; Firefox ignores it entirely and
navigates normally. Nothing is named for it any more. A `view-transition-name` tweens from the old
snapshot's position in the VIEWPORT, so the named lockup flew 1,081px down the screen when the Plan
was left scrolled to its footer and 1,078px back up on Back, and its named snapshots double-drew
their own antialiased edges on every navigation. Unnamed, the root cross-fade rebuilds an identical
lockup in place: the painted lockup measures y=72 in every stepped frame of all four navigations,
and a frozen mid-transition frame changes 4.07% of its pixels at a maximum delta of 7 of 255, down
from 11.42% at 216. The closing contact link takes no focus outline at all, because no offset clears
the glyph band above it without cutting the word itself; focus is drawn instead as a 2px rule above
the word and another below, painted at y 551.88 and 572.88 inside the link's own content box.
Measured from the pixels against the ink of the line above, which runs 531.63 to 547.38, the marks
overlap it by zero at 1440px, 390px and 320px, and they still paint under forced colours.

Browser verification covered the Plan at 1440px, 390px and 320px, then the homepage and both
navigation directions at 320px. There were no browser warnings, errors or horizontal overflow. The
Plan contained four sections and no figure, SVG or register; the closing contact line sits outside
those four under no heading of its own, so that count remains four. Desktop body line-height was
26px.
Mobile section spacing was 68px at the time of that check and is now 56px, so Plan spacing needs
re-checking at 1440px, 390px and 320px. The Plan lockup has since been given the discipline line, so
both routes now carry the identical full lockup and that check is also outstanding. The final
trailing-slash policy fixed the local homepage-to-Plan link and matches production.

Post-deployment verification confirmed the final homepage and Plan copy at
`https://in-the-loop.studio`. The apex and `/plan/` return 200; `/plan` normalises to `/plan/` with a
308. The Plan's description and social metadata use the final three-line introduction. The `www`
copy canonicals to the apex. The sitemap, manifest, social card, SVG/PNG/ICO favicons and Apple touch
icon all return successfully with the right content type. The `robots.txt` read at that check was
Cloudflare's managed file, not this repository's. With the managed toggle off, production served
this repository's file on 2026-08-28: search indexing open, the sitemap declared and no `Disallow`
anywhere.

Deployment `568c93cd` was then measured live rather than only fetched. Both routes return 200, and
the homepage document height equals the viewport height exactly at 360x700, 390x664, 393x659,
412x811, 430x780, 1440x800, 1440x900, 1512x982 and 1920x1080, while 375x553 and 320x460 still run
94px and 218px long as accepted. There is no horizontal overflow from 320px to 1920px on either
route and no console error. The page transition fires and the lockup does not translate. Every link
measures 48.000px, and `og:image` returns 200 at 1200x630.

## Next

1. Add the `_dmarc` TXT record from the Cloudflare dashboard or with a purpose-scoped API token.
   It improves deliverability and is not a launch blocker.
2. Submit `https://in-the-loop.studio/sitemap.xml` in Google Search Console when the domain property
   is connected. Crawl readiness is live, but search inclusion is controlled by the search engine.
3. Add a concept destination only when it is real and has a specific user job.
4. Re-upload the LinkedIn logo or banner only if LinkedIn still holds the previous exports; website
   icons update with deployment.
