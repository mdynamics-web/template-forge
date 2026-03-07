'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { useAlicanteTranslations } from "@/components/alicante-landing/hooks/useAlicanteTranslations";

/**
 * Interactive Alicante map component with i18n
 * Follows Single Responsibility - displays interactive map
 */
export const AlicanteMap = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const { why } = useAlicanteTranslations();
  
  // City coordinates (not translatable)
  const cityCoordinates = [
    { x: 60, y: 45 }, // Alicante
    { x: 68, y: 72 }, // Torrevieja
    { x: 42, y: 52 }, // Elche
    { x: 50, y: 28 }, // Benidorm
    { x: 72, y: 62 }, // Orihuela
  ];
  
  const cities = why.cities.map((city, i) => ({
    ...city,
    ...cityCoordinates[i],
  }));

  return (
    <div className="relative w-full h-full min-h-[420px] bg-primary rounded-3xl overflow-hidden flex items-center justify-center border border-secondary/10">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(194 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(194 100% 50%) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, hsl(194 100% 50% / 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Province outline */}
      <svg viewBox="0 0 100 100" className="w-full h-full max-w-[400px] p-8 opacity-20">
        <path
          d="M20,10 L40,5 L65,8 L80,15 L85,30 L78,50 L72,65 L60,80 L45,90 L30,85 L22,70 L18,50 L15,30 Z"
          fill="none"
          stroke="hsl(194 100% 50%)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Cities */}
      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute cursor-pointer"
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseEnter={() => setHoveredCity(city.name)}
          onMouseLeave={() => setHoveredCity(null)}
        >
          {/* Pulse ring */}
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-secondary/30 animate-ping" />
          <div className="relative w-3 h-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(0,194,255,0.6)]" />

          {/* Tooltip */}
          {hoveredCity === city.name && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-primary/95 backdrop-blur-sm border border-secondary/30 rounded-xl px-4 py-2 whitespace-nowrap shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <span className="text-xs font-semibold text-secondary">
                {city.client}
              </span>
              <span className="text-xs text-primary-foreground/60">
                {" "}
                · {city.name}
              </span>
            </motion.div>
          )}
        </div>
      ))}

      {/* Label */}
      <div className="absolute bottom-6 left-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-secondary/60 font-semibold">
          Provincia de Alicante
        </span>
      </div>
    </div>
  );
};
