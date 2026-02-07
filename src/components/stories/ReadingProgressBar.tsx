import { Progress } from '../ui/progress';
import { useTranslation } from '../../i18n/useTranslation';

interface ReadingProgressBarProps {
  completedCount: number;
  totalCount: number;
}

export const ReadingProgressBar = ({ completedCount, totalCount }: ReadingProgressBarProps) => {
  const { t } = useTranslation();
  const percent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{t('stories.progress')}</span>
        <span>{completedCount}/{totalCount} {t('stories.chapters')}</span>
      </div>
      <Progress value={percent} className="h-2" />
    </div>
  );
};
