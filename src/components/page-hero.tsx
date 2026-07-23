"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-mesh-dark opacity-0 dark:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-brand-gradient-soft opacity-100 dark:opacity-0"
        aria-hidden="true"
      />
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-violet mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink dark:text-ink-dark text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-ink-muted dark:text-ink-muted-dark text-balance">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
