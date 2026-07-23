import type { Metadata } from "next";
import { FeatureDetailPage } from "@/components/feature-detail-page";
import { REPORTS_FEATURES } from "@/content/data";

export const metadata: Metadata = {
  title: "Financial Reports",
  description:
    "Real-time P&L, balance sheet, and cash flow reports — always current, always one click from export.",
  alternates: { canonical: "/reports" },
};

export default function ReportsPage() {
  return (
    <FeatureDetailPage
      pageName="Reports"
      path="/reports"
      eyebrow="Reports"
      title="Reports that are always up to date"
      description="No more waiting for month-end. Every report reflects your books in real time."
      features={REPORTS_FEATURES}
    />
  );
}
