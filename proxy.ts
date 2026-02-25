import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { normalizePathname } from "@/lib/route-utils";

const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. EXCLUSIONES: Ignorar rutas de API, recursos estáticos y Next.js internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/trpc") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js|woff|woff2|ttf)$/)
  ) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);

  return intlMiddleware(
    new NextRequest(req.url, {
      headers: requestHeaders,
    }),
  );
}

export const config = {
  // Match all possible routes (including translated pathnames)
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
};
