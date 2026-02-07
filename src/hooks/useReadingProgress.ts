import { useStore } from '../store/useStore';
import type { ProphetId } from '../types/prophet';

export function useReadingProgress(prophetId: ProphetId) {
  const progress = useStore((state) => state.readingProgress[prophetId]);
  const markChapterComplete = useStore((state) => state.markChapterComplete);
  const setLastReadPosition = useStore((state) => state.setLastReadPosition);
  const resetProgress = useStore((state) => state.resetProgress);

  return {
    completedChapters: progress?.completedChapters ?? [],
    lastChapterId: progress?.lastChapterId ?? null,
    lastScrollPosition: progress?.lastScrollPosition ?? 0,
    markComplete: (chapterId: string) => markChapterComplete(prophetId, chapterId),
    setPosition: (chapterId: string, scrollPos: number) =>
      setLastReadPosition(prophetId, chapterId, scrollPos),
    reset: () => resetProgress(prophetId),
  };
}
