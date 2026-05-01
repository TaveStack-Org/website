import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Pricing — Free OS. Pay Per App.",
    description:
        "The TaveStack OS is free forever. Deploy individual app modules starting from $25/month. No long-term contracts. Cancel anytime. Local currency billing supported.",
    path: "/pricing",
    keywords: [
        "ERP pricing",
        "modular ERP pricing",
        "business software pricing",
        "per-module ERP pricing",
        "free Business OS",
        "TaveStack pricing",
    ],
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
