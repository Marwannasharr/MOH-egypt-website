"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function ClientJourney() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative bg-navy py-28 text-paper md:py-36">
      <div className="mx-auto max-w-canvas px-6 md:px-10">
        <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand-light">
          <span className="h-px w-8 bg-brand-light" />
          {t.journey.kicker}
        </span>
        <RevealText
          text={t.journey.title}
          as="h2"
          className={`max-w-2xl font-display font-medium text-paper ${
            dir === "rtl" ? "text-display-ar" : "text-display-en"
          }`}
        />

        <div className="relative mt-20 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-white/15 md:block" />
          {t.journey.steps.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brand-light bg-navy font-display text-sm text-brand-light">
                {step.index}
              </div>
              <h3 className="font-display text-xl font-medium text-paper md:text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
