"use client";

import { motion } from "framer-motion";
import { LocationData } from "../types/location.types";

interface ProcessSectionProps {
  data: LocationData;
}

export const ProcessSection = ({ data }: ProcessSectionProps) => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            {data.process.tag}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground">
            {data.process.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div
                  className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
