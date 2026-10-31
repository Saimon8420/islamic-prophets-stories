import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Trash2 } from 'lucide-react';
import { prophetsMeta } from '../../data/prophets-meta';
import { useBookmarks } from '../../hooks/useBookmarks';
import { useTranslation } from '../../i18n/useTranslation';
import { loadProphetChapters } from '../../services/contentLoader';
import { localNum } from '../../lib/num';
import { Vignette } from './Vignette';
import { PageHead } from './Shell';
import type { Language, ProphetId, StoryChapter } from '../../types/prophet';

function EmptyScroll() {
  return (
    <svg viewBox="0 0 160 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M30 18h100a10 10 0 0 1 0 20H30zM30 38h100v24a10 10 0 0 1-10 10H30" />
      <path d="M30 18a10 10 0 0 0 0 20M44 50h60M44 58h40" opacity=".6" />
    </svg>
  );
}

export function SavedView({ onOpen }: { onOpen: (id: ProphetId, chapterId?: string) => void }) {
  const { t, language } = useTranslation();
  const { bookmarks, removeBookmark } = useBookmarks();
  const sorted = [...bookmarks].sort((a, b) => b.createdAt - a.createdAt);
  return (
    <main className="bk-main">
      <div className="bk-wrap bk-tree">
        <PageHead title={t('book.savedTitle')} />
        {sorted.length === 0 ? (
          <div className="bk-empty">
            <EmptyScroll />
            {t('book.savedEmpty')}
          </div>
        ) : (
          <div className="bk-list">
            {sorted.map((b) => {
              const p = prophetsMeta.find((m) => m.id === b.prophetId);
              return (
                <div key={b.id} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <button type="button" className="bk-note" onClick={() => onOpen(b.prophetId, b.chapterId)}>
                    <span className="v">
                      <Vignette id={b.prophetId} />
                    </span>
                    <span style={{ display: 'block' }}>
                      <b>{p?.name[language]}</b>
                      <p>{b.snippet}…</p>
                      <small>{new Date(b.createdAt).toLocaleDateString(language === 'bn' ? 'bn-BD' : language === 'ar' ? 'ar' : 'en-GB', { dateStyle: 'medium' })}</small>
                    </span>
                  </button>
                  <button type="button" className="bk-iconbtn" aria-label={t('book.remove')} title={t('book.remove')} onClick={() => removeBookmark(b.id)}>
                    <Trash2 className="bk-ico" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

/* every chapter of every book, per language, loaded once */
const cache = new Map<Language, Promise<{ id: ProphetId; chapters: StoryChapter[] }[]>>();
function allChapters(lang: Language) {
  if (!cache.has(lang))
    cache.set(
      lang,
      Promise.all(prophetsMeta.map(async (p) => ({ id: p.id, chapters: await loadProphetChapters(p.id, lang).catch(() => []) }))),
    );
  return cache.get(lang)!;
}

interface Hit {
  prophetId: ProphetId;
  chapterId?: string;
  title: string;
  before: string;
  match: string;
  after: string;
}

function snippet(text: string, at: number, len: number) {
  // start and end on spaces so no letter is cut in half
  let s = Math.max(0, at - 60);
  if (s > 0) s = text.indexOf(' ', s) + 1 || s;
  if (s > at) s = at;
  let e = Math.min(text.length, at + len + 90);
  if (e < text.length) e = text.lastIndexOf(' ', e) > at + len ? text.lastIndexOf(' ', e) : e;
  return { before: (s > 0 ? '…' : '') + text.slice(s, at), match: text.slice(at, at + len), after: text.slice(at + len, e) + (e < text.length ? '…' : '') };
}

export function SearchBook({ onOpen }: { onOpen: (id: ProphetId, chapterId?: string) => void }) {
  const { t, language } = useTranslation();
  const [q, setQ] = useState('');
  const [data, setData] = useState<{ id: ProphetId; chapters: StoryChapter[] }[] | null>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
    let on = true;
    allChapters(language).then((d) => on && setData(d));
    return () => {
      on = false;
    };
  }, [language]);

  const hits = useMemo<Hit[]>(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    const out: Hit[] = [];
    for (const p of prophetsMeta) {
      const name = p.name[language];
      for (const field of [name, p.title[language], ...p.keyEvents.map((e) => e[language])]) {
        const at = field.toLowerCase().indexOf(needle);
        if (at >= 0) {
          out.push({ prophetId: p.id, title: name, ...snippet(field, at, needle.length) });
          break;
        }
      }
    }
    for (const book of data ?? []) {
      const name = prophetsMeta.find((m) => m.id === book.id)!.name[language];
      for (const c of book.chapters) {
        for (const para of c.paragraphs) {
          const at = para.text.toLowerCase().indexOf(needle);
          if (at >= 0) {
            out.push({ prophetId: book.id, chapterId: c.id, title: `${name} · ${c.title}`, ...snippet(para.text, at, needle.length) });
            break; // one hit per chapter keeps the list readable
          }
        }
        if (out.length > 80) return out;
      }
    }
    return out;
  }, [q, data, language]);

  return (
    <main className="bk-main">
      <div className="bk-wrap bk-tree">
        <PageHead title={t('book.searchTitle')} intro={t('book.searchHint')} />
        <div className="bk-search">
          <Search className="bk-ico" aria-hidden />
          <input ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('book.searchPlaceholder')} aria-label={t('book.searchTitle')} />
        </div>
        {q.trim().length >= 2 && (
          <div className="bk-list">
            {hits.length === 0 ? (
              data ? (
                <div className="bk-empty">{t('book.searchEmpty', { q: q.trim() })}</div>
              ) : (
                <div className="bk-empty">{t('common.loading')}</div>
              )
            ) : (
              <>
                <p style={{ margin: 0, color: 'var(--bk-ink-3)', fontSize: 14 }}>{t('book.resultsN', { n: localNum(hits.length, language) })}</p>
                {hits.map((h, i) => (
                  <button key={i} type="button" className="bk-note" onClick={() => onOpen(h.prophetId, h.chapterId)}>
                    <span className="v">
                      <Vignette id={h.prophetId} />
                    </span>
                    <span style={{ display: 'block' }}>
                      <b>{h.title}</b>
                      <p>
                        {h.before}
                        <mark>{h.match}</mark>
                        {h.after}
                      </p>
                    </span>
                  </button>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
