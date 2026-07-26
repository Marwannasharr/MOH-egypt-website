import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Cursor from "@/components/Cursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOH Egypt — Marketing, Executed.",
  description:
    "MOH Egypt is a Cairo-based marketing service company covering social media management, brand activations, creative production, influencer marketing and corporate gifting — planned and executed end to end.",
  metadataBase: new URL("https://mohegypt.com"),
  openGraph: {
    title: "MOH Egypt — Marketing, Executed.",
    description:
      "Strategy, activation, content and influence — planned and executed end to end, on the ground in Egypt.",
    images: ["/mark.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${fraunces.variable} ${inter.variable} ${plexArabic.variable} font-body`}>
        <LanguageProvider>
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
