import { Search, User, BookOpen } from 'lucide-react';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useSearch } from '../../hooks/useSearch';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetId } from '../../types/prophet';

interface SearchViewProps {
  onSelectProphet: (prophetId: ProphetId) => void;
}

export const SearchView = ({ onSelectProphet }: SearchViewProps) => {
  const { t } = useTranslation();
  const { query, results, searching, performSearch } = useSearch();

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold islamic-text-gradient">{t('search.title')}</h2>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="ps-10"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={(e) => performSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {searching && (
          <p className="text-center text-muted-foreground">{t('common.loading')}</p>
        )}

        {query && !searching && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">{t('search.noResults')}</p>
            <p className="text-sm text-muted-foreground">{t('search.tryDifferent')}</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {t('search.resultsFor', { query })} ({results.length})
            </p>
            {results.map((result, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => onSelectProphet(result.prophetId)}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {result.matchType === 'name' || result.matchType === 'title' ? (
                        <User className="h-4 w-4 text-primary" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{result.prophetName}</span>
                        <Badge variant="secondary" className="text-xs">
                          {result.matchType}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{result.snippet}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
