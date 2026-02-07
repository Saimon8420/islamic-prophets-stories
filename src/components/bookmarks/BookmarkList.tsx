import { Bookmark, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useBookmarks } from '../../hooks/useBookmarks';
import { useTranslation } from '../../i18n/useTranslation';
import { prophetsMeta } from '../../data/prophets-meta';
import type { ProphetId } from '../../types/prophet';

interface BookmarkListProps {
  onNavigate: (prophetId: ProphetId, chapterId: string) => void;
}

export const BookmarkList = ({ onNavigate }: BookmarkListProps) => {
  const { t, language } = useTranslation();
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold islamic-text-gradient">{t('bookmarks.title')}</h2>
        <p className="text-muted-foreground">{t('bookmarks.subtitle')}</p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <Bookmark className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">{t('bookmarks.noBookmarks')}</p>
        </div>
      ) : (
        <div className="space-y-3 max-w-2xl mx-auto">
          {bookmarks.map((bookmark) => {
            const prophet = prophetsMeta.find((p) => p.id === bookmark.prophetId);
            return (
              <Card key={bookmark.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <button
                      onClick={() => onNavigate(bookmark.prophetId, bookmark.chapterId)}
                      className="flex-1 text-left"
                    >
                      <p className="font-medium text-sm">
                        {prophet?.name[language]} — {t('bookmarks.savedFrom')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        "{bookmark.snippet}..."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(bookmark.createdAt).toLocaleDateString()}
                      </p>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => removeBookmark(bookmark.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
