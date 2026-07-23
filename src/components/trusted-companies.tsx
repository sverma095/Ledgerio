"use client";

import { motion } from "framer-motion";
import { TRUSTED_BUSINESSES } from "@/content/data";

export function TrustedCompanies() {
  return (
    <div className="py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dark mb-8">
        Trusted by growing businesses across India
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
      >
        {TRUSTED_BUSINESSES.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-tight text-ink-muted/70 dark:text-ink-muted-dark/70 grayscale hover:grayscale-0 transition"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
