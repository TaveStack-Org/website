import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/metadata";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/docs/"],
            },
        ],
        sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
        host: SITE_URL,
    };
}
