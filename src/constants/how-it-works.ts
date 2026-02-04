export interface HowItWorksItem {
    step: number;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: string;
    icon: string;
}

export const HOW_IT_WORKS: HowItWorksItem[] = [
    {
        step: 1,
        title: "Connect",
        subtitle: "Plug into your entire tech stack in minutes",
        description: "Native connectors to 25+ ERP systems with one-click setup. No coding required, bidirectional data sync out of the box.",
        features: [
            "Native connectors to 25+ ERP systems",
            "One-click setup, no coding required",
            "Bidirectional data sync"
        ],
        image: "/Workflow integration.svg",
        icon: "🔌"
    },
    {
        step: 2,
        title: "Automate",
        subtitle: "Build workflows your way, without IT",
        description: "Drag-and-drop workflow designer with 50+ pre-built templates. Let AI recommend optimizations for your processes.",
        features: [
            "Drag-and-drop workflow designer",
            "50+ pre-built templates",
            "AI recommendations for optimization"
        ],
        image: "/AI processing.svg",
        icon: "⚡"
    },
    {
        step: 3,
        title: "Optimize",
        subtitle: "See everything, improve continuously",
        description: "Real-time dashboards across all your systems. Detect bottlenecks, receive alerts, and leverage predictive analytics.",
        features: [
            "Real-time dashboards across all systems",
            "Bottleneck detection and alerts",
            "Predictive analytics"
        ],
        image: "/Smart summary.svg",
        icon: "📊"
    }
];