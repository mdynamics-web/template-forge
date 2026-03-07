'use client'

import { useAnimatedCounter } from "@/components/alicante-landing/hooks/useAnimatedCounter";

/**
 * Animated counter component
 * Follows Single Responsibility - only displays animated number
 */
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export const Counter = ({ end, suffix = "", duration = 1500 }: CounterProps) => {
  const { ref, value } = useAnimatedCounter(end, duration);

  return (
    <span ref={ref}>
      {value.toString()}
      {suffix}
    </span>
  );
};
