import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Maps a container element's scroll position to a 0-1 progress value.
 * 0 = element's top edge reaches the viewport bottom
 * 1 = element's bottom edge reaches the viewport top
 */
export function useScrollProgress(containerRef: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(0);
  const lastProgress = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress = (viewportHeight - rect.top) / (rect.height + viewportHeight);
      const clamped = Math.max(0, Math.min(1, rawProgress));

      if (Math.abs(clamped - lastProgress.current) > 0.001) {
        lastProgress.current = clamped;
        setProgress(clamped);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [containerRef]);

  return progress;
}
