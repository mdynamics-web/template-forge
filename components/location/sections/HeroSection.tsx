"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { DataParticles } from "../components/DataParticles";
import { FloatingDashboard } from "../components/FloatingDashboard";
import { LocationData } from "../types/location.types";

interface HeroSectionProps {
  data: LocationData;
  onCtaClick: () => void;
}

export const HeroSection = ({ data, onCtaClick }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      <DataParticles />
      <div
        className="absolute inset-0 animated-gradient opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(217 75% 15%), hsl(194 100% 50%))",
          backgroundSize: "300% 300%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              {data.hero.badge}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.08] mb-6"
        >
          {data.hero.title1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
            {data.hero.titleCity}
          </span>
          <br />
          {data.hero.title2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-primary-foreground/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {data.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan text-lg font-bold"
          >
            {data.hero.cta}
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("reality")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg"
          >
            {data.hero.cta2}
          </Button>
        </motion.div>

        <FloatingDashboard />
      </div>
    </motion.section>
  );
};
