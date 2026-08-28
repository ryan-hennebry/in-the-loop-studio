import { absolute } from "../config.ts";

export const prerender = true;

const POLICY = [
  "# Search indexing is welcome, and an assistant may read these pages and reference them.",
  "# Training a model on them is not permitted: that is an express reservation of rights.",
  "# Content Signals syntax: https://contentsignals.org",
  "User-agent: *",
  "Content-Signal: search=yes,ai-train=no,use=reference",
  "Allow: /",
].join("\n");

export function GET(): Response {
  return new Response(
    `${POLICY}\n\nSitemap: ${absolute("/sitemap.xml")}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
