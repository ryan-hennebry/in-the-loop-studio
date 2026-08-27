---
name: cloudflare-pages-direct-upload
description: The Cloudflare Pages project `in-the-loop` is direct-upload (no Git provider) — `git push` never deploys; only `npm run deploy` does.
metadata:
  type: reference
---

Production for in-the-loop.studio is the Cloudflare Pages project **`in-the-loop`** on account
`Ryanhennebry@gmail.com's Account` (`6dcf017cc28fca0faf165cd6cb1457ba`). Its Git Provider is **No** —
it is a direct-upload project.

**Why it matters:** pushing to `origin` (github.com/ryan-hennebry/in-the-loop-studio) has zero effect
on the live site. Publishing happens only through `npm run deploy`, which runs `astro build` then
`wrangler pages deploy ./dist --project-name in-the-loop --branch main`. The `--branch main` flag is
what makes an upload a Production deployment; the `Source` column in `wrangler pages deployment list`
shows the local git SHA at upload time, which is metadata only.

**How to apply:** when the user asks to "deploy", do not assume a push is required or sufficient.
Conversely, a clean push does not mean production is current — compare local `dist/` against the live
apex to tell. Verify with `npx wrangler pages project list` before relying on this.

Related: [[project-design-md-is-normative]]
