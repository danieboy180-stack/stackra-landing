import type { DocPageData } from "./types";

// Source: Stackra Legal and Trust Pack, fused with the earlier page copy.
// [Bracketed text] is a placeholder and "> " lines are draft notes; both are highlighted
// on the page until replaced or removed.
export const resources: DocPageData[] = [
  {
    slug: "merchant-privacy-notice",
    group: "Merchant resources",
    nav: "Privacy notice template",
    eyebrow: "Merchant resources",
    tag: "Template",
    title: "Merchant privacy notice",
    lead: "A starting point for the privacy notice on your own storefront.",
    meta: [
      { label: "Effective date", value: "[DATE]" },
      { label: "Last updated", value: "[DATE]" },
    ],
    description:
      "A template privacy notice that a merchant can adapt and publish on its own Stackra storefront.",
    body: `
@callout
This is a template for an individual Merchant to adapt and publish on its own Storefront. It is not Stackra's Privacy Policy. Replace every highlighted field before you publish it.

[MERCHANT BUSINESS NAME] ("we", "us" or "our") respects your privacy. This notice explains how we collect and use personal information when you browse our Storefront, ask about our products or services, submit a request, place an order or contact us.

## 1. Who we are

@details
Business name: [FULL BUSINESS / LEGAL NAME]
Business address: [ADDRESS, IF APPROPRIATE]
Contact email: [EMAIL]
Telephone / WhatsApp: [NUMBER]
Website / Storefront: [URL]

We are responsible for deciding how we use the Customer information we collect for our own sales, customer service and business purposes, subject to applicable law.

## 2. Information we collect

Depending on your interaction with us, we may collect:

- Your name, phone number, email address and preferred contact method.
- The products or services you ask about, order or purchase.
- Your message, enquiry, product preferences or special instructions.
- Delivery or collection details that are necessary to fulfil an order.
- Payment confirmation or transaction reference information needed to reconcile a payment. We do not ask you to send your online banking password, card PIN or one-time banking code.
- Records of communication with us, including messages sent through WhatsApp or another contact channel.
- Other information you choose to provide that is relevant to your request or transaction.

Please do not send sensitive personal information unless we specifically request it for a lawful and necessary purpose.

## 3. Why we use your information

We may use your information to:

- Respond to questions and enquiries.
- Prepare quotations and confirm orders.
- Contact you about availability, delivery, collection or service arrangements.
- Process and fulfil the sale or service you requested.
- Handle payment confirmation, receipts, complaints, cancellations, returns or refunds.
- Maintain business and transaction records.
- Protect our business and customers against fraud or misuse.
- Send promotional messages only where we have a lawful basis and any consent required by law.

## 4. Our lawful basis

We process information where it is necessary to take steps you request before a contract, perform a contract with you, comply with a legal obligation, pursue a legitimate interest that does not override your rights, or rely on consent where consent is required. [MERCHANT: REVIEW THIS LIST AND REMOVE ANY BASIS THAT DOES NOT APPLY TO YOUR PRACTICES.]

## 5. Who we share information with

We may share relevant information with service providers who help us communicate with you, receive payment, deliver an order, maintain business records or provide our online storefront. We may also disclose information where required by law or necessary to protect rights and safety.

Our online Storefront is powered by Stackra. Stackra provides technology that allows us to present our offerings and manage enquiries or orders. Depending on the function being used, Stackra may process information on our behalf to provide the platform. You can read Stackra's Privacy Policy at {stackra.dev/privacy|https://stackra.dev/privacy}. Other services we use may have their own privacy policies.

[MERCHANT: LIST YOUR ACTUAL PAYMENT, DELIVERY, MESSAGING, ACCOUNTING AND OTHER PROVIDERS WHERE APPROPRIATE.]

## 6. Public information

Information displayed publicly on this Storefront, such as our business name, product descriptions, photographs, prices and public contact details, may be viewed or shared by anyone who visits the page. Please contact us if you believe public information about you has been displayed in error.

## 7. How long we keep information

We keep Customer information for as long as reasonably necessary to respond to your enquiry, fulfil the transaction, maintain business records, comply with legal obligations and resolve disputes. [MERCHANT: INSERT SPECIFIC RETENTION PERIODS OR CRITERIA FOR ORDERS, ENQUIRIES, INVOICES AND MARKETING CONTACTS.]

## 8. Your privacy rights

Depending on the law that applies, you may request access to your information, correction of inaccurate details, deletion where the legal conditions are met, restriction or objection to certain processing, portability where applicable, or withdrawal of consent where processing relies on consent.

To make a privacy request, contact us at [PRIVACY EMAIL / CONTACT]. We may need to verify your identity before acting on a request. You may also lodge a complaint with the Nigeria Data Protection Commission at {ndpc.gov.ng|https://ndpc.gov.ng/}.

## 9. Marketing messages

We will send marketing messages only where we have a lawful basis and any consent required by law. You can opt out by using the unsubscribe method provided or contacting us at [CONTACT]. Opting out of marketing does not stop service messages needed to complete an order or respond to a request.

## 10. Security and changes

We take reasonable steps to protect Customer information, but no online communication or storage method is completely risk-free. We may update this notice as our practices change. The current version will show its last-updated date.

## 11. Contact us

For questions or privacy requests, contact:

@details
[MERCHANT BUSINESS NAME]
Email: [EMAIL]
Phone / WhatsApp: [NUMBER]
Address: [ADDRESS, IF APPROPRIATE]

## Related documents

@cards
Storefront disclosure checklist | What to review before publishing a storefront. | /storefront-checklist | Checklist
Order, payment and delivery policy | A template for your orders, payment and delivery terms. | /merchant-order-policy | Template
`,
  },
  {
    slug: "merchant-order-policy",
    group: "Merchant resources",
    nav: "Order policy template",
    eyebrow: "Merchant resources",
    tag: "Template",
    title: "Order, payment and delivery policy",
    lead: "A starting point for the order, payment, delivery and returns terms on your own storefront.",
    meta: [
      { label: "Effective date", value: "[DATE]" },
      { label: "Last updated", value: "[DATE]" },
    ],
    description:
      "A template order, payment, delivery, cancellation and returns policy for a merchant's own customers.",
    body: `
@callout
This is a merchant-authored policy template for the Merchant's own customers. Each Merchant must fill it with its real terms. Stackra does not set the Merchant's delivery, pricing, payment or refund decisions.

## 1. Orders and confirmation

An enquiry or order request does not mean that an order has been accepted. We will review the request and confirm availability, final price, delivery or collection arrangements and any other material conditions before accepting the order.

An order is confirmed when [INSERT THE MERCHANT'S ACTUAL CONFIRMATION METHOD, SUCH AS A WRITTEN MESSAGE, INVOICE OR PAYMENT CONFIRMATION]. Please do not assume that an order is accepted until we provide confirmation.

## 2. Prices and additional charges

Prices are shown in [CURRENCY]. [STATE WHETHER PRICES INCLUDE OR EXCLUDE ANY APPLICABLE TAXES.] Delivery, packaging, installation or other additional charges will be communicated before you confirm the purchase. If the price or availability changes before acceptance, we will inform you before proceeding.

## 3. Payment methods

We currently accept: [LIST ONLY THE PAYMENT METHODS ACTUALLY ACCEPTED].

Payment instructions will be provided when your order is confirmed. Do not send your card PIN, online banking password or one-time banking code to us. We will confirm receipt of payment through [STATE THE ACTUAL PROCESS].

Where payment is made through a third-party provider, that provider's terms and privacy policy may also apply.

## 4. Delivery and fulfilment

@details
Delivery areas: [LIST AREAS OR EXPLAIN HOW AREAS ARE CONFIRMED].
Delivery fee: [STATE AMOUNT OR HOW IT IS CALCULATED].
Estimated delivery time: [STATE REALISTIC ESTIMATE AND WHETHER IT BEGINS AFTER PAYMENT / ORDER CONFIRMATION].
Delivery provider: [NAME IF APPLICABLE].

We will communicate material delivery delays where reasonably practicable. Delivery estimates are not guaranteed unless we expressly confirm a guaranteed delivery date.

For collection or in-person fulfilment: [INSERT LOCATION, HOURS, APPOINTMENT OR COLLECTION INSTRUCTIONS].

## 5. Cancellations

You may request cancellation by contacting [CONTACT] as soon as possible and providing your order reference. Whether an order can be cancelled depends on its status, whether fulfilment has started, the nature of the product or service and applicable consumer law. [INSERT THE MERCHANT'S ACTUAL CANCELLATION RULES.] Nothing in this policy removes a cancellation or refund right that cannot legally be excluded.

## 6. Returns, exchanges and refunds

To request a return, exchange or refund, contact [EMAIL / PHONE / WHATSAPP] within [INSERT REASONABLE PERIOD, SUBJECT TO APPLICABLE LAW]. Provide your order reference, the item or service concerned and the reason for the request.

@details
Return address or process: [INSERT DETAILS].
Condition requirements, if lawful: [INSERT DETAILS].
Refund method and timing: [INSERT ACTUAL PROCESS AND REALISTIC TIMING].
Exchange process: [INSERT DETAILS].

State any lawful exceptions for personalised, perishable, digital, hygiene-sensitive or otherwise restricted products only where those exceptions genuinely apply and are permitted by applicable law. A blanket "no refunds under any circumstances" statement should not be used where it would conflict with consumer rights.

## 7. Damaged, incorrect or missing items

If an item arrives damaged, incorrect or incomplete, contact us at [CONTACT] as soon as reasonably possible and provide the order reference and relevant evidence. We will review the issue and explain the remedy available under our policy and applicable law.

## 8. Contact

@details
[MERCHANT BUSINESS NAME]
Email: [EMAIL]
Phone / WhatsApp: [NUMBER]
Business address: [ADDRESS]

## Related documents

@cards
Storefront disclosure checklist | What to review before publishing a storefront. | /storefront-checklist | Checklist
Merchant privacy notice | A template privacy notice for your storefront. | /merchant-privacy-notice | Template
`,
  },
  {
    slug: "storefront-checklist",
    group: "Merchant resources",
    nav: "Storefront checklist",
    eyebrow: "Merchant resources",
    tag: "Checklist",
    title: "Storefront disclosure checklist",
    lead: "What to provide and review before you publish a storefront.",
    description:
      "A checklist of the information a merchant should provide and review before publishing a storefront.",
    body: `
Before publishing a storefront, every Merchant should provide and review the following, as applicable to its Business:

1. Correct Business or trading name and usable contact channel.
2. Accurate product/service descriptions and photographs the Merchant is entitled to use.
3. Clear price, currency, availability and any material product limitations.
4. Delivery areas, fees, delivery time estimates and collection arrangements.
5. Accepted payment methods and how payment is confirmed.
6. Cancellation, return, exchange and refund arrangements that comply with applicable law.
7. Customer privacy notice and a contact for privacy requests.
8. Required licence, registration or product information where the Merchant's activity is regulated.
9. Clear distinction between an enquiry, an order request, an accepted order and a completed sale.
10. Removal or correction of outdated information when prices, availability or terms change.

## Related documents

@cards
Merchant privacy notice | A template privacy notice for your storefront. | /merchant-privacy-notice | Template
Order, payment and delivery policy | A template for your orders, payment and delivery terms. | /merchant-order-policy | Template
`,
  },
];
