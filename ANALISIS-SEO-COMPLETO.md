# 🔍 ANÁLISIS SEO COMPLETO - Proyectazo/NeuralForge

**Fecha del análisis:** 28 de Febrero de 2026  
**Analista:** GitHub Copilot  
**Tipo de análisis:** Auditoría técnica SEO completa

---

## 📊 RESUMEN EJECUTIVO

### Puntuación General: 6.5/10

| Categoría | Puntuación | Estado |
|-----------|------------|--------|
| **SEO Técnico** | 6/10 | ⚠️ Necesita mejoras |
| **SEO On-Page** | 7/10 | ⚠️ Necesita mejoras |
| **Contenido** | 5/10 | ❌ Crítico |
| **Estructura** | 7/10 | ⚠️ Mejorable |
| **Performance** | 8/10 | ✅ Bien |
| **Schema Markup** | 5/10 | ❌ Incompleto |
| **Internacionalización** | 7/10 | ⚠️ Mejorable |

---

## 🚨 PROBLEMAS CRÍTICOS (Prioridad MÁXIMA)

### 1. **Las páginas de ubicación NO EXISTEN** ⚠️⚠️⚠️

**Problema:** El sitemap y robots.txt referencian las páginas:
- `/es/desarrollo-web-valencia`
- `/es/desarrollo-web-alicante`

**PERO ESTAS PÁGINAS NO ESTÁN CREADAS COMO RUTAS.**

**Impacto SEO:** 10/10 - CRÍTICO
- Google intentará indexar URLs que devuelven 404
- Pérdida total de posicionamiento para keywords locales
- Experiencia de usuario pésima
- Penalización en rankings

**Ubicación del problema:**
- Sitemap: `public/sitemap.xml` líneas 28 y 36
- Robots.txt: líneas 17-18
- Componentes existen en: `components/location/` pero no hay rutas creadas
- Falta: `app/[locale]/desarrollo-web-valencia/page.tsx`
- Falta: `app/[locale]/desarrollo-web-alicante/page.tsx`

**Solución:**
```bash
# Crear las rutas faltantes
app/[locale]/desarrollo-web-valencia/page.tsx
app/[locale]/desarrollo-web-alicante/page.tsx
```

**Código mínimo necesario para cada página:**
```tsx
import LocationPage from '@/components/location/LocationPage';
import { getLocationData } from '@/components/location/data/locationData';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = (key: string) => key; // Implementar correctamente
  const data = getLocationData('valencia', t);
  
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    // ... resto de metadata
  };
}

export default function DesarrolloWebValencia() {
  return <LocationPage city="valencia" />;
}
```

---

### 2. **Google Search Console NO VERIFICADO** ⚠️

**Problema:** 
```typescript
verification: {
  google: "your-google-verification-code",  // ← PLACEHOLDER
}
```

**Impacto SEO:** 9/10 - CRÍTICO
- No puedes ver cómo Google indexa tu sitio
- No puedes detectar errores de rastreo
- No puedes enviar sitemaps manualmente
- No puedes solicitar re-indexación

**Ubicación:** `app/[locale]/layout.tsx` línea 69

