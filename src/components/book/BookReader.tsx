import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, List, Type, Baby, X, BookOpen } from 'lucide-react';
import { prophetsMeta } from '../../data/prophets-meta';
import { useProphetData } from '../../hooks/useProphetData';
import { useReadingProgress } from '../../hooks/useReadingProgress';
import { useBookmarks } from '../../hooks/useBookmarks';
import { useStore } from '../../store/useStore';
import { useTranslation } from '../../i18n/useTranslation';
import { localNum } from '../../lib/num';
import { Vignette, StarRule } from './Vignette';
import { KidsBook } from './KidsBook';
import type { FontSize } from '../../types/store';
import type { ProphetId, Reference, StoryChapter, StoryParagraph, ProphetMeta, Lesson } from '../../types/prophet';

const SIZES: FontSize[] = ['small', 'medium', 'large', 'xlarge'];

function useWide() {
  const q = '(min-width: 900px)';
  const [wide, setWide] = useState(() => matchMedia(q).matches);
  useEffect(() => {
    const m = matchMedia(q);
    const on = () => setWide(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return wide;
}

/* ───────── one source tag, opens its detail ───────── */
function RefTag({ r, open, onToggle }: { r: Reference; open: boolean; onToggle: () => void }) {
  const { t, language } = useTranslation();
  const n = (x: number | string) => localNum(x, language);
  let label = '';
  let cls = '';
  if (r.type === 'quran') label = `${r.surahName[language]} ${n(r.surah)}:${n(r.ayahStart)}${r.ayahEnd ? '–' + n(r.ayahEnd) : ''}`;
  if (r.type === 'hadith') {
    label = `${r.collection} ${n(r.hadithNumber)}`;
    cls = ' hadith';
  }
  if (r.type === 'ibn-kathir') {
    label = `${t('references.ibnKathir')}: ${r.section}`;
    cls = ' ibn';
  }
  return (
    <button type="button" className={`bk-ref${cls}`} aria-expanded={open} onClick={onToggle}>
      {label}
    </button>
  );
}

function RefDetail({ r }: { r: Reference }) {
  const { t, language } = useTranslation();
  if (r.type === 'quran')
    return (
      <div className="bk-ref-detail">
        {r.arabicText && (
          <p className="a" lang="ar">
            {r.arabicText}
          </p>
        )}
        {r.translation?.[language]}
      </div>
    );
  if (r.type === 'hadith')
    return (
      <div className="bk-ref-detail">
        {language !== 'ar' && r.text.ar && (
          <p className="a" lang="ar">
            {r.text.ar}
          </p>
        )}
        {r.text[language]}
        <small>
          {t('book.narrator', { name: r.narrator })} · {t(`references.${r.grade}`)}
        </small>
      </div>
    );
  return (
    <div className="bk-ref-detail">
      {r.summary[language]}
      <small>
        {r.book} · {r.chapter}
      </small>
    </div>
  );
}

function Paragraph({
  p,
  first,
  marked,
  onMark,
}: {
  p: StoryParagraph;
  first: boolean;
  marked: boolean;
  onMark: () => void;
}) {
  const { t, language } = useTranslation();
  const [openRef, setOpenRef] = useState<number | null>(null);
  const verses = p.references.filter((r) => r.type === 'quran' && r.arabicText);
  const tags = p.references.filter((r) => !(r.type === 'quran' && r.arabicText));
  const n = (x: number) => localNum(x, language);
  return (
    <div className={`bk-para${first ? ' first' : ''}`}>
      <p>{p.text}</p>
      <button type="button" className="bk-mark" aria-pressed={marked} aria-label={marked ? t('book.unbookmark') : t('book.bookmark')} title={marked ? t('book.unbookmark') : t('book.bookmark')} onClick={onMark}>
        {marked ? <BookmarkCheck className="bk-ico" /> : <Bookmark className="bk-ico" />}
      </button>
      {verses.map((r, i) =>
        r.type === 'quran' ? (
          <div className="bk-ayah" key={i}>
            <p className="a" lang="ar">
              {r.arabicText}
            </p>
            {language !== 'ar' && r.translation && <p className="tr">{r.translation[language]}</p>}
            <div className="bk-refs">
              <span className="bk-ref">
                {r.surahName[language]} {n(r.surah)}:{n(r.ayahStart)}
                {r.ayahEnd ? `–${n(r.ayahEnd)}` : ''}
              </span>
            </div>
          </div>
        ) : null,
      )}
      {tags.length > 0 && (
        <>
          <div className="bk-refs">
            {tags.map((r, i) => (
              <RefTag key={i} r={r} open={openRef === i} onToggle={() => setOpenRef(openRef === i ? null : i)} />
            ))}
          </div>
          {openRef !== null && tags[openRef] && <RefDetail r={tags[openRef]} />}
        </>
      )}
    </div>
  );
}

/* ───────── the prophet's title page ───────── */
function TitlePage({
  prophet,
  chapters,
  lessons,
  completed,
  onChapter,
}: {
  prophet: ProphetMeta;
  chapters: StoryChapter[];
  lessons: Lesson[];
  completed: string[];
  onChapter: (i: number) => void;
}) {
  const { t, language } = useTranslation();
  const n = (x: number) => localNum(x, language);
  return (
    <>
      <div className="bk-title">
        <div className="v">
          <Vignette id={prophet.id} />
        </div>
        <h1>{prophet.name[language]}</h1>
        {language !== 'ar' && (
          <p className="ar" lang="ar">
            {prophet.name.ar}
          </p>
        )}
        <p className="sub">{prophet.title[language]}</p>
      </div>
      <div className="bk-facts">
        <div>
          <small>{t('book.era')}</small>
          <span>{prophet.era[language]}</span>
        </div>
        <div>
          <small>{t('book.nation')}</small>
          <span>{prophet.nation[language]}</span>
        </div>
        {prophet.quranMentionCount > 0 && (
          <div>
            <small>{t('book.mentions')}</small>
            <span>{t('book.mentionsN', { n: n(prophet.quranMentionCount) })}</span>
          </div>
        )}
      </div>
      {prophet.miracles.length > 0 && (
        <div>
          <h3 className="bk-h">{t('book.miracles')}</h3>
          <div className="bk-miracles">
            {prophet.miracles.map((m, i) => (
              <span key={i}>{m[language]}</span>
            ))}
          </div>
        </div>
      )}
      {chapters.length > 0 && (
        <div>
          <h3 className="bk-h">{t('book.chapters')}</h3>
          <ol className="bk-chlist">
            {chapters.map((c, i) => (
              <li key={c.id}>
                <button type="button" onClick={() => onChapter(i)}>
                  <span className="n">{n(i + 1)}</span>
                  <span>{c.title}</span>
                  <span className="dots" aria-hidden />
                  {completed.includes(c.id) && <span className="ok">{t('book.finished')}</span>}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
      {lessons.length > 0 && (
        <div>
          <h3 className="bk-h">{t('book.lessons')}</h3>
          {lessons.map((l) => (
            <div className="bk-lesson" key={l.id}>
              <b>{l.title[language]}</b>
              <p>{l.description[language]}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ───────── the book ───────── */
export function BookReader({ prophetId, initialChapterId, onBack }: { prophetId: ProphetId; initialChapterId?: string; onBack: () => void }) {
  const { t, language } = useTranslation();
  const n = (x: number) => localNum(x, language);
  const prophet = prophetsMeta.find((p) => p.id === prophetId)!;
  const kidsMode = useStore((s) => s.kidsMode);
  const setKidsMode = useStore((s) => s.setKidsMode);
  const fontSize = useStore((s) => s.fontSize);
  const setFontSize = useStore((s) => s.setFontSize);
  const showQuran = useStore((s) => s.showQuranContent);
  const showIbnKathir = useStore((s) => s.showIbnKathirContent);
  const showHadith = useStore((s) => s.showHadithContent);
  const { chapters, kidsChapters, quiz, lessons, loading, error } = useProphetData(prophetId);
  const { completedChapters, markComplete, setPosition } = useReadingProgress(prophetId);
  const { isBookmarked, toggle } = useBookmarks(prophetId);
  const wide = useWide();

  // -1 = title page; 0.. = chapters
  const [index, setIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [drawer, setDrawer] = useState(false);
  const toEnd = useRef(false);
  const flow = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);

  const list = chapters ?? [];
  const resolved = index ?? (initialChapterId ? Math.max(0, list.findIndex((c) => c.id === initialChapterId)) : -1);
  const chapter = resolved >= 0 ? list[resolved] : null;

  const visible = chapter
    ? chapter.paragraphs.filter(
        (p) => !((p.phase === 'quran' && !showQuran) || (p.phase === 'ibn-kathir' && !showIbnKathir) || (p.phase === 'hadith' && !showHadith)),
      )
    : [];

  // remember where the reader is
  useEffect(() => {
    if (chapter) setPosition(chapter.id, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter?.id]);

  // measure the two-page spreads
  const measure = useCallback(() => {
    const f = flow.current;
    const v = viewport.current;
    if (!wide || !f || !v) {
      setPages(1);
      return;
    }
    const h = Math.max(520, Math.min(780, window.innerHeight - 250));
    f.style.setProperty('--bk-page-h', `${h}px`);
    // columns that don't fit run on sideways (leftwards in Arabic); count how
    // many viewport-widths the furthest block sits from the book's first page
    v.scrollLeft = 0; // a focused element must never scroll the page frame sideways
    const W = v.clientWidth;
    const fr = f.getBoundingClientRect();
    const rtl = getComputedStyle(f).direction === 'rtl';
    let far = 0;
    for (const el of Array.from(f.children)) {
      const r = (el as HTMLElement).getBoundingClientRect();
      far = Math.max(far, rtl ? fr.right - r.right : r.left - fr.left);
    }
    const count = Math.max(1, Math.floor(far / W + 0.02) + 1);
    setPages(count);
    if (toEnd.current) {
      toEnd.current = false;
      setPage(count - 1);
    } else setPage((p) => Math.min(p, count - 1));
  }, [wide]);

  useLayoutEffect(() => {
    measure();
  }, [measure, resolved, language, fontSize, visible.length, loading]);
  useEffect(() => {
    const on = () => measure();
    addEventListener('resize', on);
    document.fonts?.ready.then(on);
    return () => removeEventListener('resize', on);
  }, [measure]);
  // re-measure when a source detail opens or closes inside the pages
  useEffect(() => {
    const f = flow.current;
    if (!f || !wide) return;
    const mo = new MutationObserver(() => measure());
    mo.observe(f, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [measure, wide, resolved]);

  // a chapter counts as read once its last lines are reached
  useEffect(() => {
    if (!chapter) return;
    if (wide) {
      if (page === pages - 1 && pages > 0) markComplete(chapter.id);
      return;
    }
    const el = endRef.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && markComplete(chapter.id), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter?.id, page, pages, wide]);

  const goChapter = (i: number, atEnd = false) => {
    toEnd.current = atEnd;
    setIndex(i);
    setPage(0);
    setDrawer(false);
    if (!wide || !atEnd) top.current?.scrollIntoView({ block: 'start' });
  };
  const next = () => {
    if (wide && page < pages - 1) return setPage(page + 1);
    if (chapter) markComplete(chapter.id);
    if (resolved < list.length - 1) goChapter(resolved + 1);
  };
  const prev = () => {
    if (wide && page > 0) return setPage(page - 1);
    if (resolved > -1) goChapter(resolved - 1, true);
  };

  // arrow keys turn pages (direction follows the reading language)
  useEffect(() => {
    const rtl = language === 'ar';
    const on = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || drawer) return;
      if (e.key === 'ArrowRight') (rtl ? prev : next)();
      if (e.key === 'ArrowLeft') (rtl ? next : prev)();
    };
    addEventListener('keydown', on);
    return () => removeEventListener('keydown', on);
  });

  // swipe on touch screens
  const touch = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!wide || touch.current === null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    touch.current = null;
    if (Math.abs(dx) < 60) return;
    const forward = language === 'ar' ? dx > 0 : dx < 0;
    if (forward) next();
    else prev();
  };

  if (kidsMode && kidsChapters && kidsChapters.length > 0) {
    return <KidsBook prophet={prophet} chapters={kidsChapters} quiz={quiz ?? []} onBack={onBack} onFull={() => setKidsMode(false)} />;
  }

  const atStart = resolved <= -1 && page === 0;
  const atEnd = resolved >= list.length - 1 && (!wide || page >= pages - 1);
  const rtl = language === 'ar';
  const shift = wide ? page * (viewport.current?.clientWidth ?? 0) : 0;
  const Back = rtl ? ChevronRight : ChevronLeft;
  const Fwd = rtl ? ChevronLeft : ChevronRight;

  return (
    <main className="bk-main" ref={top} style={{ scrollMarginTop: 80 }}>
      <div className="bk-wrap bk-reader">
        <div className="bk-crumb">
          <button type="button" className="bk-btn line sm" onClick={onBack}>
            <Back className="bk-ico" />
            {t('book.backToContents')}
          </button>
          <span className="hide-sm">{prophet.name[language]}</span>
          {chapter && (
            <b className="hide-sm">
              › {t('book.chapterN', { n: n(resolved + 1) })}
            </b>
          )}
          <span className="bk-grow" />
          {list.length > 0 && (
            <button type="button" className="bk-btn line sm" onClick={() => setDrawer(true)}>
              <List className="bk-ico" />
              {t('book.chapters')}
            </button>
          )}
          {kidsChapters && kidsChapters.length > 0 && (
            <button type="button" className="bk-btn line sm" onClick={() => setKidsMode(true)}>
              <Baby className="bk-ico" />
              <span className="hide-sm">{t('book.forChildren')}</span>
            </button>
          )}
          <button
            type="button"
            className="bk-btn line sm"
            aria-label={t('book.textSize')}
            title={t('book.textSize')}
            onClick={() => setFontSize(SIZES[(SIZES.indexOf(fontSize) + 1) % SIZES.length])}
          >
            <Type className="bk-ico" />
            <span className="hide-sm">{t(`settings.font${fontSize === 'xlarge' ? 'XLarge' : fontSize[0].toUpperCase() + fontSize.slice(1)}` as 'settings.fontSmall')}</span>
          </button>
        </div>

        <div className={`bk-book${wide ? ' spread' : ''}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="bk-viewport" ref={viewport}>
            <div
              className="bk-flow"
              ref={flow}
              style={wide ? { transform: `translateX(${rtl ? shift : -shift}px)` } : undefined}
              aria-live="polite"
            >
              {loading && <p className="bk-empty">{t('common.loading')}</p>}
              {error && <p className="bk-empty">{t('errors.loadFailed')}</p>}
              {!loading && !error && resolved === -1 && (
                <TitlePage prophet={prophet} chapters={list} lessons={lessons ?? []} completed={completedChapters} onChapter={(i) => goChapter(i)} />
              )}
              {!loading && !error && resolved === -1 && list.length > 0 && (
                <div className="bk-chapter-end">
                  <button type="button" className="bk-btn gold" onClick={() => goChapter(0)}>
                    <BookOpen className="bk-ico" />
                    {t('book.startReading')}
                  </button>
                </div>
              )}
              {!loading && !error && list.length === 0 && resolved === -1 && <p className="bk-empty">{t('book.preparing')}</p>}
              {chapter && (
                <>
                  <div className="bk-illum">
                    <div className="in">
                      <small>{t('book.chapterNofM', { n: n(resolved + 1), m: n(list.length) })}</small>
                      <h2>{chapter.title}</h2>
                      {chapter.summary && <p>{chapter.summary}</p>}
                    </div>
                  </div>
                  {visible.map((p, i) => (
                    <Paragraph
                      key={p.id}
                      p={p}
                      first={i === 0}
                      marked={isBookmarked(p.id)}
                      onMark={() => toggle({ prophetId, chapterId: chapter.id, paragraphId: p.id, snippet: p.text.slice(0, 140) })}
                    />
                  ))}
                  <div className="bk-chapter-end" ref={endRef}>
                    <StarRule />
                    <p>{resolved < list.length - 1 ? t('book.chapterEnd', { n: n(resolved + 1) }) : t('book.bookEnd')}</p>
                    <div className="row">
                      {resolved < list.length - 1 ? (
                        <button type="button" className="bk-btn gold" onClick={() => goChapter(resolved + 1)}>
                          {t('book.nextChapter')}
                          <Fwd className="bk-ico" />
                        </button>
                      ) : (
                        <button type="button" className="bk-btn line" onClick={() => goChapter(-1)}>
                          {t('book.backToTitle')}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {wide && (
            <>
              {/* the first page of a spread is on the right in Arabic */}
              <span className="bk-folio l">{n(page * 2 + (rtl ? 2 : 1))}</span>
              <span className="bk-folio r">{n(page * 2 + (rtl ? 1 : 2))}</span>
            </>
          )}
        </div>

        <div className="bk-pager">
          <button type="button" className="bk-btn line" onClick={prev} disabled={atStart}>
            <Back className="bk-ico" />
            <span className="hide-sm">{t('book.prevPage')}</span>
          </button>
          <div className="bk-dots" role="group" aria-label={t('book.chapters')}>
            {[-1, ...list.map((_, i) => i)].map((i) => (
              <button
                key={i}
                type="button"
                aria-current={i === resolved}
                className={i >= 0 && completedChapters.includes(list[i].id) ? 'done' : ''}
                aria-label={i < 0 ? t('book.titlePage') : t('book.chapterN', { n: n(i + 1) })}
                onClick={() => goChapter(i)}
              >
                <i />
              </button>
            ))}
          </div>
          <button type="button" className="bk-btn gold" onClick={next} disabled={atEnd}>
            <span className="hide-sm">{t('book.nextPage')}</span>
            <Fwd className="bk-ico" />
          </button>
        </div>
        {wide && pages > 1 && (
          <p className="bk-pageinfo">{t('book.pageOf', { a: `${n(page * 2 + 1)}–${n(page * 2 + 2)}`, m: n(pages * 2) })}</p>
        )}
      </div>

      <Dialog.Root open={drawer} onOpenChange={setDrawer}>
        <Dialog.Portal>
          <Dialog.Overlay className="bk-scrim" />
          <Dialog.Content className="bk-drawer" aria-describedby={undefined}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Dialog.Title asChild>
                <h2>{prophet.name[language]}</h2>
              </Dialog.Title>
              <span className="bk-grow" />
              <Dialog.Close className="bk-iconbtn" aria-label={t('common.close')}>
                <X className="bk-ico" />
              </Dialog.Close>
            </div>
            <ol className="bk-chlist">
              <li>
                <button type="button" onClick={() => goChapter(-1)}>
                  <span className="n">·</span>
                  <span>{t('book.titlePage')}</span>
                </button>
              </li>
              {list.map((c, i) => (
                <li key={c.id}>
                  <button type="button" onClick={() => goChapter(i)} aria-current={i === resolved}>
                    <span className="n">{n(i + 1)}</span>
                    <span style={{ fontWeight: i === resolved ? 600 : undefined }}>{c.title}</span>
                    <span className="dots" aria-hidden />
                    {completedChapters.includes(c.id) && <span className="ok">{t('book.finished')}</span>}
                  </button>
                </li>
              ))}
            </ol>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
