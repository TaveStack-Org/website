import { 
    Palette, 
    Link2, 
    BarChart3, 
    Bot, 
    CheckSquare, 
    Shield,
    LucideIcon 
} from "lucide-react";

export interface FeatureItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const FEATURES: FeatureItem[] = [
    {
        title: "Workflow Builder",
        description: "Icon-based visual workflow creator that anyone can use—no technical skills required",
        icon: Palette
    },
    {
        title: "ERP Integrations",
        description: "Connect SAP, Oracle, NetSuite, Dynamics, and 20+ more systems seamlessly",
        icon: Link2
    },
    {
        title: "Smart Dashboards",
        description: "Real-time analytics and KPIs across all your platforms in one unified view",
        icon: BarChart3
    },
    {
        title: "AI Intelligence",
        description: "Process mining, anomaly detection, and optimization recommendations powered by AI",
        icon: Bot
    },
    {
        title: "Task Management",
        description: "Automated assignments, approvals, and notifications to keep work flowing",
        icon: CheckSquare
    },
    {
        title: "Enterprise Security",
        description: "SOC 2 certified, GDPR compliant, with role-based access control",
        icon: Shield
    }
];

// Detailed features for the features page
export const DETAILED_FEATURES = [
    {
        id: "workflow-builder",
        title: "Visual Workflow Builder",
        description: "Create powerful automation workflows with our intuitive drag-and-drop interface.",
        features: [
            "Drag-and-drop interface",
            "Pre-built templates for common processes",
            "Real-time validation",
            "Version control and rollback",
            "Multi-step approval chains",
            "Conditional branching"
        ],
        image: "/Workflow integration.svg"
    },
    {
        id: "integrations",
        title: "Universal ERP Integration Hub",
        description: "Connect all your business systems with native connectors and custom API support.",
        features: [
            "25+ native connectors (expandable)",
            "Custom API integration builder",
            "Real-time bidirectional sync",
            "Data transformation engine",
            "Error monitoring and retry logic",
            "Webhook management"
        ],
        image: "/AI processing.svg"
    },
    {
        id: "dashboards",
        title: "Intelligent Dashboards & Analytics",
        description: "Get real-time visibility into your operations with customizable dashboards.",
        features: [
            "Customizable widget-based dashboards",
            "Pre-built KPI templates by department",
            "Real-time data visualization",
            "Custom report builder",
            "Scheduled report delivery",
            "Export to PDF, Excel, CSV"
        ],
        image: "/Smart summary.svg"
    },
    {
        id: "ai-intelligence",
        title: "AI-Powered Process Intelligence",
        description: "Let AI discover optimization opportunities and predict issues before they occur.",
        features: [
            "Automatic process discovery",
            "Workflow optimization recommendations",
            "Anomaly detection and alerts",
            "Predictive analytics",
            "Natural language workflow creation"
        ],
        image: "/Ai transcription.svg"
    },
    {
        id: "task-management",
        title: "Enterprise Task Management",
        description: "Automate task creation and keep your teams aligned with smart assignments.",
        features: [
            "Automated task creation from workflows",
            "Priority and categorization",
            "Due date management",
            "Comments and file attachments",
            "Task dependencies",
            "Mobile notifications"
        ],
        image: "/task extract.svg"
    },
    {
        id: "security",
        title: "Advanced Security & Compliance",
        description: "Enterprise-grade security with complete audit trails and compliance support.",
        features: [
            "Role-based access control (RBAC)",
            "Single Sign-On (SSO) integration",
            "Multi-factor authentication (MFA)",
            "SOC 2 Type II certified",
            "GDPR and local compliance",
            "Complete audit trails"
        ],
        image: "/Workspace.svg"
    },
    {
        id: "collaboration",
        title: "Team Collaboration",
        description: "Built-in collaboration tools to keep your teams connected and productive.",
        features: [
            "Real-time chat integrated with workflows",
            "@mentions and notifications",
            "Shared document workspace",
            "Activity feeds",
            "Video conferencing integration"
        ],
        image: "/record and transcribe.svg"
    },
    {
        id: "mobile",
        title: "Mobile Application",
        description: "Access your workflows on the go with our native mobile apps.",
        features: [
            "iOS and Android native apps",
            "Offline capability with sync",
            "Push notifications",
            "Mobile workflow approval",
            "Document scanning"
        ],
        image: "/Workspace.svg"
    }
];