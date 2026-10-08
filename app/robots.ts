import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/design"] }],
    sitemap: "https://stackra.dev/sitemap.xml"
  };
}
