import { CheckCircle, Circle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from '../../i18n/useTranslation';
import type { StoryChapter } from '../../types/prophet';

interface ChapterNavProps {
  chapters: StoryChapter[];
  currentChapterId: string | null;
  completedChapters: string[];
  onSelectChapter: (chapterId: string) => void;
}

export const ChapterNav = ({ chapters, currentChapterId, completedChapters, onSelectChapter }: ChapterNavProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">{t('stories.chapters')}</h3>
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapterId;
        const isCompleted = completedChapters.includes(chapter.id);

        return (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className={cn(
              'chapter-nav w-full text-left flex items-center gap-2 text-sm',
              isActive && 'active',
            )}
          >
            {isCompleted ? (
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
            )}
            <span className="truncate">
              {chapter.order}. {chapter.title}
            </span>
          </button>
        );
      })}
    </div>
  );
};
