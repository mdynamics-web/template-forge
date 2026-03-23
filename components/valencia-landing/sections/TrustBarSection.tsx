"use client";

import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { useTranslations } from "next-intl";
import { localizeToValencia } from "@/components/valencia-landing/utils/localizeToValencia";

export const TrustBarSection = () => {
  const t = useTranslations("alicante.trust");
  const tv = (key: string) => localizeToValencia(t(key));

  const companies = [tv("companies.0"), tv("companies.1"), tv("companies.2")];

  return (
    <section className="bg-card py-10 border-b border-border">
      <FadeSection className="max-w-4xl mx-auto text-center px-6">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] font-medium mb-5">
          {tv("title")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {companies.map((name, i) => (
            <span
              key={i}
              className="font-display font-semibold text-foreground text-base sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeSection>
    </section>
  );
};
