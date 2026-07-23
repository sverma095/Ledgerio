import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeatureCard } from "@/components/feature-card";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site-config";
import {
  CORE_FEATURES,
  GST_FEATURES,
  INVENTORY_FEATURES,
  AI_FEATURES,
  REPORTS_FEATURES,
} from "@/content/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Ledgerio's full feature set: GST billing, inventory, banking, AI accounting, and real-time reports.",
  alternates: { canonical: "/features" },
};

const CATEGORIES = [
  { title: "GST Compliance", features: GST_FEATURES },
  { title: "Inventory", features: INVENTORY_FEATURES },
  { title: "AI Accounting", features: AI_FEATURES },
  { title: "Reports", features: REPORTS_FEATURES },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Features", url: `${SITE.url}/features` }]} />
      <PageHero
        eyebrow="Features"
        title="Every tool your business needs to run its books"
        description="One platform for billing, inventory, banking, and reporting — with AI woven in throughout."
      />

      <section className="container-page pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.title} className="container-page py-16 border-t border-surface-border dark:border-surface-border-dark">
          <h2 className="text-2xl font-bold tracking-tight text-ink dark:text-ink-dark mb-8">
            {cat.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cat.features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </section>
      ))}

      <section className="container-page py-20">
        <CtaBanner />
      </section>
    </>
  );
}
