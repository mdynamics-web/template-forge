import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Solutions",
    "nav.process": "Process",
    "nav.cases": "Case Studies",
    "nav.contact": "Contact",
    "nav.cta": "Book a Call",

    // Hero
    "hero.badge": "AI-Powered Growth for Enterprise",
    "hero.title1": "Your Competitors Are Already",
    "hero.title2": "Using AI to Win.",
    "hero.title3": "Are You?",
    "hero.subtitle": "We build AI systems, automated workflows, and high-converting websites that help mid-market and enterprise companies grow revenue, cut costs, and scale faster — without hiring more people.",
    "hero.cta1": "Book Your Free Strategy Call",
    "hero.cta2": "See How It Works",
    "hero.stat1.value": "$2.4B+",
    "hero.stat1.label": "Revenue Generated for Clients",
    "hero.stat2.value": "98%",
    "hero.stat2.label": "Client Retention Rate",
    "hero.stat3.value": "3.5x",
    "hero.stat3.label": "Average ROI in 6 Months",
    "hero.stat4.value": "24/7",
    "hero.stat4.label": "AI Systems Running Non-Stop",

    // Problems
    "problems.tag": "The Real Cost of Doing Nothing",
    "problems.title1": "Every Day Without AI,",
    "problems.title2": "You're Losing Money",
    "problems.card1.title": "Your Website Is Losing Clients",
    "problems.card1.desc": "A slow, outdated website costs you millions in lost deals. While your competitors run AI-powered platforms, you're stuck with a digital brochure from 2015.",
    "problems.card2.title": "You're Invisible to Decision Makers",
    "problems.card2.desc": "Your ideal clients are searching online right now — and finding your competitors. No SEO strategy means no pipeline. No pipeline means no growth.",
    "problems.card3.title": "Your Team Wastes 40% of Their Time",
    "problems.card3.desc": "Manual emails, spreadsheet tracking, no automation. Your best people spend half their day on tasks that AI could handle in seconds.",

    // Services
    "services.tag": "AI-Powered Solutions",
    "services.title1": "Intelligent Systems That",
    "services.title2": "Run Your Business",
    "services.subtitle": "We don't build websites — we build revenue engines powered by artificial intelligence and automation.",
    "services.s1.title": "AI-Powered Websites",
    "services.s1.desc": "Websites that convert visitors into clients automatically. Smart CTAs, personalized content, and real-time analytics — built for companies doing $5M–$500M.",
    "services.s2.title": "AI Search Domination",
    "services.s2.desc": "Get found by the right buyers at the right time. Our AI-driven SEO puts your company on page one and keeps you there — guaranteed.",
    "services.s3.title": "Custom AI Assistants",
    "services.s3.desc": "24/7 AI employees trained on your data. They answer questions, qualify leads, book meetings, and close deals — while your team sleeps.",
    "services.s4.title": "Digital Transformation",
    "services.s4.desc": "Complete modernization of your digital presence. We replace outdated systems with intelligent platforms that generate measurable ROI.",
    "services.s5.title": "Workflow Automation",
    "services.s5.desc": "Eliminate manual work across your entire operation. CRM, emails, reports, onboarding — all automated, all intelligent, all saving you money.",
    "services.s6.title": "Enterprise Platforms",
    "services.s6.desc": "Scalable command centers with role-based access, real-time dashboards, and AI analytics. Built for operations that need to move fast.",

    // Differentiators
    "diff.tag": "Why NeuralForge",
    "diff.title": "We're Not an Agency. We're Your Unfair Advantage.",
    "diff.subtitle": "While other agencies build pretty pages, we build intelligent systems that generate revenue on autopilot.",
    "diff.d1.title": "AI-First, Always",
    "diff.d1.desc": "Every solution we build has AI at its core. Not as a buzzword — as the engine that drives measurable business outcomes.",
    "diff.d2.title": "Built for Speed & Scale",
    "diff.d2.desc": "Sub-second load times, 99.99% uptime, and architecture that handles 10x growth without breaking. Your technology will never hold you back.",
    "diff.d3.title": "Enterprise Security",
    "diff.d3.desc": "SOC 2 compliant, GDPR ready, penetration tested. Your data and your customers' data are protected by military-grade infrastructure.",
    "diff.d4.title": "Senior-Only Team",
    "diff.d4.desc": "No juniors, no outsourcing. Every person on your project has 10+ years of experience and a track record with Fortune 500 clients.",

    // Process
    "process.tag": "How We Work",
    "process.title1": "From Strategy to",
    "process.title2": "Revenue in 90 Days",
    "process.s1.title": "Discovery",
    "process.s1.desc": "We audit your business, competitors, and market. You get a clear picture of what's costing you money — and how AI fixes it.",
    "process.s2.title": "Strategy",
    "process.s2.desc": "Custom roadmap with projected ROI, timelines, and KPIs. You'll know exactly what you're getting before we write a single line of code.",
    "process.s3.title": "Build",
    "process.s3.desc": "Our senior engineers build your solution in agile sprints. Weekly demos, real-time progress, zero surprises.",
    "process.s4.title": "Optimize",
    "process.s4.desc": "AI-driven testing and optimization. Every element is tuned for maximum conversion, speed, and search ranking.",
    "process.s5.title": "Scale",
    "process.s5.desc": "Launch is just the beginning. We continuously improve your systems, add AI capabilities, and ensure you stay ahead.",

    // Case Studies
    "cases.tag": "Proven Results",
    "cases.title1": "Real Companies.",
    "cases.title2": "Real Revenue Growth.",
    "cases.c1.title": "FinanceFlow",
    "cases.c1.category": "Enterprise Fintech",
    "cases.c1.desc": "AI-powered analytics platform that automated 80% of reporting and increased qualified leads by 240% in 6 months for a $50M financial services firm.",
    "cases.c2.title": "MediConnect",
    "cases.c2.category": "Healthcare SaaS",
    "cases.c2.desc": "Enterprise patient management platform with AI scheduling that reduced operational costs by $2M annually and improved patient satisfaction by 45%.",
    "cases.c3.title": "RetailEdge",
    "cases.c3.category": "Enterprise E-Commerce",
    "cases.c3.desc": "AI-driven e-commerce overhaul with automated inventory, smart chatbot, and SEO that turned a declining retailer into a market leader.",

    // Tech
    "tech.tag": "Technology",
    "tech.title1": "Enterprise-Grade",
    "tech.title2": "Infrastructure",
    "tech.subtitle": "We use the same technology stack trusted by Google, Netflix, and Amazon — scaled for your business.",

    // CTA
    "cta.title1": "Stop Losing Revenue to",
    "cta.title2": "Outdated Technology",
    "cta.subtitle": "Every week you wait, your competitors get further ahead. Let's talk about how AI can transform your business — free, no obligation.",
    "cta.button": "Book Your Free Strategy Call →",

    // Footer
    "footer.tagline": "Forging intelligent digital solutions for companies ready to dominate their market.",
    "footer.services": "Solutions",
    "footer.company": "Company",
    "footer.contact": "Get in Touch",
    "footer.s1": "AI-Powered Websites",
    "footer.s2": "Search Domination",
    "footer.s3": "Custom AI Assistants",
    "footer.s4": "Workflow Automation",
    "footer.s5": "Enterprise Platforms",
    "footer.c1": "Our Process",
    "footer.c2": "Case Studies",
    "footer.c3": "Contact",
    "footer.consultation": "Free Strategy Call",
    "footer.consultation.desc": "Book a 30-minute call with our AI strategy team. No pitch — just actionable insights for your business.",
    "footer.response": "Response within 24 hours",

    // Contact page
    "contact.tag": "Let's Talk Growth",
    "contact.title1": "Ready to Put AI to Work",
    "contact.title2": "for Your Business?",
    "contact.subtitle": "Tell us about your goals. We'll show you exactly how AI and automation can accelerate your revenue.",
    "contact.name": "Full Name *",
    "contact.email": "Work Email *",
    "contact.company": "Company Name",
    "contact.service": "What Do You Need?",
    "contact.service.placeholder": "Select a solution",
    "contact.service.website": "AI-Powered Website",
    "contact.service.seo": "Search Domination",
    "contact.service.chatbot": "Custom AI Assistant",
    "contact.service.redesign": "Digital Transformation",
    "contact.service.automation": "Workflow Automation",
    "contact.service.platform": "Enterprise Platform",
    "contact.message": "Tell Us About Your Goals *",
    "contact.message.placeholder": "What challenges are you facing? What does success look like for you?",
    "contact.submit": "Send Message",
    "contact.thankyou.title": "We're On It!",
    "contact.thankyou.desc": "A senior strategist will review your project and get back to you within 24 hours with actionable insights.",
    "contact.info.title": "Direct Contact",
    "contact.info.email.label": "Email",
    "contact.info.phone.label": "Phone",
    "contact.info.location.label": "Headquarters",
  },
  es: {
    // Navbar
    "nav.services": "Soluciones",
    "nav.process": "Proceso",
    "nav.cases": "Casos de Éxito",
    "nav.contact": "Contacto",
    "nav.cta": "Agendar Llamada",

    // Hero
    "hero.badge": "Crecimiento Empresarial con IA",
    "hero.title1": "Tu Competencia Ya Está",
    "hero.title2": "Usando IA para Ganar.",
    "hero.title3": "¿Y Tú?",
    "hero.subtitle": "Construimos sistemas de IA, flujos automatizados y sitios web de alta conversión que ayudan a empresas medianas y grandes a crecer ingresos, reducir costos y escalar más rápido — sin contratar más personal.",
    "hero.cta1": "Agenda Tu Llamada Estratégica Gratis",
    "hero.cta2": "Descubre Cómo Funciona",
    "hero.stat1.value": "$2.4B+",
    "hero.stat1.label": "Ingresos Generados para Clientes",
    "hero.stat2.value": "98%",
    "hero.stat2.label": "Tasa de Retención de Clientes",
    "hero.stat3.value": "3.5x",
    "hero.stat3.label": "ROI Promedio en 6 Meses",
    "hero.stat4.value": "24/7",
    "hero.stat4.label": "Sistemas de IA Activos Sin Parar",

    // Problems
    "problems.tag": "El Costo Real de No Actuar",
    "problems.title1": "Cada Día Sin IA,",
    "problems.title2": "Estás Perdiendo Dinero",
    "problems.card1.title": "Tu Sitio Web Está Perdiendo Clientes",
    "problems.card1.desc": "Un sitio web lento y desactualizado te cuesta millones en negocios perdidos. Mientras tu competencia usa plataformas con IA, tú sigues con un folleto digital del 2015.",
    "problems.card2.title": "Eres Invisible para los Tomadores de Decisión",
    "problems.card2.desc": "Tus clientes ideales están buscando en línea ahora mismo — y encuentran a tu competencia. Sin estrategia SEO no hay pipeline. Sin pipeline no hay crecimiento.",
    "problems.card3.title": "Tu Equipo Pierde el 40% de Su Tiempo",
    "problems.card3.desc": "Correos manuales, seguimiento en hojas de cálculo, sin automatización. Tu mejor talento pasa medio día en tareas que la IA resuelve en segundos.",

    // Services
    "services.tag": "Soluciones con IA",
    "services.title1": "Sistemas Inteligentes Que",
    "services.title2": "Operan Tu Negocio",
    "services.subtitle": "No construimos sitios web — construimos motores de ingresos impulsados por inteligencia artificial y automatización.",
    "services.s1.title": "Sitios Web con IA",
    "services.s1.desc": "Sitios que convierten visitantes en clientes automáticamente. CTAs inteligentes, contenido personalizado y analítica en tiempo real — para empresas de $5M–$500M.",
    "services.s2.title": "Dominio en Búsquedas con IA",
    "services.s2.desc": "Que te encuentren los compradores correctos en el momento correcto. Nuestro SEO con IA posiciona tu empresa en la primera página — garantizado.",
    "services.s3.title": "Asistentes de IA Personalizados",
    "services.s3.desc": "Empleados de IA 24/7 entrenados con tus datos. Responden preguntas, califican leads, agendan reuniones y cierran ventas — mientras tu equipo descansa.",
    "services.s4.title": "Transformación Digital",
    "services.s4.desc": "Modernización completa de tu presencia digital. Reemplazamos sistemas obsoletos con plataformas inteligentes que generan ROI medible.",
    "services.s5.title": "Automatización de Procesos",
    "services.s5.desc": "Elimina el trabajo manual en toda tu operación. CRM, correos, reportes, onboarding — todo automatizado, todo inteligente, todo ahorrándote dinero.",
    "services.s6.title": "Plataformas Empresariales",
    "services.s6.desc": "Centros de comando escalables con acceso por roles, dashboards en tiempo real y analítica con IA. Para operaciones que necesitan moverse rápido.",

    // Differentiators
    "diff.tag": "Por Qué NeuralForge",
    "diff.title": "No Somos una Agencia. Somos Tu Ventaja Competitiva.",
    "diff.subtitle": "Mientras otras agencias hacen páginas bonitas, nosotros construimos sistemas inteligentes que generan ingresos en automático.",
    "diff.d1.title": "IA Primero, Siempre",
    "diff.d1.desc": "Cada solución que construimos tiene IA en su núcleo. No como una palabra de moda — como el motor que impulsa resultados de negocio medibles.",
    "diff.d2.title": "Velocidad y Escalabilidad",
    "diff.d2.desc": "Carga en menos de un segundo, 99.99% uptime y arquitectura que soporta 10x de crecimiento sin fallar. Tu tecnología nunca será un obstáculo.",
    "diff.d3.title": "Seguridad Empresarial",
    "diff.d3.desc": "Cumplimiento SOC 2, preparados para GDPR, con pruebas de penetración. Tus datos y los de tus clientes están protegidos con infraestructura de grado militar.",
    "diff.d4.title": "Equipo 100% Senior",
    "diff.d4.desc": "Sin juniors, sin outsourcing. Cada persona en tu proyecto tiene 10+ años de experiencia y un historial con clientes Fortune 500.",

    // Process
    "process.tag": "Cómo Trabajamos",
    "process.title1": "De Estrategia a",
    "process.title2": "Ingresos en 90 Días",
    "process.s1.title": "Descubrimiento",
    "process.s1.desc": "Auditamos tu negocio, competidores y mercado. Obtienes una imagen clara de qué te está costando dinero — y cómo la IA lo soluciona.",
    "process.s2.title": "Estrategia",
    "process.s2.desc": "Hoja de ruta personalizada con ROI proyectado, plazos y KPIs. Sabrás exactamente qué recibes antes de que escribamos una sola línea de código.",
    "process.s3.title": "Construcción",
    "process.s3.desc": "Nuestros ingenieros senior construyen tu solución en sprints ágiles. Demos semanales, progreso en tiempo real, cero sorpresas.",
    "process.s4.title": "Optimización",
    "process.s4.desc": "Testing y optimización impulsados por IA. Cada elemento está afinado para máxima conversión, velocidad y posicionamiento.",
    "process.s5.title": "Escalar",
    "process.s5.desc": "El lanzamiento es solo el principio. Mejoramos continuamente tus sistemas, agregamos capacidades de IA y aseguramos que siempre estés adelante.",

    // Case Studies
    "cases.tag": "Resultados Comprobados",
    "cases.title1": "Empresas Reales.",
    "cases.title2": "Crecimiento Real.",
    "cases.c1.title": "FinanceFlow",
    "cases.c1.category": "Fintech Empresarial",
    "cases.c1.desc": "Plataforma analítica con IA que automatizó el 80% de los reportes y aumentó leads calificados un 240% en 6 meses para una firma financiera de $50M.",
    "cases.c2.title": "MediConnect",
    "cases.c2.category": "SaaS de Salud",
    "cases.c2.desc": "Plataforma empresarial de gestión de pacientes con IA que redujo costos operativos en $2M anuales y mejoró la satisfacción del paciente un 45%.",
    "cases.c3.title": "RetailEdge",
    "cases.c3.category": "E-Commerce Empresarial",
    "cases.c3.desc": "Renovación de e-commerce impulsada por IA con inventario automatizado, chatbot inteligente y SEO que convirtió un retailer en declive en líder del mercado.",

    // Tech
    "tech.tag": "Tecnología",
    "tech.title1": "Infraestructura de",
    "tech.title2": "Nivel Empresarial",
    "tech.subtitle": "Usamos la misma tecnología en la que confían Google, Netflix y Amazon — escalada para tu negocio.",

    // CTA
    "cta.title1": "Deja de Perder Ingresos por",
    "cta.title2": "Tecnología Obsoleta",
    "cta.subtitle": "Cada semana que esperas, tu competencia avanza más. Hablemos de cómo la IA puede transformar tu negocio — gratis, sin compromiso.",
    "cta.button": "Agenda Tu Llamada Estratégica Gratis →",

    // Footer
    "footer.tagline": "Forjando soluciones digitales inteligentes para empresas listas para dominar su mercado.",
    "footer.services": "Soluciones",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",
    "footer.s1": "Sitios Web con IA",
    "footer.s2": "Dominio en Búsquedas",
    "footer.s3": "Asistentes de IA",
    "footer.s4": "Automatización",
    "footer.s5": "Plataformas Empresariales",
    "footer.c1": "Nuestro Proceso",
    "footer.c2": "Casos de Éxito",
    "footer.c3": "Contacto",
    "footer.consultation": "Llamada Estratégica Gratis",
    "footer.consultation.desc": "Agenda 30 minutos con nuestro equipo de estrategia de IA. Sin pitch — solo ideas accionables para tu negocio.",
    "footer.response": "Respuesta en menos de 24 horas",

    // Contact page
    "contact.tag": "Hablemos de Crecimiento",
    "contact.title1": "¿Listo para Poner la IA a Trabajar",
    "contact.title2": "para Tu Negocio?",
    "contact.subtitle": "Cuéntanos sobre tus objetivos. Te mostraremos exactamente cómo la IA y la automatización pueden acelerar tus ingresos.",
    "contact.name": "Nombre Completo *",
    "contact.email": "Email Corporativo *",
    "contact.company": "Nombre de Empresa",
    "contact.service": "¿Qué Necesitas?",
    "contact.service.placeholder": "Selecciona una solución",
    "contact.service.website": "Sitio Web con IA",
    "contact.service.seo": "Dominio en Búsquedas",
    "contact.service.chatbot": "Asistente de IA",
    "contact.service.redesign": "Transformación Digital",
    "contact.service.automation": "Automatización de Procesos",
    "contact.service.platform": "Plataforma Empresarial",
    "contact.message": "Cuéntanos Sobre Tus Objetivos *",
    "contact.message.placeholder": "¿Qué desafíos enfrentas? ¿Cómo se ve el éxito para ti?",
    "contact.submit": "Enviar Mensaje",
    "contact.thankyou.title": "¡Estamos en Ello!",
    "contact.thankyou.desc": "Un estratega senior revisará tu proyecto y te responderá en menos de 24 horas con ideas accionables.",
    "contact.info.title": "Contacto Directo",
    "contact.info.email.label": "Email",
    "contact.info.phone.label": "Teléfono",
    "contact.info.location.label": "Sede Central",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
