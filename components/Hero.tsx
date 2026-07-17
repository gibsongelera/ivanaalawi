"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Butterfly } from "./Butterfly";

const PORTRAIT_SRC =
  "https://assets-starmagic.abs-cbn.com/wp-content/uploads/2022/03/25090613/ivp.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-hero-glow pt-24"
    >
      {/* floating butterflies */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[22%] hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Butterfly size={44} className="opacity-70" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[35%] hidden md:block"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <Butterfly size={36} className="opacity-60" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] left-[14%] hidden md:block"
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Butterfly size={28} className="opacity-50" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-deep backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Actress · Vlogger · Founder
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-5xl leading-[1.05] text-ink md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-gold">Ivana Alawi</span>
            <span className="block text-ink/85">A little glow, a lot of heart.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Filipina actress, vlogger, and founder of{" "}
            <span className="font-medium text-ink">Ivana Skin</span>. From glam
            sets to street food adventures — welcome to my little corner of the
            internet.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="#vlogs" className="btn-gold">
              Watch Latest Vlog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 5l11 7-11 7V5z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#skin" className="btn-outline-gold">
              Explore Ivana Skin
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10 flex items-center gap-8 text-sm text-muted"
          >
            <div>
              <div className="font-serif text-2xl text-ink">18M+</div>
              <div className="uppercase tracking-widest text-xs">YouTube fam</div>
            </div>
            <div className="h-8 w-px bg-blush-deep/40" />
            <div>
              <div className="font-serif text-2xl text-ink">20M+</div>
              <div className="uppercase tracking-widest text-xs">Instagram</div>
            </div>
            <div className="h-8 w-px bg-blush-deep/40" />
            <div>
              <div className="font-serif text-2xl text-ink">#1</div>
              <div className="uppercase tracking-widest text-xs">PH Beauty</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blush via-white to-gold-soft/60 blur-2xl opacity-70" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-blush-soft via-white to-pearl shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]">
              <Image
                src={PORTRAIT_SRC}
                alt="Ivana Alawi portrait"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.18),transparent_60%)] mix-blend-soft-light" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-2 right-4"
                animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Butterfly size={40} className="opacity-80 drop-shadow" />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 backdrop-blur">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold-deep">
                    Now streaming
                  </div>
                  <div className="text-sm font-medium text-ink">
                    Latest vlog on YouTube
                  </div>
                </div>
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-white grid place-items-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5l11 7-11 7V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* soft bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory" />
    </section>
  );
}
