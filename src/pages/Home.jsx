import React, { useState, useEffect, useCallback, useRef } from 'react';
import MarqueeHero from '../components/MarqueeHero';
import MoodMatcher from '../components/MoodMatcher';
import SectionHeader from '../components/SectionHeader';
import MovieGrid from '../components/MovieGrid';
import { fetchPopularMovies, searchMovies } from '../services/tmdb';
import { useDebounce } from '../hooks/useDebounce';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import './Home.css';

export const Home = ({ searchQuery, onClearSearch }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [isArchiveMode, setIsArchiveMode] = useState(false);

  // Debounce search input by 500ms
  const debouncedQuery = useDebounce(searchQuery, 500);

  // Cancel in-flight requests to avoid race conditions
  const activeAbortRef = useRef(null);

  const fetchPage = useCallback(
    async (pageToFetch, isInitial = false) => {
      if (activeAbortRef.current) activeAbortRef.current.abort();

      const controller = new AbortController();
      activeAbortRef.current = controller;

      if (isInitial) {
        setIsLoading(true);
        setError(null);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const cleanQuery = (debouncedQuery || '').trim();
        const data = cleanQuery.length > 0
          ? await searchMovies(cleanQuery, pageToFetch, controller.signal)
          : await fetchPopularMovies(pageToFetch, controller.signal);

        const newResults = data.results || [];
        setTotalPages(data.total_pages || 1);
        setIsArchiveMode(Boolean(data.isArchiveFallback));

        // De-duplicate by id to avoid duplicate cards or keys
        setMovies((prev) => {
          if (isInitial) return newResults;
          const seen = new Set(prev.map((m) => m.id));
          return [...prev, ...newResults.filter((m) => !seen.has(m.id))];
        });

        setPage(pageToFetch);
      } catch (err) {
        if (err.name === 'AbortError') return;
        if (isInitial) setError(err.message || 'Unable to load movie reels.');
      } finally {
        if (isInitial) setIsLoading(false);
        else setIsLoadingMore(false);
      }
    },
    [debouncedQuery]
  );

  useEffect(() => {
    setPage(1);
    fetchPage(1, true);

    return () => {
      if (activeAbortRef.current) activeAbortRef.current.abort();
    };
  }, [debouncedQuery, fetchPage]);

  const handleLoadMore = useCallback(() => {
    if (!isLoading && !isLoadingMore && page < totalPages) {
      fetchPage(page + 1, false);
    }
  }, [fetchPage, isLoading, isLoadingMore, page, totalPages]);

  const hasMore = page < totalPages;
  const { sentinelRef } = useInfiniteScroll({
    onIntersect: handleLoadMore,
    hasMore,
    isLoading: isLoading || isLoadingMore,
    rootMargin: '400px',
  });

  const isSearchMode = Boolean(debouncedQuery && debouncedQuery.trim().length > 0);
  const sectionTitle = isSearchMode ? `SEARCH: "${debouncedQuery}"` : 'NOW SHOWING';
  const subtitle = isSearchMode
    ? 'Matching titles in the cinema archives'
    : 'Top theatrical and streaming releases worldwide';

  return (
    <main className="cinema-home container">
      <MarqueeHero />
      <MoodMatcher />

      {isArchiveMode && (
        <aside className="api-notice-banner" role="status">
          <div className="api-notice-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent-amber)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="api-notice-content">
            <strong>Archival Vault Active:</strong> Serving curated cinema masterworks. If themoviedb.org is blocked by your ISP, use Cloudflare DNS (1.1.1.1) or an OMDb API key in <code>.env</code>.
          </div>
        </aside>
      )}

      <SectionHeader
        title={sectionTitle}
        subtitle={`${subtitle}${isArchiveMode ? ' • 35MM ARCHIVE VAULT' : ' • LIVE FEED'}`}
        count={isLoading ? undefined : movies.length}
      />

      <MovieGrid
        movies={movies}
        isLoading={isLoading}
        error={error}
        onRetry={() => fetchPage(1, true)}
        onClearSearch={onClearSearch}
        isSearch={isSearchMode}
      />

      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />

      {isLoadingMore && (
        <div className="loading-more-reels" role="status" aria-live="polite">
          <span className="reels-spool-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-amber)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span className="loading-reels-text">Loading more reels…</span>
        </div>
      )}

      {!isLoading && movies.length > 0 && !hasMore && (
        <div className="catalog-end-notice">
          <span className="end-notice-rule" aria-hidden="true" />
          <span className="end-notice-tag">END OF ARCHIVAL ROLL • ALL TITLES SHOWN</span>
          <span className="end-notice-rule" aria-hidden="true" />
        </div>
      )}
    </main>
  );
};

export default Home;
