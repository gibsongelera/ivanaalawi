---
name: Ivana Alawi Tribute Site
overview: Scaffold a Next.js (App Router) + Tailwind CSS + Framer Motion tribute site for Ivana Alawi with a blush-pink/gold design system, a self-updating YouTube vlog feed, an Instagram embed section, an Ivana Skin showcase, and a social footer.
todos:
  - id: scaffold
    content: Scaffold Next.js app with Tailwind v4, fonts, color tokens, framer-motion
    status: completed
  - id: static-shell
    content: Build Navbar, Hero, Ivana Skin showcase, Footer with animations
    status: completed
  - id: youtube
    content: Add env setup, YouTube fetch utility, and VlogGrid server component
    status: completed
  - id: instagram
    content: Add Instagram embed section with widget slot and fallback
    status: completed
  - id: verify
    content: Assemble page.tsx, run dev server, verify responsive layout and live feed
    status: in_progress
isProject: false
---

# Ivana Alawi Tribute & Portfolio Website

## Goal
Build a responsive single-page site in `c:\xampp\htdocs\ivanaalawi\ivanaalawi` matching the Ivana Skin aesthetic: blush pink `#FADADD`, white `#FFFFFF`, pearl `#FDFCF0`, champagne gold `#D4AF37`, Playfair Display headings + Inter body, rounded-xl/2xl corners, subtle glow effects and butterfly motifs.

## Phase 1 — Scaffold & Design System
- Run `create-next-app` (TypeScript, App Router, Tailwind v4, ESLint) in the current directory.
- Configure the palette in `app/globals.css` via Tailwind v4's `@theme` block (note: Tailwind v4 uses CSS-based config, not `tailwind.config.js`) with tokens like `--color-blush`, `--color-pearl`, `--color-gold`.
- Load `Playfair Display` and `Inter` with `next/font/google` in `app/layout.tsx`, exposed as `font-serif` / `font-sans`. Add site metadata (title, description, OG tags).
- Install `framer-motion`.
- Add reusable glow/gradient utility classes (soft radial pink gradients, gold hover ring) and a small SVG butterfly accent component.

## Phase 2 — Static UI Shell (components in `components/`)
- `Navbar.tsx` — sticky, translucent white with blur, gold underline hover on links (Home, Vlogs, Instagram, Ivana Skin, Contact), mobile hamburger menu.
- `Hero.tsx` — full-screen section with a high-quality photo backdrop (royalty-safe placeholder gradient/image initially), Playfair Display greeting, gold CTA button "Watch Latest Vlog" that scrolls to the vlog section; Framer Motion fade/slide-in entrance.
- `IvanaSkinShowcase.tsx` — horizontal scroll-snap row of product cards (Rejuvenating Glow Kit etc. as placeholder cards) with gold "Shop Official Store" links to ivanaskin.com / official Shopee & Lazada stores.
- `Footer.tsx` — social links (YouTube, Instagram, Facebook, TikTok, X/Twitter), business inquiry email, butterfly motif divider.
- Page transitions and scroll-reveal animations via Framer Motion (client components only where animation is needed).

## Phase 3 — Self-Updating YouTube Feed
- `.env.local` (gitignored) with `YOUTUBE_API_KEY=...` — server-only, no `NEXT_PUBLIC_` prefix. Also commit a `.env.example` with a placeholder. You paste the real key in yourself; it stays out of git.
- `lib/youtube.ts` server utility:
  - Call `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCypeLkg3Ne5-LIyiB41b1GQ&order=date&maxResults=4&type=video`.
  - Second call to `videos?part=statistics` with the returned IDs to get view counts (search alone doesn't include them).
  - Typed return, graceful fallback to placeholder cards if the API fails or quota is exhausted.
- `VlogGrid.tsx` — React Server Component with `fetch(..., { next: { revalidate: 3600 } })` so the feed auto-refreshes hourly without redeploys. Responsive grid (1/2/4 columns), each card: thumbnail with hover glow, title clamped to 2 lines (`line-clamp-2`), formatted view count, gold "Watch Vlog" button linking to the video.

## Phase 4 — Instagram Section
- `InstagramFeed.tsx` — section styled to match, with an embed-widget slot (SnapWidget/Elfsight iframe placeholder clearly marked where you paste your widget ID after creating a free widget) plus a fallback: official Instagram post embeds and a gold "Follow @ivanaalawi" button linking to the profile.

## Phase 5 — Assemble & Verify
- Compose all sections in `app/page.tsx` with anchor IDs for nav scrolling.
- Run `npm run dev`, verify in the browser at desktop and mobile widths, confirm the YouTube feed renders live data with your key, fix any issues.
- README updated with setup steps, env var instructions, and Vercel deployment notes (deployment itself is done by you on vercel.com when ready).

## Security note
Your API key was shared in chat — after setup, restrict it in Google Cloud Console (API restriction: YouTube Data API v3 only) or regenerate it, then update `.env.local`.