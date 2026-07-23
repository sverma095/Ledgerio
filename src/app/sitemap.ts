import { MetadataRoute } from "next";

export const dynamic = "force-static";

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
      url: "https://ledgerio.in/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://ledgerio.in/contact",
      lastModified: new Date(),
    },
  ];
}
