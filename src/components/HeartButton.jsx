import React, { useState } from 'react';
import './HeartButton.css';

export const HeartButton = ({ isFavorite, onToggle, movieTitle = 'movie' }) => {
  const [animating, setAnimating] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnimating(true);
    onToggle();
  };

  return (
    <button
      type="button"
      className={`heart-btn ${isFavorite ? 'is-active' : ''} ${animating ? 'animate-pop' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setAnimating(false)}
      aria-label={isFavorite ? `Remove ${movieTitle} from favorites` : `Add ${movieTitle} to favorites`}
      title={isFavorite ? 'Remove from Watchlist' : 'Add to Watchlist'}
    >
      <svg
        className="heart-icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
};

export default HeartButton;
