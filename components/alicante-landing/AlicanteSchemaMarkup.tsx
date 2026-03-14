import { getTranslations } from "next-intl/server";

/**
 * Schema Markup (JSON-LD) for Alicante landing page
 * Includes: ProfessionalService, FAQPage, BreadcrumbList, Service, WebPage
 *
 * IMPORTANT: Rendered as native <script> tags (not next/script) so Google
 * can read them during the initial HTML parse — not after JS hydration.
 */
export const AlicanteSchemaMarkup = async () => {
  const t = await getTranslations("alicante");

  // ─── ProfessionalService Schema ───────────────────────────────────────────
  // More specific than LocalBusiness for a web/SEO agency.
  // NAP (Name, Address, Phone) must match Google Business Profile exactly.
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.corexia.es/#business",
    name: "Corexia",
    image: "https://www.corexia.es/logo.png",
    url: "https://www.corexia.es/es/diseno-web-seo-alicante",
    telephone: "+34652561427",
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
      latitude: "38.3452",
      longitude: "-0.4815",
    },
    areaServed: [
      { "@type": "City", name: "Alicante" },
      { "@type": "City", name: "Torrevieja" },
      { "@type": "City", name: "Elche" },
      { "@type": "City", name: "Benidorm" },
      { "@type": "City", name: "Orihuela" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  // ─── FAQPage Schema ───────────────────────────────────────────────────────
  // Enables rich results (desplegables) en Google para búsquedas de precio,
  // tiempo, etc. Preguntas pulled directamente desde las traducciones.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 6 }, (_, i) => ({
      "@type": "Question",
      name: t(`faq.questions.${i}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`faq.questions.${i}.answer`),
      },
    })),
  };

  // ─── BreadcrumbList Schema ────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.corexia.es/es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Diseño Web Alicante",
        item: "https://www.corexia.es/es/diseno-web-seo-alicante",
      },
    ],
  };

  // ─── Service Schema ───────────────────────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseño Web y SEO Local",
    provider: {
      "@type": "ProfessionalService",
      "@id": "https://www.corexia.es/#business",
      name: "Corexia",
      url: "https://www.corexia.es",
    },
    areaServed: [
      { "@type": "City", name: "Alicante" },
      { "@type": "City", name: "Torrevieja" },
      { "@type": "City", name: "Elche" },
      { "@type": "City", name: "Benidorm" },
      { "@type": "City", name: "Orihuela" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Diseño Web y SEO en Alicante",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño Web Profesional en Alicante",
            description:
              "Páginas web modernas, rápidas y optimizadas para SEO local en Alicante, construidas con Next.js.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Local Alicante",
            description:
              "Posicionamiento en Google para negocios locales en Alicante y provincia sin pagar anuncios.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tienda Online Alicante",
            description:
              "E-commerce completo con carrito, pago seguro y SEO local para negocios en Alicante.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rediseño y Optimización Web",
            description:
              "Modernización de páginas web existentes para mejorar velocidad, diseño y posicionamiento en Google.",
          },
        },
      ],
    },
  };

  // ─── WebPage Schema ───────────────────────────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.corexia.es/es/diseno-web-seo-alicante#webpage",
    url: "https://www.corexia.es/es/diseno-web-seo-alicante",
    name: "Diseño Web y SEO en Alicante para Negocios | Corexia",
    description:
      "Agencia de diseño web en Alicante especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales.",
    inLanguage: "es-ES",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.corexia.es/#website",
      url: "https://www.corexia.es",
      name: "Corexia",
      publisher: {
        "@id": "https://www.corexia.es/#business",
      },
    },
    about: {
      "@type": "Thing",
      name: "Diseño Web y SEO en Alicante",
    },
    mentions: [
      { "@type": "Place", name: "Alicante" },
      { "@type": "Place", name: "Torrevieja" },
      { "@type": "Place", name: "Elche" },
      { "@type": "Place", name: "Benidorm" },
      { "@type": "Place", name: "Orihuela" },
    ],
  };

  const schemas = [
    { id: "professional-service-schema", data: professionalServiceSchema },
    { id: "faq-schema", data: faqSchema },
    { id: "breadcrumb-schema", data: breadcrumbSchema },
    { id: "service-schema", data: serviceSchema },
    { id: "webpage-schema", data: webPageSchema },
  ];

  return (
    <>
      {schemas.map(({ id, data }) => (
        <script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};