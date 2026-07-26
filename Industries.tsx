"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function Industries() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-canvas px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand">
              <span className="h-px w-8 bg-brand" />
              {t.industries.kicker}
            </span>
            <RevealText
              text={t.industries.title}
              as="h2"
              className={`font-display font-medium text-ink ${
                dir === "rtl" ? "text-display-ar" : "text-display-en"
              }`}
            />
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {t.industries.list.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-baseline justify-between border-b border-line py-6 transition-colors duration-300 hover:border-brand"
              >
                <span className="font-display text-2xl font-medium text-ink transition-colors duration-300 group-hover:text-brand md:text-3xl">
                  {industry}
                </span>
                <span className="font-body text-sm text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
