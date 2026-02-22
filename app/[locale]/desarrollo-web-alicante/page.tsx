import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Desarrollo Web en Alicante | Páginas Web Profesionales - NeuralForge",
  description: "Desarrollo web profesional en Alicante. Creamos páginas web modernas, apps móviles y e-commerce para negocios en Alicante y Costa Blanca. Ingenieros informáticos con experiencia. ⭐ Presupuesto gratis.",
  keywords: "desarrollo web alicante, programadores web alicante, crear pagina web alicante, diseño web alicante, empresa desarrollo web alicante, programador alicante, páginas web alicante, desarrollo aplicaciones web alicante",
  openGraph: {
    title: "Desarrollo Web en Alicante | Páginas Web Profesionales",
    description: "Desarrollo web profesional en Alicante. Creamos páginas web modernas para tu negocio.",
    type: "website",
  },
};

export default function DesarrolloWebAlicante() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10" />
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground font-medium">Desarrollo Web en Alicante</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Desarrollo Web Profesional en <span className="gradient-text">Alicante</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Somos dos ingenieros informáticos especializados en desarrollo web en Alicante. 
            Creamos páginas web profesionales, aplicaciones móviles y e-commerce para negocios 
            en Alicante y toda la Costa Blanca.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Solicita Presupuesto Gratis
              </Button>
            </Link>
            <Link href="/#cases">
              <Button size="lg" variant="outline" className="text-lg">
                Ver Proyectos en Alicante
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos en Alicante */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
            ¿Por Qué Elegirnos para tu Proyecto Web en Alicante?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experiencia Real en Tech",
                desc: "Trabajamos como responsables de equipos frontend en empresas tecnológicas. No somos una agencia con intermediarios."
              },
              {
                title: "Conocemos el Mercado Local",
                desc: "Entendemos las necesidades de negocios en Alicante y Costa Blanca: turismo, hostelería, comercio local y servicios."
              },
              {
                title: "Tecnología Moderna",
                desc: "Usamos React, Next.js y las últimas tecnologías. Tu web será rápida, moderna y preparada para el futuro."
              },
              {
                title: "SEO Local Optimizado",
                desc: "Optimizamos tu web para que aparezcas en Google cuando busquen en Alicante. SEO local especializado para la zona."
              },
              {
                title: "Webs Multiidioma",
                desc: "Especializados en webs con español, inglés y otros idiomas. Perfecto para negocios turísticos en la Costa Blanca."
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

      {/* Servicios en Alicante */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-center">
            Servicios de Desarrollo Web en Alicante y Costa Blanca
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Soluciones digitales completas para negocios en Alicante, Benidorm, Torrevieja, Elche y toda la Costa Blanca
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Webs para Hoteles y Apartamentos Turísticos",
                desc: "Páginas web con sistema de reservas, múltiples idiomas y optimización para turismo. Especializada para hoteles en Alicante y Costa Blanca.",
                ideal: "Ideal para: Hoteles, apartamentos turísticos, villas, hostales"
              },
              {
                title: "Webs para Restaurantes y Hostelería",
                desc: "Páginas web con reservas online, carta digital multiidioma y optimización para turistas. Perfectas para el sector horeca alicantino.",
                ideal: "Ideal para: Restaurantes, chiringuitos, bares de copas, cafeterías"
              },
              {
                title: "Tiendas Online (E-commerce)",
                desc: "Tiendas online con múltiples idiomas y pasarelas de pago internacionales. Vende desde Alicante a todo el mundo.",
                ideal: "Ideal para: Tiendas físicas, productos artesanales, souvenirs"
              },
              {
                title: "Páginas Web Corporativas",
                desc: "Webs profesionales para empresas de servicios en Alicante. Diseño moderno, responsive y optimizado para conversión.",
                ideal: "Ideal para: Empresas de servicios, inmobiliarias, consultorías"
              },
              {
                title: "Mejora y Optimización SEO Local",
                desc: "Mejoramos tu posicionamiento en Google para búsquedas en Alicante. Atraemos más clientes locales y turistas a tu negocio.",
                ideal: "Ideal para: Negocios que ya tienen web pero no reciben visitas"
              },
              {
                title: "Aplicaciones Web para Gestión",
                desc: "Software a medida para tu negocio: gestión de reservas, plataformas de alquiler, CRM y más.",
                ideal: "Ideal para: Empresas con necesidades específicas, gestión de propiedades"
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

      {/* Zonas que cubrimos */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-center">
            Zonas que Cubrimos en la Provincia de Alicante
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Desarrollo web profesional en toda la Costa Blanca
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Alicante Capital",
              "Benidorm",
              "Torrevieja",
              "Elche",
              "San Juan de Alicante",
              "Dénia",
              "Jávea (Xàbia)",
              "Calpe",
              "Altea",
              "Villajoyosa",
              "Santa Pola",
              "Guardamar del Segura",
              "Orihuela Costa",
              "Campello",
              "Mutxamel",
              "Pilar de la Horadada"
            ].map((zona, idx) => (
              <div key={idx} className="bg-background rounded-lg p-4 border-2 border-border hover:border-secondary/50 transition-all text-center">
                <p className="font-medium">{zona}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores especializados */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
            Sectores Especializados en Alicante
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Turismo y Hostelería",
                desc: "Hoteles, apartamentos turísticos, restaurantes, tours y actividades. Webs multiidioma con reservas online.",
                icon: "🏖️"
              },
              {
                title: "Inmobiliarias",
                desc: "Portales inmobiliarios, webs para agencias y gestión de propiedades vacacionales en la Costa Blanca.",
                icon: "🏠"
              },
              {
                title: "Comercio Local",
                desc: "Tiendas, boutiques, comercios tradicionales que quieren vender online o mejorar su presencia digital.",
                icon: "🛍️"
              },
              {
                title: "Servicios Profesionales",
                desc: "Abogados, gestorías, clínicas, dentistas y otros servicios profesionales en Alicante.",
                icon: "💼"
              },
              {
                title: "Educación y Formación",
                desc: "Escuelas de idiomas, academias, formación online y centros educativos.",
                icon: "📚"
              },
              {
                title: "Salud y Bienestar",
                desc: "Gimnasios, spas, clínicas de belleza, centros médicos y servicios de salud.",
                icon: "💪"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            ¿Hablamos de tu Proyecto Web en Alicante?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cuéntanos qué necesitas y te damos presupuesto en menos de 48 horas. 
            Sin compromiso. Reunión online o presencial según prefieras.
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
              <span>Alicante, España</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
