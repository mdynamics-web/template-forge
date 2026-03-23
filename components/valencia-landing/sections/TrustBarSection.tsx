"use client";

import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { useTranslations } from "next-intl";

export const TrustBarSection = () => {
  const t = useTranslations("valencia.trust");

  const companies = [t("companies.0"), t("companies.1"), t("companies.2")];

  return (
    <section className="bg-card py-10 border-b border-border">
      <FadeSection className="max-w-4xl mx-auto text-center px-6">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] font-medium mb-5">
          {t("title")}
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