**Solución:**
1. Ir a [Google Search Console](https://search.google.com/search-console/)
2. Agregar propiedad
3. Copiar el código de verificación
4. Reemplazar "your-google-verification-code" con el código real

---

### 3. **Inconsistencia de Branding** ⚠️

**Problema:** El sitio usa dos nombres diferentes:

**"NeuralForge"** aparece en:
- `app/[locale]/layout.tsx` - Metadata
- `messages/es.json` - Varios lugares
- Schema markup
- Sitemap

**"Corexia"** aparece en:
- `messages/es.json` línea 235: "title": "Corexia | Diseño Web..."
- `app/[locale]/contact/page.tsx` línea 64: "hello@corexia.es"

**Impacto SEO:** 8/10 - ALTO
- Confusión de marca
- Señales mixtas a Google
- Pérdida de autoridad de marca
- Problemas de confianza del usuario

**Solución:** Decidir UN SOLO nombre y usarlo consistentemente en TODO el sitio.

---

### 4. **Imagen Open Graph NO EXISTE** ⚠️

**Problema:** 
```typescript
images: [
  {
    url: "/og-image.png",  // ← Este archivo NO existe
```

**Verificación:** `public/` no contiene `og-image.png`

**Impacto SEO:** 7/10 - ALTO
- Mala apariencia en redes sociales
- Pérdida de clicks desde social media
- Imagen rota en WhatsApp, LinkedIn, Facebook, Twitter

**Ubicación:** `app/[locale]/layout.tsx` líneas 50-56

**Solución:** Crear la imagen con estas especificaciones:
- Tamaño: 1200x630px
- Formato: PNG o JPG
- Peso: < 300KB
- Incluir: Logo + Tagline + Imagen de fondo atractiva

---

### 5. **Dominio Temporal en URLs** ⚠️

**Problema:** Todas las URLs usan:
```
https://neuralforgeai.lovable.app
```

**Impacto SEO:** 8/10 - ALTO (cuando lancéis a producción)
- No es un dominio profesional
- Lovable.app sugiere que es temporal
- Pérdida de confianza
- Cuando cambien al dominio real, perderán todo el SEO

**Ubicación:** Hardcoded en:
- `public/sitemap.xml` (todas las URLs)
- `public/robots.txt` línea 4
- `app/[locale]/layout.tsx` línea 36 (metadataBase)

**Solución:**
1. Comprar dominio definitivo (ej: `neuralforge.es` o `corexia.es`)
2. Crear variable de entorno: `NEXT_PUBLIC_SITE_URL`
3. Reemplazar URLs hardcoded con la variable
4. Configurar redirect 301 del dominio temporal al definitivo

---

## ⚠️ PROBLEMAS GRAVES (Prioridad ALTA)

### 6. **Falta Schema Organization y WebSite**

**Problema:** Solo hay schema `ProfessionalService`, pero faltan:
- Schema `Organization` (info de la empresa)
- Schema `WebSite` (info del sitio web + SearchAction)

**Impacto SEO:** 7/10
- No aparecerás en Knowledge Graph de Google
- Sin sitelinks search box
- Pérdida de rich snippets

**Ubicación:** `app/[locale]/layout.tsx` línea 103

**Solución agregar:**
```typescript
// Schema Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NeuralForge",
  "url": "https://neuralforge.es",
  "logo": "https://neuralforge.es/logo.png",
  "description": "Desarrollo web profesional para PYMEs en España",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Principal 123",
    "addressLocality": "Valencia",
    "addressRegion": "Comunidad Valenciana",
    "postalCode": "46001",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-XXX-XXX-XXX",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/neuralforge",
    "https://twitter.com/neuralforge",
    "https://www.instagram.com/neuralforge"
  ]
}

// Schema WebSite
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NeuralForge",
  "url": "https://neuralforge.es",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://neuralforge.es/buscar?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

### 7. **Información de Contacto Incompleta/Placeholder**

**Problema:** Datos de contacto son placeholders:

```typescript
telephone: "+34-XXX-XXX-XXX",  // ← Placeholder
email: "hola@neuralforge.es", // ← ¿Es real?
```

Además, en contact page dice: `hello@corexia.es` (diferente)

**Impacto SEO:** 6/10
- LocalBusiness schema inválido
- No pueden contactarte desde Google
- Confusión de usuarios

**Ubicación:** 
- `app/[locale]/layout.tsx` línea 123
- `app/[locale]/contact/page.tsx` línea 64

**Solución:** Usar datos reales y consistentes.

---

### 8. **Falta Dirección Física Completa**

**Problema:** Schema solo tiene ciudad, no dirección completa:

```typescript
address: {
  "@type": "PostalAddress",
  addressLocality: "Valencia",
  addressRegion: "Comunidad Valenciana",
  postalCode: "46001",  // ← Genérico
  addressCountry: "ES",
  // FALTA: streetAddress
}
```

**Impacto SEO:** 7/10 - Para SEO local esto es CRÍTICO
- No aparecerás en Google Maps correctamente
- SEO local severamente afectado
- Google Business Profile no se puede verificar

**Solución:** Si no tenéis oficina física:
- Usar dirección de coworking
- Usar dirección domicilio fiscal
- Usar servicio de domicilio virtual
- O quitad el schema LocalBusiness y usad solo Organization

---

### 9. **Falta hreflang x-default**

**Problema:** El sitemap define hreflang para `es` y `en`, pero falta `x-default`:

```xml
<xhtml:link rel="alternate" hreflang="es" href="..."/>
<xhtml:link rel="alternate" hreflang="en" href="..."/>
<!-- FALTA: -->
<xhtml:link rel="alternate" hreflang="x-default" href="..."/>
```

**Impacto SEO:** 5/10
- Google no sabe qué versión mostrar a usuarios de otros países
- Puede mostrar versión incorrecta

**Ubicación:** `public/sitemap.xml`

**Solución:** Agregar en cada URL:
```xml
<xhtml:link rel="alternate" hreflang="x-default" href="https://neuralforge.es/es"/>
```

---

### 10. **Falta BreadcrumbList Schema**

**Problema:** No hay migas de pan estructuradas.

**Impacto SEO:** 6/10
- Pérdida de rich snippets en búsquedas
- Navegación menos clara para Google

**Solución:** Agregar en cada página:
```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Inicio",
    "item": "https://neuralforge.es"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Desarrollo Web Valencia",
    "item": "https://neuralforge.es/desarrollo-web-valencia"
  }]
}
```

---

## ⚠️ PROBLEMAS MODERADOS (Prioridad MEDIA)

### 11. **Sin Favicon ni Apple Touch Icons**

**Problema:** Solo hay SVGs básicos en `/public`, pero faltan:
- `favicon.ico`
- `apple-touch-icon.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `manifest.json` para PWA

