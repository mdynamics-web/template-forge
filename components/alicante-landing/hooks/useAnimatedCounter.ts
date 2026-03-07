'use client'

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook for animated counter
 * Follows Single Responsibility Principle - handles counter animation logic
 */
export const useAnimatedCounter = (
  end: number,
  duration: number = 1500,
  inViewOptions = { once: true, amount: 0.5 }
) => {
  const ref = useRef(null);
  const inView = useInView(ref, inViewOptions);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { ref, value };
};
