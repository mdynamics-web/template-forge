# Auditoría SEO — corexia.es
> Fecha: 2026-05-21 | Auditor: Claude Code (agent-auditor)
> Stack detectado: Next.js 16 App Router, React 19, TypeScript, next-intl, Vercel

---

## Dashboard de puntuaciones

| Dimensión | Puntuación | Δ vs auditoría anterior |
|-----------|:----------:|:-----------------------:|
| SEO Técnico | **6/10** | +2 |
| SEO Local | **4/10** | 0 |
| Contenido | **8/10** | +1 |
| Autoridad | **1/10** | 0 |

---

## Hallazgos por severidad

### 🔴 CRÍTICO

---

**PROBLEMA: URLs del blog con prefijo de locale incorrecto**
- **Qué está pasando:** `blogViewPage.tsx` genera links como `/${locale}/blog/${slug}`, produciendo `/es/blog/cuanto-cuesta-...` en lugar de `/blog/cuanto-cuesta-...`. Con `localePrefix: 'never'` las URLs con prefijo son diferentes a las canónicas declaradas, lo que puede crear contenido duplicado o enlaces rotos.
- **Impacto:** Google indexa URLs erróneas, el canonical y la URL real del enlace no coinciden. Pérdida de link juice y posibles soft 404.
- **Archivos afectados:** `views/blog/blogViewPage.tsx` (líneas 59 y 129), `views/blog/articleViewPage.tsx` (líneas 39 y 216)
- **Estado:** ✅ CORREGIDO en esta sesión — rutas cambiadas a `/blog/${slug}` sin prefijo.

---

**PROBLEMA: Canonical URLs de artículos EN con prefijo `/en/`**
- **Qué está pasando:** Los 6 artículos EN tienen `canonical: "https://www.corexia.es/en/blog/..."` en el frontmatter. Con `localePrefix: 'never'`, la URL real servida es `/blog/slug` (sin `/en/`). El canonical apunta a una URL diferente de la real.
- **Impacto:** Google descarta el canonical (URL que sirvió ≠ canonical declarado) y puede indexar la URL incorrecta o ignorar los metadatos.
- **Archivos afectados:** Los 6 MDX EN en `content/en/`
- **Estado:** ✅ CORREGIDO — `/en/blog/` eliminado de todos los canonicals EN.

---

**PROBLEMA: Fallback canonical en `blog/[slug]/page.tsx` con locale prefix**
- **Qué está pasando:** La línea de fallback era `${BASE_URL}/${locale}/blog/${slug}`. Si un artículo no tiene `canonical` en frontmatter, se genera una URL incorrecta. Mismo problema en los schemas Article y BreadcrumbList (líneas 139, 165, 171).
- **Impacto:** Artículos sin canonical en frontmatter reciben metadatos SEO incorrectos.
- **Estado:** ✅ CORREGIDO — fallback cambiado a `${BASE_URL}/blog/${slug}`, breadcrumb home → `${BASE_URL}`, blog item → `${BASE_URL}/blog`.

---

**PROBLEMA: Ausencia de Google Business Profile**
- **Qué está pasando:** Búsqueda de "Corexia agencia diseño web Alicante" no devuelve ningún resultado de Corexia. No hay ficha en Google Maps. Sin GBP, la web no puede aparecer en el Local Pack (mapa de 3 resultados que recibe el 40–50% de clics en búsquedas locales).
- **Impacto:** Invisible en la búsqueda local más valiosa. Competidores con GBP verificado capturan todos estos clics.
- **Acción manual requerida:** Crear o reclamar perfil en google.com/business con NAP exacto: "Corexia", dirección física Alicante, teléfono +34 652 56 14 27, horarios Lun–Vie 9:00–18:00.
- **Estado:** ❌ PENDIENTE MANUAL

---

