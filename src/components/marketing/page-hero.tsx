import { cn } from "@/lib";
import AnimationContainer from "../global/animation-container";
import Wrapper from "../global/wrapper";
import SectionBadge from "../ui/section-badge";

interface PageHeroProps {
    eyebrow?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
    align?: "center" | "left";
    className?: string;
}

const PageHero = ({
    eyebrow,
    title,
    subtitle,
    children,
    align = "center",
    className,
}: PageHeroProps) => (
    <Wrapper
        className={cn(
            "pt-32 pb-16 lg:pt-40 lg:pb-20 relative",
            align === "center" && "text-center",
            className,
        )}
    >
        <div
            className={cn(
                "max-w-3xl mx-auto flex flex-col gap-6",
                align === "center" ? "items-center" : "items-start text-left mx-0",
            )}
        >
            {eyebrow && (
                <AnimationContainer animation="fadeUp" delay={0.1}>
                    <SectionBadge title={eyebrow} />
                </AnimationContainer>
            )}
            <AnimationContainer animation="fadeUp" delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight tracking-tight">
                    {title}
                </h1>
            </AnimationContainer>
            {subtitle && (
                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                        {subtitle}
                    </p>
                </AnimationContainer>
            )}
            {children && (
                <AnimationContainer animation="fadeUp" delay={0.4}>
                    {children}
                </AnimationContainer>
            )}
        </div>
    </Wrapper>
);

export default PageHero;
