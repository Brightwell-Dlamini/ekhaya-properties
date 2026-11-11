import type { MetadataRoute } from "next";
import { getAllPropertyIds } from "@/data/properties";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ekhaya-properties.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyUrls = getAllPropertyIds().map((id) => ({
    url: `${siteUrl}/properties/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...propertyUrls,
  ];
}
