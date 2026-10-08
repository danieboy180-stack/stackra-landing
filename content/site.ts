export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export type Feature = {
  title: string;
  benefit: string;
  description: string;
};

export const site = {
  name: "Stackra",
  url: "https://stackra.dev",
  tagline: "From WhatsApp seller to a real business.",
  hero: {
    eyebrow: "Commerce software for African merchants",
    headline: "From WhatsApp seller to a real business.",
    subhead:
      "Run orders, your storefront, inventory, payments and customer history in one simple workspace — without replacing the way you already sell.",
    primaryCta: "Get your store set up",
    secondaryCta: "See how it works"
  },
  navigation: [
    { label: "Product", href: "/product", description: "See the workspace behind every sale." },
    { label: "Solutions", href: "/#solutions", description: "Sell, manage and grow with one system." },
    { label: "Pricing", href: "/pricing", description: "See how Stackra plans to launch pricing." },
    { label: "Resources", href: "/#how-it-works", description: "Learn how Stackra fits your workflow." }
  ] satisfies NavItem[],
  outcomes: [
    {
      title: "Sell",
      eyebrow: "Keep the sale moving",
      copy: "Capture orders from the conversations where customers already reach you, then keep every item and next step together.",
      imageId: "merchant-shop"
    },
    {
      title: "Manage",
      eyebrow: "Make the back office simple",
      copy: "Know what is pending, what is running low and what needs attention without stitching spreadsheets and chats together.",
      imageId: "merchant-arranging"
    },
    {
      title: "Get paid",
      eyebrow: "Know what happened",
      copy: "Keep payment status attached to the order so a transfer screenshot does not become your source of truth.",
      imageId: "merchant-payment"
    },
    {
      title: "Grow",
      eyebrow: "Remember the customer",
      copy: "Keep purchase history and useful signals close enough to turn one sale into the next conversation.",
      imageId: "merchant-market"
    }
  ],
  features: [
    { title: "Orders", benefit: "Never lose the next step.", description: "Capture sales, statuses and order context in one place." },
    { title: "Storefront", benefit: "Give your business a real home.", description: "Share a branded storefront that is easy for customers to browse." },
    { title: "Inventory", benefit: "Know what you actually have.", description: "Watch stock levels and surface products that need attention." },
    { title: "Payments", benefit: "See paid and pending at a glance.", description: "Connect payment status to the order instead of hunting screenshots." },
    { title: "Customers", benefit: "Remember the person behind the order.", description: "Keep purchase history and preferences attached to each customer." },
    { title: "Insights", benefit: "Focus on the few signals that matter.", description: "Understand revenue, stock and follow-up opportunities without an analytics maze." },
    { title: "WhatsApp flow", benefit: "Keep selling where customers are.", description: "Use Stackra around the channels that already drive your conversations." },
    { title: "Simple setup", benefit: "Start without a systems project.", description: "Get your store and workspace ready without rebuilding your whole business." }
  ] satisfies Feature[],
  faqs: [
    ["What is Stackra?", "Stackra is a commerce workspace for African merchants. It brings orders, storefront, inventory, payments, customers and useful business signals into one place."],
    ["Do I have to stop selling on WhatsApp?", "No. Stackra is designed around the conversations where your customers already buy, so WhatsApp can remain part of your selling flow."],
    ["Can I have an online storefront?", "Yes. Stackra includes a branded storefront so customers have a real place to browse products and start an order."],
    ["Does Stackra manage inventory?", "Stackra is designed to keep product and stock context close to orders so you can see what is moving and what needs attention."],
    ["Can customers still contact me directly?", "Yes. Stackra is meant to support the direct customer relationships merchants already have, not replace them with a closed marketplace."],
    ["Is Stackra only for fashion sellers?", "No. The product is intended for the broader range of merchants who sell through conversations, storefronts and repeat customers."],
    ["Do you publish pricing?", "Public paid-plan pricing is being finalized for the current launch phase and will be published when the paid plans are ready."],
    ["How do I get started?", "Use the “Get your store set up” button to contact Stackra. The team can help you move your existing selling flow into the workspace."]
  ],
  pricingNote: "Public paid-plan pricing is being finalized for the current launch phase.",
  contactEmail: "hello@stackra.dev",
  whatsapp: {
    href: "https://wa.me/2347087773805?text=Hi%20Stackra%2C%20I%27d%20like%20to%20get%20my%20store%20set%20up."
  }
} as const;
