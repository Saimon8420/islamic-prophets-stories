import { BookOpen, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useStore } from '../../store/useStore';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetMeta } from '../../types/prophet';

interface ProphetCardProps {
  prophet: ProphetMeta;
  onSelect: () => void;
}

export const ProphetCard = ({ prophet, onSelect }: ProphetCardProps) => {
  const { t, language } = useTranslation();
  const progress = useStore((s) => s.readingProgress[prophet.id]);
  const completedCount = progress?.completedChapters?.length ?? 0;
  const progressPercent = prophet.chapterCount > 0 ? (completedCount / prophet.chapterCount) * 100 : 0;
  const isComplete = completedCount >= prophet.chapterCount;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={onSelect}>
      <div className="h-2 islamic-gradient opacity-60 group-hover:opacity-100 transition-opacity" />
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono">#{prophet.order}</span>
              {isComplete && <CheckCircle className="h-4 w-4 text-primary" />}
            </div>
            <h3 className="font-bold text-lg truncate">{prophet.name[language]}</h3>
            {language !== 'ar' && (
              <p className="arabic-text text-sm text-muted-foreground">{prophet.name.ar}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">{prophet.title[language]}</p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <span>{prophet.era[language]}</span>
        </div>

        {prophet.chapterCount > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{completedCount}/{prophet.chapterCount} {t('stories.chapters')}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <Progress value={progressPercent} className="h-1.5" />
          </div>
        )}

        <Button
          variant={completedCount > 0 && !isComplete ? 'islamic' : 'outline'}
          size="sm"
          className="w-full"
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
        >
          <BookOpen className="me-2 h-4 w-4" />
          {completedCount > 0 && !isComplete ? t('stories.continueStory') : isComplete ? t('stories.readStory') : t('stories.startReading')}
        </Button>
      </CardContent>
    </Card>
  );
};
