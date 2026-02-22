'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  );
}

