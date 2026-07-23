import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Ledgerio team — sales, support, or general questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url }, { name: "Contact", url: `${SITE.url}/contact` }]} />
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description={`Questions about pricing, features, or your account? Reach us at ${SITE.supportEmail} or send a message below.`}
      />
      <section className="container-page pb-20">
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
