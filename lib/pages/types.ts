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
   *   @strip 8     a swipeable row of 8 empty picture slots
   *   @pic         one empty picture slot
   *   @strip 8 | folder    @pic | folder
   *       the same, filled from /public/<folder>. A strip drifts past on its own,
   *       like the home hero. A pic shows the first image in the folder.
   *       An empty or missing folder keeps the empty slots.
   * Blocks are separated by a blank line.
   */
  body: string;
};
