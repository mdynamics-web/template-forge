'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const navItems = [
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.process"), href: "/#process" },
    { label: t("nav.cases"), href: "/#cases" },
    { label: t("nav.contact"), href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      const isHome = pathname === `/${locale}` || pathname === "/";
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${locale}${href}`);
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">C</span>
          </div>
          <span className="font-display font-bold text-xl text-primary-foreground">
            Core<span className="gradient-text">Xia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Language switcher */}
          <LanguageSwitcher />

          <Link href={`/${locale}/contact`}>
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold"
            >
              {t("nav.cta")}
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/98 backdrop-blur-xl border-t border-secondary/20"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <LanguageSwitcher />
              <Link href={`/${locale}/contact`}>
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
