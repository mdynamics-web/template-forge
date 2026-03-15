import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

// Caja de destacado (se usa como <CalloutBox> en los artículos MDX)
function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-relaxed text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200">
      {children}
    </div>
  )
}

// Tabla de precios (se usa como <PriceTable> en los artículos MDX)
function PriceTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

export const components: MDXComponents = {
  // Componentes custom reutilizables en los artículos
  CalloutBox,
  PriceTable,

  // Sobrescribimos los elementos HTML estándar con estilos propios

  h1: ({ children }) => (
    <h1 className="mb-6 mt-10 text-3xl font-bold leading-tight text-neutral-900 dark:text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-2xl font-semibold leading-snug text-neutral-900 dark:text-white">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-neutral-800 dark:text-neutral-100">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="my-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-300">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-neutral-600 dark:text-neutral-300">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="text-base leading-7">{children}</li>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-900 dark:text-white">
      {children}
    </strong>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-blue-400 pl-5 italic text-neutral-500 dark:text-neutral-400">
      {children}
    </blockquote>
  ),

  hr: () => (
    <hr className="my-10 border-neutral-200 dark:border-neutral-700" />
  ),

  code: ({ children }) => (
    <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-neutral-900 p-5 text-sm text-neutral-100">
      {children}
    </pre>
  ),

  a: ({ href, children }) => {
    const isInternal = href?.startsWith('/')
    if (isInternal) {
      return (
        <Link
          href={href!}
          className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </a>
    )
  },

  img: ({ src, alt }) => (
    <div className="relative my-8 aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
      <Image
        src={src!}
        alt={alt ?? ''}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  ),

  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),

  th: ({ children }) => (
    <th className="border border-neutral-200 bg-neutral-50 px-4 py-2 text-left font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border border-neutral-200 px-4 py-2 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
      {children}
    </td>
  ),
}