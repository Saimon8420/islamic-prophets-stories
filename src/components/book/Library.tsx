import { BookOpen } from 'lucide-react';
import { prophetsMeta } from '../../data/prophets-meta';
import { useStore } from '../../store/useStore';
import { useTranslation } from '../../i18n/useTranslation';
import { localNum } from '../../lib/num';
import { Vignette, StarRule } from './Vignette';
import type { ProphetId } from '../../types/prophet';

export function Library({ onOpen }: { onOpen: (id: ProphetId, chapterId?: string) => void }) {
  const { t, language } = useTranslation();
  const progress = useStore((s) => s.readingProgress);
  const lastProphet = useStore((s) => s.lastProphet);
  const n = (x: number) => localNum(x, language);

  const last = lastProphet ? prophetsMeta.find((p) => p.id === lastProphet) : null;
  const lastProg = last ? progress[last.id] : undefined;
  const lastDone = lastProg?.completedChapters.length ?? 0;
  const lastIsFinished = last ? lastDone >= last.chapterCount : false;

  return (
    <main className="bk-main">
      <div className="bk-wrap bk-lib">
        <section className="bk-cover">
          <p className="bk-bism" lang="ar">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <h1>{t('book.appName')}</h1>
          <p>{t('book.coverText')}</p>
          <div className="bk-chips">
            <span>{t('book.srcQuran')}</span>
            <span>{t('book.srcHadith')}</span>
            <span>{t('book.srcIbnKathir')}</span>
          </div>
          <StarRule />
        </section>

        {last && !lastIsFinished && (
          <button type="button" className="bk-continue" onClick={() => onOpen(last.id, lastProg?.lastChapterId ?? undefined)}>
            <span className="v">
              <Vignette id={last.id} />
            </span>
            <span style={{ display: 'block' }}>
              <b>{t('book.continueTitle', { name: last.name[language] })}</b>
              <span>{lastDone > 0 ? `${n(lastDone)} / ${n(last.chapterCount)} · ${t('book.chapters')}` : last.title[language]}</span>
            </span>
            <span className="bk-grow" />
            <span className="bk-btn gold">
              <BookOpen className="bk-ico" />
              {t('book.open')}
            </span>
          </button>
        )}

        <div className="bk-sec-h">
          <h2>{t('book.contents')}</h2>
          <span>{t('book.contentsSub')}</span>
        </div>
        <div className="bk-toc">
          {prophetsMeta.map((p) => {
            const done = progress[p.id]?.completedChapters.length ?? 0;
            const finished = p.chapterCount > 0 && done >= p.chapterCount;
            return (
              <button key={p.id} type="button" className={`bk-leaf${finished ? ' done' : ''}`} onClick={() => onOpen(p.id)}>
                <span className="num">{n(p.order)}</span>
                <span className="v">
                  <Vignette id={p.id} />
                </span>
                <b>{p.name[language]}</b>
                {language !== 'ar' && (
                  <span className="ar" lang="ar">
                    {p.name.ar}
                  </span>
                )}
                <span className="t">{p.title[language]}</span>
                <span className="meta">
                  <span>{t('book.chaptersCount', { n: n(p.chapterCount) })}</span>
                  <span className="bar">
                    <i style={{ width: `${p.chapterCount ? Math.min(100, (done / p.chapterCount) * 100) : 0}%` }} />
                  </span>
                  <span>{finished ? t('book.finished') : done ? `${n(done)}/${n(p.chapterCount)}` : ''}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
