import {
    Boxes,
    Briefcase,
    Building2,
    BarChart3,
    CalendarDays,
    Cpu,
    DollarSign,
    Factory,
    FileText,
    Globe2,
    GraduationCap,
    HandshakeIcon,
    HeartPulse,
    Landmark,
    LineChart,
    Library,
    LucideIcon,
    MessageSquare,
    Newspaper,
    Package,
    PhoneCall,
    PieChart,
    Plug,
    Rocket,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Stethoscope,
    Truck,
    Users2,
    Wallet,
    Wrench,
} from "lucide-react";

export const SITE = {
    name: "TaveStack",
    tagline: "The Business Operating System",
    description:
        "TaveStack is the world's first AI-native Business OS. Deploy ERP, productivity, finance, HR, and CRM modules. TAVE, your AI Agent, uses them all.",
    address: "A15, Aso Grove Estate, Abuja, Nigeria",
    email: "info@tavestack.com",
    phone: "+234 707 366 6668",
    appUrl: "https://app.tavestack.com/",
    contact: {
        sales: "sales@tavestack.com",
        support: "support@tavestack.com",
        partners: "partners@tavestack.com",
        press: "press@tavestack.com",
    },
} as const;

export type AppSlug =
    | "erp"
    | "finance"
    | "hr"
    | "crm"
    | "supply-chain"
    | "projects"
    | "analytics"
    | "communications"
    | "compliance";

export interface AppModule {
    slug: AppSlug;
    name: string;
    tagline: string;
    description: string;
    icon: LucideIcon;
    monthly: number;
    annual: number;
    plan: "Grow" | "Enterprise";
    features: string[];
    taveHighlights: string[];
}

