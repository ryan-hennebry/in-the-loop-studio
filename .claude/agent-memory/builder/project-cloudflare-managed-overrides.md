---
name: project-cloudflare-managed-overrides
description: Cloudflare dashboard settings can rewrite what in-the-loop.studio serves; Managed robots.txt and Email Address Obfuscation both did, and both were turned off on 2026-08-28
metadata:
  type: project
---

Production can serve something this repository never built, and no gate here can see it. Two
Cloudflare dashboard settings were doing it, both turned off on 2026-08-28:

1. Managed robots.txt (AI Crawl Control -> Signals) prepended a `Content-Signal` line and nine
   blanket `Disallow: /` blocks to the built file.
2. Email Address Obfuscation (Scrape Shield, zone setting `email_obfuscation`) rewrote the Plan's
   closing `href="mailto:ryan@in-the-loop.studio"` to `/cdn-cgi/l/email-protection#...` and injected
   a third script, `email-decode.min.js`. The site's only call to action then needed JavaScript the
   site does not ship, and with JavaScript off the link opened a Cloudflare interstitial.

**Why:** `verify.sh` is deliberately offline and counts `<script` in `dist`, so it passed green while
production shipped three scripts and a broken contact link. The managed robots blocks also
contradicted the `use=reference` signal printed beside them.

**How to apply:** When a doc or a live reading describes production behaviour that no source file
explains, suspect a dashboard override before believing the doc. Keep gates in `verify.sh` against
`dist` so the script stays offline; the live check belongs in `HANDOFF.md`'s `Edge` section instead
-- after any deploy, fetch the live `robots.txt` and `/plan/` and confirm the crawler policy is this
repository's file, the contact link is a real `mailto:` and no `/cdn-cgi/` script is present.
Email Address Obfuscation could not be turned off from the dashboard on this account (Security ->
Settings renders an empty list); PATCHing the zone setting to `off` worked.

Related: [[builder-verification-commands]], [[project_email-routing]]
