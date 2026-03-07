"use client";

import { Monitor, RefreshCw, ShoppingCart, TrendingUp } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { ServiceCard } from "@/components/alicante-landing/components/ServiceCard";
import { useTranslations } from "next-intl";

/**
 * Services section with i18n
 * Follows Single Responsibility - displays services
 * Follows Open/Closed - easy to add new services via data
 */
export const ServicesSection = () => {
  const t = useTranslations("alicante.services");

  const list = [
        {
          icon: Monitor,
          title: t("list.0.title"),
          description: t("list.0.description"),
          chip: t("list.0.chip"),
        },
        {
          icon: TrendingUp,
          title: t("list.1.title"),
          description: t("list.1.description"),
          chip: t("list.1.chip"),
        },
        {
          icon: ShoppingCart,
          title: t("list.2.title"),
          description: t("list.2.description"),
          chip: t("list.2.chip"),
        },
        {
          icon: RefreshCw,
          title: t("list.3.title"),
          description: t("list.3.description"),
          chip: t("list.3.chip"),
        },
      ]
  
  return (
    <section className="bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <FadeSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            <Monitor className="w-3.5 h-3.5" />
            {t("tag")}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mt-4 mb-5">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-[15px] leading-relaxed">
            {t("subtitle")}
          </p>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
