import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import ProblemSection from "@/components/problem-section";
import AfricanAdvantage from "@/components/african-advantage";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            {/* Hero with value proposition */}
            <section className="w-full">
                <Hero />
            </section>

            {/* Problem statement - why they need this */}
            <section className="w-full">
                <ProblemSection />
            </section>

            {/* Solution - How it works (Connect, Automate, Optimize) */}
            <section className="w-full">
                <HowItWorks />
            </section>

            {/* Why Tavestack - Solution perks */}
            <section className="w-full">
                <Perks />
            </section>

            {/* Features overview */}
            <section className="w-full">
                <Features />
            </section>

            {/* African Advantage - Local focus */}
            <section className="w-full">
                <AfricanAdvantage />
            </section>

            {/* Social proof - Testimonials */}
            <section className="w-full">
                <Testimonials />
            </section>

            {/* Pricing section */}
            <section className="w-full">
                <Pricing />
            </section>

            {/* FAQ section */}
            <section className="w-full">
                <FAQ />
            </section>

            {/* Final CTA */}
            <section className="w-full">
                <CTA />
            </section>
        </div>
    );
};

export default HomePage;
