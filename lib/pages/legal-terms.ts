import { APP_URL } from "@/lib/site";
import type { DocPageData } from "./types";

// Working drafts. [Bracketed text] is a placeholder and "> " lines are drafting notes;
// both are highlighted on the page until replaced or removed.
export const legalTerms: DocPageData[] = [
  {
    slug: "website-terms",
    group: "Legal",
    nav: "Website terms",
    eyebrow: "Legal",
    title: "Website Terms of Use",
    description:
      "The terms for using Stackra's public website and information pages.",
    body: `
> Working draft. Confirm the operator details, then have the document reviewed by a Nigerian legal practitioner before publication.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

These Website Terms of Use apply when you visit Stackra's public website and read its information pages. They do not replace the {Terms of Service|/terms}, the {Merchant Terms|/merchant-terms} or the {Customer Terms|/customer-terms}, which apply when you use a merchant account or a merchant storefront.

## 1. Who operates this website

Stackra is a product and brand operated by [insert the verified legal name of the person or organization operating Stackra]. In these terms, "Stackra", "we", "us" and "our" refer to that operator.

We do not describe "Stackra" as a registered company name unless and until it is one.

Contact: hello@stackra.dev

Business address or jurisdiction: [Insert verified details.]

## 2. What this website is for

This website gives information about Stackra, how it works, who it is for, our legal documents and how to contact us. It is not a store. Public merchant storefronts are published by the merchants who run them.

## 3. The different parts of Stackra

- **This website:** these Website Terms of Use apply.
- **The merchant application:** the {Terms of Service|/terms} and {Merchant Terms|/merchant-terms} apply.
- **Merchant storefronts:** the merchant is ordinarily the seller, and the {Customer Terms|/customer-terms} apply.
- **Separate agreements:** a written agreement between you and Stackra applies to the extent it says so.

## 4. Using the website

You may browse the website, read its pages and share links to it.

You must not:

- Try to gain unauthorised access to the website, its systems or other people's information.
- Interfere with the website or place an unreasonable load on it.
- Use automated tools to scrape or collect content or personal information in a way that harms the website or breaks the law.
- Upload or send malicious code.
- Misuse the Stackra name or logo, or pretend to be Stackra or another person.
- Use the website for an unlawful purpose.

We may restrict access where reasonably necessary to protect the website, its users or our legal obligations.

## 5. Accuracy of information

We try to keep the website accurate and current, but some information may be incomplete or out of date.

Descriptions, screenshots and demonstrations show how Stackra is intended to work and may use sample data. An example business, product, price or result shown on this website is for illustration unless we clearly say it is real.

Statements about planned features describe our intentions, not commitments. A feature is available only once it has been released and enabled for your account.

## 6. No guarantees

The website is provided as it is available. We do not guarantee uninterrupted availability, search ranking, merchant sales, customer traffic, business growth or the continued availability of third-party services.

Nothing in these terms removes a right that cannot lawfully be excluded.

## 7. Intellectual property

The Stackra name, logo, design, text and software belong to us or our licensors. You may view the website and share links to it. You may not copy, redistribute or commercially exploit its contents without our permission, except where the law allows.

Content on a merchant storefront belongs to that merchant or its licensors.

## 8. Links to other websites

The website may link to websites we do not control. Those sites have their own terms and privacy practices, and we are not responsible for them.

## 9. Privacy and cookies

Our {Privacy Policy|/privacy} explains how we handle personal information. Our {Cookie Policy|/cookies} explains the cookies and similar technologies we use.

## 10. Questions, security issues and complaints

To ask about the website, report inaccurate content, raise an accessibility problem or report a security concern, contact reports@stackra.dev. For other complaints, see {Complaints and Disputes|/complaints}.

## 11. Changes to these terms

We may update these terms. The updated version will show its effective date, and we will give notice of material changes where the law requires it.

## 12. Governing law

These terms are governed by the laws of the Federal Republic of Nigeria. Subject to applicable law, disputes may be brought before a court of competent jurisdiction in Nigeria. Nothing here removes a right you have under mandatory law.

## Related documents

- {Legal overview|/legal}
- {Terms of Service|/terms}
- {Privacy Policy|/privacy}
`,
  },
  {
    slug: "merchant-terms",
    group: "Legal",
    nav: "Merchant terms",
    eyebrow: "Legal",
    title: "Merchant Terms",
    lead: "Extra terms for businesses that use Stackra to run a storefront and manage orders.",
    description:
      "Additional terms for merchants covering accounts, staff, orders, records, customer data, AI features and what happens to your information when a plan ends.",
    body: `
> Working draft. These terms add to the Terms of Service. Check every statement against the live product before publication: a feature may be described as available only once it is released and enabled.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

These Merchant Terms apply to businesses, owners, administrators and authorised staff who create or use a Stackra business workspace. They are part of the agreement described in section 23.1 of the {Terms of Service|/terms}. Where they conflict with the Terms of Service on a point they cover, these Merchant Terms apply to that point.

Fees, free trials, plan duration and renewal are set out in section 6 of the Terms of Service and in the {Refund and Cancellation Policy|/refunds}.

## 1. Accounts, staff and authority

When you create or use a workspace for a business, you confirm that you have authority to bind that business to these terms.

You must give accurate information and keep it up to date.

You are responsible for the people you authorise to use your workspace. Give each person only the access they need, and remove access promptly when they leave or no longer need it.

Keep your credentials secure. Never share your password or a one-time code, and tell us promptly at reports@stackra.dev if you suspect someone has accessed your account without permission.

Where Stackra offers different staff roles, the permissions of each role will be described when that feature is released. Until then, assume that anyone you give access to can do what your account allows.

## 2. What is included and what is planned

The features available to you depend on their release status, your plan and how your account is configured.

A feature is available only when it has been released and enabled for your account. Planned capabilities, including anything labelled "coming soon", are not part of your plan until then. Examples of capabilities that may be described as planned include advanced customer management, follow-up and campaign tools, supplier and procurement tools, credit and collections records, reconciliation and financial reporting, and staff permissions.

Some features may be tested with selected merchants before general release and may change or be withdrawn.

## 3. Your storefront, listings and records

You are responsible for the accuracy of your listings, prices, images, availability and stock figures.

Stock figures show what you have entered. Unless a feature says otherwise, Stackra does not guarantee that stock updates automatically, that items are reserved when an order starts, or that you cannot sell more than you hold.

Keep your own records of orders, payments and stock. Do not rely on Stackra as your only record.

## 4. Orders and checkout

A customer may reach you through your storefront by sending an enquiry, requesting a quotation, submitting an order or continuing to a WhatsApp conversation, depending on what your store offers.

An enquiry or order is not an accepted order until you accept it or the workflow clearly says it is accepted.

Where an order is handed to WhatsApp, you are responsible for monitoring your WhatsApp account and replying to customers. Stackra may not be able to record every message or order that starts on a storefront, for example if a customer's connection or device fails. Check your messages as well as your Stackra records.

Order statuses in Stackra, such as confirmed, processing, ready, completed and cancelled, are tools for organising your own work. They do not create obligations to a customer beyond what you have agreed with that customer.

## 5. Payments and financial records

Unless a payment feature is expressly enabled and described to you, Stackra does not take payments for you, hold funds, confirm transfers, act as merchant of record or issue refunds.

You are responsible for confirming the payments you receive and recording them accurately. Keep manual entries distinct from payments you have verified.

If Stackra introduces a payment feature, the terms for that feature will explain the provider, how money flows, fees, refunds and payouts before you use it.

### Credit and collections records

Where a feature lets you record credit sales, balances and repayments, you decide whether to sell on credit, set limits, agree repayment arrangements and communicate with your customers. Stackra provides record-keeping tools. It is not a lender, a credit bureau or a debt collector, it does not assess your customers' creditworthiness, and it does not guarantee that anyone will repay you.

You must follow the laws that apply to credit and collections, including how you treat customers and their information.

## 6. Supply and procurement

Where supplier and procurement features are released, you decide which suppliers to use and what to buy. A supplier's quotation is an offer or information from that supplier until you accept it. Stackra does not guarantee a supplier's prices, stock, quality or delivery.

Before those features are released, we will set out who contracts with the supplier, who receives payment, who arranges transport, who bears the risk of loss, and how disputes are resolved.

## 7. Customer data and your responsibilities

When you receive personal information about your customers through Stackra, such as enquiries, orders and notes, you usually decide why and how it is used. That generally makes you responsible for it under data protection law.

You must:

- Use it only for orders, support, fulfilment and marketing you are allowed to do.
- Not send unsolicited marketing without a lawful basis, and honour opt-outs.
- Tell your customers how you use their information.
- Limit staff access and protect any exports you make.
- Tell us promptly if you receive a request or complaint about information held in Stackra.

How Stackra handles this information on your behalf is set out in the {Data Processing Agreement|/data-processing}. How Stackra handles information for its own purposes is set out in the {Privacy Policy|/privacy}.

We do not use your customers' personal information for our own marketing or for unrelated product training just because it is stored in Stackra.

## 8. AI-assisted features

Some features may use AI to help structure or summarise text, images, voice, product details or requests that you submit. When an AI feature is active, we will identify the provider, the purpose and where the data goes in our list of subprocessors.

AI suggestions can be wrong. You must review and approve any suggestion that would change a product, price, stock level, quotation, customer record, payment record or financial record before it becomes part of your records. The records in your workspace, not an AI suggestion, are the source of truth.

We do not use your personal information or your customers' personal information to train a third-party model unless we have explained it separately and have a valid legal basis and any required agreement or consent.

We will not make significant decisions about people, such as credit eligibility, only by automated means without separate notice and safeguards.

## 9. Confidentiality and security

Each party must keep the other's non-public information confidential and use it only for this agreement. This does not apply to information that is already public, that the other party independently develops or is given lawfully, that the other party agrees to release, or that the law requires to be disclosed.

Our approach to security is described in {Security and Data Protection|/security}. You must secure your devices, use strong passwords, never share one-time codes, limit staff access and report suspected compromise promptly. Each party will cooperate in investigating a security incident that affects your workspace.

## 10. Your rights do not depend on your plan

Our plans differ in tools, limits and advanced features. They do not change:

- Your data protection rights, or your customers' rights.
- The basic security of your account.
- Your ability to make a complaint.
- Reasonable access to the records you need to understand your business and meet your legal duties.

We will not make these conditional on paying for a higher plan or on renewing. A plan limit may restrict new premium features. It does not remove your underlying legal rights or access to essential historical records.

## 11. If your plan ends or you downgrade

What happens to paid features, and to your storefront, is described in section 14 of the {Terms of Service|/terms}.

We will not silently delete your business records. Before deleting them after closure or expiry, we will tell you and allow [insert notice period] for you to retrieve them.

Some export tools may not be self-service. Where that is so, you can ask support@stackra.dev for an export of your information, and we will handle the request manually.

How long we keep information, and the legal reasons we may keep some of it, are set out in {Data Retention and Deletion|/data-retention}.

## Related documents

- {Legal overview|/legal}
- {Terms of Service|/terms}
- {Data Processing Agreement|/data-processing}
- {Refund and Cancellation Policy|/refunds}

@primary Open Your Stackra Business | ${APP_URL}
`,
  },
  {
    slug: "customer-terms",
    group: "Legal",
    nav: "Customer terms",
    eyebrow: "Legal",
    title: "Customer Terms and Conditions",
    lead: "Plain terms for browsing a merchant's storefront, sending an enquiry or placing an order.",
    description:
      "The terms that apply when you browse a merchant's Stackra storefront, send an enquiry, ask for a quotation or place an order.",
    body: `
> Working draft. This page must describe the checkout journey that is actually live. Whenever checkout changes, update these terms and the Privacy Policy together, then have them reviewed by a Nigerian legal practitioner.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

These terms apply when you browse a merchant's Stackra storefront, send an enquiry, ask for a quotation or place an order. They explain what Stackra does, what the merchant does, and where to go when something goes wrong.

## 1. What Stackra is and is not

Stackra provides software and storefront pages that merchants use to present what they sell. In the current model, the merchant is ordinarily the seller.

Unless a feature clearly says otherwise, Stackra is not the seller, does not own the merchant's stock, does not guarantee the quality of what is sold, does not deliver goods, does not hold your money or act as escrow, and is not a lender.

## 2. Who you are buying from

A storefront shows the merchant's business name and contact details. The merchant is responsible for its descriptions, photographs, prices, availability, acceptance of orders, delivery, returns and refunds.

If anything is unclear, ask the merchant before you commit.

## 3. How ordering works

Depending on the store and the features it has enabled, you may be able to:

- Browse products and services.
- Send a message to the merchant, including by continuing to a WhatsApp conversation.
- Submit a request or an order.
- Ask for a quotation.

Which of these you see depends on the merchant's store.

## 4. When a purchase is formed

Browsing, adding an item or sending a message does not create a binding purchase. A purchase is formed when the merchant accepts your order, in the way the store's ordering process explains.

Before you agree, confirm the exact item, the total price, any delivery or other charges, and the return and refund terms.

Pay only as the merchant tells you, and check payment details directly with the merchant. Stackra does not process payments for a store unless that store tells you a payment feature is available.

## 5. If your order or message does not go through

An order or enquiry may fail to reach the merchant or to be recorded, for example because of a connection or device problem or a problem with WhatsApp. Stackra does not guarantee that every message sent from a storefront is recorded as an order.

If you do not receive a confirmation from the merchant, contact the merchant directly using the details on its storefront.

## 6. The merchant's own terms

A merchant may set its own terms for delivery areas, fees, pickup, lead times, cancellations, returns and service availability. These cannot remove rights you have under mandatory Nigerian consumer law.

## 7. Information you share

The details a store asks for depend on the merchant and the features in use. Share only what is needed for your enquiry or order, and do not send passwords, card details or identity documents in an enquiry.

Stackra processes information to provide the platform. The merchant uses it to deal with your enquiry or order. Our {Privacy Policy|/privacy} explains what Stackra does with it, and you can read about your rights on {Your data rights|/data-rights}.

If you continue to WhatsApp, WhatsApp's own terms and privacy practices apply to that conversation, and so do the merchant's practices.

## 8. Problems and complaints

- **About a product, an order, delivery, a return or a refund:** contact the merchant first.
- **About the platform, an account, privacy or a technical problem:** contact Stackra at support@stackra.dev, privacy@stackra.dev or reports@stackra.dev.

See {Complaints and Disputes|/complaints} for how we handle complaints. Stackra cannot guarantee how a merchant resolves a sales dispute, and it does not fund a merchant's refunds.

## 9. Acceptable use

Do not place false orders, commit fraud, abuse merchants, try to access anything you are not allowed to, interfere with a store's operations or collect other people's personal information from storefronts.

## 10. Your responsibilities

Give accurate information, read product descriptions, sizes, prices and conditions before ordering, and use storefronts lawfully.

## 11. Limits

Stackra is not responsible for a merchant's products or performance except where the law says otherwise. Nothing in these terms removes a right you have under law.

## 12. Changes and governing law

We may update these terms and will show the effective date. They are governed by the laws of the Federal Republic of Nigeria, subject to your mandatory rights.

## Related documents

- {Legal overview|/legal}
- {Privacy Policy|/privacy}
- {Your data rights|/data-rights}
- {Complaints and Disputes|/complaints}

@primary Explore a Stackra Storefront | /customers
`,
  },
];
