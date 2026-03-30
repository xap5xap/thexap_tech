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
  drawSmokeBack,
  drawSmokeFront,
  drawVignette,
  spawnParticles,
  updateParticles,
  getRocketDimensions,
  getRocketY,
  IGNITION_START,
  LAUNCH_START
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
  const mouseRef = useRef({ x: -1, y: -1 }); // -1 = not on canvas
  const hoverProgressRef = useRef(0);

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

    // Mouse tracking for hover-to-ignite
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const render = (timestamp: number) => {
      if (document.hidden) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const scrollP = progressRef.current;
      const w = sizeRef.current.width;
      const h = sizeRef.current.height;

      // Hit-test mouse against rocket bounding box
      const dims = getRocketDimensions(w, h);
      const rocketY = getRocketY(scrollP, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pad = dims.rocketW * 0.8; // generous hit area around rocket
      const isHovering =
        mx >= 0 &&
        mx >= dims.centerX - dims.rocketW / 2 - pad &&
        mx <= dims.centerX + dims.rocketW / 2 + pad &&
        my >= rocketY - pad &&
        my <= rocketY + dims.rocketH + dims.nozzleH + pad;

      // Smoothly ramp hover progress up/down
      const hoverTarget = isHovering ? LAUNCH_START : 0;
      const rampSpeed = 0.03; // per frame (~0.5s to full at 60fps)
      if (hoverProgressRef.current < hoverTarget) {
        hoverProgressRef.current = Math.min(hoverTarget, hoverProgressRef.current + rampSpeed);
      } else if (hoverProgressRef.current > hoverTarget) {
        hoverProgressRef.current = Math.max(hoverTarget, hoverProgressRef.current - rampSpeed * 0.5);
      }

      // Update cursor
      canvas.style.cursor = isHovering ? "pointer" : "default";

      // Effective progress: whichever is higher
      const p = Math.max(scrollP, hoverProgressRef.current);

      // Draw scene layers (back to front)
      drawSky(ctx, w, h);
      drawStarfield(ctx, starsRef.current, timestamp, p, w);
      drawSmokeBack(ctx, p, w, h, timestamp); // smoke behind buildings
      drawSkyline(ctx, buildingsRef.current, windowStatesRef.current, p, timestamp, w, h);
      drawRocket(ctx, p, timestamp, w, h);

      // Particle system (small exhaust sparks)
      const { rocketW, rocketH, nozzleH, centerX } = dims;
      const rocketBaseY = rocketY + rocketH * 0.75 + nozzleH;

      spawnParticles(particlesRef.current, p, rocketBaseY, centerX, rocketW);
      updateParticles(particlesRef.current);
      drawExhaust(ctx, particlesRef.current, w);

      drawSmokeFront(ctx, p, w, h, timestamp); // smoke in front of buildings

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
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [width, height]);

  function flickerWindows(progress: number) {
    const buildings = buildingsRef.current;
    const states = windowStatesRef.current;
    if (!states.length) return;

    // Target on-ratio increases with progress
    let targetOnRatio: number;
    const ignitionRange = LAUNCH_START - IGNITION_START;
    const launchRange = 1 - LAUNCH_START;
    if (progress < IGNITION_START) targetOnRatio = 0.15;
    else if (progress < LAUNCH_START) targetOnRatio = 0.15 + ((progress - IGNITION_START) / ignitionRange) * 0.15;
    else targetOnRatio = 0.3 + ((progress - LAUNCH_START) / launchRange) * 0.2;

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
