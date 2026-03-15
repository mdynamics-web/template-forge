import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogViewPage from '@/views/blog/blogViewPage'
import { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: Locale }>
}

export const metadata: Metadata = {
  title: 'Blog — Corexia',
  description:
    'Artículos sobre diseño web, SEO local y desarrollo para negocios en Alicante.',
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = getAllPosts(locale)

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <p className="text-primary-foreground/60">No articles available yet.</p>
      </div>
    )
  }

  const featured = posts[0]
  const rest = posts.slice(1)

  return <BlogViewPage featured={featured} rest={rest} />
}