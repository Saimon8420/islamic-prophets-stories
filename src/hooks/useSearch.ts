import { useState, useCallback } from 'react';
import type { ProphetId } from '../types/prophet';
import { searchProphets, type SearchResult } from '../services/searchService';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [prophetFilter, setProphetFilter] = useState<ProphetId | null>(null);

  const search = useCallback(
    async (searchQuery: string, prophetId?: ProphetId | null) => {
      const q = searchQuery.trim();
      if (!q) {
        setResults([]);
        return;
      }

      setSearching(true);
      try {
        const r = await searchProphets(q, prophetId ?? undefined);
        setResults(r);
      } finally {
        setSearching(false);
      }
    },
    []
  );

  const performSearch = useCallback(
    (q: string) => {
      setQuery(q);
      search(q, prophetFilter);
    },
    [search, prophetFilter]
  );

  const setFilter = useCallback(
    (prophetId: ProphetId | null) => {
      setProphetFilter(prophetId);
      if (query) search(query, prophetId);
    },
    [query, search]
  );

  return {
    query,
    results,
    searching,
    prophetFilter,
    performSearch,
    setFilter,
  };
}