**Impacto SEO:** 4/10
- Mala imagen en navegadores
- No se ve bien en favoritos
- Pérdida de branding

**Solución:** Generar con [realfavicongenerator.net](https://realfavicongenerator.net/)

---

### 12. **Alt Text de Imágenes Vacío**

**Problema:** En HeroSection:
```tsx
<Image src={heroBg} alt="" fill className="object-cover" priority />
```

`alt=""` es malo para SEO.

**Impacto SEO:** 5/10
- Pérdida de posicionamiento en Google Images
- Mala accesibilidad

**Ubicación:** 
- `components/HeroSection.tsx` línea 26
- Revisar todas las imágenes del sitio

**Solución:**
```tsx
<Image src={heroBg} alt="Desarrollo web profesional para negocios en Valencia y Alicante" fill className="object-cover" priority />
```

---

### 13. **Página de Blog/Contenido NO EXISTE**

**Problema:** No hay sección de blog para contenido SEO.

**Impacto SEO:** 8/10 - MUY IMPORTANTE
- Sin contenido = sin posicionamiento orgánico
- La guía SEO menciona crear 20 artículos pero no hay dónde publicarlos
- Competencia os superará con contenido

**Solución:** Crear:
```
app/[locale]/blog/
  page.tsx           (listado de artículos)
  [slug]/
    page.tsx         (artículo individual)
```

---

### 14. **URLs sin Parámetros de Tracking**

**Problema:** No hay UTM parameters configurados para analytics.

**Impacto SEO:** 3/10 (more analytics than SEO)
- No podréis medir campañas
- No sabréis de dónde viene el tráfico

**Solución:** Usar UTM builder para campañas de marketing.

---

### 15. **Falta Schema FAQ**

**Problema:** No hay FAQPage schema en ninguna página.

**Impacto SEO:** 5/10
- Pérdida de rich snippets de FAQ
- Menos visibilidad en resultados de búsqueda

**Solución:** Crear sección FAQ y añadir:
```typescript
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Cuánto cuesta hacer una página web?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "El coste depende de la complejidad..."
    }
  }]
}
```

---

### 16. **Sitemap Estático (No Generado Dinámicamente)**

**Problema:** El sitemap es un archivo XML estático.

**Impacto SEO:** 4/10
- Hay que actualizarlo manualmente cada vez
- Fechas `lastmod` pueden quedar desactualizadas
- No incluirá blog posts automáticamente

**Solución:** Usar Next.js sitemap dinámico:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://neuralforge.es',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://neuralforge.es/es',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // ... más URLs
  ]
}
```

---

### 17. **robots.txt También Estático**

**Problema:** Similar al sitemap, robots.txt es estático.

**Impacto SEO:** 3/10
- Menos flexible
- No puede adaptarse a diferentes entornos

**Solución:** Robots dinámico:
```typescript
// app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://neuralforge.es/sitemap.xml',
  }
}
```

---

### 18. **Sin Schema Review/Rating**

**Problema:** No hay schema de reseñas en casos de estudio.

**Impacto SEO:** 5/10
- Pérdida de estrellas en resultados de búsqueda
- Menos credibilidad visual

**Solución:** Cuando tengáis reseñas reales, agregar:
```typescript
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Cliente Satisfecho"
  }
}
```

---

### 19. **Etiquetas de Idioma en Contact Page**

**Problema:** En contact page, las alternativas canónicas apuntan a `/es/contact` y `/en/contact` pero el routing define que en español es `/contacto`:

```typescript
// i18n/routing.ts
'/contact': {
  es: '/contacto',  // ← En español es /contacto
  en: '/contact',
},
```

Pero en contact page metadata:
```typescript
languages: {
  'es': '/es/contact',  // ← INCORRECTO, debería ser /es/contacto
  'en': '/en/contact',
}
```

**Impacto SEO:** 5/10
- URLs canónicas incorrectas
- Confusión en hreflang

**Ubicación:** `app/[locale]/contact/page.tsx` líneas 24-27

**Solución:** Usar las rutas correctas del routing:
```typescript
languages: {
  'es': '/es/contacto',
  'en': '/en/contact',
}
```

---

### 20. **Cookies Policy - Problema Similar**

**Problema:** Routing define:
```typescript
'/cookies': {
  es: '/política-de-cookies',
  en: '/cookies-policy',
}
```

Pero en cookies page:
```typescript
canonical: `/${locale}/cookies`,
languages: {
  'es': '/es/cookies',  // ← INCORRECTO
  'en': '/en/cookies',  // ← INCORRECTO
}
```

**Ubicación:** `app/[locale]/cookies/page.tsx` líneas 22-27

**Solución:**
```typescript
canonical: locale === 'es' ? '/es/política-de-cookies' : '/en/cookies-policy'),
languages: {
  'es': '/es/política-de-cookies',
  'en': '/en/cookies-policy',
}
```

---

## 💡 MEJORAS RECOMENDADAS (Prioridad BAJA pero Importantes)

### 21. **Agregar Meta Theme Color**

Mejorar apariencia en móviles:
```tsx
<meta name="theme-color" content="#1a2332" />
```

---

### 22. **Preconnect a Dominios Externos**

Si usáis Google Fonts, Analytics, etc:
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
```

