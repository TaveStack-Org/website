import LegalShell from "@/components/marketing/legal-shell";
import { generateMetadata as buildMeta } from "@/utils/metadata";

export const metadata = buildMeta({
    title: "Compliance",
    description:
        "TaveStack compliance frameworks: NDPR, GDPR, SOC 2 Type II, ISO 27001 (in progress), PCI DSS for payment integrations, and CBN data governance guidelines.",
    path: "/legal/compliance",
});

const CompliancePage = () => (
    <LegalShell
        eyebrow="Legal · Compliance"
        title={
            <>
                <span className="text-brand-gradient">Compliance</span>
            </>
        }
        summary="TaveStack is engineered to meet the regulatory baseline of every market we operate in — and to give your compliance team audit-ready evidence on demand."
        sections={[
            {
                title: "NDPR (Nigeria Data Protection Regulation)",
                body: "We are NDPR-compliant in our handling of personal data. Data Subject Access Requests are processed via dpo@tavestack.com. Annual NDPR audit reports are filed with the NDPC by our DPO.",
            },
            {
                title: "GDPR (EU)",
                body: "We act as a Data Processor under GDPR for EU-resident customers. Standard Contractual Clauses are signed with all sub-processors. EU customers can request a Data Processing Agreement (DPA) at any time.",
            },
            {
                title: "SOC 2 Type II",
                body: "TaveStack maintains SOC 2 Type II certification covering Security, Availability, and Confidentiality. The most recent report is available to customers under NDA.",
            },
            {
                title: "ISO 27001 (in progress)",
                body: "ISO 27001 certification is on the 2026 roadmap. Gap assessment complete; remediation underway. Certificate target: Q4 2026.",
            },
            {
                title: "PCI DSS",
                body: "TaveStack does not store card data. Payment integrations (Paystack, Flutterwave, Stripe) handle PCI scope on our behalf. We maintain SAQ-A scope where applicable.",
            },
            {
                title: "CBN Data Governance Guidelines",
                body: "Financial Services customers operating under CBN supervision can enable in-country data residency, regulator-friendly logging, and statutory reporting templates.",
            },
            {
                title: "Audit and Evidence Packs",
                body: "Enterprise customers receive on-demand evidence packs (control matrix, sub-processor list, security questionnaire responses) through the Trust Center.",
            },
            {
                title: "Trust Center",
                body: "trust.tavestack.com publishes our certifications, sub-processor list, security whitepaper, status page, and data residency options. Bookmark it for vendor reviews.",
            },
        ]}
    />
);

export default CompliancePage;
