import type { MetadataRoute } from "next";

// Placeholder domain — update once the site is deployed
const SITE_URL = "https://suwetha-portfolio.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
