import { cn } from "@/lib";
import AnimationContainer from "../global/animation-container";
import SectionBadge from "../ui/section-badge";

interface SectionHeadingProps {
    eyebrow?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: "center" | "left";
    className?: string;
}

const SectionHeading = ({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) => (
    <div
        className={cn(
            "flex flex-col gap-4",
            align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left",
            className,
        )}
    >
        {eyebrow && (
            <AnimationContainer animation="fadeUp" delay={0.1}>
                <SectionBadge title={eyebrow} />
            </AnimationContainer>
        )}
        <AnimationContainer animation="fadeUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight !leading-tight">
                {title}
            </h2>
        </AnimationContainer>
        {description && (
            <AnimationContainer animation="fadeUp" delay={0.3}>
                <p className="text-base md:text-lg text-muted-foreground">{description}</p>
            </AnimationContainer>
        )}
    </div>
);

export default SectionHeading;
