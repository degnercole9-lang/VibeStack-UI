import React from 'react';
import { Search, ChevronDown, ArrowDownUp } from 'lucide-react';

interface FilterState {
  query: string;
  source_type: string;
  source_name: string;
  tag: string;
  sort: 'newest' | 'top_score';
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  availableTypes: string[];
  availableSources: string[];
  availableTags: string[];
}

export function FilterBar({ filters, onChange, availableTypes, availableSources, availableTags }: FilterBarProps) {
  
  const handleChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius)] bg-card border border-border p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="block w-full rounded-[var(--radius)] border border-input bg-background py-2 pl-10 pr-3 text-sm text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          placeholder="Search updates..."
          value={filters.query}
          onChange={(e) => handleChange('query', e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <select
            className="appearance-none rounded-[var(--radius)] border border-input bg-background py-2 pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors cursor-pointer font-mono"
            value={filters.source_type}
            onChange={(e) => handleChange('source_type', e.target.value)}
          >
            <option value="All">All Types</option>
            {availableTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <div className="relative">
          <select
            className="appearance-none rounded-[var(--radius)] border border-input bg-background py-2 pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors cursor-pointer font-mono"
            value={filters.source_name}
            onChange={(e) => handleChange('source_name', e.target.value)}
          >
            <option value="All">All Sources</option>
            {availableSources.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <div className="relative">
          <select
            className="appearance-none rounded-[var(--radius)] border border-input bg-background py-2 pl-3 pr-8 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors cursor-pointer font-mono"
            value={filters.tag}
            onChange={(e) => handleChange('tag', e.target.value)}
          >
            <option value="All">All Tags</option>
            {availableTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <button
          onClick={() => handleChange('sort', filters.sort === 'newest' ? 'top_score' : 'newest')}
          className="flex items-center gap-2 rounded-[var(--radius)] border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <ArrowDownUp className="h-4 w-4" />
          {filters.sort === 'newest' ? 'Newest' : 'Top Score'}
        </button>
      </div>
    </div>
  );
}
