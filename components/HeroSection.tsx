import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  locale: string;
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
}

const HeroSection = ({
  locale,
  badge,
  title1,
  title2,
  title3,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
}: HeroSectionProps) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={60}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-primary/75 dark:bg-background/85" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40 animate-pulse"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%`, animationDelay: `${i * 300}ms` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-28 lg:py-40">
        <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-5 py-2.5 mb-8">
          <Zap className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-sm font-semibold">{badge}</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6">
          {title1} <span className="gradient-text">{title2}</span>
          <br />
          <span className="text-secondary">{title3}</span>
        </h1>

        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={`/${locale}/contact`}>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan text-base px-8 py-6 font-bold group"
            >
              {ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 text-base"
          >
            <Link href="#cases">{ctaSecondary}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-36 border-t border-primary-foreground/10 pt-14">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-primary-foreground/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
