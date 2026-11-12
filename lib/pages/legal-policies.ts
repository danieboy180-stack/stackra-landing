import type { DocPageData } from "./types";

// Working drafts. [Bracketed text] is a placeholder and "> " lines are drafting notes;
// both are highlighted on the page until replaced or removed.
export const legalPolicies: DocPageData[] = [
  {
    slug: "refunds",
    group: "Legal",
    nav: "Refunds",
    eyebrow: "Legal",
    title: "Refund and Cancellation Policy",
    lead: "Two different things: what you pay Stackra, and what a customer pays a merchant.",
    description:
      "How cancellation and refunds work for Stackra subscriptions and for purchases customers make from merchants.",
    body: `
> Working draft. The price, trial length and renewal terms are not final. Do not publish any of them as a standard rule until one definitive commercial schedule has been approved, and record any approved exception for a particular merchant.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

This policy covers two separate relationships, so it is split in two. Part A is about merchants who pay Stackra for software. Part B is about customers who buy from merchants.

## Part A: Stackra subscriptions

### The plan and what you pay

Before you pay, we will tell you the plan, the fee, the currency, how often you are billed, when any free trial starts and ends, the renewal date and whether renewal is automatic.

- Plan and fee: [Insert approved plan, fee and currency.]
- Billing interval: [Insert approved interval.]
- Free trial: [Insert approved trial length, or state that there is none.]
- Renewal: [Insert whether renewal is automatic, and the renewal date.]

A plan does not renew automatically unless we have clearly told you so and you have agreed. See section 6 of the {Terms of Service|/terms}.

### Cancelling

You can stop using Stackra and ask us to close your account by emailing support@stackra.dev or using any account-closure option in the application.

Cancelling stops the next renewal, where one applies. What happens to paid features, your storefront and your records is described in section 14 of the {Terms of Service|/terms} and section 11 of the {Merchant Terms|/merchant-terms}. Your underlying legal rights and access to essential records do not depend on your plan.

### Refunds

Refund eligibility and any time limit: [Insert approved refund rules.]

If we do not provide a paid service you have paid for, you may be entitled to a refund or another remedy under your agreement and the law.

If you are charged twice or in error, email support@stackra.dev. We will look into it and correct any verified billing error.

We will explain proration only if it is supported and approved.

### Billing contact

For billing questions and disputes, email support@stackra.dev. If we cannot settle a dispute, see {Complaints and Disputes|/complaints}.

## Part B: Purchases from a merchant

When you buy from a merchant, the merchant is ordinarily the seller, so cancellations, returns and refunds are agreed with the merchant. Stackra does not guarantee or fund a merchant's refund.

### What merchants must do

A merchant must publish clear, accurate terms for delivery, returns, cancellation and refunds for what it sells. These terms should say when you can cancel, when you can return goods, when you can ask for a replacement or a refund, and how to reach the merchant.

### Your rights

A merchant's policy cannot remove the rights you have under Nigerian consumer law, for example about accurate product information, records of your transaction, and cancellation and return in the circumstances the law covers.

### Where to go

Contact the merchant first, using the details on its storefront. If the problem is with the platform, your account or your privacy, contact Stackra. We can help route a platform complaint, but we do not decide a sale on the merchant's behalf.

## Related documents

- {Legal overview|/legal}
- {Terms of Service|/terms}
- {Customer Terms and Conditions|/customer-terms}
`,
  },
  {
    slug: "complaints",
    group: "Legal",
    nav: "Complaints",
    eyebrow: "Legal",
    title: "Complaints and Disputes",
    lead: "Who to contact, what to include and what happens next.",
    description:
      "How to raise a complaint about the Stackra platform, a merchant transaction, your privacy, security or billing, and how we handle it.",
    body: `
> Working draft. Before publication, check that support@stackra.dev, privacy@stackra.dev and reports@stackra.dev are active and monitored, name who owns complaints, and set the acknowledgement and response targets. Do not promise a response time until a process exists that can meet it.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

A complaint can be about different things, and the right place to take it depends on what went wrong. This page explains where to go and how we handle complaints that are ours to handle.

## What kind of complaint is it?

- **The platform or your account:** sign-in, access, publishing, bugs, outages and billing. Email support@stackra.dev.
- **A purchase from a merchant:** an inaccurate listing, stock, a price, whether an order was accepted, delivery, returns, cancellation, a refund or the quality of service. Contact the merchant first.
- **Your personal information:** access, correction, deletion, objection, withdrawing consent, marketing or portability. Email privacy@stackra.dev. See {Your data rights|/data-rights}.
- **Security or fraud:** a suspected account takeover, unauthorised access, a suspicious payment reference, impersonation or exposed data. Email reports@stackra.dev straight away.
- **Suppliers and procurement:** a quotation, purchase order, dispatch, shortage, damaged goods or receipt, once those features are released. Email support@stackra.dev.

Stackra does not resolve every dispute between a merchant and its customer, and this process does not replace the rights you have under law.

## What to include

- What happened and when.
- Your account, or the merchant and order involved.
- Any evidence you have, such as screenshots or message records.
- What outcome you are asking for.

Do not include passwords, one-time codes or unnecessary identity documents.

## How we handle a complaint

1. We give your complaint a reference and record the date, the subject, the merchant or order involved, the evidence and what you are asking for.
2. We acknowledge it within [insert acknowledgement target] and tell you who is responsible for dealing with it.
3. We keep the relevant records and share one person's information with another only where we are allowed to.
4. If it concerns a merchant's sale, we pass it to the merchant where that is appropriate. Platform, security and privacy issues stay with Stackra.
5. We treat suspected fraud, safety issues, vulnerable users and privacy incidents as urgent.
6. We tell you the outcome and our reasons, and what you can do next, including any regulator or other route the law provides.

We use complaint outcomes to find and fix problems.

## If you are still not satisfied

For a data protection complaint you can contact the {Nigeria Data Protection Commission|https://www.ndpc.gov.ng/ndp-act-2023/}. For a consumer rights complaint about a purchase, you can contact the {Federal Competition and Consumer Protection Commission|https://fccpc.gov.ng/}. You may also have the right to go to court.

## Related documents

- {Legal overview|/legal}
- {Customer Terms and Conditions|/customer-terms}
- {Refund and Cancellation Policy|/refunds}

@primary Contact Us | /contact
`,
  },
  {
    slug: "security",
    group: "Legal",
    nav: "Security",
    eyebrow: "Legal",
    title: "Security and Data Protection",
    lead: "How we approach protecting information, what we ask of you and what happens if something goes wrong.",
    description:
      "Stackra's approach to security and data protection, what users should do to stay safe, and how we respond to a breach.",
    body: `
> Working draft. Every statement here must be backed by evidence from the live system before publication. Remove anything that is not true yet. Do not describe Stackra as military-grade, unhackable, end-to-end encrypted, bank-grade, certified or 100% secure unless a specific verified basis exists. The detailed breach procedure is an internal document and is not published.

Effective date: [Insert publication date]

Last updated: [Insert last revision date]

We want you to be able to trust Stackra with your business information. This page describes our approach in plain terms. No online service can promise that every system or transmission is completely free of risk.

## Our approach

We aim to:

- Give each person their own account and protect sign-in, one-time codes and password reset.
- Let people reach only the businesses and records they are authorised to reach, and check that on the server rather than trusting what a browser sends.
- Give people only the access they need, and limit and record administrator access.
- Keep production, preview and development environments separate, and avoid putting real personal data in preview environments.
- Collect only the information we need and keep it only as long as we need it.
- Make sure our staff and contractors keep information confidential.
- Check the providers we rely on, and agree data protection terms with them.

[Confirm and describe what is actually in place: encryption in transit and at rest, secrets management, backups and restore testing, logging and monitoring, code review, dependency and vulnerability management.]

## Our providers

We rely on providers to host and run Stackra. Our {Data Processing Agreement|/data-processing} lists them, where they process data and the safeguards that apply.

## What we ask of you

- Use a strong, unique password and keep your devices secure.
- Never share a password or a one-time code, even with someone who says they are from Stackra.
- Give staff only the access they need, and remove it when they leave.
- Tell us straight away if you think your account has been accessed without permission.

Report a security concern at reports@stackra.dev. Please give us a reasonable chance to fix a problem before you share it publicly.

## If something goes wrong

If we find a security incident, we work through these steps:

1. Contain it, stop unauthorised access and keep the evidence.
2. Find out what happened, which systems and information were involved and who is affected.
3. Judge the risk to the people affected.
4. Where we handle the information for a merchant, tell the merchant without undue delay so that it can meet its own duties.
5. Where we are responsible for the information and the law requires it, tell the Nigeria Data Protection Commission within the legal time limit, which is currently 72 hours from becoming aware of a breach likely to put people's rights and freedoms at risk.
6. Where a breach is likely to put people at high risk, tell them promptly in clear language and say what they can do to protect themselves.
7. Fix the cause, recover, and learn from it.

Not every technical incident has to be reported, and we assess each one without delay.

## Related documents

- {Legal overview|/legal}
- {Data Processing Agreement|/data-processing}
- {Privacy Policy|/privacy}
- {Complaints and Disputes|/complaints}
`,
  },
];
