import { BookOpen, BookMarked, ScrollText } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { Reference } from '../../types/prophet';
import { useTranslation } from '../../i18n/useTranslation';

interface ReferenceTagProps {
  reference: Reference;
  onClick?: () => void;
}

export const ReferenceTag = ({ reference, onClick }: ReferenceTagProps) => {
  const { t } = useTranslation();

  const getLabel = () => {
    switch (reference.type) {
      case 'quran': {
        const ayahRange = reference.ayahEnd
          ? `${reference.ayahStart}-${reference.ayahEnd}`
          : String(reference.ayahStart);
        return `${reference.surahName.en} ${reference.surah}:${ayahRange}`;
      }
      case 'ibn-kathir':
        return `${t('references.ibnKathir')}: ${reference.section}`;
      case 'hadith':
        return `${reference.collection} #${reference.hadithNumber}`;
    }
  };

  const getIcon = () => {
    switch (reference.type) {
      case 'quran': return <BookOpen className="h-3 w-3" />;
      case 'ibn-kathir': return <BookMarked className="h-3 w-3" />;
      case 'hadith': return <ScrollText className="h-3 w-3" />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'reference-tag',
        reference.type === 'quran' && 'reference-tag-quran',
        reference.type === 'ibn-kathir' && 'reference-tag-ibn-kathir',
        reference.type === 'hadith' && 'reference-tag-hadith',
      )}
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </button>
  );
};
