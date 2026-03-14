import { Metadata } from "next";
import { AlicanteWebDesignLanding } from "@/components/alicante-landing/AlicanteWebDesignLanding";
import { AlicanteSchemaMarkup } from "@/components/alicante-landing/AlicanteSchemaMarkup";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isSpanish = locale === "es";
  const baseUrl = "https://www.corexia.es";
  const pagePath = isSpanish ? `/${locale}/diseno-web-seo-alicante` : `/${locale}/web-design-seo-alicante`;
  const fullUrl = `${baseUrl}${pagePath}`;

  return {
    title: isSpanish
      ? "Diseño Web y SEO en Alicante para Negocios | Corexia"
      : "Web Design and SEO in Alicante for Businesses | Corexia",
    description: isSpanish
      ? "Agencia de diseño web en Alicante especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales. Consultoría gratuita en 48h."
      : "Web design agency in Alicante specialized in local SEO. Fast Next.js websites that rank on Google and generate real clients. Free consultation in 48h.",
    keywords: isSpanish
      ? [
          "diseño web Alicante",
          "agencia web Alicante",
          "SEO local Alicante",
          "desarrollo web Alicante",
          "páginas web Alicante",
          "diseño web Torrevieja",
          "diseño web Elche",
          "agencia diseño Alicante",
          "crear página web Alicante",
          "posicionamiento Google Alicante",
          "Next.js Alicante",
          "tienda online Alicante",
        ]
      : [
          "web design Alicante",
          "web agency Alicante",
          "local SEO Alicante",
          "web development Alicante",
          "websites Alicante",
          "web design Torrevieja",
          "web design Elche",
          "design agency Alicante",
          "create website Alicante",
          "Google positioning Alicante",
          "Next.js Alicante",
          "online store Alicante",
        ],
    authors: [{ name: "Corexia", url: baseUrl }],
    creator: "Corexia",
    publisher: "Corexia",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: isSpanish
        ? "Diseño Web y SEO en Alicante | Corexia"
        : "Web Design and SEO in Alicante | Corexia",
      description: isSpanish
        ? "Agencia de diseño web en Alicante especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales. Consultoría gratuita."
        : "Web design agency in Alicante specialized in local SEO. Fast Next.js websites that rank on Google and generate real clients. Free consultation.",
      url: fullUrl,
      siteName: "Corexia",
      locale: isSpanish ? "es_ES" : "en_GB",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-alicante.png`,
          width: 1200,
          height: 630,
          alt: isSpanish
            ? "Corexia — Diseño Web y SEO en Alicante para Negocios Locales"
            : "Corexia — Web Design and SEO in Alicante for Local Businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish
        ? "Diseño Web y SEO en Alicante | Corexia"
        : "Web Design and SEO in Alicante | Corexia",
      description: isSpanish
        ? "Agencia web en Alicante especializada en Next.js y SEO local. Webs que convierten visitas en clientes reales."
        : "Web agency in Alicante specialized in Next.js and local SEO. Websites that convert visits into real clients.",
      images: [`${baseUrl}/og-alicante.png`],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        es: `${baseUrl}/es/diseno-web-seo-alicante`,
        en: `${baseUrl}/en/web-design-seo-alicante`,
        "x-default": `${baseUrl}/es/diseno-web-seo-alicante`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Web Design & Development",
  };
}

export default function WebDesignAlicantePage() {
  return (
    <>
      <AlicanteSchemaMarkup />
      <AlicanteWebDesignLanding />
    </>
  );
}