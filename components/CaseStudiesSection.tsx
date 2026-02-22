'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const cases = [
    {
      title: t("cases.c1.title"),
      category: t("cases.c1.category"),
      description: t("cases.c1.desc"),
      metrics: [
        { label: "Revenue Increase", value: "+240%" },
        { label: "Page Load Time", value: "0.8s" },
        { label: "Lead Conversion", value: "+180%" },
      ],
    },
    {
      title: t("cases.c2.title"),
      category: t("cases.c2.category"),
      description: t("cases.c2.desc"),
      metrics: [
        { label: "Cost Savings", value: "$2M/yr" },
        { label: "Process Efficiency", value: "+75%" },
        { label: "Patient Satisfaction", value: "+45%" },
      ],
    },
    {
      title: t("cases.c3.title"),
      category: t("cases.c3.category"),
      description: t("cases.c3.desc"),
      metrics: [
        { label: "Organic Traffic", value: "+450%" },
        { label: "Avg. Order Value", value: "+35%" },
        { label: "Cart Abandonment", value: "-42%" },
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

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{cs.category}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">{cs.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cs.description}</p>

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
