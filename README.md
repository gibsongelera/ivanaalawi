# Ivana Alawi — Tribute & Portfolio Site

**Live site:** [https://ivanaalawi.vercel.app](https://ivanaalawi.vercel.app)

> GitHub Pages (`gibsongelera.github.io/ivanaalawi`) redirects to the live Vercel site.
> This is a Next.js app and must be hosted on Vercel (not plain GitHub Pages).

A modern, responsive tribute site for Filipina actress, vlogger, and Ivana Skin
founder Ivana Alawi. Built with Next.js (App Router), Tailwind CSS v4, and
Framer Motion.

## Features

- **Hero** with soft blush/gold palette, Playfair Display headings, floating
  butterfly motifs, and a golden call-to-action.
- **Self-updating YouTube feed** — pulls the latest 4 vlogs from Ivana's
  channel (`UCypeLkg3Ne5-LIyiB41b1GQ`) via the YouTube Data API v3. Cached and
  revalidated hourly by Next.js.
- **Live Instagram section** — Elfsight embed showing @ivanaalawi posts.
- **Ivana Skin showcase** — horizontal scroll-snap product line with links to
  the official store, Shopee, and Lazada.
- **Sticky glass navbar** and full **social footer**.

## Design tokens

| Token       | Value       |
| ----------- | ----------- |
| Blush pink  | `#FADADD`   |
| Pearl       | `#FDFCF0`   |
| Ivory       | `#FFFDF7`   |
| Champagne gold | `#D4AF37` |
| Ink         | `#2B2027`   |

Fonts: **Playfair Display** (headings) + **Inter** (body).

## Getting started

```bash
npm install
cp .env.example .env.local   # then paste your YouTube API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).



Get a YouTube Data API v3 key from
[Google Cloud Console](https://console.cloud.google.com/apis/library/youtube.googleapis.com).
Restrict the key to the YouTube Data API v3 only.

If `YOUTUBE_API_KEY` is missing or the request fails, the vlog grid
gracefully falls back to placeholder cards.

## Project structure

```
app/
  layout.tsx        # fonts, metadata
  page.tsx          # composes all sections
  globals.css       # Tailwind v4 @theme tokens + utilities
components/
  Navbar.tsx        # sticky glass nav
  Hero.tsx          # full-screen intro
  VlogGrid.tsx      # server component, YouTube data
  InstagramFeed.tsx # widget slot + fallback tiles
  IvanaSkinShowcase.tsx
  Footer.tsx
  SectionHeader.tsx
  Butterfly.tsx     # inline SVG motif
lib/
  youtube.ts        # typed fetch utility
```

## Deploy (Vercel)

The live site runs on [Vercel](https://ivanaalawi.vercel.app). Required environment variables in your Vercel project settings:

| Variable | Value |
| -------- | ----- |
| `YOUTUBE_API_KEY` | Your Google Cloud YouTube Data API v3 key |
| `YOUTUBE_CHANNEL_ID` | `UCypeLkg3Ne5-LIyiB41b1GQ` |

After adding env vars, redeploy from the Vercel dashboard (Deployments → ⋯ → Redeploy).

The vlog feed revalidates every hour (`revalidate: 3600`), so new uploads appear automatically without redeploying.

## Disclaimer

This is an unofficial fan tribute site and is not affiliated with Ivana
Alawi's official management or Ivana Skin.
