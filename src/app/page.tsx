import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustedCompanies } from "@/components/trusted-companies";
import { SectionHeader } from "@/components/section-header";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { AnimatedStats } from "@/components/animated-stat";
import {
  CORE_FEATURES,
  PRICING_TIERS,
  TESTIMONIALS,
  FAQS,
  STATS,
} from "@/content/data";

export const metadata: Metadata = {
  title: "Modern Accounting Software for Indian Businesses",
  description:
    "GST Billing, Invoicing, Inventory, Banking, Expenses and AI-powered Accounting in one platform. Built for Indian businesses.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page">
        <TrustedCompanies />
      </section>

      <section className="container-page py-20 md:py-28">
        <AnimatedStats stats={STATS} />
      </section>

      <section id="features" className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="Everything in one place"
          title="Built for how Indian businesses actually work"
          description="From GST-compliant invoicing to AI-assisted bookkeeping — Ledgerio replaces a stack of disconnected tools with one platform."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface-card dark:bg-surface-card-dark/40">
        <div className="container-page">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Start free-to-try on Starter, scale up when your business needs more."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_TIERS.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="Testimonials"
          title="Businesses run their books on Ledgerio"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-16">
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <CtaBanner />
      </section>
    </>
  );
}
