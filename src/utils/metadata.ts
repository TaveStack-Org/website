import { Metadata } from "next";

export const generateMetadata = ({
    title = `TaveStack | Smart insights, smarter workflow`,
    description = `AI-powered productivity assistant for transcribing, summarizing, and extracting tasks, tailored for African markets.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/TaveStack-Icon-Mark-_White-no-BG_.svg"
        },
        {
            rel: "icon",
            type: "image/svg+xml",
            url: "/icons/TaveStack-Icon-Mark-_White-no-BG_.svg"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/images/temp/TaveStack Icon Mark (Black no BG).png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
