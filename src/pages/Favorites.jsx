import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import SectionHeader from '../components/SectionHeader';
import MovieGrid from '../components/MovieGrid';
import './Favorites.css';

export const Favorites = () => {
  const { favorites, favoritesCount } = useFavorites();
  const navigate = useNavigate();

  return (
    <main className="cinema-favorites container">
      <SectionHeader
        title="YOUR WATCHLIST"
        subtitle="Saved film reels in your personal collection"
        count={favoritesCount}
      />

      <MovieGrid
        movies={favorites}
        isLoading={false}
        error={null}
        onClearSearch={() => navigate('/')}
        isSearch={false}
      />
    </main>
  );
};

export default Favorites;
