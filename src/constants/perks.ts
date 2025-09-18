import { Mic, Globe, Brain, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PerkItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const PERKS: PerkItem[] = [
    {
        title: "African Accent Recognition",
        description: "Optimized for diverse African accents and dialects.",
        icon: Mic
    },
    {
        title: "Multilingual Support",
        description: "Transcribe and process content in multiple languages.",
        icon: Globe
    },
    {
        title: "AI-Powered Analytics",
        description: "Gain insights from conversation patterns and recurring topics.",
        icon: Brain
    },
    {
        title: "Workflow Integration",
        description: "Connect with popular productivity tools seamlessly.",
        icon: Zap
    }
]; 