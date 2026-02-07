import { useStore } from '../store/useStore';
import type { ProphetId, Bookmark } from '../types/prophet';

export function useBookmarks(prophetId?: ProphetId) {
  const bookmarks = useStore((state) => state.bookmarks);
  const addBookmark = useStore((state) => state.addBookmark);
  const removeBookmark = useStore((state) => state.removeBookmark);

  const filtered = prophetId
    ? bookmarks.filter((b) => b.prophetId === prophetId)
    : bookmarks;

  const isBookmarked = (paragraphId: string) =>
    bookmarks.some((b) => b.paragraphId === paragraphId);

  const toggle = (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => {
    const existing = bookmarks.find(
      (b) =>
        b.prophetId === bookmark.prophetId &&
        b.chapterId === bookmark.chapterId &&
        b.paragraphId === bookmark.paragraphId
    );
    if (existing) {
      removeBookmark(existing.id);
    } else {
      addBookmark({
        ...bookmark,
        id: `${bookmark.prophetId}-${bookmark.chapterId}-${Date.now()}`,
        createdAt: Date.now(),
      });
    }
  };

  return { bookmarks: filtered, isBookmarked, toggle, removeBookmark };
}
