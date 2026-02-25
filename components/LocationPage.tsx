"use client"
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowRight, ArrowDown, Zap, AlertTriangle, TrendingDown, Clock,
  Search, Target, Code2, BarChart3, Rocket,
  Send, CheckCircle, MapPin, Shield, Users, Cpu, Bot,
  Layout, Settings, RefreshCw, TrendingUp, Eye, MousePointer,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

/* ── Types ── */
export type CityType = "alicante" | "valencia";

interface LocationPageProps {
  city?: CityType;
}

/* ── Animated Counter ── */
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

/* ── Generate particle data once at module load ── */
const particlesData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: Math.random() * 4 + 1,
  height: Math.random() * 4 + 1,
  left: Math.random() * 100,
  top: Math.random() * 100,
  yOffset: Math.random() * 80 + 20,
  xOffset: Math.random() * 40 - 20,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
  background: i % 3 === 0 ? "hsl(var(--secondary) / 0.4)" : i % 3 === 1 ? "hsl(var(--accent) / 0.3)" : "hsl(var(--secondary) / 0.2)",
}));

/* ── Floating data particles ── */
const DataParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlesData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.width,
            height: particle.height,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.background,
          }}
          animate={{
            y: [0, -particle.yOffset, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Flowing connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line x1="10%" y1="20%" x2="40%" y2="80%" stroke="hsl(var(--secondary))" strokeWidth="0.5" className="flowing-line" />
        <motion.line x1="60%" y1="10%" x2="90%" y2="70%" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flowing-line" style={{ animationDelay: "1s" }} />
        <motion.line x1="30%" y1="50%" x2="70%" y2="30%" stroke="hsl(var(--secondary))" strokeWidth="0.5" className="flowing-line" style={{ animationDelay: "2s" }} />
      </svg>
    </div>
  );
};

/* ── Dashboard mockup floating element ── */
const FloatingDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 15 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="relative mx-auto mt-12 max-w-lg"
    style={{ perspective: "1000px" }}
  >
    <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
        <div className="flex-1 bg-primary-foreground/5 rounded-full h-5 ml-2" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Tráfico", val: "+247%", color: "text-green-400" },
          { label: "Leads", val: "+180%", color: "text-secondary" },
          { label: "Conversión", val: "8.4%", color: "text-accent" },
        ].map((m) => (
          <div key={m.label} className="bg-primary-foreground/5 rounded-lg p-3 text-center">
            <div className={`text-sm font-bold ${m.color}`}>{m.val}</div>
            <div className="text-primary-foreground/40 text-[10px] mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-primary-foreground/5 rounded-lg h-16 flex items-end p-2 gap-0.5">
          {[35, 50, 40, 70, 60, 85, 75, 90].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-secondary/50 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
        <div className="flex-1 bg-primary-foreground/5 rounded-lg h-16 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 rounded-full border-4 border-secondary/30"
            style={{ borderTopColor: "hsl(194 100% 50%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Location Data ── */
const getLocationData = (city: CityType = "alicante") => {
  const cityConfigs = {
    alicante: {
      city: "Alicante",
      metaTitle: "Diseño Web y SEO en Alicante | Agencia de IA y Automatización – NeuralForge",
      metaDescription: "Agencia de diseño web, SEO local y automatización con IA en Alicante. Creamos sitios web de alto rendimiento y chatbots inteligentes para empresas que quieren crecer.",
      hero: {
        badge: "Agencia Digital con IA en Alicante",
        title1: "Diseño Web Profesional en",
        titleCity: "Alicante",
        title2: "para Empresas que Quieren Dominar",
        subtitle: "Ayudamos a empresas alicantinas a multiplicar sus ingresos con sitios web de alto rendimiento, SEO local dominante y automatización inteligente con IA.",
        cta: "Solicitar Consultoría Gratuita",
        cta2: "Ver Resultados",
      },
      reality: {
        tag: "La Realidad en Alicante",
        title: "El 73% de las empresas en Alicante pierden clientes por su presencia digital",
        stats: [
          { value: 73, suffix: "%", label: "de empresas con webs obsoletas en Alicante" },
          { value: 68, suffix: "%", label: "de clientes buscan en Google antes de contactar" },
          { value: 20, suffix: "h", label: "semanales perdidas en tareas manuales" },
          { value: 4, suffix: "seg", label: "para perder un cliente por web lenta" },
        ],
        statements: [
          { icon: AlertTriangle, text: "Tus clientes buscan 'servicios en Alicante' ahora mismo — y encuentran a tu competencia." },
          { icon: TrendingDown, text: "Una web obsoleta cuesta más clientes que no tener web. La primera impresión es digital." },
          { icon: Clock, text: "Tu equipo pierde 20+ horas semanales en tareas que la IA resuelve en minutos." },
        ],
      },
      services: {
        tag: "Soluciones en Alicante",
        title: "Tecnología que Trabaja para Tu Empresa",
        items: [
          { icon: Layout, title: "Diseño Web Corporativo", desc: "Sitios web profesionales optimizados para convertir visitantes en clientes. Diseño responsive y velocidad de carga ultrarrápida.", expandedDesc: "Cada proyecto incluye análisis UX del mercado alicantino, optimización de velocidad, diseño mobile-first y estrategia de conversión personalizada." },
          { icon: Search, title: "SEO Local en Alicante", desc: "Domina las búsquedas locales en Alicante y provincia. Aparece primero cuando tus clientes te buscan.", expandedDesc: "Google Maps, directorios locales, contenido optimizado por keywords y link building estratégico para posicionarte como líder en tu sector." },
          { icon: Bot, title: "Chatbots con IA", desc: "Asistentes virtuales 24/7 que responden, cualifican leads y agendan reuniones automáticamente.", expandedDesc: "Entrenados con datos de tu empresa y del mercado alicantino. Atienden en español e inglés — ideal para turismo y comercio internacional." },
          { icon: Settings, title: "Automatización de Procesos", desc: "CRM inteligente, email flows y formularios con IA que eliminan el trabajo manual.", expandedDesc: "Integración con tus herramientas actuales: HubSpot, Salesforce, WhatsApp Business. Reducimos trabajo manual en un 60%." },
          { icon: RefreshCw, title: "Rediseño Web", desc: "Transformamos tu sitio obsoleto en una plataforma moderna que genera confianza y convierte.", expandedDesc: "Migración segura, redirecciones SEO, nuevo diseño responsive y mejora inmediata en velocidad y conversión." },
          { icon: Cpu, title: "Plataformas Avanzadas", desc: "Paneles de admin, roles de usuario, dashboards y arquitectura escalable para empresas.", expandedDesc: "Desarrollo full-stack con APIs, integraciones de terceros, seguridad enterprise y soporte continuo." },
        ],
      },
      caseStudy: {
        businessName: "Distribuciones Costa Blanca",
        industry: "Distribución y logística local",
        before: {
          title: "Antes de NeuralForge",
          items: [
            { label: "Visitas mensuales", value: "340" },
            { label: "Leads cualificados", value: "5/mes" },
            { label: "Posición en Google", value: "Página 4+" },
            { label: "Tiempo respuesta", value: "48 horas" },
          ],
        },
        after: {
          title: "Después de NeuralForge",
          items: [
            { label: "Visitas mensuales", value: "4,200" },
            { label: "Leads cualificados", value: "62/mes" },
            { label: "Posición en Google", value: "Top 3" },
            { label: "Tiempo respuesta", value: "Instantáneo (IA)" },
          ],
        },
        metrics: [
          { value: 1135, suffix: "%", label: "Aumento de tráfico" },
          { value: 12, suffix: "x", label: "Más leads cualificados" },
          { value: 340, suffix: "%", label: "ROI en 6 meses" },
        ],
      },
      process: {
        tag: "Nuestro Proceso",
        title: "De la Idea al Crecimiento en 90 Días",
        steps: [
          { icon: Search, title: "Auditoría", desc: "Analizamos tu negocio, competencia en Alicante y oportunidades.", color: "from-secondary to-secondary" },
          { icon: Target, title: "Estrategia", desc: "Hoja de ruta con ROI proyectado y KPIs de tu sector.", color: "from-secondary to-accent" },
          { icon: Code2, title: "Desarrollo", desc: "Sprints ágiles con demos semanales y total transparencia.", color: "from-accent to-accent" },
          { icon: BarChart3, title: "Optimización", desc: "Testing y optimización con IA para máxima conversión.", color: "from-accent to-secondary" },
          { icon: Rocket, title: "Crecimiento", desc: "Mejora continua, nuevas capacidades y escalado.", color: "from-secondary to-secondary" },
        ],
      },
      authority: {
        tag: "¿Por Qué NeuralForge en Alicante?",
        title: "No Somos una Agencia Más. Somos Tu Ventaja Competitiva.",
        items: [
          { icon: MapPin, title: "Conocimiento del Mercado Alicantino", desc: "Turismo, tecnología, agricultura, comercio — entendemos cada sector y cómo posicionar tu empresa." },
          { icon: Cpu, title: "IA y Automatización Real", desc: "No vendemos buzzwords. Implementamos sistemas de IA que generan ROI medible desde el primer mes." },
          { icon: Shield, title: "Infraestructura Escalable", desc: "Desde la startup del centro hasta la corporación provincial — soluciones que crecen contigo." },
          { icon: Users, title: "Equipo 100% Senior", desc: "Cada proyecto en Alicante recibe atención directa de expertos con 10+ años de experiencia." },
        ],
      },
      cta: {
        title1: "¿Listo para Transformar Tu Empresa en",
        titleCity: "Alicante",
        title2: "?",
        subtitle: "Cada semana sin una estrategia digital efectiva es dinero que dejas en la mesa. Solo aceptamos 3 proyectos nuevos al mes.",
        button: "Solicitar Consultoría Gratuita →",
        urgency: "⚡ Plazas limitadas — Marzo 2026 casi completo",
      },
      testimonialPlaceholder: {
        quote: "NeuralForge transformó nuestra presencia online por completo. En 4 meses pasamos de ser invisibles en Google a recibir el triple de solicitudes de presupuesto.",
        author: "Director General",
        company: "Empresa de Servicios, Alicante",
      },
    },
    valencia: {
      city: "Valencia",
      metaTitle: "Desarrollo Web y SEO en Valencia | Agencia de IA y Automatización – NeuralForge",
      metaDescription: "Agencia de desarrollo web, SEO local y automatización con IA en Valencia. Creamos sitios web de alto rendimiento y chatbots inteligentes para empresas que quieren crecer.",
      hero: {
        badge: "Agencia Digital con IA en Valencia",
        title1: "Desarrollo Web Profesional en",
        titleCity: "Valencia",
        title2: "para Empresas que Quieren Dominar",
        subtitle: "Ayudamos a empresas valencianas a multiplicar sus ingresos con sitios web de alto rendimiento, SEO local dominante y automatización inteligente con IA.",
        cta: "Solicitar Consultoría Gratuita",
        cta2: "Ver Resultados",
      },
      reality: {
        tag: "La Realidad en Valencia",
        title: "El 73% de las empresas en Valencia pierden clientes por su presencia digital",
        stats: [
          { value: 73, suffix: "%", label: "de empresas con webs obsoletas en Valencia" },
          { value: 68, suffix: "%", label: "de clientes buscan en Google antes de contactar" },
          { value: 20, suffix: "h", label: "semanales perdidas en tareas manuales" },
          { value: 4, suffix: "seg", label: "para perder un cliente por web lenta" },
        ],
        statements: [
          { icon: AlertTriangle, text: "Tus clientes buscan 'servicios en Valencia' ahora mismo — y encuentran a tu competencia." },
          { icon: TrendingDown, text: "Una web obsoleta cuesta más clientes que no tener web. La primera impresión es digital." },
          { icon: Clock, text: "Tu equipo pierde 20+ horas semanales en tareas que la IA resuelve en minutos." },
        ],
      },
      services: {
        tag: "Soluciones en Valencia",
        title: "Tecnología que Trabaja para Tu Empresa",
        items: [
          { icon: Layout, title: "Diseño Web Corporativo", desc: "Sitios web profesionales optimizados para convertir visitantes en clientes. Diseño responsive y velocidad de carga ultrarrápida.", expandedDesc: "Cada proyecto incluye análisis UX del mercado valenciano, optimización de velocidad, diseño mobile-first y estrategia de conversión personalizada." },
          { icon: Search, title: "SEO Local en Valencia", desc: "Domina las búsquedas locales en Valencia y provincia. Aparece primero cuando tus clientes te buscan.", expandedDesc: "Google Maps, directorios locales, contenido optimizado por keywords y link building estratégico para posicionarte como líder en tu sector." },
          { icon: Bot, title: "Chatbots con IA", desc: "Asistentes virtuales 24/7 que responden, cualifican leads y agendan reuniones automáticamente.", expandedDesc: "Entrenados con datos de tu empresa y del mercado valenciano. Atienden en valenciano, español e inglés — ideal para turismo y comercio internacional." },
          { icon: Settings, title: "Automatización de Procesos", desc: "CRM inteligente, email flows y formularios con IA que eliminan el trabajo manual.", expandedDesc: "Integración con tus herramientas actuales: HubSpot, Salesforce, WhatsApp Business. Reducimos trabajo manual en un 60%." },
          { icon: RefreshCw, title: "Rediseño Web", desc: "Transformamos tu sitio obsoleto en una plataforma moderna que genera confianza y convierte.", expandedDesc: "Migración segura, redirecciones SEO, nuevo diseño responsive y mejora inmediata en velocidad y conversión." },
          { icon: Cpu, title: "Plataformas Avanzadas", desc: "Paneles de admin, roles de usuario, dashboards y arquitectura escalable para empresas.", expandedDesc: "Desarrollo full-stack con APIs, integraciones de terceros, seguridad enterprise y soporte continuo." },
        ],
      },
      caseStudy: {
        businessName: "Distribuciones del Mediterráneo",
        industry: "Distribución y logística local",
        before: {
          title: "Antes de NeuralForge",
          items: [
            { label: "Visitas mensuales", value: "290" },
            { label: "Leads cualificados", value: "4/mes" },
            { label: "Posición en Google", value: "Página 4+" },
            { label: "Tiempo respuesta", value: "48 horas" },
          ],
        },
        after: {
          title: "Después de NeuralForge",
          items: [
            { label: "Visitas mensuales", value: "3,850" },
            { label: "Leads cualificados", value: "58/mes" },
            { label: "Posición en Google", value: "Top 3" },
            { label: "Tiempo respuesta", value: "Instantáneo (IA)" },
          ],
        },
        metrics: [
          { value: 1227, suffix: "%", label: "Aumento de tráfico" },
          { value: 14, suffix: "x", label: "Más leads cualificados" },
          { value: 360, suffix: "%", label: "ROI en 6 meses" },
        ],
      },
      process: {
        tag: "Nuestro Proceso",
        title: "De la Idea al Crecimiento en 90 Días",
        steps: [
          { icon: Search, title: "Auditoría", desc: "Analizamos tu negocio, competencia en Valencia y oportunidades.", color: "from-secondary to-secondary" },
          { icon: Target, title: "Estrategia", desc: "Hoja de ruta con ROI proyectado y KPIs de tu sector.", color: "from-secondary to-accent" },
          { icon: Code2, title: "Desarrollo", desc: "Sprints ágiles con demos semanales y total transparencia.", color: "from-accent to-accent" },
          { icon: BarChart3, title: "Optimización", desc: "Testing y optimización con IA para máxima conversión.", color: "from-accent to-secondary" },
          { icon: Rocket, title: "Crecimiento", desc: "Mejora continua, nuevas capacidades y escalado.", color: "from-secondary to-secondary" },
        ],
      },
      authority: {
        tag: "¿Por Qué NeuralForge en Valencia?",
        title: "No Somos una Agencia Más. Somos Tu Ventaja Competitiva.",
        items: [
          { icon: MapPin, title: "Conocimiento del Mercado Valenciano", desc: "Turismo, tecnología, industria, comercio — entendemos cada sector y cómo posicionar tu empresa." },
          { icon: Cpu, title: "IA y Automatización Real", desc: "No vendemos buzzwords. Implementamos sistemas de IA que generan ROI medible desde el primer mes." },
          { icon: Shield, title: "Infraestructura Escalable", desc: "Desde la startup del centro hasta la corporación provincial — soluciones que crecen contigo." },
          { icon: Users, title: "Equipo 100% Senior", desc: "Cada proyecto en Valencia recibe atención directa de expertos con 10+ años de experiencia." },
        ],
      },
      cta: {
        title1: "¿Listo para Transformar Tu Empresa en",
        titleCity: "Valencia",
        title2: "?",
        subtitle: "Cada semana sin una estrategia digital efectiva es dinero que dejas en la mesa. Solo aceptamos 3 proyectos nuevos al mes.",
        button: "Solicitar Consultoría Gratuita →",
        urgency: "⚡ Plazas limitadas — Marzo 2026 casi completo",
      },
      testimonialPlaceholder: {
        quote: "NeuralForge transformó nuestra presencia online por completo. En 4 meses pasamos de ser invisibles en Google a recibir el triple de solicitudes de presupuesto.",
        author: "Director General",
        company: "Empresa de Servicios, Valencia",
      },
    },
  };

  return cityConfigs[city];
};

/* ── Interactive Service Card ── */
interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  expandedDesc: string;
}

const ServiceCard = ({ item, index }: { item: ServiceItem; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer relative p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:border-secondary/30 transition-all duration-500"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <item.icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <motion.div animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-secondary/80 text-sm mt-3 pt-3 border-t border-border leading-relaxed">{item.expandedDesc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Component ── */
const LocationPage = ({ city = "alicante" }: LocationPageProps) => {
  const data = getLocationData(city);
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    document.title = data.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.metaDescription);
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = data.metaDescription;
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Por favor, completa los campos obligatorios", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "¡Mensaje enviado!", description: "Te contactaremos en menos de 24 horas." });
  };

  const scrollToForm = () => document.getElementById("location-contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Sticky CTA ── */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: stickyVisible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-xl border-t border-secondary/20 py-3 px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-primary-foreground/80 text-sm">
              ¿Listo para impulsar tu negocio en {data.city}?
            </span>
          </div>
          <Button
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold ml-auto"
          >
            {data.hero.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════
          1) IMMERSIVE HERO
         ═══════════════════════════════════════════════ */}
      <motion.section ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
        <DataParticles />
        <div className="absolute inset-0 animated-gradient opacity-15" style={{ backgroundImage: "linear-gradient(135deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(217 75% 15%), hsl(194 100% 50%))", backgroundSize: "300% 300%" }} />

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6 pt-32 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-5 py-2 mb-8">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-semibold">{data.hero.badge}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.08] mb-6">
            {data.hero.title1}{" "}
            <span className="gradient-text">{data.hero.titleCity}</span>
            <br />
            <span className="text-secondary">{data.hero.title2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-primary-foreground/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.hero.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToForm} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan text-base px-10 py-6 font-bold group">
              {data.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 text-base px-8 py-6" onClick={() => document.getElementById("reality")?.scrollIntoView({ behavior: "smooth" })}>
              {data.hero.cta2}
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <FloatingDashboard />
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════
          2) "THE REALITY" — Split Stats
         ═══════════════════════════════════════════════ */}
      <section id="reality" className="bg-background overflow-hidden">
        {/* Stats bar */}
        <div className="bg-primary py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.reality.stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/50 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Split content */}
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{data.reality.tag}</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 max-w-4xl mx-auto">{data.reality.title}</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.reality.statements.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 30 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative p-8 rounded-2xl bg-card border border-border group hover:border-destructive/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-destructive/50 to-destructive/0" />
                  <s.icon className="w-8 h-8 text-destructive mb-4" />
                  <p className="text-foreground font-medium leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
              <Button onClick={scrollToForm} variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-semibold">
                Solucionar esto ahora <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3) INTERACTIVE SOLUTIONS GRID
         ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <DataParticles />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{data.services.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mt-3">{data.services.title}</h2>
            <p className="text-primary-foreground/50 text-sm mt-4">Haz clic en cada servicio para más detalles</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.items.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Link href="/#services">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Ver todos nuestros servicios <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4) MINI CASE STUDY — Before/After
         ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Caso de Éxito Simulado</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">Transformación Real en {data.city}</h2>
            <p className="text-muted-foreground mt-3 text-lg">{data.caseStudy.businessName} — {data.caseStudy.industry}</p>
          </motion.div>

          {/* Before / After cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Before */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-destructive/20 bg-card overflow-hidden">
              <div className="bg-destructive/10 px-6 py-4 flex items-center gap-3">
                <Eye className="w-5 h-5 text-destructive" />
                <h3 className="font-display font-bold text-foreground">{data.caseStudy.before.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {data.caseStudy.before.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="font-display font-bold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-secondary/30 bg-card overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
              <div className="bg-secondary/10 px-6 py-4 flex items-center gap-3 relative">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <h3 className="font-display font-bold text-foreground">{data.caseStudy.after.title}</h3>
              </div>
              <div className="p-6 space-y-4 relative">
                {data.caseStudy.after.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="font-display font-bold text-secondary">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Growth metrics */}
          <div className="grid grid-cols-3 gap-4">
            {data.caseStudy.metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl gradient-bg">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  <AnimatedCounter value={m.value} suffix={m.suffix} prefix="+" />
                </div>
                <div className="text-primary-foreground/60 text-sm mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5) PROCESS TIMELINE — Horizontal
         ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{data.process.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mt-3">{data.process.title}</h2>
          </motion.div>

          {/* Horizontal timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-accent to-secondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {data.process.steps.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative flex flex-col items-center text-center group">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <span className="text-secondary/60 text-xs font-bold tracking-widest mb-1">PASO {i + 1}</span>
                  <h3 className="font-display font-bold text-primary-foreground mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6) AUTHORITY SECTION
         ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{data.authority.tag}</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">{data.authority.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.authority.items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 group hover:border-secondary/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-full" />
                <div className="relative flex gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 p-8 rounded-2xl gradient-accent-bg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(194 100% 50%), transparent 70%)" }} />
            <div className="relative">
              <div className="text-4xl mb-4 opacity-30">&ldquo;</div>
              <blockquote className="text-primary-foreground text-lg md:text-xl font-display italic leading-relaxed max-w-2xl mx-auto">
                {data.testimonialPlaceholder.quote}
              </blockquote>
              <p className="text-secondary font-semibold mt-4">{data.testimonialPlaceholder.author}</p>
              <p className="text-primary-foreground/50 text-sm">{data.testimonialPlaceholder.company}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7) CONVERSION BLOCK + FORM
         ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary">
        <DataParticles />
        <div className="absolute inset-0 animated-gradient opacity-20" style={{ backgroundImage: "linear-gradient(135deg, hsl(194 100% 50%), hsl(250 100% 69%), hsl(194 100% 50%))", backgroundSize: "200% 200%" }} />
        <div className="relative z-10 section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
                {data.cta.title1} <span className="gradient-text">{data.cta.titleCity}</span>{data.cta.title2}
              </h2>
              <p className="text-primary-foreground/60 text-lg mb-4">{data.cta.subtitle}</p>
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 text-secondary text-sm font-semibold">
                {data.cta.urgency}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="location-contact" className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contacto</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3">
              Solicita Tu Consultoría Gratuita en <span className="gradient-text">{data.city}</span>
            </h2>
            <p className="text-muted-foreground mt-3">Cuéntanos sobre tu proyecto. Respuesta garantizada en menos de 24 horas.</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-card border border-border card-shadow">
              <CheckCircle className="w-16 h-16 text-secondary mb-6" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">¡Mensaje Recibido!</h3>
              <p className="text-muted-foreground max-w-md">Un especialista revisará tu solicitud y te contactará en menos de 24 horas con una propuesta personalizada para tu empresa en {data.city}.</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border card-shadow">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="loc-name">Nombre Completo *</Label>
                  <Input id="loc-name" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loc-email">Email Corporativo *</Label>
                  <Input id="loc-email" type="email" placeholder="tu@empresa.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background" maxLength={255} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="loc-company">Empresa</Label>
                  <Input id="loc-company" placeholder="Nombre de tu empresa" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-background" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loc-service">¿Qué Necesitas?</Label>
                  <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
                    <SelectTrigger className="bg-background"><SelectValue placeholder="Selecciona un servicio" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diseno-web">Diseño Web Corporativo</SelectItem>
                      <SelectItem value="seo-local">SEO Local</SelectItem>
                      <SelectItem value="chatbot-ia">Chatbot con IA</SelectItem>
                      <SelectItem value="automatizacion">Automatización</SelectItem>
                      <SelectItem value="rediseno">Rediseño Web</SelectItem>
                      <SelectItem value="plataforma">Plataforma Avanzada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="loc-message">Cuéntanos Sobre Tu Proyecto *</Label>
                <Textarea id="loc-message" placeholder="¿Qué desafíos enfrentas? ¿Qué resultados buscas?" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background resize-none" maxLength={2000} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold group text-base py-6">
                Solicitar Consultoría Gratuita
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Sin compromiso</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Respuesta en 24h</span>
                <span className="flex items-center gap-1"><MousePointer className="w-3 h-3" /> 100% confidencial</span>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;
