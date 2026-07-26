"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { contactRaw } from "@/lib/i18n/dictionary";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-paper py-14">
      <div className="mx-auto flex max-w-canvas flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between md:px-10">
        <div className="flex items-center gap-2.5">
          <Image src="/mark.png" alt="MOH Egypt" width={30} height={30} className="h-7 w-7 object-contain" />
          <div>
            <div className="font-display text-sm font-semibold text-ink">MOH EGYPT</div>
            <div className="text-xs text-ink/50">{t.footer.tagline}</div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink/60 transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-ink/50" dir="ltr">
          <div>{contactRaw.phone}</div>
          <div>{contactRaw.email}</div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-canvas flex-col-reverse items-start justify-between gap-4 border-t border-line px-6 pt-6 text-xs text-ink/40 md:flex-row md:items-center md:px-10">
        <span>
          © {year} MOH Egypt. {t.footer.rights}
        </span>
        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}
