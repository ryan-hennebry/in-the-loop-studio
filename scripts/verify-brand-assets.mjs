import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = {
  "public/brand/linkedin-logo-400.png": [400, 400],
  "public/brand/linkedin-banner-4200x700.png": [4200, 700],
  "public/brand/social-card-1200x630.png": [1200, 630],
  "public/apple-touch-icon.png": [180, 180],
  "public/icon-192.png": [192, 192],
  "public/icon-512.png": [512, 512],
  "public/favicon-32x32.png": [32, 32],
  "public/favicon-16x16.png": [16, 16],
};

for (const [relative, [width, height]] of Object.entries(expected)) {
  const metadata = await sharp(path.join(root, relative)).metadata();
  assert.equal(metadata.format, "png", `${relative} must be a PNG`);
  assert.equal(metadata.width, width, `${relative} must be ${width}px wide`);
  assert.equal(metadata.height, height, `${relative} must be ${height}px high`);
}

for (const relative of ["public/brand/in-the-loop-mark.svg", "public/favicon.svg"]) {
  const svg = await fs.readFile(path.join(root, relative), "utf8");
  assert.match(svg, /#9DA3A8/, `${relative} must use the locked grey`);
  assert.match(svg, /#FFFFFF/, `${relative} must use a white mark`);
  assert.doesNotMatch(svg, /gradient|filter=|shadow/i, `${relative} must stay flat`);
}

async function pixel(relative, x, y) {
  const { data, info } = await sharp(path.join(root, relative))
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const offset = (y * info.width + x) * info.channels;
  return [...data.subarray(offset, offset + 3)];
}

assert.deepEqual(await pixel("public/brand/linkedin-logo-400.png", 0, 0), [157, 163, 168]);
assert.deepEqual(await pixel("public/brand/linkedin-logo-400.png", 159, 198), [255, 255, 255]);
assert.deepEqual(await pixel("public/brand/social-card-1200x630.png", 0, 0), [255, 255, 255]);
assert.deepEqual(await pixel("public/brand/social-card-1200x630.png", 520, 235), [157, 163, 168]);
assert.deepEqual(await pixel("public/favicon-16x16.png", 0, 0), [157, 163, 168]);
assert.deepEqual(await pixel("public/favicon-16x16.png", 6, 8), [255, 255, 255]);

const bannerStats = await sharp(path.join(root, "public/brand/linkedin-banner-4200x700.png")).stats();
for (const channel of bannerStats.channels) {
  assert.equal(channel.min, 255, "LinkedIn banner must be plain white");
  assert.equal(channel.max, 255, "LinkedIn banner must be plain white");
}

const ico = await fs.readFile(path.join(root, "public/favicon.ico"));
assert.equal(ico.readUInt16LE(2), 1, "favicon.ico must be an icon bundle");
assert.equal(ico.readUInt16LE(4), 2, "favicon.ico must contain two sizes");
assert.deepEqual([ico.readUInt8(6), ico.readUInt8(22)], [16, 32]);

const manifest = JSON.parse(await fs.readFile(path.join(root, "public/site.webmanifest"), "utf8"));
assert.equal(
  manifest.description,
  "Building the systems startups need now that agents work.",
);
assert.deepEqual(manifest.icons.map(({ sizes }) => sizes), ["192x192", "512x512"]);
assert.deepEqual(manifest.icons.map(({ src }) => src), ["/icon-192.png", "/icon-512.png"]);

const layout = await fs.readFile(path.join(root, "src/layouts/Base.astro"), "utf8");
for (const href of [
  "/fonts/inter-latin-var.woff2",
  "/favicon.svg",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/site.webmanifest",
]) {
  assert.ok(layout.includes(`href="${href}"`), `${href} must be wired in Base.astro`);
}
assert.ok(layout.includes('rel="preload"'), "the critical font must be preloaded");
assert.ok(layout.includes('as="font"'), "the critical preload must be identified as a font");
assert.ok(!layout.includes('href="data:,"'), "the empty favicon convention must stay retired");
for (const metadata of [
  'property="og:image"',
  'property="og:image:type"',
  'property="og:image:alt"',
  'name="twitter:card"',
  'name="twitter:image:alt"',
  'name="robots"',
  'rel="canonical"',
  'application/ld+json',
]) {
  assert.ok(layout.includes(metadata), `${metadata} must be wired in Base.astro`);
}

console.log("ok: brand asset formats, dimensions, colours and metadata");
