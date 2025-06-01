export interface PerkItem {
    title: string;
    description: string;
    icon: string;
}

export const PERKS: PerkItem[] = [
    {
        title: "African Accent Recognition",
        description: "Optimized for diverse African accents and dialects.",
        icon: "/icons/perk-one.svg"
    },
    {
        title: "Multilingual Support",
        description: "Transcribe and process content in multiple languages.",
        icon: "/icons/perk-two.svg"
    },
    {
        title: "AI-Powered Analytics",
        description: "Gain insights from conversation patterns and recurring topics.",
        icon: "/icons/perk-three.svg"
    },
    {
        title: "Workflow Integration",
        description: "Connect with popular productivity tools seamlessly.",
        icon: "/icons/perk-four.svg"
    }
]; 