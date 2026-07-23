"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl glass p-8 text-center"
      >
        <CheckCircle2 className="w-10 h-10 text-brand-emerald mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">Message sent</h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl glass p-6 md:p-8 space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-surface-border dark:border-surface-border-dark bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-surface-border dark:border-surface-border-dark bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-xl border border-surface-border dark:border-surface-border-dark bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark outline-none focus-visible:ring-2 focus-visible:ring-brand-violet"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-ink-dark mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-surface-border dark:border-surface-border-dark bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark outline-none focus-visible:ring-2 focus-visible:ring-brand-violet resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
