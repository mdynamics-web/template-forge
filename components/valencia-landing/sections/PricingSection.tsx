"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const t = useTranslations("valencia.pricing");

  const rows = [
    {
      service: t("rows.webCorp.service"),
      market: t("rows.webCorp.market"),
      corexia: t("rows.webCorp.corexia"),
    },
    {
      service: t("rows.landing.service"),
      market: t("rows.landing.market"),
      corexia: t("rows.landing.corexia"),
    },
    {
      service: t("rows.store.service"),
      market: t("rows.store.market"),
      corexia: t("rows.store.corexia"),
    },
    {
      service: t("rows.seo.service"),
      market: t("rows.seo.market"),
      corexia: t("rows.seo.corexia"),
    },
  ];

  return (
    <section className="bg-background section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            {t("tag")}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mt-4">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/60 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>{t("colService")}</span>
              <span className="text-center">{t("colMarket")}</span>
              <span className="text-center text-secondary">{t("colCorexia")}</span>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center px-6 py-4 border-t border-border/50 hover:bg-muted/20 transition-colors"
              >
                <span className="font-medium text-foreground text-sm">{row.service}</span>
                <span className="text-center text-muted-foreground text-sm line-through opacity-60">
                  {row.market}
                </span>
                <span className="text-center text-secondary font-bold text-sm">
                  {row.corexia}
                </span>
              </div>
            ))}

            <div className="bg-secondary/10 border-t border-secondary/20 px-6 py-4 flex items-start gap-3">
              <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t("disclaimer")}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 transition-all duration-300"
            >
              {t("cta")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
