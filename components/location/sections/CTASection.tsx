"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { DataParticles } from "../components/DataParticles";
import { LocationData } from "../types/location.types";

interface CTASectionProps {
  data: LocationData;
  onCtaClick: () => void;
}

export const CTASection = ({ data, onCtaClick }: CTASectionProps) => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <DataParticles />
      <div
        className="absolute inset-0 animated-gradient opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(194 100% 50%))",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6">
            {data.cta.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
              {data.cta.titleCity}
            </span>
            {data.cta.title2}
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 leading-relaxed">
            {data.cta.subtitle}
          </p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-bold text-lg px-8"
          >
            {data.cta.button}
          </Button>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Zap className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-primary-foreground/60 text-sm">
              {data.cta.urgency}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
