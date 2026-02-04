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
    priceLabel?: string;
    features: PlanFeature[];
    popular?: boolean;
    cta?: string;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter",
        description: "Perfect for small teams getting started",
        price: {
            monthly: 49,
            yearly: 39,
        },
        priceLabel: "/user/month",
        cta: "Start Free Trial",
        features: [
            { text: "Up to 25 users", included: true },
            { text: "10 active workflows", included: true },
            { text: "5 ERP integrations", included: true },
            { text: "Basic analytics", included: true },
            { text: "Email support", included: true },
            { text: "Knowledge base access", included: true },
            { text: "Unlimited workflows", included: false },
            { text: "AI features", included: false },
        ],
    },
    {
        name: "Professional",
        description: "Ideal for growing businesses",
        price: {
            monthly: 99,
            yearly: 79,
        },
        priceLabel: "/user/month",
        popular: true,
        cta: "Start Free Trial",
        features: [
            { text: "Up to 100 users", included: true },
            { text: "Unlimited workflows", included: true },
            { text: "Unlimited integrations", included: true },
            { text: "Advanced analytics & AI features", included: true },
            { text: "Priority support (24-hour response)", included: true },
            { text: "Custom branding", included: true },
            { text: "API access", included: true },
            { text: "Mobile app access", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large organizations with complex needs",
        price: {
            monthly: 0,
            yearly: 0,
        },
        priceLabel: "Custom",
        cta: "Contact Sales",
        features: [
            { text: "Unlimited users", included: true },
            { text: "Dedicated account manager", included: true },
            { text: "99.9% uptime SLA", included: true },
            { text: "Custom integrations", included: true },
            { text: "On-premise deployment option", included: true },
            { text: "White-label capabilities", included: true },
            { text: "Advanced security features", included: true },
            { text: "24/7 phone support", included: true },
        ],
    },
];

export const ADD_ONS = [
    {
        name: "AI Process Intelligence",
        price: "$1,000/month",
        description: "Advanced AI-powered process mining and optimization recommendations"
    },
    {
        name: "Advanced Security Pack",
        price: "$500/month",
        description: "Enhanced security features including advanced threat detection and compliance tools"
    },
    {
        name: "Premium Support",
        price: "$2,000/month",
        description: "24/7 dedicated support with guaranteed 1-hour response time"
    }
];
