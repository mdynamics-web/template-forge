'use client';

/**
 * Cookie Consent Banner Component
 * Following SOLID principles:
 * - Single Responsibility: Handles only consent UI and delegates storage to service
 * - Open/Closed: Can be extended through props without modification
 * - Dependency Inversion: Depends on CookieStorageService abstraction
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cookieStorageService } from "@/lib/cookieStorage";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const t = useTranslations('cookies.consent');

  useEffect(() => {
    const consent = cookieStorageService.getConsent();
    if (consent === 'pending') {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    cookieStorageService.setConsent('accepted');
    setVisible(false);
  };

  const reject = () => {
    cookieStorageService.setConsent('rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 border border-border/50 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-xl gradient-bg items-center justify-center shrink-0">
                <Cookie className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {t("title")}
                  </h3>
                  <button
                    onClick={reject}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close cookie consent"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("description")}{" "}
                  <Link
                    href={`/${locale}/cookies`}
                    className="text-secondary hover:underline font-medium"
                  >
                    {t("policyLink")}
                  </Link>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    onClick={accept}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold"
                  >
                    {t("accept")}
                  </Button>
                  <Button
                    onClick={reject}
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted"
                  >
                    {t("reject")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
