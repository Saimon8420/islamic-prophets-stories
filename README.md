# Prophets of Islam Stories

An interactive app to explore the stories of the 25 Prophets of Islam, with verified references from the Quran, Ibn Kathir's *Stories of the Prophets*, and Sahih Hadith collections.

## Features

- Stories of all 25 Prophets with authentic references
- Quran verses displayed in Arabic with translations
- Multi-language support (English, Bengali, Arabic)
- Dark/Light theme
- Reading progress tracking and bookmarks
- Full-text search across all stories
- Timeline view of prophets
- Kids mode with simplified stories and quizzes
- Works offline as a PWA and native Android app

## Download

[![GitHub Release](https://img.shields.io/github/v/release/Saimon8420/islamic-prophets-stories?label=Download%20APK)](https://github.com/Saimon8420/islamic-prophets-stories/releases/latest)

Download the latest Android APK from the [Releases page](https://github.com/Saimon8420/islamic-prophets-stories/releases).

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build:** Vite 7
- **Mobile:** Capacitor 7 (Android)
- **State:** Zustand
- **UI Components:** Radix UI
- **CI/CD:** GitHub Actions

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

## License

MIT
