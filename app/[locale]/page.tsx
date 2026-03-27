import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("hero");

  const stats = [
    { value: t("stat1.value"), label: t("stat1.label") },
    { value: t("stat2.value"), label: t("stat2.label") },
    { value: t("stat3.value"), label: t("stat3.label") },
    { value: t("stat4.value"), label: t("stat4.label") },
  ];
  const belowFoldStyle = {
    contentVisibility: "auto" as const,
    containIntrinsicSize: "900px",
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        locale={locale}
        badge={t("badge")}
        title1={t("title1")}
        title2={t("title2")}
        title3={t("title3")}
        subtitle={t("subtitle")}
        ctaPrimary={t("cta1")}
        ctaSecondary={t("cta2")}
        stats={stats}
      />
      <div style={belowFoldStyle}>
        <ProblemsSection />
      </div>
      <div style={belowFoldStyle}>
        <ServicesSection />
      </div>
      <div style={belowFoldStyle}>
        <DifferentiatorsSection />
      </div>
      <div style={belowFoldStyle}>
        <ProcessSection />
      </div>
      <div style={belowFoldStyle}>
        <CaseStudiesSection />
      </div>
      <div style={belowFoldStyle}>
        <TechStackSection />
      </div>
      <div style={belowFoldStyle}>
        <CTASection />
      </div>
    </div>
  );
}

