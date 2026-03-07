'use client'

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Custom hook for hero parallax scroll animation
 * Follows Single Responsibility Principle - handles only scroll animation logic
 */
export const useHeroParallax = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return {
    heroRef,
    heroY,
    heroOpacity,
  };
};
