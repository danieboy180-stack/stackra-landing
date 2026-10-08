# Stackra Landing

Production-oriented Stackra marketing site built on Next.js App Router, TypeScript strict, Tailwind CSS 4.3 and Motion 14.

## Run
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run test:e2e`
- `npm run test:a11y`
- `npm run check:placeholders`
- `npx lhci autorun`

## Content editing
Marketing copy lives in `content/site.ts`. Image metadata lives in `content/images.ts`. Product UI data and components live in `components/product-ui/`.

## Routes
Home, Product, Pricing, About, Contact, Privacy, Terms, Design QA, plus custom 404/500 handling.

## Environment
`STACKRA_CONTACT_WEBHOOK_URL` is optional for the preview. When configured, the contact API posts validated submissions to that private webhook. Keep all secrets server-side.

## Production handoff
- Replace the preview Pexels CDN image sources with downloaded, optimized local AVIF/WebP assets and update ASSETS.md.
- Replace the Privacy and Terms route notices with owner-supplied legal text.
- Add verified pricing, customer stories, metrics and integration logos only when source data is available.
- Keep production deployment attached to `main`; this branch is preview-only.
