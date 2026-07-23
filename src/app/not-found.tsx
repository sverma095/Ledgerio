import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-brand-violet mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-ink-dark">
          Page not found
        </h1>
        <p className="mt-4 text-ink-muted dark:text-ink-muted-dark">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
