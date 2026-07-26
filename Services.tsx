"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import RevealText from "./RevealText";
import type { Service } from "@/lib/i18n/dictionary";

const PANEL_TREATMENTS = [
  "image-focus",
  "type-focus",
  "list-focus",
  "quote-focus",
  "type-focus",
] as const;

export default function Services() {
  const { t, dir } = useLanguage();
  const services = t.services.list;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="services" className="relative bg-navy text-paper">
      <div className="mx-auto max-w-canvas px-6 pt-24 md:px-10">
        <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand-light">
          <span className="h-px w-8 bg-brand-light" />
          {t.services.kicker}
        </span>
        <RevealText
          text={t.services.title}
          as="h2"
          className={`max-w-3xl font-display font-medium text-paper ${
            dir === "rtl" ? "text-display-ar" : "text-display-en"
          }`}
        />
        <p className="mt-6 max-w-xl font-body text-paper/60 md:text-lg">{t.services.intro}</p>
      </div>

      {isDesktop ? (
        <PinnedPanels services={services} dir={dir} />
      ) : (
        <div className="mt-16 flex flex-col gap-4 px-6 pb-24">
          {services.map((s) => (
            <MobileCard key={s.index} service={s} />
          ))}
        </div>
      )}
    </section>
  );
}

function PinnedPanels({ services, dir }: { services: Service[]; dir: "ltr" | "rtl" }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const n = services.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    dir === "rtl" ? ["0vw", `${(n - 1) * 92}vw`] : ["0vw", `-${(n - 1) * 92}vw`]
  );

  return (
    <div ref={wrapperRef} style={{ height: `${n * 100}vh` }} className="relative mt-16">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-10">
          {services.map((service, i) => (
            <Panel key={service.index} service={service} treatment={PANEL_TREATMENTS[i % PANEL_TREATMENTS.length]} />
          ))}
          <div className="w-[6vw] shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

function Panel({ service, treatment }: { service: Service; treatment: string }) {
  const base = "relative shrink-0 w-[86vw] md:w-[70vw] lg:w-[56vw] h-[70vh] rounded-none border border-white/10 p-8 md:p-12 flex flex-col justify-between overflow-hidden";

  if (treatment === "image-focus") {
    return (
      <div className={`${base} bg-gradient-to-br from-brand to-navy`}>
        <span className="font-display text-7xl text-white/25">{service.index}</span>
        <div>
          <h3 className="font-display text-3xl font-medium text-white md:text-4xl">{service.title}</h3>
          <p className="mt-4 max-w-md text-white/75">{service.body}</p>
        </div>
      </div>
    );
  }

  if (treatment === "list-focus") {
    return (
      <div className={`${base} bg-[#0F2E4F]`}>
        <span className="font-display text-7xl text-brand-light/40">{service.index}</span>
        <div>
          <h3 className="font-display text-3xl font-medium text-paper md:text-4xl">{service.title}</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
            {service.tags.map((tag: string) => (
              <li key={tag} className="border-t border-white/15 pt-2 text-sm text-paper/70">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (treatment === "quote-focus") {
    return (
      <div className={`${base} bg-[#0F2E4F] justify-center`}>
        <span className="absolute right-8 top-8 font-display text-7xl text-brand-light/30 rtl:right-auto rtl:left-8">
          {service.index}
        </span>
        <h3 className="font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
          {service.title}
        </h3>
        <p className="mt-6 max-w-md text-paper/70">{service.body}</p>
      </div>
    );
  }

  // type-focus (default)
  return (
    <div className={`${base} bg-[#0F2E4F]`}>
      <span className="font-display text-7xl text-brand-light/40">{service.index}</span>
      <div>
        <h3 className="font-display text-3xl font-medium text-paper md:text-4xl">{service.title}</h3>
        <p className="mt-4 max-w-md text-paper/70">{service.body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag: string) => (
            <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-paper/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileCard({ service }: { service: Service }) {
  return (
    <div className="rounded-none border border-white/10 bg-[#0F2E4F] p-6">
      <span className="font-display text-4xl text-brand-light/40">{service.index}</span>
      <h3 className="mt-3 font-display text-2xl font-medium text-paper">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-paper/70">{service.body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {service.tags.map((tag: string) => (
          <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-paper/70">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
