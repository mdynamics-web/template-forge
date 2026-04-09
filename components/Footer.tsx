"use client";

import NextLink from "next/link";
import { Link } from "@/i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { MouseEvent } from "react";
import { usePathname } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const handleCasesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      const section = document.getElementById("cases");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#cases");
      }
    }
  };

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  C
                </span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                Core<span className="gradient-text">xia</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <Link href="/services/web-design" className="hover:text-secondary transition-colors">
                  {t("footer.s1")}
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="hover:text-secondary transition-colors">
                  {t("footer.s2")}
                </Link>
              </li>
              <li>
                <Link href="/services/apps" className="hover:text-secondary transition-colors">
                  {t("footer.s3")}
                </Link>
              </li>
              <li>
                <Link href="/services/online-stores" className="hover:text-secondary transition-colors">
                  {t("footer.s4")}
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-secondary transition-colors">
                  {t("footer.s5")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <NextLink href="/#process" className="hover:text-secondary transition-colors">
                  {t("footer.c1")}
                </NextLink>
              </li>
              <li>
                <NextLink href="/#cases" onClick={handleCasesClick} className="hover:text-secondary transition-colors">
                  {t("footer.c2")}
                </NextLink>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  {t("footer.c3")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              {t("footer.serviceAreas")}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>
                <Link href="/web-design-seo-alicante" className="hover:text-secondary transition-colors">
                  {t("footer.alicanteWeb")}
                </Link>
              </li>
              <li>
                <Link href="/web-design-seo-valencia" className="hover:text-secondary transition-colors">
                  {t("footer.valenciaWeb")}
                </Link>
              </li>
              <li className="text-xs text-primary-foreground/30 pt-2">
                {t("footer.allSpain")}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" /> {t("footer.email")}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" /> {t("footer.phone")}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <div>
                  <div>{t("footer.location")}</div>
                  <div className="text-xs text-primary-foreground/30 mt-1">
                    {t("footer.serviceAreaFull")}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/30">
          © {new Date().getFullYear()} Corexia. {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
