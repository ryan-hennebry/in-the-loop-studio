import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config.ts";

// Static, matching Startup Skills so there is one stack across two surfaces.
// The Cloudflare Worker in wrangler.jsonc serves dist/ as static assets, so
// there is no server runtime. No Tailwind: the CSS is hand written from the
// shared tokens.
export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "never",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
