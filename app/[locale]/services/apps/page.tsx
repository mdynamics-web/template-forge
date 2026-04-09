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
  const route = serviceRouteMap.apps[localeKey];

  return {
    title: t("apps.meta.title"),
    description: t("apps.meta.description"),
    alternates: {
      canonical: route,
      languages: {
        es: serviceRouteMap.apps.es,
        en: serviceRouteMap.apps.en,
      },
    },
    openGraph: {
      title: t("apps.meta.ogTitle"),
      description: t("apps.meta.ogDescription"),
      url: `https://www.corexia.es${route}`,
      siteName: "Corexia",
      type: "website",
    },
  };
}

export default async function AppsServicePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const content = buildServicePageContent("apps", t);

  return <ServicePageView content={content} />;
}
