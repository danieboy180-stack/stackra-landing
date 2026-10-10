import { APP_URL } from "@/lib/site";
import type { DocPageData } from "./types";

export const start: DocPageData[] = [
  {
    slug: "get-started",
    group: "Get started",
    nav: "Get started",
    eyebrow: "Get started",
    title: "Get Started with Stackra",
    lead: "Take the next step toward bringing your business online.",
    description:
      "Take the next step toward bringing your business online with Stackra.",
    body: `
You don't need to build an entire website from scratch to begin presenting your offerings online.

Stackra helps merchants create a shareable storefront where customers can discover what they sell.

Whether you're setting up your first online business presence or looking for a more organized way to present your offerings, getting started begins with creating an accurate representation of your business.

## Step 1: Set up your business

Create your business presence using the registration and setup options available on Stackra.

Provide accurate information about your business and ensure that the details you publish are information you're authorized to use.

## Step 2: Add your offerings

Add the products or services you want customers to discover.

Where applicable, provide clear images, useful descriptions, accurate prices, and current availability information.

Take time to review your listings before making them publicly available.

## Step 3: Review your storefront

Check how your storefront presents your business.

Make sure your business information is correct, your offerings are described accurately, and your contact or ordering instructions reflect the process you actually use.

Remove placeholders and correct mistakes before sharing your storefront with customers.

## Step 4: Share your business

When your storefront is ready, share its link through the channels you use to reach customers.

You can introduce your storefront to your existing audience through messaging apps, social media, and other appropriate channels.

Remember that creating a storefront is the beginning of your online presence, not a guarantee of customer traffic or sales.

## Step 5: Keep improving

As your business changes, keep your storefront current.

Review your offerings, update outdated information, and pay attention to the questions customers ask.

Use what you learn to improve how you present your products and communicate with potential buyers.

## Built around your business

Stackra is intended to give merchants a practical way to present their offerings online while continuing to use the channels through which they already reach customers.

The features available to you depend on the capabilities currently supported by the platform.

Review the applicable terms and privacy information before using the service.

@primary Create Your Stackra Business | ${APP_URL}

Already have an account? {Sign In|/sign-in}
`,
  },
  {
    slug: "start-selling",
    group: "Get started",
    nav: "Start selling",
    eyebrow: "Start Selling with Stackra",
    title: "Your business deserves a place online.",
    lead: "Turn the products you offer into a storefront people can discover, explore, and share.",
    description:
      "Turn the products you offer into a storefront people can discover, explore, and share.",
    body: `
Stackra helps merchants organize their offerings into a shareable online presence without requiring them to build and maintain a website from scratch.

Bring your offerings together, present your business clearly, and give potential customers another way to discover what you sell.

@primary Start Selling | ${APP_URL}

## Built for independent merchants and growing businesses

Every business has its own way of reaching customers.

You might already use WhatsApp, Instagram, referrals, or direct conversations to introduce people to your products.

Stackra is designed to complement those channels by providing a storefront where your offerings can be presented together.

You can share that storefront with people who are interested in your business, allowing them to explore the information you make available.

## Present your products clearly

Give customers the information they need to understand your offerings.

Use relevant images, clear descriptions, accurate prices where applicable, and current availability details.

Make sure your published information reflects what your business can actually provide.

Clear information helps customers evaluate their options and decide whether to contact you or proceed with an order.

## Keep your business in your hands

Your storefront represents your business, your offerings, and the information you choose to publish.

You remain responsible for maintaining accurate listings, managing your customer relationships, complying with applicable requirements, and fulfilling your commitments to customers.

Stackra provides the platform's available tools; it does not guarantee that creating a storefront will produce sales or a particular level of growth.

## How to get started

- **Create your business presence.** Follow the available registration and setup process.
- **Add your offerings.** Present your products or services with accurate information.
- **Review your storefront.** Confirm that your information is complete and ready for customers.
- **Share your link.** Introduce your storefront to your audience through the channels you use.
- **Keep it current.** Update your offerings as your business changes.

## Be clear with your customers

Trust begins with honest information.

Use images and descriptions that accurately represent what you offer. Explain applicable delivery or fulfilment arrangements, communicate any relevant restrictions, and make your cancellation, return, and refund terms clear where applicable.

Respond to customer enquiries responsibly and avoid making promises you cannot fulfil.

## Your next step starts here

Whether you're just beginning to sell online or want a more organized way to present your existing business, Stackra gives you a place to start.

Create your storefront, present your offerings, and share your business with potential customers.

@primary Get Started with Stackra | /get-started

Already using Stackra? {Sign In|/sign-in}
`,
  },
  {
    slug: "sign-in",
    group: "Get started",
    nav: "Sign in",
    eyebrow: "Sign in",
    title: "Welcome Back to Stackra",
    lead: "Sign in to manage your business.",
    description: "Sign in to manage your Stackra business.",
    body: `
Your Stackra account gives you access to the business tools and storefront management features available to your account.

Sign in using the authentication method associated with your account.

@primary Sign In | ${APP_URL}

- {Create an account|${APP_URL}}
- {Need help signing in? Contact Support|/contact}

## Keep your account secure

Use a strong, unique password and protect any authentication codes associated with your account.

Never share your password or authentication codes with someone claiming to provide support.

If you believe someone has accessed your account without permission, follow the available account recovery process and contact Stackra Support.

## Having trouble?

If you cannot sign in, check that your details are correct and that you're using the appropriate sign-in method for your account.

If the problem continues, contact Stackra Support and describe the issue. Do not include your password, authentication codes, or other secrets in a support message.

Privacy: Your account information is handled in accordance with Stackra's {Privacy Policy|/privacy}.

> Keep this page focused on account access. The password recovery link, registration link, and support destination must point to real, working routes. Remove any option the current authentication system does not support.
`,
  },
];