**PROBLEMA: Corexia no indexada en Google (site:corexia.es sin resultados)**
- **Qué está pasando:** La búsqueda `site:corexia.es` no devuelve páginas propias del dominio. Aparecen resultados de otras entidades llamadas "Corexia". El sitio lleva activo desde marzo 2026 y Google Search Console muestra 4 páginas indexadas con 124 impresiones/día (creciente), pero la visibilidad orgánica es mínima.
- **Impacto:** Sin indexación masiva, ninguna keyword puede posicionar. El tráfico orgánico es prácticamente nulo.
- **Acción:** Verificar dominio en Google Search Console → solicitar indexación manual de homepage + servicios + blog. Comprobar que no hay directiva `noindex` activa.
- **Estado:** ❌ PENDIENTE MANUAL

---

### 🟡 IMPORTANTE

---

**PROBLEMA: Schema markup sin dirección física completa**
- **Qué está pasando:** El schema `LocalBusiness` en `layout.tsx` tiene `streetAddress: "TODO: añadir dirección real"`. Google usa el schema para validar la coherencia NAP. Un placeholder no es una dirección válida.
- **Impacto:** Google puede ignorar o penalizar el schema si detecta que el `streetAddress` no es una dirección real. Afecta a la coherencia NAP en todo el dominio.
- **Acción manual:** Reemplazar el placeholder con la dirección física real de Alicante. Si se opera en coworking, usar esa dirección (asegurarse que coincide con la del GBP).
- **Estado:** ❌ PENDIENTE MANUAL

---

**PROBLEMA: Sin presencia en directorios locales**
- **Qué está pasando:** Corexia no aparece en Páginas Amarillas, Yelp, Sortlist ni Clutch. Los directorios son fuente de backlinks dofollow y de señales de autoridad local (NAP citations).
- **Impacto:** Sin citations consistentes, Google tiene dificultad para confirmar la entidad local. Pérdida de 3 puntos en autoridad.
- **Acción:** Dar de alta en al menos: Páginas Amarillas, Yelp España, Sortlist, Clutch, TrustLocal. NAP idéntico en todos.
- **Estado:** ❌ PENDIENTE MANUAL

---

**PROBLEMA: hreflang entre artículos de blog ES/EN incompleto**
- **Qué está pasando:** El `blog/[slug]/page.tsx` intentaba cruzar hreflang usando el mismo slug en ambos idiomas (incorrecto, ya que los slugs son distintos). Se ha simplificado a `locale: canonical` + `x-default`, lo cual es correcto pero no enlaza los pares ES/EN entre sí.
- **Impacto:** Google no sabe que el artículo ES y el artículo EN son equivalentes. Menor señal para la audiencia bilingüe.
- **Mejora futura:** Añadir campo `pairedSlug` al frontmatter de cada artículo y usarlo para construir el hreflang cruzado.
- **Estado:** ⚠️ PARCIALMENTE CORREGIDO (sin hreflang cruzado entre pares)

---

**PROBLEMA: og:image genérica o inexistente en blog**
- **Qué está pasando:** Los artículos del blog hacen fallback a `/og-blog.png`, que no existe en `/public/`. Sin OG image, las comparticiones en redes sociales y WhatsApp muestran un placeholder vacío.
- **Impacto:** CTR social muy bajo. Pérdida de tráfico referido.
- **Acción manual:** Crear `/public/og-blog.png` (1200×630px) genérica para blog, y `/public/og-image.png` genérica para el resto de páginas.
- **Estado:** ❌ PENDIENTE MANUAL

---

**PROBLEMA: Meta description no visible externamente en homepage**
- **Qué está pasando:** El fetch de la homepage no detectó `<meta description>`. Puede ser un problema del extractor (Next.js SSR injected en `<head>`) o puede que realmente falte.
- **Acción:** Verificar con `curl -s https://www.corexia.es/ | grep -i 'meta name="description"'` o en Google Search Console → Inspeccionar URL.
- **Estado:** ⚠️ A VERIFICAR

---

### 🟢 MEJORAS

---

**MEJORA: Blog H1 inconsistente con el title**
- **Qué está pasando:** Title del blog: `"Blog de Diseño Web y SEO | Corexia"`. H1 visible: `"Blog de Diseño Web y SEO Local"`. El H1 añade "Local" que no está en el title. Pequeña inconsistencia de señal para crawlers.
- **Acción:** Alinear H1 y title o dejar el H1 más específico (es correcto de cara al usuario pero conviene que el title también lo mencione).

