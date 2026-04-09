import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]


export const pathnames = {
  '/': '/',
  '/blog': {
    es: '/blog',
    en: '/blog',
  },
  '/services/web-design': {
    es: '/servicios/diseno-web',
    en: '/services/web-design',
  },
  '/services/local-seo': {
    es: '/servicios/seo-local',
    en: '/services/local-seo',
  },
  '/services/apps': {
    es: '/servicios/aplicaciones',
    en: '/services/apps',
  },
  '/services/online-stores': {
    es: '/servicios/tiendas-online',
    en: '/services/online-stores',
  },
  '/services/consulting': {
    es: '/servicios/consultoria',
    en: '/services/consulting',
  },
  '/web-design-seo-alicante': {
    es: '/diseno-web-seo-alicante',
    en: '/web-design-seo-alicante',
  },
  '/web-design-seo-valencia': {
    es: '/diseno-web-seo-valencia',
    en: '/web-design-seo-valencia',
  },
  '/contact': {
    es: '/contacto',
    en: '/contact',
  },
  '/cookies': {
    es: '/politica-de-cookies',
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
