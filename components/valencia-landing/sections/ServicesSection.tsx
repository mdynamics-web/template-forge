"use client";

import { Monitor, RefreshCw, ShoppingCart, TrendingUp } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { ServiceCard } from "@/components/alicante-landing/components/ServiceCard";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { localizeToValencia } from "@/components/valencia-landing/utils/localizeToValencia";

export const ServicesSection = () => {
  const t = useTranslations("alicante.services");
  const tv = (key: string) => localizeToValencia(t(key));

  const list = [
    {
      icon: Monitor,
      title: tv("list.0.title"),
      description: tv("list.0.description"),
      chip: tv("list.0.chip"),
    },
    {
      icon: TrendingUp,
      title: tv("list.1.title"),
      description: tv("list.1.description"),
      chip: tv("list.1.chip"),
    },
    {
      icon: ShoppingCart,
      title: tv("list.2.title"),
      description: tv("list.2.description"),
      chip: tv("list.2.chip"),
    },
    {
      icon: RefreshCw,
      title: tv("list.3.title"),
      description: tv("list.3.description"),
      chip: tv("list.3.chip"),
    },
  ];

  return (
    <section className="bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <FadeSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            <Monitor className="w-3.5 h-3.5" />
            {tv("tag")}
          </span>
          <SectionTitle
            firstTitle={tv("title")}
            secondTitle={tv("titleHighlight")}
            description={tv("subtitle")}
          />
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
