import type { ProphetId, Language, Bookmark, ReadingProgress } from './prophet';

export type ThemeMode = 'light' | 'dark' | 'system';
export type FontSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AppSettings {
  theme: ThemeMode;
  language: Language;
  fontSize: FontSize;
  kidsMode: boolean;
  showQuranContent: boolean;
  showIbnKathirContent: boolean;
  showHadithContent: boolean;
}

export interface AppState extends AppSettings {
  // Reading progress
  readingProgress: Partial<Record<ProphetId, ReadingProgress>>;

  // Bookmarks
  bookmarks: Bookmark[];

  // Navigation
  lastProphet: ProphetId | null;
  lastTab: string;

  // Settings actions
  setTheme: (theme: ThemeMode) => void;
  setLanguage: (language: Language) => void;
  setFontSize: (fontSize: FontSize) => void;
  setKidsMode: (kidsMode: boolean) => void;
  setShowQuranContent: (show: boolean) => void;
  setShowIbnKathirContent: (show: boolean) => void;
  setShowHadithContent: (show: boolean) => void;

  // Reading progress actions
  markChapterComplete: (prophetId: ProphetId, chapterId: string) => void;
  setLastReadPosition: (prophetId: ProphetId, chapterId: string, scrollPosition: number) => void;
  resetProgress: (prophetId?: ProphetId) => void;

  // Bookmark actions
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (bookmarkId: string) => void;

  // Navigation actions
  setLastProphet: (prophetId: ProphetId | null) => void;
  setLastTab: (tab: string) => void;

  // Reset
  resetSettings: () => void;
}
