import { PageHero } from "@/components/page-hero";
import { FeatureCard } from "@/components/feature-card";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site-config";
import type { Feature } from "@/content/data";

export function FeatureDetailPage({
  pageName,
  path,
  eyebrow,
  title,
  description,
  features,
}: {
  pageName: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url },
          { name: pageName, url: `${SITE.url}${path}` },
        ]}
      />
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="container-page pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <CtaBanner />
      </section>
    </>
  );
}
