export type DocPageData = {
  slug: string;
  /** Sidebar group */
  group: string;
  /** Label in the sidebar and footer */
  nav: string;
  /** Small label above the title */
  eyebrow: string;
  /** Optional pill next to the eyebrow, e.g. "Template" or "Separate agreement" */
  tag?: string;
  title: string;
  /** Larger intro line under the title */
  lead?: string;
  /** Key facts under the title, e.g. effective date / last updated. Values accept the inline markup below. */
  meta?: { label: string; value: string }[];
  /** Meta description */
  description: string;
  /**
   * Page copy in a tiny markup:
   *   ## Heading        ### Sub-heading
   *   - list item       1. numbered item
   *   > draft note (shown in an amber box)
   *   @callout          neutral info box; the text follows on the next line(s)
   *   @primary Label | /href     @secondary Label | /href   (buttons)
   *   @cards            link cards; one per following line: Title | Text | /href | Badge (badge optional)
   *   @details          label/value rows; one per following line: "Label: value"
   *   | a | b |         table; the second row is the "|---|---|" divider
   *   **bold**   {link text|/href}   [placeholder] (highlighted until replaced)
   * Blocks are separated by a blank line.
   */
  body: string;
};
