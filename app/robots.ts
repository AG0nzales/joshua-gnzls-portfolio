import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/wha2cook", "/outfit-recommender", "/cnltk", "/aweqfy", "/ai-projects", "/interfaces", "/chatpdf", "/contextquiz", "/ideas", "/cv"],
      disallow: ["/error"],
    },
    sitemap: "https://joshua-gnzls.vercel.app/sitemap.xml",
  };
}
