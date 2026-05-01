import type { Metadata, Viewport } from "next";
import { SITE } from "@/constants/site";
import { SITE_URL } from "@/utils/metadata";

const DEFAULT_TITLE = "TaveStack — The Business Operating System Powered by AI";
const DEFAULT_DESCRIPTION =
    "TaveStack is the world's first AI-native Business OS. Deploy ERP, productivity, finance, HR, and CRM modules — and let TAVE, your embedded AI Agent, run them end-to-end.";

const DEFAULT_KEYWORDS = [
    "Business Operating System",
    "AI Agent for business",
    "AI-native ERP",
    "ERP software Africa",
    "ERP software Nigeria",
    "modular ERP",
    "AI productivity platform",
    "TAVE AI agent",
    "TaveStack",
    "unified business platform",
    "cloud ERP",
    "HR software Africa",
    "CRM software Africa",
    "AI accounting software",
    "African business technology",
];

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: `%s · ${SITE.name}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE_URL }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "Business Software",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: SITE.name,
        locale: "en_US",
        url: SITE_URL,
        title: DEFAULT_TITLE,
        description:
            "One platform. Every business function. An AI Agent that runs it all. Free OS access — pay only for the modules you deploy.",
    },
    twitter: {
        card: "summary_large_image",
        site: "@tavestack",
        creator: "@tavestack",
        title: DEFAULT_TITLE,
        description:
            "Deploy ERP, finance, HR, CRM and more inside one OS. TAVE executes across every module — natural-language commands, real business actions.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: [
            { url: "/icons/favicon.ico", sizes: "any" },
            { url: "/icons/icon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/icons/favicon.ico",
        apple: "/icons/TaveStack-Icon-Mark-_White-no-BG_.svg",
    },
    manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0d0d12" },
    ],
    colorScheme: "light dark",
};
