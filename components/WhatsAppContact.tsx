"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import {
  ALICANTE_PHONE_DISPLAY,
  ALICANTE_PHONE_RAW,
  VALENCIA_PHONE_DISPLAY,
  VALENCIA_PHONE_RAW,
  getWhatsAppMessage,
} from "@/lib/contact";

type WhatsAppEntry = {
  label: string;
  phoneDisplay: string;
  phoneRaw: string;
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.1-.43-.13-.62.13-.18.26-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.18-1.34-.8-.71-1.35-1.58-1.5-1.85-.16-.26-.02-.4.11-.53.11-.11.27-.3.4-.45.13-.15.18-.26.27-.43.09-.18.04-.33-.02-.46-.07-.13-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16 0-.35-.01-.54-.01-.18 0-.47.07-.71.33-.25.26-.94.92-.94 2.24s.96 2.6 1.09 2.78c.13.18 1.88 2.88 4.55 4.04.63.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.29.22-.64.22-1.19.16-1.29-.07-.1-.25-.16-.52-.29z" />
    <path d="M16 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.45 1.7 6.39L3.2 28.8l6.57-1.67A12.74 12.74 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8 0-7.07-5.73-12.8-12.8-12.8zm0 23.3c-1.99 0-3.94-.54-5.63-1.56l-.4-.24-3.9.99.99-3.8-.26-.39a10.24 10.24 0 0 1-1.6-5.49c0-5.66 4.6-10.26 10.26-10.26s10.26 4.6 10.26 10.26S21.66 26.5 16 26.5z" />
  </svg>
);

const getEntriesByPathname = (pathname: string, locale: string): WhatsAppEntry[] => {
  const isAlicantePage =
    pathname.includes("/web-design-seo-alicante") || pathname.includes("/diseno-web-seo-alicante");
  const isValenciaPage =
    pathname.includes("/web-design-seo-valencia") || pathname.includes("/diseno-web-seo-valencia");

  if (isAlicantePage) {
    return [
      {
        label: locale === "es" ? "Alicante" : "Alicante",
        phoneDisplay: ALICANTE_PHONE_DISPLAY,
        phoneRaw: ALICANTE_PHONE_RAW,
      },
    ];
  }

  if (isValenciaPage) {
    return [
      {
        label: locale === "es" ? "Valencia" : "Valencia",
        phoneDisplay: VALENCIA_PHONE_DISPLAY,
        phoneRaw: VALENCIA_PHONE_RAW,
      },
    ];
  }

  return [
    {
      label: locale === "es" ? "Alicante" : "Alicante",
      phoneDisplay: ALICANTE_PHONE_DISPLAY,
      phoneRaw: ALICANTE_PHONE_RAW,
    },
    {
      label: locale === "es" ? "Valencia" : "Valencia",
      phoneDisplay: VALENCIA_PHONE_DISPLAY,
      phoneRaw: VALENCIA_PHONE_RAW,
    },
  ];
};

export default function WhatsAppContact() {
  const locale = useLocale();
  const pathname = usePathname();
  const entries = getEntriesByPathname(pathname, locale);
  const message = getWhatsAppMessage(locale);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {entries.map((entry) => (
        <a
          key={entry.phoneRaw}
          href={`https://wa.me/${entry.phoneRaw}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${entry.phoneDisplay}`}
          className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-white shadow-lg transition-transform hover:scale-[1.03]"
        >
          <WhatsAppIcon />
          <span className="text-xs font-semibold leading-tight">
            {entry.label} · {entry.phoneDisplay}
          </span>
        </a>
      ))}
    </div>
  );
}
