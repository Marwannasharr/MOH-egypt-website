"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label="Switch language"
      className={`relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300 ${
        dark
          ? "border-white/25 text-white hover:border-white/60"
          : "border-ink/15 text-ink hover:border-brand"
      }`}
    >
      <span className={locale === "en" ? "opacity-100" : "opacity-40"}>EN</span>
      <span className="opacity-30">/</span>
      <span className={locale === "ar" ? "opacity-100" : "opacity-40"}>ع</span>
    </button>
  );
}
