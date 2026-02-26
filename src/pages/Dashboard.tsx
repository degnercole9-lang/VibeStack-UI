import React, { useState, useMemo } from 'react';
import { useUpdates } from '../hooks/useUpdates';
import { Card, SkeletonCard } from '../components/Card';
import { FilterBar } from '../components/FilterBar';
import { Pagination } from '../components/Pagination';
import { MOCK_UPDATES } from '../lib/mockData';
import { Inbox } from 'lucide-react';

export function Dashboard() {
  const [filters, setFilters] = useState({
    query: '',
    source_type: 'All',
    source_name: 'All',
    tag: 'All',
    sort: 'newest' as const,
  });
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, loading, error } = useUpdates({
    ...filters,
    page,
    pageSize
  });

  const availableTypes = useMemo(() => Array.from(new Set(MOCK_UPDATES.map(item => item.source_type))).sort(), []);
  const availableSources = useMemo(() => Array.from(new Set(MOCK_UPDATES.map(item => item.source_name))).sort(), []);
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    MOCK_UPDATES.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
          What’s worth adding to your AI stack.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Curated updates from model providers, plugin ecosystems, and agent frameworks. Signal over noise.
        </p>
      </section>

      <section>
        <FilterBar 
          filters={filters} 
          onChange={handleFilterChange} 
          availableTypes={availableTypes}
          availableSources={availableSources}
          availableTags={availableTags}
        />
      </section>

      <section className="flex flex-col gap-4">
        {error ? (
          <div className="rounded-[var(--radius)] border border-destructive/50 bg-destructive/10 p-6 text-center text-destructive">
            Failed to load updates. Please try again later.
          </div>
        ) : loading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : data?.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-[var(--radius)] border border-dashed border-border py-24 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
              <Inbox className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground">No updates found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
            <button 
              onClick={() => handleFilterChange({ query: '', source_type: 'All', source_name: 'All', tag: 'All', sort: 'newest' })}
              className="mt-6 rounded-[var(--radius)] bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {data?.items.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            
            {data && (
              <Pagination 
                currentPage={data.page} 
                totalPages={Math.ceil(data.total / data.pageSize)} 
                onPageChange={setPage} 
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
