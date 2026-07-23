"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Stat } from "@/content/data";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  // Extract a leading numeric portion so values like "12,000+" or "₹840Cr+"
  // or "99.95%" all animate their numeric part while keeping prefixes/suffixes.
  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) {
      // This effect exists to start a requestAnimationFrame loop once the
      // element scrolls into view (an external-system trigger, not derivable
      // during render) — the fallback below just short-circuits when the
      // value has no numeric portion to animate.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    if (!numStr) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numStr.replace(/,/g, ""));
    const hasDecimal = numStr.includes(".");
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = hasDecimal
        ? current.toFixed(2)
        : Math.round(current).toLocaleString("en-IN");
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold tracking-tight text-gradient font-mono">
            <AnimatedNumber value={stat.value} />
          </div>
          <div className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
