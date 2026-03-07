"use client";

import { useTranslations } from "next-intl";
import { Clock, Mail, MapPin, Monitor, TrendingUp, ShoppingCart, RefreshCw } from "lucide-react";

/**
 * Custom hook for Alicante landing page translations
 * Follows Dependency Inversion Principle - abstracts translation logic
 */
export const useAlicanteTranslations = () => {
  const t = useTranslations("alicante");

  return {
    // Hero section
    hero: {
      badge: t("hero.badge"),
      title: t("hero.title"),
      titleHighlight: t("hero.titleHighlight"),
      description: t("hero.description"),
      cta1: t("hero.cta1"),
      cta2: t("hero.cta2"),
      metrics: [
        {
          end: Number(t("hero.metrics.m1.value")),
          suffix: t("hero.metrics.m1.suffix"),
          label: t("hero.metrics.m1.label"),
        },
        {
          end: Number(t("hero.metrics.m2.value")),
          suffix: t("hero.metrics.m2.suffix"),
          label: t("hero.metrics.m2.label"),
        },
        {
          end: Number(t("hero.metrics.m3.value")),
          suffix: t("hero.metrics.m3.suffix"),
          label: t("hero.metrics.m3.label"),
        },
      ],
    },

    // Trust bar
    trust: {
      title: t("trust.title"),
      companies: [
        t("trust.companies.0"),
        t("trust.companies.1"),
        t("trust.companies.2"),
      ],
    },

    // Why Alicante section
    why: {
      badge: t("why.tag"),
      tag: t("why.tag"),
      title: t("why.title"),
      titleHighlight: t("why.titleHighlight"),
      paragraph1: t("why.paragraphs.0"),
      paragraph2: t("why.paragraphs.1"),
      paragraph3: t("why.paragraphs.2"),
      paragraph4: t("why.paragraphs.3"),
      paragraphs: [
        t("why.paragraphs.0"),
        t("why.paragraphs.1"),
        t("why.paragraphs.2"),
        t("why.paragraphs.3"),
      ],
      benefit1Title: t("why.benefits.0.title"),
      benefit1Text: t("why.benefits.0.text"),
      benefit2Title: t("why.benefits.1.title"),
      benefit2Text: t("why.benefits.1.text"),
      benefit3Title: t("why.benefits.2.title"),
      benefit3Text: t("why.benefits.2.text"),
      benefits: [
        {
          title: t("why.benefits.0.title"),
          text: t("why.benefits.0.text"),
        },
        {
          title: t("why.benefits.1.title"),
          text: t("why.benefits.1.text"),
        },
        {
          title: t("why.benefits.2.title"),
          text: t("why.benefits.2.text"),
        },
      ],
      cities: [
        {
          name: t("why.cities.0.name"),
          client: t("why.cities.0.client"),
        },
        {
          name: t("why.cities.1.name"),
          client: t("why.cities.1.client"),
        },
        {
          name: t("why.cities.2.name"),
          client: t("why.cities.2.client"),
        },
        {
          name: t("why.cities.3.name"),
          client: t("why.cities.3.client"),
        },
        {
          name: t("why.cities.4.name"),
          client: t("why.cities.4.client"),
        },
      ],
    },

    // Services section
    services: {
      badge: t("services.tag"),
      tag: t("services.tag"),
      title: t("services.title"),
      titleHighlight: t("services.titleHighlight"),
      description: t("services.subtitle"),
      subtitle: t("services.subtitle"),
      list: [
        {
          icon: Monitor,
          title: t("services.list.0.title"),
          description: t("services.list.0.description"),
          chip: t("services.list.0.chip"),
        },
        {
          icon: TrendingUp,
          title: t("services.list.1.title"),
          description: t("services.list.1.description"),
          chip: t("services.list.1.chip"),
        },
        {
          icon: ShoppingCart,
          title: t("services.list.2.title"),
          description: t("services.list.2.description"),
          chip: t("services.list.2.chip"),
        },
        {
          icon: RefreshCw,
          title: t("services.list.3.title"),
          description: t("services.list.3.description"),
          chip: t("services.list.3.chip"),
        },
      ],
    },

    // Case study
    caseStudy: {
      tag: t("caseStudy.tag"),
      badge: t("caseStudy.badge"),
      company: t("caseStudy.badge"),
      title: t("caseStudy.title"),
      description: t("caseStudy.description"),
      metrics: [
        {
          end: Number(t("caseStudy.metrics.0.value")),
          suffix: t("caseStudy.metrics.0.suffix"),
          label: t("caseStudy.metrics.0.label"),
          sub: t("caseStudy.metrics.0.sub"),
          isDecimal: false,
        },
        {
          end: Number(t("caseStudy.metrics.1.value")),
          suffix: t("caseStudy.metrics.1.suffix"),
          label: t("caseStudy.metrics.1.label"),
          sub: t("caseStudy.metrics.1.sub"),
          isDecimal: false,
        },
        {
          end: Number(t("caseStudy.metrics.2.value")),
          suffix: t("caseStudy.metrics.2.suffix"),
          label: t("caseStudy.metrics.2.label"),
          sub: t("caseStudy.metrics.2.sub"),
          isDecimal: true,
        },
      ],
      conclusion: t("caseStudy.conclusion"),
      cta: t("caseStudy.ctaText"),
      ctaText: t("caseStudy.ctaText"),
    },

    // Process
    process: {
      badge: t("process.tag"),
      tag: t("process.tag"),
      title: t("process.title"),
      titleHighlight: t("process.titleHighlight"),
      steps: [
        {
          num: t("process.steps.0.num"),
          title: t("process.steps.0.title"),
          text: t("process.steps.0.text"),
        },
        {
          num: t("process.steps.1.num"),
          title: t("process.steps.1.title"),
          text: t("process.steps.1.text"),
        },
        {
          num: t("process.steps.2.num"),
          title: t("process.steps.2.title"),
          text: t("process.steps.2.text"),
        },
      ],
    },

    // FAQ
    faq: {
      badge: t("faq.tag"),
      tag: t("faq.tag"),
      title: t("faq.title"),
      questions: [
        {
          question: t("faq.questions.0.question"),
          answer: t("faq.questions.0.answer"),
        },
        {
          question: t("faq.questions.1.question"),
          answer: t("faq.questions.1.answer"),
        },
        {
          question: t("faq.questions.2.question"),
          answer: t("faq.questions.2.answer"),
        },
        {
          question: t("faq.questions.3.question"),
          answer: t("faq.questions.3.answer"),
        },
        {
          question: t("faq.questions.4.question"),
          answer: t("faq.questions.4.answer"),
        },
      ],
    },

    // Contact
    contact: {
      title: t("contact.title"),
      description: t("contact.subtitle"),
      subtitle: t("contact.subtitle"),
      successTitle: t("contact.form.successTitle"),
      successMessage: t("contact.form.successMessage"),
      formName: t("contact.form.name"),
      formEmail: t("contact.form.email"),
      formPhone: t("contact.form.phone"),
      formPhoneOptional: t("contact.form.phoneOptional"),
      formService: t("contact.form.servicePlaceholder"),
      formServiceOption1: t("contact.form.services.0.label"),
      formServiceOption2: t("contact.form.services.1.label"),
      formServiceOption3: t("contact.form.services.2.label"),
      formServiceOption4: t("contact.form.services.3.label"),
      formServiceOption5: t("contact.form.services.4.label"),
      formMessage: t("contact.form.message"),
      formSubmit: t("contact.form.submit"),
      formSending: t("contact.form.sending"),
      location: t("contact.trust.intro"),
      testimonialText: t("contact.trust.testimonial"),
      testimonialAuthor: t("contact.trust.testimonialAuthor"),
      trustSignals: [
        {
          icon: MapPin,
          text: t("contact.trust.signals.0.text"),
        },
        {
          icon: MapPin,
          text: t("contact.trust.signals.1.text"),
        },
        {
          icon: Mail,
          text: t("contact.trust.signals.2.text"),
        },
        {
          icon: Clock,
          text: t("contact.trust.signals.3.text"),
        },
      ],
      form: {
        name: t("contact.form.name"),
        email: t("contact.form.email"),
        phone: t("contact.form.phone"),
        phoneOptional: t("contact.form.phoneOptional"),
        servicePlaceholder: t("contact.form.servicePlaceholder"),
        services: [
          {
            value: "nueva-web",
            label: t("contact.form.services.0.label"),
          },
          {
            value: "mejorar-web",
            label: t("contact.form.services.1.label"),
          },
          {
            value: "seo",
            label: t("contact.form.services.2.label"),
          },
          {
            value: "tienda",
            label: t("contact.form.services.3.label"),
          },
          {
            value: "no-seguro",
            label: t("contact.form.services.4.label"),
          },
        ],
        message: t("contact.form.message"),
        submit: t("contact.form.submit"),
        sending: t("contact.form.sending"),
        successTitle: t("contact.form.successTitle"),
        successMessage: t("contact.form.successMessage"),
        errorTitle: t("contact.form.errorTitle"),
      },
      trust: {
        intro: t("contact.trust.intro"),
        testimonial: t("contact.trust.testimonial"),
        testimonialAuthor: t("contact.trust.testimonialAuthor"),
        signals: [
          t("contact.trust.signals.0.text"),
          t("contact.trust.signals.1.text"),
          t("contact.trust.signals.2.text"),
          t("contact.trust.signals.3.text"),
        ],
      },
    },
  };
};
