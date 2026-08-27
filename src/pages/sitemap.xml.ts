import { HOME_PATH, PLAN_PATH, absolute } from "../config.ts";

export const prerender = true;

export function GET(): Response {
  const urls = [HOME_PATH, PLAN_PATH]
    .map((path) => `  <url>\n    <loc>${absolute(path)}</loc>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
