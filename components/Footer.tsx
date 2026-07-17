import * as React from "react";
import Link from "next/link";
import { Butterfly } from "./Butterfly";

const SOCIALS: {
  name: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@IvanaAlawi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ivanaalawi/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ivanaalawi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3a5 5 0 0 0 4.5 4.5v3.1a8.1 8.1 0 0 1-4.5-1.4v6.9a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.2a2.8 2.8 0 1 0 2 2.6V3h3z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ivanaalawiii/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3.1h2.5V21h3z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com/ivanaalawi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 3H22l-7.6 8.7L23 21h-6.8l-5.3-6.6L4.7 21H1.6l8.1-9.3L1 3h7l4.8 6 6.1-6zm-2.4 16h1.8L7.7 5H5.7l10.8 14z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-white pt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="divider-gold" />

        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Butterfly size={28} />
              <span className="font-serif text-2xl">
                Ivana <span className="text-gradient-gold">Alawi</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              A tribute site celebrating one of the Philippines&apos; brightest
              stars — actress, vlogger, and founder of Ivana Skin. Not
              affiliated with Ivana&apos;s official management.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-blush-deep/40 bg-blush-soft/60 text-ink/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:text-gold-deep hover:shadow-[0_6px_20px_-8px_rgba(212,175,55,0.5)]"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif text-lg text-ink">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link href="#home" className="hover:text-gold-deep">Home</Link></li>
              <li><Link href="#vlogs" className="hover:text-gold-deep">Latest Vlogs</Link></li>
              <li><Link href="#instagram" className="hover:text-gold-deep">Instagram</Link></li>
              <li><Link href="#skin" className="hover:text-gold-deep">Ivana Skin</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-serif text-lg text-ink">For business</h4>
            <p className="mt-4 text-sm text-muted">
              For collaborations and inquiries, reach out to Ivana&apos;s team:
            </p>
            <Link
              href="mailto:business.ivanaalawi@gmail.com"
              className="mt-3 inline-block font-medium text-gold-deep hover:underline"
            >
              business.ivanaalawi@gmail.com
            </Link>
          </div>
        </div>

        <div className="divider-gold" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} Ivana Alawi tribute site. Made with
            care.
          </p>
          <p className="flex items-center gap-2">
            <Butterfly size={14} />
            Glow, always.
          </p>
          <p className="flex items-center gap-2">Developed by: <Link href="https://gibsongelera-io-rose.vercel.app/" className="hover:text-gold-deep">Gibson Gelera</Link></p>
        </div>
      </div>
    </footer>
  );
}
