import { useRef, useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import RocketLaunchScene from "./scenes/RocketLaunchScene";

export default function HeroCanvasContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);
  const rafId = useRef(0);
  const lastProgress = useRef(0);

  // ResizeObserver for container dimensions
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Custom scroll progress for the hero:
  // progress = 0 when page just loaded (rect.top = 0)
  // progress = 1 when hero bottom reaches viewport top
  const updateProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollableDistance = rect.height - viewportHeight;

    let rawProgress: number;
    if (scrollableDistance <= 0) {
      // Hero is shorter than viewport, use simpler calc
      rawProgress = Math.max(0, -rect.top / rect.height);
    } else {
      rawProgress = -rect.top / scrollableDistance;
    }

    const clamped = Math.max(0, Math.min(1, rawProgress));

    if (Math.abs(clamped - lastProgress.current) > 0.001) {
      lastProgress.current = clamped;
      setProgress(clamped);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateProgress]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0
      }}
    >
      {size.width > 0 && size.height > 0 && (
        <RocketLaunchScene progress={progress} width={size.width} height={size.height} />
      )}
    </Box>
  );
}
