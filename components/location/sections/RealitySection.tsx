"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { LocationData } from "../types/location.types";

interface RealitySectionProps {
  data: LocationData;
}

export const RealitySection = ({ data }: RealitySectionProps) => {
  return (
    <section id="reality" className="bg-background overflow-hidden">
      {/* Stats bar */}
      <div className="bg-primary py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.reality.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix=""
                />
              </div>
              <div className="text-primary-foreground/60 text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Split content */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
              {data.reality.tag}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {data.reality.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.reality.statements.map((statement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border card-shadow"
              >
                <statement.icon className="w-10 h-10 text-destructive mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {statement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
