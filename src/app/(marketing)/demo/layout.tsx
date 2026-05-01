import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Book a Demo — See TaveStack OS in 30 Minutes",
    description:
        "Watch a live walkthrough of the TaveStack OS workspace, see TAVE complete a real multi-module task, and tour the modules most relevant to your industry. No sales pressure.",
    path: "/demo",
    keywords: ["TaveStack demo", "Business OS demo", "AI agent demo", "ERP demo Africa"],
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
