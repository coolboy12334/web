import { useState, useCallback } from 'react';
import type { Tool } from '../types/Tool';

export function useSearch(tools: Tool[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsSearching(!!query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = tools.filter((tool) =>
      tool.title.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  }, [tools]);

  return {
    searchQuery,
    searchResults,
    isSearching,
    handleSearch,
  };
}