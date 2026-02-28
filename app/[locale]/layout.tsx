import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, manrope } from "@/lib/fonts";
import { Toaster as SonnerToaster } from "sonner";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

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
    keywords: isSpanish
      ? t("keywords")
      : "web development, mobile apps, SEO, custom software, technology consulting",
    authors: [{ name: "NeuralForge" }],
    creator: "NeuralForge",
    publisher: "NeuralForge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://neuralforgeai.lovable.app"),
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: "NeuralForge",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NeuralForge - Desarrollo Web Valencia y Alicante",
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
              "@id": "https://template-mdynamics.vercel.app",
              name: "NeuralForge",
              image: "https://template-mdynamics.vercel.app/logo.png",
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
              url: "https://template-mdynamics.vercel.app",
              telephone: "+34-XXX-XXX-XXX",
              email: "hola@neuralforge.es",
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
              sameAs: ["https://www.linkedin.com/company/neuralforge"],
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
          {children}
          <CookieConsent />
          <SonnerToaster position="bottom-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
