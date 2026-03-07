import { Zap } from "lucide-react";
import { FadeSection } from "./FadeSection";
import { ServiceCardProps } from "../types";

/**
 * Service card component
 * Follows Interface Segregation - only requires necessary props
 */
export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  chip,
  delay,
}: ServiceCardProps) => (
  <FadeSection delay={delay}>
    <div className="relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_8px_40px_rgba(0,194,255,0.1)] group h-full flex flex-col overflow-hidden">
      {/* Subtle corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, hsl(194 100% 50% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="w-14 h-14 rounded-2xl bg-secondary/8 border border-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/15 group-hover:border-secondary/25 transition-all duration-300">
        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
      </div>

      <h3 className="font-display font-bold text-lg text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-6 pt-5 border-t border-border">
        <span className="text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary px-4 py-2 rounded-full inline-flex items-center gap-1.5">
          <Zap className="w-3 h-3" />
          {chip}
        </span>
      </div>
    </div>
  </FadeSection>
);
