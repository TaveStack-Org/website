import LegalShell from "@/components/marketing/legal-shell";

const TermsPage = () => (
    <LegalShell
        eyebrow="Legal · Terms"
        title={
            <>
                <span className="text-brand-gradient">Terms of Service</span>
            </>
        }
        summary="By using TaveStack OS you agree to these Terms. The OS itself is free; paid app modules are governed by your subscription. You own your data. We protect it."
        sections={[
            {
                title: "Acceptance of Terms",
                body: "By creating a TaveStack account or using the OS, you agree to be bound by these Terms and the Privacy Policy. If you are accepting on behalf of an organization, you confirm you have authority to do so.",
            },
            {
                title: "TaveStack OS — Free Tier",
                body: "The OS is free for the workspace, user management, navigation, and limited TAVE access. Free tier limits (users, modules, commands) are described on the pricing page and may be revised on 30-day notice.",
            },
            {
                title: "App Module Subscriptions and Billing",
                body: "Each app module is a separate, monthly or annual subscription. You can activate or deactivate modules at any time. Charges are billed in advance and are non-refundable for the current billing period.",
            },
            {
                title: "Acceptable Use Policy",
                body: "You will not use TaveStack to violate the law, infringe rights, send unsolicited bulk messages, distribute malware, or interfere with the platform's operation. Violations can result in suspension.",
            },
            {
                title: "TAVE Usage — Responsibilities and Limitations",
                body: "TAVE acts on instructions you provide. You are responsible for the prompts and approvals you submit. Approval gates are mandatory for high-stakes actions. Audit logs are tamper-evident.",
            },
            {
                title: "Intellectual Property",
                body: "TaveStack OS, TAVE, the SDKs, and all related software are licensed — not sold — to you. Your content, configurations, and prompts remain yours.",
            },
            {
                title: "Data Ownership",
                body: "Your data is yours. You can export it at any time. We do not claim ownership over content you store in TaveStack and we do not share it with other customers.",
            },
            {
                title: "Service Level Commitments",
                body: "OS Grow includes a 99.5% target uptime. OS Enterprise includes a 99.9% contractual SLA with service credits, defined in your order form.",
            },
            {
                title: "Limitation of Liability",
                body: "To the maximum extent permitted by law, TaveStack's aggregate liability is limited to the fees paid for the affected service in the 12 months preceding the claim.",
            },
            {
                title: "Termination",
                body: "Either party may terminate for material breach with 30 days' written notice. On termination you receive a 90-day export window before permanent data deletion.",
            },
            {
                title: "Governing Law",
                body: "These Terms are governed by the laws of the Federal Republic of Nigeria. Enterprise customers may negotiate alternative governing law in their order form.",
            },
            {
                title: "Dispute Resolution",
                body: "Disputes are resolved by good-faith negotiation, then mediation, then arbitration in Abuja under the Lagos Court of Arbitration rules. Either party may seek injunctive relief in court for IP or confidentiality matters.",
            },
        ]}
    />
);

export default TermsPage;
