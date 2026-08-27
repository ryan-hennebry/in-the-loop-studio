import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logo = await sharp(path.join(root, "public/brand/linkedin-logo-400.png"))
  .resize(160, 160)
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#FFFFFF",
  },
})
  .composite([{ input: logo, left: 520, top: 235 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, "public/brand/social-card-1200x630.png"));

console.log("created public/brand/social-card-1200x630.png");
