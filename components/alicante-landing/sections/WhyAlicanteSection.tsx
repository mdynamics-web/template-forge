"use client";

import { Globe, TrendingUp, Zap, Shield } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { AlicanteMap } from "@/components/alicante-landing/components/AlicanteMap";
import { useTranslations } from "next-intl";

/**
 * Why Alicante section with i18n
 * Follows Single Responsibility - explains local market benefits
 */
export const WhyAlicanteSection = () => {
  const t = useTranslations("alicante.why");
  
  const benefits = [
    {
      title: t("benefits.0.title"),
      text: t("benefits.0.text"),
      icon: TrendingUp,
    },
    {
      title: t("benefits.1.title"),
      text: t("benefits.1.text"),
      icon: Zap,
    },
    {
      title: t("benefits.2.title"),
      text: t("benefits.2.text"),
      icon: Shield,
    },
  ];

  return (
    <section className="bg-card section-padding">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[55%_45%] gap-16 items-start">
        <div>
          <FadeSection>
            <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em] mb-4">
              <Globe className="w-3.5 h-3.5" />
              {t("tag")}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mt-2 mb-8 leading-tight">
              {t("title")}{" "}
              <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <div className="text-muted-foreground text-[15px] leading-[1.8] space-y-5">
              <p>{t("paragraphs.0")}</p>
              <p>{t("paragraphs.1")}</p>
              <p>{t("paragraphs.2")}</p>
              <p>{t("paragraphs.3")}</p>
            </div>
          </FadeSection>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {benefits.map((benefit, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl border border-border p-6 h-full hover:border-secondary/30 transition-colors duration-300 group">
                  <benefit.icon className="w-5 h-5 text-secondary/60 group-hover:text-secondary transition-colors mb-3" />
                  <h3 className="font-display font-bold text-sm text-foreground mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>

        <FadeSection delay={0.2} className="lg:sticky lg:top-24">
          <AlicanteMap />
        </FadeSection>
      </div>
    </section>
  );
};
