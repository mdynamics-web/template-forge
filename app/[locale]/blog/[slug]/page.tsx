import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/mdx'
import ArticleViewPage from '@/views/blog/articleViewPage'
import { Locale } from '@/i18n/routing'

const BASE_URL = 'https://www.corexia.es'

type Props = {
  params: Promise<{ slug: string; locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)
  if (!post) return {}

  const canonicalUrl = post.canonical ?? `${BASE_URL}/${locale}/blog/${slug}`

  // hreflang: si el artículo existe en el otro idioma, enlazarlo
  // Si no, apuntar ambos al mismo canonical
  const esUrl = `${BASE_URL}/es/blog/${slug}`
  const enUrl = `${BASE_URL}/en/blog/${slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags ?? [],
    authors: [{ name: post.author, url: BASE_URL }],
    creator: post.author,
    publisher: 'Corexia',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: 'Corexia',
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      // category si existe en el frontmatter
      ...(post.category && { section: post.category }),
      images: post.image
        ? [
            {
              url: post.image.startsWith('http')
                ? post.image
                : `${BASE_URL}${post.image}`,
              width: 1200,
              height: 630,
              alt: post.imageAlt ?? post.title,
            },
          ]
        : [
            {
              url: `${BASE_URL}/og-blog.png`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image
        ? [
            post.image.startsWith('http')
              ? post.image
              : `${BASE_URL}${post.image}`,
          ]
        : [`${BASE_URL}/og-blog.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return getAllSlugs()
}

export default async function PostPage({ params }: Props) {
  const { slug, locale } = await params
  const post = getPostBySlug(slug, locale)

  if (!post) notFound()

  const allPosts = getAllPosts(locale)
  const related = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  // Article Schema — se inyecta aquí para que esté en el HTML inicial
  // y Googlebot lo lea en el primer byte, sin depender de JS
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image
      ? post.image.startsWith('http')
        ? post.image
        : `${BASE_URL}${post.image}`
      : `${BASE_URL}/og-blog.png`,
    datePublished: post.date,
    // dateModified: añadir si tu frontmatter tiene campo updatedAt
    author: {
      '@type': 'Organization',
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#business`,
      name: 'Corexia',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.canonical ?? `${BASE_URL}/${locale}/blog/${slug}`,
    },
    // keywords solo si existen en el frontmatter
    ...(post.tags?.length && { keywords: post.tags.join(', ') }),
  }

  // BreadcrumbList — ayuda a Google a mostrar la ruta en los resultados
  const breadcrumbLabels = {
    es: { home: 'Inicio', blog: 'Blog' },
    en: { home: 'Home', blog: 'Blog' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: breadcrumbLabels[locale].home,
        item: `${BASE_URL}/${locale === 'es' ? '' : 'en'}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbLabels[locale].blog,
        item: `${BASE_URL}/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: post.canonical ?? `${BASE_URL}/${locale}/blog/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleViewPage article={post} related={related} />
    </>
  )
}