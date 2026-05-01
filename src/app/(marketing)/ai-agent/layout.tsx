import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "TAVE — Your AI Agent Inside TaveStack OS",
    description:
        "TAVE is the AI Agent embedded inside TaveStack OS. It reads, writes, and executes across every business module you have deployed — Finance, HR, CRM, Supply Chain, and more.",
    path: "/ai-agent",
    keywords: [
        "AI Agent for business",
        "AI ERP agent",
        "business AI assistant",
        "AI automation software",
        "TAVE AI",
        "autonomous business agent",
    ],
});

export default function AiAgentLayout({ children }: { children: React.ReactNode }) {
    return children;
}
