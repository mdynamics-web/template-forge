'use client';

import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ChevronDown, Code2, Menu, Search, ShoppingCart, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { Link, Pathname, usePathname } from "@/i18n/routing";

type ServiceLinkItem = {
  label: string;
  description: string;
  href: Pathname;
  icon: React.ComponentType<{ className?: string }>;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceItems: ServiceLinkItem[] = [
    {
      label: t("nav.serviceItems.webDesign.label"),
      description: t("nav.serviceItems.webDesign.description"),
      href: "/services/web-design",
      icon: Sparkles,
    },
    {
      label: t("nav.serviceItems.localSeo.label"),
      description: t("nav.serviceItems.localSeo.description"),
      href: "/services/local-seo",
      icon: Search,
    },
    {
      label: t("nav.serviceItems.apps.label"),
      description: t("nav.serviceItems.apps.description"),
      href: "/services/apps",
      icon: Code2,
    },
    {
      label: t("nav.serviceItems.onlineStores.label"),
      description: t("nav.serviceItems.onlineStores.description"),
      href: "/services/online-stores",
      icon: ShoppingCart,
    },
    {
      label: t("nav.serviceItems.consulting.label"),
      description: t("nav.serviceItems.consulting.description"),
      href: "/services/consulting",
      icon: ChevronDown,
    },
  ];

  const localLandingItems: ServiceLinkItem[] = [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleCloseAllMenus = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  const shouldUseSolidNavbar = scrolled || pathname !== "/" || servicesOpen || mobileOpen;

  const handleCasesClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      const section = document.getElementById("cases");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#cases");
      }
    }
    handleCloseAllMenus();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseSolidNavbar ? "bg-primary/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={handleCloseAllMenus}>
          <Image
            src="/logo-without-bg.png"
            alt="CoreXia Logo"
            width={170}
            height={100}
            loading="eager"
            style={{ width: "170px", height: "auto" }}
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium">
            {t("nav.home")}
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium inline-flex items-center gap-1.5"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
            >
              {t("nav.services")}
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  id="desktop-services-menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-3 w-[420px] -translate-x-1/2 rounded-2xl border border-secondary/20 bg-primary/95 p-3 shadow-2xl backdrop-blur-xl"
                >
                  <div className="space-y-1">
                    {localLandingItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleCloseAllMenus}
                          className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary/10"
                        >
                          <span className="mt-0.5 rounded-lg border border-secondary/20 bg-secondary/10 p-2">
                            <Icon className="h-4 w-4 text-secondary" />
                          </span>
                          <span className="space-y-1">
                            <span className="block text-sm font-semibold text-primary-foreground">{item.label}</span>
                            <span className="block text-xs leading-relaxed text-primary-foreground/70">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    {localLandingItems.length > 0 ? <div className="my-1 h-px bg-secondary/20" /> : null}
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleCloseAllMenus}
                          className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary/10"
                        >
                          <span className="mt-0.5 rounded-lg border border-secondary/20 bg-secondary/10 p-2">
                            <Icon className="h-4 w-4 text-secondary" />
                          </span>
                          <span className="space-y-1">
                            <span className="block text-sm font-semibold text-primary-foreground">{item.label}</span>
                            <span className="block text-xs leading-relaxed text-primary-foreground/70">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <NextLink
            href="/#cases"
            onClick={handleCasesClick}
            className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium"
          >
            {t("nav.cases")}
          </NextLink>

          <Link href="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium">
            {t("nav.blog")}
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <Link href="/contact">
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold"
            >
              {t("nav.cta")}
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-secondary/20"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link
                href="/"
                onClick={handleCloseAllMenus}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium text-left"
              >
                {t("nav.home")}
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((value) => !value)}
                className="inline-flex items-center justify-between text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium text-left"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
              >
                {t("nav.services")}
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <NextLink
                href="/#cases"
                onClick={handleCasesClick}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium text-left"
              >
                {t("nav.cases")}
              </NextLink>

              <AnimatePresence initial={false}>
                {mobileServicesOpen ? (
                  <motion.div
                    id="mobile-services-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 mt-1 flex flex-col gap-2 border-l border-secondary/25 pl-4">
                      {localLandingItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleCloseAllMenus}
                          className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                      {localLandingItems.length > 0 ? <div className="my-1 h-px bg-secondary/20" /> : null}
                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleCloseAllMenus}
                          className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <Link
                href="/blog"
                onClick={handleCloseAllMenus}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium text-left"
              >
                {t("nav.blog")}
              </Link>

              <div className="flex items-center gap-2">
                <LanguageSwitcher onChange={() => setMobileOpen(false)} />
                <ThemeToggle onToggle={() => setMobileOpen(false)} />
              </div>

              <Link href="/contact" onClick={handleCloseAllMenus}>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {t("nav.cta")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
