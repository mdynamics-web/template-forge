"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { LocationData } from "../types/location.types";

interface CaseStudySectionProps {
  data: LocationData;
}

export const CaseStudySection = ({ data }: CaseStudySectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Caso de Éxito
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3">
            {data.caseStudy.businessName}
          </h2>
          <p className="text-muted-foreground text-lg">
            {data.caseStudy.industry}
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border card-shadow"
          >
            <h3 className="font-semibold text-xl text-muted-foreground mb-6">
              {data.caseStudy.before.title}
            </h3>
            <div className="space-y-4">
              {data.caseStudy.before.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">
                    {item.label}
                  </span>
                  <span className="font-bold text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl gradient-bg text-primary-foreground card-shadow-hover"
          >
            <h3 className="font-semibold text-xl mb-6">
              {data.caseStudy.after.title}
            </h3>
            <div className="space-y-4">
              {data.caseStudy.after.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-primary-foreground/80 text-sm">
                    {item.label}
                  </span>
                  <span className="font-bold text-primary-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {data.caseStudy.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary/5 border border-secondary/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix=""
                />
              </div>
              <div className="text-muted-foreground text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
