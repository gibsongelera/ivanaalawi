"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Product = {
  name: string;
  tagline: string;
  price: string;
  gradient: string;
  href: string;
  image: string;
};

// NOTE: Product images below are royalty-safe Unsplash placeholders chosen for a
// pink / gold / clean-skincare aesthetic. They stand in visually until the
// official Ivana Skin product photography can be added (with proper licensing
// or by hosting the files locally under /public/images/products/).
const PRODUCTS: Product[] = [
  {
    name: "Rejuvenating Glow Kit",
    tagline: "The signature 3-step glass-skin ritual.",
    price: "₱1,299",
    gradient: "from-blush via-white to-gold-soft/60",
    href: "https://ivanaskin.com/",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Ivana Glow Serum",
    tagline: "Vitamin C + Niacinamide for that lit-from-within glow.",
    price: "₱699",
    gradient: "from-pearl via-white to-blush",
    href: "https://ivanaskin.com/",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Butterfly Lip Tint",
    tagline: "A soft blush pout that stays all day.",
    price: "₱299",
    gradient: "from-blush-soft via-blush to-blush-deep/70",
    href: "https://ivanaskin.com/",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Golden Hour Sunscreen",
    tagline: "SPF 50+ PA++++ · Zero white cast, all glow.",
    price: "₱499",
    gradient: "from-gold-soft/60 via-white to-blush",
    href: "https://ivanaskin.com/",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Silk Body Butter",
    tagline: "Cocoa + Shea softness with a whisper of vanilla.",
    price: "₱399",
    gradient: "from-pearl via-blush-soft to-white",
    href: "https://ivanaskin.com/",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  },
];

export function IvanaSkinShowcase() {
  return (
    <section id="skin" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-section-soft" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Ivana Skin"
          title={
            <>
              The <span className="text-gradient-gold">glow ritual</span>,
              bottled.
            </>
          }
          description="Clean formulas, glass-skin results. Explore Ivana's own skincare line — trusted by millions across the Philippines."
        />

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-1 pr-6 no-scrollbar md:mt-16">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="card-glow shrink-0 snap-start basis-[75%] p-5 sm:basis-[45%] md:basis-[32%] lg:basis-[24%]"
            >
              <div
                className={`relative mb-5 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_55%)]" />
                <Image
                  src={p.image}
                  alt={`${p.name} — product image`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 32vw, 70vw"
                  className="object-cover mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gold-deep backdrop-blur">
                  Ivana Skin
                </div>
              </div>

              <h3 className="font-serif text-xl text-ink">{p.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {p.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium text-gold-deep">{p.price}</span>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-widest text-ink/70 transition-colors hover:text-gold-deep"
                >
                  Shop →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://ivanaskin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Shop Official Store
          </Link>
          <Link
            href="https://shopee.ph/ivanaskin_official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Shopee
          </Link>
          <Link
            href="https://www.lazada.com.ph/shop/ivana-skin/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Lazada
          </Link>
        </div>
      </div>
    </section>
  );
}
