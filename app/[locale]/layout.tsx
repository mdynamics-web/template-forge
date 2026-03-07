import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, manrope } from "@/lib/fonts";
import { Toaster as SonnerToaster } from "sonner";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Corexia" }],
    creator: "Corexia",
    publisher: "Corexia",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://corexia.es"),
    alternates: {
      canonical: `https://corexia.es/${locale}`,   // ✅ URL absoluta con locale
      languages: {
        es: "https://corexia.es/es",               // ✅ hreflang correcto
        en: "https://corexia.es/en",               // ✅ hreflang correcto
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_GB",
      url: `https://corexia.es/${locale}`,         // ✅ URL absoluta
      title: t("title"),
      description: t("description"),
      siteName: "Corexia",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Corexia — Diseño Web y SEO para Negocios en España"
              : "Corexia — Web Design & SEO for Businesses in Spain",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
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
      google: "your-google-verification-code",  // ← recuerda poner el código real
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

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://corexia.es",
              name: "Corexia",
              image: "https://corexia.es/logo.png",
              description:
                locale === "es"
                  ? "Diseño web, SEO y apps para pequeños negocios de toda España. Ingenieros informáticos con trato directo y precios honestos."
                  : "Web design, SEO and apps for small businesses across Spain. Direct contact with engineers, honest pricing.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Valencia",
                addressRegion: "Comunidad Valenciana",
                postalCode: "46001",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.4699,
                longitude: -0.3763,
              },
              url: "https://corexia.es",
              telephone: "+34 652 56 14 27",
              email: "hello@corexia.es",
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "España",
              },
              serviceType: [
                "Diseño Web",
                "Desarrollo Web",
                "SEO Local",
                "Aplicaciones Web",
                "E-commerce",
              ],
              sameAs: ["https://www.linkedin.com/company/corexia"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <CookieConsent />
          <SonnerToaster position="bottom-right" richColors />
          <Footer />
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
