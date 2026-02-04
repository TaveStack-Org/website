import { Link2, Zap, BarChart3, Bot, CheckSquare, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface PerkItem {
    title: string;
    description: string;
    icon: LucideIcon;
    isNegative?: boolean;
}

export const PERKS: PerkItem[] = [
    {
        title: "Data Silos",
        description: "Operating 8+ business systems that don't talk to each other",
        icon: Link2,
        isNegative: true
    },
    {
        title: "Manual Work",
        description: "Employees spending 4.5 hours/week just copying data between platforms",
        icon: Zap,
        isNegative: true
    },
    {
        title: "No Visibility",
        description: "Fragmented processes with zero real-time insights across operations",
        icon: BarChart3,
        isNegative: true
    }
];

// Problem stats for the problem section
export const PROBLEM_STAT = {
    value: "$5,000",
    description: "Companies waste $5,000 per employee annually on manual workflows that could be automated"
};

// Perks that highlight the solution (positive perks)
export const SOLUTION_PERKS: PerkItem[] = [
    {
        title: "Universal Connectivity",
        description: "Connect all your business systems with 25+ native ERP integrations",
        icon: Link2
    },
    {
        title: "Intelligent Automation",
        description: "Automate complex workflows without writing a single line of code",
        icon: Zap
    },
    {
        title: "Real-time Analytics",
        description: "Get complete visibility across all your operations with smart dashboards",
        icon: BarChart3
    },
    {
        title: "AI-Powered Insights",
        description: "Leverage AI to optimize processes and predict bottlenecks",
        icon: Bot
    },
    {
        title: "Task Management",
        description: "Automated task creation, assignments, and approval workflows",
        icon: CheckSquare
    },
    {
        title: "Enterprise Security",
        description: "SOC 2 certified, GDPR compliant with role-based access control",
        icon: Shield
    }
];