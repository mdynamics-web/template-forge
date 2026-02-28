'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import wecleanLogo from "@/assets/weclean.webp";
import taxitimeLogo from "@/assets/taxitime.webp";
import SanajaLogo from "@/assets/Sanaja-Beauty.webp";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const cases = [
    {
      title: t("cases.c1.title"),
      category: t("cases.c1.category"),
      description: t("cases.c1.desc"),
      url: "https://www.wecleantorrevieja.es/es",
      logo: wecleanLogo,
      metrics: [
        { label: t("cases.c1.metric1.label"), value: t("cases.c1.metric1.value") },
        { label: t("cases.c1.metric2.label"), value: t("cases.c1.metric2.value") },
        { label: t("cases.c1.metric3.label"), value: t("cases.c1.metric3.value") },
      ],
    },
    {
      title: t("cases.c2.title"),
      category: t("cases.c2.category"),
      description: t("cases.c2.desc"),
      url: "https://taxitimetorreviejatoairport.com/es/",
      logo: taxitimeLogo,
      logoDarkBg: true,
      metrics: [
        { label: t("cases.c2.metric1.label"), value: t("cases.c2.metric1.value") },
        { label: t("cases.c2.metric2.label"), value: t("cases.c2.metric2.value") },
        { label: t("cases.c2.metric3.label"), value: t("cases.c2.metric3.value") },
      ],
    },
    {
      title: t("cases.c3.title"),
      category: t("cases.c3.category"),
      description: t("cases.c3.desc"),
      url: "https://sanajaquesada.com/",
      logo: SanajaLogo,
      logoDarkBg: false,
      metrics: [
        { label: t("cases.c3.metric1.label"), value: t("cases.c3.metric1.value") },
        { label: t("cases.c3.metric2.label"), value: t("cases.c3.metric2.value") },
        { label: t("cases.c3.metric3.label"), value: t("cases.c3.metric3.value") },
      ],
    },
  ];

  return (
    <section id="cases" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("cases.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
            {t("cases.title1")} <span className="gradient-text">{t("cases.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
              {...(cs.url && {
                onClick: () => window.open(cs.url, '_blank'),
                style: { cursor: 'pointer' }
              })}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{cs.category}</span>
                {cs.url && <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />}
              </div>
              {cs.logo ? (
                <div className="mb-6 w-full flex items-center justify-center h-20">
                  <div className={`rounded-lg p-4 ${cs.logoDarkBg ? 'bg-gray-600' : 'bg-white'}`}>
                    <Image src={cs.logo} alt={cs.title} height={60} className="object-contain max-h-12" />
                  </div>
                </div>
              ) : (
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{cs.title}</h3>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 lg:min-h-[10rem]">{cs.description}</p>

              <div className="space-y-3 pt-4 border-t border-border">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{m.label}</span>
                    <span className="font-display font-bold text-foreground flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-secondary" />
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
