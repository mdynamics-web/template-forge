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
  const route = serviceRouteMap.onlineStores[localeKey];

  return {
    title: t("onlineStores.meta.title"),
    description: t("onlineStores.meta.description"),
    alternates: {
      canonical: route,
      languages: {
        es: serviceRouteMap.onlineStores.es,
        en: serviceRouteMap.onlineStores.en,
      },
    },
    openGraph: {
      title: t("onlineStores.meta.ogTitle"),
      description: t("onlineStores.meta.ogDescription"),
      url: `https://www.corexia.es${route}`,
      siteName: "Corexia",
      type: "website",
    },
  };
}

export default async function OnlineStoresServicePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const content = buildServicePageContent("onlineStores", t);

  return <ServicePageView content={content} />;
}
