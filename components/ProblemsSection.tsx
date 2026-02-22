'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const ProblemsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const problems = [
    { icon: AlertTriangle, title: t("problems.card1.title"), description: t("problems.card1.desc") },
    { icon: TrendingDown, title: t("problems.card2.title"), description: t("problems.card2.desc") },
    { icon: Clock, title: t("problems.card3.title"), description: t("problems.card3.desc") },
  ];

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("problems.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
            {t("problems.title1")} <span className="gradient-text">{t("problems.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
