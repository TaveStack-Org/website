import React from 'react';
import { cn } from "@/lib";

interface Props {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

const Wrapper = ({ className, children, id }: Props) => {
    return (
        <section 
            id={id}
            className={cn(
                "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20",
                className,
            )}
        >
            {children}
        </section>
    )
};

export default Wrapper
