import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

const PAGES = [
  { path: "", priority: 1.0 },
  { path: "/features", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/gst-billing", priority: 0.8 },
  { path: "/inventory", priority: 0.8 },
  { path: "/reports", priority: 0.8 },
  { path: "/ai-accounting", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified,
    changeFrequency: page.path === "" ? "weekly" : "monthly",
    priority: page.priority,
  }));
}
