import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Diseño Web y SEO en Alicante | Agencia de IA y Automatización – NeuralForge",
  description: "Agencia de diseño web, SEO local y automatización con IA en Alicante. Creamos sitios web de alto rendimiento y chatbots inteligentes para empresas que quieren crecer.",
  keywords: "desarrollo web alicante, diseño web alicante, seo alicante, chatbots ia alicante, automatización alicante, páginas web alicante, agencia digital alicante",
  openGraph: {
    title: "Diseño Web y SEO en Alicante | Agencia de IA y Automatización",
    description: "Agencia de diseño web, SEO local y automatización con IA en Alicante. Creamos sitios web de alto rendimiento y chatbots inteligentes.",
    type: "website",
  },
};

export default function DesarrolloWebAlicante() {
  return <LocationPage city="alicante" />;
}
