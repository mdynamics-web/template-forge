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
  
  // City coordinates as % of the container (accounting for p-8 SVG padding)
  const cityCoordinates = [
    { x: 77, y: 61 }, // Alicante (capital, east coast)
    { x: 61, y: 79 }, // Torrevieja (south coast)
    { x: 57, y: 66 }, // Elche (inland, SW of Alicante)
    { x: 82, y: 36 }, // Benidorm (NE coast)
    { x: 41, y: 76 }, // Orihuela (south inland)
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
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-8 opacity-30">
        <path
          d="M 14,10 L 32,3 L 50,2 L 65,5 L 78,8 L 87,15 L 90,24 L 87,33 L 85,43 L 86,53 L 82,63 L 76,72 L 70,79 L 64,85 L 55,90 L 44,88 L 32,80 L 24,70 L 16,58 L 12,44 L 14,30 L 14,18 Z"
          fill="hsl(194 100% 50% / 0.07)"
          stroke="hsl(194 100% 50%)"
          strokeWidth="0.6"
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
