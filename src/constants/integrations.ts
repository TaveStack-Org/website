export interface Integration {
    id: string;
    name: string;
    category: string;
    description: string;
    logo?: string;
    available: boolean;
}

export const INTEGRATION_CATEGORIES = [
    { id: "erp", name: "ERP Systems", icon: "🏢" },
    { id: "crm", name: "CRM", icon: "👥" },
    { id: "accounting", name: "Accounting", icon: "📊" },
    { id: "hris", name: "HRIS", icon: "👔" },
    { id: "communication", name: "Communication", icon: "💬" },
    { id: "storage", name: "Storage", icon: "📁" },
    { id: "project", name: "Project Management", icon: "📋" },
];

export const INTEGRATIONS: Integration[] = [
    // ERP Systems
    { id: "sap-b1", name: "SAP Business One", category: "erp", description: "Full bidirectional sync with SAP B1", available: true },
    { id: "sap-s4", name: "SAP S/4HANA", category: "erp", description: "Enterprise-grade SAP integration", available: true },
    { id: "oracle-netsuite", name: "Oracle NetSuite", category: "erp", description: "Complete NetSuite workflow automation", available: true },
    { id: "oracle-ebs", name: "Oracle EBS", category: "erp", description: "Oracle E-Business Suite connector", available: true },
    { id: "dynamics-365", name: "Microsoft Dynamics 365", category: "erp", description: "Full Dynamics 365 integration", available: true },
    { id: "odoo", name: "Odoo", category: "erp", description: "Open-source ERP integration", available: true },
    { id: "sage-intacct", name: "Sage Intacct", category: "erp", description: "Cloud financial management", available: true },
    { id: "workday", name: "Workday", category: "erp", description: "Enterprise HR and finance", available: true },
    { id: "quickbooks-ent", name: "QuickBooks Enterprise", category: "erp", description: "QuickBooks for larger businesses", available: true },
    { id: "zoho-books", name: "Zoho Books", category: "erp", description: "Zoho accounting integration", available: true },
    { id: "servicenow", name: "ServiceNow", category: "erp", description: "IT service management", available: true },
    { id: "acumatica", name: "Acumatica", category: "erp", description: "Cloud ERP solution", available: true },
    { id: "epicor", name: "Epicor", category: "erp", description: "Manufacturing ERP", available: true },
    { id: "infor", name: "Infor", category: "erp", description: "Industry-specific ERP", available: true },
    { id: "sage-x3", name: "Sage X3", category: "erp", description: "Mid-market ERP solution", available: true },
    
    // CRM
    { id: "salesforce", name: "Salesforce", category: "crm", description: "World's #1 CRM platform", available: true },
    { id: "hubspot", name: "HubSpot", category: "crm", description: "Inbound marketing and sales", available: true },
    { id: "pipedrive", name: "Pipedrive", category: "crm", description: "Sales-focused CRM", available: true },
    { id: "zoho-crm", name: "Zoho CRM", category: "crm", description: "Comprehensive CRM solution", available: true },
    { id: "freshsales", name: "Freshsales", category: "crm", description: "AI-powered CRM", available: true },
    
    // Accounting
    { id: "quickbooks", name: "QuickBooks Online", category: "accounting", description: "Small business accounting", available: true },
    { id: "xero", name: "Xero", category: "accounting", description: "Beautiful accounting software", available: true },
    { id: "wave", name: "Wave", category: "accounting", description: "Free accounting software", available: true },
    { id: "freshbooks", name: "FreshBooks", category: "accounting", description: "Invoice and expense tracking", available: true },
    
    // HRIS
    { id: "bamboohr", name: "BambooHR", category: "hris", description: "HR software for SMBs", available: true },
    { id: "workday-hr", name: "Workday HCM", category: "hris", description: "Enterprise HR management", available: true },
    { id: "adp", name: "ADP", category: "hris", description: "Payroll and HR services", available: true },
    { id: "gusto", name: "Gusto", category: "hris", description: "Modern payroll and benefits", available: true },
    { id: "namely", name: "Namely", category: "hris", description: "All-in-one HR platform", available: true },
    
    // Communication
    { id: "slack", name: "Slack", category: "communication", description: "Team messaging and collaboration", available: true },
    { id: "teams", name: "Microsoft Teams", category: "communication", description: "Microsoft collaboration hub", available: true },
    { id: "gmail", name: "Gmail", category: "communication", description: "Google email integration", available: true },
    { id: "outlook", name: "Outlook", category: "communication", description: "Microsoft email integration", available: true },
    { id: "zoom", name: "Zoom", category: "communication", description: "Video conferencing", available: true },
    
    // Storage
    { id: "google-drive", name: "Google Drive", category: "storage", description: "Cloud storage and docs", available: true },
    { id: "dropbox", name: "Dropbox", category: "storage", description: "File storage and sharing", available: true },
    { id: "onedrive", name: "OneDrive", category: "storage", description: "Microsoft cloud storage", available: true },
    { id: "box", name: "Box", category: "storage", description: "Enterprise content management", available: true },
    
    // Project Management
    { id: "asana", name: "Asana", category: "project", description: "Work management platform", available: true },
    { id: "monday", name: "Monday.com", category: "project", description: "Work operating system", available: true },
    { id: "jira", name: "Jira", category: "project", description: "Issue tracking and project management", available: true },
    { id: "trello", name: "Trello", category: "project", description: "Visual project management", available: true },
    { id: "notion", name: "Notion", category: "project", description: "All-in-one workspace", available: true },
    { id: "clickup", name: "ClickUp", category: "project", description: "All-in-one productivity", available: true },
];

// Featured integrations for homepage
export const FEATURED_INTEGRATIONS = INTEGRATIONS.filter(i => 
    ["sap-b1", "oracle-netsuite", "salesforce", "dynamics-365", "odoo", "sage-intacct"].includes(i.id)
);
