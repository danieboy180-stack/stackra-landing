import fs from "node:fs";
import path from "node:path";

const IMAGE = /\.(jpe?g|png|webp|avif|gif)$/i;

export type SlotImage = { src: string; width?: number; height?: number };

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

// How the camera stored a JPEG: 5 to 8 mean it is turned on its side.
function exifOrientation(b: Buffer, start: number, end: number): number {
  if (b.toString("latin1", start, start + 4) !== "Exif") return 1;
  const t = start + 6;
  const le = b.toString("latin1", t, t + 2) === "II";
  const u16 = (o: number) => (le ? b.readUInt16LE(o) : b.readUInt16BE(o));
  const u32 = (o: number) => (le ? b.readUInt32LE(o) : b.readUInt32BE(o));
  const ifd = t + u32(t + 4);
  const count = u16(ifd);
  for (let k = 0; k < count; k++) {
    const entry = ifd + 2 + k * 12;
    if (entry + 12 > end) break;
    if (u16(entry) === 0x0112) return u16(entry + 8);
  }
  return 1;
}

// Pixel size of a PNG or JPEG, read from the file header. Other types return {}.
function imageSize(b: Buffer): { width?: number; height?: number } {
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let orientation = 1;
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = b[i + 1];
      if (marker === 0xff) {
        i++;
        continue;
      }
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
        i += 2;
        continue;
      }
      const length = b.readUInt16BE(i + 2);
      if (marker === 0xe1) orientation = exifOrientation(b, i + 4, i + 2 + length);
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        const height = b.readUInt16BE(i + 5);
        const width = b.readUInt16BE(i + 7);
        return orientation >= 5 ? { width: height, height: width } : { width, height };
      }
      i += 2 + length;
    }
  }
  return {};
}

/** The first image in /public/<dir>, with its size in pixels when it can be read. Server only. */
export function firstImage(dir: string): SlotImage | undefined {
  const [src] = listImages(dir);
  if (!src) return undefined;
  try {
    const file = path.join(process.cwd(), "public", decodeURIComponent(src));
    return { src, ...imageSize(fs.readFileSync(file)) };
  } catch {
    return { src };
  }
}
