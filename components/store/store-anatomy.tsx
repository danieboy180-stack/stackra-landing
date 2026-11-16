import Image from "next/image";
import { cn } from "@/lib/utils";
import { firstImage } from "@/lib/slot-media";
import { Reveal } from "./reveal";
import { galleryPhotos } from "./photos";

// "Built around your photos" shows exactly 8: every third gallery photo, so they come
// from across the whole set. The rest of the set stays in photos.ts but is not shown here.
const gallery = galleryPhotos.filter((_, i) => i % 3 === 0).slice(0, 8);

// The storefront board picture comes from this folder inside /public. Drop it in on
// GitHub (see the README there). Any file name works, and the first picture is used.
const BOARD_DIR = "store/anatomy";
// Shape of the empty placeholder until a picture is added (the board is 5000 x 2660).
const BOARD_RATIO = 5000 / 2660;

function Photo({ file, sizes }: { file: string; sizes: string }) {
  return (
    <Image
      src={`/store/${file}`}
      alt=""
      fill
      sizes={sizes}
      draggable={false}
      className="object-cover"
      style={{ objectPosition: "50% 40%" }}
    />
  );
}

export default function StoreAnatomy() {
  const board = firstImage(BOARD_DIR);
  const ratio =
    board?.width && board.height ? board.width / board.height : BOARD_RATIO;

  return (
    <section
      id="design"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            The store design
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            How a store is designed.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every Stackra store follows the same clean layout, so customers
            always know where to look. You bring the name, the photos and the
            products.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            The store name, products, prices and contact details in these
            screens are sample data, shown only to illustrate the layout.
          </p>
        </Reveal>

        {/* The frame takes the picture's own shape, so nothing is cropped. On narrow
            screens it scrolls sideways so the small notes stay readable. */}
        <Reveal className="mt-12 lg:mt-16">
          <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="relative min-w-[1100px] overflow-hidden rounded-2xl border border-border bg-muted sm:rounded-3xl"
              style={{ aspectRatio: String(ratio) }}
            >
              {board && (
                <Image
                  src={board.src}
                  alt="The Stackra storefront in five screens: the store home, checkout, the address chooser and the store details, each with numbered notes."
                  fill
                  sizes="(min-width: 1280px) 1280px, 1100px"
                  className="object-contain"
                />
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground xl:hidden">
            Swipe sideways to see all five screens.
          </p>
        </Reveal>

        <Reveal className="mt-20 max-w-2xl sm:mt-28">
          <h3 className="text-3xl leading-[1.08] font-medium tracking-tighter text-balance sm:text-4xl">
            Built around your photos.
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Good photography does most of the selling. A store gives every
            product the same clean frame, so your range looks consistent
            whatever you sell.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3">
          {gallery.map((file, i) => (
            <Reveal key={file} delay={(i % 4) * 0.04}>
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-xl border border-border sm:rounded-2xl",
                  i % 2 ? "bg-muted/50" : "bg-muted"
                )}
              >
                <Photo
                  file={file}
                  sizes="(min-width: 1280px) 320px, (min-width: 640px) 25vw, 50vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
