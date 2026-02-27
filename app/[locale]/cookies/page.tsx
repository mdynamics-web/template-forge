import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CookiePolicy from '@/components/cookies/CookiePolicy';

interface CookiePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: CookiePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cookies.policy' });

  return {
    title: t('metaTitle'),
    description: t('section1.text'),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}/cookies`,
      languages: {
        'es': '/es/cookies',
        'en': '/en/cookies',
      },
    },
  };
}

export default function CookiesPage() {
  return <CookiePolicy />;
}
