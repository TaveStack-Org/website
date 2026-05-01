import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "The TaveStack OS — The Business Operating System",
    description:
        "TaveStack OS is the unified command center for your entire business. Deploy apps, connect your data, and let your AI Agent run operations across every function.",
    path: "/platform",
    keywords: [
        "Business OS",
        "TaveStack OS",
        "unified ERP platform",
        "AI-native business software",
        "command center for business",
    ],
});

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
    return children;
}
