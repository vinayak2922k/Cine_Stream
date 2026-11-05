import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce rapidly changing values like search input.
 * WHY: Waits until user stops typing for `delay` ms before updating, preventing excessive API requests.
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // WHY: Clears previous timer on each keystroke so only the final pause triggers the update
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
