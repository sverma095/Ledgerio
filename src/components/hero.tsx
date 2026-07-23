"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { ProductScreenshot } from "@/components/product-screenshot";

export function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-mesh-dark opacity-0 dark:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-brand-gradient-soft opacity-100 dark:opacity-0"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ink dark:text-ink-dark mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
            Built for Indian GST compliance
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink dark:text-ink-dark text-balance">
            Modern Accounting Software for{" "}
            <span className="text-gradient">Indian Businesses</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark max-w-2xl mx-auto text-balance">
            GST Billing, Invoicing, Inventory, Banking, Expenses and AI-powered
            Accounting in one platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SITE.signupUrl} className="btn-primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={SITE.loginUrl} className="btn-secondary">
              Login
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20"
        >
          <ProductScreenshot />
        </motion.div>
      </div>
    </section>
  );
}
