"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ServiceItem } from "../types/location.types";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

export const ServiceCard = memo(({ item, index }: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer relative p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:border-secondary/30 transition-all duration-500"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <item.icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base text-foreground group-hover:text-secondary transition-colors">
              {item.title}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
            {item.desc}
          </p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground text-sm mt-3 pt-3 border-t border-border leading-relaxed">
                  {item.expandedDesc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";
