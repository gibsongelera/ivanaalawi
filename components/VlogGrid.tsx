import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  fetchLatestVlogs,
  formatPublishedAt,
  formatViewCount,
} from "@/lib/youtube";
import { SectionHeader } from "./SectionHeader";

export async function VlogGrid() {
  const vlogs = await fetchLatestVlogs(4);

  return (
    <section id="vlogs" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Latest Vlogs"
          title={
            <>
              Fresh from{" "}
              <span className="text-gradient-gold">Ivana&apos;s</span> channel
            </>
          }
          description="Auto-updated every hour straight from YouTube. Street food, family days, glam BTS — dive in."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {vlogs.map((v) => (
            <article
              key={v.id}
              className="card-glow group flex flex-col overflow-hidden"
            >
              <Link
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden rounded-t-[1.25rem]"
              >
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-gold-deep shadow-glow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5l11 7-11 7V5z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-gold-deep backdrop-blur">
                  {formatPublishedAt(v.publishedAt)}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg leading-snug text-ink line-clamp-2">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                  {formatViewCount(v.viewCount)}
                </p>

                <div className="mt-5 flex-1" />

                <Link
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-sm"
                >
                  Watch Vlog
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.youtube.com/@IvanaAlawi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Visit full channel
          </Link>
        </div>
      </div>
    </section>
  );
}
