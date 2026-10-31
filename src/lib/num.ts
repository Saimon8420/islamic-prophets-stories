import type { Language } from '../types/prophet';

const DIGITS: Record<Language, string | null> = { en: null, bn: '০১২৩৪৫৬৭৮৯', ar: '٠١٢٣٤٥٦٧٨٩' };

/** Write a number with the digits of the reading language. */
export function localNum(n: number | string, lang: Language): string {
  const d = DIGITS[lang];
  const s = String(n);
  return d ? s.replace(/\d/g, (x) => d[Number(x)]) : s;
}
