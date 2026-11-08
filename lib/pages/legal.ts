import type { DocPageData } from "./types";

// Source: Stackra Legal and Trust Pack, fused with the earlier page copy.
// [Bracketed text] is a placeholder and "> " lines are draft notes; both are highlighted
// on the page until replaced or removed.
export const legal: DocPageData[] = [
  {
    slug: "legal",
    group: "Legal",
    nav: "Overview",
    eyebrow: "Legal",
    title: "Legal and trust",
    lead: "The documents behind how Stackra works, what we expect from merchants, and how we handle personal information.",
    description:
      "Stackra's terms, privacy policy, acceptable use policy, cookie notice, subprocessors and templates for merchants.",
    body: `
Stackra is a technology platform for merchants. These documents explain how it works, what we expect from the businesses that use it, and how personal information is handled.

## Core documents

@cards
Terms of Service | The agreement that governs your use of Stackra's website, merchant tools and storefronts. | /terms | Agreement
Privacy Policy | How Stackra collects, uses, stores, shares and protects personal information. | /privacy | Policy
Acceptable Use Policy | The rules for what merchants and users may and may not do on Stackra. | /acceptable-use | Policy
Cookie notice | Cookies and browser storage used by the website and the merchant app. | /cookies | Notice

## Data protection

@cards
Subprocessors | The service providers that help Stackra host, secure and deliver the platform. | /subprocessors | Providers
Data Processing Agreement | For merchants whose customers' personal data Stackra processes on their instructions. | /dpa | Separate agreement

## Templates for merchants

Merchants run their own storefronts, so they publish their own customer-facing notices. These templates are a starting point, not Stackra's policies.

@cards
Merchant privacy notice | A template privacy notice for a merchant's storefront. | /merchant-privacy-notice | Template
Order, payment and delivery policy | A template for a merchant's orders, payment, delivery and returns terms. | /merchant-order-policy | Template
Storefront disclosure checklist | What to review before publishing a storefront. | /storefront-checklist | Checklist

## Questions about these documents

@details
Privacy requests: {privacy@stackra.dev|mailto:privacy@stackra.dev}
Reports and legal concerns: {reports@stackra.dev|mailto:reports@stackra.dev}
General enquiries: {hello@stackra.dev|mailto:hello@stackra.dev}

@callout
Legal-entity details, effective dates and some provider information are still being finalised. Highlighted fields on these pages show what is not yet confirmed. Company details are on the {About|/about} page.
`,
  },
  {
    slug: "acceptable-use",
    group: "Legal",
    nav: "Acceptable use",
    eyebrow: "Legal",
    title: "Acceptable Use Policy",
    meta: [
      { label: "Effective date", value: "[INSERT PUBLICATION DATE]" },
      { label: "Last updated", value: "[INSERT REVISION DATE]" },
    ],
    description:
      "The rules that apply when merchants and users access or use Stackra.",
    body: `
This Acceptable Use Policy explains the rules that apply when Merchants, account users and other authorised users access or use Stackra. It supplements the Stackra Terms of Service. If this Policy conflicts with a mandatory legal requirement, the law prevails. If a specific written agreement expressly provides a different rule for a particular Service, that agreement applies to the extent of the conflict.

## 1. Use Stackra lawfully

You may use Stackra only for lawful business and communication activities. You must comply with laws and regulations that apply to your Business, Content, products, services, advertising, customer interactions, personal-data processing and transactions.

You must not use Stackra to create, promote, sell, distribute or facilitate:

- Products or services that are illegal to sell, unsafe, stolen, counterfeit or unlawfully restricted.
- Fraudulent investment, financial, employment, giveaway or other schemes.
- Goods or services that infringe another person's intellectual-property rights.
- Misleading or deceptive offers, fake discounts, fabricated reviews or impersonation.
- Content involving exploitation, trafficking, abuse or other unlawful harm.
- Unauthorised access to personal information, accounts or computer systems.
- Content or activity prohibited by applicable Nigerian law or another law that applies to the relevant transaction.

## 2. Accurate business and product information

You must ensure that your storefront accurately identifies your Business and describes what you offer. You must not misrepresent your identity, qualifications, authority, stock, product condition, delivery capability, price, availability, return terms or customer outcomes.

You must clearly disclose the total price and any material delivery, service or additional charge before a Customer commits to a purchase, as required by applicable law. You must not use a product photograph or description that materially misrepresents the item or service supplied.

## 3. Respect intellectual property and privacy

You may upload only Content that you own or are authorised to use. You must not upload another person's photograph, logo, text, video, design, personal information or confidential material without the necessary rights or lawful basis.

You must not publish private Customer details, passwords, identification numbers, payment credentials, private messages or sensitive information in a public Storefront or offering listing.

## 4. Customer information and marketing

You must use Customer information only for lawful, fair and disclosed purposes. You must not sell, rent, disclose or reuse Customer information for unrelated marketing merely because the Customer submitted an enquiry or placed an order.

You must provide any privacy notice required for your Business, obtain consent where required, honour opt-outs and respond to lawful privacy requests. You must take reasonable steps to restrict staff access to customer information and protect records you download from Stackra.

## 5. Account and security rules

You must not:

- Access another merchant's account or Business data without authority.
- Share passwords or verification codes in a way that compromises account security.
- Circumvent access controls, plan restrictions, rate limits or security checks.
- Probe, scan or test a Stackra system without written permission.
- Upload malware, ransomware, malicious scripts or harmful files.
- Interfere with the availability or integrity of the Services.
- Scrape or harvest personal data through unauthorised automation.

Report suspected security vulnerabilities or incidents to {reports@stackra.dev|mailto:reports@stackra.dev}. Do not exploit a vulnerability, access another person's data or publicly disclose a security issue before giving Stackra a reasonable opportunity to investigate, unless disclosure is required by law.

## 6. Prohibited platform manipulation

You must not artificially generate storefront views, enquiries, orders, ratings or other metrics; manipulate analytics; impersonate Customers; submit false reports; interfere with other Merchants; or use bots to degrade or misuse the Services.

## 7. Reports and enforcement

You may report a suspected violation to {reports@stackra.dev|mailto:reports@stackra.dev}. Include the relevant URL, a description of the issue and information you are authorised to share.

Stackra may assess a report, request further information, contact the relevant Merchant, preserve relevant records, remove or restrict Content, suspend access or take another proportionate action. We may act without advance notice where necessary to address an urgent safety, security, legal or privacy risk. Where reasonably practicable, we will explain a material restriction and provide a way to request review.

A report is not proof that a violation occurred. Stackra will assess the available information and applicable law before taking action where circumstances permit.

## 8. Contact

@details
Questions about this Policy: {hello@stackra.dev|mailto:hello@stackra.dev}
Reports: {reports@stackra.dev|mailto:reports@stackra.dev}
Privacy issues: {privacy@stackra.dev|mailto:privacy@stackra.dev}

## Related documents

@cards
Terms of Service | The agreement this policy supplements. | /terms | Legal
Report a problem | Report a storefront or content you believe breaks these rules. | mailto:reports@stackra.dev | reports@stackra.dev
`,
  },
  {
    slug: "cookies",
    group: "Legal",
    nav: "Cookies",
    eyebrow: "Legal",
    title: "Cookie and Browser Storage Notice",
    meta: [
      { label: "Effective date", value: "[INSERT DATE]" },
      { label: "Last updated", value: "[INSERT DATE]" },
    ],
    description:
      "The cookies and browser storage used by Stackra's website and merchant application.",
    body: `
This Notice explains how Stackra may use cookies and similar technologies on its website and merchant application. A cookie is a small text file placed in a browser. Similar technologies may include local storage, session storage or other identifiers used by a website or application.

## 1. Why Stackra uses cookies

Stackra may use cookies or similar technologies to:

- Keep a person signed in and maintain an authenticated session.
- Support session renewal and account security.
- Remember a browser after a successful email verification step where the trusted-device feature is enabled.
- Protect the Services against abuse and maintain reliable operation.
- Remember a preference where a feature requires it.
- Measure service usage or support analytics only where those technologies are actually deployed and legally permitted.

## 2. This website (stackra.dev)

The public website sets no cookies of its own. It stores one item in your browser's local storage, and your browser contacts a few outside services to load fonts and partner logos. The website code contains no analytics, advertising or tracking scripts.

| Item | Type | Purpose | Duration |
|---|---|---|---|
| stackra-theme | Local storage (first-party) | Remembers whether you chose the light or dark display | Until you clear your browser storage |
| Satoshi typeface (Fontshare) | Third-party request | Loads the font used across the site; Fontshare receives a standard request from your browser | Per page load |
| Partner logos (upload.wikimedia.org, binghamuni.edu.ng, nsuk.edu.ng) | Third-party requests | Show university partner logos on the home page; those hosts receive a standard request from your browser | Per page load |

Standard requests include information such as your IP address, browser type and the page that requested the file. Those services apply their own privacy practices.

> This table reflects the website code. Confirm it against a scan of the live site (network requests and browser storage) before publishing.

## 3. Cookies in the merchant application

The merchant application's authentication uses the following cookie names and nominal lifetimes.

> Confirm on the live domains that these cookies are issued and under which settings. Cookie attributes (HttpOnly, Secure, SameSite, domain, path) depend on the request and production environment.

| Cookie | Purpose | Nominal lifetime | Type |
|---|---|---|---|
| stackra_access | Holds the access session token used for authenticated requests | 15 minutes | Essential authentication cookie |
| stackra_refresh | Supports renewal of the authenticated session | 7 days | Essential authentication cookie |
| stackra_device | Remembers a browser after an email verification step, where enabled | 90 days | Security / trusted-device cookie |

These are described as essential to authentication or account security, not advertising cookies. Cookie attributes such as HttpOnly, Secure, SameSite, domain and path are set by the application according to the request and production environment.

## 4. Analytics and third-party technologies

If Stackra uses any non-essential analytics, advertising or tracking technologies, this Notice will list them, explain their purpose and provide the consent or preference controls required by applicable law.

> Before publishing, scan the public website, merchant application and storefronts for analytics scripts, pixels, embedded services, local-storage keys and third-party cookies, and list anything non-essential here.

Recording storefront views or aggregating merchant analytics on our servers does not mean Stackra places an advertising tracker in your browser. Server-side application events and browser cookies are different technologies.

## 5. Managing cookies

You can usually configure your browser to block or delete cookies. Blocking essential authentication cookies may prevent sign-in, session renewal or other account features from functioning correctly. Where Stackra provides a cookie-preference tool, you may use it to update choices for non-essential technologies.

## 6. Changes and contact

We may update this Notice when cookie or browser-storage practices change. The revised date will appear above.

@details
Questions: {privacy@stackra.dev|mailto:privacy@stackra.dev}
Website: {stackra.dev|https://stackra.dev}

## Related documents

@cards
Privacy Policy | How Stackra handles personal information. | /privacy | Legal
Subprocessors | The providers that help us run Stackra. | /subprocessors | Providers
`,
  },
  {
    slug: "subprocessors",
    group: "Legal",
    nav: "Subprocessors",
    eyebrow: "Legal",
    title: "Stackra Subprocessors",
    meta: [
      { label: "Last reviewed", value: "[DATE]" },
    ],
    description:
      "The service providers that help Stackra host, secure and deliver its platform.",
    body: `
Stackra uses selected service providers to host, secure and deliver parts of its platform. Some providers may process personal information on Stackra's behalf. The providers and their roles depend on the features a Merchant or visitor uses and the configuration of the Services.

This page is a current list of the providers that process personal data for Stackra. For each provider it identifies the legal entity, service, processing purpose, relevant data categories, location or transfer information and the date of the latest review.

> Publish this page only after the list has been verified against production and provider contracts. Replace every highlighted field; remove any provider that is not actually used.

| Provider | Service | Processing purpose | Data categories | Location / transfer information | Last verified |
|---|---|---|---|---|---|
| [SUPABASE LEGAL ENTITY] | Database, auth and file storage | Operate Stackra account, storefront, request and media features | [VERIFY] | [VERIFY REGION AND TRANSFER SAFEGUARDS] | [DATE] |
| [VERCEL LEGAL ENTITY] | Hosting and deployment | Host Stackra website/application and process requests | [VERIFY] | [VERIFY] | [DATE] |
| [RESEND LEGAL ENTITY] | Email delivery | Deliver transactional/security email | [VERIFY] | [VERIFY] | [DATE] |
| [GOOGLE LEGAL ENTITY] | Google sign-in | Authentication when selected by a user | [VERIFY] | [VERIFY] | [DATE] |
| [OPENAI LEGAL ENTITY] | AI transcription and request understanding | AI processing for enabled request features | [VERIFY] | [VERIFY] | [DATE] |
| [UPSTASH LEGAL ENTITY] | Redis cache, if enabled | Cache data to support service performance | [VERIFY] | [VERIFY] | [DATE] |

For questions about this list or a data-protection request, contact {privacy@stackra.dev|mailto:privacy@stackra.dev}.

## Related documents

@cards
Privacy Policy | How Stackra handles personal information. | /privacy | Legal
Data Processing Agreement | For merchants whose customers' data Stackra processes. | /dpa | Separate agreement
`,
  },
  {
    slug: "dpa",
    group: "Legal",
    nav: "DPA",
    eyebrow: "Legal",
    tag: "Separate agreement",
    title: "Data Processing Agreement",
    meta: [
      { label: "DPA effective date", value: "[INSERT DATE]" },
      { label: "Stackra legal operator", value: "[INSERT FULL VERIFIED LEGAL NAME AND ADDRESS]" },
    ],
    description:
      "The agreement that governs Stackra's processing of personal data on a merchant's behalf.",
    body: `
@callout
This is a separate agreement provided to eligible merchants, signed or accepted electronically where appropriate. It is not Stackra's public Privacy Policy.

This Data Processing Agreement (**"DPA"**) forms part of the agreement between:

**(1) The Merchant / Customer:** [INSERT FULL LEGAL NAME, ADDRESS AND CONTACT DETAILS] (**"Controller"**); and

**(2) The Stackra operator:** [INSERT FULL VERIFIED LEGAL NAME, ADDRESS AND CONTACT DETAILS] (**"Processor"**), operating the Stackra platform.

The parties agree that this DPA applies only to processing of Personal Data by Stackra on the Merchant's behalf and on the Merchant's documented instructions in connection with the Services. It does not automatically apply to processing for which Stackra independently determines the purposes and means, such as Stackra's own account security, support administration, billing and legal compliance. For those activities, Stackra may act as an independent controller under its Privacy Policy.

## 1. Definitions

In this DPA:

- **Data Protection Law** means the Nigeria Data Protection Act 2023, applicable regulations, directives and guidance issued by the Nigeria Data Protection Commission, and any other data-protection law applicable to the relevant processing.
- **Personal Data** means information relating to an identified or identifiable natural person.
- **Processing** has the meaning given under applicable Data Protection Law.
- **Data Subject** means the natural person to whom Personal Data relates.
- **Subprocessor** means another processor engaged by Stackra to process Personal Data on behalf of the Controller in connection with the Services.
- **Personal Data Breach** means a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Personal Data.
- **Documented Instructions** means the Controller's instructions contained in the main Services agreement, this DPA, Merchant settings, documented support requests or other written instructions accepted by Stackra.

## 2. Roles of the parties

2.1 The Controller determines the purposes and means of processing the Personal Data submitted by it or on its behalf to the Services, except where applicable law determines otherwise.

2.2 The Processor processes that Personal Data on behalf of the Controller to provide, secure and support the Services and in accordance with this DPA and the Controller's Documented Instructions.

2.3 Each party is independently responsible for complying with the obligations that apply to it under Data Protection Law.

2.4 The parties acknowledge that the role allocation may differ for different processing activities. This DPA does not make Stackra a processor for its own controller activities, and it does not make the Merchant a controller for information Stackra independently collects for its own purposes.

## 3. Subject matter, duration, nature and purpose

3.1 The subject matter is the processing of Personal Data through the Stackra merchant tools, storefronts, customer request and order-intake workflows, attachments, communications and related Services used by the Controller.

3.2 Processing continues for the duration of the relevant Services and any subsequent period during which Stackra is required or permitted to retain or delete the relevant Personal Data under this DPA, the main agreement or applicable law.

3.3 The nature of processing may include collection, recording, organisation, storage, retrieval, consultation, use, structuring, disclosure to the Controller, transmission to authorised Subprocessors, restriction, deletion and other operations necessary to provide the Services.

3.4 The purposes may include:

- Hosting and displaying the Controller's Storefront and catalogue.
- Receiving and organising Customer enquiries, Requests and order-related information.
- Storing and displaying the Controller's business and offering information.
- Processing attachments submitted through an enabled Request workflow.
- Providing merchant access, support, reliability and security.
- Performing AI-assisted voice transcription or request organisation where the feature is enabled and the Controller has chosen to use it.
- Providing export, retention, deletion and other functions agreed for the Services.

## 4. Categories of Data Subjects and Personal Data

Depending on the Controller's use of the Services, Data Subjects may include the Controller's Customers, prospective Customers, contacts, representatives, staff and other individuals whose information the Controller submits or makes available.

Personal Data may include:

- Customer name, telephone number, WhatsApp contact number and email address.
- Customer messages, enquiries, request details, notes, requested dates and budgets.
- Product, service, quantity, variant and order information linked to a Customer.
- Images, voice recordings, documents, voice transcripts and text submitted with a Request.
- Merchant-provided customer records such as name, phone, email and notes.
- Technical identifiers needed to connect a record to a Business, Storefront, Request or Order.
- Other Personal Data the Controller intentionally submits through the Services, provided it is lawful and necessary to do so.

The Controller must not submit special-category or highly sensitive Personal Data unless the relevant Service has been approved for that processing, the parties have documented the requirements, and the Controller has established a lawful basis and appropriate safeguards.

## 5. Controller obligations

The Controller must:

5.1 Establish and document a lawful basis for collecting and instructing Stackra to process Personal Data.

5.2 Provide Data Subjects with the information required by Data Protection Law, including the Controller's identity, purposes, lawful basis, recipients, retention and rights information.

5.3 Ensure that Personal Data is accurate, relevant, proportionate and limited to what is necessary for the relevant purpose.

5.4 Obtain consent where required and retain evidence of consent where appropriate.

5.5 Ensure that any instruction to Stackra is lawful and does not require Stackra to breach Data Protection Law.

5.6 Respond to Data Subject requests and complaints for which the Controller is responsible, with reasonable assistance from Stackra under this DPA.

5.7 Determine the appropriate retention period for the Controller's customer information and configure or request deletion where the Services allow.

5.8 Use appropriate access controls and ensure that only authorised staff can view Customer Personal Data.

5.9 Not use Personal Data obtained through Stackra for unrelated marketing or disclosure without a lawful basis and any required consent.

5.10 Promptly notify Stackra if the Controller becomes aware of a security incident involving Personal Data processed through the Services, where that information is relevant to Stackra's response.

## 6. Processor obligations

Stackra will:

6.1 Process Personal Data only on Documented Instructions, unless applicable law requires otherwise. If law requires processing beyond the instructions, Stackra will inform the Controller before processing unless the law prohibits such notice.

6.2 Ensure that persons authorised to process Personal Data are subject to appropriate confidentiality obligations.

6.3 Implement appropriate technical and organisational measures to protect Personal Data, taking account of the nature, scope, context, purpose and risks of processing.

6.4 Provide reasonable assistance, taking account of the nature of the processing and information available to Stackra, to help the Controller respond to Data Subject rights requests.

6.5 Provide reasonable assistance with security obligations, breach assessment, impact assessments and prior consultation where required by Data Protection Law and relevant to the processing Stackra performs.

6.6 Make available information reasonably necessary to demonstrate compliance with this DPA, subject to confidentiality, security, protection of other customers' information and reasonable limits on audit requests.

6.7 Notify the Controller if, in Stackra's reasonable opinion, an instruction infringes Data Protection Law. Stackra may suspend the relevant instruction while the parties resolve the issue where necessary to comply with law or protect Data Subjects.

6.8 Not sell Controller Personal Data or use it for unrelated advertising or independent product marketing.

## 7. Security measures

Stackra will maintain security measures appropriate to the risks of the processing. Depending on the Service and live configuration, measures may include:

- Server-side handling of privileged credentials and access keys.
- Authentication and session-management controls.
- Password hashing for password-based accounts.
- Rate limiting and controls designed to reduce automated credential attacks.
- Server-side validation of files and upload metadata.
- Separation of public Storefront media from private Customer Request attachments.
- Access controls and business-scoped checks intended to prevent one Merchant from accessing another Merchant's records.
- Private object storage and time-limited signed URLs for designated private attachments.
- Backup, monitoring, logging and incident-response measures appropriate to the live system.
- Confidentiality obligations for authorised personnel.

The parties acknowledge that security measures may evolve as the platform develops. Stackra will not claim a certification, audit or security control that has not been achieved or implemented. The detailed technical and organisational measures actually maintained by Stackra must be documented in Schedule 2 and reviewed periodically.

## 8. Subprocessors

8.1 The Controller authorises Stackra to use the Subprocessors listed in Schedule 1, subject to the verification and update process in this clause.

8.2 Stackra will impose data-protection obligations on each Subprocessor that are materially consistent with the obligations applicable to Stackra under this DPA, to the extent required by Data Protection Law.

8.3 Stackra remains responsible for the performance of its Subprocessors to the extent required by applicable law and this DPA.

8.4 Stackra will provide reasonable notice of a material change to its Subprocessor list through the website, dashboard or email where practicable. The Controller may raise a reasonable, documented objection based on data-protection grounds within [INSERT OBJECTION PERIOD]. The parties will discuss the objection in good faith. If no reasonable alternative is available, the parties may agree to discontinue the affected feature or terminate the affected Services subject to the main agreement and applicable law.

8.5 The published Subprocessor list must show the actual legal vendor entity, service, processing purpose, data categories and relevant processing location or transfer information. A vendor must not be included merely because it appears in development code if it does not process live Personal Data for the relevant Service.

## 9. International transfers

Stackra will not knowingly transfer Controller Personal Data to a country outside Nigeria except in accordance with the Controller's Documented Instructions and the transfer requirements of applicable Data Protection Law. The parties will identify the relevant transfer destination and ensure that an applicable legal transfer condition and required safeguards are in place.

Where a Subprocessor processes Personal Data outside Nigeria, the relevant provider, location and safeguards must be recorded in Schedule 1 or another written transfer record. Stackra will not promise Nigeria-only data residency unless that is true for the relevant data and service.

## 10. Data Subject requests

If Stackra receives a request directly from a Data Subject concerning Personal Data for which the Controller is the controller, Stackra may refer the Data Subject to the Controller and will not respond substantively except as instructed or required by law.

Taking account of the nature of the processing, Stackra will provide reasonable assistance to the Controller to locate, access, correct, export, restrict or delete relevant Personal Data where those functions are technically available and the request is lawful. The Controller remains responsible for verifying the Data Subject's identity and deciding whether the request must be granted.

## 11. Personal Data Breach notification

Stackra will notify the Controller **without undue delay** after becoming aware of a Personal Data Breach affecting Controller Personal Data processed by Stackra, and will provide information reasonably available to assist the Controller's assessment. The parties may agree an operational target of **[INSERT INTERNAL TARGET, FOR EXAMPLE 24 HOURS AFTER CONFIRMATION]** for initial notice, but that target must be supported by an actual incident-response process and does not replace a stricter legal deadline.

Where reasonably possible, the notice will include:

- A description of the nature of the incident.
- The affected systems and processing activities.
- The categories of Personal Data and Data Subjects potentially affected.
- The likely consequences known at the time.
- Containment and mitigation steps taken or proposed.
- A contact point for follow-up information.

The Processor will provide available information in phases where all details are not immediately known. The Controller remains responsible for deciding whether it must notify the NDPC or affected Data Subjects, subject to applicable law. Stackra will provide reasonable assistance.

## 12. Retention, return and deletion

12.1 Stackra will process Controller Personal Data for the duration of the Services and retain it only as necessary to provide the Services, comply with lawful instructions, meet applicable legal obligations, protect the Services or establish and defend legal claims.

12.2 On termination or expiry of the relevant Services, Stackra will, at the Controller's choice where technically available and legally permitted, return or delete Controller Personal Data within **[INSERT VERIFIED DELETION PERIOD]**, except to the extent applicable law requires retention.

12.3 The Controller must export or request the return of data before the end of the relevant Service where it needs a copy. The available export format and scope depend on the product features actually provided.

12.4 Data retained in backup systems may be deleted through the normal backup rotation cycle. The applicable maximum backup-expiry period must be documented in Schedule 2.

12.5 Stackra may retain a minimal record of the agreement, payment, deletion action or legal hold where necessary to demonstrate compliance or meet legal obligations, subject to applicable law.

## 13. Audit and compliance information

On reasonable written request, Stackra will provide information reasonably necessary to demonstrate compliance with this DPA. Where the information provided is not sufficient to address a substantiated compliance concern, the parties may agree a proportionate audit or inspection, subject to:

- Reasonable advance notice and normal business hours.
- Confidentiality and security requirements.
- No access to another customer's Personal Data or confidential information.
- No disruption to the Services or other customers.
- Reasonable limits on frequency, scope and cost.
- Any legally required independent auditor confidentiality obligations.

The parties will cooperate in good faith to address findings relevant to the processing under this DPA.

## 14. Liability and order of precedence

The liability provisions in the main Services agreement apply to this DPA to the extent legally permitted. Nothing in this DPA excludes liability that cannot be excluded or limits the rights of Data Subjects or powers of a competent authority.

If this DPA conflicts with the main Services agreement about the processing of Personal Data by Stackra on behalf of the Controller, this DPA prevails for that processing. Mandatory Data Protection Law prevails over both documents.

## 15. Term and termination

This DPA takes effect when accepted by both parties and continues while Stackra processes Controller Personal Data on the Controller's behalf. It ends when that processing ends, subject to clauses intended to survive, including confidentiality, security, deletion, audit and liability provisions.

## 16. Contact and notices

@details
Stackra privacy contact: {privacy@stackra.dev|mailto:privacy@stackra.dev}
Stackra legal notices: [INSERT VERIFIED LEGAL NOTICE EMAIL AND ADDRESS]
Controller privacy contact: [INSERT MERCHANT PRIVACY CONTACT]

## SCHEDULE 1 — PROCESSING DETAILS AND SUBPROCESSORS

### A. Processing details

| Field | Complete for each Merchant |
|---|---|
| Controller legal name | [MERCHANT LEGAL NAME] |
| Controller contact | [NAME / EMAIL] |
| Processor legal name | [STACKRA LEGAL OPERATOR] |
| Service | [IDENTIFY STACKRA PLAN / FEATURES] |
| Processing subject matter | Storefront, catalogue, request and order-related processing as selected |
| Processing duration | [PLAN TERM + RETENTION/DELETION PERIOD] |
| Nature of processing | Hosting, storage, retrieval, display, transmission, support, deletion and other agreed operations |
| Purpose | Provide the agreed Stackra features on the Controller's instructions |
| Data Subjects | Merchant's customers, prospective customers, contacts and authorised users, as applicable |
| Personal Data | Name, contact details, message/request content, order details, attachments and technical identifiers, as applicable |
| Sensitive data | Not authorised unless separately assessed and expressly agreed |
| Retention | [INSERT ACTUAL PERIOD / CRITERIA] |
| Deletion after termination | [INSERT VERIFIED PROCESS AND PERIOD] |

### B. Subprocessor register — verify before execution

| Provider legal entity | Service | Data processed | Processing purpose | Country / region | DPA / transfer mechanism status |
|---|---|---|---|---|---|
| [VERIFY SUPABASE LEGAL ENTITY] | Supabase database, authentication and storage | Account, merchant, storefront, request and attachment data, depending on use | Database, authentication and file storage | [VERIFY PROJECT REGION AND SUPPORT/SUBPROCESSOR LOCATIONS] | [VERIFY CONTRACT AND TRANSFER TERMS] |
| [VERIFY VERCEL LEGAL ENTITY] | Vercel hosting and deployment infrastructure | Request and application data passing through hosted services; technical logs | Host Stackra website/application/backend | [VERIFY PROCESSING LOCATIONS] | [VERIFY CONTRACT AND TRANSFER TERMS] |
| [VERIFY RESEND LEGAL ENTITY] | Email delivery | Recipient email address and email content | Transactional and security email where configured | [VERIFY] | [VERIFY] |
| [VERIFY GOOGLE LEGAL ENTITY] | Google sign-in | Authentication identity data returned through Google OAuth | Account authentication where enabled | [VERIFY] | [VERIFY] |
| [VERIFY OPENAI LEGAL ENTITY] | Voice transcription and request understanding | Voice audio, request text and transcript, where AI features are enabled | AI-assisted transcription and request organisation | [VERIFY] | [VERIFY API DATA CONTROLS, RETENTION AND CONTRACT] |
| [VERIFY UPSTASH LEGAL ENTITY] | Redis cache, where configured | Cached storefront response information and cache keys | Cache performance | [VERIFY] | [VERIFY] |
| [ADD ANY OTHER LIVE SUBPROCESSOR] | [SERVICE] | [DATA] | [PURPOSE] | [COUNTRY] | [STATUS] |

> Do not publish a provider row or execute the DPA until the legal entity, production use, data categories, purpose, location and contract status have been verified.

## SCHEDULE 2 — TECHNICAL AND ORGANISATIONAL MEASURES

Complete this schedule with the controls actually implemented in production. The following is a checklist, not a claim that every control has been independently verified:

1. Identity and access management: [ROLE MODEL, MFA/OTP, STAFF ACCESS, JOIN/REMOVE PROCESS].
2. Authentication: [PASSWORD HASHING, SESSION CONTROLS, COOKIE SETTINGS, RATE LIMITS].
3. Tenant separation: [BUSINESS/STORE SCOPING, SERVER-SIDE OWNERSHIP CHECKS, DATABASE POLICIES].
4. Encryption in transit: [VERIFY TLS CONFIGURATION AND SERVICE-TO-SERVICE CONNECTIONS].
5. Encryption at rest: [VERIFY DATABASE, OBJECT STORAGE AND BACKUP PROVIDER SETTINGS].
6. File handling: [UPLOAD VALIDATION, FILE TYPE/SIZE LIMITS, PUBLIC/PRIVATE BUCKET RULES, SIGNED URL EXPIRY].
7. Secrets: [SECRET MANAGER, ACCESS RESTRICTIONS, ROTATION AND INCIDENT PROCESS].
8. Logging and monitoring: [WHAT IS LOGGED, ACCESS, RETENTION, ALERTING].
9. Backups and recovery: [FREQUENCY, RETENTION, RESTORE TESTS, RECOVERY TARGETS].
10. Vulnerability and patch management: [PROCESS AND FREQUENCY].
11. Personnel confidentiality and training: [POLICY, ACCESS GRANT/REMOVAL, TRAINING].
12. Incident response: [ON-CALL/RESPONSIBLE PERSON, ESCALATION, NOTIFICATION PROCESS].
13. Data retention and deletion: [AUTOMATED/ MANUAL CONTROLS, BACKUP EXPIRY].
14. Vendor management: [DUE DILIGENCE, DPA REVIEW, SUBPROCESSOR CHANGE PROCESS].
`,
  },
];
