import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${SITE.name}'s terms of service.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: July 2026" />
      <section className="container-page pb-24">
        <div className="max-w-2xl mx-auto space-y-10 text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          <div className="rounded-xl glass p-5 text-xs">
            <strong className="text-ink dark:text-ink-dark">Note:</strong> this is a template
            starting point, not legal advice. Have it reviewed by counsel before publishing.
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using {SITE.name} (available at {SITE.appUrl}), you agree to be
              bound by these Terms of Service.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">2. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">3. Subscription &amp; Billing</h2>
            <p>
              Paid plans are billed according to the pricing and terms presented at the time of
              purchase. Fees are non-refundable except where required by law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">4. Acceptable Use</h2>
            <p>
              You agree not to misuse {SITE.name}, including attempting to gain unauthorized
              access to other accounts or interfering with the service&apos;s normal operation.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">5. Data Ownership</h2>
            <p>
              You retain ownership of the business data you enter into {SITE.name}. You may
              export your data at any time.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">6. Limitation of Liability</h2>
            <p>
              {SITE.name} is provided &ldquo;as is&rdquo; without warranties of any kind, to the
              maximum extent permitted by law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">7. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of {SITE.name} after
              changes constitutes acceptance of the updated terms.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink dark:text-ink-dark mb-2">8. Contact</h2>
            <p>Questions about these terms can be directed to {SITE.supportEmail}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
