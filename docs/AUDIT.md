# Stackra Landing Audit

## Baseline
- Source: `main` and the isolated branch created for this rebuild.
- Baseline commit before this rebuild: `e5de9d49f6dcc7405036324b15609714c691b199`.
- Existing page: one large static `index.html` with inline CSS/JS.
- Vercel project: `stackra-landing`, already linked to this repository.
- Existing Vercel project framework is unset; the site was being served as static HTML.
- Branch `Stackra-v1-landing` contains an earlier Next.js experiment, but it was intentionally not reused because the owner requested a fresh branch for this build.

## Existing page inventory
- Header/navigation with Product, Storefront, Roadmap, About, Contact and CTA.
- Hero: “From WhatsApp Seller. To Real Business.”
- Product/dashboard mockup.
- Workflow/problem sections.
- Feature/tool cards.
- Storefront preview.
- Customer-memory and business-signal UI.
- Shopify comparison section.
- Future hardware/POS/AI roadmap section.
- Waitlist/contact form and WhatsApp CTA.
- Footer and partner/logo marquee.

## Weaknesses found
- Too much future-company positioning versus present product value.
- Technical/internal vocabulary was exposed to merchants: “Merchant Intelligence Graph” and “Commerce Data Layer”.
- Homepage spent attention on a Shopify comparison instead of proving Stackra.
- Future hardware and roadmap material diluted the primary conversion story.
- Static HTML made a multi-page accessible product marketing system harder to maintain.
- Copy, UI data and design tokens were embedded directly in page markup.
- Desktop-first visual density did not provide a systematic mobile-first architecture.
- No robust light/dark theme system.
- No typed content source, shared component primitives, product UI component system, or design QA route.
- No formal SEO metadata layer, sitemap/robots generation, JSON-LD system, security headers, or automated accessibility/performance workflow.
- Existing partner/logo marquee could imply relationships that were not established in the source.
- Existing numeric claims are not automatically treated as verified marketing proof.

## Brand extraction
- Brand: Stackra.
- Existing visual anchor: restrained Stackra green around `#3FAE7C`.
- Existing dark direction: near-black surfaces, hairline borders, white/off-white type.
- Existing display face: Space Grotesk; this rebuild moves to Geist for production typography per the master brief.
- Tone: direct, practical, ambitious, merchant-first.

## Benchmark findings
- Shopify currently emphasizes selling across channels and a central command-center story; its current Nigeria homepage also surfaces concrete commerce capabilities including payments, shipping, customers, retail, inventory and catalog. citeturn863959search0turn863959search4
- Linear leads with a narrow product promise and then exposes product areas such as intake, planning, AI, insights, mobile and integrations, which supports a progressive-disclosure approach for Stackra. citeturn863959search1turn863959search7
- The current Stackra rebuild therefore keeps the merchant outcome and product UI up front, while moving speculative/internal concepts out of the homepage.

## Imaging research
Selected free merchant imagery sources include Pexels pages featuring Abuja/Nigerian shopkeepers and vendors. These are appropriate for the requested African-merchant art direction. The runtime preview uses their CDN URLs because this agent environment cannot download binary image assets into the Git repository; self-hosting remains a production handoff action. citeturn791961search0turn791961search1turn791961search16
