export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "What ERP systems does Tavestack integrate with?",
        answer: "Tavestack offers native integrations with 25+ ERP systems including SAP Business One, SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Salesforce, QuickBooks Enterprise, Odoo, Workday, and many more. We also support 15+ African ERP systems and can build custom integrations through our API."
    },
    {
        question: "How long does implementation take?",
        answer: "Most customers are fully operational within 4-8 weeks. Our implementation process includes discovery, configuration, integration setup, testing, and training. Enterprise deployments with complex requirements may take longer, but our team works to minimize time-to-value."
    },
    {
        question: "Do I need technical skills to build workflows?",
        answer: "No coding or technical skills required. Our visual drag-and-drop workflow builder is designed for business users. You can create complex automation workflows using our intuitive interface, and we provide 50+ pre-built templates to get you started faster."
    },
    {
        question: "How does Tavestack handle data security?",
        answer: "Tavestack is SOC 2 Type II certified and GDPR compliant. We implement enterprise-grade encryption for all data at rest and in transit, offer role-based access control (RBAC), single sign-on (SSO), and multi-factor authentication (MFA). Complete audit trails are maintained for compliance requirements."
    },
    {
        question: "What makes Tavestack different for African businesses?",
        answer: "Tavestack is built specifically for African enterprises. We support 25+ African currencies, integrate with local ERP systems common in African markets, ensure regional compliance with local regulations, and provide local support teams in your timezone across 8 African countries."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, bank transfers, and offer flexible payment terms for enterprise customers. For African businesses, we support multiple local payment methods and currencies to make procurement easier."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a free 14-day trial with no credit card required. You can explore all features, set up integrations, and build workflows to see how Tavestack can transform your operations before committing."
    },
    {
        question: "What kind of support do you offer?",
        answer: "All plans include email support and access to our knowledge base. Professional plans include priority support with 24-hour response times. Enterprise customers get a dedicated account manager, 24/7 phone support, and training and certification programs."
    }
];
