import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to trigger infinite scroll using native IntersectionObserver.
 * WHY: Runs asynchronously on the browser compositor thread instead of scroll listeners,
 * avoiding main-thread lag and jank during fast scrolling.
 */
export const useInfiniteScroll = ({
  onIntersect,
  hasMore,
  isLoading,
  rootMargin = '400px',
}) => {
  const sentinelRef = useRef(null);
  const callbackRef = useRef(onIntersect);

  useEffect(() => {
    callbackRef.current = onIntersect;
  }, [onIntersect]);

  const handleObserver = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry?.isIntersecting && hasMore && !isLoading) {
        callbackRef.current?.();
      }
    },
    [hasMore, isLoading]
  );

  useEffect(() => {
    const sentinelEl = sentinelRef.current;
    if (!sentinelEl || !hasMore) return;

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin,
      threshold: 0.1,
    });

    observer.observe(sentinelEl);
    return () => observer.disconnect();
  }, [handleObserver, hasMore, rootMargin]);

  return { sentinelRef };
};

export default useInfiniteScroll;
