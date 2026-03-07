"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated particles background effect
 * Follows Single Responsibility - purely visual component
 * Memoized particle properties for React purity
 */

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  background: string;
  yRange: number;
  xRange: number;
  duration: number;
  delay: number;
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    background:
      i % 3 === 0
        ? "hsl(194 100% 50% / 0.4)"
        : i % 3 === 1
        ? "hsl(250 100% 69% / 0.3)"
        : "hsl(0 0% 100% / 0.15)",
    yRange: -30 - Math.random() * 40,
    xRange: Math.random() * 20 - 10,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 3,
  }));
};

export const HeroParticles = () => {
  const particles = useMemo(() => generateParticles(40), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.background,
          }}
          animate={{
            y: [0, particle.yRange, 0],
            x: [0, particle.xRange, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
