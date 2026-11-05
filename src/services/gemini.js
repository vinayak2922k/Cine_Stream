const GEMINI_API_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

export const getGeminiKey = () => {
  const key = (import.meta.env.VITE_GEMINI_KEY || '').trim();
  if (!key || key.includes('your_gemini')) return '';
  return key;
};

export const sanitizeMovieTitle = (rawText) => {
  if (!rawText) return '';
  return rawText
    .split('\n')[0]
    .replace(/^(movie|title|recommendation|film|you should watch):\s*/i, '')
    .replace(/[*_#`~]/g, '')
    .replace(/^["'“”‘’«»]+|["'“”‘’«»]+$/g, '')
    .replace(/\s*\(\d{4}\)\s*$/, '')
    .replace(/[.:;!?-]+$/, '')
    .trim();
};

const MOOD_MAP = [
  { match: /(sad|cry|depressed|grief|down)/i, pick: 'Cinema Paradiso' },
  { match: /(action|adrenaline|hype|thrill|explode)/i, pick: 'Mad Max: Fury Road' },
  { match: /(sci-fi|future|space|wormhole)/i, pick: 'Interstellar' },
  { match: /(mind|bending|trippy|dream|puzzle)/i, pick: 'Inception' },
  { match: /(noir|mystery|detective|rain|dark)/i, pick: 'Blade Runner 2049' },
  { match: /(epic|desert|war|ancient)/i, pick: 'Dune: Part Two' },
  { match: /(crime|mob|gangster|mafia)/i, pick: 'The Godfather' },
  { match: /(wonder|magic|fantasy|cozy|spirit)/i, pick: 'Spirited Away' },
  { match: /(funny|laugh|absurd|comedy)/i, pick: 'The Grand Budapest Hotel' },
  { match: /(music|drum|intensity|jazz)/i, pick: 'Whiplash' },
];

export const getMovieRecommendationByMood = async (moodText, signal) => {
  const cleanPrompt = moodText.trim();
  if (!cleanPrompt) throw new Error('Please enter a mood description.');

  const apiKey = getGeminiKey();

  if (apiKey) {
    try {
      const url = `${GEMINI_API_ENDPOINT}?key=${apiKey}`;
      const prompt = `Suggest ONE movie based on this mood: ${cleanPrompt}. Return ONLY the movie title as a plaintext string.`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
        signal,
      });

      if (response.ok) {
        const data = await response.json();
        const rawTitle = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const sanitized = sanitizeMovieTitle(rawTitle);
        if (sanitized) return { title: sanitized, isAiGenerated: true };
      }
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      console.warn('Gemini request failed, falling back to curated mood map:', err);
    }
  }

  // Fallback to local mood map if API key is unset
  await new Promise((r) => setTimeout(r, 600));
  const found = MOOD_MAP.find((m) => m.match.test(cleanPrompt));
  return { title: found ? found.pick : 'Oppenheimer', isAiGenerated: false };
};
