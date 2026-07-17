"use client";

import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import { SectionHeader } from "./SectionHeader";

const ELFSIGHT_APP_ID = "d6e2a7ee-44e8-4232-97c8-dd21a3358dd4";

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-24 md:py-32">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-ivory via-white to-blush-soft"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Instagram"
          title={
            <>
              Everyday{" "}
              <span className="text-gradient-gold">glow moments</span>
            </>
          }
          description={
            <>
              Live from{" "}
              <Link
                href="https://www.instagram.com/ivanaalawi/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-deep underline decoration-gold/50 underline-offset-4"
              >
                @ivanaalawi
              </Link>{" "}
              — photos, reels, and behind-the-scenes.
            </>
          }
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-blush-deep/30 bg-white p-4 shadow-glow md:mt-16 md:p-6">
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID} min-h-[420px]`}
            data-elfsight-app-lazy
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://www.instagram.com/ivanaalawi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Follow @ivanaalawi
          </Link>
        </div>
      </div>
    </section>
  );
}
