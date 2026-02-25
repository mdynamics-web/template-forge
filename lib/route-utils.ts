import { routing } from '@/i18n/routing'

import { Route } from '@/types/routes'

/**
 * Normaliza un pathname traducido a su forma canónica (clave en pathnames)
 * Por ejemplo: "/iniciar-sesion" -> "/login", "/perfil" -> "/profile"
 * También elimina prefijos de locale si existen erróneamente
 * @param pathname - El pathname a normalizar
 * @returns El pathname normalizado a su clave canónica
 */
export function normalizePathname(pathname: string): string {
  // Eliminar trailing slash excepto para la raíz
  let normalized =
    pathname.endsWith('/') && pathname !== '/'
      ? pathname.slice(0, -1)
      : pathname

  // Eliminar posible prefijo de locale (/es, /en, etc.)
  const locales = routing.locales || []
  for (const locale of locales) {
    const localePrefix = `/${locale}`
    if (
      normalized.startsWith(localePrefix + '/') ||
      normalized === localePrefix
    ) {
      normalized = normalized.substring(localePrefix.length) || '/'
      break
    }
  }

  // Si no hay pathnames definidos, retornar tal cual
  if (!routing.pathnames) return normalized

  // Buscar si el pathname actual coincide con alguna traducción
  for (const [key, value] of Object.entries(routing.pathnames)) {
    // Si es un string simple (como "/"), comparar directamente
    if (typeof value === 'string') {
      if (normalized === value) return key
      continue
    }

    // Si es un objeto con traducciones
    if (typeof value === 'object') {
      // Verificar todas las traducciones
      for (const locale in value) {
        if (value[locale as keyof typeof value] === normalized) {
          return key
        }
      }
    }
  }

  // Si no se encuentra traducción, retornar el pathname original
  return normalized
}

/**
 * Encuentra una ruta que coincida con el pathname dado
 * @param pathname - La ruta a buscar
 * @param routes - Array de rutas donde buscar
 * @returns La ruta encontrada o undefined
 */
export function findMatchingRoute(
  pathname: string,
  routes: Route[]
): Route | undefined {
  // Buscar coincidencia exacta primero
  let route = routes.find((r) => r.pathname === pathname)
  if (route) return route

  // Buscar en subrutas
  for (const r of routes) {
    if (r.subRoutes) {
      route = findMatchingRoute(pathname, r.subRoutes)
      if (route) return route
    }
  }

  // Buscar coincidencia por prefijo (para rutas dinámicas)
  route = routes.find((r) => {
    if (r.pathname === pathname) return true
    // Verificar si es una ruta padre
    return pathname.startsWith(r.pathname + '/')
  })

  return route
}

