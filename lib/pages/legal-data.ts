import type { DocPageData } from "./types";

// Working drafts. [Bracketed text] is a placeholder and "> " lines are drafting notes;
// both are highlighted on the page until replaced or removed.
export const legalData: DocPageData[] = [
  {
    slug: "data-processing",
    group: "Legal",
    nav: "Data processing",
    eyebrow: "Legal",
    title: "Data Processing Agreement",
    lead: "How Stackra handles personal data on behalf of the merchants who use it.",
    description:
      "The agreement that governs how Stackra processes personal data for merchants, including instructions, security, subprocessors, breaches and deletion.",
    body: `
> Working draft. Before this is attached to the Merchant Terms, complete the party details, the subprocessor list, the transfer information and the security measures against the live system, and have it reviewed by a Nigerian legal practitioner. Nigerian data protection law requires a written agreement when a controller uses a processor.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

## 1. Purpose and parties

This Data Processing Agreement applies when Stackra processes personal data on behalf of a merchant that uses Stackra. It forms part of the agreement between Stackra and the merchant and is part of the {Merchant Terms|/merchant-terms}.

The merchant is the business that accepted the {Terms of Service|/terms}, as recorded on its account.

Stackra is [insert the verified legal name, address and privacy contact of the person or organization operating Stackra].

Privacy contact: privacy@stackra.dev

## 2. When Stackra is a processor

Roles are decided activity by activity, not once for everything.

Stackra acts as the merchant's processor when it hosts and processes, on the merchant's instructions, personal data about the merchant's customers, enquiries, orders, delivery details, notes and staff, and the other records the merchant keeps in Stackra.

Stackra is an independent controller for its own purposes. These include accounts and sign-in, platform security and abuse prevention, billing and subscriptions, its own support, its own direct marketing and platform-level diagnostics. The {Privacy Policy|/privacy} covers those, and this agreement does not.

Where supplier or procurement features are released, we will assess the roles involved and update this agreement or add a supplement.

## 3. Details of the processing

- **Subject matter:** providing the Stackra services to the merchant.
- **Nature and purpose:** hosting, storing, displaying, transmitting, organising, retrieving, backing up and deleting data so that the merchant can run its storefront, handle enquiries and orders, keep customer records and use the other features enabled for its account.
- **Duration:** while the merchant uses Stackra, plus the time needed to return or delete data under section 11.
- **People whose data is processed:** the merchant's customers, buyers and requesters, the merchant's staff and authorised users, and supplier contacts where relevant.
- **Types of personal data:** identity and contact details, order and request data, customer notes and preferences, delivery details where collected, transaction references, images, audio and other media, communications, and other fields processed by features the merchant enables. [Confirm against the data map before publication.]

The merchant must not use Stackra to collect sensitive personal data, such as health information or identity document numbers, unless Stackra has agreed in writing first.

## 4. The merchant's instructions

Stackra will process personal data only on the merchant's documented instructions. Those instructions are this agreement, the Merchant Terms, the merchant's use and configuration of the features, and further written instructions that are consistent with the service.

Stackra will tell the merchant if it believes an instruction breaks the law.

The merchant must have a lawful basis for the processing, give its customers the notices the law requires, and make sure its instructions are lawful.

Stackra will not use the merchant's customer data for its own marketing or for unrelated product training. Where feasible, it may use de-identified or aggregated information to run, secure and improve the service.

## 5. Personnel

Stackra will make sure that people with access to the merchant's personal data are bound by confidentiality and have access only where they need it.

## 6. Security

Stackra will use technical and organisational measures that suit the risk and the sensitivity of the data. They are described in {Security and Data Protection|/security}. [Confirm and list the measures actually in place, such as access controls, separation of each merchant's data, encryption, backups and monitoring.]

The merchant is responsible for its own staff accounts, devices, credentials and exports.

## 7. Subprocessors

The merchant agrees that Stackra may use subprocessors to host and operate the service. For each subprocessor Stackra will:

- Have a written contract with data protection duties comparable to those in this agreement.
- Remain responsible for the subprocessor's performance.
- Keep the list below up to date.
- Give notice of a change at least [insert notice period] before it takes effect.

The merchant may object to a change on reasonable data protection grounds. If the objection cannot be resolved, the merchant may stop using the affected service and close its account.

Current subprocessors: [Insert the verified list, with each provider, what it does, the categories of data involved, where it processes data and the transfer safeguard. Include hosting, database and storage, email delivery, AI and model, payment, analytics and messaging providers where they are used.]

## 8. Transfers outside Nigeria

Where personal data is processed outside Nigeria, Stackra will make sure there is a lawful transfer basis and the safeguards the law requires. Stackra records the location for each subprocessor and will give the merchant information about the safeguards on request.

[Insert processing locations once confirmed.]

## 9. Helping the merchant

Stackra will help the merchant, taking into account the nature of the processing, with:

- Requests from people exercising their data rights. If a person sends Stackra a request about merchant data, Stackra will pass it to the merchant promptly and will not reply except to say it has been passed on, unless the law requires otherwise.
- Data protection impact assessments.
- Enquiries from a regulator.
- Security incidents.
- Audits, under section 12.

## 10. Personal data breaches

Stackra will tell the merchant without undue delay after it becomes aware of a breach that affects the merchant's personal data. [Insert the approved target notification window, if any.]

The notice will include what is known about the nature of the breach, the types and approximate number of people and records affected, the likely consequences, the steps taken or proposed, and a contact point. Stackra will update the merchant as it learns more, so that the merchant can meet its own legal deadlines.

As controller, the merchant decides whether to notify the regulator or affected people, and Stackra will help.

## 11. Return, export and deletion

When the service ends, or when the merchant asks, Stackra will make the merchant's data available for export in a reasonable format and then delete or anonymise it after [insert period], unless the law requires it to be kept. Backups are removed on their normal cycle. [Insert the confirmed backup cycle.]

Where self-service export or deletion is not available, Stackra will handle the request manually through support@stackra.dev. Our general approach is in {Data Retention and Deletion|/data-retention}.

## 12. Records and audits

Stackra keeps records of the processing it carries out for the merchant. On reasonable request it will give the merchant the information needed to show that it is meeting this agreement. Audits can be agreed on reasonable notice, subject to confidentiality and to protecting other merchants' data.

## 13. Liability and which terms apply

Liability is governed by the Terms of Service, subject to the law. If this agreement conflicts with the Merchant Terms about the processing of personal data, this agreement applies.

Nothing here limits the rights of the people whose data is processed, or either party's duties under the Nigeria Data Protection Act 2023.

## Related documents

- {Legal overview|/legal}
- {Merchant Terms|/merchant-terms}
- {Security and Data Protection|/security}
- {Data Retention and Deletion|/data-retention}
`,
  },
  {
    slug: "data-rights",
    group: "Legal",
    nav: "Data rights",
    eyebrow: "Legal",
    title: "Your data rights",
    lead: "How to ask about, correct, export or delete your personal information, whoever you are.",
    description:
      "The rights you have over your personal information on Stackra and how to use them.",
    body: `
> Working draft. Before publication, confirm that privacy@stackra.dev is monitored, name the person responsible for requests, set the response period with counsel, and make sure a manual request process exists.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

This page is for anyone whose personal information Stackra or a merchant handles: merchant owners and staff, customers who enquire or order, supplier contacts and people who contact support.

## Your rights

Under the Nigeria Data Protection Act 2023, and subject to its conditions, you may have the right to:

- Be told who handles your information, why, on what basis, who receives it, how long it is kept and how to complain.
- Access your information and receive a copy.
- Have inaccurate, incomplete or out-of-date information corrected.
- Have your information deleted where the legal conditions are met.
- Ask us to restrict how it is used in certain situations.
- Object to certain processing, including direct marketing.
- Withdraw your consent where we rely on it. Withdrawing must be as easy as giving it, and does not affect earlier lawful processing.
- Receive your information in a portable format where that applies.
- Not be subject to a decision made only by automated means that has a legal or similarly significant effect on you, and to ask for human review.
- Complain to the Nigeria Data Protection Commission.

## These rights do not depend on your plan

You never need to buy, upgrade or renew a plan to use your rights. Merchants on every plan, and their customers, have the same rights.

## How to make a request

Email privacy@stackra.dev and tell us:

- What you want us to do, for example access, correction, deletion or stopping marketing.
- Who you are, and how we can reach you.
- If you can, the merchant, store or order your request relates to.

Please do not send passwords, one-time codes or copies of identity documents unless we ask for something specific and explain why.

## Who answers your request

For information that Stackra controls, such as your Stackra account, security records and our own support and marketing, we will handle the request.

For information that a merchant controls, such as a customer's order history, notes or delivery details kept for that merchant, the merchant decides how to respond. We will pass your request to the merchant promptly and help it respond. We cannot change a merchant's own records on our own authority.

If a request involves both, we will explain which part each of us handles.

## Checking who you are

We may need to confirm your identity before we share or change information. We will ask only for what is proportionate and will not ask for extra documents for a simple request.

## What happens next

We will acknowledge your request and respond within [insert response period approved by counsel]. Where some self-service tools do not exist yet, we handle access, correction, export, deletion and restriction requests through a controlled manual process.

We protect other people's information when we prepare a copy of yours.

If we cannot fully meet a request, for example because the law requires us to keep a record, because it would expose another person's information or because a merchant controls the information, we will explain why.

## Marketing

You can object to direct marketing at any time by using the unsubscribe option in a message or by emailing privacy@stackra.dev.

## If you are not satisfied

You can complain to us first. See {Complaints and Disputes|/complaints}. You can also contact the {Nigeria Data Protection Commission|https://www.ndpc.gov.ng/ndp-act-2023/}.

## Related documents

- {Legal overview|/legal}
- {Privacy Policy|/privacy}
- {Data Retention and Deletion|/data-retention}

@primary Contact Us | /contact
`,
  },
  {
    slug: "cookies",
    group: "Legal",
    nav: "Cookies",
    eyebrow: "Legal",
    title: "Cookie Policy",
    description:
      "The cookies and similar technologies Stackra uses on its website, storefronts and merchant application.",
    body: `
> Working draft. Do not list any analytics, advertising or tracking technology as active until the live tags, scripts and storage on each host have been inventoried. Complete the lists below from that inventory.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

Cookies are small files that a website stores on your device. Similar technologies include local storage, pixels and software development kits. This policy explains what Stackra uses and the choices you have.

## Where this applies

This policy covers our public website, merchant storefronts and the merchant application.

## Types of technology

- **Strictly necessary:** needed to run the service, keep you signed in, protect accounts and prevent abuse. These do not need your consent.
- **Preferences:** remember choices you make, such as display settings.
- **Analytics and performance:** help us understand how the service is used and find faults.
- **Advertising and marketing:** used to show or measure advertising.

## What we use

Website: [List each cookie or similar technology, its purpose, who provides it, how long it lasts and what it collects.]

Storefronts: [List each cookie or similar technology, its purpose, who provides it, how long it lasts and what it collects.]

Merchant application: [List each cookie or similar technology, its purpose, who provides it, how long it lasts and what it collects.]

We have not listed any analytics or advertising technology as active on this page. If we introduce any, we will update this policy first.

## Your choices

Where the law requires your consent for a non-essential technology, we will ask before we use it. We will not use pre-ticked boxes, and we will not make optional analytics or marketing a condition of signing in.

You can change or withdraw your choice at any time: [Describe the preference control once it exists.]

You can also block or delete cookies in your browser settings. Blocking strictly necessary cookies may stop parts of the service from working.

## Third parties

Where a third party provides a technology on our pages, its own notice explains what it does. [Link each provider's notice and describe any transfer of data outside Nigeria.]

## Changes

We will update this policy when the technologies we use change, and show the date of the latest version.

## Related documents

- {Legal overview|/legal}
- {Privacy Policy|/privacy}
- {Your data rights|/data-rights}
`,
  },
  {
    slug: "data-retention",
    group: "Legal",
    nav: "Retention",
    eyebrow: "Legal",
    title: "Data Retention and Deletion",
    lead: "How long Stackra keeps different kinds of information, and how it is deleted.",
    description:
      "How long Stackra keeps each kind of information, how deletion works and the legal reasons some records are kept.",
    body: `
> Working draft. Do not publish a retention period that has not been agreed. Counsel and the technical team must settle a period for each category below, including tax and accounting duties and backup retention.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

We keep personal information only for as long as there is a good reason to. This page explains how we decide, what happens at the end, and how you can ask for information to be exported, corrected or deleted.

## How we decide how long to keep information

We set a period for each kind of information, not one period for everything. We look at:

- What we need to provide the service.
- Resolving disputes and handling legal claims.
- Accounting and tax requirements.
- Security and preventing abuse.
- Any period the law sets.

## Retention by category

- **Account and sign-in records:** kept while the account is active and for [insert period] after closure.
- **Business profile and store records:** [insert period].
- **Catalogue content:** [insert period].
- **Orders:** [insert period].
- **Requests and quotations:** [insert period].
- **Customer communications:** [insert period].
- **Payment evidence:** [insert period].
- **Credit and repayment records:** [insert period].
- **Supplier and procurement records:** [insert period].
- **Support cases:** [insert period].
- **Security and audit logs:** [insert period].
- **Analytics:** [insert period].
- **Cookies and similar technologies:** see the {Cookie Policy|/cookies}.
- **Backups:** removed on a cycle of [insert confirmed backup cycle].

## How deletion works

When information is no longer needed, we delete or anonymise it. Deletion covers active systems, stored media, search indexes and logs. Backups are removed when they expire on their normal cycle, so information can remain in a backup for a short time after it is deleted from live systems.

## When we may keep information longer

We may keep information when the law requires it, for a legal claim or investigation, to deal with an unpaid invoice or a dispute, or to keep required financial records. We keep it only for as long as that reason applies.

## What is deleted, anonymised or kept by the merchant

- Information we control is deleted or anonymised when its period ends.
- Information a merchant controls, such as its order and customer records, stays with that merchant. Stackra deletes its copy when the service ends, as the {Data Processing Agreement|/data-processing} describes.
- Some information cannot be erased while a legal reason to keep it remains.

## Requesting export, correction, closure or deletion

Email support@stackra.dev to ask for an export, a correction, a closure of your account or deletion of your information. For a privacy request, use privacy@stackra.dev. Some of these tools are not yet self-service in the application, so we handle those requests through a manual process. A customer's request about information a merchant controls is passed to that merchant.

Your rights do not depend on your plan. See {Your data rights|/data-rights}.

## Related documents

- {Legal overview|/legal}
- {Privacy Policy|/privacy}
- {Data Processing Agreement|/data-processing}
`,
  },
];
