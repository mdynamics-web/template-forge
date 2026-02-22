'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Code2, BarChart3, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const steps = [
    { icon: Search, title: t("process.s1.title"), description: t("process.s1.desc") },
    { icon: Target, title: t("process.s2.title"), description: t("process.s2.desc") },
    { icon: Code2, title: t("process.s3.title"), description: t("process.s3.desc") },
    { icon: BarChart3, title: t("process.s4.title"), description: t("process.s4.desc") },
    { icon: Rocket, title: t("process.s5.title"), description: t("process.s5.desc") },
  ];

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("process.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
            {t("process.title1")} <span className="gradient-text">{t("process.title2")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-secondary text-xs font-bold mb-1">0{i + 1}</span>
                <h3 className="font-display font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
