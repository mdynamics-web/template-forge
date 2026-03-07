"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { useTranslations } from "next-intl";

/**
 * FAQ section with i18n
 * Follows Single Responsibility - displays FAQs
 * Follows Open/Closed - easy to add FAQs via data
 */
export const FAQSection = () => {
  const t = useTranslations("alicante.faq");

  const questions = [
        {
          question: t("questions.0.question"),
          answer: t("questions.0.answer"),
        },
        {
          question: t("questions.1.question"),
          answer: t("questions.1.answer"),
        },
        {
          question: t("questions.2.question"),
          answer: t("questions.2.answer"),
        },
        {
          question: t("questions.3.question"),
          answer: t("questions.3.answer"),
        },
        {
          question: t("questions.4.question"),
          answer: t("questions.4.answer"),
        },
      ]
  
  return (
    <section className="bg-card section-padding">
      <div className="max-w-[720px] mx-auto">
        <FadeSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.1em]">
            {t("tag")}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mt-4">
            {t("title")}
          </h2>
        </FadeSection>

        <FadeSection>
          <Accordion type="single" collapsible className="space-y-3">
            {questions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-2xl px-6 data-[state=open]:border-secondary/30 data-[state=open]:shadow-[0_4px_20px_rgba(0,194,255,0.06)] transition-all duration-300"
              >
                <AccordionTrigger className="font-display font-semibold text-[15px] text-foreground hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-[1.8] pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeSection>
      </div>
    </section>
  );
};
