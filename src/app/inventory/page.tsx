import type { Metadata } from "next";
import { FeatureDetailPage } from "@/components/feature-detail-page";
import { INVENTORY_FEATURES } from "@/content/data";

export const metadata: Metadata = {
  title: "Inventory Management",
  description:
    "Track stock across warehouses, get low-stock alerts, and manage delivery challans — all without leaving your billing flow.",
  alternates: { canonical: "/inventory" },
};

export default function InventoryPage() {
  return (
    <FeatureDetailPage
      pageName="Inventory"
      path="/inventory"
      eyebrow="Inventory"
      title="Stock control that keeps up with your business"
      description="Multi-warehouse tracking, low-stock alerts, and delivery challans — built into your everyday billing flow."
      features={INVENTORY_FEATURES}
    />
  );
}
