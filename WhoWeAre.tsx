"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function WhoWeAre() {
  const { t, dir } = useLanguage();

  return (
    <section id="who-we-are" className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto grid max-w-canvas grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-4">
          <div className="sticky top-28">
            <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand">
              <span className="h-px w-8 bg-brand" />
              {t.whoWeAre.kicker}
            </span>
            <RevealText
              text={t.whoWeAre.title}
              as="h2"
              className={`font-display font-medium text-ink ${
                dir === "rtl" ? "text-display-ar" : "text-display-en"
              }`}
            />
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-lg leading-relaxed text-ink/75 md:text-xl"
          >
            {t.whoWeAre.body}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 border-s-2 border-brand ps-6 md:mt-16 md:ps-8"
          >
            <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
              “{t.whoWeAre.quote}”
            </p>
            <cite className="mt-4 block text-sm font-medium not-italic text-ink/50">
              {t.whoWeAre.quoteAttribution}
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
