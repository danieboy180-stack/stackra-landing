import Image from "next/image";
import { firstImage } from "@/lib/slot-media";

// Tallest a picture may be, in px. A taller picture gets a narrower frame...
const MAX_HEIGHT = 680;
// ...but never narrower than this, so a very tall picture stays readable.
const MIN_WIDTH = 300;

// One picture from /public/<dir>, shown whole. The frame takes the picture's own
// shape, so nothing is cropped. No picture yet: the empty placeholder.
export default function SlotPic({ dir }: { dir?: string }) {
  const pic = dir ? firstImage(dir) : undefined;
  const ratio = pic?.width && pic.height ? pic.width / pic.height : 16 / 10;
  const frameWidth = Math.max(Math.round(MAX_HEIGHT * ratio), MIN_WIDTH);

  return (
    <div
      aria-hidden
      className="relative mx-auto my-10 overflow-hidden rounded-2xl border border-border bg-muted sm:my-12"
      style={{
        aspectRatio: String(ratio),
        width: pic ? `min(100%, ${frameWidth}px)` : "100%",
      }}
    >
      {pic && (
        <Image
          src={pic.src}
          alt=""
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-contain"
        />
      )}
    </div>
  );
}
