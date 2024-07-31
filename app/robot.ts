import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about"],
      disallow: [],
    },
    sitemap: "http://joshua-gnzls.vercel.app/sitemap.xml",
  };
}
