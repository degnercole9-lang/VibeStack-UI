import React from 'react';
import { UpdateItem } from '../lib/mockData';
import { Badge } from './Badge';
import { ExternalLink, Calendar } from 'lucide-react';

interface CardProps {
  item: UpdateItem;
}

export function Card({ item }: CardProps) {
  const formattedDate = new Date(item.published_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block w-full rounded-[var(--radius)] bg-card border border-border p-5 transition-all duration-200 hover:-translate-y-1 hover:border-ring hover:shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{item.source_name}</Badge>
            <Badge variant="outline">{item.source_type}</Badge>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-mono font-medium text-muted-foreground border border-border">
            <span className="text-primary">★</span>
            {item.internal_score}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors flex items-start gap-2 font-serif">
            <span className="leading-tight">{item.title}</span>
            <ExternalLink className="mt-1 h-4 w-4 shrink-0 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-primary" />
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {item.short_description}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(tag => (
              <span key={tag} className="text-[11px] font-mono text-muted-foreground before:content-['#']">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function SkeletonCard() {
  return (
    <div className="w-full rounded-[var(--radius)] bg-card border border-border p-5 animate-pulse">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-2">
            <div className="h-6 w-24 rounded-[var(--radius)] bg-muted"></div>
            <div className="h-6 w-28 rounded-[var(--radius)] bg-muted"></div>
          </div>
          <div className="h-6 w-12 rounded-full bg-muted"></div>
        </div>
        <div>
          <div className="h-6 w-3/4 rounded-[var(--radius)] bg-muted mb-2"></div>
          <div className="h-4 w-full rounded-[var(--radius)] bg-muted mt-4"></div>
          <div className="h-4 w-5/6 rounded-[var(--radius)] bg-muted mt-2"></div>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-4">
          <div className="h-4 w-24 rounded-[var(--radius)] bg-muted"></div>
          <div className="flex gap-2">
            <div className="h-4 w-12 rounded-[var(--radius)] bg-muted"></div>
            <div className="h-4 w-16 rounded-[var(--radius)] bg-muted"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
