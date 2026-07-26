"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function CTA() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand py-28 text-paper md:py-40">
      <div className="pointer-events-none absolute -bottom-24 -right-24 opacity-20 rtl:-right-auto rtl:-left-24">
        <svg width="360" height="360" viewBox="0 0 420 420" fill="none">
          <circle cx="210" cy="210" r="205" stroke="#FCFBF9" strokeWidth="1.5" strokeDasharray="2 10" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-canvas px-6 text-center md:px-10">
        <RevealText
          text={t.cta.title}
          as="h2"
          className={`mx-auto max-w-4xl font-display font-medium text-paper ${
            dir === "rtl" ? "text-display-ar" : "text-display-en"
          }`}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg text-paper/80"
        >
          {t.cta.sub}
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 inline-block rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-navy"
        >
          {t.cta.button}
        </motion.a>
      </div>
    </section>
  );
}
