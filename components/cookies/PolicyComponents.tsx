/**
 * Cookie Policy Presentation Components
 * Following Single Responsibility Principle - each component has one clear purpose
 */

import { motion } from "framer-motion";
import type { CookiePolicySection } from "@/types/cookies";

interface SectionAnimatedProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionAnimated = ({ children, className = "" }: SectionAnimatedProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

interface PolicyHeroProps {
  title: string;
  lastUpdated: string;
}

export const PolicyHero = ({ title, lastUpdated }: PolicyHeroProps) => (
  <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-[100px]" />
    </div>
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <SectionAnimated>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
          {title}
        </h1>
        <p className="text-primary-foreground/60 text-sm">{lastUpdated}</p>
      </SectionAnimated>
    </div>
  </section>
);

interface PolicySectionProps {
  section: CookiePolicySection;
}

export const PolicySection = ({ section }: PolicySectionProps) => (
  <SectionAnimated>
    <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
      {section.title}
    </h2>
    <p className="text-muted-foreground leading-relaxed mb-4">
      {section.text}
    </p>
    {section.items && (
      <ul className="space-y-2 ml-6">
        {section.items.map((item, index) => (
          <li key={index} className="text-muted-foreground leading-relaxed list-disc">
            {item}
          </li>
        ))}
      </ul>
    )}
  </SectionAnimated>
);
