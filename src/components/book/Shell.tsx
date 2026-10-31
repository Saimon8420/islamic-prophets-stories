import type { ReactNode } from 'react';
import { BookOpen, Hourglass, Network, Bookmark, Search, Settings, Moon, Sun, Baby } from 'lucide-react';
import { Seal } from './Vignette';
import { useTranslation } from '../../i18n/useTranslation';
import { useStore } from '../../store/useStore';
import { useTheme } from '../../hooks/useTheme';

export type View = 'stories' | 'timeline' | 'familyTree' | 'bookmarks' | 'search';

const NAV: { id: View; key: 'navStories' | 'navTimeline' | 'navTree' | 'navSaved' | 'navSearch'; Icon: typeof BookOpen }[] = [
  { id: 'stories', key: 'navStories', Icon: BookOpen },
  { id: 'familyTree', key: 'navTree', Icon: Network },
  { id: 'timeline', key: 'navTimeline', Icon: Hourglass },
  { id: 'bookmarks', key: 'navSaved', Icon: Bookmark },
  { id: 'search', key: 'navSearch', Icon: Search },
];

export function TopBar({ view, onView, onSettings }: { view: View | null; onView: (v: View) => void; onSettings: () => void }) {
  const { t } = useTranslation();
  const { isDark, setTheme } = useTheme();
  const kidsMode = useStore((s) => s.kidsMode);
  const setKidsMode = useStore((s) => s.setKidsMode);
  return (
    <header className="bk-top">
      <div className="bk-top-in">
        <button type="button" className="bk-brand" onClick={() => onView('stories')}>
          <Seal />
          <span style={{ display: 'block' }}>
            <b>{t('book.appName')}</b>
            <span>{t('book.tagline')}</span>
          </span>
        </button>
        <nav className="bk-nav" aria-label={t('book.appName')}>
          {NAV.filter((n) => n.id !== 'search').map(({ id, key, Icon }) => (
            <button key={id} type="button" aria-current={view === id ? 'page' : undefined} onClick={() => onView(id)}>
              <Icon className="bk-ico" aria-hidden />
              <span className="l">{t(`book.${key}`)}</span>
            </button>
          ))}
        </nav>
        <div className="bk-grow" />
        <button type="button" className="bk-iconbtn bk-search-btn" aria-label={t('book.navSearch')} aria-pressed={view === 'search'} onClick={() => onView('search')}>
          <Search className="bk-ico" />
        </button>
        <button type="button" className="bk-iconbtn" aria-label={t('settings.kidsMode')} title={t('settings.kidsMode')} aria-pressed={kidsMode} onClick={() => setKidsMode(!kidsMode)}>
          <Baby className="bk-ico" />
        </button>
        <button type="button" className="bk-iconbtn" aria-label={t('book.nightMode')} title={t('book.nightMode')} aria-pressed={isDark} onClick={() => setTheme(isDark ? 'light' : 'dark')}>
          {isDark ? <Sun className="bk-ico" /> : <Moon className="bk-ico" />}
        </button>
        <button type="button" className="bk-iconbtn" aria-label={t('book.settings')} onClick={onSettings}>
          <Settings className="bk-ico" />
        </button>
      </div>
    </header>
  );
}

export function TabBar({ view, onView }: { view: View | null; onView: (v: View) => void }) {
  const { t } = useTranslation();
  return (
    <nav className="bk-tabbar" aria-label={t('book.appName')}>
      {NAV.map(({ id, key, Icon }) => (
        <button key={id} type="button" aria-current={view === id ? 'page' : undefined} onClick={() => onView(id)}>
          <Icon className="bk-ico" aria-hidden />
          {t(`book.${key}`)}
        </button>
      ))}
    </nav>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bk-foot">
      <div className="bk-wrap cols">
        <div>
          <h3>{t('footer.about')}</h3>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{t('stories.subtitle')}</p>
        </div>
        <div>
          <h3>{t('footer.dataSources')}</h3>
          <ul>
            <li>{t('footer.quranSource')}</li>
            <li>{t('footer.hadithSource')}</li>
            <li>{t('footer.ibnKathirSource')}</li>
          </ul>
        </div>
        <div>
          <h3>{t('footer.developer')}</h3>
          <a href="https://my-portfolio-seven-delta-60.vercel.app/" target="_blank" rel="noopener noreferrer">
            {t('footer.developerDesc')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHead({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <div className="bk-pagehead">
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
      {children}
    </div>
  );
}
