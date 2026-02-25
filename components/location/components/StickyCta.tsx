"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

interface StickyCtaProps {
  visible: boolean;
  onCtaClick: () => void;
  ctaText: string;
  availableText?: string;
}

export const StickyCta = memo(
  ({ visible, onCtaClick, ctaText, availableText }: StickyCtaProps) => {
    return (
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: visible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-xl border-t border-secondary/20 py-3 px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {availableText && (
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                {availableText}
              </span>
            </div>
          )}
          <Button
            onClick={onCtaClick}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold ml-auto"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    );
  }
);

StickyCta.displayName = "StickyCta";
