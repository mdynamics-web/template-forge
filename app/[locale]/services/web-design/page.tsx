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
  const route = serviceRouteMap.webDesign[localeKey];

  return {
    title: t("webDesign.meta.title"),
    description: t("webDesign.meta.description"),
    alternates: {
      canonical: route,
      languages: {
        es: serviceRouteMap.webDesign.es,
        en: serviceRouteMap.webDesign.en,
      },
    },
    openGraph: {
      title: t("webDesign.meta.ogTitle"),
      description: t("webDesign.meta.ogDescription"),
      url: `https://www.corexia.es${route}`,
      siteName: "Corexia",
      type: "website",
    },
  };
}

export default async function WebDesignServicePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePages" });
  const content = buildServicePageContent("webDesign", t);

  return <ServicePageView content={content} />;
}
