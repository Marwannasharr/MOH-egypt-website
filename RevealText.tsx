"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type RefObject } from "react";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export default function RevealText({
  text,
  as = "p",
  className = "",
  delay = 0,
  wordDelay = 0.045,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as RefObject<Element>, { once: true, margin: "-10% 0px -10% 0px" });
  const words = text.split(" ");
  const Tag = as;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * wordDelay,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
