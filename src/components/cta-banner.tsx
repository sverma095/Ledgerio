"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function CtaBanner({
  title = "Ready to simplify your accounting?",
  description = "Join thousands of Indian businesses running their books on Ledgerio.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-4xl bg-ink dark:bg-white px-8 py-16 md:py-20 text-center"
    >
      <div className="absolute inset-0 bg-mesh-dark dark:opacity-0" aria-hidden="true" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white dark:text-ink text-balance">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/70 dark:text-ink-muted max-w-xl mx-auto text-balance">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={SITE.signupUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink dark:bg-ink dark:text-white px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={SITE.loginUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 dark:border-ink/20 text-white dark:text-ink px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10 dark:hover:bg-ink/5"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
