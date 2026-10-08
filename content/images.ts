export type SiteImage = {
  id: string;
  src: string;
  sourceUrl: string;
  creator: string;
  license: string;
  alt: string;
  aspectRatio: string;
  focalPoint: string;
};

export const images = {
  "merchant-shop": {
    id: "merchant-shop",
    src: "https://images.pexels.com/photos/30020992/pexels-photo-30020992.jpeg?auto=compress&cs=tinysrgb&w=1800",
    sourceUrl: "https://www.pexels.com/photo/nigerian-shopkeeper-in-local-grocery-store-30020992/",
    creator: "Muhammad-Taha Ibrahim",
    license: "Pexels Free",
    alt: "Nigerian shopkeeper working inside a colorful local shop in Abuja",
    aspectRatio: "3:2 source family",
    focalPoint: "subject centered"
  },
  "merchant-arranging": {
    id: "merchant-arranging",
    src: "https://images.pexels.com/photos/30840030/pexels-photo-30840030.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sourceUrl: "https://www.pexels.com/photo/man-in-abuja-local-store-arranging-products-30840030/",
    creator: "Muhammad-Taha Ibrahim",
    license: "Pexels Free",
    alt: "Merchant arranging products in a small local shop in Abuja",
    aspectRatio: "source page",
    focalPoint: "subject"
  },
  "merchant-payment": {
    id: "merchant-payment",
    src: "https://images.pexels.com/photos/31550565/pexels-photo-31550565.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sourceUrl: "https://www.pexels.com/photo/african-market-vendor-handling-cash-in-nigeria-31550565/",
    creator: "Harry Max Iyaye",
    license: "Pexels Free",
    alt: "Woman handling currency at an outdoor market in Nigeria",
    aspectRatio: "source page",
    focalPoint: "hands and merchant"
  },
  "merchant-market": {
    id: "merchant-market",
    src: "https://images.pexels.com/photos/30464934/pexels-photo-30464934.jpeg?auto=compress&cs=tinysrgb&w=1400",
    sourceUrl: "https://www.pexels.com/photo/african-market-vendor-selling-fresh-bananas-30464934/",
    creator: "Muhammad-Taha Ibrahim",
    license: "Pexels Free",
    alt: "African market vendor selling fresh produce in Abuja",
    aspectRatio: "source page",
    focalPoint: "subject"
  }
} satisfies Record<string, SiteImage>;
