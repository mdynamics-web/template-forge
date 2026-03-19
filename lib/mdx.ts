import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPostMeta, BlogPostFull } from '@/types/blog'

// Re-export types for convenience
export type { BlogPostMeta, BlogPostFull }

const CONTENT_DIR = path.join(process.cwd(), 'content')

/**
 * Calcula el tiempo estimado de lectura basado en el contenido
 * Asume ~200 palabras por minuto
 */
function calculateReadTime(content: string, locale: string): string {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  
  if (locale === 'es') {
    return `${minutes} min lectura`
  }
  return `${minutes} min read`
}

/**
 * Obtiene la ruta del directorio de contenido según el locale
 */
function getContentDir(locale: string): string {
  return path.join(CONTENT_DIR, locale)
}

/**
 * Lee todos los artículos de un idioma y devuelve sus metadatos (sin contenido)
 */
export function getAllPosts(locale: string = 'es'): BlogPostMeta[] {
  const contentDir = getContentDir(locale)
  
  if (!fs.existsSync(contentDir)) return []

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const filePath = path.join(contentDir, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      
      return {
        title: data.title ?? '',
        description: data.description ?? '',
        slug: data.slug ?? filename.replace('.mdx', ''),
        date: data.date ?? '',
        author: data.author ?? 'Corexia',
        category: data.category ?? '',
        tags: data.tags ?? [],
        image: data.image ?? '',
        imageAlt: data.imageAlt ?? '',
        canonical: data.canonical ?? '',
        readTime: calculateReadTime(content, locale),
        locale,
      } as BlogPostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Lee un artículo concreto por su slug (con contenido completo)
 */
export function getPostBySlug(slug: string, locale: string = 'es'): BlogPostFull | null {
  const contentDir = getContentDir(locale)
  
  if (!fs.existsSync(contentDir)) return null

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(contentDir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const fileSlug = data.slug ?? filename.replace('.mdx', '')

    if (fileSlug === slug) {
      return {
        title: data.title ?? '',
        description: data.description ?? '',
        slug: fileSlug,
        date: data.date ?? '',
        author: data.author ?? 'Corexia',
        category: data.category ?? '',
        tags: data.tags ?? [],
        image: data.image ?? '',
        imageAlt: data.imageAlt ?? '',
        canonical: data.canonical ?? '',
        readTime: calculateReadTime(content, locale),
        locale,
        content,
      }
    }
  }

  return null
}

/**
 * Devuelve todos los slugs para generateStaticParams
 * Puede incluir el locale si se necesita
 */
export function getAllSlugs(locale?: string): { slug: string; locale?: string }[] {
  if (locale) {
    return getAllPosts(locale).map(p => ({ slug: p.slug, locale }))
  }
  
  // Si no se especifica locale, devuelve slugs de todos los idiomas
  const locales = ['es', 'en']
  return locales.flatMap(loc => 
    getAllPosts(loc).map(p => ({ slug: p.slug, locale: loc }))
  )
}

/**
 * Formatea una fecha ISO a texto legible según el locale
 */
export function formatDate(dateStr: string, locale: string = 'es'): string {
  return new Date(dateStr).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}