import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tavestack.com";

export interface PageMetaInput {
    title: string;
    description: string;
    /** Path relative to site root, e.g. "/pricing". Used for canonical + OG URL. */
    path?: string;
    /** Optional override OG image path (relative to siteUrl). Defaults to root /opengraph-image. */
    image?: string;
    keywords?: string[];
    noIndex?: boolean;
}

/**
 * Builds a Metadata object for a single page. Pass title/description from the
 * manuscript or a tight per-page fallback. The root layout already provides
 * site-wide defaults — this helper just extends + overrides cleanly.
 */
export const generateMetadata = ({
    title,
    description,
    path = "/",
    image,
    keywords,
    noIndex = false,
}: PageMetaInput): Metadata => {
    const url = new URL(path, SITE_URL).toString();
    const ogImage = image ? new URL(image, SITE_URL).toString() : undefined;

    return {
        title,
        description,
        keywords,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE.name,
            type: "website",
            ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(ogImage ? { images: [ogImage] } : {}),
        },
        ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    };
};
