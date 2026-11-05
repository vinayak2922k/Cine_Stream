import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import SearchBar from './SearchBar';
import './Navbar.css';

export const Navbar = ({ searchQuery = '', onSearchChange, onClearSearch }) => {
  const { favoritesCount } = useFavorites();

  return (
    <header className="cinema-header">
      <div className="container cinema-header-inner">
        <Link to="/" className="cinema-brand" aria-label="Cine-Stream Home">
          <span className="brand-film-spool" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="var(--accent-amber)"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <span className="brand-wordmark">
            CINE<span className="brand-dash">—</span>STREAM
          </span>
        </Link>

        {onSearchChange && (
          <div className="cinema-header-search">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              onClear={onClearSearch}
            />
          </div>
        )}

        <nav className="cinema-nav-links" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            <span className="nav-link-text">SHOWING</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `nav-link nav-link-fav ${isActive ? 'nav-link-active' : ''}`
            }
          >
            <span className="nav-link-text">WATCHLIST</span>
            <span
              className={`nav-badge ${favoritesCount > 0 ? 'badge-has-items' : ''}`}
            >
              {String(favoritesCount).padStart(2, '0')}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