---

### 23. **Implementar next/font Optimization**

Ya tenéis fuentes en `lib/fonts.ts` pero verificar que estén optimizadas.

---

### 24. **Agregar Web App Manifest**

Para PWA capabilities:
```json
// public/manifest.json
{
  "name": "NeuralForge - Desarrollo Web",
  "short_name": "NeuralForge",
  "description": "Desarrollo web profesional",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a2332",
  "theme_color": "#00d9ff",
  "icons": [...]
}
```

---

### 25. **Lazy Loading de Imágenes**

Verificar que imágenes fuera del viewport tengan `loading="lazy"`:
```tsx
<Image ... loading="lazy" />
```

---

### 26. **Implementar Image Priority Solo en Hero**

Solo la imagen hero debería tener `priority`, el resto lazy:
```tsx
// Hero
<Image ... priority />

// Resto
<Image ... loading="lazy" />
```

---

### 27. **Comprimir Imágenes**

Imágenes en `assets/`:
- `weclean.webp`
- `taxitime.webp`
- `Sanaja-Beauty.webp`
- `hero-bg.jpg`

Verificar que estén optimizadas (usar tinypng.com o similar).

---

### 28. **Agregar Más Variaciones de hreflang**

Si pensáis expandir a más países:
- `es-ES` (España)
- `es-MX` (México)
- `es-AR` (Argentina)
- `en-GB` (UK)
- `en-US` (USA)

---

### 29. **Implementar View Transitions API**

Para transiciones suaves entre páginas (Next.js 14+).

---

### 30. **Agregar Testimonials Schema**

En los casos de estudio, agregar:
```typescript
"@type": "Product",
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "15"
}
```

---

## 📈 MÉTRICAS Y KPIs A TRACKEAR

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### SEO Metrics
- **Páginas indexadas:** Verificar en GSC
- **Posición promedio:** Objetivo top 3 para keywords locales
- **CTR:** > 5% en resultados orgánicos
- **Backlinks:** Crecer 10-20 por mes
- **Domain Authority:** Crecer de 0 a 20+ en 6 meses

### Keywords Objetivo
Valencia:
- "desarrollo web valencia"
- "diseño web valencia"
- "programador web valencia"
- "página web valencia"
- "agencia web valencia"

Alicante:
- "desarrollo web alicante"
- "diseño web alicante"
- etc.

---

## 🎯 PLAN DE ACCIÓN PRIORITARIO

### Semana 1 (URGENTE)
1. ✅ **Crear las páginas de ubicación que faltan**
   - `/es/desarrollo-web-valencia/page.tsx`
   - `/es/desarrollo-web-alicante/page.tsx`

2. ✅ **Verificar Google Search Console**
   - Obtener código de verificación
   - Reemplazar placeholder

3. ✅ **Decidir y unificar branding**
   - ¿NeuralForge o Corexia?
   - Cambiar TODOS los lugares

4. ✅ **Crear imagen Open Graph**
   - 1200x630px
   - Guardar en `/public/og-image.png`

