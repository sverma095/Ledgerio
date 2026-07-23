import type { Metadata } from "next";
import { FeatureDetailPage } from "@/components/feature-detail-page";
import { GST_FEATURES } from "@/content/data";

export const metadata: Metadata = {
  title: "GST Billing Software",
  description:
    "Create GST-compliant invoices with auto tax calculation, e-Invoicing, IRN generation, and GSTR-ready reports.",
  alternates: { canonical: "/gst-billing" },
};

export default function GstBillingPage() {
  return (
    <FeatureDetailPage
      pageName="GST Billing"
      path="/gst-billing"
      eyebrow="GST Billing"
      title="GST-compliant billing, without the guesswork"
      description="CGST, SGST, IGST — calculated correctly every time, with e-Invoicing and GSTR-ready reports built in."
      features={GST_FEATURES}
    />
  );
}
