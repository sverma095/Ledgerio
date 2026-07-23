"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-config";
import type { PricingTier } from "@/content/data";

export function PricingCard({ tier, index = 0 }: { tier: PricingTier; index?: number }) {
  const href = tier.ctaLabel === "Contact Sales" ? "/contact" : SITE.signupUrl;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-3xl p-8 flex flex-col",
        tier.highlighted
          ? "bg-ink dark:bg-white text-white dark:text-ink shadow-glow scale-[1.03]"
          : "glass shadow-card dark:shadow-card-dark"
      )}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className={cn("text-lg font-semibold", tier.highlighted ? "" : "text-ink dark:text-ink-dark")}>
        {tier.name}
      </h3>
      <div className="mt-3 flex items-baseline gap-1.5 font-mono">
        <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
        {tier.period && (
          <span className={cn("text-sm", tier.highlighted ? "opacity-70" : "text-ink-muted dark:text-ink-muted-dark")}>
            {tier.period}
          </span>
        )}
      </div>
      <p className={cn("mt-3 text-sm", tier.highlighted ? "opacity-80" : "text-ink-muted dark:text-ink-muted-dark")}>
        {tier.description}
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("w-4 h-4 mt-0.5 shrink-0", tier.highlighted ? "" : "text-brand-emerald")} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={cn(
          "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98]",
          tier.highlighted
            ? "bg-white text-ink dark:bg-ink dark:text-white"
            : "bg-ink text-white dark:bg-white dark:text-ink"
        )}
      >
        {tier.ctaLabel}
      </Link>
    </motion.div>
  );
}
