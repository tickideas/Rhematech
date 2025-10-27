import type { MetadataRoute } from "next";

const baseUrl = "https://www.rhematechpj.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}
