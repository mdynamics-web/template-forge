"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroParticles } from "@/components/alicante-landing/components/HeroParticles";
import { GridOverlay } from "@/components/alicante-landing/components/GridOverlay";
import { Counter } from "@/components/alicante-landing/components/Counter";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

/**
 * Hero section component with i18n
 * Follows Single Responsibility - handles only hero presentation
 */
export const HeroSection = () => {
  const { heroRef, heroY, heroOpacity } = useHeroParallax();
  const t = useTranslations("alicante.hero");

  const metrics = [
    {
      end: Number(t("metrics.m1.value")),
      suffix: t("metrics.m1.suffix"),
      label: t("metrics.m1.label"),
    },
    {
      end: Number(t("metrics.m2.value")),
      suffix: t("metrics.m2.suffix"),
      label: t("metrics.m2.label"),
    },
    {
      end: Number(t("metrics.m3.value")),
      suffix: t("metrics.m3.suffix"),
      label: t("metrics.m3.label"),
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Multi-layer background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.88) 30%, hsl(var(--accent) / 0.38) 70%, hsl(var(--primary) / 0.95) 100%)",
        }}
      />
      <HeroParticles />
      <GridOverlay />

      {/* Radial glow accents */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-[800px] mx-auto text-center px-6 py-32"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/[0.08] backdrop-blur-md rounded-full px-5 py-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary">
            {t("badge")}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] text-primary-foreground mb-7"
        >
          {t("title")}
          <br className="hidden lg:block" />{" "}
          <span className="relative">
            <span className="gradient-text">{t("titleHighlight")}</span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(194 100% 50%), hsl(250 100% 69%))",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-primary-foreground/70 text-lg sm:text-xl max-w-[580px] mx-auto mb-12 leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href={`/contact`}>
            <Button className="bg-secondary text-secondary-foreground font-bold px-8 py-4 h-auto rounded-xl shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:bg-secondary/90 transition-all duration-300 text-base gap-2 group">
              {t("cta1")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:border-primary-foreground/30 px-8 py-4 h-auto rounded-xl transition-all duration-300 text-base"
            onClick={() =>
              document
                .getElementById("caso-real")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("cta2")}
          </Button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-8"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="text-center relative">
              {i > 0 && (
                <div className="absolute left-0 top-2 bottom-2 w-px bg-primary-foreground/10 hidden sm:block" />
              )}
              <div className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-primary-foreground">
                <Counter end={metric.end} suffix={metric.suffix} />
              </div>
              <p className="text-primary-foreground/40 text-[11px] sm:text-xs mt-2 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
