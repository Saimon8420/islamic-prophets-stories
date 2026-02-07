import { prophetsMeta } from '../../data/prophets-meta';
import { ProphetCard } from './ProphetCard';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetId } from '../../types/prophet';

interface ProphetListProps {
  onSelectProphet: (prophetId: ProphetId) => void;
}

export const ProphetList = ({ onSelectProphet }: ProphetListProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold islamic-text-gradient">{t('stories.title')}</h2>
        <p className="text-muted-foreground">{t('stories.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {prophetsMeta.map((prophet) => (
          <ProphetCard
            key={prophet.id}
            prophet={prophet}
            onSelect={() => onSelectProphet(prophet.id)}
          />
        ))}
      </div>
    </div>
  );
};
