import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServicePageView from "@/components/service-page-view";
import { buildServicePageContent, serviceRouteMap } from "@/lib/service-pages";
import { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const localeKey = locale === "es" ? "es" : "en";
  const route = serviceRouteMap.consulting[localeKey];

  return {
    title: t("consulting.meta.title"),
    description: t("consulting.meta.description"),
    alternates: {
      canonical: route,
      languages: {
        es: serviceRouteMap.consulting.es,
        en: serviceRouteMap.consulting.en,
      },
    },
    openGraph: {
      title: t("consulting.meta.ogTitle"),
      description: t("consulting.meta.ogDescription"),
      url: `https://www.corexia.es${route}`,
      siteName: "Corexia",
      type: "website",
    },
  };
}

export default async function ConsultingServicePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const content = buildServicePageContent("consulting", t);

  return <ServicePageView content={content} />;
}
