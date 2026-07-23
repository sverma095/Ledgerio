import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AnimatedStats } from "@/components/animated-stat";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site-config";
import { STATS } from "@/content/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Why we built Ledgerio — modern, GST-compliant accounting software for Indian businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "About", url: `${SITE.url}/about` }]} />
      <PageHero
        eyebrow="About Ledgerio"
        title="Accounting software built for how Indian businesses actually operate"
        description="We started Ledgerio because GST compliance shouldn't require three different tools and a weekend before every filing deadline."
      />

      <section className="container-page pb-20">
        <div className="max-w-2xl mx-auto space-y-6 text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          <p>
            Most accounting software available to Indian businesses was either built for a
            different tax regime and awkwardly retrofitted for GST, or built for enterprises
            with budgets and IT teams that small businesses simply don&apos;t have.
          </p>
          <p>
            Ledgerio was built from the ground up around Indian GST — correct CGST/SGST/IGST
            handling, e-Invoicing, HSN-wise reporting — and paired with the kind of AI-assisted
            workflows that let a two-person business run its books without hiring a full-time
            accountant on day one.
          </p>
          <p>
            Today, thousands of businesses — from single-location retailers to multi-warehouse
            distributors — run their invoicing, inventory, and reporting on Ledgerio.
          </p>
        </div>
      </section>

      <section className="container-page pb-20 border-t border-surface-border dark:border-surface-border-dark pt-20">
        <AnimatedStats stats={STATS} />
      </section>

      <section className="container-page pb-20">
        <CtaBanner
          title="Come run your books with us"
          description="Get started in minutes — no credit card required for the Starter plan."
        />
      </section>
    </>
  );
}
