# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Build static export to /out
npm run start    # Serve built output
npm run lint     # Run Next.js ESLint
```

To deploy to Firebase Hosting after building:
```bash
firebase deploy
```

There is no test framework configured.

## Architecture

This is the **Formula Slug** (UC Santa Cruz FSAE Electric team) website — a Next.js 15 app using the App Router, TypeScript, and Tailwind CSS v4.

**Static export**: `next.config.ts` sets `output: "export"`, producing a static site in `/out/` deployed to Firebase Hosting. This means no server-side features (no API routes, no SSR). Images use `unoptimized: true`. Firebase rewrites map URLs to `.html` files.

**Pages** (`src/app/`):
- `/` — Home: hero with background video, team section panels (Mechanical/Electrical/Software/Business), About/History, New Member Timeline & FAQ
- `/team` — Subteam cards with lead photos and blurbs; supports `?scrollTo=<section>` query param for anchor navigation (handled by `ScrollToSection.tsx`)
- `/sponsors` — Sponsor tiers (Gold/Silver/Bronze/Special Thanks) defined as inline data in the page file
- `/become-sponsor` — Sponsorship inquiry page
- `/photos` — Photo gallery with auto-scroll on idle
- `/contact` — Contact form and social links

`src/app/team_old/` is legacy code, kept for reference but not linked.
`src/history/page.tsx` is orphaned (lives outside `src/app/`, so it's not routed).

**Shared components** (`src/components/`):
- `Navbar` — Fixed header with hamburger on mobile/scroll, slide-fill hover animation on desktop
- `Footer` — Shared footer
- `ShimmerTitle` — Animated yellow→blue→white diagonal shimmer on page titles (runs once on mount)
- `FAQItem` — Collapsible FAQ accordion
- `BecomeSponsorButton`, `PopupContactForm` — Sponsor CTA with modal

**Color system**: All brand colors live in `src/config/colors.ts` and should be imported from there rather than hardcoded. Key brand colors: `colors.slugYellow` (`#f1ea2d`), `colors.electricBlue` (`#49b3e6`). CSS custom properties are set inline on page roots.

**Static assets** (`public/`):
- `photos/` — Team/car photos used by gallery and page backgrounds
- `assets/` — Logo and icon files (SVG/PNG)
- `sponsors/` — Sponsor logo images
- `leaders/` — Team lead headshots
- `videos/` — Background video (`FSDynamicWallpaper.mp4`)
- `scandia-bold-italic.otf`, `scandia.otf` — Custom Scandia font used in nav and buttons

**Client components**: Any component using React state/effects needs `"use client"` at the top. Since this is a static export, all interactive logic runs client-side.

**Sponsor data** is maintained directly in `src/app/sponsors/page.tsx` as a plain object — add/remove sponsors there.

**Team data** (subteam blurbs, lead names/photos) is maintained inline in `src/app/team/page.tsx`. Lead photos reference filenames in `public/leaders/`.
