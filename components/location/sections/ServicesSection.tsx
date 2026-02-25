"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "../components/ServiceCard";
import { DataParticles } from "../components/DataParticles";
import { LocationData } from "../types/location.types";

interface ServicesSectionProps {
  data: LocationData;
  onCtaClick: () => void;
}

export const ServicesSection = ({ data, onCtaClick }: ServicesSectionProps) => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <DataParticles />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            {data.services.tag}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
            {data.services.title}
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.services.items.map((item, idx) => (
            <ServiceCard key={idx} item={item} index={idx} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-bold"
          >
            {data.hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