5. ✅ **Corregir info de contacto**
   - Email único y real
   - Teléfono real
   - Consistencia total

### Semana 2
6. ✅ **Agregar schemas faltantes**
   - Organization
   - WebSite
   - BreadcrumbList

7. ✅ **Corregir hreflang y canonical**
   - Agregar x-default
   - Corregir URLs de contact y cookies

8. ✅ **Generar favicon completo**
   - Con herramienta online
   - Todos los tamaños

### Semana 3-4
9. ✅ **Crear sección de Blog**
   - Estructura básica
   - Primeros 2-3 artículos

10. ✅ **Implementar sitemaps dinámicos**
    - Reemplazar XML estático

11. ✅ **Agregar Schema FAQ**
    - Al menos en homepage

### Mes 2
12. ✅ **Comprar dominio definitivo**
    - neuralforge.es o corexia.es
    - Configurar DNS
    - Migrar

13. ✅ **Google Business Profile**
    - Crear perfiles Valencia y Alicante
    - Verificar

14. ✅ **Estrategia de contenido**
    - Calendario editorial
    - 2 posts/mes

---

## 🛠️ HERRAMIENTAS RECOMENDADAS

### Para Análisis
- **Google Search Console** (obligatorio)
- **Google Analytics 4** (obligatorio)
- **Ahrefs** o **Semrush** (keywords y backlinks)
- **Screaming Frog** (auditorías técnicas)
- **PageSpeed Insights** (performance)

### Para Monitoreo
- **Google Alerts** (menciones de marca)
- **Answer the Public** (ideas de contenido)
- **Google Trends** (keywords trending)

### Para Testing
- **Rich Results Test** (schemas)
- **Mobile-Friendly Test**
- **Lighthouse** (Chrome DevTools)

---

## 📚 RECURSOS ADICIONALES

### Documentación Oficial
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org](https://schema.org/)

### Guías Internas
- Ver `SEO-GUIA-COMPLETA.md` para estrategia de contenido local
- Implementar las 20 ideas de artículos del blog

---

## ✅ CHECKLIST FINAL

Antes de lanzar a producción:

**Técnico:**
- [ ] Páginas Valencia/Alicante creadas
- [ ] Google Search Console verificado
- [ ] Todos los schemas implementados
- [ ] Sitemap dinámico funcionando
- [ ] Robots.txt dinámico configurado
- [ ] Favicon completo generado
- [ ] Open Graph image creada
- [ ] Todos los alt texts completados

**Contenido:**
- [ ] Branding unificado (un solo nombre)
- [ ] Info de contacto real y consistente
- [ ] Al menos 3 artículos de blog publicados
- [ ] Sección FAQ implementada

**Dominio:**
- [ ] Dominio definitivo comprado
- [ ] DNS configurado
- [ ] SSL/HTTPS activo
- [ ] Redirects 301 del dominio temporal

**Local SEO:**
- [ ] Google Business Profile creado
- [ ] Dirección física validada
- [ ] NAP consistente en todo el sitio
- [ ] Horarios de atención actualizados

**Analytics:**
- [ ] Google Analytics 4 instalado
- [ ] Conversiones configuradas
- [ ] Goals definidos
- [ ] Dashboard de KPIs creado

---

## 🎓 CONCLUSIONES

**Puntos Fuertes:**
- ✅ Buena estructura técnica base (Next.js, i18n)
- ✅ Diseño responsive bien implementado
- ✅ Sistema de cookies compliant
- ✅ Internacionalización funcional
- ✅ Performance aparentemente buena

**Puntos Débiles:**
- ❌ **CRÍTICO:** Páginas de ubicación no existen pero están en sitemap
- ❌ Branding inconsistente
- ❌ Sin contenido de blog
- ❌ Schemas incompletos
- ❌ Sin verificación de Google

**Próximos Pasos:**
1. Arreglar los 5 problemas críticos (Semana 1)
2. Implementar mejoras graves (Semana 2-4)
3. Lanzar contenido regularmente (ongoing)
4. Monitorear métricas semanalmente

**Tiempo estimado para implementar todo:** 4-6 semanas de trabajo.

**ROI esperado:** Con estas mejoras, en 6 meses deberíais:
- Aparecer en top 5 para keywords locales principales
- Generar 500-1000 visitas orgánicas/mes
- Convertir 2-5% en leads calificados

---

**Fin del análisis**

¿Necesitas ayuda implementando alguna de estas mejoras? Puedo asistirte con el código específico. 🚀
