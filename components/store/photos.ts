// Photos for the /store page only. They all live in /public/store and are not shared with the home page.
// To add one: upload it to public/store and add its filename to the list.
export const storePhotos = [
  "IMG-20260806-WA0066.jpg",
  "IMG-20260808-WA0071.jpg",
  "IMG-20260808-WA0072.jpg",
  "IMG-20260821-WA0038.jpg",
  "IMG-20260821-WA0058.jpg",
  "IMG-20260821-WA0177(1).jpg",
  "IMG-20260821-WA0198(1).jpg",
  "IMG-20260827-WA0093(1).jpg",
  "IMG-20260827-WA0102.jpg",
  "IMG-20260827-WA0114.jpg",
  "IMG-20260827-WA0117.jpg",
  "IMG-20260828-WA0006.jpg",
  "IMG-20260828-WA0007.jpg",
  "IMG-20260828-WA0008.jpg",
  "IMG-20260903-WA0056.jpg",
  "IMG-20260903-WA0062.jpg",
  "IMG-20260924-WA0094.jpg",
  "IMG-20261001-WA0100.jpg",
  "IMG-20261001-WA0119.jpg",
  "IMG-20261001-WA0120.jpg",
  "IMG-20261001-WA0121.jpg",
  "IMG-20261001-WA0129.jpg",
  "IMG-20261015-WA0155.jpg",
  "IMG-20261015-WA0159(1).jpg",
  "IMG-20261015-WA0164(2).jpg",
  "IMG-20261015-WA0172(1).jpg",
  "IMG-20261015-WA0174.jpg",
  "IMG-20261018-WA0020.jpg",
  "IMG-20261018-WA0021.jpg",
  "IMG-20261018-WA0022.jpg",
  "IMG-20261018-WA0023.jpg",
  "IMG-20261018-WA0024.jpg",
  "IMG-20261018-WA0025.jpg",
  "IMG-20261018-WA0032.jpg",
  "IMG-20261019-WA0007.jpg",
  "IMG-20261025-WA0059.jpg",
];

// Every third photo goes in the top strip, the rest fill the phone and the gallery, so no photo repeats between them.
export const heroPhotos = storePhotos.filter((_, i) => i % 3 === 0);
export const galleryPhotos = storePhotos.filter((_, i) => i % 3 !== 0);
