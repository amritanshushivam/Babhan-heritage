import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  categories?: string[];
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
  activeCategory,
  onCategoryChange,
  categories = [],
  suggestions = [],
  onSuggestionClick
}: SearchBarProps) {
  return (
    <div id="scholarly-search-matrix" className="bg-surface border border-border-custom p-4 md:p-6 rounded-lg shadow-xl relative z-10">
      
      {/* Search Input block */}
      <div className="flex flex-col md:flex-row gap-3">
        
        {/* Main query selector */}
        <div className="flex-1 relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-gold/60 pointer-events-none" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-10 py-3 bg-zinc-950/80 border border-border-custom hover:border-gold/20 focus:border-gold focus:outline-none rounded text-sm text-[13px] text-text-primary placeholder:text-text-secondary/60 font-sans tracking-wide transition-all"
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute right-4 p-1 hover:text-white text-text-secondary transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category selector if available */}
        {categories.length > 0 && onCategoryChange && (
          <div className="relative flex items-center min-w-[160px]">
            <SlidersHorizontal className="absolute left-4 w-4 h-4 text-bronze pointer-events-none" />
            <select
              value={activeCategory || 'All'}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-950/80 border border-border-custom hover:border-gold/20 focus:border-gold focus:outline-none rounded text-[13px] text-text-primary/90 font-mono tracking-wide appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Suggested Search Phrases or Active Filter Labels */}
      {suggestions.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary/60">
            Suggested Parameters:
          </span>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((phrase) => (
              <button
                key={phrase}
                onClick={() => onSuggestionClick?.(phrase)}
                className="text-[11px] font-sans bg-zinc-950 hover:bg-zinc-900 border border-border-custom text-text-secondary hover:text-gold px-3 py-1 rounded transition-colors"
              >
                {phrase}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
