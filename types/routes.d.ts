/**
 * @file routes.d.ts
 * @description
 * -----------------------------------------------------
 * Archivo que contiene los tipados de router
 * -----------------------------------------------------
 * @version 0.0.1a
 * @created 2024-12-19
 * @modified 2025-04-19
 * @author DLT Code
 * @author Nacho Moya
 * @copyright © DLT Code
 * @license Private
 * */
import { Pathname } from '@/i18n/routing'
import { UserRoles } from '@/types/UserRoles'
import { LucideIcon } from 'lucide-react'
import { Subscription } from '@/enums/subscription.enum'

type BaseRoute = {
  pathname: Pathname
  /**
   * Parámetros dinámicos de la ruta.
   * Ejemplo: para la ruta '/infrastructures/[id]', params sería { id: '123' }
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, string | number> | any | undefined
  /** Rutas hijas o subrutas anidadas bajo esta ruta */
  subRoutes?: BaseRoute[]
  roles?: UserRoles[]
}

/**
 * Tipos que manejan la lógica de sesión:
 * - Sin sesión requerida (público) o explícitamente para no-autenticados
 * - Con sesión requerida, posiblemente con roles específicos
 * - Opcionalmente, con restricciones de tipo de suscripción
 */
type WithSessionLogic =
  | {
      requiresSession?: false
      requiresNoSession?: true
      requiresSubscription?: never
    }
  | {
      requiresSession: true
      roles?: UserRoles[]
      requiresSubscription?: Subscription[]
    }

/**
 * Tipos que manejan la visualización en la barra lateral:
 * - No mostrado en sidebar
 * - Mostrado con un icono específico
 */
type WithSidebarLogic =
  | { isShownInSidebar?: false }
  | { isShownInSidebar: true; icon: LucideIcon }

export type Route = BaseRoute & WithSessionLogic & WithSidebarLogic
