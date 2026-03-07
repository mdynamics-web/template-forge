import { FadeSection } from "./FadeSection";
import { ProcessStepProps } from "../types";

/**
 * Process step component
 * Follows Interface Segregation - only requires necessary props
 */
export const ProcessStep = ({
  num,
  title,
  text,
  delay,
}: ProcessStepProps) => (
  <FadeSection delay={delay} className="flex-1 relative">
    <div className="flex flex-col items-center text-center gap-5">
      <div className="relative">
        <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-secondary/20 blur-xl" />
        <div className="relative w-16 h-16 rounded-2xl bg-secondary text-secondary-foreground font-display font-bold text-xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,194,255,0.3)]">
          {num}
        </div>
      </div>
      <h3 className="font-display font-bold text-foreground text-lg">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
        {text}
      </p>
    </div>
  </FadeSection>
);
