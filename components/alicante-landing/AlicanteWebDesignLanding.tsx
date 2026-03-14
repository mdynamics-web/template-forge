"use client";

import { HeroSection } from "@/components/alicante-landing/sections/HeroSection";
import { TrustBarSection } from "@/components/alicante-landing/sections/TrustBarSection";
import { WhyAlicanteSection } from "@/components/alicante-landing/sections/WhyAlicanteSection";
import { ServicesSection } from "@/components/alicante-landing/sections/ServicesSection";
import { CaseStudySection } from "@/components/alicante-landing/sections/CaseStudySection";
import { ProcessSection } from "@/components/alicante-landing/sections/ProcessSection";
import { FAQSection } from "@/components/alicante-landing/sections/FAQSection";
import { ContactSection } from "@/components/alicante-landing/sections/ContactSection";

export const AlicanteWebDesignLanding = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <TrustBarSection />
        <WhyAlicanteSection />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
};
