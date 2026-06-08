import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://brox.sh/sitemap.xml",
    host: "https://brox.sh",
  };
}
