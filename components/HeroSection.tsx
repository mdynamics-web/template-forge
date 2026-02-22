'use client';

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const t = useTranslations();

  const stats = [
    { value: t("hero.stat1.value"), label: t("hero.stat1.label") },
    { value: t("hero.stat2.value"), label: t("hero.stat2.label") },
    { value: t("hero.stat3.value"), label: t("hero.stat3.label") },
    { value: t("hero.stat4.value"), label: t("hero.stat4.label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={heroBg} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-5 py-2.5 mb-8">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-semibold">{t("hero.badge")}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6"
        >
          {t("hero.title1")}{" "}
          <span className="gradient-text">{t("hero.title2")}</span>
          <br />
          <span className="text-secondary">{t("hero.title3")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan text-base px-8 py-6 font-bold group"
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 text-base px-8 py-6"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.cta2")}
          </Button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-primary-foreground/10 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-primary-foreground/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
