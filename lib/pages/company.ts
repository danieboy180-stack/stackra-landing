import { APP_URL } from "@/lib/site";
import type { DocPageData } from "./types";

// Source: Stackra Legal and Trust Pack, fused with the earlier page copy.
// [Bracketed text] is a placeholder and "> " lines are draft notes; both are highlighted
// on the page until replaced or removed.
export const company: DocPageData[] = [
  {
    slug: "about",
    group: "Company",
    nav: "About",
    eyebrow: "About Stackra",
    title: "Helping merchants bring their businesses online.",
    lead: "Stackra exists to help merchants present their offerings online through shareable storefronts.",
    description:
      "Learn what Stackra does, who it serves and the principles behind its tools for merchants and small businesses.",
    body: `
## Practical storefront and business tools for merchants

Stackra helps merchants present their products and services online through shareable storefronts and supporting business tools.

A business should have a clear place where people can discover what it offers, understand the available options and find out how to take the next step. Stackra is built to make that easier without requiring every merchant to design, build and maintain a separate website from scratch.

Our focus is on giving merchants a straightforward way to organise their offerings, present useful business information and share a storefront with the people they want to reach.

## Built around how businesses connect with people

Businesses do not all reach customers in the same way. Some rely on direct conversations, referrals, social media, messaging platforms or a combination of different channels.

Stackra is designed to complement those existing relationships. A merchant can bring business information and offerings together in a storefront, then share that storefront through the channels they already use.

A public storefront can help a potential customer browse what a business offers before contacting the merchant. Depending on the features enabled for the store, a visitor may be able to view product or service details, compare available options, submit an enquiry or begin an order through a supported channel.

## More than a link

A business often needs to show more than a single product link or a short message. Customers may want to explore different offerings, see photographs, understand prices or available options, and know how to contact the business.

Stackra gives merchants a place to organise that information into a storefront. Merchants can manage the business and offering information available to them through the platform, while customers can visit a shareable public page to explore the information the merchant has chosen to publish.

The specific tools available to a merchant may depend on the plan, account configuration and features currently released by Stackra.

## How Stackra fits into a merchant's workflow

A merchant creates or configures a business presence, adds the relevant store information and publishes the offerings they want customers to see. The merchant can then share the storefront link through social media, messaging apps, referrals or other channels.

Where a customer starts an enquiry or order through a supported Stackra flow, Stackra may record the submitted information so that it can appear in the merchant's business workflow. Where the flow offers a WhatsApp hand-off, the customer may then be directed to WhatsApp to continue communicating with the merchant.

The merchant remains responsible for responding to customers, confirming orders, receiving payment through the arrangements they offer and fulfilling the sale or service.

## Who we serve

Stackra is built for merchants and small businesses that want a clearer way to present their offerings online and make it easier for potential customers to discover and contact them.

The platform is intended to support businesses across different product and service categories. Each merchant remains responsible for ensuring that its business, products and services are lawful and accurately represented.

## What Stackra is — and what it is not

Stackra provides technology that helps merchants create and manage an online business presence. A Stackra storefront is a merchant's storefront, not a representation that Stackra owns or sells the merchant's products.

Unless a separate feature-specific agreement expressly says otherwise, Stackra is not the seller of a merchant's products or services, does not take ownership of the merchant's inventory, does not arrange or guarantee delivery, and does not guarantee that a merchant will receive enquiries, orders, revenue or business growth.

Where customers are directed to WhatsApp or another third-party service, that service is operated independently and its own terms and privacy practices apply.

## What we believe in

- **Clarity.** People should be able to understand what a business offers and find the information they need before taking the next step.
- **Practicality.** Business tools should help merchants do useful work without introducing unnecessary complexity.
- **Honest information.** Product descriptions, prices, capabilities and company statements should reflect what is actually available and verifiable.
- **Merchant responsibility.** Merchants remain responsible for their businesses, offerings, customer relationships and commercial commitments.
- **Continuous improvement.** A useful product should improve through real use, careful feedback and attention to reliability.

## Our approach to trust

Trust is not established by a statement on a website alone. It depends on accurate information, reliable product behaviour, responsible handling of personal information, clear communication and accountability when problems occur.

We aim to explain what Stackra does, make the limits of the service understandable and provide practical ways to contact us or raise a concern.

We do not present unverified customer outcomes, partnerships, certifications, registrations, awards or company milestones as established facts.

## Get to know Stackra

Whether you're exploring the platform for the first time or already using Stackra for your business, we want the experience to be clear and useful.

Explore how Stackra works, review the information available on our website, or contact us with questions.

@primary How Stackra Works | /how-it-works
@secondary Start Selling | ${APP_URL}

Need help? {Contact Us|/contact}

## Company information

Stackra is a brand operated by **[INSERT THE FULL LEGAL NAME OF THE PERSON OR LEGAL ENTITY THAT OPERATES STACKRA]**.

@details
Legal operator: [INSERT VERIFIED LEGAL NAME]
Legal form: [INSERT THE CORRECT LEGAL FORM, IF APPLICABLE — FOR EXAMPLE, INDIVIDUAL, REGISTERED BUSINESS NAME OR LIMITED LIABILITY COMPANY]
Principal business or registered address: [INSERT A REAL ADDRESS THAT MAY PROPERLY BE USED FOR BUSINESS/LEGAL NOTICES]
Operating jurisdiction: Nigeria
Business registration information: [INSERT VERIFIED CAC DETAILS ONLY IF REGISTERED AND APPLICABLE. DO NOT INVENT A BN OR RC NUMBER.]
General contact: {hello@stackra.dev|mailto:hello@stackra.dev}
Website: {stackra.dev|https://stackra.dev}

The legal operator identified above is responsible for the operation of Stackra and the services described on this website.

> Replace the bracketed legal-operator and address fields with verified information. Do not describe Stackra as a limited company or registered business name unless that is its actual legal form. Do not invent a CAC or tax number. Test every email alias from an external account before showing it to visitors.
`,
  },
  {
    slug: "contact",
    group: "Company",
    nav: "Contact",
    eyebrow: "Contact Stackra",
    title: "We're here to help you find the right answer.",
    lead: "Whether you're exploring Stackra, need help with your account, or have a question about the platform, use the appropriate contact channel to reach us.",
    description:
      "Contact Stackra for general enquiries, merchant support, privacy requests, reports and business enquiries.",
    body: `
We want people using Stackra to understand the service, find useful information and have a clear way to raise concerns when something goes wrong.

@cards
General enquiries | Questions about Stackra and how the platform works. | mailto:hello@stackra.dev | hello@stackra.dev
Account and technical support | Sign-in problems, storefront setup and technical errors. | mailto:support@stackra.dev | support@stackra.dev
Privacy requests | Access, correction, deletion or restriction of your information. | mailto:privacy@stackra.dev | privacy@stackra.dev
Report a problem | Fraud, impersonation, unlawful content or a security issue. | mailto:reports@stackra.dev | reports@stackra.dev
Business enquiries | Commercial proposals and integrations. | mailto:business@stackra.dev | business@stackra.dev
Partnerships | Partnership discussions. | mailto:partnerships@stackra.dev | partnerships@stackra.dev

## General enquiries

For questions about Stackra, the services we provide, how the platform works or where to find information on our website, contact:

@details
Email: {hello@stackra.dev|mailto:hello@stackra.dev}

## Account and technical support

If you are experiencing a problem with your account or a Stackra feature, contact our support team.

We can assist with matters such as account access, sign-in and verification problems, storefront configuration, product or offering management, broken links and technical errors in the platform.

When reporting a technical issue, include the relevant page or store link, the approximate time the issue occurred, what you were trying to do and any error message shown. Please do not send your password, one-time verification code, full payment-card details or other security credentials.

@details
Support email: {support@stackra.dev|mailto:support@stackra.dev}

## Merchant and storefront enquiries

Merchants can contact support with questions about onboarding, available features, storefront setup, account access and use of Stackra's business tools.

If you are a customer asking about a product, price, stock availability, delivery, payment, cancellation, return or refund for an item displayed on a merchant's storefront, contact the merchant directly using the contact information on that storefront. The merchant is responsible for its products, sales and fulfilment unless a separate Stackra service expressly states otherwise.

@details
Merchant support: {support@stackra.dev|mailto:support@stackra.dev}

## Privacy and personal information

For questions about how Stackra handles personal information, or to request access, correction, deletion, restriction or another privacy-related action, contact:

@details
Privacy email: {privacy@stackra.dev|mailto:privacy@stackra.dev}

Please explain the request and provide enough information for us to identify the relevant account, store or interaction. Do not send unnecessary sensitive information or identity documents in an ordinary email. We may request proportionate information to verify that a request is made by the correct person or an authorised representative.

## Report a problem or content concern

Please use this channel to report a Stackra storefront, listing or interaction that you believe involves fraud, impersonation, misleading information, prohibited activity, unlawful content, misuse of personal information, intellectual-property infringement, a security issue or another serious concern.

When making a report, include:

- The relevant storefront, product, page or content link.
- A clear description of what happened or why you believe the content is problematic.
- The date or approximate time you observed it.
- Supporting information that you are authorised to share.
- Your contact details if you would like us to ask follow-up questions.

Please do not send passwords, one-time codes, private payment credentials or unrelated personal documents.

We review reports according to their nature, available information, potential risk and applicable law. We may ask the merchant or reporter for additional information, restrict access to content, suspend a feature or account, preserve relevant records, or take another proportionate action. A report is not, by itself, proof that a violation occurred.

@details
Reporting email: {reports@stackra.dev|mailto:reports@stackra.dev}

## Business and partnership enquiries

For commercial enquiries, potential integrations, business proposals or partnership discussions, contact:

@details
Business enquiries: {business@stackra.dev|mailto:business@stackra.dev}
Partnerships: {partnerships@stackra.dev|mailto:partnerships@stackra.dev}

Please include a clear description of your organisation, the proposal and the type of relationship you are considering.

## Before you contact us

For your security, never send your password, authentication code, private API key, full payment-card number, card security code, online banking password or payment PIN in an ordinary support message.

When contacting us about an account, use the email address associated with the account where possible. We may need to verify your identity or authority before discussing account information or carrying out a privacy request.

For a customer order or product complaint, contact the merchant first where the matter concerns the merchant's product, price, delivery, payment or fulfilment. You may still contact Stackra if you are reporting misuse of the platform or believe the merchant's storefront violates Stackra's rules or applicable law.

## Our commitment

We aim to keep our contact channels accurate, direct requests to the appropriate team and handle reports responsibly. We do not promise a 24-hour or fixed response service unless a specific support arrangement says so.

For legal notices, privacy requests or other formal communications, use the relevant contact above and identify the matter clearly. Where a formal postal address is required, use the legal operator address published in the Company Information section of the About page and the Terms of Service.

> Test every address above from an external mailbox, confirm replies can be sent from the correct address and that delivery does not fail silently, and assign a person responsible for each inbox. Do not show an unmonitored alias as an operational support channel.
`,
  },
];
