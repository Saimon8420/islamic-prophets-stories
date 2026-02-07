import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, AppSettings } from '../types/store';
import type { ProphetId, Bookmark } from '../types/prophet';

const defaultSettings: AppSettings = {
  theme: 'system',
  language: 'en',
  fontSize: 'medium',
  kidsMode: false,
  showQuranContent: true,
  showIbnKathirContent: true,
  showHadithContent: true,
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      ...defaultSettings,

      readingProgress: {} as Record<ProphetId, { completedChapters: string[]; lastChapterId: string | null; lastScrollPosition: number }>,
      bookmarks: [],
      lastProphet: null,
      lastTab: 'stories',

      // Settings actions
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      setFontSize: (fontSize) => set({ fontSize }),
      setKidsMode: (kidsMode) => set({ kidsMode }),
      setShowQuranContent: (showQuranContent) => set({ showQuranContent }),
      setShowIbnKathirContent: (showIbnKathirContent) => set({ showIbnKathirContent }),
      setShowHadithContent: (showHadithContent) => set({ showHadithContent }),

      // Reading progress
      markChapterComplete: (prophetId, chapterId) =>
        set((state) => {
          const progress = state.readingProgress[prophetId] || {
            completedChapters: [],
            lastChapterId: null,
            lastScrollPosition: 0,
          };
          if (progress.completedChapters.includes(chapterId)) return state;
          return {
            readingProgress: {
              ...state.readingProgress,
              [prophetId]: {
                ...progress,
                completedChapters: [...progress.completedChapters, chapterId],
              },
            },
          };
        }),

      setLastReadPosition: (prophetId, chapterId, scrollPosition) =>
        set((state) => {
          const progress = state.readingProgress[prophetId] || {
            completedChapters: [],
            lastChapterId: null,
            lastScrollPosition: 0,
          };
          return {
            readingProgress: {
              ...state.readingProgress,
              [prophetId]: {
                ...progress,
                lastChapterId: chapterId,
                lastScrollPosition: scrollPosition,
              },
            },
          };
        }),

      resetProgress: (prophetId) =>
        set((state) => {
          if (prophetId) {
            const { [prophetId]: _, ...rest } = state.readingProgress;
            void _;
            return { readingProgress: rest };
          }
          return { readingProgress: {} as Record<ProphetId, { completedChapters: string[]; lastChapterId: string | null; lastScrollPosition: number }> };
        }),

      // Bookmarks
      addBookmark: (bookmark: Bookmark) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, bookmark],
        })),

      removeBookmark: (bookmarkId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== bookmarkId),
        })),

      // Navigation
      setLastProphet: (lastProphet) => set({ lastProphet }),
      setLastTab: (lastTab) => set({ lastTab }),

      // Reset
      resetSettings: () => set({ ...defaultSettings }),
    }),
    {
      name: 'prophets-stories-app-settings',
    }
  )
);

// Selector hooks
export const useThemeStore = () => useStore((state) => state.theme);
export const useLanguageStore = () => useStore((state) => state.language);
export const useFontSizeStore = () => useStore((state) => state.fontSize);
export const useKidsModeStore = () => useStore((state) => state.kidsMode);
