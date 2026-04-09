import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogViewPage from '@/views/blog/blogViewPage'
import { Locale } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'

const BASE_URL = 'https://www.corexia.es'
 
type Props = {
  params: Promise<{ locale: Locale }>
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog.meta' })
  const canonicalUrl = `${BASE_URL}/blog`
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${BASE_URL}/blog`,
        en: `${BASE_URL}/en/blog`,
        'x-default': `${BASE_URL}/blog`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonicalUrl,
      siteName: 'Corexia',
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-blog.png`,
          width: 1200,
          height: 630,
          alt: t('ogTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [`${BASE_URL}/og-blog.png`],
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

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = getAllPosts(locale)

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No articles available yet.</p>
      </div>
    )
  }

  const featured = posts[0]
  const rest = posts.slice(1)

  return <BlogViewPage featured={featured} rest={rest} />
}
