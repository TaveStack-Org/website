import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Contact TaveStack",
    description:
        "Talk to TaveStack about deploying the OS, expanding modules, partnership opportunities, or press inquiries. Sales, support, partnerships, and press contacts.",
    path: "/contact",
    keywords: ["Contact TaveStack", "TaveStack sales", "TaveStack support", "TaveStack partnerships"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
