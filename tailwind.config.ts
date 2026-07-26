import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10151B",
        paper: "#FCFBF9",
        mist: "#EEF2F6",
        line: "#DFE4E9",
        brand: {
          DEFAULT: "#236BB3",
          light: "#4A8FD1",
          dark: "#123F6B",
        },
        navy: "#0B2340",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        arDisplay: ["var(--font-ar)", "sans-serif"],
        arBody: ["var(--font-ar)", "sans-serif"],
      },
      fontSize: {
        "hero-en": ["clamp(3rem, 8vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "hero-ar": ["clamp(2.75rem, 7.5vw, 7rem)", { lineHeight: "1.15" }],
        "display-en": ["clamp(2.25rem, 4.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-ar": ["clamp(2.1rem, 4.2vw, 4rem)", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        canvas: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
