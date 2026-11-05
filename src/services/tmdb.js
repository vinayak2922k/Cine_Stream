import { CURATED_ARCHIVE } from './mockArchive';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getTmdbKey = () => {
  const key = (import.meta.env.VITE_TMDB_KEY || '').trim();
  if (!key || key.includes('your_tmdb_read_access_token')) return '';
  return key;
};

export const getPosterUrl = (posterPath) => {
  if (!posterPath) return null;
  if (posterPath.startsWith('http://') || posterPath.startsWith('https://')) {
    return posterPath;
  }
  return `${IMAGE_BASE_URL}${posterPath}`;
};

const paginateArchive = (items, page = 1, pageSize = 8) => {
  const start = (page - 1) * pageSize;
  const results = items.slice(start, start + pageSize);
  const totalPages = Math.ceil(items.length / pageSize) || 1;

  return {
    page,
    results,
    total_pages: totalPages,
    total_results: items.length,
    isArchiveFallback: true,
  };
};

export const fetchPopularMovies = async (page = 1, signal) => {
  const tmdbKey = getTmdbKey();

  if (tmdbKey) {
    try {
      const isBearer = tmdbKey.startsWith('eyJ');
      const params = new URLSearchParams({
        include_adult: 'false',
        language: 'en-US',
        page: String(page),
      });

      if (!isBearer) params.set('api_key', tmdbKey);

      const url = `${TMDB_BASE_URL}/movie/popular?${params.toString()}`;
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(isBearer ? { Authorization: `Bearer ${tmdbKey}` } : {}),
        },
        signal,
      });

      if (res.ok) {
        const data = await res.json();
        return { ...data, isArchiveFallback: false };
      }
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      console.warn('TMDB fetch failed, falling back to curated archive:', err.message);
    }
  }

  await new Promise((r) => setTimeout(r, 200));
  return paginateArchive(CURATED_ARCHIVE, page, 8);
};

export const searchMovies = async (query, page = 1, signal) => {
  const cleanQuery = (query || '').trim();
  if (!cleanQuery) return fetchPopularMovies(page, signal);

  const tmdbKey = getTmdbKey();

  if (tmdbKey) {
    try {
      const isBearer = tmdbKey.startsWith('eyJ');
      const params = new URLSearchParams({
        include_adult: 'false',
        language: 'en-US',
        query: cleanQuery,
        page: String(page),
      });

      if (!isBearer) params.set('api_key', tmdbKey);

      const url = `${TMDB_BASE_URL}/search/movie?${params.toString()}`;
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(isBearer ? { Authorization: `Bearer ${tmdbKey}` } : {}),
        },
        signal,
      });

      if (res.ok) {
        const data = await res.json();
        return { ...data, isArchiveFallback: false };
      }
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      console.warn('TMDB search failed, falling back to curated archive:', err.message);
    }
  }

  await new Promise((r) => setTimeout(r, 150));
  const lower = cleanQuery.toLowerCase();
  const filtered = CURATED_ARCHIVE.filter(
    (m) =>
      m.title.toLowerCase().includes(lower) ||
      (m.overview && m.overview.toLowerCase().includes(lower))
  );

  return paginateArchive(filtered, page, 8);
};
