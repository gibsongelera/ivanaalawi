# Ivana Alawi — Tribute & Portfolio Site

A modern, responsive tribute site for Filipina actress, vlogger, and Ivana Skin
founder Ivana Alawi. Built with Next.js (App Router), Tailwind CSS v4, and
Framer Motion.

## Features

- **Hero** with soft blush/gold palette, Playfair Display headings, floating
  butterfly motifs, and a golden call-to-action.
- **Self-updating YouTube feed** — pulls the latest 4 vlogs from Ivana's
  channel (`UCypeLkg3Ne5-LIyiB41b1GQ`) via the YouTube Data API v3. Cached and
  revalidated hourly by Next.js.
- **Live Instagram section** — pluggable SnapWidget / Elfsight embed with a
  beautiful fallback grid when no widget URL is configured.
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

## Deploy

Push the repository to GitHub and import into
[Vercel](https://vercel.com/new). Set `YOUTUBE_API_KEY` (and optionally
`NEXT_PUBLIC_INSTAGRAM_WIDGET_URL`) in the project's environment variables.
Because the feed is a server component with `revalidate: 3600`, the live site
automatically refreshes as Ivana posts new vlogs.

## Disclaimer

This is an unofficial fan tribute site and is not affiliated with Ivana
Alawi's official management or Ivana Skin.
