import React from 'react';
import './EmptyState.css';

export const EmptyState = ({
  type = 'no-results',
  title,
  message,
  onAction,
  actionLabel,
}) => {
  let defaultTitle = 'THE SCREEN IS BLANK';
  let defaultMessage = 'We could not find any reels matching your search.';
  let defaultAction = 'Return to Now Showing';

  if (type === 'empty-watchlist') {
    defaultTitle = 'YOUR WATCHLIST IS EMPTY';
    defaultMessage = 'No ticket stubs collected yet. Save films you want to see by clicking the heart on any card.';
    defaultAction = 'Explore Now Showing';
  } else if (type === 'error') {
    defaultTitle = 'PROJECTIONIST ERROR';
    defaultMessage = 'We had trouble loading the film archives. Please check your connection or API key.';
    defaultAction = 'Retry Reel';
  }

  const finalTitle = title || defaultTitle;
  const finalMessage = message || defaultMessage;
  const finalActionLabel = actionLabel || defaultAction;

  return (
    <div className={`cinema-empty-state state-${type}`} role="status">
      <div className="empty-state-illustration" aria-hidden="true">
        {type === 'error' ? (
          <svg
            viewBox="0 0 24 24"
            width="72"
            height="72"
            fill="none"
            stroke="var(--accent-red)"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ) : type === 'empty-watchlist' ? (
          <svg
            viewBox="0 0 24 24"
            width="72"
            height="72"
            fill="none"
            stroke="var(--accent-amber)"
            strokeWidth="1.5"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="72"
            height="72"
            fill="none"
            stroke="var(--accent-amber)"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        )}
      </div>

      <h3 className="empty-state-title">{finalTitle}</h3>
      <p className="empty-state-desc">{finalMessage}</p>

      {onAction && (
        <button
          type="button"
          className="empty-state-btn"
          onClick={onAction}
        >
          {finalActionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
