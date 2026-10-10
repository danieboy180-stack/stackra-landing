export type DocPageData = {
  slug: string;
  /** Sidebar group */
  group: string;
  /** Label in the sidebar and footer */
  nav: string;
  /** Small label above the title */
  eyebrow: string;
  title: string;
  /** Larger intro line under the title */
  lead?: string;
  /** Meta description */
  description: string;
  /**
   * Page copy in a tiny markup:
   *   ## Heading        ### Sub-heading
   *   - list item       > draft note (shown in an amber box)
   *   @primary Label | /href     @secondary Label | /href   (buttons)
   *   **bold**   {link text|/href}   [placeholder] (highlighted until replaced)
   * Blocks are separated by a blank line.
   */
  body: string;
};
