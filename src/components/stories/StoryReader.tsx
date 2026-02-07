import { useState, useEffect } from 'react';
import { prophetsMeta } from '../../data/prophets-meta';
import { useProphetData } from '../../hooks/useProphetData';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { StoryHeader } from './StoryHeader';
import { ChapterNav } from './ChapterNav';
import { ChapterContent } from './ChapterContent';
import { ReadingProgressBar } from './ReadingProgressBar';
import { LoadingCard } from '../common/LoadingCard';
import { ErrorCard } from '../common/ErrorCard';
import { useTranslation } from '../../i18n/useTranslation';
import { useStore } from '../../store/useStore';
import { KidsStoryReader } from '../kids/KidsStoryReader';
import type { ProphetId } from '../../types/prophet';

interface StoryReaderProps {
  prophetId: ProphetId;
  onBack: () => void;
}

export const StoryReader = ({ prophetId, onBack }: StoryReaderProps) => {
  const { t } = useTranslation();
  const kidsMode = useStore((s) => s.kidsMode);
  const prophet = prophetsMeta.find((p) => p.id === prophetId);
  const { chapters, kidsChapters, quiz, loading, error } = useProphetData(prophetId);
  const { completedChapters, lastChapterId, markComplete } = useReadingProgress(prophetId);

  const [currentChapterId, setCurrentChapterId] = useState<string | null>(null);

  useEffect(() => {
    if (chapters && chapters.length > 0 && !currentChapterId) {
      setCurrentChapterId(lastChapterId || chapters[0].id);
    }
  }, [chapters, currentChapterId, lastChapterId]);

  if (!prophet) {
    return <ErrorCard message={t('errors.storyNotFound')} onRetry={onBack} />;
  }

  if (loading) return <LoadingCard />;
  if (error) return <ErrorCard message={error} onRetry={() => window.location.reload()} />;

  // Kids mode
  if (kidsMode && kidsChapters && kidsChapters.length > 0) {
    return (
      <KidsStoryReader
        prophet={prophet}
        kidsChapters={kidsChapters}
        quiz={quiz ?? []}
        onBack={onBack}
      />
    );
  }

  const currentChapter = chapters?.find((c) => c.id === currentChapterId) ?? null;

  const goToNextChapter = () => {
    if (!chapters || !currentChapterId) return;
    const currentIndex = chapters.findIndex((c) => c.id === currentChapterId);
    if (currentIndex < chapters.length - 1) {
      setCurrentChapterId(chapters[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevChapter = () => {
    if (!chapters || !currentChapterId) return;
    const currentIndex = chapters.findIndex((c) => c.id === currentChapterId);
    if (currentIndex > 0) {
      setCurrentChapterId(chapters[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <StoryHeader prophet={prophet} onBack={onBack} />

      {chapters && chapters.length > 0 && (
        <ReadingProgressBar completedCount={completedChapters.length} totalCount={chapters.length} />
      )}

      <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
        {/* Chapter navigation */}
        {chapters && chapters.length > 0 && (
          <div className="lg:sticky lg:top-20 lg:self-start">
            <ChapterNav
              chapters={chapters}
              currentChapterId={currentChapterId}
              completedChapters={completedChapters}
              onSelectChapter={(id) => {
                setCurrentChapterId(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* Chapter content */}
        <div>
          {currentChapter && (
            <ChapterContent
              key={currentChapter.id}
              chapter={currentChapter}
              prophetId={prophetId}
              isCompleted={completedChapters.includes(currentChapter.id)}
              onMarkComplete={() => {
                markComplete(currentChapter.id);
                goToNextChapter();
              }}
            />
          )}

          {/* Navigation */}
          {chapters && chapters.length > 0 && currentChapterId && (
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={goToPrevChapter}
                disabled={chapters.findIndex((c) => c.id === currentChapterId) === 0}
                className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
              >
                &larr; {t('common.previous')}
              </button>
              <button
                onClick={goToNextChapter}
                disabled={chapters.findIndex((c) => c.id === currentChapterId) === chapters.length - 1}
                className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {t('common.next')} &rarr;
              </button>
            </div>
          )}

          {(!chapters || chapters.length === 0) && !loading && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Story content is being prepared. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
