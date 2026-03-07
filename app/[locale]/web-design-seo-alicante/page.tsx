import { Metadata } from "next";
import { AlicanteWebDesignLanding } from "@/components/alicante-landing/AlicanteWebDesignLanding";

/**
 * SEO Metadata using Next.js native Metadata API
 * Replaces client-side DOM manipulation with server-side generation
 */
export const metadata: Metadata = {
  title: "Diseño Web en Alicante | Corexia — Webs que Generan Clientes",
  description:
    "Agencia de diseño web y SEO en Alicante. Creamos webs rápidas con Next.js que posicionan en Google y convierten visitas en clientes. Consultoría gratuita.",
  openGraph: {
    title: "Diseño Web en Alicante | Corexia",
    description:
      "Webs profesionales en Alicante que generan clientes reales. SEO local, Next.js, desde 990€.",
    url: "https://www.corexia.es/es/web-design-seo-alicante",
    siteName: "Corexia",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.corexia.es/es/web-design-seo-alicante",
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
};


export default function WebDesignAlicantePage() {
  return <AlicanteWebDesignLanding />;
}