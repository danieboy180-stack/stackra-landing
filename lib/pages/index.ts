import { company } from "./company";
import { privacy } from "./privacy";
import { product } from "./product";
import { start } from "./start";
import type { DocPageData } from "./types";

export type { DocPageData };

/** Sidebar order. */
export const groups = ["Product", "Get started", "Company"];

/** Reading order (also used for the previous/next links). */
export const pages: DocPageData[] = [
  ...product,
  ...start,
  ...company,
  ...privacy,
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
