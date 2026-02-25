"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleData {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  yOffset: number;
  xOffset: number;
  duration: number;
  delay: number;
  background: string;
}

const generateParticles = (): ParticleData[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    width: Math.random() * 4 + 1,
    height: Math.random() * 4 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    yOffset: Math.random() * 80 + 20,
    xOffset: Math.random() * 40 - 20,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    background:
      i % 3 === 0
        ? "hsl(var(--secondary) / 0.4)"
        : i % 3 === 1
        ? "hsl(var(--accent) / 0.3)"
        : "hsl(var(--secondary) / 0.2)",
  }));
};

export const DataParticles = () => {
  const particlesData = useMemo(() => generateParticles(), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlesData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.width,
            height: particle.height,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.background,
          }}
          animate={{
            y: [0, -particle.yOffset, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Flowing connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="10%"
          y1="20%"
          x2="40%"
          y2="80%"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.5"
          className="flowing-line"
        />
        <motion.line
          x1="60%"
          y1="10%"
          x2="90%"
          y2="70%"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          className="flowing-line"
          style={{ animationDelay: "1s" }}
        />
        <motion.line
          x1="30%"
          y1="50%"
          x2="70%"
          y2="30%"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.5"
          className="flowing-line"
          style={{ animationDelay: "2s" }}
        />
      </svg>
    </div>
  );
};
