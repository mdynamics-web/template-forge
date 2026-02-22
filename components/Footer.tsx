'use client';

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">N</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                Neural<span className="gradient-text">Forge</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li className="hover:text-secondary transition-colors cursor-pointer">{t("footer.s1")}</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">{t("footer.s2")}</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">{t("footer.s3")}</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">{t("footer.s4")}</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">{t("footer.s5")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><Link href="/#process" className="hover:text-secondary transition-colors">{t("footer.c1")}</Link></li>
              <li><Link href="/#cases" className="hover:text-secondary transition-colors">{t("footer.c2")}</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">{t("footer.c3")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> hello@neuralforge.io</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +1 (555) 000-0000</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/30">
          © {new Date().getFullYear()} NeuralForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