export const APP_MODULES: AppModule[] = [
    {
        slug: "finance",
        name: "Finance & Accounting",
        tagline: "Complete financial control. TAVE-powered intelligence.",
        description:
            "GL, invoicing, payroll, treasury, and tax in one connected ledger — with AI reconciliation and proactive cash-flow alerts.",
        icon: DollarSign,
        monthly: 49,
        annual: 39,
        plan: "Grow",
        features: [
            "General Ledger with multi-entity support",
            "Accounts Payable & Receivable automation",
            "Invoicing with multi-currency support (150+ currencies)",
            "Payroll processing with statutory deductions (PAYE, NSITF, NHF for Nigeria; plus global)",
            "Bank reconciliation with AI-matching",
            "Budgeting & forecasting with variance alerts",
            "Tax computation and filing readiness",
            "Treasury management",
            "Financial close automation",
            "Audit trail and compliance reports",
        ],
        taveHighlights: [
            "TAVE drafts invoices, reconciles statements, flags anomalies, and generates P&L reports on command.",
            "TAVE monitors cash flow and proactively warns of shortfalls before they occur.",
        ],
    },
    {
        slug: "hr",
        name: "HR & People",
        tagline: "Your entire people function. From hire to retire.",
        description:
            "Recruitment, onboarding, performance, learning, and payroll — wired to Finance and run end-to-end by TAVE.",
        icon: Users2,
        monthly: 39,
        annual: 31,
        plan: "Grow",
        features: [
            "Recruitment pipeline and applicant tracking",
            "Onboarding workflows with task automation",
            "Employee records and document management",
            "Leave and attendance management",
            "Performance review cycles",
            "Learning & development tracking",
            "Payroll integration with Finance module",
            "Org chart (live, auto-updating)",
            "Exit management and offboarding",
            "Employee self-service portal",
        ],
        taveHighlights: [
            "TAVE shortlists candidates, schedules interviews, and onboards new hires across HR and Finance.",
            "TAVE generates monthly headcount reports, flags policy non-compliance, and tracks probation review dates.",
        ],
    },
    {
        slug: "crm",
        name: "CRM & Sales",
        tagline: "Close more deals. Lose fewer relationships.",
        description:
            "Pipeline, proposals, sequences, and revenue intelligence — every stage tied to live forecasting and TAVE follow-ups.",
        icon: Briefcase,
        monthly: 45,
        annual: 36,
        plan: "Grow",
        features: [
            "Lead capture and qualification workflows",
            "Full pipeline management with stage tracking",
            "Contact and account management",
            "Proposals and quote generation",
            "Email integration and sequence automation",
            "Revenue forecasting",
            "Team performance dashboards",
            "Customer health scoring",
            "Client portal",
            "Win/loss analysis",
        ],
        taveHighlights: [
            "TAVE identifies at-risk deals, drafts follow-up messages in the rep's voice, and updates the pipeline.",
            "TAVE generates weekly sales reports and presents them in the morning standup summary.",
        ],
    },
    {
        slug: "supply-chain",
        name: "Supply Chain",
        tagline: "From vendor to warehouse to customer. Fully connected.",
        description:
            "Procurement, inventory, BOM, and logistics with reorder automation and Finance-aware vendor payments.",
        icon: Truck,
        monthly: 55,
        annual: 44,
        plan: "Grow",
        features: [
            "Procurement and purchase order management",
            "Vendor management and performance scoring",
            "Inventory tracking (multi-warehouse)",
            "Bill of Materials (BOM) management",
            "Inbound and outbound logistics tracking",
            "Demand forecasting",
            "Reorder point automation",
            "Quality control checklists",
            "Customs and documentation management",
            "Landed cost computation",
        ],
        taveHighlights: [
            "TAVE monitors stock levels and automatically raises purchase orders at reorder points.",
            "TAVE coordinates with Finance to ensure vendor payments align with delivery confirmations.",
        ],
    },
    {
        slug: "projects",
        name: "Project Management",
        tagline: "Every project. Every milestone. Every team.",
        description:
            "Tasks, Gantts, sprints, and resourcing with portfolio-level health monitoring narrated by TAVE.",
        icon: CalendarDays,
        monthly: 35,
        annual: 28,
        plan: "Grow",
        features: [
            "Task management with dependencies",
            "Gantt chart and timeline views",
            "Resource allocation and capacity planning",
            "Client-facing project portal",
            "Time tracking and billing",
            "Budget vs. actuals tracking per project",
            "Risk register and issue log",
            "Sprint management (for tech teams)",
            "Document management and version control",
            "Project health dashboards",
        ],
        taveHighlights: [
            "TAVE provides daily project health summaries and alerts the PM to at-risk milestones.",
            "TAVE drafts status reports and client update emails based on live project data.",
        ],
    },
    {
        slug: "analytics",
        name: "Analytics & BI",
        tagline: "See everything. Know what to do.",
        description:
            "Cross-module dashboards, predictive insights, and natural-language reports across every deployed app.",
        icon: PieChart,
        monthly: 30,
        annual: 24,
        plan: "Grow",
        features: [
            "Cross-module unified dashboard builder",
            "50+ pre-built KPI templates",
            "Custom chart and visualization builder",
            "Scheduled report delivery (PDF, Excel)",
            "Data drill-down and slice-and-dice",
            "Predictive analytics with trend modeling",
            "Anomaly detection and alerting",
            "Role-based dashboard access",
            "Data export and API access",
            "Executive summary generator",
        ],
        taveHighlights: [
            'TAVE generates ad-hoc reports in natural language: "Give me revenue by region for H1 2026."',
            "TAVE proactively surfaces insights every Monday morning before your leadership meeting.",
        ],
    },
    {
        slug: "communications",
        name: "Communications",
        tagline: "One inbox for your entire organization.",
        description:
            "Channels, calls, video, and shared inboxes — with AI transcription wired to your Project and CRM context.",
        icon: MessageSquare,
        monthly: 25,
        annual: 20,
        plan: "Grow",
        features: [
            "Team messaging (channels, threads, DMs)",
            "Video conferencing (built-in)",
            "AI meeting transcription and summary",
            "Shared team inbox for external communication",
            "Announcement and broadcast center",
            "Client communication portal",
            "File sharing with version history",
            "Integration with Finance and CRM for contextual communication",
            "Read receipts and engagement tracking",
            "On-call scheduling",
        ],
        taveHighlights: [
            "TAVE transcribes meetings, extracts action items, and creates tasks in the Project module automatically.",
            "TAVE can send team announcements, client updates, and approval requests on your behalf.",
        ],
    },
    {
        slug: "compliance",
        name: "Compliance & Security",
        tagline: "Governance built into the OS, not bolted on.",
        description:
            "RBAC, regulatory templates, audit log analytics, and signed audit trails — with TAVE watching for anomalies.",
        icon: ShieldCheck,
        monthly: 40,
        annual: 32,
        plan: "Enterprise",
        features: [
            "Role-based access control (RBAC) with policy engine",
            "Full audit log (every action, every user)",
            "Data classification and handling policies",
            "Regulatory compliance templates (NDPR, GDPR, ISO 27001)",
            "Document and policy management",
            "Risk register and incident log",
            "Vendor compliance tracking",
            "E-signature with audit trail",
            "Whistleblower reporting module",
            "SOC 2 readiness dashboard",
        ],
        taveHighlights: [
            "TAVE monitors the audit log and flags unusual access patterns.",
            "TAVE generates compliance status reports for board review.",
        ],
    },
    {
        slug: "erp",
        name: "ERP Core",
        tagline: "The unified backbone — Finance + HR + Supply Chain in one bundle.",
        description:
            "The classic ERP triangle, deployed natively inside TaveStack OS as a connected suite.",
        icon: Boxes,
        monthly: 129,
        annual: 99,
        plan: "Grow",
        features: [
            "Bundled Finance, HR, and Supply Chain modules",
            "Unified general ledger across entities",
            "Cross-module reporting and consolidation",
            "Native integration with Projects and CRM",
            "Multi-currency, multi-entity, multi-language",
            "Statutory compliance and audit-ready close",
        ],
        taveHighlights: [
            "TAVE runs cross-functional workflows from purchase request through payment in a single conversation.",
            "TAVE prepares board packs combining Finance, HR, and Supply Chain data automatically.",
        ],
    },
];

