import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Apps Marketplace — Deploy ERP & Productivity Modules",
    description:
        "Browse and deploy native business apps inside TaveStack OS. Finance, HR, CRM, Supply Chain, Projects, Analytics, Communications and Compliance — pay only for what you deploy.",
    path: "/apps",
    keywords: [
        "ERP app marketplace",
        "modular ERP",
        "business apps Nigeria",
        "SaaS apps Africa",
        "ERP modules",
        "TaveStack Apps",
    ],
});

export default function AppsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
