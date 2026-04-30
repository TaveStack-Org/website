import { Check, Minus, X } from "lucide-react";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionHeading from "../marketing/section-heading";

type Cell = boolean | "partial" | string;

const ROWS: { feature: string; legacy: Cell; point: Cell; tave: Cell }[] = [
    { feature: "Unified Data Layer", legacy: true, point: false, tave: true },
    { feature: "AI Agent with cross-module execution", legacy: false, point: false, tave: true },
    { feature: "Modular — pay only for what you use", legacy: false, point: "partial", tave: true },
    {
        feature: "Implementation time",
        legacy: "12–24 months",
        point: "Weeks (fragmented)",
        tave: "Days",
    },
    { feature: "Free base OS access", legacy: false, point: false, tave: true },
    { feature: "Designed for African + global markets", legacy: false, point: false, tave: true },
    { feature: "Natural language control", legacy: false, point: false, tave: true },
];

const renderCell = (v: Cell, highlight = false) => {
    if (v === true) {
        return (
            <Check
                className={`size-5 mx-auto ${
                    highlight ? "text-accent" : "text-muted-foreground"
                }`}
            />
        );
    }
    if (v === false) {
        return <X className="size-5 mx-auto text-muted-foreground/50" />;
    }
    if (v === "partial") {
        return <Minus className="size-5 mx-auto text-muted-foreground" />;
    }
    return (
        <span className={`text-xs sm:text-sm ${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
            {v}
        </span>
    );
};

const Differentiator = () => (
    <Wrapper className="py-20 lg:py-28">
        <SectionHeading
            eyebrow="Why TaveStack"
            title={
                <>
                    Not Another SaaS Tool.{" "}
                    <span className="text-brand-gradient">An Operating System.</span>
                </>
            }
        />

        <AnimationContainer animation="fadeUp" delay={0.3}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
                <table className="w-full min-w-[680px] text-sm">
                    <thead>
                        <tr className="border-b border-border/60">
                            <th className="text-left p-4 lg:p-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                                Capability
                            </th>
                            <th className="text-center p-4 lg:p-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                                Legacy ERP
                                <div className="text-[10px] font-normal opacity-60 normal-case">
                                    SAP, Oracle
                                </div>
                            </th>
                            <th className="text-center p-4 lg:p-5 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                                Point Solutions
                                <div className="text-[10px] font-normal opacity-60 normal-case">
                                    Notion + Slack + QB
                                </div>
                            </th>
                            <th className="text-center p-4 lg:p-5 font-medium text-xs uppercase tracking-wider relative">
                                <span className="text-brand-gradient font-bold text-sm">
                                    TaveStack OS
                                </span>
                                <div className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-gradient" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ROWS.map((r) => (
                            <tr
                                key={r.feature}
                                className="border-b border-border/40 last:border-0 hover:bg-foreground/[0.015]"
                            >
                                <td className="p-4 lg:p-5 font-medium text-foreground">
                                    {r.feature}
                                </td>
                                <td className="p-4 lg:p-5 text-center">
                                    {renderCell(r.legacy)}
                                </td>
                                <td className="p-4 lg:p-5 text-center">
                                    {renderCell(r.point)}
                                </td>
                                <td className="p-4 lg:p-5 text-center bg-primary/[0.04]">
                                    {renderCell(r.tave, true)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AnimationContainer>
    </Wrapper>
);

export default Differentiator;
