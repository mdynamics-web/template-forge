import { ServicePageContent } from "@/components/service-page-view";

type Translate = (key: string) => string;

export type ServiceKey = "webDesign" | "localSeo" | "apps" | "onlineStores" | "consulting";

export const buildServicePageContent = (serviceKey: ServiceKey, t: Translate): ServicePageContent => {
  return {
    serviceName: t(`${serviceKey}.name`),
    heroTitle: t(`${serviceKey}.hero.title`),
    heroSubtitle: t(`${serviceKey}.hero.subtitle`),
    heroCta: t("common.heroCta"),
    heroSupport: t(`${serviceKey}.hero.support`),
    problemsTitle: t("common.problemsTitle"),
    problems: [0, 1, 2].map((index) => t(`${serviceKey}.problems.${index}`)),
    processTitle: t("common.processTitle"),
    processSteps: [0, 1, 2, 3].map((index) => t(`${serviceKey}.process.${index}`)),
    includesTitle: t("common.includesTitle"),
    includes: [0, 1, 2, 3, 4, 5].map((index) => t(`${serviceKey}.includes.${index}`)),
    technologiesTitle: t("common.technologiesTitle"),
    technologies: [0, 1, 2, 3, 4].map((index) => t(`${serviceKey}.technologies.${index}`)),
    casesTitle: t("common.casesTitle"),
    cases: [0, 1].map((index) => ({
      title: t(`${serviceKey}.cases.${index}.title`),
      description: t(`${serviceKey}.cases.${index}.description`),
      metricValue: t(`${serviceKey}.cases.${index}.metricValue`),
      metricLabel: t(`${serviceKey}.cases.${index}.metricLabel`),
    })),
    faqTitle: t("common.faqTitle"),
    faqs: [0, 1, 2, 3].map((index) => ({
      question: t(`${serviceKey}.faq.${index}.question`),
      answer: t(`${serviceKey}.faq.${index}.answer`),
    })),
    finalTitle: t(`${serviceKey}.final.title`),
    finalSubtitle: t(`${serviceKey}.final.subtitle`),
    finalCta: t("common.finalCta"),
  };
};

export const serviceRouteMap = {
  webDesign: {
    es: "/servicios/diseno-web",
    en: "/services/web-design",
  },
  localSeo: {
    es: "/servicios/seo-local",
    en: "/services/local-seo",
  },
  apps: {
    es: "/servicios/aplicaciones",
    en: "/services/apps",
  },
  onlineStores: {
    es: "/servicios/tiendas-online",
    en: "/services/online-stores",
  },
  consulting: {
    es: "/servicios/consultoria",
    en: "/services/consulting",
  },
} as const;
