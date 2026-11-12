import type { DocPageData } from "./types";

// Overview page for the Legal group. Every document it links to lives in lib/pages.
export const legalHub: DocPageData[] = [
  {
    slug: "legal",
    group: "Legal",
    nav: "Legal overview",
    eyebrow: "Legal",
    title: "Legal and privacy documents.",
    lead: "Find the terms, privacy information and policies that apply to visitors, merchants and customers.",
    description:
      "An overview of Stackra's terms, privacy information and policies, and who each one is for.",
    body: `
> These documents are working drafts. They describe Stackra as it exists today and mark planned features as planned. Each one must be checked against the live product and reviewed by a Nigerian legal practitioner before it is treated as final.

Stackra is a merchant-commerce platform. Merchants use it to present products and services online and to manage enquiries and orders. Customers use merchant storefronts to explore, enquire and order. Different people need different documents, so we keep them separate.

## If you visit our website

- {Website Terms of Use|/website-terms}: how you may use our public website.
- {Privacy Policy|/privacy}: how we handle personal information.
- {Cookie Policy|/cookies}: the cookies and similar technologies we use.

## If you are a merchant

- {Terms of Service|/terms}: the main agreement for using Stackra.
- {Merchant Terms|/merchant-terms}: extra terms for accounts, staff, orders, records and customer data.
- {Data Processing Agreement|/data-processing}: how we handle personal data on your behalf.
- {Refund and Cancellation Policy|/refunds}: subscriptions, cancellation and refunds.
- {Data Retention and Deletion|/data-retention}: how long information is kept and how it is deleted.

## If you are a customer

- {Customer Terms and Conditions|/customer-terms}: browsing, enquiring and ordering through a merchant storefront.
- {Your data rights|/data-rights}: how to ask about, correct or delete your information.
- {Complaints and Disputes|/complaints}: who to contact when something goes wrong.

## For everyone

- {Security and Data Protection|/security}: how we approach security, and what happens if something goes wrong.
- {Contact|/contact}: which address to use for which question.

## Who is responsible

Stackra provides the software and the storefront pages. In the current model, a merchant lists its own goods or services, sets its own prices and delivery terms, and deals directly with its customers. Stackra is not the seller of those goods or services.

Stackra is a brand operated by [insert the verified legal name of the person or organization operating Stackra].

Privacy contact: privacy@stackra.dev

## Rights that do not depend on your plan

Our plans differ in the tools they include. They do not differ in your privacy rights, the security of your account, your ability to complain, or a customer's consumer rights. Those apply to everyone, on every plan.

@primary Contact Us | /contact
`,
  },
];
