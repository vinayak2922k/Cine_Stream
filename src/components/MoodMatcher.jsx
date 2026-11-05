import React, { useState } from 'react';
import { getMovieRecommendationByMood } from '../services/gemini';
import { searchMovies, getPosterUrl } from '../services/tmdb';
import { useFavorites } from '../context/FavoritesContext';
import HeartButton from './HeartButton';
import './MoodMatcher.css';

export const MoodMatcher = () => {
  const [moodText, setMoodText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const [isAiPowered, setIsAiPowered] = useState(false);

  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = moodText.trim();
    if (!query) return;

    setIsLoading(true);
    setError(null);
    setRecommendedMovie(null);

    try {
      const recommendation = await getMovieRecommendationByMood(query);
      setIsAiPowered(recommendation.isAiGenerated);

      const searchResult = await searchMovies(recommendation.title, 1);
      const topMatch = searchResult.results?.[0];

      if (topMatch) {
        setRecommendedMovie(topMatch);
      } else {
        setError(`No titles matching "${recommendation.title}" found.`);
      }
    } catch (err) {
      setError(err.message || 'Unable to get recommendation.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDismiss = () => {
    setRecommendedMovie(null);
    setError(null);
    setMoodText('');
  };

  return (
    <section className="mood-matcher-panel" aria-label="AI Mood Matcher">
      <div className="mood-matcher-card">
        <div className="mood-header-row">
          <div className="mood-title-group">
            <span className="mood-tag">AI MOOD MATCHER</span>
            <h2 className="mood-heading">Not sure what to watch tonight?</h2>
          </div>
          <span className="mood-sparkle-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent-amber)" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="mood-form">
          <div className="mood-input-wrapper">
            <input
              type="text"
              className="mood-input"
              value={moodText}
              onChange={(e) => setMoodText(e.target.value)}
              placeholder="e.g. I'm feeling thoughtful and want an intense sci-fi…"
              aria-label="Describe your current mood"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="mood-submit-btn"
              disabled={isLoading || !moodText.trim()}
            >
              {isLoading ? 'Thinking…' : 'MATCH MY MOOD'}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="mood-status-box loading-box" role="status">
            <span className="projectionist-reel-spin" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-amber)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <p className="mood-status-text">The projectionist is thinking…</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="mood-status-box error-box" role="alert">
            <p className="mood-error-text">{error}</p>
            <button type="button" className="mood-retry-btn" onClick={handleDismiss}>
              Dismiss
            </button>
          </div>
        )}

        {recommendedMovie && !isLoading && (
          <article className="tonights-pick-card" aria-label="Tonight's Featured Film Pick">
            <div className="tonights-pick-header">
              <div className="pick-badge-container">
                <span className="tonights-pick-badge">★ TONIGHT'S SPECIAL PRESENTATION</span>
                {isAiPowered && <span className="pick-ai-indicator">POWERED BY GEMINI AI</span>}
              </div>
              <button
                type="button"
                className="pick-dismiss-btn"
                onClick={handleDismiss}
                aria-label="Dismiss pick"
              >
                ✕
              </button>
            </div>

            <div className="tonights-pick-body">
              <div className="tonights-pick-poster-wrap">
                {recommendedMovie.poster_path ? (
                  <img
                    src={getPosterUrl(recommendedMovie.poster_path)}
                    alt={recommendedMovie.title}
                    className="tonights-pick-img"
                    loading="lazy"
                    decoding="async"
                    width="500"
                    height="750"
                  />
                ) : (
                  <div className="tonights-pick-fallback">
                    <span>ARCHIVE REEL</span>
                  </div>
                )}
              </div>

              <div className="tonights-pick-details">
                <div className="pick-title-row">
                  <h3 className="tonights-pick-title">{recommendedMovie.title}</h3>
                  <HeartButton
                    isFavorite={isFavorite(recommendedMovie.id)}
                    onToggle={() => toggleFavorite(recommendedMovie)}
                    movieTitle={recommendedMovie.title}
                  />
                </div>

                <div className="tonights-pick-meta">
                  <span className="pick-year">
                    {recommendedMovie.release_date ? recommendedMovie.release_date.slice(0, 4) : 'Archive'}
                  </span>
                  <span className="pick-rating">
                    ★ {Number(recommendedMovie.vote_average || 7.5).toFixed(1)} / 10
                  </span>
                </div>

                <p className="tonights-pick-overview">
                  {recommendedMovie.overview || 'A cinematic masterpiece selected for your mood tonight.'}
                </p>

                <div className="tonights-pick-actions">
                  <button
                    type="button"
                    className="pick-watch-toggle-btn"
                    onClick={() => toggleFavorite(recommendedMovie)}
                  >
                    {isFavorite(recommendedMovie.id) ? '✓ IN WATCHLIST' : '+ ADD TO WATCHLIST'}
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default MoodMatcher;
