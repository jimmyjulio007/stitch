'use client';

import { Header } from "@/widgets/header";
import {
    HeroSection,
    WorkSection,
    TrustedSection,
    ServicesSection,
    UnmatchedFeaturesSection,
    PricingSection,
    TestimonialSection,
    FaqSection,
    MarqueeSection,
    FooterSection
} from './sections';

export const HomePage = () => {
    return (
        <main className="w-full h-full">
            <Header />
            <HeroSection />
            <WorkSection />
            <TrustedSection />
            <ServicesSection />
            <UnmatchedFeaturesSection />
            <MarqueeSection />
            <PricingSection />
            <TestimonialSection />
            <FaqSection />
            <FooterSection />
        </main>
    );
};
