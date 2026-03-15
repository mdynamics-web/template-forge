import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/mdx'
import ArticleViewPage from '@/views/blog/articleViewPage'
import { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ slug: string; locale: Locale }>
}

// Genera metadatos SEO dinámicos por artículo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  }
}

// Pre-genera todas las rutas en build time
export async function generateStaticParams() {
  // Genera slugs para ambos idiomas
  return getAllSlugs()
}

export default async function PostPage({ params }: Props) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)

  if (!post) notFound()

  // Obtener artículos relacionados (los últimos 3 del mismo idioma, excluyendo el actual)
  const allPosts = getAllPosts(locale)
  const related = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  return (
    <ArticleViewPage article={post} related={related} />
  )
}