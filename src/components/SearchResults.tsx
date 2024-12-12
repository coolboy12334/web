import React from 'react';
import { Tool } from '../types/Tool';
import { ToolCard } from './ToolCard';
import { GradientText } from './ui/GradientText';

interface SearchResultsProps {
  results: Tool[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (!query) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-xl p-4 max-h-[80vh] overflow-y-auto z-50">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          {results.length > 0 ? (
            <>Found {results.length} results for "<GradientText>{query}</GradientText>"</>
          ) : (
            <>No results found for "<GradientText>{query}</GradientText>"</>
          )}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </div>
    </div>
  );
}