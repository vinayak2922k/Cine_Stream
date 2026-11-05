import React from 'react';
import MovieCard from './MovieCard';
import { SkeletonGrid } from './Skeleton';
import EmptyState from './EmptyState';
import './MovieGrid.css';

export const MovieGrid = ({
  movies = [],
  isLoading = false,
  error = null,
  onRetry,
  onClearSearch,
  isSearch = false,
}) => {
  if (isLoading && movies.length === 0) {
    return <SkeletonGrid count={8} />;
  }

  if (error) {
    return (
      <EmptyState
        type="error"
        title="PROJECTION ERROR"
        message={error}
        onAction={onRetry}
        actionLabel="Retry Reel"
      />
    );
  }

  if (!isLoading && movies.length === 0) {
    return (
      <EmptyState
        type={isSearch ? 'no-results' : 'empty-watchlist'}
        onAction={onClearSearch}
        actionLabel={isSearch ? 'Return to Now Showing' : 'Explore Titles'}
      />
    );
  }

  return (
    <div className="movie-ticket-grid" role="feed" aria-busy={isLoading}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
