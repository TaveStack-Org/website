export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Free Teir",
        description: "Perfect for students and freelancers",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "5 hours of transcription per month", included: true },
            { text: "Basic summarization", included: true },
            { text: "English language support", included: true },
            { text: "Email support", included: true },
            { text: "Advanced analytics", included: false },
            { text: "Contextual intelligence", included: false },
        ],
    },
    {
        name: "Professional",
        description: "Ideal for small teams and organizations",
        price: {
            monthly: 0,
            yearly: 0,
        },
        popular: true,
        features: [
            { text: "25 hours of transcription per month", included: true },
            { text: "Advanced summarization & task extraction", included: true },
            { text: "Multilingual support (3 languages)", included: true },
            { text: "Priority support", included: true },
            { text: "Contextual intelligence", included: true },
            { text: "Basic workflow integration", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large organizations and government agencies",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Unlimited transcription", included: true },
            { text: "Custom AI models for your organization", included: true },
            { text: "Team management & analytics", included: true },
            { text: "24/7 dedicated support", included: true },
            { text: "API access & custom integrations", included: true },
            { text: "On-premises deployment option", included: true },
        ],
    },
];
