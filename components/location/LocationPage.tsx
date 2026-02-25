"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocationPage } from "./hooks/useLocationPage";
import { StickyCta } from "./components/StickyCta";
import { HeroSection } from "./sections/HeroSection";
import { RealitySection } from "./sections/RealitySection";
import { ServicesSection } from "./sections/ServicesSection";
import { CaseStudySection } from "./sections/CaseStudySection";
import { ProcessSection } from "./sections/ProcessSection";
import { AuthoritySection } from "./sections/AuthoritySection";
import { CTASection } from "./sections/CTASection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { LocationPageProps } from "./types/location.types";

/**
 * LocationPage Component - Refactored following SOLID principles
 * 
 * S - Single Responsibility: Each section handles its own rendering
 * O - Open/Closed: Extended through props, closed for modification
 * L - Liskov Substitution: Sections are interchangeable
 * I - Interface Segregation: Props are specific to each component
 * D - Dependency Inversion: Depends on abstractions (types) not concretions
 */
const LocationPage = ({ city = "alicante" }: LocationPageProps) => {
  const t = useTranslations();
  const { locationData, stickyVisible, scrollToForm } = useLocationPage({
    city,
    t,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky CTA */}
      <StickyCta
        visible={stickyVisible}
        onCtaClick={scrollToForm}
        ctaText={t("location.stickyCta.button")}
        availableText={t("location.stickyCta.available")}
      />

      {/* Hero Section */}
      <HeroSection data={locationData} onCtaClick={scrollToForm} />

      {/* Reality Section */}
      <RealitySection data={locationData} />

      {/* Services Section */}
      <ServicesSection data={locationData} onCtaClick={scrollToForm} />

      {/* Case Study Section */}
      <CaseStudySection data={locationData} />

      {/* Process Section */}
      <ProcessSection data={locationData} />

      {/* Authority Section */}
      <AuthoritySection data={locationData} />

      {/* CTA Section */}
      <CTASection data={locationData} onCtaClick={scrollToForm} />

      {/* Contact Form Section */}
      <ContactFormSection t={t} />

      <Footer />
    </div>
  );
};

export default LocationPage;
