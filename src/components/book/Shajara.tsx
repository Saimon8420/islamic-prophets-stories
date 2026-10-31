import { useEffect, useRef, useState } from 'react';
import { LINEAGE_GROUP, LINEAGE_LINKS, LINEAGE_NODES, type LineageLink, type LineageNode } from '../../data/lineage';
import { useTranslation } from '../../i18n/useTranslation';
import { PageHead } from './Shell';
import type { ProphetId } from '../../types/prophet';

const C = { quran: '#2f6b5c', gold: '#b48a2c' };
const byId = Object.fromEntries([...LINEAGE_NODES, ...LINEAGE_GROUP].map((n) => [n.id, n]));
const GROUP = { x: 150, y: 1350, w: 306, h: 226 };

const radius = (n: LineageNode) => (n.last ? 52 : n.prophetId ? 36 : 22);

function linkPath(l: LineageLink): string {
  const a = byId[l.from];
  if (l.to === 'group') return `M${a.x - 30} ${a.y + 22}C540 1180 420 1260 ${GROUP.x + GROUP.w / 2} ${GROUP.y}`;
  const b = byId[l.to];
  // side-by-side relations
  if (l.from === 'musa' && l.to === 'harun') return `M${a.x + 36} ${a.y}H${b.x - 36}`;
  if (l.from === 'yahya' && l.to === 'isa') return `M${a.x + 30} ${a.y + 22}C${a.x + 50} ${a.y + 110} ${b.x - 110} ${b.y + 10} ${b.x - 36} ${b.y + 3}`;
  if (l.from === 'zakariya' && l.to === 'maryam') return `M${a.x + 30} ${a.y + 30}C${a.x + 80} ${a.y + 70} ${b.x - 110} ${b.y - 30} ${b.x - 24} ${b.y - 8}`;
  if (l.from === 'yaqub' && l.to === 'zakariya') return `M${a.x - 32} ${a.y + 22}C470 1200 450 1500 ${b.x} ${b.y - 36}`;
  if (l.from === 'lawi' && l.to === 'imran') return `M${a.x} ${a.y + 22}C${a.x + 20} 1500 ${b.x} 1580 ${b.x} ${b.y - 22}`;
  if (l.from === 'ismail' && l.to === 'muhammad') return `M${a.x - 30} ${a.y + 22}C90 1150 70 1600 ${b.x - 25} ${b.y - 46}`;
  const y1 = a.y + radius(a);
  const y2 = b.y - radius(b);
  const my = (y1 + y2) / 2;
  return `M${a.x} ${y1}C${a.x} ${my} ${b.x} ${my} ${b.x} ${y2}`;
}

const STAR = (r: number) => {
  const k = r / 52;
  return `M0-52 15.4-37.2 36.8-36.8 37.2-15.4 52 0 37.2 15.4 36.8 36.8 15.4 37.2 0 52-15.4 37.2-36.8 36.8-37.2 15.4-52 0-37.2-15.4-36.8-36.8-15.4-37.2z`.replace(/-?\d+(\.\d+)?/g, (v) => String(+(Number(v) * k).toFixed(1)));
};

