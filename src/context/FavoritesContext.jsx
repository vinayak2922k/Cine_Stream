import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'cine_stream_favorites_v1';

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  // WHY: Lazy initialization reads localStorage once on mount, avoiding JSON parsing on each render
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // WHY: Syncs favorites array to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to sync favorites:', err);
    }
  }, [favorites]);

  const toggleFavorite = (movie) => {
    if (!movie?.id) return;
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      return exists ? prev.filter((item) => item.id !== movie.id) : [movie, ...prev];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((item) => item.id === movieId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;
