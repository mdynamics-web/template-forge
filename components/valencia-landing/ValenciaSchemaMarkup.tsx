import { getTranslations } from "next-intl/server";
import { localizeToValencia } from "@/components/valencia-landing/utils/localizeToValencia";

export const ValenciaSchemaMarkup = async () => {
  const t = await getTranslations("alicante");
  const tv = (key: string) => localizeToValencia(t(key));

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.corexia.es/#business",
    name: "Corexia",
    image: "https://www.corexia.es/logo.png",
    url: "https://www.corexia.es/es/diseno-web-seo-valencia",
    telephone: "+34652561427",
    email: "info.corexia@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Comunidad Valenciana",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.4699",
      longitude: "-0.3763",
    },
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Paterna" },
      { "@type": "City", name: "Torrent" },
      { "@type": "City", name: "Sagunto" },
      { "@type": "City", name: "Gandía" },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 6 }, (_, i) => ({
      "@type": "Question",
      name: tv(`faq.questions.${i}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: tv(`faq.questions.${i}.answer`),
      },
    })),
  };

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
        name: "Diseño Web Valencia",
        item: "https://www.corexia.es/es/diseno-web-seo-valencia",
      },
    ],
  };

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
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Paterna" },
      { "@type": "City", name: "Torrent" },
      { "@type": "City", name: "Sagunto" },
      { "@type": "City", name: "Gandía" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Diseño Web y SEO en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño Web Profesional en Valencia",
            description:
              "Páginas web modernas, rápidas y optimizadas para SEO local en Valencia, construidas con Next.js.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Local Valencia",
            description:
              "Posicionamiento en Google para negocios locales en Valencia y provincia sin pagar anuncios.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tienda Online Valencia",
            description:
              "E-commerce completo con carrito, pago seguro y SEO local para negocios en Valencia.",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.corexia.es/es/diseno-web-seo-valencia#webpage",
    url: "https://www.corexia.es/es/diseno-web-seo-valencia",
    name: "Diseño Web y SEO en Valencia para Negocios | Corexia",
    description:
      "Agencia de diseño web en Valencia especializada en SEO local. Webs rápidas con Next.js que posicionan en Google y generan clientes reales.",
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
      name: "Diseño Web y SEO en Valencia",
    },
    mentions: [
      { "@type": "Place", name: "Valencia" },
      { "@type": "Place", name: "Paterna" },
      { "@type": "Place", name: "Torrent" },
      { "@type": "Place", name: "Sagunto" },
      { "@type": "Place", name: "Gandía" },
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
