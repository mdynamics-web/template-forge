'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Paintbrush, Workflow, LayoutDashboard, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  const services = [
    { icon: Globe, title: t("services.s1.title"), description: t("services.s1.desc"), color: "secondary" },
    { icon: Search, title: t("services.s2.title"), description: t("services.s2.desc"), color: "secondary" },
    { icon: ShoppingBag, title: t("services.s3.title"), description: t("services.s3.desc"), color: "accent" },
    { icon: Paintbrush, title: t("services.s4.title"), description: t("services.s4.desc"), color: "secondary" },
    { icon: Workflow, title: t("services.s5.title"), description: t("services.s5.desc"), color: "accent" },
    { icon: LayoutDashboard, title: t("services.s6.title"), description: t("services.s6.desc"), color: "secondary" },
  ];

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("services.tag")}</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
            {t("services.title1")} <span className="gradient-text">{t("services.title2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  service.color === "accent" ? "bg-accent/10" : "bg-secondary/10"
                }`}
              >
                <service.icon className={`w-7 h-7 ${service.color === "accent" ? "text-accent" : "text-secondary"}`} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3 min-h-[3.5rem]">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  service.color === "accent" ? "glow-violet" : "glow-cyan"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
