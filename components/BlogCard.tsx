import Link from 'next/link'
import Image from 'next/image'
import { PostMeta, formatDate } from '@/lib/mdx'

type Props = {
  post: PostMeta
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-5 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">

        {/* Imagen de portada */}
        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Categoría + fecha */}
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          {post.category && (
            <>
              <span className="font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {post.category}
              </span>
              <span>·</span>
            </>
          )}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {/* Título */}
        <h2 className="text-lg font-semibold leading-snug text-neutral-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {post.title}
        </h2>

        {/* Extracto */}
        {post.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {post.description}
          </p>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Autor */}
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-neutral-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            {post.author.charAt(0)}
          </div>
          <span>{post.author}</span>
        </div>

      </article>
    </Link>
  )
}