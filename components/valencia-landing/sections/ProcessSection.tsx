"use client";

import { Zap } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { ProcessStep } from "@/components/alicante-landing/components/ProcessStep";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { localizeToValencia } from "@/components/valencia-landing/utils/localizeToValencia";

export const ProcessSection = () => {
  const t = useTranslations("alicante.process");
  const tv = (key: string) => localizeToValencia(t(key));

  const steps = [
    {
      num: tv("steps.0.num"),
      title: tv("steps.0.title"),
      text: tv("steps.0.text"),
    },
    {
      num: tv("steps.1.num"),
      title: tv("steps.1.title"),
      text: tv("steps.1.text"),
    },
    {
      num: tv("steps.2.num"),
      title: tv("steps.2.title"),
      text: tv("steps.2.text"),
    },
  ];

  return (
    <section className="bg-background section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            <Zap className="w-3.5 h-3.5" />
            {tv("tag")}
          </span>
          <SectionTitle firstTitle={tv("title")} secondTitle={tv("titleHighlight")} />
        </FadeSection>

        <div className="relative">
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
