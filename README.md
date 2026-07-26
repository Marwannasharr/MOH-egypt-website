# MOH Egypt — Website

A bilingual (English / Arabic) marketing site for **MOH Egypt**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Design notes

- **Color** comes straight from your logo: primary blue `#236BB3`, a deep navy `#0B2340` for contrast sections, near-black ink for text, and an off-white paper background. No other colors were introduced.
- **Type**: Fraunces (display) + Inter (body) for English; IBM Plex Sans Arabic for Arabic — swapped automatically when the language toggle is switched, including full RTL layout mirroring.
- **Signature moment**: the hero's second line is rendered in outlined (stroked) type over a slowly rotating ring echoing your logo's circular mark, with word-by-word reveal on load and a looping marquee of your five services along the base.
- **Services** section is a pinned, horizontal-scrolling sequence on desktop (each service gets its own visual treatment — image-led, list-led, quote-led) and a simple stacked list on mobile.
- **Portfolio** is fully built (filtering, layout, transitions) with clearly-labeled placeholder entries, since real case studies weren't provided yet — see "Placeholders to replace" below.

## Getting started

Requires Node.js 18.18+ (or 20+).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

**Important:** this project was written in a sandboxed environment without internet access, so it could not be run through `npm install` / `npm run build` here to catch every last issue. I did run a full TypeScript syntax/logic check against stubbed type declarations and it came back clean, but please run `npm install && npm run build` yourself as the first step — if anything surfaces, send me the error and I'll fix it immediately.

## Project structure

```
app/                 Routes, layout, global styles, metadata
components/          All page sections (Hero, Services, Portfolio, etc.)
lib/i18n/            English + Arabic copy (dictionary.ts) and the language context
lib/hooks/           Small hooks (animated counters)
public/              Logo assets
```

## Editing content

All English and Arabic copy lives in **`lib/i18n/dictionary.ts`** — headline, service descriptions, portfolio items, stats, contact copy, everything. Edit the `en` and `ar` objects directly; both stay in sync via the shared `Dictionary` type, so TypeScript will flag if either language is missing a field.

Contact details (phone, email, New Cairo address, WhatsApp link) are set once near the top of that same file in `contactRaw`.

## Placeholders to replace before launch

- **Portfolio items** (`lib/i18n/dictionary.ts` → `portfolio.items`): currently sample categories marked "Case study in progress." Swap in real project names, notes, and — ideally — add real photography once available.
- **"Why choose MOH" stats** (`whyUs.stats`): placeholder figures (25+ activations, 5+ governorates, 12-day average). Replace with your real numbers; there's a small note under the counters flagging them as samples until you do.
- **Social links**: not included yet, since no accounts were provided. If you want Instagram/Facebook/LinkedIn icons in the footer or contact section, send the links and I'll wire them in.
- **Contact form**: submitting currently opens the visitor's email client with a pre-filled message (no backend). For a proper inbox-delivered form, wire `components/Contact.tsx` up to a service like Formspree, or a Next.js API route that sends email — happy to add this if you'd like.
- **`metadataBase` domain** in `app/layout.tsx`: set to a placeholder (`https://mohegypt.com`). Update it to your real domain once you have one, for correct social-share previews.

## Deployment

This is a standard Next.js app — the simplest path is [Vercel](https://vercel.com) (made by the Next.js team, free tier available): push this folder to a GitHub repo and import it, or run `npx vercel` from inside the project.

## Accessibility & performance

- Respects `prefers-reduced-motion` throughout (animations shorten to near-instant).
- Visible keyboard focus states on all interactive elements.
- Fully responsive from mobile through desktop; the pinned horizontal-scroll services section only activates at tablet width and above.
