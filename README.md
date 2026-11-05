# Cine—Stream 🎬

> A movie discovery Single Page Application built with React 18, Vite, and TMDB. Styled under the **"Midnight Matinee"** art direction: vintage cinema marquee meets modern editorial film magazine.

---

## 🌟 Key Features

- **"Midnight Matinee" Aesthetic**: Warm near-black background (`#0E0C0A`), marquee amber accents (`#F2A93B`), ticket red highlights (`#D64530`), and editorial typography (*Bebas Neue*, *Fraunces*, *DM Sans*, *DM Mono*).
- **Ticket-Stub Cards**: Cards styled like authentic cinema tickets with side notch cutouts, perforation dividers, hover lift and tilt, warm amber glow, and slide-up synopsis drawer.
- **Infinite Scroll**: Powered by the native `IntersectionObserver` API on an invisible bottom sentinel. Smooth 60fps scrolling with loading locks, page limits, and ID de-duplication.
- **Custom 500ms Debouncing**: Built-in `useDebounce` hook with automatic `AbortController` cancellation for pending requests to eliminate search race conditions.
- **Watchlist (Favorites)**: Global state managed via React Context (`FavoritesContext`), lazily initialized from `localStorage` and synchronized on updates with a live counter badge.
- **AI Mood Matcher**: Translates natural language emotions (e.g., *"I feel like an intense puzzle film"*) into movie picks via Google Gemini API, highlighting the result in a featured **"Tonight's Pick"** spotlight card.
- **Warm-Tone Skeletons**: Ticket-stub shaped skeleton loaders with a warm shimmer gradient during asynchronous loading.
- **Resilient Fallback Mode**: Built-in 24-movie curated archival dataset that activates automatically whenever external APIs are blocked or credentials are unset.

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Add your API credentials:
```env
# TMDB API Read Access Token (v4) or API Key (v3)
VITE_TMDB_KEY=your_tmdb_read_access_token_or_api_key_here

# Google Gemini API Key (for AI Mood Matcher)
VITE_GEMINI_KEY=your_gemini_api_key_here
```

### 3. Run the Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
cine-stream/
├── src/
│   ├── components/
│   │   ├── EmptyState.jsx / .css
│   │   ├── HeartButton.jsx / .css
│   │   ├── MarqueeHero.jsx / .css
│   │   ├── MoodMatcher.jsx / .css
│   │   ├── MovieCard.jsx / .css
│   │   ├── MovieGrid.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   ├── SearchBar.jsx / .css
│   │   ├── SectionHeader.jsx / .css
│   │   └── Skeleton.jsx / .css
│   ├── context/
│   │   └── FavoritesContext.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useInfiniteScroll.js
│   ├── pages/
│   │   ├── Favorites.jsx / .css
│   │   └── Home.jsx / .css
│   ├── services/
│   │   ├── gemini.js
│   │   ├── mockArchive.js
│   │   └── tmdb.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── Prompts.md
└── package.json
```

