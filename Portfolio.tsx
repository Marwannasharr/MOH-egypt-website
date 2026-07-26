"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function Portfolio() {
  const { t, dir } = useLanguage();
  const [active, setActive] = useState(t.portfolio.categories[0]);

  const items = useMemo(() => {
    if (active === t.portfolio.categories[0]) return t.portfolio.items;
    return t.portfolio.items.filter((item) => item.category === active);
  }, [active, t]);

  return (
    <section id="work" className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-canvas px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand">
              <span className="h-px w-8 bg-brand" />
              {t.portfolio.kicker}
            </span>
            <RevealText
              text={t.portfolio.title}
              as="h2"
              className={`max-w-2xl font-display font-medium text-ink ${
                dir === "rtl" ? "text-display-ar" : "text-display-en"
              }`}
            />
          </div>
          <p className="max-w-sm font-body text-ink/60">{t.portfolio.intro}</p>
        </div>

        <div className="no-scrollbar mt-12 flex gap-2 overflow-x-auto">
          {t.portfolio.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === cat
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink/60 hover:border-ink/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                className={`group relative overflow-hidden border border-line bg-mist p-8 ${
                  i % 3 === 0 ? "md:col-span-2 md:aspect-[21/9]" : "md:aspect-[4/5]"
                } aspect-[4/3] flex flex-col justify-between`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest2 text-brand">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-brand/30 bg-paper px-3 py-1 text-[11px] font-medium text-brand">
                    {t.portfolio.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{item.note}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
