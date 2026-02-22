'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "OpenAI", category: "AI" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Stripe", category: "Payments" },
  { name: "Vercel", category: "Hosting" },
  { name: "Figma", category: "Design" },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("tech.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
            {t("tech.title1")} <span className="gradient-text">{t("tech.title2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("tech.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-card border border-border hover:border-secondary/40 hover:glow-cyan transition-all duration-300 group cursor-default"
            >
              <span className="font-display font-bold text-foreground group-hover:text-secondary transition-colors">{tech.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
