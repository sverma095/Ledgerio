"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberately setting state on mount: this defers client-only rendering
    // until after hydration so the theme icon can't mismatch between server
    // and client output. This is the standard hydration-safe mount pattern,
    // not a derivable-during-render value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("ledgerio-theme", next ? "dark" : "light");
  };

  // Avoid rendering an icon that could mismatch the server-rendered markup
  // before we know the real theme (prevents hydration flash).
  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-full text-ink dark:text-ink-dark hover:bg-surface-card dark:hover:bg-white/5 transition-colors cursor-pointer"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
