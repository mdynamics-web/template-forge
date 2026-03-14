import { FadeSection } from "./FadeSection";
import { Counter } from "./Counter";
import { MetricCardProps } from "../types";

/**
 * Metric card component for case study
 * Follows Interface Segregation - only requires necessary props
 */
export const MetricCard = ({
  end,
  suffix,
  label,
  sub,
  delay,
}: MetricCardProps) => (
  <FadeSection delay={delay}>
    <div className="relative text-center p-8 rounded-2xl border border-secondary/10 bg-primary-foreground/[0.03] backdrop-blur-sm">
      <div className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-primary-foreground mb-3">
        <Counter end={end} suffix={suffix} />
      </div>
      <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
        {label}
      </p>
      <p className="text-primary-foreground/40 text-xs mt-2">{sub}</p>
    </div>
  </FadeSection>
);