export type SolutionSlug =
    | "enterprise"
    | "sme"
    | "government"
    | "manufacturing"
    | "financial-services"
    | "retail"
    | "healthcare"
    | "africa";

export interface Solution {
    slug: SolutionSlug;
    name: string;
    headline: string;
    summary: string;
    icon: LucideIcon;
    benefits: string[];
    callout?: string;
}

export const SOLUTIONS: Solution[] = [
    {
        slug: "enterprise",
        name: "Enterprise",
        headline: "Enterprise-Grade Intelligence at Scale",
        summary:
            "For large organizations managing complex, multi-entity operations across geographies — the data unification and AI execution power legacy ERP systems always promised.",
        icon: Building2,
        benefits: [
            "Unified view across all subsidiaries and entities",
            "TAVE executes workflows across departments — no coordination overhead",
            "Replace the fragmented point-solution stack with one OS",
            "SOC 2 certified, enterprise security ready",
            "Custom integration with existing SAP, Oracle, and Dynamics environments",
            "Private cloud and on-premise deployment options",
        ],
        callout:
            "We replaced 11 separate systems across 4 subsidiaries with TaveStack OS. Consolidation took 8 weeks. The savings were immediate.",
    },
    {
        slug: "sme",
        name: "SME",
        headline: "Enterprise Power. SME Pricing.",
        summary:
            "TaveStack OS was born in Africa's dynamic SME ecosystem. Start lean, activate modules as you grow, and skip the long-term contracts.",
        icon: Rocket,
        benefits: [
            "Free OS access — start with zero spend",
            "Activate modules as your needs grow",
            "TAVE gives you an executive-level AI operator you couldn't otherwise afford",
            "No long-term contracts",
            "Designed to work without an IT team",
            "Local language and currency support",
        ],
    },
    {
        slug: "government",
        name: "Government",
        headline: "Modern Government. Intelligent Operations.",
        summary:
            "Purpose-built for the operational complexity of public sector institutions — procurement controls, multi-department workflows, and compliance reporting.",
        icon: Landmark,
        benefits: [
            "Full audit trail for public accountability",
            "Procurement module aligned to public procurement regulations",
            "Multi-department workflow with approval hierarchies",
            "Document management and e-signature for official communications",
            "NDPR-compliant data handling",
            "Integration with government banking and payment systems",
        ],
        callout:
            "Active deployments: Ministry of Environment · Ministry of Finance · Ministry of Trade & Industry · Ministry of Foreign Affairs · NITDA",
    },
    {
        slug: "manufacturing",
        name: "Manufacturing",
        headline: "From Raw Material to Finished Goods. TAVE Runs the Line.",
        summary:
            "Bill of Materials, production orders, multi-warehouse inventory, and quality workflows — with TAVE watching the throughput in real time.",
        icon: Factory,
        benefits: [
            "Bill of Materials and production order management",
            "Real-time inventory across multiple warehouses",
            "Quality control workflow automation",
            "Procurement with vendor scoring",
            "Cost-of-goods tracking integrated with Finance",
            "TAVE monitors production throughput and flags bottlenecks",
        ],
    },
    {
        slug: "financial-services",
        name: "Financial Services",
        headline: "Speed, Compliance, and Intelligence — All in One OS.",
        summary:
            "Multi-currency, multi-entity finance ops with regulatory templates and TAVE-generated board packs.",
        icon: Wallet,
        benefits: [
            "Multi-currency and multi-entity support",
            "Regulatory compliance templates (CBN, SEC, IFRS)",
            "Client portfolio and CRM management",
            "Treasury and liquidity management",
            "TAVE generates board packs and regulatory filings",
            "Full audit trail for all financial decisions",
        ],
    },
    {
        slug: "retail",
        name: "Retail",
        headline: "From Shelf to Sale. One OS Manages It All.",
        summary:
            "Inventory across locations, POS, loyalty, and demand forecasting — with TAVE auto-replenishing the right SKUs.",
        icon: ShoppingBag,
        benefits: [
            "Inventory management across locations",
            "Point-of-sale integration",
            "Customer loyalty and CRM",
            "Demand forecasting by SKU",
            "Supplier management and procurement",
            "TAVE predicts stockouts and auto-raises replenishment orders",
        ],
    },
    {
        slug: "healthcare",
        name: "Healthcare",
        headline: "Clinical Efficiency Meets Administrative Intelligence.",
        summary:
            "Patient scheduling, billing, staff scheduling, and supply procurement — with TAVE drafting communications and admin reports.",
        icon: HeartPulse,
        benefits: [
            "Patient scheduling and appointment management",
            "Billing and insurance claims",
            "Staff scheduling and HR management",
            "Procurement of medical supplies",
            "Compliance with healthcare data regulations",
            "TAVE drafts patient communication and administrative reports",
        ],
    },
    {
        slug: "africa",
        name: "Africa",
        headline: "Built for Africa. Engineered for the World.",
        summary:
            "Local currencies, statutory frameworks, and language support — with edge nodes ensuring sub-200ms response times across the continent.",
        icon: Globe2,
        benefits: [
            "Multi-currency billing in NGN, KES, GHS, ZAR, USD, EUR, GBP",
            "Native PAYE, NSITF, NHF and CBN statutory templates",
            "TAVE speaks English, Hausa, Yoruba, Igbo, French, Arabic, Swahili",
            "Edge-deployed across African data regions",
            "Direct integrations with Paystack, Flutterwave, NIBSS, Remita",
            "Government-grade compliance for federal and state institutions",
        ],
    },
];

