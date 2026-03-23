"use client";

import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { GridOverlay } from "@/components/alicante-landing/components/GridOverlay";
import { MetricCard } from "@/components/alicante-landing/components/MetricCard";
import { useTranslations } from "next-intl";

export const CaseStudySection = () => {
  const t = useTranslations("valencia.caseStudy");

  const metrics = [
    {
      end: Number(t("metrics.0.value")),
      suffix: t("metrics.0.suffix"),
      label: t("metrics.0.label"),
      sub: t("metrics.0.sub"),
      isDecimal: false,
    },
    {
      end: Number(t("metrics.1.value")),
      suffix: t("metrics.1.suffix"),
      label: t("metrics.1.label"),
      sub: t("metrics.1.sub"),
      isDecimal: false,
    },
    {
      end: Number(t("metrics.2.value")),
      suffix: t("metrics.2.suffix"),
      label: t("metrics.2.label"),
      sub: t("metrics.2.sub"),
      isDecimal: true,
    },
  ];

  return (
    <section
      id="caso-real"
      className="relative bg-primary section-padding overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(194 100% 50% / 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, hsl(250 100% 69% / 0.05) 0%, transparent 50%)",
        }}
      />
      <GridOverlay />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            <Star className="w-3.5 h-3.5" />
            {t("badge")}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-foreground mt-4 mb-5">
            {t("title")}
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
            {t("description")}
          </p>
        </FadeSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} delay={i * 0.15} />
          ))}
        </div>

        <FadeSection className="text-center">
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {t("conclusion")}
          </p>
          <Button
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:border-primary-foreground/30 px-8 py-4 h-auto rounded-xl transition-all duration-300 text-base"
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("ctaText")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </FadeSection>
      </div>
    </section>
  );
};