---

**MEJORA: Página del blog sin og:image propia**
- **Qué está pasando:** La página `/blog` no tiene `og:image` configurada, solo tiene title y description.
- **Acción:** Añadir `openGraph.images` en el `generateMetadata` de `app/[locale]/blog/page.tsx`.

---

**MEJORA: Sección de precios en Alicante/Valencia landing — no desplegada aún**
- **Qué está pasando:** El PricingSection se creó en esta sesión pero el sitio en producción (corexia.es) aún no lo refleja porque requiere un nuevo deploy a Vercel.
- **Acción:** Ejecutar `git push` para que Vercel dispare el rebuild automático.

---

**MEJORA: Landing de Valencia sin PricingSection**
- **Qué está pasando:** La landing de Alicante tenía PricingSection pero la de Valencia no.
- **Estado:** ✅ CORREGIDO en esta sesión — creado `PricingSection.tsx` para Valencia + `valencia.pricing` en messages ES/EN + integrado en `ValenciaWebDesignLanding.tsx`.

---

**MEJORA: aggregateRating ausente en schema**
- **Qué está pasando:** El schema `LocalBusiness` no tiene `aggregateRating`. Google puede mostrar estrellas en los resultados de búsqueda si este campo existe y hay reseñas verificables.
- **Acción:** Añadir cuando existan reseñas reales en GBP.

---

## Oportunidades de keywords locales

| Keyword | Tipo | Dificultad estimada | Página sugerida |
|---------|------|---------------------|-----------------|
| diseño web Alicante | Transaccional | Media | `/diseno-web-seo-alicante` |
| agencia SEO Alicante | Transaccional | Media | `/diseno-web-seo-alicante` |
| diseño web Valencia | Transaccional | Media | `/diseno-web-seo-valencia` |
| cuánto cuesta una página web España 2026 | Informacional | Baja | `/blog/cuanto-cuesta-una-pagina-web-profesional-en-espana-2026` |
| cómo aparecer en Google Maps negocio | Informacional | Baja | `/blog/como-aparecer-en-google-maps-negocios-locales` |
| qué es una landing page | Informacional | Baja | `/blog/que-es-una-landing-page-y-para-que-sirve` |
| SEO local Alicante 2026 | Informacional-Transaccional | Baja-Media | `/blog/seo-local-alicante-guia-practica-2026` |
| página web profesional Alicante precio | Transaccional | Baja | `/diseno-web-seo-alicante` |
| agencia diseño web cerca Elche | Transaccional | Baja | Landing Elche (por crear) |
| diseño web Torrevieja | Transaccional | Baja | Landing Torrevieja (por crear) |
| Next.js vs WordPress SEO | Informacional | Baja | `/blog/nextjs-vs-wordpress-seo-local` |
| SEO orgánico vs Google Ads | Informacional | Baja | `/blog/seo-organico-vs-google-ads` |

---

## Correcciones ejecutadas en esta sesión

| # | Archivo | Corrección | Estado |
|---|---------|-----------|--------|
| 1 | `views/blog/blogViewPage.tsx` | URLs `/es/blog/...` → `/blog/...` | ✅ |
| 2 | `views/blog/articleViewPage.tsx` | Back link y related links sin prefijo locale | ✅ |
| 3 | `app/[locale]/blog/[slug]/page.tsx` | Fallback canonical, hreflang, breadcrumb sin locale prefix | ✅ |
| 4 | `content/en/*.mdx` (6 archivos) | Canonicals `/en/blog/` → `/blog/` | ✅ |
| 5 | `views/blog/articleViewPage.tsx` | `remarkPlugins={[remarkGfm]}` — tablas markdown renderizadas | ✅ |
| 6 | `public/sitemap.xml` | 6 nuevos artículos añadidos con hreflang + lastmod 2026-05-21 | ✅ |
| 7 | `components/valencia-landing/sections/PricingSection.tsx` | Creado PricingSection para Valencia | ✅ |
| 8 | `components/valencia-landing/ValenciaWebDesignLanding.tsx` | PricingSection integrada | ✅ |
| 9 | `messages/es.json` + `messages/en.json` | `valencia.pricing` añadido | ✅ |
| 10 | `content/es/que-es-una-landing-page-y-para-que-sirve.mdx` | Sección 1/3 pricing Corexia añadida | ✅ |
| 11 | `content/en/what-is-a-landing-page-and-why-you-need-one.mdx` | Sección 1/3 pricing Corexia añadida | ✅ |
| 12 | `content/es/cuanto-cuesta-una-pagina-web-profesional-en-espana-2026.mdx` | Tabla comparativa mercado vs Corexia | ✅ |
| 13 | `content/en/how-much-does-a-website-cost-spain-2026.mdx` | Market vs Corexia comparison table | ✅ |

