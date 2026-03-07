'use client'
import { useState, useEffect } from "react";

/**
 * Custom hook for sticky CTA visibility
 * Follows Single Responsibility Principle - handles scroll visibility logic
 */
export const useStickyVisibility = (threshold: number = 600) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
};
