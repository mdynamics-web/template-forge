import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]


export const pathnames = {
  '/': '/',
  '/contact': {
    es: '/contacto',
    en: '/contact',
  },
  '/cookies': {
    es: '/política-de-cookies',
    en: '/cookies-policy',
  }
} as const

export type Pathname = keyof typeof pathnames

export const routing = defineRouting({
  defaultLocale: 'es',
  locales,
  pathnames,
  localePrefix: 'never',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
