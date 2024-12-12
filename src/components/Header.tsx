import React from 'react';
import { Feather } from 'lucide-react';
import { GradientContainer } from './ui/GradientContainer';
import { SearchInput } from './ui/SearchInput';
import { SearchResults } from './SearchResults';
import { useSearch } from '../hooks/useSearch';
import { tools } from '../data/tools';

export function Header() {
  const { searchQuery, searchResults, isSearching, handleSearch } = useSearch(tools);

  return (
    <GradientContainer className="w-full py-4 shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Feather className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">DailyQuill</span>
          </div>

          <div className="flex-1 max-w-2xl w-full relative">
            <SearchInput
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search PDF tools..."
            />
            {isSearching && (
              <SearchResults results={searchResults} query={searchQuery} />
            )}
          </div>

          <nav className="flex items-center space-x-4">
            <a className="text-white/90 hover:text-orange-200 transition-colors" href="#">
              All PDF Tools
            </a>
            <a className="text-white/90 hover:text-orange-200 transition-colors" href="#">
              Login
            </a>
            <a className="text-white/90 hover:text-orange-200 transition-colors" href="#">
              Sign up
            </a>
            <button className="text-white/90 hover:text-orange-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16m-16 6h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </GradientContainer>
  );
}