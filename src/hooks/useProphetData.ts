import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import type { ProphetId, StoryChapter, KidsChapter, QuizQuestion, Lesson } from '../types/prophet';
import { loadProphetChapters, loadProphetKidsChapters, loadProphetQuiz, loadProphetLessons } from '../services/contentLoader';

interface ProphetDataState {
  chapters: StoryChapter[] | null;
  kidsChapters: KidsChapter[] | null;
  quiz: QuizQuestion[] | null;
  lessons: Lesson[] | null;
  loading: boolean;
  error: string | null;
}

export function useProphetData(prophetId: ProphetId | null) {
  const language = useStore((state) => state.language);
  const [data, setData] = useState<ProphetDataState>({
    chapters: null,
    kidsChapters: null,
    quiz: null,
    lessons: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!prophetId) return;

    let cancelled = false;

    const loadData = async () => {
      setData((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const [chapters, kidsChapters, quiz, lessons] = await Promise.all([
          loadProphetChapters(prophetId, language),
          loadProphetKidsChapters(prophetId, language),
          loadProphetQuiz(prophetId),
          loadProphetLessons(prophetId),
        ]);

        if (!cancelled) {
          setData({ chapters, kidsChapters, quiz, lessons, loading: false, error: null });
        }
      } catch {
        if (!cancelled) {
          setData((prev) => ({
            ...prev,
            loading: false,
            error: 'Failed to load story data',
          }));
        }
      }
    };

    loadData();
    return () => { cancelled = true; };
  }, [prophetId, language]);

  return data;
}
