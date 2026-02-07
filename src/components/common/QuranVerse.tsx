import { BookOpen } from 'lucide-react';
import { ArabicText } from './ArabicText';
import { Badge } from '../ui/badge';
import type { QuranReference } from '../../types/prophet';
import { useTranslation } from '../../i18n/useTranslation';

interface QuranVerseProps {
  reference: QuranReference;
}

export const QuranVerse = ({ reference }: QuranVerseProps) => {
  const { language } = useTranslation();
  const ayahRange = reference.ayahEnd
    ? `${reference.ayahStart}-${reference.ayahEnd}`
    : String(reference.ayahStart);

  return (
    <div className="quran-verse-block">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="h-4 w-4 text-primary" />
        <Badge variant="quran">
          {reference.surahName[language]} ({reference.surah}:{ayahRange})
        </Badge>
      </div>

      {reference.arabicText && (
        <div className="mb-3 text-center">
          <ArabicText large className="text-foreground leading-loose">
            {reference.arabicText}
          </ArabicText>
        </div>
      )}

      {reference.translation && (
        <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-3 mt-3">
          "{reference.translation[language]}"
        </p>
      )}
    </div>
  );
};
