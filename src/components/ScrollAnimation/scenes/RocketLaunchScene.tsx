import { useEffect, useRef } from "react";
import {
  Star,
  Building,
  Particle,
  generateStars,
  generateBuildings,
  generateWindowStates,
  createParticlePool,
  drawSky,
  drawStarfield,
  drawSkyline,
  drawRocket,
  drawExhaust,
  drawVignette,
  spawnParticles,
  updateParticles,
  getRocketDimensions,
  getRocketY
} from "./rocketDrawUtils";

interface Props {
  progress: number;
  width: number;
  height: number;
}

export default function RocketLaunchScene({ progress, width, height }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  const starsRef = useRef<Star[]>([]);
  const buildingsRef = useRef<Building[]>([]);
  const windowStatesRef = useRef<boolean[][]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastFlickerRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef(0);

  // Keep progress ref in sync
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Regenerate scene data when dimensions change
  useEffect(() => {
    if (width === 0 || height === 0) return;

    sizeRef.current = { width, height };
    starsRef.current = generateStars(width, height);
    buildingsRef.current = generateBuildings(width, height);

    const onRatio = 0.15;
    windowStatesRef.current = generateWindowStates(buildingsRef.current, onRatio);
    particlesRef.current = createParticlePool(width);
  }, [width, height]);

  // Main rAF render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const render = (timestamp: number) => {
      if (document.hidden) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const p = progressRef.current;
      const w = sizeRef.current.width;
      const h = sizeRef.current.height;

      // Draw scene layers
      drawSky(ctx, w, h);
      drawStarfield(ctx, starsRef.current, timestamp, p, w);
      drawSkyline(ctx, buildingsRef.current, windowStatesRef.current, p, timestamp, w, h);
      drawRocket(ctx, p, timestamp, w, h);

      // Particle system
      const { rocketW, rocketH, nozzleH, centerX } = getRocketDimensions(w, h);
      const rocketY = getRocketY(p, h);
      const rocketBaseY = rocketY + rocketH * 0.75 + nozzleH;

      spawnParticles(particlesRef.current, p, rocketBaseY, centerX, rocketW);
      updateParticles(particlesRef.current);
      drawExhaust(ctx, particlesRef.current, w);

      // Vignette overlay (last layer)
      drawVignette(ctx, w, h);

      // Flicker windows every ~500ms
      if (timestamp - lastFlickerRef.current > 500) {
        lastFlickerRef.current = timestamp;
        flickerWindows(p);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [width, height]);

  function flickerWindows(progress: number) {
    const buildings = buildingsRef.current;
    const states = windowStatesRef.current;
    if (!states.length) return;

    // Target on-ratio increases with progress
    let targetOnRatio: number;
    if (progress < 0.3) targetOnRatio = 0.15;
    else if (progress < 0.6) targetOnRatio = 0.15 + ((progress - 0.3) / 0.3) * 0.15;
    else targetOnRatio = 0.3 + ((progress - 0.6) / 0.4) * 0.2;

    for (let i = 0; i < buildings.length; i++) {
      const b = buildings[i];
      const bStates = states[i];
      if (!bStates) continue;
      // Total windows across all window groups
      let total = 0;
      for (const g of b.windowGroups) {
        total += g.cols * g.rows;
      }
      if (total === 0) continue;

      // Toggle 2-3 random windows, biased toward the target ratio
      const toggleCount = 2 + Math.floor(Math.random() * 2);
      for (let t = 0; t < toggleCount; t++) {
        const idx = Math.floor(Math.random() * total);
        const currentOn = bStates.filter(Boolean).length / total;
        if (currentOn < targetOnRatio) {
          bStates[idx] = true;
        } else if (currentOn > targetOnRatio + 0.1) {
          bStates[idx] = false;
        } else {
          bStates[idx] = !bStates[idx];
        }
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block"
      }}
    />
  );
}
