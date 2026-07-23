"use client";

import { motion } from "framer-motion";

/**
 * Stylized dashboard mockup — an abstract representation of the product UI,
 * not a real screenshot (none were available to embed). Swap the contents
 * of the `.aspect-[16/9]` frame below for actual product screenshots
 * (via next/image) before shipping to production.
 */
export function ProductScreenshot() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-2xl glass-strong shadow-glow border border-black/5 dark:border-white/10 overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-border dark:border-surface-border-dark">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-4 text-xs text-ink-muted dark:text-ink-muted-dark font-mono">
            bizkhata.app/dashboard
          </span>
        </div>

        {/* Abstract dashboard body */}
        <div className="aspect-[16/9] bg-surface-card dark:bg-surface-card-dark p-6 flex gap-4">
          <div className="hidden sm:flex flex-col gap-2 w-32 shrink-0">
            {["Dashboard", "Invoices", "Inventory", "Reports", "Banking"].map((label, i) => (
              <div
                key={label}
                className={`h-8 rounded-lg flex items-center px-3 text-[10px] font-medium ${
                  i === 0
                    ? "bg-brand-gradient text-white"
                    : "bg-black/5 dark:bg-white/5 text-ink-muted dark:text-ink-muted-dark"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-black/5 dark:bg-white/5 p-3">
                  <div className="w-10 h-2 rounded bg-brand-violet/40 mb-2" />
                  <div className="w-16 h-3 rounded bg-ink/20 dark:bg-white/20" />
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-xl bg-black/5 dark:bg-white/5 p-4 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-brand-gradient"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div
        className="absolute -inset-x-10 -bottom-10 h-32 bg-brand-gradient opacity-20 blur-3xl -z-10"
        aria-hidden="true"
      />
    </div>
  );
}
