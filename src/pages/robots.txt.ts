import { absolute } from "../config.ts";

export const prerender = true;

export function GET(): Response {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${absolute("/sitemap.xml")}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
