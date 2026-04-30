import { TRUSTED_LOGOS } from "@/constants";
import Marquee from "../ui/marquee";
import Wrapper from "../global/wrapper";

const TrustedStrip = () => (
    <Wrapper className="py-10">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by 40+ organizations and government agencies
        </p>
        <div className="relative">
            <Marquee className="[--duration:50s]" pauseOnHover repeat={3}>
                {TRUSTED_LOGOS.map((name) => (
                    <span
                        key={name}
                        className="mx-6 inline-flex items-center text-sm md:text-base font-semibold tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors"
                    >
                        {name}
                    </span>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/70 to-transparent" />
        </div>
    </Wrapper>
);

export default TrustedStrip;
