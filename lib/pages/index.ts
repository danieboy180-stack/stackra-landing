import { company } from "./company";
import { legalData } from "./legal-data";
import { legalHub } from "./legal-hub";
import { legalPolicies } from "./legal-policies";
import { legalTerms } from "./legal-terms";
import { privacy } from "./privacy";
import { product } from "./product";
import { start } from "./start";
import { terms } from "./terms";
import type { DocPageData } from "./types";

export type { DocPageData };

/** Sidebar order. */
export const groups = ["Product", "Get started", "Company", "Legal"];

// Privacy and Terms are listed under Legal in the sidebar. Their own files are unchanged.
const inLegal = (list: DocPageData[]): DocPageData[] =>
  list.map((p) => ({ ...p, group: "Legal" }));

/** Reading order (also used for the previous/next links). */
export const pages: DocPageData[] = [
  ...product,
  ...start,
  ...company,
  ...legalHub,
  ...inLegal(privacy),
  ...inLegal(terms),
  ...legalTerms,
  ...legalData,
  ...legalPolicies,
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
