import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, manrope } from "@/lib/fonts";
import { Toaster as SonnerToaster } from "sonner";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";
import "@theme-toggles/react/css/Classic.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppContact from "@/components/WhatsAppContact";
import GlobalLoaderOverlay from "@/components/ui/global-loader-overlay";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  ALICANTE_PHONE_RAW,
  VALENCIA_PHONE_RAW,
} from "@/lib/contact";

const BASE_URL = "https://www.corexia.es";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isSpanish = locale === "es";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Corexia", url: BASE_URL }],
    creator: "Corexia",
    publisher: "Corexia",
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: isSpanish ? `${BASE_URL}/` : undefined,
      languages: { es: `${BASE_URL}/` },
    },
    openGraph: {
      type: "website",
      locale: isSpanish ? "es_ES" : "en_GB",
      url: `${BASE_URL}/`,
      title: t("title"),
      description: t("description"),
      siteName: "Corexia",
      images: [{
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: isSpanish
          ? "Corexia — Diseño Web y SEO para Negocios en España"
          : "Corexia — Web Design & SEO for Businesses in Spain",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${BASE_URL}/og-image.png`],
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
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#business`,
    name: "Corexia",
    image: `${BASE_URL}/logo.png`,
    description:
      locale === "es"
        ? "Diseño web, SEO y apps para pequeños negocios de toda España. Ingenieros informáticos con trato directo y precios honestos."
        : "Web design, SEO and apps for small businesses across Spain. Direct contact with engineers, honest pricing.",
    url: BASE_URL,
    telephone: `+${ALICANTE_PHONE_RAW}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${ALICANTE_PHONE_RAW}`,
        areaServed: "ES",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${VALENCIA_PHONE_RAW}`,
        areaServed: "ES",
      },
    ],
    email: "info.corexia@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alicante",
      addressRegion: "Comunidad Valenciana",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.3452,
      longitude: -0.4815,
    },
    areaServed: [
      { "@type": "City", name: "Alicante" },
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Torrevieja" },
      { "@type": "City", name: "Elche" },
      { "@type": "City", name: "Benidorm" },
      { "@type": "City", name: "Orihuela" },
    ],
    serviceType: ["Diseño Web", "Desarrollo Web", "SEO Local", "Aplicaciones Web", "E-commerce"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key="corexia-theme";var saved=localStorage.getItem(key);var theme=(saved==="dark"||saved==="light")?saved:"light";if(theme==="dark"){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            {children}
            <GlobalLoaderOverlay />
            <CookieConsent />
            <SonnerToaster position="bottom-right" richColors />
            <WhatsAppContact />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