export const NAV_PRIMARY = [
    { label: "Platform", href: "/platform" as const },
    { label: "AI Agent", href: "/ai-agent" as const },
    { label: "Apps", href: "/apps" as const, mega: "apps" as const },
    { label: "Solutions", href: "/solutions" as const, mega: "solutions" as const },
    { label: "Pricing", href: "/pricing" as const },
    { label: "Resources", href: "/resources" as const, mega: "resources" as const },
];

export const RESOURCES_LINKS = [
    { label: "Blog", href: "/resources/blog", icon: Newspaper, description: "Insights on AI, ERP, and African business operations." },
    { label: "Documentation", href: "/resources/docs", icon: Library, description: "Guides for the OS, modules, and TAVE commands." },
    { label: "Case Studies", href: "/resources/case-studies", icon: FileText, description: "How real organizations run on TaveStack." },
    { label: "Webinars", href: "/resources/webinars", icon: PhoneCall, description: "Live sessions and on-demand replays." },
    { label: "API & Developers", href: "/resources/api", icon: Cpu, description: "REST + GraphQL reference and SDKs." },
    { label: "Community", href: "/resources/community", icon: HandshakeIcon, description: "Connect with other builders on TaveStack." },
];

export const FOOTER_NAV = {
    platform: [
        { label: "The OS", href: "/platform" },
        { label: "TAVE AI Agent", href: "/ai-agent" },
        { label: "App Marketplace", href: "/apps" },
        { label: "Integrations", href: "/integrations" },
        { label: "Security", href: "/legal/security" },
        { label: "Roadmap", href: "/resources/docs" },
    ],
    apps: [
        { label: "Finance", href: "/apps/finance" },
        { label: "HR & People", href: "/apps/hr" },
        { label: "CRM", href: "/apps/crm" },
        { label: "Supply Chain", href: "/apps/supply-chain" },
        { label: "Projects", href: "/apps/projects" },
        { label: "Analytics", href: "/apps/analytics" },
        { label: "Communications", href: "/apps/communications" },
        { label: "Compliance", href: "/apps/compliance" },
    ],
    solutions: [
        { label: "Enterprise", href: "/solutions/enterprise" },
        { label: "SME", href: "/solutions/sme" },
        { label: "Government", href: "/solutions/government" },
        { label: "Manufacturing", href: "/solutions/manufacturing" },
        { label: "Financial Services", href: "/solutions/financial-services" },
        { label: "Retail", href: "/solutions/retail" },
        { label: "Healthcare", href: "/solutions/healthcare" },
        { label: "Africa", href: "/solutions/africa" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/about/team" },
        { label: "Careers", href: "/about/careers" },
        { label: "Press", href: "/about/press" },
        { label: "Partners", href: "/partners" },
        { label: "Blog", href: "/resources/blog" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Security Policy", href: "/legal/security" },
        { label: "Compliance", href: "/legal/compliance" },
    ],
} as const;

export const TRUSTED_LOGOS = [
    "NITDA",
    "Ministry of Environment",
    "Ministry of Finance",
    "Ministry of Trade & Industry",
    "Ministry of Foreign Affairs",
    "BigTech Agency",
    "EastAfrica Logistics",
    "FinServe Group",
    "GoldCoast Industries",
];

export const HOME_STATS = [
    { value: 68, suffix: "%", label: "Average productivity gain within 90 days" },
    { value: 6, suffix: " wks", label: "Average time to full deployment" },
    { value: 47, prefix: "$", suffix: "K", label: "Annual savings per organization" },
    { value: 40, suffix: "+", label: "Organizations live on TaveStack OS" },
];

export const TAVE_USE_CASES = [
    {
        module: "Finance & Accounting",
        prompt:
            "TAVE, reconcile last month's bank statements and flag any transactions over $10,000 that don't have an approved purchase order.",
        result:
            "TAVE pulls bank data, cross-references PO records, identifies 3 discrepancies, generates an exception report, and notifies the CFO.",
        icon: DollarSign,
    },
    {
        module: "Human Resources",
        prompt: "Shortlist the top 5 candidates for the Senior Engineer role and schedule interviews for next week.",
        result:
            "TAVE reviews applications, scores against the job description, filters top 5, checks panel availability via calendar, and books the interviews.",
        icon: Users2,
    },
    {
        module: "CRM & Sales",
        prompt:
            "Which deals in the pipeline have had no activity in 14 days? Send personalized follow-up emails from the account manager.",
        result:
            "TAVE identifies 8 stalled deals, drafts personalized emails per account manager's voice, queues them for approval, and sends on confirmation.",
        icon: Briefcase,
    },
    {
        module: "Supply Chain",
        prompt:
            "We're running low on raw material SKU-4421. Raise a purchase order to our top 3 vendors and get quotes.",
        result:
            "TAVE checks inventory levels, selects pre-approved vendors, drafts RFQ documents, and emails all three with deadline tracking.",
        icon: Truck,
    },
    {
        module: "Projects",
        prompt: "Give me a status summary on all active projects — which are at risk of missing their milestone?",
        result:
            "TAVE aggregates all project data, computes completion rates vs. timelines, flags 2 at-risk projects, and prepares a one-page board brief.",
        icon: CalendarDays,
    },
    {
        module: "Analytics & Reporting",
        prompt: "Generate the monthly management report — Revenue, Costs, Headcount, and Open Deals — as a formatted PDF.",
        result:
            "TAVE pulls live data from Finance, HR, and CRM modules, structures it into a branded report, and delivers a download link.",
        icon: BarChart3,
    },
];

export const HOME_TESTIMONIALS = [
    {
        quote:
            "Before TaveStack, I had 9 tabs open at all times. Now I type to TAVE and the OS does everything. I closed three positions in my operations team because the AI handles what they used to do manually.",
        author: "Sarah Okonkwo",
        title: "Operations Director, TechFlow Manufacturing, Nigeria",
    },
    {
        quote:
            "The fact that the AI Agent can actually write purchase orders, update inventory, and notify suppliers — not just suggest it — changed how I think about software entirely.",
        author: "Michael Mwangi",
        title: "CFO, EastAfrica Logistics, Kenya",
    },
    {
        quote:
            "TaveStack OS is the Salesforce + Workday + Slack + SAP combination we were trying to hack together for years. It works, it's connected, and it's actually affordable.",
        author: "Amara Diop",
        title: "CTO, FinServe Group, Senegal",
    },
    {
        quote:
            "The modular billing was the clincher. We started with just HR and Finance. Six months later, we've deployed 7 modules. No renegotiation, no hidden costs.",
        author: "Emmanuel Asante",
        title: "Supply Chain Manager, GoldCoast Industries, Ghana",
    },
];

export const PRICING_FAQ = [
    {
        q: "Is the OS really free forever?",
        a: "Yes. The TaveStack OS — your workspace, user management, TAVE (limited), and core navigation — will always be free. We monetize apps, not access.",
    },
    {
        q: "Can I activate and deactivate app modules?",
        a: "Absolutely. You're billed monthly (or annually if you chose that). Deactivate any app at the end of your billing period with no penalty. Your data is retained for 90 days.",
    },
    {
        q: "What happens to my data if I cancel?",
        a: "We give you a 90-day window to export all your data in standard formats (CSV, JSON, PDF). After 90 days, data is permanently deleted.",
    },
    {
        q: "How is TAVE billed?",
        a: "TAVE is included in the OS. On the Free plan, you get 50 TAVE commands/month. On Grow and Enterprise, TAVE commands are unlimited.",
    },
    {
        q: "Do you offer local currency billing?",
        a: "Yes. We support billing in NGN, KES, GHS, ZAR, USD, EUR, and GBP. Contact us for other currencies.",
    },
    {
        q: "Is there a free trial of paid modules?",
        a: "Each paid module comes with a 14-day free trial. No credit card required to start.",
    },
    {
        q: "Do you offer NGO or government pricing?",
        a: "Yes. We offer up to 40% discount for registered NGOs and government institutions. Contact sales@tavestack.com.",
    },
];

export const INTEGRATION_GROUPS = [
    {
        category: "ERP Systems",
        icon: Boxes,
        items: ["SAP", "Oracle NetSuite", "Microsoft Dynamics 365", "Sage", "QuickBooks", "Xero", "Odoo", "Zoho Books", "Tally"],
    },
    {
        category: "CRM Platforms",
        icon: Briefcase,
        items: ["Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics CRM", "Zoho CRM"],
    },
    {
        category: "Communication Tools",
        icon: MessageSquare,
        items: ["Slack", "Microsoft Teams", "Google Workspace", "Zoom", "Twilio", "WhatsApp Business API"],
    },
    {
        category: "Payment & Banking",
        icon: Wallet,
        items: ["Paystack", "Flutterwave", "Stripe", "PayPal", "Interswitch", "Remita", "NIBSS"],
    },
    {
        category: "HR & Payroll",
        icon: Users2,
        items: ["Bamboo HR", "Workday", "PeopleHR", "Gusto", "Seamless HR"],
    },
    {
        category: "Logistics & Supply Chain",
        icon: Truck,
        items: ["DHL API", "FedEx API", "Kobo360", "MAX Delivery", "GIG Logistics"],
    },
    {
        category: "Government & Compliance",
        icon: ShieldCheck,
        items: ["FIRS e-filing integration", "CAC registry lookup", "NIN verification", "BVN validation"],
    },
    {
        category: "Developer & API",
        icon: Plug,
        items: ["REST API", "GraphQL API", "Webhooks", "Zapier", "n8n", "Make (Integromat)"],
    },
];

export const APP_CATEGORY_FILTERS = [
    "All",
    "ERP",
    "Finance",
    "HR",
    "CRM",
    "Supply Chain",
    "Projects",
    "Analytics",
    "Communications",
    "Compliance",
];

export const APP_TILE_ICONS: Record<AppSlug, LucideIcon> = {
    erp: Boxes,
    finance: DollarSign,
    hr: Users2,
    crm: Briefcase,
    "supply-chain": Truck,
    projects: CalendarDays,
    analytics: PieChart,
    communications: MessageSquare,
    compliance: ShieldCheck,
};

export const SOLUTION_ICONS: Record<SolutionSlug, LucideIcon> = {
    enterprise: Building2,
    sme: Rocket,
    government: Landmark,
    manufacturing: Factory,
    "financial-services": Wallet,
    retail: ShoppingBag,
    healthcare: Stethoscope,
    africa: Globe2,
};

export const RESOURCE_ICONS = {
    blog: Newspaper,
    docs: Library,
    "case-studies": FileText,
    webinars: PhoneCall,
    api: Cpu,
    community: HandshakeIcon,
    careers: GraduationCap,
    legal: ShieldCheck,
    metrics: LineChart,
    package: Package,
    sparkles: Sparkles,
    wrench: Wrench,
};
