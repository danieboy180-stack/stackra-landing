import fs from "node:fs";
import path from "node:path";

const IMAGE = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * Image URLs found in /public/<dir>, in file-name order. Empty when the folder is
 * empty or missing. Runs at build time, so uploading a picture to GitHub (which
 * triggers a new build) is all it takes to show it. Server only.
 */
export function listImages(dir: string): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", dir))
      .filter((file) => IMAGE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/${dir}/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}
