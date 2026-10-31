import { useEffect, useState } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
import { TopBar, TabBar, Footer, type View } from './components/book/Shell';
import { Library } from './components/book/Library';
import { BookReader } from './components/book/BookReader';
import { Shajara } from './components/book/Shajara';
import { TimelineScroll } from './components/book/TimelineScroll';
import { SavedView, SearchBook } from './components/book/SavedAndSearch';
import { SettingsDialog } from './components/settings/SettingsDialog';
import { prophetsMeta } from './data/prophets-meta';
import { useStore } from './store/useStore';
import { useTheme } from './hooks/useTheme';
import { useLanguageEffect } from './hooks/useLanguage';
import { isNativePlatform } from './services/platformService';
import type { ProphetId } from './types/prophet';

type Route = { view: View } | { read: ProphetId; chapter?: string };

const VIEWS: View[] = ['stories', 'timeline', 'familyTree', 'bookmarks', 'search'];

// #stories, #timeline … or #read/adam(/chapter-id)
function parse(hash: string): Route | null {
  const h = hash.replace(/^#/, '');
  if (h.startsWith('read/')) {
    const [, id, chapter] = h.split('/');
    if (prophetsMeta.some((p) => p.id === id)) return { read: id as ProphetId, chapter: chapter || undefined };
  }
  if (VIEWS.includes(h as View)) return { view: h as View };
  return null;
}
const toHash = (r: Route) => ('read' in r ? `#read/${r.read}${r.chapter ? '/' + r.chapter : ''}` : `#${r.view}`);

function App() {
  const lastTab = useStore((s) => s.lastTab);
  const setLastTab = useStore((s) => s.setLastTab);
  const setLastProphet = useStore((s) => s.setLastProphet);
  const [route, setRoute] = useState<Route>(() => parse(location.hash) ?? { view: VIEWS.includes(lastTab as View) ? (lastTab as View) : 'stories' });
  const [settingsOpen, setSettingsOpen] = useState(false);

  useTheme();
  useLanguageEffect();

  useEffect(() => {
    const on = () => setRoute(parse(location.hash) ?? { view: 'stories' });
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);

  // Android back button follows the same history
  useEffect(() => {
    if (!isNativePlatform()) return;
    const sub = CapacitorApp.addListener('backButton', () => {
      if (location.hash && location.hash !== '#stories') history.back();
      else CapacitorApp.exitApp();
    });
    return () => {
      sub.then((s) => s.remove());
    };
  }, []);

  const go = (r: Route) => {
    if (toHash(r) !== location.hash) location.hash = toHash(r);
    setRoute(r);
    if ('view' in r) setLastTab(r.view);
    window.scrollTo({ top: 0 });
  };
  const open = (id: ProphetId, chapter?: string) => {
    setLastProphet(id);
    go({ read: id, chapter });
  };

  const view = 'view' in route ? route.view : null;

  return (
    <div className="bk">
      <TopBar view={view ?? 'stories'} onView={(v) => go({ view: v })} onSettings={() => setSettingsOpen(true)} />
      {'read' in route ? (
        <BookReader key={`${route.read}-${route.chapter ?? ''}`} prophetId={route.read} initialChapterId={route.chapter} onBack={() => go({ view: 'stories' })} />
      ) : view === 'timeline' ? (
        <TimelineScroll onOpen={open} />
      ) : view === 'familyTree' ? (
        <Shajara onOpen={open} />
      ) : view === 'bookmarks' ? (
        <SavedView onOpen={open} />
      ) : view === 'search' ? (
        <SearchBook onOpen={open} />
      ) : (
        <Library onOpen={open} />
      )}
      <Footer />
      <TabBar view={view ?? 'stories'} onView={(v) => go({ view: v })} />
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
}

export default App;
