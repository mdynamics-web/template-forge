"use client";

import { Globe, TrendingUp, Zap, Shield } from "lucide-react";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ValenciaImage from "@/assets/desarrollo_y_diseño_web_y_seo_en_valencia.jpg";
import SectionTitle from "@/components/ui/SectionTitle";

export const WhyValenciaSection = () => {
  const t = useTranslations("valencia.why");

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
      <div className="max-w-6xl mx-auto">
        <FadeSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em] ">
            <Globe className="w-3.5 h-3.5" />
            {t("tag")}
          </span>
          <SectionTitle
            firstTitle={t("title")}
            secondTitle={t("titleHighlight")}
            className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3 mb-12"
          />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeSection delay={0.2} className="relative order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-secondary/5 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-2xl group-hover:border-secondary/30 transition-all duration-500 group-hover:shadow-secondary/10">
                  <Image
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    src={ValenciaImage}
                    alt="Diseño web y SEO en Valencia, Ribera Alta y Alzira - Áreas de servicio de Corexia"
                    title="Agencia de diseño web y SEO en Valencia, Ribera Alta y Alzira"
                    width={600}
                    height={600}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </FadeSection>

            <div className="order-1 lg:order-2">
              <FadeSection delay={0.3}>
                <div className="text-muted-foreground text-base leading-[1.9] space-y-6 text-left">
                  <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-secondary first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8]">
                    {t("paragraphs.0")}
                  </p>
                  <p>{t("paragraphs.1")}</p>
                  <p className="font-medium text-foreground/90">{t("paragraphs.2")}</p>
                  <p className="italic border-l-4 border-secondary/40 pl-4 py-2 bg-secondary/5 rounded-r">
                    {t("paragraphs.3")}
                  </p>
                </div>
              </FadeSection>
            </div>
          </div>
        </FadeSection>

        <div className="grid sm:grid-cols-3 gap-4">
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
    </section>
  );
};
