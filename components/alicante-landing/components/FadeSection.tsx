'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Reusable scroll animation wrapper
 * Follows Open/Closed Principle - configurable via props
 */
interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeSection = ({
  children,
  className = "",
  delay = 0,
}: FadeSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
