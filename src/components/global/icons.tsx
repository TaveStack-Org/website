import { LucideProps } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FC, useState, useEffect } from "react";

// Client-side only component for theme-aware logo
const ThemeAwareLogo: FC<LucideProps> = (props) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Use theme-specific logo paths - default to dark theme for SSR
    const logoSrc = !mounted || resolvedTheme === "dark"
        ? "/images/temp/TaveStack Word Mark (White no BG).png"
        : "/images/temp/TaveStack Word Mark (Black no BG).png";

    return (
        <div className={props.className}>
            <Image
                src={logoSrc}
                alt="TaveStack Logo"
                width={150}
                height={28}
                className="w-full h-auto max-h-7"
                priority
                style={{
                    transition: "opacity 0.2s ease-in-out",
                    objectFit: "contain",
                    maxWidth: "100%"
                }}
            />
        </div>
    );
};

// Client-side only component for theme-aware icon mark
const ThemeAwareIconMark: FC<LucideProps> = (props) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Use theme-specific icon mark paths - default to dark theme for SSR
    const iconSrc = !mounted || resolvedTheme === "dark"
        ? "/images/temp/TaveStack Icon Mark (White no BG).png"
        : "/images/temp/TaveStack Icon Mark (Black no BG).png";

    return (
        <div className={props.className}>
            <Image
                src={iconSrc}
                alt="TaveStack Icon"
                width={32}
                height={32}
                className="w-full h-auto max-h-8"
                priority
                style={{
                    transition: "opacity 0.2s ease-in-out",
                    objectFit: "contain",
                    maxWidth: "100%"
                }}
            />
        </div>
    );
};

const Icons = {
    icon: (props: LucideProps) => (
        <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.10015 8.93079C3.58098 9.29022 3.52079 10.0349 3.9755 10.4731L6.48394 12.8902C6.82469 13.2185 7.34894 13.263 7.74022 12.9969L15.3149 7.84481C16.3321 7.15299 17.6685 7.15219 18.6864 7.84281L27.573 13.8718C28.1216 14.244 28.4502 14.8639 28.4502 15.5269V27.9361C28.4502 28.3006 28.1547 28.596 27.7903 28.596C27.4239 28.596 27.3305 29.1039 27.6729 29.2343L32.5997 31.1103C32.9859 31.2573 33.42 31.1434 33.5885 30.7661C33.7883 30.3187 34 29.6064 34 28.596V11.596L18.7031 1.16174C17.6772 0.461905 16.3261 0.466584 15.305 1.1735L4.10015 8.93079Z" fill="url(#paint0_linear_701_154)" />
            <path d="M0 13.8985C0 13.0239 1.04349 12.5707 1.68261 13.1677L5.09031 16.3508C5.49522 16.729 5.72509 17.2583 5.72509 17.8123V28.596H15.9381C16.1768 28.596 16.4135 28.6387 16.6371 28.7221L28.1905 33.0315C28.7125 33.2262 28.5729 34 28.0157 34H3C1.34315 34 0 32.6569 0 31V13.8985Z" fill="url(#paint1_linear_701_154)" />
            <defs>
                <linearGradient id="paint0_linear_701_154" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
                <linearGradient id="paint1_linear_701_154" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580B" />
                    <stop offset="1" stopColor="#FB923C" />
                </linearGradient>
            </defs>
        </svg>
    ),
    logo: ThemeAwareLogo,
    iconMark: ThemeAwareIconMark,
};

export default Icons;
