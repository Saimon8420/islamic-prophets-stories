import type { ProphetId } from '../types/prophet';
import { prophetsMeta } from '../data/prophets-meta';

export interface SearchResult {
  prophetId: ProphetId;
  prophetName: string;
  matchType: 'name' | 'title' | 'era' | 'event' | 'miracle';
  matchText: string;
  snippet: string;
}

export async function searchProphets(
  query: string,
  prophetId?: ProphetId
): Promise<SearchResult[]> {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];
  const prophets = prophetId
    ? prophetsMeta.filter((p) => p.id === prophetId)
    : prophetsMeta;

  for (const prophet of prophets) {
    // Search in names
    for (const lang of ['en', 'bn', 'ar'] as const) {
      if (prophet.name[lang].toLowerCase().includes(q)) {
        results.push({
          prophetId: prophet.id,
          prophetName: prophet.name.en,
          matchType: 'name',
          matchText: prophet.name[lang],
          snippet: `${prophet.name.en} - ${prophet.title.en}`,
        });
        break;
      }
    }

    // Search in titles
    for (const lang of ['en', 'bn', 'ar'] as const) {
      if (prophet.title[lang].toLowerCase().includes(q)) {
        results.push({
          prophetId: prophet.id,
          prophetName: prophet.name.en,
          matchType: 'title',
          matchText: prophet.title[lang],
          snippet: `${prophet.name.en} - ${prophet.title.en}`,
        });
        break;
      }
    }

    // Search in era
    if (prophet.era.en.toLowerCase().includes(q)) {
      results.push({
        prophetId: prophet.id,
        prophetName: prophet.name.en,
        matchType: 'era',
        matchText: prophet.era.en,
        snippet: `Era: ${prophet.era.en}`,
      });
    }

    // Search in key events
    for (const event of prophet.keyEvents) {
      for (const lang of ['en', 'bn', 'ar'] as const) {
        if (event[lang].toLowerCase().includes(q)) {
          results.push({
            prophetId: prophet.id,
            prophetName: prophet.name.en,
            matchType: 'event',
            matchText: event[lang],
            snippet: event.en,
          });
          break;
        }
      }
    }

    // Search in miracles
    for (const miracle of prophet.miracles) {
      for (const lang of ['en', 'bn', 'ar'] as const) {
        if (miracle[lang].toLowerCase().includes(q)) {
          results.push({
            prophetId: prophet.id,
            prophetName: prophet.name.en,
            matchType: 'miracle',
            matchText: miracle[lang],
            snippet: miracle.en,
          });
          break;
        }
      }
    }
  }

  return results;
}
