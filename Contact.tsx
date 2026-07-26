"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { contactRaw } from "@/lib/i18n/dictionary";
import RevealText from "./RevealText";

export default function Contact() {
  const { t, dir } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${contactRaw.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-canvas px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-brand">
              <span className="h-px w-8 bg-brand" />
              {t.contact.kicker}
            </span>
            <RevealText
              text={t.contact.title}
              as="h2"
              className={`font-display font-medium text-ink ${
                dir === "rtl" ? "text-display-ar" : "text-display-en"
              }`}
            />
            <p className="mt-6 max-w-sm text-ink/65">{t.contact.intro}</p>

            <dl className="mt-12 flex flex-col gap-6">
              <ContactRow label={t.contact.phoneLabel} value={contactRaw.phone} href={`tel:${contactRaw.phoneHref}`} />
              <ContactRow label={t.contact.emailLabel} value={contactRaw.email} href={`mailto:${contactRaw.email}`} />
              <ContactRow label={t.contact.whatsappLabel} value={contactRaw.phone} href={contactRaw.whatsappHref} external />
              <ContactRow label={t.contact.locationLabel} value={contactRaw.location} />
            </dl>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
          >
            <Field label={t.contact.formName} value={name} onChange={setName} />
            <Field label={t.contact.formEmail} value={email} onChange={setEmail} type="email" />
            <Field label={t.contact.formMessage} value={message} onChange={setMessage} textarea />
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand"
            >
              {t.contact.formSubmit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-baseline justify-between border-b border-line py-4 transition-colors duration-300 hover:border-brand">
      <span className="text-xs uppercase tracking-widest2 text-ink/45">{label}</span>
      <span className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-brand" dir="ltr">
        {value}
      </span>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest2 text-ink/45">{label}</span>
      {textarea ? (
        <textarea
          required
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-none border-b border-line bg-transparent py-2 font-body text-ink outline-none transition-colors duration-300 focus:border-brand"
        />
      ) : (
        <input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border-b border-line bg-transparent py-2 font-body text-ink outline-none transition-colors duration-300 focus:border-brand"
        />
      )}
    </label>
  );
}
