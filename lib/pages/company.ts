import { APP_URL } from "@/lib/site";
import type { DocPageData } from "./types";

// [Bracketed text] is a placeholder: it is highlighted on the page until replaced.
export const company: DocPageData[] = [
  {
    slug: "about",
    group: "Company",
    nav: "About",
    eyebrow: "About Stackra",
    title: "Helping merchants bring their businesses online.",
    lead: "Stackra exists to help merchants present their offerings online through shareable storefronts.",
    description:
      "Stackra helps merchants present their offerings online through shareable storefronts.",
    body: `
We believe a business should have a clear, accessible way to show people what it offers without every merchant needing to build and maintain a website from scratch.

Our focus is on making it easier for businesses to bring their offerings together, present useful information, and share their storefronts with the people they want to reach.

## Built around how businesses connect with people

Businesses don't all reach customers in the same way.

Some rely on direct conversations. Others use social media, referrals, messaging platforms, or a combination of different channels.

Stackra is designed to complement those existing relationships by giving merchants a place to present their offerings that can be shared with potential customers.

The goal is to make discovering a business and exploring what it offers more straightforward.

## More than a link

A business needs more than a message telling people what it sells. Customers may want to explore several products, compare available options, and understand how to take the next step.

Stackra helps merchants bring their offerings together in a storefront rather than depending entirely on separate product links and scattered information.

The storefront becomes another way for people to discover a business and learn about its offerings.

## What we believe in

- **Clarity.** Customers should be able to understand what a business offers and find the information they need.
- **Practicality.** Business tools should help merchants present their offerings without introducing unnecessary complexity.
- **Honest information.** Businesses should represent their products and services accurately, and claims about what Stackra can do should reflect the platform's actual capabilities.
- **Merchant ownership.** Merchants remain responsible for their businesses, offerings, customer relationships, and commercial commitments.
- **Continuous improvement.** Building a useful product means learning from real usage, listening to feedback, and improving the experience over time.

## Our approach to trust

Trust is not established by a statement on a website alone.

It develops through accurate information, reliable product behavior, responsible handling of data, clear communication, and accountability when problems occur.

We aim to make Stackra's capabilities understandable and provide the information people need to make informed decisions about using the platform.

We will not represent unverified customer outcomes, partnerships, certifications, registrations, or company milestones as established facts.

## Who we serve

Stackra is built for merchants and small businesses that want a simpler way to present their offerings online and share them with potential customers.

Our product is intended to support that goal through the storefront and business tools available on the platform.

Specific capabilities may change as Stackra develops. Our public descriptions should reflect the features that are actually available.

## Get to know Stackra

Whether you're exploring the platform for the first time or already using Stackra for your business, we want the experience to be clear and useful.

Explore how Stackra works, review the information available on our website, or contact us with questions.

@primary How Stackra Works | /how-it-works
@secondary Start Selling | ${APP_URL}

Need help? {Contact Us|/contact}

## Company information

Stackra is a brand operated by [insert the verified legal name of the person or organization operating Stackra].

Operating jurisdiction: [Insert verified jurisdiction.]

Business registration details: [Include only if applicable and verified.]

Contact: [Insert official contact email.]

> This information should be completed before publication where required or relevant to accurately identify the company responsible for the service.
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
      "How to reach Stackra for general, account, merchant, privacy and partnership enquiries.",
    body: `
We want people using Stackra to understand the product, find useful information, and have a clear way to raise concerns when something goes wrong.

## General enquiries

Have a question about Stackra, the services we provide, or how the platform works?

Contact us through our official support channel.

Email: [Insert verified official contact email.]

## Account and technical support

If you're experiencing a problem with your account or a Stackra feature, describe what happened and what you were trying to do.

Include relevant non-sensitive details, such as the affected page, the approximate time of the issue, and any error message you received.

Never send your password, authentication codes, or other sensitive credentials through a support request.

Support channel: [Insert verified support email or support page.]

## Merchant and storefront enquiries

If you're using Stackra to present your business, you can contact support with questions about available features, storefront setup, or a technical issue affecting your experience.

For questions about a particular merchant's products, pricing, availability, delivery, or refund arrangements, contact the merchant directly using the information provided on that merchant's storefront.

## Privacy and personal information

If you have a question about how Stackra handles personal information, or would like to submit a privacy-related request, use the dedicated privacy contact below.

Privacy contact: [Insert verified privacy email or designated privacy-request channel.]

Do not include more personal information than is necessary to explain your request.

## Report a problem

If you encounter broken functionality, inaccurate information about Stackra, or content that you believe violates the platform's rules, tell us what you found and provide the relevant page or link.

Where possible, explain why you believe the information is inaccurate or the content is problematic.

> We will need a functioning process for reviewing reports and communicating the outcome where appropriate before making any promises about response times or resolution.

Report channel: [Insert the verified reporting or support destination.]

## Business and partnership enquiries

For legitimate partnership or business enquiries, contact:

Business enquiries: [Insert official business contact email, if available.]

Please include a clear explanation of your proposal and the type of relationship you're considering.

## Before you contact us

For your security, do not send passwords, one-time authentication codes, private payment credentials, or unnecessary copies of identity documents in an ordinary support message.

When contacting Stackra about an account issue, use your registered contact information where appropriate so we can follow the available account-verification procedure.

We will only promise a response time after establishing a support process that can consistently meet it.

## Our commitment

We believe that clear communication is part of building a trustworthy service.

Our contact information should remain current, requests should be directed to the appropriate channel, and problems should be handled according to established procedures.

General enquiries: [Insert official email.]

Privacy requests: [Insert privacy email.]

Account support: [Insert support destination.]
`,
  },
];