---

## Plan de acción pendiente (manual)

### Semana 1 — Impacto crítico, bajo esfuerzo
1. **Google Business Profile** — Crear/reclamar perfil en google.com/business con NAP exacto → impacto: **alto**, esfuerzo: bajo
2. **Dirección física en schema** — Reemplazar `"TODO: añadir dirección real"` en `app/[locale]/layout.tsx` → impacto: **alto**, esfuerzo: bajo
3. **Deploy a Vercel** — `git push` para que los cambios de esta sesión se publiquen → impacto: **alto**, esfuerzo: mínimo
4. **Solicitar indexación** — En Search Console: Inspeccionar URL → Solicitar indexación para `/`, `/diseno-web-seo-alicante`, `/servicios/diseno-web`, `/blog` → impacto: **alto**, esfuerzo: bajo
5. **og-image.png** — Crear imagen 1200×630px y subir a `/public/` → impacto: medio, esfuerzo: bajo

### Semana 2–4 — Autoridad local
6. **Páginas Amarillas** — paginasamarillas.es → impacto: **alto**, esfuerzo: bajo
7. **Sortlist** — sortlist.com/es → impacto: alto, esfuerzo: bajo
8. **Clutch** — clutch.co → impacto: alto, esfuerzo: bajo
9. **Yelp España** — yelp.es → impacto: medio, esfuerzo: bajo
10. **Pedir reseñas** — 3–5 clientes actuales → Google Business Profile → impacto: **alto**, esfuerzo: medio

### Mes 2–3 — Expansión de cobertura
11. **Landing Elche** — Reutilizar `LocationPage` con datos de Elche → impacto: medio, esfuerzo: bajo
12. **Landing Torrevieja** — Ídem → impacto: medio, esfuerzo: bajo
13. **2 artículos/mes** — Continuar el blog con keywords de baja competencia locales
14. **hreflang cruzado entre pares ES/EN** — Añadir `pairedSlug` en frontmatter y construir alternates correctos
15. **aggregateRating en schema** — Cuando haya ≥5 reseñas verificables en GBP

---

## Seguimiento de keywords

| Keyword | URL objetivo | Estado |
|---------|-------------|--------|
| diseño web Alicante | `/diseno-web-seo-alicante` | 🔴 Sin posición |
| agencia SEO Alicante | `/diseno-web-seo-alicante` | 🔴 Sin posición |
| diseño web Valencia | `/diseno-web-seo-valencia` | 🔴 Sin posición |
| cuánto cuesta una página web España | `/blog/cuanto-cuesta-...` | 🟡 Indexación pendiente |
| cómo aparecer en Google Maps | `/blog/como-aparecer-...` | 🟡 Indexación pendiente |
| qué es una landing page | `/blog/que-es-una-landing-page-...` | 🟡 Indexación pendiente |
| SEO local Alicante | `/blog/seo-local-alicante-guia-practica-2026` | 🔴 Sin posición |
| Next.js vs WordPress SEO | `/blog/nextjs-vs-wordpress-seo-local` | 🔴 Sin posición |

---

*Próxima auditoría recomendada: 2026-06-21 (30 días). Referencia: `AUDITORIA-SEO-2026-05-21.md`*
