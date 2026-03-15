# Sistema de Blog Multiidioma

Este proyecto incluye un sistema de blog multiidioma con soporte para español e inglés.

## Estructura de Carpetas

```
content/
├── es/          # Artículos en español
│   └── *.mdx
├── en/          # Artículos en inglés
│   └── *.mdx
└── README.md
```

## Cómo Crear un Artículo Nuevo

### 1. Crear el archivo MDX

Crea un archivo `.mdx` en la carpeta correspondiente según el idioma:
- Español: `content/es/nombre-del-articulo.mdx`
- Inglés: `content/en/article-name.mdx`

### 2. Frontmatter (Metadatos)

Cada archivo MDX debe comenzar con el frontmatter en formato YAML:

```mdx
---
title: "Título del Artículo"
description: "Breve descripción del artículo que aparecerá en los listados y SEO"
slug: "url-del-articulo"
date: "2026-03-15"
author: "Autor"
category: "Categoría"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/nombre-imagen.jpg"
imageAlt: "Descripción de la imagen para accesibilidad"
canonical: "https://tu-dominio.com/blog/url-del-articulo"
---

Tu contenido aquí en formato Markdown...
```

### 3. Campos del Frontmatter

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | string | Título del artículo |
| `description` | string | Descripción breve (SEO y listados) |
| `slug` | string | URL amigable del artículo |
| `date` | string | Fecha en formato YYYY-MM-DD |
| `author` | string | Nombre del autor |
| `category` | string | Categoría del artículo |
| `tags` | array | Lista de etiquetas |
| `image` | string | Ruta de la imagen destacada |
| `imageAlt` | string | Texto alternativo de la imagen |
| `canonical` | string | URL canónica para SEO |

## Gestión de Imágenes

### Ubicación de Imágenes

Las imágenes deben guardarse en:
```
public/images/blog/
```

### Referencia en el MDX

En el frontmatter, usa rutas absolutas desde la raíz pública:

```yaml
image: "/images/blog/mi-imagen.jpg"
```

### Recomendaciones

- **Formato**: Usa WebP o JPG optimizado
- **Tamaño**: Máximo 1920x1080px
- **Peso**: Menos de 200KB (optimiza antes de subir)
- **Nombres**: Usa nombres descriptivos en kebab-case: `diseno-web-alicante.jpg`

### Optimización de Imágenes

Antes de subir imágenes, optimízalas:
- Online: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- CLI: `npx sharp-cli resize 1920 1080 --input imagen.jpg --output imagen-opt.jpg`

## Características del Sistema

### ✅ Cálculo Automático de Tiempo de Lectura
El sistema calcula automáticamente el tiempo de lectura basado en ~200 palabras por minuto.

### ✅ Soporte Multiidioma
Los artículos se organizan por idioma y se sirven según el locale activo del usuario.

### ✅ SEO Optimizado
- Meta tags automáticos
- Open Graph tags
- Twitter Cards
- Schema markup

### ✅ Interfaz Unificada
Todas las vistas usan las mismas interfaces (`BlogPostMeta` y `BlogPostFull`).

## Formato de Contenido (Markdown)

### Encabezados
```markdown
## Encabezado 2
### Encabezado 3
```

### Texto
```markdown
**Negrita**
*Cursiva*
```

### Listas
```markdown
- Item 1
- Item 2

1. Item numerado 1
2. Item numerado 2
```

### Enlaces
```markdown
[Texto del enlace](https://ejemplo.com)
```

### Citas
```markdown
> Esta es una cita
```

### Código
````markdown
```javascript
const ejemplo = "código";
```
````

## Ejemplo Completo

```mdx
---
title: "Guía Completa de Next.js 14"
description: "Aprende todo sobre Next.js 14: App Router, Server Components y más"
slug: "guia-completa-nextjs-14"
date: "2026-03-15"
author: "Corexia"
category: "Desarrollo Web"
tags: ["nextjs", "react", "typescript"]
image: "/images/blog/nextjs-14-guia.jpg"
imageAlt: "Logo de Next.js sobre fondo oscuro"
canonical: "https://corexia.es/blog/guia-completa-nextjs-14"
---

## Introducción

Next.js 14 trae cambios revolucionarios...

### Características Principales

- **App Router**: Nueva forma de estructurar rutas
- **Server Components**: Renderizado del lado del servidor por defecto
- **Turbopack**: Bundler ultra rápido

## Ejemplo de Código

```typescript
export default function Page() {
  return <h1>Hola Next.js 14!</h1>
}
```

## Conclusión

Next.js 14 es la mejor versión...
```

## Scripts Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Troubleshooting

### Artículo no aparece
1. Verifica que el archivo esté en la carpeta correcta (`es/` o `en/`)
2. Verifica que el frontmatter esté correctamente formateado
3. Verifica que la fecha no sea futura
4. Reinicia el servidor de desarrollo

### Imagen no carga
1. Verifica que la ruta comience con `/images/blog/`
2. Verifica que el archivo exista en `public/images/blog/`
3. Verifica los permisos del archivo

### Artículo en idioma incorrecto
1. Verifica que el archivo esté en la carpeta correcta
2. Borra `.next` y vuelve a hacer build

## Contribuir

Para agregar soporte para un nuevo idioma:

1. Crea una nueva carpeta en `content/` (ej: `content/fr/`)
2. Agrega el locale en `i18n/routing.ts`
3. Agrega las traducciones en `messages/`
4. Los artículos se seleccionarán automáticamente según el locale
