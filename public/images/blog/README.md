# 🖼️ Guía de Imágenes para el Blog

## Estado Actual
Actualmente todos los artículos usan una imagen placeholder (`placeholder.svg`).

## Cómo Agregar Imágenes Reales

### 1. Preparar la Imagen

**Especificaciones recomendadas:**
- **Dimensiones**: 1200x630px (ratio 1.91:1) - óptimo para Open Graph
- **Formato**: JPG, PNG o WebP
- **Peso**: < 200KB (optimiza antes de subir)
- **Nombres**: Usa kebab-case descriptivo

### 2. Optimizar la Imagen

**Online (gratis):**
- [TinyPNG](https://tinypng.com/) - Compresión con pérdida mínima
- [Squoosh](https://squoosh.app/) - Control total sobre la compresión
- [Cloudinary](https://cloudinary.com/tools/resize) - Redimensionar y comprimir

**CLI:**
```bash
# Con sharp-cli (instalar: npm i -g sharp-cli)
sharp -i imagen.jpg -o imagen-optimizada.jpg resize 1200 630

# Con ImageMagick
convert imagen.jpg -resize 1200x630^ -gravity center -extent 1200x630 -quality 85 imagen-optimizada.jpg
```

### 3. Subir la Imagen

Coloca tu imagen optimizada en:
```
public/images/blog/nombre-descriptivo.jpg
```

### 4. Actualizar el MDX

En el frontmatter del artículo, cambia:
```yaml
image: "/images/blog/placeholder.svg"
```

Por:
```yaml
image: "/images/blog/tu-imagen.jpg"
```

## Imágenes Necesarias

### Artículos en Español (`content/es/`)

| Artículo | Imagen Original | Estado |
|----------|----------------|--------|
| `cuanto-cuesta-pagina-web-alicante.mdx` | `presupuesto-web-alicante.jpg` | ❌ Falta |
| `nextjs-vs-wordpress-seo-local.mdx` | `nextjs-vs-wordpress-seo-local.jpeg` | ❌ Falta |

### Artículos en Inglés (`content/en/`)

| Artículo | Imagen Original | Estado |
|----------|----------------|--------|
| `how-much-does-website-cost-alicante.mdx` | `presupuesto-web-alicante.jpg` | ❌ Falta |

## Ideas para Crear Imágenes

### Herramientas de Diseño

**Sin experiencia:**
- [Canva](https://canva.com) - Templates profesionales
- [Figma](https://figma.com) - Más control creativo
- [Photopea](https://photopea.com) - Photoshop gratis en el navegador

**Con IA:**
- [Midjourney](https://midjourney.com)
- [DALL-E 3](https://openai.com/dall-e-3)
- [Stable Diffusion](https://stability.ai)

### Templates de Canva

Busca por:
- "Blog Header"
- "Social Media Post 1200x630"
- "Open Graph Image"

## Consejos de Diseño

### ✅ Buenas Prácticas
- Contraste alto texto/fondo
- Tipografía legible (mínimo 40px)
- Colores de marca (usa tu paleta)
- Sin saturación excesiva
- Texto centrado, máximo 2-3 líneas

### ❌ Evitar
- Imágenes de stock genéricas
- Texto ilegible
- Demasiados elementos
- Baja resolución
- Más de 500KB de peso

## Ejemplo de Proceso Completo

```bash
# 1. Crear imagen en Canva (1200x630px)
# 2. Descargar como JPG

# 3. Optimizar
npx @squoosh/cli --mozjpeg auto tu-imagen.jpg

# 4. Copiar al proyecto
cp tu-imagen.jpg public/images/blog/

# 5. Actualizar MDX
# Edita el frontmatter con la nueva ruta
```

## Placeholder Temporal

Mientras no tengas las imágenes, el sistema usa `placeholder.svg` que:
- Se ve profesional
- Carga instantáneamente
- No rompe el diseño
- Recuerda agregar imagen real

## Soporte

Si necesitas ayuda con las imágenes, puedes:
1. Usar el placeholder indefinidamente (funciona perfectamente)
2. Contratar diseño gráfico
3. Usar herramientas IA para generar
4. Buscar en bancos de imágenes libres ([Unsplash](https://unsplash.com), [Pexels](https://pexels.com))
