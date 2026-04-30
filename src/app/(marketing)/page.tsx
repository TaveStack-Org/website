import HeroSection from "@/components/home/hero-section";
import CoreConcept from "@/components/home/core-concept";
import TaveSpotlight from "@/components/home/tave-spotlight";
import ModularOs from "@/components/home/modular-os";
import Differentiator from "@/components/home/differentiator";
import SocialProof from "@/components/home/social-proof";
import PricingTeaser from "@/components/home/pricing-teaser";
import FinalCta from "@/components/home/final-cta";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <HeroSection />
            <CoreConcept />
            <TaveSpotlight />
            <ModularOs />
            <Differentiator />
            <SocialProof />
            <PricingTeaser />
            <FinalCta />
        </div>
    );
};

export default HomePage;
