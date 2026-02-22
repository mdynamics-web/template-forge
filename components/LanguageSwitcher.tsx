"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={() => handleLanguageChange(locale === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-medium border border-primary-foreground/20 rounded-full px-3 py-1.5"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
