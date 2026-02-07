import { ArrowLeft, BookOpen, Star, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetMeta } from '../../types/prophet';

interface StoryHeaderProps {
  prophet: ProphetMeta;
  onBack: () => void;
}

export const StoryHeader = ({ prophet, onBack }: StoryHeaderProps) => {
  const { t, language } = useTranslation();

  return (
    <div className="space-y-4">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="me-2 h-4 w-4" />
        {t('common.back')}
      </Button>

      <div className="islamic-gradient rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm opacity-80">#{prophet.order}</span>
          <Badge variant="outline" className="border-white/30 text-white text-xs">
            <BookOpen className="me-1 h-3 w-3" />
            {prophet.quranMentionCount} {t('stories.quranMentions')}
          </Badge>
        </div>

        <h1 className="text-3xl font-bold">{prophet.name[language]}</h1>
        {language !== 'ar' && (
          <p className="arabic-text text-xl opacity-90 mt-1">{prophet.name.ar}</p>
        )}
        <p className="text-lg opacity-90 mt-1">{prophet.title[language]}</p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="opacity-70">{t('stories.era')}</span>
            <p className="font-medium">{prophet.era[language]}</p>
          </div>
          <div>
            <span className="opacity-70">{t('stories.nation')}</span>
            <p className="font-medium">{prophet.nation[language]}</p>
          </div>
        </div>

        {prophet.miracles.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-1 text-sm opacity-70 mb-2">
              <Sparkles className="h-3 w-3" />
              {t('stories.miracles')}
            </div>
            <div className="flex flex-wrap gap-2">
              {prophet.miracles.map((m, i) => (
                <Badge key={i} variant="outline" className="border-white/30 text-white text-xs">
                  <Star className="me-1 h-3 w-3 fill-current" />
                  {m[language]}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
