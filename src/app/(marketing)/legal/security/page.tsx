import LegalShell from "@/components/marketing/legal-shell";

const SecurityPage = () => (
    <LegalShell
        eyebrow="Legal · Security"
        title={
            <>
                <span className="text-brand-gradient">Security Policy</span>
            </>
        }
        summary="Security is a kernel-level concern at TaveStack. End-to-end encryption, isolated TAVE runtimes, signed audit trails, and an annual third-party penetration test."
        sections={[
            {
                title: "Infrastructure Security",
                body: "TaveStack runs on hardened cloud infrastructure with private VPC networking, least-privilege IAM, ephemeral workloads, and continuous configuration monitoring.",
            },
            {
                title: "Application Security",
                body: "Every code change goes through peer review and automated SAST. Dependencies are scanned daily. We follow OWASP ASVS guidelines for the OS and every app module.",
            },
            {
                title: "Data Encryption",
                body: "Data is encrypted at rest with AES-256 and in transit with TLS 1.3. Encryption keys are managed per organization and rotated regularly.",
            },
            {
                title: "Access Control and Authentication",
                body: "Role-based access control is enforced at the OS kernel and inherited by every module. Enterprise customers can enable SSO/SAML and enforce MFA org-wide.",
            },
            {
                title: "TAVE Isolation Architecture",
                body: "Each organization's TAVE instance runs in an isolated execution environment with its own scoped data access. TAVE does not learn across customer boundaries — ever.",
            },
            {
                title: "Incident Response",
                body: "We maintain a 24/7 on-call rotation with documented incident severity levels, defined RTOs, and notification commitments to affected customers within 24 hours of detection.",
            },
            {
                title: "Penetration Testing and Audit",
                body: "TaveStack contracts an independent third party for annual penetration testing of the OS and TAVE runtime. Reports are summarized in the Trust Center.",
            },
            {
                title: "Bug Bounty Program",
                body: "We run a private bug bounty program with structured payouts by severity. Researchers can apply via security@tavestack.com.",
            },
            {
                title: "Certifications",
                body: "SOC 2 Type II in place. ISO 27001 certification on the 2026 roadmap. NDPR-compliant data handling. PCI DSS scope is limited to integrated payment processors.",
            },
            {
                title: "Contact Security Team",
                body: "Report vulnerabilities to security@tavestack.com. PGP key is published on the Trust Center. We acknowledge within 24 hours and provide status updates every 72 hours until resolution.",
            },
        ]}
    />
);

export default SecurityPage;
