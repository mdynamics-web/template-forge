import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Desarrollo Web en Valencia | Páginas Web Profesionales - NeuralForge",
  description: "Desarrollo web profesional en Valencia. Creamos páginas web modernas, apps móviles y e-commerce para negocios en Valencia. Ingenieros informáticos con experiencia. ⭐ Presupuesto gratis.",
  keywords: "desarrollo web valencia, programadores web valencia, crear pagina web valencia, diseño web valencia, empresa desarrollo web valencia, programador valencia, páginas web valencia, desarrollo aplicaciones web valencia",
  openGraph: {
    title: "Desarrollo Web en Valencia | Páginas Web Profesionales",
    description: "Desarrollo web profesional en Valencia. Creamos páginas web modernas para tu negocio.",
    type: "website",
  },
};

export default function DesarrolloWebValencia() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10" />
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground font-medium">Desarrollo Web en Valencia</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Desarrollo Web Profesional en <span className="gradient-text">Valencia</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Somos dos ingenieros informáticos especializados en desarrollo web en Valencia. 
            Creamos páginas web profesionales, aplicaciones móviles y e-commerce para negocios 
            que quieren destacar online.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Solicita Presupuesto Gratis
              </Button>
            </Link>
            <Link href="/#cases">
              <Button size="lg" variant="outline" className="text-lg">
                Ver Proyectos en Valencia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos en Valencia */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
            ¿Por Qué Elegirnos para tu Proyecto Web en Valencia?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experiencia Real en Tech",
                desc: "Trabajamos como responsables de equipos frontend en empresas tecnológicas. No somos una agencia con intermediarios."
              },
              {
                title: "Base en Valencia",
                desc: "Reuniones presenciales en Valencia cuando lo necesites. Conocemos el mercado local y las necesidades de los negocios valencianos."
              },
              {
                title: "Tecnología Moderna",
                desc: "Usamos React, Next.js y las últimas tecnologías. Tu web será rápida, moderna y preparada para el futuro."
              },
              {
                title: "SEO Local Optimizado",
                desc: "Optimizamos tu web para que aparezcas en Google cuando busquen en Valencia. SEO local especializado."
              },
              {
                title: "Trato Directo",
                desc: "Hablas directamente con quien programa. Sin comerciales, sin intermediarios. Comunicación clara y honesta."
              },
              {
                title: "Presupuesto Transparente",
                desc: "Te explicamos cada parte del presupuesto. Sin costes ocultos ni sorpresas. Pago por fases."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios en Valencia */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-center">
            Servicios de Desarrollo Web en Valencia
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluciones digitales completas para negocios en Valencia y alrededores
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Páginas Web para Empresas",
                desc: "Webs corporativas profesionales para empresas en Valencia. Diseño moderno, responsive y optimizado para conversión.",
                ideal: "Ideal para: Empresas de servicios, consultorías, despachos profesionales"
              },
              {
                title: "Webs para Restaurantes y Hostelería",
                desc: "Páginas web con reservas online, carta digital QR y integración con redes sociales. Especializada para el sector horeca valenciano.",
                ideal: "Ideal para: Restaurantes, bares, cafeterías, hoteles"
              },
              {
                title: "Tiendas Online (E-commerce)",
                desc: "Tiendas online completas con pasarela de pago, gestión de inventario y envíos. Vende desde Valencia a toda España.",
                ideal: "Ideal para: Tiendas físicas que quieren vender online, nuevos negocios digitales"
              },
              {
                title: "Aplicaciones Web Personalizadas",
                desc: "Software a medida para tu negocio: CRM, gestión de reservas, plataformas de formación, directorios y más.",
                ideal: "Ideal para: Empresas con necesidades específicas, startups tech"
              },
              {
                title: "Mejora y Optimización SEO",
                desc: "Mejoramos tu posicionamiento en Google para búsquedas en Valencia. Atraemos más clientes locales a tu negocio.",
                ideal: "Ideal para: Negocios que ya tienen web pero no reciben visitas"
              },
              {
                title: "Aplicaciones Móviles",
                desc: "Apps iOS y Android para tu negocio. Pedidos, reservas, delivery, fidelización o cualquier necesidad específica.",
                ideal: "Ideal para: Negocios que quieren una app propia, servicios delivery"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <p className="text-sm text-secondary font-medium">{item.ideal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores que atendemos */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
            Sectores que Atendemos en Valencia
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Restaurantes y Cafeterías",
              "Hoteles y Apartamentos Turísticos", 
              "Tiendas y Comercios",
              "Clínicas y Servicios Médicos",
              "Despachos de Abogados",
              "Consultorías y Servicios",
              "Escuelas y Formación",
              "Gimnasios y Deporte",
              "Peluquerías y Belleza",
              "Agencias Inmobiliarias",
              "Talleres y Automoción",
              "Startups Tecnológicas"
            ].map((sector, idx) => (
              <div key={idx} className="bg-background rounded-lg p-4 border-2 border-border hover:border-secondary/50 transition-all text-center">
                <p className="font-medium">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            ¿Hablamos de tu Proyecto Web?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cuéntanos qué necesitas y te damos presupuesto en menos de 48 horas. 
            Sin compromiso. Reunión presencial en Valencia si lo prefieres.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="text-lg w-full sm:w-auto">
                Solicitar Presupuesto Gratis
              </Button>
            </Link>
            <a href="mailto:hola@neuralforge.es">
              <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto">
                Enviar Email Directo
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-secondary" />
              <span>hola@neuralforge.es</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" />
              <span>+34 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Valencia, España</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
