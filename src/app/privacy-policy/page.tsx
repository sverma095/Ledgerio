import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE.name}'s privacy policy — how we collect, use, and protect your data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: July 2026" />
      <section className="container-page pb-24">
        <div className="max-w-2xl mx-auto space-y-10 text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          <div className="rounded-xl glass p-5 text-xs">
            <strong className="text-ink dark:text-ink-dark">Note:</strong> this is a template
            starting point, not legal advice. Have it reviewed by counsel familiar with the
            Indian Digital Personal Data Protection Act, 2023 and any other applicable
            regulations before publishing.
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">1. Information We Collect</h2>
            <p>
              We collect information you provide directly (such as your name, email, company
              details, and billing information) and information collected automatically through
              your use of {SITE.name} and the {SITE.name} application, such as device and usage data.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">2. How We Use Information</h2>
            <p>
              We use collected information to provide and improve our services, process
              transactions, communicate with you about your account, and comply with legal
              obligations, including tax and accounting recordkeeping requirements.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with service providers who
              help us operate {SITE.name} (such as hosting, email delivery, and payment
              processing), and where required by law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">4. Data Security</h2>
            <p>
              We use industry-standard technical and organizational measures to protect your
              data, including encryption in transit and access controls. No method of
              transmission or storage is 100% secure.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by
              contacting us at {SITE.supportEmail}.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">6. Contact</h2>
            <p>
              Questions about this policy can be directed to {SITE.supportEmail}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
