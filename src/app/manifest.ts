import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SITE.name} — ${SITE.tagline}`,
        short_name: SITE.name,
        description: SITE.description,
        start_url: "/",
        display: "standalone",
        background_color: "#0d0d12",
        theme_color: "#7c3aed",
        orientation: "portrait-primary",
        categories: ["business", "productivity", "finance"],
        icons: [
            {
                src: "/icons/favicon.ico",
                type: "image/x-icon",
                sizes: "any",
                purpose: "any",
            },
            {
                src: "/icons/favicon.ico",
                type: "image/x-icon",
                sizes: "any",
                purpose: "maskable",
            },
        ],
    };
}
