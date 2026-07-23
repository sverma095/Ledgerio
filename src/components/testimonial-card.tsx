"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/data";

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-6 glass shadow-card dark:shadow-card-dark flex flex-col h-full"
    >
      <Quote className="w-6 h-6 text-brand-violet/60 mb-3" aria-hidden="true" />
      <blockquote className="text-sm text-ink dark:text-ink-dark leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-semibold shrink-0">
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-ink dark:text-ink-dark">{testimonial.name}</div>
          <div className="text-xs text-ink-muted dark:text-ink-muted-dark">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}
