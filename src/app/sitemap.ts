import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ledgerio.in",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/features",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/ai-accounting",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/gst-billing",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/inventory",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/reports",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/terms",
      lastModified: new Date(),
    },
  ];
}
