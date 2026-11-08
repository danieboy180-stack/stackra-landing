import { company } from "./company";
import { legal } from "./legal";
import { privacy } from "./privacy";
import { product } from "./product";
import { resources } from "./resources";
import { start } from "./start";
import { terms } from "./terms";
import type { DocPageData } from "./types";

export type { DocPageData };

/** Sidebar order. */
export const groups = [
  "Product",
  "Get started",
  "Company",
  "Legal",
  "Merchant resources",
];

/** Reading order (also used for the previous/next links). */
export const pages: DocPageData[] = [
  ...product,
  ...start,
  ...company,
  // Legal: overview first, then the documents.
  ...legal.slice(0, 1),
  ...privacy,
  ...terms,
  ...legal.slice(1),
  ...resources,
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
