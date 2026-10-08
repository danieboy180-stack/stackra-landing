import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/product", "/pricing", "/about", "/contact"];
  return routes.map((route) => ({
    url: `https://stackra.dev${route}`,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
