import type { DocPageData } from "./types";

// Source: Stackra Legal and Trust Pack, fused with the earlier page copy.
// [Bracketed text] is a placeholder and "> " lines are draft notes; both are highlighted
// on the page until replaced or removed.
export const privacy: DocPageData[] = [
  {
    slug: "privacy",
    group: "Legal",
    nav: "Privacy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    meta: [
      { label: "Effective date", value: "[INSERT THE DATE THIS POLICY FIRST TAKES EFFECT]" },
      { label: "Last updated", value: "[INSERT THE DATE OF THIS REVISION]" },
    ],
    description:
      "How Stackra collects, uses, stores, and shares personal information.",
    body: `
> This policy is tailored to Stackra's known product architecture, but source code alone cannot show which features, providers, settings, retention jobs and integrations are enabled in production. Verify the live deployment, provider contracts, data locations, retention rules, cookies and workflows, complete every highlighted field, and remove the draft notes before publishing. Do not publish a statement that is not true in production.

Your privacy matters. This Privacy Policy explains how the operator of Stackra collects, uses, stores, discloses and protects personal information when people visit our website, create an account, use merchant tools, browse a Stackra-powered storefront, submit a request or otherwise interact with our services.

We aim to collect only information that is reasonably necessary for defined purposes, explain how information is handled, protect it with appropriate safeguards and provide ways for people to exercise their privacy rights.

@cards
Make a privacy request | Access, correct, delete or restrict your information. | mailto:privacy@stackra.dev | privacy@stackra.dev
Cookie notice | What is stored in your browser, and why. | /cookies | Cookies
Subprocessors | The providers that help us run Stackra. | /subprocessors | Providers

## 1. Who we are and who this Policy covers

Stackra is a technology platform and brand operated by **[INSERT THE FULL VERIFIED LEGAL NAME OF THE PERSON OR LEGAL ENTITY OPERATING STACKRA]**, of **[INSERT THE VERIFIED BUSINESS OR REGISTERED ADDRESS, WHERE APPLICABLE]**, Nigeria ("Stackra", "we", "us" or "our"). Our general website is {stackra.dev|https://stackra.dev}.

For personal information that we collect for our own purposes — such as account administration, security, support, billing and operating our platform — the legal operator of Stackra acts as a data controller, where that is the role assigned under applicable data-protection law.

For some information submitted by a customer to a merchant through a Stackra-powered request or storefront workflow, the merchant may decide why the information is collected and how it is used, while Stackra processes that information to provide the platform. In those circumstances, the merchant may be the controller and Stackra may act as a processor on the merchant's documented instructions. The legal roles depend on the particular processing activity; they are not determined simply by the label used in this Policy. Where required, a separate Data Processing Agreement or other written terms will govern that processing relationship.

This Policy applies to the following Stackra services, to the extent operated by the same legal operator and covered by the relevant privacy notice:

- The public website at stackra.dev and its company, contact and information pages.
- The merchant application and account features made available through Stackra-controlled domains.
- Public merchant storefronts hosted through Stackra, including storefront pages on store.stackra.dev.
- The Stackra APIs and supporting services used to provide those features.
- Customer request, enquiry and order-intake features provided through Stackra storefronts.
- Communications with Stackra through email or other official support channels.

@details
Operator details for privacy requests
Legal operator: [INSERT VERIFIED LEGAL NAME]
Privacy contact: {privacy@stackra.dev|mailto:privacy@stackra.dev}
General contact: {hello@stackra.dev|mailto:hello@stackra.dev}
Website: {stackra.dev|https://stackra.dev}
Postal address: [INSERT VERIFIED ADDRESS IF APPROPRIATE AND AVAILABLE]

## 2. People whose information may be processed

Depending on the feature used, we may process information about:

- **Website visitors** who browse Stackra's public website.
- **Merchant account holders** who register for or manage a Stackra account.
- **Merchant staff or authorised users** who receive access to a merchant's business tools, where staff access is enabled.
- **Merchants and business representatives** who provide business, storefront or offering information.
- **Storefront visitors and customers** who browse a merchant's public storefront or submit an enquiry, request or order-related information.
- **Support correspondents and reporters** who contact Stackra, submit a complaint or report content.
- **Business contacts and prospective partners** who contact Stackra about a commercial relationship.

A merchant is responsible for providing appropriate privacy information to its own customers where the merchant collects or uses customer information for its own purposes. This Stackra Policy does not replace the merchant's own privacy notice.

## 3. Personal information we may collect

The information processed depends on the feature and the choices made by the person using it. We do not necessarily collect every category listed below from every person.

### 3.1 Account, identity and authentication information

When a person registers, signs in or manages an account, Stackra may process:

- Email address and account identifier.
- Name or profile information supplied during account setup, where collected.
- Password credential information in protected, hashed form for password-based accounts; we do not intend to store users' passwords as readable plain text.
- Authentication and verification records, including whether an email verification step was completed.
- Google identity information returned through Google sign-in, such as the email address and account identifier required to establish the Stackra account, where Google sign-in is used.
- Session, refresh-token and trusted-device information held through browser cookies or server-side records.
- Account security events, failed sign-in attempts and rate-limiting records.

We do not ask people to send passwords, one-time verification codes, private API keys or other authentication secrets to our support team.

### 3.2 Merchant and business information

A merchant may provide information about the business, including:

- Business or trading name and business category.
- Business description, tagline, logo, avatar and other branding materials.
- Email address, telephone number and WhatsApp contact number.
- Website and social-media links.
- Business address, city, state, country, business hours and time zone.
- Storefront name, public URL or slug, description, banner, logo and other store configuration.
- Delivery zones, shipping options, delivery estimates and related configuration.
- Return or other customer-facing policy text entered by the merchant.
- Store language, currency and search-engine metadata.
- Information about the account's status, plan or access arrangements.

Some information is entered by the merchant; other information may be generated by the platform to operate the account or storefront.

### 3.3 Products, services and other offerings

When merchants create or manage a catalogue, Stackra may process:

- Offering name, type, category, description and short description.
- Price, currency, price range, compare-at price and availability information.
- Product or service photographs, image descriptions and other uploaded media.
- Product identifiers such as SKU or barcode, where used.
- Stock, variant, size, colour or other option information, where used.
- Shipping or physical-product details, where relevant.
- Visibility, publishing and catalogue-management settings.
- Search-engine title, description and related catalogue metadata.

Merchants must not upload content or personal information they are not authorised to use or publish.

### 3.4 Customer, enquiry, request and order information

Where a customer uses an enabled Stackra storefront or request flow, information may include:

- Customer name.
- Telephone number or WhatsApp contact number.
- Email address, where the relevant request form collects it.
- Message, question, order note or other text submitted by the customer.
- Products, services, quantities, variants or other items included in an order or request.
- Requested date, delivery zone, budget range or other details supplied as part of a request.
- Order or request status, timestamps and merchant-side notes or workflow information.
- Technical identifiers needed to associate the submission with the relevant business, store, request or order.

The exact fields depend on the form and workflow presented to the customer. A merchant may separately collect further information through WhatsApp, telephone, a payment provider, delivery provider or another channel outside Stackra.

### 3.5 Images, voice notes and documents submitted with requests

If the relevant request feature is enabled, a customer may be able to attach images, a voice note or supported documents to explain what they need. The current implementation supports image, audio and document categories, including common image formats, voice formats, PDF and plain text, subject to file-type, duration and size limits shown by the product.

Attachments submitted through the customer request workflow are stored in a private storage bucket in the current implementation. Voice notes may be transcribed and the request text may be analysed by an AI provider when the relevant AI functionality is enabled. We retain the original request text as submitted separately from any structured information generated from it, according to the product's current design.

Do not send highly sensitive personal information, payment-card credentials, passwords, identity documents or unrelated private records through a request form unless the feature expressly asks for that information and you have a lawful reason to provide it.

### 3.6 Technical, device and usage information

When a person visits or uses an online service, technical information may be processed to deliver the service, protect accounts, troubleshoot errors and understand service usage. Depending on the live configuration, this may include:

- IP address and network-related information made available to the service.
- Browser, operating system, device type and language information.
- Request timestamps, route or page requested, response status and diagnostic logs.
- Authentication, session, security and rate-limiting events.
- Storefront views and interaction events, such as a recorded storefront visit or source/referral value.
- Aggregated merchant analytics such as storefront views, product interactions, cart additions or order-related counts, where those features are enabled.
- Error reports and performance information needed to investigate faults.

We do not intend to use these records to identify a person beyond what is necessary for the stated purposes, and we will not describe analytics as anonymous unless the relevant data is actually anonymised.

### 3.7 Communications, support and reports

If you contact Stackra, we may process your email address, name, account or storefront details, message content, attachments you choose to send and records of our response. If you submit an abuse, safety, fraud, intellectual-property or privacy report, we may process the content and evidence you provide to assess and respond to the report.

### 3.8 Payment and billing information

Stackra may process records needed to administer its own paid plans, such as the plan selected, price, payment confirmation, transaction reference, invoice or receipt details and payment status. Order-total and payment-status fields in the application do not mean that Stackra operates a payment gateway or holds merchant funds.

Unless a specific Stackra payment feature and its separate terms expressly state otherwise, Stackra does not request or store full payment-card details, online banking passwords or payment PINs, and does not act as a bank, wallet, escrow provider or merchant of record for a merchant's independent sales. When a merchant and customer arrange payment directly or through an external provider, that arrangement is subject to the relevant merchant and provider terms.

## 4. Where information comes from

We may obtain information:

- Directly from you when you register, sign in, complete a form, create a storefront, upload content, submit a request or contact us.
- From the merchant whose storefront or request you interact with, where the merchant submits or manages information in the platform.
- Automatically from your browser or device when you visit or use the service, subject to applicable settings and law.
- From authentication providers, such as Google, when you choose an external sign-in method.
- From infrastructure, email, security or other service providers that help us operate Stackra.
- From a reporter or another person who submits information relevant to a complaint or investigation.

## 5. Why we use personal information and our lawful grounds

We use personal information only where we have an appropriate purpose and lawful ground under applicable law. Depending on the processing activity and the circumstances, the relevant ground may include performance of a contract, steps requested before entering into a contract, compliance with a legal obligation, consent, or a legitimate interest that does not override the person's rights and freedoms.

| Purpose | Examples of information used | Possible lawful ground — confirm for the actual activity |
|---|---|---|
| Create and administer accounts | Email, account ID, authentication records | Contract or pre-contract steps; legitimate interests in account administration and security |
| Authenticate and protect sign-in | Password credential, verification events, session records, IP/security events | Contract; legitimate interests in account security; legal obligation where applicable |
| Provide merchant tools and storefronts | Business profile, store details, catalogue, images and settings | Contract; merchant instructions where Stackra acts as processor |
| Receive and organise customer requests or orders | Customer details, messages, requested items, order information and attachments | Merchant's lawful basis and instructions where it controls the activity; Stackra's contract with the merchant; other lawful ground where independently applicable |
| Provide support and investigate reports | Contact details, support message, report evidence and logs | Contract; legitimate interests; legal obligation where applicable |
| Operate analytics and improve reliability | Usage events, performance and error information | Legitimate interests or consent where required, depending on the actual technology and data |
| Administer Stackra plans and payments | Plan selection, invoice and transaction references | Contract and legal obligations |
| Meet legal requirements and resolve disputes | Relevant account, transaction, communication and security records | Legal obligation and legitimate interests in establishing or defending legal claims |
| Send marketing messages | Contact details and preferences | Consent or another lawful basis permitted by applicable law; opt-out respected |

We will not rely on a lawful ground merely because it appears in this table.

> The operator must maintain an internal record connecting each real processing purpose to its actual lawful ground, data category, recipient and retention rule.

## 6. AI-assisted request processing

Where the relevant AI functionality is enabled, Stackra may use an AI service provider to help process a customer request. Stackra currently uses OpenAI services for voice transcription and structured request understanding. Depending on the submitted request, this may involve sending the customer's message and, where applicable, a voice recording or its content to the configured AI provider to:

- Convert a voice note into text.
- Produce a short summary of a request.
- Identify possible requested items and quantities.
- Extract information such as a stated budget range or requested date.
- Suggest a possible category or urgency level.

These outputs are generated to assist the merchant in understanding and organising the request. They should not be treated as a guarantee that the extracted information is correct, and they do not by themselves constitute acceptance of an order, a binding quotation, a payment decision or a decision to deny a person service. The merchant should review the original request and any AI-generated information before acting on it.

We aim to send only the information reasonably needed for the enabled AI task. The use of an AI provider may involve processing outside Nigeria. Where an AI feature is not enabled or available, the corresponding processing does not take place.

> Before enabling AI features for live personal information, verify the provider's current terms, applicable data-processing terms, retention settings, processing locations and transfer safeguards.

## 7. Public storefronts and private information

A merchant chooses what business and offering information to publish on a public storefront. Information deliberately published to a public storefront — for example, business name, logo, product or service descriptions, images, prices, public contact details and store location information — may be viewed, copied, indexed, shared or cached by people and services outside Stackra.

Do not place private customer details, private account credentials or confidential information in a public business description, product listing, image or storefront field.

Customer request attachments and other information designated private are not intended to be displayed as public storefront content. The current implementation stores request attachments in private object storage and can issue time-limited signed access links to authorised workflows. Public product or storefront media may use public URLs so that the published storefront can display them.

> Keep verifying that each asset category is assigned the correct public or private access setting.

Unpublishing or deleting content from a Stackra page may not remove copies already downloaded, indexed, cached or shared by third parties. Data may also remain in backups or records where retention is lawful and necessary.

## 8. How we share personal information

We do not sell personal information as a data-broker product. We may disclose or make information available to the following categories of recipients when necessary for the purposes described in this Policy:

### 8.1 Service providers and subprocessors

Stackra may use the following services or integrations to provide the platform. Which of them apply depends on the features enabled for a given account or storefront.

> Confirm which services are enabled in production, the legal provider entities, the data each receives, the applicable contract, and the country or countries in which each processes or stores information.

| Provider or service | Role | What may be processed |
|---|---|---|
| Supabase | Database, authentication-related services and object storage | Account/authentication data, merchant/store/catalogue records, customer requests and stored files, depending on the feature |
| Vercel | Hosting and deployment infrastructure for relevant Stackra web services | Website and application requests, technical logs and data passing through hosted services |
| Resend | Email delivery for configured transactional or security messages; Supabase email delivery may use SMTP configured through Resend | Recipient email address and message content required to deliver the email |
| Google | External sign-in where a user chooses Google authentication | Information returned by Google to authenticate or associate an account |
| OpenAI | AI voice transcription and request understanding when those features are enabled | Voice audio, request text and/or transcript needed for the AI task |
| Upstash Redis | Cache service where configured | Cached storefront response data and cache keys |
| WhatsApp / Meta | Independent communication service when a user chooses a WhatsApp hand-off or opens a WhatsApp link | Information the user or merchant sends to WhatsApp; WhatsApp applies its own policies |

This table does not mean that every listed service receives every category of personal information.

> Keep this table identical to the current production provider list and to the Subprocessors page.

### 8.2 Merchants

When a customer submits information through a merchant's Stackra storefront or request flow, the information may be made available to that merchant so the merchant can respond, provide a quotation, process an order or fulfil a service. The merchant may then process the information under its own privacy notice and legal responsibilities.

### 8.3 Legal, regulatory and safety disclosures

We may disclose information where required by applicable law, a valid legal process or a competent authority, or where disclosure is reasonably necessary to protect a person's safety, investigate suspected fraud or unlawful activity, enforce our agreements or establish, exercise or defend legal claims. We will assess the request and disclose only what is legally required or otherwise permitted.

### 8.4 Business transfers

If the Stackra business or relevant assets are reorganised, merged, acquired or transferred, relevant information may be transferred as part of that transaction subject to applicable law, confidentiality protections and any required notice or consent.

## 9. International processing and transfers

Some providers may process or store information in countries outside Nigeria or the country where a person is located. The exact countries depend on the provider's service, configuration, data-centre region, support arrangements and subprocessor chain.

Before making a transfer of personal information outside Nigeria, we must identify the relevant destination and recipient, determine the applicable legal transfer condition under the Nigeria Data Protection Act and applicable NDPC guidance, and implement required safeguards. We do not promise that all Stackra data is stored in Nigeria or that a provider uses a particular country unless that has been verified.

For a privacy question about an international transfer, contact {privacy@stackra.dev|mailto:privacy@stackra.dev}.

## 10. Cookies, browser storage and similar technologies

Stackra may use cookies or similar browser storage to keep a person signed in, protect sessions, remember a device after an authentication challenge, maintain security and support the operation of the website or application.

Stackra's merchant application currently uses authentication cookies named stackra_access, stackra_refresh and stackra_device. Their nominal lifetimes are 15 minutes for the access cookie, 7 days for the refresh cookie and 90 days for the trusted-device cookie. Whether each cookie is set for a particular user depends on the authentication flow and the live configuration. These cookies are used for authentication/session or security purposes, not as a claim that Stackra uses advertising trackers. The {Cookie notice|/cookies} lists the cookies and browser storage in more detail.

If non-essential analytics or advertising technologies are used, we will explain them and provide consent controls that comply with applicable law.

> Scan the live website and application for all cookies, local storage, third-party scripts, analytics, pixels and embedded tools before publishing this section. Do not treat it as a complete cookie inventory until that scan has been done.

## 11. How long we keep information

We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, subject to applicable legal obligations, dispute-resolution needs, security requirements and legitimate record-keeping. Exact retention periods must be set in an internal retention schedule and reflected here once verified.

| Information category | Retention approach that must be finalised |
|---|---|
| Account and authentication records | While the account is active and for a defined period afterwards for security, dispute and legal purposes |
| Merchant and storefront information | While the merchant uses the service and for a defined period after closure or expiry; public content should be unpublished according to the product's lifecycle rules |
| Catalogue and media files | While the merchant uses the relevant feature; deletion and backup expiry rules must be documented |
| Customer requests, enquiries and order records | For the merchant's service needs and applicable commercial/legal record-keeping; define Stackra's role and retention trigger |
| Private images, voice notes and documents | For the request-processing and merchant-support period, then deletion or anonymisation under a defined schedule unless a lawful hold applies |
| AI transcripts and extracted request information | For the same or a shorter period than the related request, subject to the merchant's instructions and lawful retention needs |
| Support messages and reports | For the period needed to resolve the matter and maintain appropriate complaint, security or legal records |
| Security and technical logs | For a defined period proportionate to security, investigation and reliability needs |
| Billing and transaction references | For the period required by applicable tax, accounting, financial and dispute requirements |
| Backups | Under a documented backup rotation and deletion schedule; deletion from active systems may not immediately remove data from backups |

If we no longer need information and no legal basis justifies continued retention, we will take reasonable steps to delete it, anonymise it or otherwise remove its identifying content.

## 12. Security and confidentiality

We use or intend to use appropriate technical and organisational measures to protect personal information against unauthorised access, loss, alteration, disclosure or destruction. Measures in the current architecture include server-side handling of privileged storage credentials, authentication and session controls, hashed password credentials, rate limiting for certain authentication actions, server-side validation of uploads, separation of public media from private request attachments, business-scoped access checks and private signed access links for certain stored attachments.

We also aim to maintain additional measures appropriate to the risk, such as least-privilege staff access, secure secrets management, backups, monitoring, vulnerability management, staff confidentiality and incident response. We do not claim a security certification, independent audit, end-to-end encryption, guaranteed restoration or continuous monitoring unless it has been independently verified and is actually provided.

> Verify that these controls are enabled and effective in the live environment.

No website, storage system or transmission method can be guaranteed to be completely secure. Users should protect their accounts, use strong unique passwords, keep devices secure and contact us promptly if they suspect unauthorised access.

## 13. Personal data incidents

If we become aware of a suspected personal data breach, we will assess and contain the incident, preserve relevant records, investigate what information and people may be affected, take appropriate mitigation measures and make notifications required by applicable law. Where Stackra acts as a processor, we will notify the relevant merchant/controller without undue delay in accordance with the applicable agreement and legal requirements so that the controller can assess its own notification obligations.

Where the Nigeria Data Protection Act requires a controller to notify the NDPC within 72 hours of becoming aware of a breach likely to create a risk to individuals' rights and freedoms, we will follow that requirement. Where the law requires direct notification to affected individuals, we will provide it in the required manner. This public statement does not replace our internal breach-response procedure.

## 14. Your privacy rights

Subject to the Nigeria Data Protection Act and other applicable law, a person may have rights to:

- Be informed about how personal information is processed.
- Request access to personal information held about them.
- Request correction of inaccurate or incomplete information.
- Request deletion where the legal conditions for erasure are met.
- Request restriction of processing in qualifying circumstances.
- Object to certain processing, including processing based on legitimate interests or direct marketing where applicable.
- Request a portable copy of information where the right applies.
- Withdraw consent where processing is based on consent; withdrawal does not make earlier lawful processing unlawful.
- Challenge decisions made solely by automated processing where applicable law provides that right.
- Lodge a complaint with the Nigeria Data Protection Commission (NDPC).

These rights are subject to legal conditions, exemptions and the rights of other people. A merchant may be the appropriate party to respond to a request concerning customer information that the merchant controls. Where Stackra acts as a processor, we may refer the request to the merchant or assist the merchant in responding under the applicable agreement.

### How to submit a request

Send your request to **{privacy@stackra.dev|mailto:privacy@stackra.dev}** with the subject line **Privacy Request**. Include enough detail for us to understand the request and identify the relevant account, store or interaction. Do not send passwords, one-time codes or unnecessary sensitive documents.

We may ask for proportionate identity or authority verification before disclosing or changing personal information. We will respond within the period required by applicable law and explain any lawful reason we cannot fulfil all or part of a request. We will not charge a fee except where permitted by applicable law.

You may also contact the Nigeria Data Protection Commission through its official website: {ndpc.gov.ng|https://ndpc.gov.ng/}.

## 15. Children's information

The Stackra merchant account service is intended for people who have legal capacity to enter into the relevant agreement and operate a business account. [THE OPERATOR MUST CONFIRM THE MINIMUM AGE AND ANY SPECIAL RULES FOR MINORS BEFORE PUBLICATION.] We do not knowingly seek to collect personal information from children in breach of applicable law. If you believe a child has provided personal information to Stackra without appropriate authorisation, contact {privacy@stackra.dev|mailto:privacy@stackra.dev} so we can assess the issue and take appropriate action.

A public storefront may be accessible to people of different ages. The fact that a storefront is publicly accessible does not mean a child is authorised to create a merchant account or submit information that the merchant does not need.

## 16. Third-party websites and services

A Stackra page or merchant storefront may contain links to third-party websites, social-media platforms, payment services, delivery services or communication tools such as WhatsApp. Those services are operated independently and have their own terms, privacy notices, security arrangements and data practices. This Policy does not govern the independent processing carried out by those third parties. Review their privacy information before providing them with personal information.

## 17. Marketing communications

We may send service-related messages needed to operate accounts, verify sign-in, respond to support requests, communicate important service changes or provide information about a plan a person has requested. Where we send marketing communications, we will do so only on a lawful basis and provide a practical way to opt out. Opting out of marketing will not stop essential account, security, transaction or legal notices.

## 18. Changes to this Policy

We may update this Policy when our services, data practices, providers or legal obligations change. The current version will be published on the relevant Stackra website with a revised "Last updated" date. Where a change is material or the law requires it, we will provide an appropriate notice through the website, dashboard, email or another suitable channel. We will not backdate a Policy revision.

## 19. Contact us

For privacy questions or requests, contact:

@details
Stackra Privacy Team
Legal operator: [INSERT VERIFIED LEGAL NAME]
Privacy email: {privacy@stackra.dev|mailto:privacy@stackra.dev}
General email: {hello@stackra.dev|mailto:hello@stackra.dev}
Website: {stackra.dev|https://stackra.dev}
Business/postal address: [INSERT VERIFIED ADDRESS, WHERE APPROPRIATE]

If you believe your data-protection rights have been infringed, you may also lodge a complaint with the Nigeria Data Protection Commission through {ndpc.gov.ng|https://ndpc.gov.ng/}.

## Related documents

@cards
Terms of Service | The agreement that governs your use of Stackra. | /terms | Legal
Acceptable Use Policy | The rules for using Stackra. | /acceptable-use | Legal
`,
  },
];
