"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useCounter } from "@/lib/hooks/useCounter";
import RevealText from "./RevealText";

export default function WhyChooseUs() {
  const { t, dir } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-20%" });

  return (
    <section id="why-us" className="relative bg-mist py-28 md:py-36">
      <div className="mx-auto max-w-canvas px-6 md:px-10">
        <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand">
          <span className="h-px w-8 bg-brand" />
          {t.whyUs.kicker}
        </span>
        <RevealText
          text={t.whyUs.title}
          as="h2"
          className={`max-w-2xl font-display font-medium text-ink ${
            dir === "rtl" ? "text-display-ar" : "text-display-en"
          }`}
        />

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="flex flex-col gap-10 md:col-span-6">
            {t.whyUs.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-xl font-medium text-ink md:text-2xl">{point.title}</h3>
                <p className="mt-2 max-w-md text-ink/65">{point.body}</p>
              </motion.div>
            ))}
          </div>

          <div ref={statsRef} className="grid grid-cols-1 gap-8 border-t border-line pt-10 md:col-span-5 md:col-start-8 md:border-t-0 md:border-s md:pt-0 md:ps-12">
            {t.whyUs.stats.map((stat) => (
              <StatRow key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} active={inView} />
            ))}
            <p className="text-xs italic text-ink/40">{t.whyUs.statsNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCounter(value, active);
  return (
    <div>
      <div className="font-display text-5xl font-medium text-brand md:text-6xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-ink/60">{label}</div>
    </div>
  );
}
