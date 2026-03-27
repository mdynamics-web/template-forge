"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import BrandLoader from "@/components/ui/brand-loader";

const GLOBAL_LOADER_EVENT = "corexia:global-loader";
const GLOBAL_LOADER_METRIC_EVENT = "corexia:loader-metric";
const MIN_NAVIGATION_LOADER_MS = 0;
const NAVIGATION_FAILSAFE_MS = 3000;

const normalizeRoute = (route: string) => {
  const [rawPathname, rawSearch] = route.split("?");
  const pathname =
    rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "") || "/";
  return rawSearch ? `${pathname}?${rawSearch}` : pathname;
};

export const setGlobalLoaderVisible = (visible: boolean) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(GLOBAL_LOADER_EVENT, {
      detail: { visible },
    })
  );
};

export default function GlobalLoaderOverlay() {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = useMemo(() => {
    const query = searchParams.toString();
    return normalizeRoute(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  const [manualLoaderCount, setManualLoaderCount] = useState(0);
  const [navigationLoading, setNavigationLoading] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const failsafeTimeoutRef = useRef<number | null>(null);
  const navigationStartRef = useRef(0);
  const navigationLoadingRef = useRef(false);
  const currentRouteRef = useRef(routeKey);
  const blockedSameRouteCountRef = useRef(0);

  const trackLoaderMetric = useCallback(
    (metric: string, payload: Record<string, string | number>) => {
      const detail = {
        metric,
        locale,
        timestamp: Date.now(),
        ...payload,
      };

      window.dispatchEvent(
        new CustomEvent(GLOBAL_LOADER_METRIC_EVENT, {
          detail,
        })
      );

      const dataLayerWindow = window as Window & {
        dataLayer?: Array<Record<string, string | number>>;
      };

      dataLayerWindow.dataLayer?.push({
        event: GLOBAL_LOADER_METRIC_EVENT,
        ...detail,
      });
    },
    [locale]
  );

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const clearFailsafeTimeout = useCallback(() => {
    if (failsafeTimeoutRef.current !== null) {
      window.clearTimeout(failsafeTimeoutRef.current);
      failsafeTimeoutRef.current = null;
    }
  }, []);

  const finishNavigationLoader = useCallback(() => {
    navigationLoadingRef.current = false;
    setNavigationLoading(false);
    clearFailsafeTimeout();
  }, [clearFailsafeTimeout]);

  const resolveInternalRoute = (urlLike: string | URL) => {
    try {
      const url = new URL(urlLike.toString(), window.location.href);
      if (url.origin !== window.location.origin) {
        return null;
      }
      return normalizeRoute(`${url.pathname}${url.search}`);
    } catch {
      return null;
    }
  };

  const startNavigationLoader = useCallback(() => {
    clearHideTimeout();
    clearFailsafeTimeout();

    if (navigationLoadingRef.current) {
      return;
    }

    navigationLoadingRef.current = true;
    navigationStartRef.current = Date.now();
    setNavigationLoading(true);

    failsafeTimeoutRef.current = window.setTimeout(() => {
      finishNavigationLoader();
    }, NAVIGATION_FAILSAFE_MS);
  }, [clearFailsafeTimeout, clearHideTimeout, finishNavigationLoader]);

  const stopNavigationLoader = useCallback(() => {
    if (!navigationLoadingRef.current) {
      return;
    }

    const elapsed = Date.now() - navigationStartRef.current;
    const remaining = Math.max(0, MIN_NAVIGATION_LOADER_MS - elapsed);

    clearHideTimeout();
    hideTimeoutRef.current = window.setTimeout(() => {
      finishNavigationLoader();
    }, remaining);
  }, [clearHideTimeout, finishNavigationLoader]);

  useEffect(() => {
    const onLoaderEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ visible?: boolean }>;
      const shouldShow = Boolean(customEvent.detail?.visible);
      setManualLoaderCount((prev) =>
        shouldShow ? prev + 1 : Math.max(0, prev - 1)
      );
    };

    window.addEventListener(
      GLOBAL_LOADER_EVENT,
      onLoaderEvent as EventListener
    );

    return () => {
      window.removeEventListener(
        GLOBAL_LOADER_EVENT,
        onLoaderEvent as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const onLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("rel")?.includes("external")
      ) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) {
        return;
      }

      const nextRoute = resolveInternalRoute(anchor.href);
      if (!nextRoute) {
        return;
      }

      const currentRoute = normalizeRoute(
        `${window.location.pathname}${window.location.search}`
      );

      if (nextRoute === currentRoute || nextRoute === currentRouteRef.current) {
        event.preventDefault();
        blockedSameRouteCountRef.current += 1;
        trackLoaderMetric("same_route_navigation_blocked", {
          count: blockedSameRouteCountRef.current,
          currentRoute,
          nextRoute,
        });
        return;
      }

      startNavigationLoader();
    };

    const onPopState = () => {
      const nextRoute = normalizeRoute(
        `${window.location.pathname}${window.location.search}`
      );
      if (nextRoute === currentRouteRef.current) {
        return;
      }
      startNavigationLoader();
    };

    document.addEventListener("click", onLinkClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onLinkClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, [startNavigationLoader, trackLoaderMetric]);

  useEffect(() => {
    if (currentRouteRef.current !== routeKey) {
      stopNavigationLoader();
    }
    currentRouteRef.current = routeKey;
  }, [routeKey, stopNavigationLoader]);

  useEffect(() => {
    navigationLoadingRef.current = navigationLoading;
  }, [navigationLoading]);

  useEffect(() => {
    if (!(navigationLoading || manualLoaderCount > 0)) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [navigationLoading, manualLoaderCount]);

  useEffect(() => {
    return () => {
      clearHideTimeout();
      clearFailsafeTimeout();
    };
  }, [clearFailsafeTimeout, clearHideTimeout]);

  const isVisible = navigationLoading || manualLoaderCount > 0;

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),hsl(var(--background)/0.92))] backdrop-blur-md flex flex-col items-center justify-center gap-6">
      <BrandLoader size="lg" label={locale === "es" ? "Cargando" : "Loading"} />
      <p className="text-sm text-primary-foreground/80">
        {locale === "es" ? "Cargando..." : "Loading..."}
      </p>
    </div>
  );
}
