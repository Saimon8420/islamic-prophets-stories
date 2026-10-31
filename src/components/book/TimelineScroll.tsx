import { prophetsMeta } from '../../data/prophets-meta';
import { useTranslation } from '../../i18n/useTranslation';
import { Vignette } from './Vignette';
import { PageHead } from './Shell';
import type { ProphetId } from '../../types/prophet';

// Eras in the order the prophets came; the Quran gives no dates.
const ERAS: { key: 1 | 2 | 3 | 4 | 5; ids: ProphetId[] }[] = [
  { key: 1, ids: ['adam', 'idris', 'nuh'] },
  { key: 2, ids: ['hud', 'salih'] },
  { key: 3, ids: ['ibrahim', 'lut', 'ismail', 'ishaq', 'yaqub', 'yusuf', 'ayyub', 'shuayb'] },
  { key: 4, ids: ['musa', 'harun', 'dhul-kifl', 'dawud', 'sulayman', 'ilyas', 'al-yasa', 'yunus', 'zakariya', 'yahya', 'isa'] },
  { key: 5, ids: ['muhammad'] },
];

export function TimelineScroll({ onOpen }: { onOpen: (id: ProphetId) => void }) {
  const { t, language } = useTranslation();
  return (
    <main className="bk-main">
      <div className="bk-wrap bk-time">
        <PageHead title={t('book.timeTitle')} intro={t('book.timeIntro')} />
        {ERAS.map((era) => (
          <section key={era.key}>
            <div className="bk-era">
              <h2>{t(`book.era${era.key}`)}</h2>
              <p>{t(`book.era${era.key}s`)}</p>
            </div>
            <div className="bk-tl">
              {era.ids.map((id) => {
                const p = prophetsMeta.find((m) => m.id === id)!;
                return (
                  <div className="bk-tl-item" key={id}>
                    <button type="button" className="card" onClick={() => onOpen(id)}>
                      <b>{p.name[language]}</b>
                      <span>{p.title[language]}</span>
                      {p.keyEvents[0] && <em>{p.keyEvents.slice(0, 2).map((e) => e[language]).join(' · ')}</em>}
                    </button>
                    <span className="medal" aria-hidden>
                      <Vignette id={id} />
                    </span>
                    <span className="spacer" />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
