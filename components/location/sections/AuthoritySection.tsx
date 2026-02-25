"use client";

import { motion } from "framer-motion";
import { LocationData } from "../types/location.types";

interface AuthoritySectionProps {
  data: LocationData;
}

export const AuthoritySection = ({ data }: AuthoritySectionProps) => {
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
            {data.authority.tag}
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            {data.authority.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.authority.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-2xl gradient-bg text-primary-foreground text-center"
        >
          <p className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
            &ldquo;{data.testimonialPlaceholder.quote}&rdquo;
          </p>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-lg">
              {data.testimonialPlaceholder.author}
            </p>
            <p className="text-primary-foreground/70 text-sm">
              {data.testimonialPlaceholder.company}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
