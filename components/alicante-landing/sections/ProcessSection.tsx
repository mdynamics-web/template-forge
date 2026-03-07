"use client";

import { Zap } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { ProcessStep } from "@/components/alicante-landing/components/ProcessStep";
import { useTranslations } from "next-intl";

/**
 * Process section with i18n
 * Follows Single Responsibility - displays process steps
 * Follows Open/Closed - easy to add/modify steps via data
 */
export const ProcessSection = () => {
  const t = useTranslations("alicante.process");

  const steps = [
        {
          num: t("steps.0.num"),
          title: t("steps.0.title"),
          text: t("steps.0.text"),
        },
        {
          num: t("steps.1.num"),
          title: t("steps.1.title"),
          text: t("steps.1.text"),
        },
        {
          num: t("steps.2.num"),
          title: t("steps.2.title"),
          text: t("steps.2.text"),
        },
      ]
  
  return (
    <section className="bg-background section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            <Zap className="w-3.5 h-3.5" />
            {t("tag")}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mt-4">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
        </FadeSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-[2px]">
            <div
              className="w-full h-full rounded-full opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(194 100% 50%))",
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <ProcessStep key={i} {...step} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
