import { prophetsMeta } from '../../data/prophets-meta';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetId } from '../../types/prophet';

interface TimelineViewProps {
  onSelectProphet: (prophetId: ProphetId) => void;
}

export const TimelineView = ({ onSelectProphet }: TimelineViewProps) => {
  const { t, language } = useTranslation();

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold islamic-text-gradient">{t('timeline.title')}</h2>
        <p className="text-muted-foreground">{t('timeline.subtitle')}</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

        <div className="space-y-0">
          {prophetsMeta.map((prophet, index) => (
            <div key={prophet.id} className="relative flex items-start gap-4 py-4 group">
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full islamic-gradient flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {prophet.order}
                </div>
              </div>

              {/* Content */}
              <button
                onClick={() => onSelectProphet(prophet.id)}
                className="flex-1 text-left p-4 rounded-xl border bg-card hover:shadow-md transition-all group-hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{prophet.name[language]}</h3>
                    {language !== 'ar' && (
                      <span className="arabic-text text-sm text-muted-foreground">{prophet.name.ar}</span>
                    )}
                  </div>
                  <span className="text-xs text-primary">{t('timeline.viewStory')} &rarr;</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{prophet.title[language]}</p>
                <p className="text-xs text-muted-foreground mt-1">{prophet.era[language]}</p>

                {prophet.keyEvents.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
                    {prophet.keyEvents[0][language]}
                  </p>
                )}
              </button>

              {/* Connector to next */}
              {index < prophetsMeta.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
