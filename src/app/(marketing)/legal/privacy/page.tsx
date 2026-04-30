import LegalShell from "@/components/marketing/legal-shell";

const PrivacyPage = () => (
    <LegalShell
        eyebrow="Legal · Privacy"
        title={
            <>
                <span className="text-brand-gradient">Privacy Policy</span>
            </>
        }
        summary="TaveStack collects only the data needed to operate the platform. We never sell your data. Your organization's data is logically isolated, encrypted at rest and in transit, and deletable on request."
        sections={[
            {
                title: "Data We Collect and Why",
                body: "We collect account, usage, and operational data strictly to deliver TaveStack OS and the modules you have activated. Data categories include identity (name, work email), workspace metadata, audit events, and the business records you choose to store inside the OS.",
            },
            {
                title: "How We Use Your Data",
                body: "Your data is used to operate the platform you are paying for: authentication, authorization, audit, billing, support, and TAVE execution within your organization. We do not use your data to train shared AI models.",
            },
            {
                title: "Data Sharing and Third Parties",
                body: "We use a limited set of sub-processors for hosting, payments, and email delivery. The current list is published in our Trust Center. We never sell personal data, and we do not share data outside what is operationally required.",
            },
            {
                title: "TAVE and AI Data Processing",
                body: "TAVE operates on your organization's data within an isolated runtime. Your TAVE never trains on, mixes with, or learns from another organization's data. Approval gates and audit logs apply to every TAVE action.",
            },
            {
                title: "Data Retention and Deletion",
                body: "You can export and delete your data at any time. On termination, we retain a 90-day export window before permanent deletion. Backups are purged on a 35-day rolling cycle.",
            },
            {
                title: "Your Rights (NDPR, GDPR)",
                body: "You have the right to access, correct, port, delete, and restrict processing of your personal data. Submit a data subject request to dpo@tavestack.com — we acknowledge within 72 hours and resolve within 30 days.",
            },
            {
                title: "Cookies",
                body: "We use a minimal set of essential cookies for authentication and session management. Optional cookies (analytics, product telemetry) are off by default and require explicit opt-in.",
            },
            {
                title: "Changes to This Policy",
                body: "Material changes are notified to administrators 30 days before they take effect. The full version history is published in our Trust Center.",
            },
            {
                title: "Contact the Data Controller",
                body: "TaveStack Inc., A15 Aso Grove Estate, Abuja, Nigeria. Data Protection Officer: dpo@tavestack.com.",
            },
        ]}
    />
);

export default PrivacyPage;
