# SEO Action Plan — corexia.es
> Generado el 2026-05-21 tras auditoría completa

## Estado General

| Dimensión | Antes | Objetivo |
|-----------|:-----:|:--------:|
| SEO Técnico | 4/10 | 8/10 |
| SEO Local | 4/10 | 7/10 |
| Contenido | 7/10 | 9/10 |
| Autoridad | 1/10 | 5/10 |

---

## BLOQUE A — Correcciones técnicas de código
> Implementadas automáticamente por agentes

### A1 — Redirect www en next.config.ts
- [x] Redirect 301 `corexia.es` → `www.corexia.es` ✅

### A2 — Canonical y hreflang en páginas sin generateMetadata
- [x] `app/[locale]/page.tsx` (home) — ya correcta ✅
- [x] `app/[locale]/blog/page.tsx` — hreflang EN corregido ✅
- [x] `app/[locale]/contact/page.tsx` — generateMetadata completa con URLs absolutas ✅
- [x] `app/[locale]/web-design-seo-alicante/page.tsx` — bug de prefijo locale corregido ✅
- [x] `app/[locale]/web-design-seo-valencia/page.tsx` — bug locale + og-alicante→og-valencia ✅
- [x] `app/[locale]/services/*/page.tsx` — canonical/hreflang → URLs absolutas + x-default ✅

### A3 — OG tags completos
- [x] `openGraph.images` añadido en todas las páginas de servicio, contacto, Alicante, Valencia ✅
- [ ] ⚠️ MANUAL: Crear `/public/og-image.png` (1200×630px) y `/public/og-valencia.png`

### A4 — Schema en layout.tsx
- [x] `streetAddress` placeholder añadido ⚠️ SUSTITUIR por dirección real
- [x] `sameAs` con LinkedIn e Instagram añadido ✅
- [x] `@type` cambiado a array `["LocalBusiness", "ProfessionalService"]` ✅
- [x] `x-default` hreflang añadido en generateMetadata del layout ✅
- [ ] `aggregateRating` — añadir cuando haya reseñas reales

### A5 — Blog H1 y Footer
- [x] H1 blog → "Blog de Diseño Web y SEO Local" (ES) / "Web Design & Local SEO Blog" (EN) ✅
- [x] Horarios en Footer via `t("footer.hours")` + claves en messages/*.json ✅

---

## BLOQUE B — Contenido: nuevos artículos del blog
> Creados automáticamente por agente

### Artículos nuevos (ES + EN):
- [x] "Cuánto Cuesta una Página Web Profesional en España en 2026" ✅
- [x] "Cómo Aparecer en Google Maps: Guía para Negocios Locales" ✅
- [x] "Qué es una Landing Page y por qué tu Negocio la Necesita" ✅

---

## BLOQUE C — Acciones manuales (no automatizables)
> Estas tareas requieren acción del equipo

### C1 — Prioridad CRÍTICA (semana 1)
- [ ] **Google Business Profile**: Crear o reclamar perfil en google.com/business
  - Usar nombre exacto: "Corexia"
  - Añadir dirección completa, horarios, fotos, descripción
  - Verificar el perfil por carta o videollamada
- [ ] **Google Search Console**: Verificar dominio y solicitar indexación de homepage + páginas clave
- [ ] **og-image.png**: Crear imagen 1200×630px y subirla a /public/

### C2 — Prioridad ALTA (semanas 2-4)
- [ ] **Directorios** (dar de alta con mismo NAP exacto):
  - [ ] Páginas Amarillas: paginasamarillas.es
  - [ ] Yelp España: yelp.es
  - [ ] Sortlist: sortlist.com
  - [ ] Clutch: clutch.co
  - [ ] TrustLocal: trustlocal.es
- [ ] **Dirección física**: Decidir y fijar una dirección real de Alicante para web + GBP
- [ ] **Reseñas**: Pedir a clientes actuales que dejen reseña en Google

### C3 — Prioridad MEDIA (mes 2-3)
- [ ] Landings de ciudad adicionales: Torrevieja, Elche (reutilizar `LocationPage`)
- [ ] Plan de contenido blog: 2 artículos/mes
- [ ] Backlinks: Notas de prensa en medios locales de Alicante/Valencia

---

## Seguimiento de keywords objetivo

| Keyword | URL objetivo | Estado |
|---------|-------------|--------|
| diseño web Alicante | /diseno-web-seo-alicante | 🔴 Sin indexar |
| agencia SEO Alicante | /diseno-web-seo-alicante | 🔴 Sin indexar |
| diseño web Valencia | /diseno-web-seo-valencia | 🔴 Sin indexar |
| cuánto cuesta una página web España | /blog/cuanto-cuesta-una-pagina-web... | 🟡 Por crear |
| cómo aparecer en Google Maps | /blog/como-aparecer-en-google-maps... | 🟡 Por crear |
| SEO local Alicante | /blog/seo-local-alicante-guia-practica-2026 | 🔴 Sin indexar |
