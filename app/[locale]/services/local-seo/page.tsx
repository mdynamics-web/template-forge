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
  const BASE_URL = "https://www.corexia.es";
  const localeKey = locale === "es" ? "es" : "en";
  const route = serviceRouteMap.localSeo[localeKey];

  return {
    title: t("localSeo.meta.title"),
    description: t("localSeo.meta.description"),
    alternates: {
      canonical: `${BASE_URL}${route}`,
      languages: {
        es: `${BASE_URL}${serviceRouteMap.localSeo.es}`,
        en: `${BASE_URL}${serviceRouteMap.localSeo.en}`,
        "x-default": `${BASE_URL}${serviceRouteMap.localSeo.es}`,
      },
    },
    openGraph: {
      title: t("localSeo.meta.ogTitle"),
      description: t("localSeo.meta.ogDescription"),
      url: `${BASE_URL}${route}`,
      siteName: "Corexia",
      type: "website",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function LocalSeoServicePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const content = buildServicePageContent("localSeo", t);

  return <ServicePageView content={content} />;
}
