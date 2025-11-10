import { cn } from "@/lib";

interface DocSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function DocSection({ id, title, children, className }: DocSectionProps) {
    return (
        <section id={id} className={cn("scroll-mt-24 mb-16", className)}>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 pb-3 border-b border-border">
                {title}
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                {children}
            </div>
        </section>
    );
}

interface DocSubsectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function DocSubsection({ id, title, children, className }: DocSubsectionProps) {
    return (
        <div id={id} className={cn("scroll-mt-24 mb-8", className)}>
            <h3 className="text-xl md:text-2xl font-medium mb-4">
                {title}
            </h3>
            <div className="text-muted-foreground space-y-4">
                {children}
            </div>
        </div>
    );
}
