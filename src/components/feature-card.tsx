"use client";

import { motion } from "framer-motion";
import { ICON_MAP, type Feature } from "@/content/data";

export function FeatureCard({ feature, index = 0 }: { feature: Feature; index?: number }) {
  const Icon = ICON_MAP[feature.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl p-6 glass shadow-card dark:shadow-card-dark transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center mb-4 shadow-glow">
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-base font-semibold text-ink dark:text-ink-dark mb-1.5">
        {feature.title}
      </h3>
      <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
