"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Butterfly } from "./Butterfly";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignClass}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold-deep backdrop-blur ${
          align === "center" ? "" : ""
        }`}
      >
        <Butterfly size={14} />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
