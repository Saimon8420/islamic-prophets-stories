# Prophets of Islam Stories

The stories of the 25 prophets named in the Quran, told as an illuminated storybook in **English, Bangla and Arabic**. Every paragraph carries its source: a Quran ayah, a sahih hadith, or Ibn Kathir's *Stories of the Prophets*.

**Live:** https://islamic-prophets-stories.vercel.app

## Features

- **All 25 prophets, complete** — from Adam (AS) to Muhammad ﷺ, each with:
  - the full story in chapters, with tappable source tags that open the ayah or hadith text
  - a children's version in simple, gentle language
  - a quiz to test what was learned
  - lessons for daily life, each backed by a reference
- **Three languages** — English, Bangla and Arabic (right-to-left), with local digits
- **Book reader** — two-page spreads on desktop, a single scrolling page on phones, a title page per prophet
- **Lineage scroll** — how the prophets are related, with a source for every link
- **Timeline** of the prophets
- **Saved passages** and **full-text search** across all stories
- Light and dark themes, adjustable text size
- Android app (works offline)

## Sources

- **Quran** — Arabic text with translations
- **Hadith** — sahih and hasan narrations from Bukhari, Muslim and the other canonical collections
- **Ibn Kathir** — *Qasas al-Anbiya*, used only where it restates the Quran or sahih hadith

Weak narrations and isra'iliyyat are left out. Quiz answers rest on the Quran or sahih hadith only.

## Download

[![GitHub Release](https://img.shields.io/github/v/release/Saimon8420/islamic-prophets-stories?label=Download%20APK)](https://github.com/Saimon8420/islamic-prophets-stories/releases/latest)

Download the latest Android APK from the [Releases page](https://github.com/Saimon8420/islamic-prophets-stories/releases).

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build:** Vite 7
- **Mobile:** Capacitor 7 (Android)
- **State:** Zustand
- **UI:** Radix UI, Lucide icons
- **Fonts:** EB Garamond, Tiro Bangla, Amiri (self-hosted via Fontsource)
- **CI/CD:** GitHub Actions (APK builds), Vercel (web)

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### Android Development

```bash
# Build web app and sync to Android
npm run cap:build

# Open in Android Studio
npm run cap:open

# Build APK directly
npm run build:apk
```

## Project Structure

```
src/data/stories/<prophet>/
  chapters.en.ts  chapters.bn.ts  chapters.ar.ts   # full story
  kids.en.ts      kids.bn.ts      kids.ar.ts       # children's version
  quiz.ts                                          # trilingual quiz
  lessons.ts                                       # trilingual lessons
src/data/lineage.ts                                # family links with sources
src/services/contentLoader.ts                      # lazy-loads content per prophet and language
src/components/book/                               # storybook UI
```

## License

MIT
