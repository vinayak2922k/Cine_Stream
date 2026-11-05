import React from 'react';
import './SearchBar.css';

export const SearchBar = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search films, titles, reels…',
}) => {
  return (
    <div className="cinema-search-wrapper" role="search">
      <label htmlFor="cinema-search-input" className="sr-only">
        Search movies
      </label>

      <span className="search-leading-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        id="cinema-search-input"
        type="text"
        className="cinema-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
      />

      {value && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          aria-label="Clear search input"
          title="Clear search"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
