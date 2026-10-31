// Gold-ink line drawings for each prophet's page. Only objects, plants and
// landscapes from their story; never a person or a face. Muhammad ﷺ gets a
// geometric star only.

import type { ProphetId } from '../../types/prophet';

const P = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const Waves = ({ y = 66 }: { y?: number }) => (
  <>
    <path d={`M8 ${y}c8-5 14-5 22 0s14 5 22 0 14-5 22 0 14 5 22 0 14-5 16-2`} />
    <path d={`M8 ${y + 8}c8-5 14-5 22 0s14 5 22 0 14-5 22 0 14 5 22 0`} />
  </>
);

const Star8 = ({ r = 30 }: { r?: number }) => {
  const k = r / 32;
  const d =
    'M0-32 9.4-22.6 22.6-22.6 22.6-9.4 32 0 22.6 9.4 22.6 22.6 9.4 22.6 0 32-9.4 22.6-22.6 22.6-22.6 9.4-32 0-22.6-9.4-22.6-22.6-9.4-22.6z';
  return <path transform={`translate(60 40) scale(${k})`} d={d} />;
};

const DRAW: Record<ProphetId, React.ReactNode> = {
  // a young tree in the garden
  adam: (
    <>
      <path d="M60 70V34" />
      <path d="M60 46c-10-2-20-10-22-22 10 0 20 6 22 16M60 40c10-2 18-10 20-22-10 0-18 6-20 16M60 34c-4-8-2-18 0-24 2 6 4 16 0 24" />
      <path d="M14 72h92M24 72c4-6 8-6 12 0M84 72c4-6 8-6 12 0" />
      <circle cx="38" cy="54" r="2" fill="currentColor" />
      <circle cx="82" cy="56" r="2" fill="currentColor" />
    </>
  ),
  // the pen and a written page
  idris: (
    <>
      <path d="M22 66h76M26 66V22h68v44" />
      <path d="M34 32h40M34 40h48M34 48h36M34 56h44" />
      <path d="M80 22 98 6l4 4-18 16zM80 22l-2 6 6-2" />
    </>
  ),
  // the Ark on the flood
  nuh: (
    <>
      <path d="M18 46h84l-10 14H28zM34 46V32h52v14M44 32v-8h32v8" />
      <Waves />
    </>
  ),
  // the howling wind over the dunes of 'Ad
  hud: (
    <>
      <path d="M10 66h100M14 66 30 40l10 12 14-22 16 26 10-14 26 24" />
      <path d="M14 22c18 0 22-8 40-8M30 30c18 0 26-6 44-6M58 14c16 0 22 4 40 4" />
    </>
  ),
  // homes carved into the rock (Thamud)
  salih: (
    <>
      <path d="M8 70h104M14 70 26 22h68l12 48" />
      <path d="M36 70V50a8 8 0 0 1 16 0v20M66 70V50a8 8 0 0 1 16 0v20M40 36h8M70 36h8M54 30h10" />
    </>
  ),
  // the fire made cool, with a garden at its sides
  ibrahim: (
    <>
      <path d="M60 70c-14 0-22-10-18-22 2 6 6 8 8 8-4-10 4-22 10-30 0 10 8 14 10 20 2-4 2-8 0-12 10 8 14 22 6 30-4 4-10 6-16 6z" />
      <path d="M30 70c-6-6-4-14 2-18M90 70c6-6 4-14-2-18M20 70h80" />
      <circle cx="24" cy="44" r="3" />
      <circle cx="96" cy="44" r="3" />
    </>
  ),
  // the overturned towns
  lut: (
    <>
      <path d="M10 50h100M18 50V36h14v14M38 50V28h16v22M60 50V34h14v16M80 50V30h16v20" />
      <path d="M18 58h84M24 66h72" strokeDasharray="3 4" />
      <path d="M30 12l4 6M58 8v8M88 12l-4 6" />
    </>
  ),
  // the House and the spring of Zamzam
  ismail: (
    <>
      <path d="M40 68V30h40v38zM14 68h92" />
      <path d="M40 40h40" strokeWidth={3} />
      <path d="M90 68c0-8 6-12 10-12s8 4 8 12M98 56v-6" />
    </>
  ),
  // the glad tidings: a star over the tents
  ishaq: (
    <>
      <path d="M14 70h92M24 70l14-24 14 24M68 70l14-24 14 24M38 46v-4M82 46v-4" />
      <path d="M60 10l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
    </>
  ),
  // patience: the lamp in the dark
  yaqub: (
    <>
      <path d="M44 56h32l-6 10H50zM60 56V46" />
      <path d="M60 46c-6-4-6-12 0-20 6 8 6 16 0 20z" />
      <path d="M20 72h80" />
      <path d="M30 22h.1M90 18h.1M80 30h.1M38 34h.1" strokeWidth={3} />
    </>
  ),
  // the well, the sun, the moon and the eleven stars of the dream
  yusuf: (
    <>
      <ellipse cx="60" cy="62" rx="20" ry="6" />
      <path d="M40 62v8c0 4 9 6 20 6s20-2 20-6v-8" />
      <circle cx="28" cy="20" r="7" />
      <path d="M98 14a8 8 0 1 0 4 14 10 10 0 0 1-4-14z" />
      <g fill="currentColor" stroke="none">
        {[
          [44, 12], [54, 22], [62, 10], [70, 24], [78, 14], [48, 32], [60, 36], [72, 34], [84, 30], [40, 24], [88, 38],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} />
        ))}
      </g>
    </>
  ),
  // the spring that came at a strike of the foot
  ayyub: (
    <>
      <path d="M14 70h92M30 70c0-14 14-24 30-24s30 10 30 24" />
      <path d="M60 46V30M54 38c0-8 6-14 6-14s6 6 6 14" />
      <path d="M44 56c4-4 8-4 12 0s8 4 12 0" />
    </>
  ),
  // the full measure and the true balance
  shuayb: (
    <>
      <path d="M60 12v52M40 70h40M30 22h60" />
      <path d="M30 22 20 44h20zM90 22 80 44h20z" />
      <path d="M18 44c2 6 6 8 12 8s10-2 12-8M78 44c2 6 6 8 12 8s10-2 12-8" />
    </>
  ),
  // the staff and the sea parted in two
  musa: (
    <>
      <path d="M10 70c6-30 10-50 32-56M110 70c-6-30-10-50-32-56M18 70c4-22 8-36 22-44M102 70c-4-22-8-36-22-44" />
      <path d="M48 70h24M60 70V22c0-6 6-8 8-4" />
    </>
  ),
  // the mountain of Tur where the brothers were sent
  harun: (
    <>
      <path d="M10 70h100M22 70l26-42 14 18 10-12 26 36" />
      <path d="M48 28l6-14M56 22l10-8" opacity={0.7} />
    </>
  ),
  // the kept promise: a sealed scroll
  'dhul-kifl': (
    <>
      <path d="M30 20h56a8 8 0 0 1 0 16H30zM30 36h56v26a8 8 0 0 1-8 8H30" />
      <path d="M30 20a8 8 0 0 0 0 16M40 46h36M40 54h28" />
      <circle cx="80" cy="62" r="6" />
    </>
  ),
  // the rings of the coat of mail
  dawud: (
    <>
      {[
        [40, 26], [54, 26], [68, 26], [82, 26], [47, 38], [61, 38], [75, 38], [54, 50], [68, 50],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={8} />
      ))}
      <path d="M14 72h92" />
    </>
  ),
  // the palace with a floor of glass
  sulayman: (
    <>
      <path d="M14 72h92M20 72V40h80v32M20 40 60 14l40 26" />
      <path d="M34 72V52a6 6 0 0 1 12 0v20M54 72V48a6 6 0 0 1 12 0v24M74 72V52a6 6 0 0 1 12 0v20" />
      <path d="M14 76h92" strokeDasharray="2 4" />
    </>
  ),
  // the high mountain
  ilyas: (
    <>
      <path d="M10 70h100M18 70 50 20l18 26 10-12 24 36" />
      <path d="M44 30l6-10 6 10" />
      <circle cx="92" cy="18" r="6" />
    </>
  ),
  // olive branches
  'al-yasa': (
    <>
      <path d="M30 70c10-20 30-40 60-52" />
      {[
        [44, 52, -30], [54, 42, 20], [64, 34, -30], [74, 28, 20], [84, 22, -20],
      ].map(([x, y, a]) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={7} ry={3} transform={`rotate(${a} ${x} ${y})`} />
      ))}
      <path d="M14 72h92" />
    </>
  ),
  // the gourd plant on the shore
  yunus: (
    <>
      <path d="M50 70c0-18 4-34 16-46" />
      <path d="M66 24c-12-4-24 2-28 12 12 4 22 0 28-12zM58 38c10-8 24-8 32 0-10 8-22 8-32 0z" />
      <Waves y={70} />
    </>
  ),
  // the prayer niche (mihrab)
  zakariya: (
    <>
      <path d="M30 72V36c0-16 14-28 30-28s30 12 30 28v36M40 72V38c0-12 9-20 20-20s20 8 20 20v34" />
      <path d="M60 34v8M56 38h8M20 72h80" />
    </>
  ),
  // the Book held with strength
  yahya: (
    <>
      <path d="M60 24v46M60 24c-10-6-26-6-36 0v46c10-6 26-6 36 0M60 24c10-6 26-6 36 0v46c-10-6-26-6-36 0" />
      <path d="M32 36h18M32 44h18M70 36h18M70 44h18" opacity={0.7} />
    </>
  ),
  // the table spread sent down
  isa: (
    <>
      <path d="M16 50h88M24 50v20M96 50v20" />
      <ellipse cx="60" cy="42" rx="22" ry="5" />
      <circle cx="42" cy="38" r="5" />
      <circle cx="78" cy="38" r="5" />
      <path d="M56 34c2-6 6-6 8 0" />
      <path d="M60 8v10M52 12l16 2M50 18l20-4" opacity={0.6} />
    </>
  ),
  // geometric only
  muhammad: (
    <>
      <Star8 r={32} />
      <Star8 r={22} />
      <circle cx="60" cy="40" r="6" />
    </>
  ),
};

export function Vignette({ id, className, title }: { id: ProphetId; className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} {...P}>
      {DRAW[id]}
    </svg>
  );
}

/** The app's seal: an eight-point star in lapis with a gold ring. */
export function Seal({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <g transform="translate(24 24)">
        <path
          d="M0-22 6.5-15.7 15.6-15.6 15.7-6.5 22 0 15.7 6.5 15.6 15.6 6.5 15.7 0 22-6.5 15.7-15.6 15.6-15.7 6.5-22 0-15.7-6.5-15.6-15.6-6.5-15.7z"
          fill="var(--bk-lapis)"
        />
        <circle r="13" fill="none" stroke="var(--bk-gold-2)" strokeWidth="1.2" />
        <path d="M-6-4h12M-6 0h12M-6 4h8M0-8v14" stroke="var(--bk-gold-soft)" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** A small gold four-point star used as a divider ornament. */
export function StarRule({ className }: { className?: string }) {
  return (
    <div className={`bk-rule ${className ?? ''}`} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 26 26">
        <path d="M13 1l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="var(--bk-gold)" />
      </svg>
    </div>
  );
}
