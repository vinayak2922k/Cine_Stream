import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import App from './App';
import './styles/global.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
