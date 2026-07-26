"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";

export default function Hero() {
  const { t, dir } = useLanguage();
  const serviceNames = t.services.list.map((s) => s.title);
  const marqueeItems = [...serviceNames, ...serviceNames];

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper pt-24">
      {/* Decorative editorial grid lines */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.06] md:block">
        <div className="mx-auto grid h-full max-w-canvas grid-cols-4 px-10">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-x border-ink" />
          ))}
        </div>
      </div>

      {/* Decorative rotating ring, echoes the logo mark */}
      <div className="pointer-events-none absolute -right-24 top-16 opacity-[0.08] md:opacity-[0.14] rtl:-right-auto rtl:-left-24">
        <div className="animate-slow-spin">
          <svg width="420" height="420" viewBox="0 0 420 420" fill="none">
            <circle cx="210" cy="210" r="205" stroke="#236BB3" strokeWidth="1.5" strokeDasharray="2 10" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-canvas flex-1 flex-col justify-center px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="text-xs font-medium uppercase tracking-widest2 text-ink/60">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <h1 className="max-w-5xl">
          <RevealText
            text={t.hero.line1}
            as="span"
            className={`block font-display font-medium text-ink ${
              dir === "rtl" ? "text-hero-ar" : "text-hero-en"
            }`}
          />
          <RevealText
            text={t.hero.line2}
            as="span"
            delay={0.15}
            className={`mt-1 block font-display font-medium text-stroke-brand ${
              dir === "rtl" ? "text-hero-ar" : "text-hero-en"
            }`}
          />
        </h1>

        <div className="mt-10 flex flex-col items-start gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-balance font-body text-base leading-relaxed text-ink/70 md:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#work"
              className="group flex items-center gap-2 text-sm font-medium text-ink"
            >
              {t.hero.secondaryCta}
              <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative mx-auto mb-8 flex w-full max-w-canvas items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest2 text-ink/50">
          <span className="h-8 w-px bg-ink/30" />
          {t.hero.scrollHint}
        </div>
        <Image
          src="/mark.png"
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          className="hidden h-7 w-7 object-contain opacity-40 md:block"
        />
      </div>

      {/* Service marquee strip */}
      <div className="relative w-full overflow-hidden border-t border-line bg-ink py-4">
        <div className={`flex w-max whitespace-nowrap ${dir === "rtl" ? "animate-marquee-rtl" : "animate-marquee"}`}>
          {marqueeItems.map((name, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-paper/70">
              {name}
              <span className="text-brand">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
