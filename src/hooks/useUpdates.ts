import { useState, useEffect } from 'react';
import { UpdateItem, MOCK_UPDATES } from '../lib/mockData';

interface FetchUpdatesParams {
  query?: string;
  source_type?: string;
  source_name?: string;
  tag?: string;
  sort?: 'newest' | 'top_score';
  page?: number;
  pageSize?: number;
}

interface FetchUpdatesResponse {
  items: UpdateItem[];
  page: number;
  pageSize: number;
  total: number;
}

export function useUpdates(params: FetchUpdatesParams) {
  const [data, setData] = useState<FetchUpdatesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Try API call first, fallback to mock data
    const fetchUpdates = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (params.query) queryParams.append('query', params.query);
        if (params.source_type && params.source_type !== 'All') queryParams.append('source_type', params.source_type);
        if (params.source_name && params.source_name !== 'All') queryParams.append('source_name', params.source_name);
        if (params.tag && params.tag !== 'All') queryParams.append('tag', params.tag);
        if (params.sort) queryParams.append('sort', params.sort);
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());

        const response = await fetch(`/api/updates?${queryParams.toString()}`);
        
        if (!response.ok) {
          throw new Error('API unavailable, falling back to mock data');
        }
        
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Backend API not available, using mock data fallback:', err);
        
        // Fallback to mock data
        await new Promise(resolve => setTimeout(resolve, 600)); // Simulate network latency

        let filtered = [...MOCK_UPDATES];

        if (params.query) {
          const q = params.query.toLowerCase();
          filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.short_description.toLowerCase().includes(q)
          );
        }

        if (params.source_type && params.source_type !== 'All') {
          filtered = filtered.filter(item => item.source_type === params.source_type);
        }

        if (params.source_name && params.source_name !== 'All') {
          filtered = filtered.filter(item => item.source_name === params.source_name);
        }

        if (params.tag && params.tag !== 'All') {
          filtered = filtered.filter(item => item.tags.includes(params.tag!));
        }

        if (params.sort === 'top_score') {
          filtered.sort((a, b) => b.internal_score - a.internal_score);
        } else {
          // default newest
          filtered.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
        }

        const page = params.page || 1;
        const pageSize = params.pageSize || 10;
        const total = filtered.length;
        
        const start = (page - 1) * pageSize;
        const items = filtered.slice(start, start + pageSize);

        if (isMounted) {
          setData({
            items,
            page,
            pageSize,
            total
          });
          setLoading(false);
        }
      }
    };

    fetchUpdates();

    return () => {
      isMounted = false;
    };
  }, [params.query, params.source_type, params.source_name, params.tag, params.sort, params.page, params.pageSize]);

  return { data, loading, error };
}
