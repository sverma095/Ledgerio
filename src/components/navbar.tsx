"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-card dark:shadow-card-dark" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex items-center justify-between h-16 md:h-18"
      >
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <Image src="/logo-icon.png" alt="" width={300} height={340} priority className="h-8 w-auto" />
          <span className="font-bold text-lg tracking-tight text-ink dark:text-ink-dark">
            {SITE.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={SITE.loginUrl}
            className="text-sm font-medium text-ink dark:text-ink-dark px-4 py-2 hover:text-brand-violet transition-colors"
          >
            Login
          </Link>
          <Link href={SITE.signupUrl} className="btn-primary text-sm !px-5 !py-2.5">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-ink dark:text-ink-dark"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass-strong border-t border-surface-border dark:border-surface-border-dark overflow-hidden"
          >
            <div className="container-page py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-ink dark:text-ink-dark border-b border-surface-border dark:border-surface-border-dark last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-5">
                <Link
                  href={SITE.loginUrl}
                  className="flex-1 text-center btn-secondary text-sm"
                >
                  Login
                </Link>
                <Link href={SITE.signupUrl} className="flex-1 text-center btn-primary text-sm">
                  Get Started
                </Link>
              </div>
              <div className="mt-4 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
