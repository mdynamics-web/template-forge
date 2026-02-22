'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap, Brain, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const DifferentiatorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const differentiators = [
    { icon: Brain, title: t("diff.d1.title"), description: t("diff.d1.desc") },
    { icon: Zap, title: t("diff.d2.title"), description: t("diff.d2.desc") },
    { icon: ShieldCheck, title: t("diff.d3.title"), description: t("diff.d3.desc") },
    { icon: Users, title: t("diff.d4.title"), description: t("diff.d4.desc") },
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(194 100% 50%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("diff.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mt-3">{t("diff.title")}</h2>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto text-lg">{t("diff.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
