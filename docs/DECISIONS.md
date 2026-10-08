# Stackra Landing Decisions

## 2026-10-08
1. Rebuild from the fresh `stackra-homepage-update-20261007` branch only. No existing feature branch is reused.
2. Migrate from the static HTML baseline to Next.js App Router + TypeScript strict because the baseline is not a framework application and the brief explicitly requires a production multi-page architecture when that is the case. Next.js 16.4 is the current stable release as of 2026-10-06. citeturn942094search8
3. Use Tailwind CSS 4.3 with CSS variables for the token layer; Tailwind's current release is 4.3. citeturn942094search7
4. Use Motion 14 for interaction/motion; the current Motion changelog shows 14.0.0 released on 2026-10-02. citeturn863959search2
5. Use Lucide React 1.52.0 for one consistent icon family. citeturn687207search1
6. Use Geist + Geist Mono via `next/font`, plus no additional serif family. This keeps the typographic system within the three-family limit while avoiding dependence on remote font requests.
7. Retain Stackra's existing green hue as the primary brand anchor, but rebalance it so most surfaces remain neutral.
8. Default theme follows system preference. User can switch Light, Dark or System and the choice is persisted.
9. Do not publish unverified customer logos, awards, testimonials, statistics, pricing or legal claims.
10. Proof strip, metrics, merchant stories, and ecosystem logo grid are data-driven modules and render only when verified source data exists. This prevents invented social proof.
11. Public pricing remains intentionally non-numeric until owner-supplied pricing is available.
12. Privacy and Terms routes exist as navigational shells, but no legal language is invented. Owner-supplied legal copy is required before public launch.
13. Hero imagery uses free Pexels merchant photography for the preview. Because binary self-hosting is unavailable in this runtime, the preview references the source CDN and ASSETS.md documents the production swap.
