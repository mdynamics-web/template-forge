"use client";

import { HeroSection } from "@/components/valencia-landing/sections/HeroSection";
import { TrustBarSection } from "@/components/valencia-landing/sections/TrustBarSection";
import { WhyValenciaSection } from "@/components/valencia-landing/sections/WhyValenciaSection";
import { ServicesSection } from "@/components/valencia-landing/sections/ServicesSection";
import { CaseStudySection } from "@/components/valencia-landing/sections/CaseStudySection";
import { ProcessSection } from "@/components/valencia-landing/sections/ProcessSection";
import { FAQSection } from "@/components/valencia-landing/sections/FAQSection";
import { ContactSection } from "@/components/valencia-landing/sections/ContactSection";

export const ValenciaWebDesignLanding = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <TrustBarSection />
        <WhyValenciaSection />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
};
