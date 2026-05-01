import HeroSection from "@/components/home/hero-section";
import CoreConcept from "@/components/home/core-concept";
import TaveSpotlight from "@/components/home/tave-spotlight";
import ModularOs from "@/components/home/modular-os";
import Differentiator from "@/components/home/differentiator";
import SocialProof from "@/components/home/social-proof";
import PricingTeaser from "@/components/home/pricing-teaser";
import FinalCta from "@/components/home/final-cta";
import { SITE } from "@/constants/site";
import { SITE_URL } from "@/utils/metadata";

const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: "TaveStack Inc.",
    url: SITE_URL,
    logo: `${SITE_URL}/icons/TaveStack-Icon-Mark-_White-no-BG_.svg`,
    description: SITE.description,
    foundingLocation: { "@type": "Place", name: "Abuja, Nigeria" },
    address: {
        "@type": "PostalAddress",
        streetAddress: "A15, Aso Grove Estate",
        addressLocality: "Abuja",
        addressCountry: "NG",
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            email: SITE.contact.sales,
            contactType: "sales",
            telephone: SITE.phone,
            areaServed: ["NG", "KE", "GH", "ZA", "Worldwide"],
            availableLanguage: ["English", "French", "Hausa", "Yoruba", "Igbo", "Swahili", "Arabic"],
        },
        {
            "@type": "ContactPoint",
            email: SITE.contact.support,
            contactType: "customer support",
        },
    ],
    sameAs: [
        "https://twitter.com/tavestack",
        "https://www.linkedin.com/company/tavestack",
        "https://github.com/TaveStack-Org",
    ],
};

const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    publisher: { "@type": "Organization", name: SITE.name },
    potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/resources?q={search_term_string}`,
        "query-input": "required name=search_term_string",
    },
};

const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "ERP, CRM, HR, Finance",
    operatingSystem: "Web",
    description: SITE.description,
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        category: "Free OS access — pay per app module",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "40",
    },
};

const HomePage = () => {
    return (
        <div className="w-full relative flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([organizationLd, websiteLd, softwareLd]),
                }}
            />
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
