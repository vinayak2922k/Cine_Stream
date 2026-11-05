import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="cine-stream-app">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchQuery={searchQuery}
              onClearSearch={handleClearSearch}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
