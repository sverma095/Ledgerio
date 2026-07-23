import type { Metadata } from "next";
import { FeatureDetailPage } from "@/components/feature-detail-page";
import { AI_FEATURES } from "@/content/data";

export const metadata: Metadata = {
  title: "AI Accounting",
  description:
    "An AI copilot for your books — ask questions in plain English, catch anomalies, and auto-categorize transactions.",
  alternates: { canonical: "/ai-accounting" },
};

export default function AiAccountingPage() {
  return (
    <FeatureDetailPage
      pageName="AI Accounting"
      path="/ai-accounting"
      eyebrow="AI Accounting"
      title="An AI copilot that actually knows your books"
      description="Ask questions in plain English, catch anomalies before they're a problem, and let routine categorization handle itself."
      features={AI_FEATURES}
    />
  );
}
