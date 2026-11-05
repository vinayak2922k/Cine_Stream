import React, { useState } from 'react';
import { getPosterUrl } from '../services/tmdb';
import { useFavorites } from '../context/FavoritesContext';
import HeartButton from './HeartButton';
import './MovieCard.css';

const formatRating = (vote) => {
  if (!vote || isNaN(vote)) return '—';
  return Number(vote).toFixed(1);
};

const getScoreTier = (vote) => {
  if (!vote) return 'unrated';
  if (vote >= 7.0) return 'high';
  if (vote >= 5.0) return 'mid';
  return 'low';
};

export const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgError, setImgError] = useState(false);

  const {
    id,
    title = 'Untitled Film',
    poster_path,
    release_date,
    vote_average,
    overview,
  } = movie;

  const posterSrc = getPosterUrl(poster_path);
  const releaseYear = release_date ? release_date.slice(0, 4) : 'TBA';
  const score = formatRating(vote_average);
  const scoreTier = getScoreTier(vote_average);
  const isSaved = isFavorite(id);

  return (
    <article className="ticket-card" tabIndex="0" aria-label={`${title} (${releaseYear})`}>
      <div className="ticket-fav-wrapper">
        <HeartButton
          isFavorite={isSaved}
          onToggle={() => toggleFavorite(movie)}
          movieTitle={title}
        />
      </div>

      <div className="ticket-poster-frame">
        {posterSrc && !imgError ? (
          <img
            src={posterSrc}
            alt={`Official poster for ${title}`}
            className="ticket-poster-img"
            loading="lazy"
            decoding="async"
            width="500"
            height="750"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="ticket-poster-fallback" aria-label="No poster available">
            <svg
              className="fallback-reel-icon"
              viewBox="0 0 24 24"
              width="54"
              height="54"
              fill="none"
              stroke="#F2A93B"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="6" r="1.5" fill="#F2A93B" />
              <circle cx="12" cy="18" r="1.5" fill="#F2A93B" />
              <circle cx="6" cy="12" r="1.5" fill="#F2A93B" />
              <circle cx="18" cy="12" r="1.5" fill="#F2A93B" />
            </svg>
            <span className="fallback-text">ARCHIVE REEL</span>
          </div>
        )}

        <div className="ticket-overview-drawer">
          <p className="ticket-overview-text">
            {overview || 'No synopsis recorded in the cinema archives.'}
          </p>
        </div>
      </div>

      <div className="ticket-perforation" aria-hidden="true">
        <span className="ticket-notch ticket-notch-left" />
        <span className="ticket-notch ticket-notch-right" />
      </div>

      <div className="ticket-stub-body">
        <h3 className="ticket-title" title={title}>
          {title}
        </h3>

        <div className="ticket-meta-row">
          <span className="ticket-year">{releaseYear}</span>
          <span
            className={`ticket-rating-badge tier-${scoreTier}`}
            title={`Rating: ${score} / 10`}
          >
            ★ {score}
          </span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
