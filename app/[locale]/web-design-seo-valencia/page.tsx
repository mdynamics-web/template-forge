import { Metadata } from "next";
import { ValenciaWebDesignLanding } from "@/components/valencia-landing/ValenciaWebDesignLanding";
import { ValenciaSchemaMarkup } from "@/components/valencia-landing/ValenciaSchemaMarkup";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isSpanish = locale === "es";
  const baseUrl = "https://www.corexia.es";
  const pagePath = isSpanish
    ? `/${locale}/diseno-web-seo-valencia`
    : `/${locale}/web-design-seo-valencia`;
  const fullUrl = `${baseUrl}${pagePath}`;

  return {
    title: isSpanish
      ? "Diseño Web y SEO en Valencia para Negocios | Corexia"
      : "Web Design and SEO in Valencia for Businesses | Corexia",
    description: isSpanish
      ? "Agencia de diseño web en Valencia especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales. Consultoría gratuita en 48h."
      : "Web design agency in Valencia specialized in local SEO. Fast Next.js websites that rank on Google and generate real clients. Free consultation in 48h.",
    keywords: isSpanish
      ? [
          "diseño web Valencia",
          "agencia web Valencia",
          "SEO local Valencia",
          "desarrollo web Valencia",
          "páginas web Valencia",
          "diseño web Paterna",
          "diseño web Torrent",
          "agencia diseño Valencia",
          "crear página web Valencia",
          "posicionamiento Google Valencia",
          "Next.js Valencia",
          "tienda online Valencia",
        ]
      : [
          "web design Valencia",
          "web agency Valencia",
          "local SEO Valencia",
          "web development Valencia",
          "websites Valencia",
          "web design Paterna",
          "web design Torrent",
          "design agency Valencia",
          "create website Valencia",
          "Google positioning Valencia",
          "Next.js Valencia",
          "online store Valencia",
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
        ? "Diseño Web y SEO en Valencia | Corexia"
        : "Web Design and SEO in Valencia | Corexia",
      description: isSpanish
        ? "Agencia de diseño web en Valencia especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales. Consultoría gratuita."
        : "Web design agency in Valencia specialized in local SEO. Fast Next.js websites that rank on Google and generate real clients. Free consultation.",
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
            ? "Corexia — Diseño Web y SEO en Valencia para Negocios Locales"
            : "Corexia — Web Design and SEO in Valencia for Local Businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish
        ? "Diseño Web y SEO en Valencia | Corexia"
        : "Web Design and SEO in Valencia | Corexia",
      description: isSpanish
        ? "Agencia web en Valencia especializada en Next.js y SEO local. Webs que convierten visitas en clientes reales."
        : "Web agency in Valencia specialized in Next.js and local SEO. Websites that convert visits into real clients.",
      images: [`${baseUrl}/og-alicante.png`],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        es: `${baseUrl}/es/diseno-web-seo-valencia`,
        en: `${baseUrl}/en/web-design-seo-valencia`,
        "x-default": `${baseUrl}/es/diseno-web-seo-valencia`,
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

export default function WebDesignValenciaPage() {
  return (
    <>
      <ValenciaSchemaMarkup />
      <ValenciaWebDesignLanding />
    </>
  );
}
