import type { Metadata } from "next";
import { LocationPage } from "@/components/location";

export const metadata: Metadata = {
  title: "Desarrollo Web y SEO en Valencia | Agencia de IA y Automatización – NeuralForge",
  description: "Agencia de desarrollo web, SEO local y automatización con IA en Valencia. Creamos sitios web de alto rendimiento y chatbots inteligentes para empresas que quieren crecer.",
  keywords: "desarrollo web valencia, diseño web valencia, seo valencia, chatbots ia valencia, automatización valencia, páginas web valencia, agencia digital valencia",
  openGraph: {
    title: "Desarrollo Web y SEO en Valencia | Agencia de IA y Automatización",
    description: "Agencia de desarrollo web, SEO local y automatización con IA en Valencia. Creamos sitios web de alto rendimiento y chatbots inteligentes.",
    type: "website",
  },
};

export default function DesarrolloWebValencia() {
  return <LocationPage city="valencia" />;
}
