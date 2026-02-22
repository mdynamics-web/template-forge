'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  return (
    <section className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 animated-gradient opacity-20"
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(194 100% 50%))",
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-6">
          {t("cta.title1")} <span className="gradient-text">{t("cta.title2")}</span>
        </h2>
        <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse-glow text-base px-10 py-6 font-bold"
          >
            {t("cta.button")}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