export function Shajara({ onOpen }: { onOpen: (id: ProphetId) => void }) {
  const { t, language } = useTranslation();
  const [sel, setSel] = useState<LineageLink | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const font = language === 'ar' ? 'Amiri' : language === 'en' ? 'EB Garamond' : 'Tiro Bangla';

  // on narrow screens start centred on the trunk of the tree
  useEffect(() => {
    const s = scroller.current;
    if (s) s.scrollLeft = (s.scrollWidth - s.clientWidth) / 2;
  }, []);

  const label = (id: string) => byId[id]?.name[language] ?? t('book.groupTitle');
  const open = (n: LineageNode) => n.prophetId && onOpen(n.prophetId);
  const key = (e: React.KeyboardEvent, n: LineageNode) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open(n);
    }
  };

  const prophetNode = (n: LineageNode, r = 36, small = false) => (
    <g
      key={n.id}
      className="bk-node"
      role="link"
      tabIndex={0}
      aria-label={n.name[language]}
      onClick={() => open(n)}
      onKeyDown={(e) => key(e, n)}
    >
      <circle className="halo" cx={n.x} cy={n.y} r={r + 10} fill="rgba(217,180,90,.3)" />
      <circle cx={n.x} cy={n.y} r={r} fill="#1e3a63" stroke="#d9b45a" strokeWidth={small ? 1.6 : 2} />
      {!small && <circle cx={n.x} cy={n.y} r={r - 5} fill="none" stroke="#d9b45a" strokeWidth={0.8} strokeDasharray="1.5 3" />}
      <text x={n.x} y={n.y + (small ? 5 : 1)} textAnchor="middle" fontFamily={font} fontSize={small ? (n.name[language].length > 7 ? 11.5 : 14) : n.name[language].length > 7 ? 14 : 17} fill="#f2e6cc">
        {n.name[language]}
      </text>
      {!small && (
        <text x={n.x} y={n.y + 19} textAnchor="middle" fontFamily={language === 'ar' ? 'Amiri' : 'Noto Sans Bengali'} fontSize={10.5} fill="#d9b45a">
          {language === 'ar' ? 'عليه السلام' : language === 'en' ? '(AS)' : '(আ.)'}
        </text>
      )}
    </g>
  );

  return (
    <main className="bk-main">
      <div className="bk-wrap bk-tree">
        <PageHead title={t('book.treeTitle')} intro={t('book.treeIntro')} />
        <div className="bk-legend">
          <span>
            <svg width="40" height="10" aria-hidden>
              <path d="M2 5h36" stroke={C.quran} strokeWidth="2.6" />
            </svg>
            {t('book.legendQuran')}
          </span>
          <span>
            <svg width="40" height="10" aria-hidden>
              <path d="M2 5h36" stroke={C.gold} strokeWidth="2" />
            </svg>
            {t('book.legendHistorian')}
          </span>
          <span>
            <svg width="40" height="10" aria-hidden>
              <path d="M2 5h36" stroke={C.gold} strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
            </svg>
            {t('book.legendGenerations')}
          </span>
          <span>
            <svg width="22" height="22" aria-hidden>
              <circle cx="11" cy="11" r="9" fill="#1e3a63" stroke="#d9b45a" strokeWidth="1.5" />
            </svg>
            {t('book.legendProphet')}
          </span>
        </div>

        <div className="bk-scroll" ref={scroller}>
          <svg viewBox="0 0 1100 2020" role="img" aria-label={t('book.treeTitle')}>
            {/* frame */}
            <g fill="none" stroke={C.gold} strokeWidth="1.2" opacity=".7">
              <path d="M30 30h120M30 30v120M1070 30H950M1070 30v120M30 1990h120M30 1990v-120M1070 1990H950M1070 1990v-120" />
              <path d="M40 40c40 0 60 20 60 60M1060 40c-40 0-60 20-60 60M40 1980c40 0 60-20 60-60M1060 1980c-40 0-60-20-60-60" />
            </g>
            <g transform="translate(550 80)" opacity=".16" fill="none" stroke="#1e3a63" strokeWidth="1.2">
              <circle r="70" />
              <circle r="56" />
              <path d="M0-70 20-20 70 0 20 20 0 70-20 20-70 0-20-20z" />
            </g>

            {/* links */}
            {LINEAGE_LINKS.map((l) => {
              const d = linkPath(l);
              const stroke = l.kind === 'quran' ? C.quran : C.gold;
              const dash = l.kind === 'descent' ? '2 7' : l.from === 'yahya' ? '8 5' : l.from === 'zakariya' && l.to === 'maryam' ? '3 5' : undefined;
              return (
                <g
                  key={`${l.from}-${l.to}`}
                  className="bk-edge"
                  role="button"
                  tabIndex={0}
                  aria-label={`${label(l.from)} – ${label(l.to)}`}
                  onClick={() => setSel(l)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSel(l))}
                >
                  <path className="hit" d={d} />
                  <path d={d} fill="none" stroke={stroke} strokeWidth={l.kind === 'quran' ? 2.6 : 2} strokeDasharray={dash} strokeLinecap="round" />
                </g>
              );
            })}
            {/* relation words */}
            <text x="770" y="1378" textAnchor="middle" fontFamily={font} fontSize="13" fill={C.quran}>
              {t('book.brothers')}
            </text>
            <text x="640" y="1915" textAnchor="middle" fontFamily={font} fontSize="13" fill={C.quran}>
              {t('book.cousins')}
            </text>
            <text x="665" y="1722" textAnchor="middle" fontFamily={font} fontSize="13" fill={C.quran}>
              {t('book.guardian')}
            </text>

            {/* the Bani Israel group */}
            <rect x={GROUP.x} y={GROUP.y} width={GROUP.w} height={GROUP.h} rx="14" fill="rgba(239,220,170,.35)" stroke={C.gold} strokeDasharray="5 5" />
            <text x={GROUP.x + GROUP.w / 2} y={GROUP.y + 28} textAnchor="middle" fontFamily={font} fontSize="16" fill="#5a4630">
              {t('book.groupTitle')}
            </text>
            <text x={GROUP.x + GROUP.w / 2} y={GROUP.y + 48} textAnchor="middle" fontFamily={font} fontSize="11.5" fill="#7d6748">
              {t('book.groupSub')}
            </text>
            <text x={GROUP.x + GROUP.w / 2} y={GROUP.y + 212} textAnchor="middle" fontFamily={font} fontSize="11" fill="#7d6748">
              {t('book.groupNote')}
            </text>
            {LINEAGE_GROUP.map((n) => prophetNode(n, 30, true))}

            {/* people */}
            {LINEAGE_NODES.map((n) => {
              if (n.last)
                return (
                  <g key={n.id} className="bk-node" role="link" tabIndex={0} aria-label={n.name[language]} onClick={() => open(n)} onKeyDown={(e) => key(e, n)}>
                    <circle className="halo" cx={n.x} cy={n.y} r="64" fill="rgba(217,180,90,.3)" />
                    <path transform={`translate(${n.x} ${n.y})`} d={STAR(52)} fill="#1e3a63" stroke="#d9b45a" strokeWidth="2" />
                    <circle cx={n.x} cy={n.y} r="36" fill="none" stroke="#d9b45a" strokeWidth="1" />
                    <text x={n.x} y={n.y - 4} textAnchor="middle" fontFamily={font} fontSize="17" fill="#f2e6cc">
                      {n.name[language]}
                    </text>
                    <text x={n.x} y={n.y + 20} textAnchor="middle" fontFamily="Amiri" fontSize="20" fill="#d9b45a">
                      ﷺ
                    </text>
                    <text x={n.x} y={n.y + 78} textAnchor="middle" fontFamily={font} fontSize="15" fill="#9b2c1f">
                      {t('book.lastProphet')}
                    </text>
                  </g>
                );
              if (n.prophetId) return prophetNode(n);
              return (
                <g key={n.id}>
                  <circle cx={n.x} cy={n.y} r="22" fill="#f6ecd6" stroke="#a8906a" strokeWidth="1.2" />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" fontFamily={font} fontSize={n.name[language].length > 6 ? 12.5 : 15} fill="#5a4630">
                    {n.name[language]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="bk-edge-note" role="status" aria-live="polite">
          {sel ? (
            <>
              <b>
                {label(sel.from)} – {label(sel.to)}:
              </b>{' '}
              {sel.source[language]}
            </>
          ) : (
            t('book.tapLine')
          )}
        </div>
      </div>
    </main>
  );
}
