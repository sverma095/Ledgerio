import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeader } from "@/components/section-header";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site-config";
import { PRICING_TIERS, FAQS } from "@/content/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Ledgerio — GST accounting software for Indian businesses of every size.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Pricing", url: `${SITE.url}/pricing` }]} />
      <PageHero
        eyebrow="Pricing"
        title="Plans that grow with your business"
        description="No hidden fees. No per-invoice charges. Just straightforward pricing."
      />

      <section className="container-page pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page py-20 border-t border-surface-border dark:border-surface-border-dark">
        <SectionHeader eyebrow="FAQ" title="Pricing questions, answered" />
        <div className="mt-16">
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      <section className="container-page pb-20">
        <CtaBanner />
      </section>
    </>
  );
}
