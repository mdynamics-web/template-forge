'use client';

/**
 * Cookie Policy Component
 * Following SOLID principles:
 * - Single Responsibility: Displays cookie policy, delegates storage to service
 * - Open/Closed: Can be extended without modification through composition
 * - Liskov Substitution: PolicySection components are interchangeable
 * - Interface Segregation: Uses specific types for specific needs
 * - Dependency Inversion: Depends on abstractions (CookiePolicyContent interface)
 */

import { useEffect } from "react";
import { useTranslations } from 'next-intl';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PolicyHero, PolicySection } from "@/components/cookies/PolicyComponents";
import type { CookiePolicyContent } from "@/types/cookies";

export default function CookiePolicy() {
  const t = useTranslations('cookies.policy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Convert translations to typed content
  const content: CookiePolicyContent = {
    metaTitle: t('metaTitle'),
    title: t('title'),
    lastUpdated: t('lastUpdated'),
    section1: {
      title: t('section1.title'),
      text: t('section1.text'),
    },
    section2: {
      title: t('section2.title'),
      text: t('section2.text'),
      items: [
        t('section2.items.0'),
        t('section2.items.1'),
        t('section2.items.2'),
        t('section2.items.3'),
      ],
    },
    section3: {
      title: t('section3.title'),
      text: t('section3.text'),
    },
    section4: {
      title: t('section4.title'),
      text: t('section4.text'),
    },
    section5: {
      title: t('section5.title'),
      text: t('section5.text'),
      items: [
        t('section5.items.0'),
        t('section5.items.1'),
        t('section5.items.2'),
        t('section5.items.3'),
      ],
    },
    section6: {
      title: t('section6.title'),
      text: t('section6.text'),
    },
    section7: {
      title: t('section7.title'),
      text: t('section7.text'),
    },
  };

  useEffect(() => {
    document.title = content.metaTitle;
  }, [content.metaTitle]);

  const sections = [
    content.section1,
    content.section2,
    content.section3,
    content.section4,
    content.section5,
    content.section6,
    content.section7,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PolicyHero title={content.title} lastUpdated={content.lastUpdated} />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {sections.map((section, index) => (
            <PolicySection key={index} section={section} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
