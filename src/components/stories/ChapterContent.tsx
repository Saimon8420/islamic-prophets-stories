import { Bookmark, BookmarkCheck, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { QuranVerse } from '../common/QuranVerse';
import { ReferenceTag } from '../common/ReferenceTag';
import { IslamicDivider } from '../common/IslamicDivider';
import { useStore } from '../../store/useStore';
import { useBookmarks } from '../../hooks/useBookmarks';
import { useTranslation } from '../../i18n/useTranslation';
import type { StoryChapter, ProphetId } from '../../types/prophet';

interface ChapterContentProps {
  chapter: StoryChapter;
  prophetId: ProphetId;
  isCompleted: boolean;
  onMarkComplete: () => void;
}

export const ChapterContent = ({ chapter, prophetId, isCompleted, onMarkComplete }: ChapterContentProps) => {
  const { t } = useTranslation();
  const showQuran = useStore((s) => s.showQuranContent);
  const showIbnKathir = useStore((s) => s.showIbnKathirContent);
  const showHadith = useStore((s) => s.showHadithContent);
  const { isBookmarked, toggle } = useBookmarks(prophetId);

  const filteredParagraphs = chapter.paragraphs.filter((p) => {
    if (p.phase === 'quran' && !showQuran) return false;
    if (p.phase === 'ibn-kathir' && !showIbnKathir) return false;
    if (p.phase === 'hadith' && !showHadith) return false;
    return true;
  });

  return (
    <div className="story-reader fade-in">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          {chapter.order}. {chapter.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{chapter.summary}</p>
      </div>

      <IslamicDivider />

      <div className="space-y-6 mt-6">
        {filteredParagraphs.map((paragraph) => (
          <div key={paragraph.id} className="group relative">
            <p className="leading-relaxed">{paragraph.text}</p>

            {/* Quran verse blocks */}
            {paragraph.references
              .filter((r) => r.type === 'quran' && r.arabicText)
              .map((ref, i) => (
                <QuranVerse key={i} reference={ref as import('../../types/prophet').QuranReference} />
              ))}

            {/* Reference tags */}
            {paragraph.references.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {paragraph.references.map((ref, i) => (
                  <ReferenceTag key={i} reference={ref} />
                ))}
              </div>
            )}

            {/* Bookmark button */}
            <button
              onClick={() => toggle({
                prophetId,
                chapterId: chapter.id,
                paragraphId: paragraph.id,
                snippet: paragraph.text.slice(0, 100),
              })}
              className="absolute top-0 end-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted"
            >
              {isBookmarked(paragraph.id) ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        ))}
      </div>

      {filteredParagraphs.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No content visible with current filter settings. Enable content sources in Settings.
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <Button
          variant={isCompleted ? 'outline' : 'islamic'}
          onClick={onMarkComplete}
          disabled={isCompleted}
        >
          <CheckCircle className="me-2 h-4 w-4" />
          {isCompleted ? t('stories.completed') : t('stories.markComplete')}
        </Button>
      </div>
    </div>
  );
};
