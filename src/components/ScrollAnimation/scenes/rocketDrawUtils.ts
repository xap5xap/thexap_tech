// ── Data Structures ──

export interface Star {
  x: number;
  y: number;
  radius: number;
  twinkleOffset: number;
  twinkleSpeed: number;
}

export interface Building {
  x: number;
  width: number;
  height: number;
  windowCols: number;
  windowRows: number;
  topStyle: "flat" | "dome" | "peak" | "stepped";
  layer: number; // 0=back, 1=mid, 2=front
  windowColorIndices: number[]; // pre-assigned color index per window
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

// ── Constants ──

const SKY_COLOR = "#0a0a1a";
const PRIMARY = "#f59415";

const WINDOW_COLORS_ON = ["#ffd870", "#ffe8a0", "#ffcc44", "#e8c060", "#f0d080", "#ffffff"];

const WINDOW_COLORS_OFF = ["#7b7a7c", "#9da3ab", "#b3b9c2", "#bcc1cc", "#c5cad4", "#505060", "#3a3a4a", "#606878"];

const BUILDING_GRADIENTS: [string, string][] = [
  ["#1a1a2e", "#12121f"], // back layer
  ["#252540", "#1a1a30"], // mid layer
  ["#2d2d4a", "#1e1e35"] // front layer
];

const TOP_STYLES: Building["topStyle"][] = ["flat", "dome", "peak", "stepped"];

// ── Generation Functions ──

export function generateStars(width: number, height: number): Star[] {
  const isMobile = width < 768;
  const count = isMobile ? 40 + Math.floor(Math.random() * 20) : 80 + Math.floor(Math.random() * 70);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.7,
      radius: 0.5 + Math.random() * 1.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.5 + Math.random() * 1.5
    });
  }
  return stars;
}

export function generateBuildings(width: number, height: number): Building[] {
  const isMobile = width < 768;
  const count = isMobile ? 5 + Math.floor(Math.random() * 3) : 8 + Math.floor(Math.random() * 6);
  const buildings: Building[] = [];
  const avgWidth = width / (count * 0.7);

  for (let i = 0; i < count; i++) {
    const bWidth = avgWidth * (0.6 + Math.random() * 0.8);
    const bHeight = height * (0.25 + Math.random() * 0.35);
    const x = (i / count) * width - bWidth * 0.1 + Math.random() * (avgWidth * 0.3);
    const windowCols = Math.max(3, Math.floor(bWidth / 10));
    const windowRows = Math.max(4, Math.floor(bHeight / 12));
    const total = windowCols * windowRows;

    // Pre-assign a color index to each window for consistency across frames
    const windowColorIndices = Array.from({ length: total }, () =>
      Math.floor(Math.random() * WINDOW_COLORS_OFF.length)
    );

    const layer = i < count / 3 ? 0 : i < (count * 2) / 3 ? 1 : 2;

    buildings.push({
      x,
      width: bWidth,
      height: bHeight,
      windowCols,
      windowRows,
      topStyle: TOP_STYLES[Math.floor(Math.random() * TOP_STYLES.length)],
      layer,
      windowColorIndices
    });
  }

  // Sort by layer so back buildings draw first
  buildings.sort((a, b) => a.layer - b.layer);
  return buildings;
}

export function generateWindowStates(buildings: Building[], onRatio: number): boolean[][] {
  return buildings.map(b => {
    const total = b.windowCols * b.windowRows;
    return Array.from({ length: total }, () => Math.random() < onRatio);
  });
}

// ── Drawing Functions ──

export function drawSky(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Sky gradient: deep blue-black at top, slightly lighter at horizon
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, "#050510");
  grad.addColorStop(0.7, SKY_COLOR);
  grad.addColorStop(1, "#0f0f2a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
}

export function drawStarfield(
  ctx: CanvasRenderingContext2D,
  stars: Star[],
  time: number,
  progress: number,
  width: number
) {
  const isMobile = width < 768;

  for (const star of stars) {
    const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset));
    ctx.globalAlpha = twinkle;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    // Phase 3: star streaks (desktop only)
    if (!isMobile && progress > 0.6) {
      const streakLength = ((progress - 0.6) / 0.4) * 15;
      ctx.strokeStyle = `rgba(255, 255, 255, ${twinkle * 0.4})`;
      ctx.lineWidth = star.radius * 0.5;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x, star.y - streakLength);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

// ── Building Drawing ──

function drawBuildingShape(ctx: CanvasRenderingContext2D, b: Building, topY: number, baseY: number) {
  ctx.beginPath();

  switch (b.topStyle) {
    case "dome":
      ctx.moveTo(b.x, baseY);
      ctx.lineTo(b.x, topY + b.width * 0.15);
      ctx.quadraticCurveTo(b.x, topY, b.x + b.width * 0.15, topY);
      ctx.lineTo(b.x + b.width * 0.85, topY);
      ctx.quadraticCurveTo(b.x + b.width, topY, b.x + b.width, topY + b.width * 0.15);
      ctx.lineTo(b.x + b.width, baseY);
      ctx.closePath();
      break;

    case "peak": {
      const peakH = b.height * 0.12;
      ctx.moveTo(b.x, baseY);
      ctx.lineTo(b.x, topY + peakH);
      ctx.lineTo(b.x + b.width * 0.35, topY + peakH);
      ctx.quadraticCurveTo(b.x + b.width * 0.5, topY - peakH * 0.3, b.x + b.width * 0.65, topY + peakH);
      ctx.lineTo(b.x + b.width, topY + peakH);
      ctx.lineTo(b.x + b.width, baseY);
      ctx.closePath();
      break;
    }

    case "stepped": {
      const stepW = b.width * 0.2;
      const stepH = b.height * 0.1;
      ctx.moveTo(b.x, baseY);
      ctx.lineTo(b.x, topY + stepH);
      ctx.lineTo(b.x + stepW, topY + stepH);
      ctx.lineTo(b.x + stepW, topY);
      ctx.lineTo(b.x + b.width - stepW, topY);
      ctx.lineTo(b.x + b.width - stepW, topY + stepH);
      ctx.lineTo(b.x + b.width, topY + stepH);
      ctx.lineTo(b.x + b.width, baseY);
      ctx.closePath();
      break;
    }

    default:
      // flat with subtle rounded top corners
      ctx.moveTo(b.x, baseY);
      ctx.lineTo(b.x, topY + 3);
      ctx.quadraticCurveTo(b.x, topY, b.x + 3, topY);
      ctx.lineTo(b.x + b.width - 3, topY);
      ctx.quadraticCurveTo(b.x + b.width, topY, b.x + b.width, topY + 3);
      ctx.lineTo(b.x + b.width, baseY);
      ctx.closePath();
      break;
  }
}

export function drawSkyline(
  ctx: CanvasRenderingContext2D,
  buildings: Building[],
  windowStates: boolean[][],
  progress: number,
  _time: number,
  width: number,
  height: number
) {
  const baseY = height;
  const isMobile = width < 768;

  for (let i = 0; i < buildings.length; i++) {
    const b = buildings[i];
    const topY = baseY - b.height;

    // Building body with gradient
    const colors = BUILDING_GRADIENTS[Math.min(b.layer, 2)];
    const grad = ctx.createLinearGradient(b.x, topY, b.x, baseY);
    grad.addColorStop(0, colors[0]);
    grad.addColorStop(1, colors[1]);

    ctx.globalAlpha = b.layer === 0 ? 0.5 : b.layer === 1 ? 0.65 : 0.8;

    drawBuildingShape(ctx, b, topY, baseY);
    ctx.fillStyle = grad;
    ctx.fill();

    // Subtle edge highlight on front buildings
    if (b.layer === 2) {
      drawBuildingShape(ctx, b, topY, baseY);
      ctx.strokeStyle = "rgba(100, 100, 140, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    // Windows
    const states = windowStates[i];
    if (!states) continue;

    const winW = Math.max(5, (b.width / (b.windowCols + 1)) * 0.5);
    const winH = Math.max(5, (b.height / (b.windowRows + 1)) * 0.4);
    const padX = (b.width - b.windowCols * winW) / (b.windowCols + 1);
    const padY = (b.height - b.windowRows * winH) / (b.windowRows + 1);

    for (let row = 0; row < b.windowRows; row++) {
      for (let col = 0; col < b.windowCols; col++) {
        const idx = row * b.windowCols + col;
        const wx = b.x + padX + col * (winW + padX);
        const wy = topY + padY + row * (winH + padY);
        const isOn = states[idx];
        const colorIdx = b.windowColorIndices[idx] ?? 0;

        if (isOn) {
          const onColorIdx = colorIdx % WINDOW_COLORS_ON.length;
          ctx.fillStyle = WINDOW_COLORS_ON[onColorIdx];

          // Glow on lit windows (desktop only)
          if (!isMobile) {
            ctx.shadowColor = WINDOW_COLORS_ON[onColorIdx];
            ctx.shadowBlur = 3;
          }
        } else {
          ctx.fillStyle = WINDOW_COLORS_OFF[colorIdx];
          ctx.shadowBlur = 0;
        }

        ctx.fillRect(wx, wy, winW, winH);
      }
      // Reset shadow after each row for performance
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
    }
  }

  // Ground fog
  const fogGrad = ctx.createLinearGradient(0, height - 30, 0, height);
  fogGrad.addColorStop(0, "transparent");
  fogGrad.addColorStop(1, "rgba(10, 10, 26, 0.6)");
  ctx.fillStyle = fogGrad;
  ctx.fillRect(0, height - 30, width, 30);

  // Exhaust glow on buildings (Phase 3)
  if (progress > 0.6) {
    const glowIntensity = (progress - 0.6) / 0.4;
    const rocketBaseX = width / 2;
    const maxBH = buildings.reduce((max, b) => Math.max(max, b.height), 0);
    const rocketBaseY = baseY - maxBH * 0.5;
    const gradient = ctx.createRadialGradient(
      rocketBaseX,
      rocketBaseY,
      0,
      rocketBaseX,
      rocketBaseY,
      width * 0.4 * glowIntensity
    );
    gradient.addColorStop(0, `rgba(245, 148, 21, ${0.25 * glowIntensity})`);
    gradient.addColorStop(0.5, `rgba(245, 148, 21, ${0.1 * glowIntensity})`);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
}

// ── Rocket Drawing ──

export function getRocketDimensions(width: number, height: number) {
  const rocketH = height * 0.5;
  const rocketW = rocketH * 0.18;
  const centerX = width / 2;
  const noseH = rocketH * 0.2;
  const bodyH = rocketH * 0.55;
  const nozzleH = rocketH * 0.1;
  const finH = rocketH * 0.25;
  return { rocketH, rocketW, centerX, noseH, bodyH, nozzleH, finH };
}

export function getRocketY(progress: number, height: number, buildings: Building[]): number {
  const maxBuildingH = buildings.reduce((max, b) => Math.max(max, b.height), 0);
  const dims = getRocketDimensions(0, height);
  const padHeight = 8;
  const launchPadY = height - maxBuildingH * 0.4 - padHeight;
  const onPadY = launchPadY - dims.rocketH;

  if (progress <= 0.6) return onPadY;

  // Phase 3: liftoff with easeIn
  const t = (progress - 0.6) / 0.4;
  const eased = t * t;
  const targetY = -dims.rocketH - 40;
  return onPadY + (targetY - onPadY) * eased;
}

function resetShadow(ctx: CanvasRenderingContext2D) {
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}

export function drawRocket(
  ctx: CanvasRenderingContext2D,
  progress: number,
  _time: number,
  width: number,
  height: number,
  buildings: Building[]
) {
  const dims = getRocketDimensions(width, height);
  const { rocketH, rocketW, centerX, noseH, bodyH, nozzleH, finH } = dims;
  const rocketY = getRocketY(progress, height, buildings);

  // Phase 2 vibration
  let offsetX = 0;
  if (progress > 0.3 && progress <= 0.6) {
    const intensity = (progress - 0.3) / 0.3;
    offsetX = (Math.random() * 2 - 1) * intensity * 2;
  }

  const x = centerX + offsetX;
  const y = rocketY;
  const bodyTop = y + noseH;
  const bodyBottom = bodyTop + bodyH;
  const halfW = rocketW / 2;

  // ── 1. Ambient glow behind rocket ──
  const glowGrad = ctx.createRadialGradient(x, y + rocketH * 0.5, 0, x, y + rocketH * 0.5, rocketW * 3);
  glowGrad.addColorStop(0, "rgba(245, 148, 21, 0.08)");
  glowGrad.addColorStop(1, "transparent");
  ctx.fillStyle = glowGrad;
  ctx.fillRect(x - rocketW * 3, y, rocketW * 6, rocketH);

  // ── 2. Fins (drawn behind body) ──
  drawFin(ctx, x, bodyTop, bodyBottom, halfW, finH, -1); // left
  drawFin(ctx, x, bodyTop, bodyBottom, halfW, finH, 1); // right

  // ── 3. Engine nozzle ──
  drawNozzle(ctx, x, bodyBottom, halfW, nozzleH, progress);

  // ── 4. Body with gradient and shadow ──
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
  ctx.shadowBlur = rocketW * 0.5;
  ctx.shadowOffsetX = rocketW * 0.08;
  ctx.shadowOffsetY = rocketH * 0.03;

  // Curved body path
  const bodyPath = new Path2D();
  bodyPath.moveTo(x - halfW * 0.96, bodyTop);
  bodyPath.bezierCurveTo(
    x - halfW * 1.04,
    bodyTop + bodyH * 0.25,
    x - halfW * 1.04,
    bodyTop + bodyH * 0.75,
    x - halfW * 0.92,
    bodyBottom
  );
  bodyPath.lineTo(x + halfW * 0.92, bodyBottom);
  bodyPath.bezierCurveTo(
    x + halfW * 1.04,
    bodyTop + bodyH * 0.75,
    x + halfW * 1.04,
    bodyTop + bodyH * 0.25,
    x + halfW * 0.96,
    bodyTop
  );
  bodyPath.closePath();

  // Horizontal gradient for cylindrical lighting
  const bodyGrad = ctx.createLinearGradient(x - halfW, bodyTop, x + halfW, bodyTop);
  bodyGrad.addColorStop(0, "#c8c8c8");
  bodyGrad.addColorStop(0.2, "#d8d8d8");
  bodyGrad.addColorStop(0.45, "#f0f0f0");
  bodyGrad.addColorStop(0.55, "#ffffff");
  bodyGrad.addColorStop(0.8, "#e0e0e0");
  bodyGrad.addColorStop(1, "#b8b8b8");
  ctx.fillStyle = bodyGrad;
  ctx.fill(bodyPath);
  ctx.restore();
  resetShadow(ctx);

  // Warm orange overlay
  ctx.save();
  ctx.globalAlpha = 0.25;
  const warmGrad = ctx.createLinearGradient(x - halfW, bodyTop, x + halfW, bodyTop);
  warmGrad.addColorStop(0, "#f59415");
  warmGrad.addColorStop(0.5, "#fcddb6");
  warmGrad.addColorStop(1, "#f59415");
  ctx.fillStyle = warmGrad;
  ctx.fill(bodyPath);
  ctx.restore();

  // ── 5. Metal band at nose junction ──
  const bandH = bodyH * 0.025;
  const bandGrad = ctx.createLinearGradient(x - halfW, 0, x + halfW, 0);
  bandGrad.addColorStop(0, "#595959");
  bandGrad.addColorStop(0.5, "#a6a6a6");
  bandGrad.addColorStop(1, "#595959");
  ctx.fillStyle = bandGrad;
  ctx.fillRect(x - halfW * 0.96, bodyTop, halfW * 1.92, bandH);

  // Metal band at nozzle junction
  ctx.fillStyle = bandGrad;
  ctx.fillRect(x - halfW * 0.92, bodyBottom - bandH, halfW * 1.84, bandH);

  // ── 6. Panel lines ──
  ctx.strokeStyle = "rgba(150, 150, 150, 0.25)";
  ctx.lineWidth = 0.8;
  for (const frac of [0.3, 0.55, 0.78]) {
    const lineY = bodyTop + bodyH * frac;
    // Follow the barrel curve approximately
    const bulge = frac > 0.2 && frac < 0.8 ? halfW * 1.02 : halfW * 0.95;
    ctx.beginPath();
    ctx.moveTo(x - bulge, lineY);
    ctx.lineTo(x + bulge, lineY);
    ctx.stroke();
  }

  // Vertical seam
  ctx.strokeStyle = "rgba(180, 180, 180, 0.12)";
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(x, bodyTop + bandH);
  ctx.lineTo(x, bodyBottom - bandH);
  ctx.stroke();

  // ── 7. Window (4-layer porthole) ──
  const winRadius = rocketW * 0.32;
  const winCenterY = bodyTop + bodyH * 0.3;
  drawPorthole(ctx, x, winCenterY, winRadius);

  // ── 8. Nose cone (smooth bezier dome) ──
  drawNoseCone(ctx, x, y, bodyTop, halfW, noseH);

  // ── 9. Launch pad ──
  if (progress < 0.8) {
    const maxBuildingH = buildings.reduce((max, b) => Math.max(max, b.height), 0);
    const padY = height - maxBuildingH * 0.4;
    const padW = rocketW * 2.5;
    const padGrad = ctx.createLinearGradient(centerX - padW / 2, padY, centerX + padW / 2, padY);
    padGrad.addColorStop(0, "#3a3a4a");
    padGrad.addColorStop(0.5, "#6a6a7a");
    padGrad.addColorStop(1, "#3a3a4a");
    ctx.fillStyle = padGrad;
    ctx.fillRect(centerX - padW / 2, padY - 4, padW, 8);

    // Support struts
    ctx.strokeStyle = "#4a4a5a";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(centerX - padW / 2, padY);
    ctx.lineTo(centerX - padW / 3, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX + padW / 2, padY);
    ctx.lineTo(centerX + padW / 3, height);
    ctx.stroke();
  }
}

function drawNoseCone(
  ctx: CanvasRenderingContext2D,
  x: number,
  tipY: number,
  baseY: number,
  halfW: number,
  noseH: number
) {
  // Smooth bezier dome
  const nosePath = new Path2D();
  nosePath.moveTo(x - halfW * 0.96, baseY);
  nosePath.bezierCurveTo(x - halfW * 0.96, baseY - noseH * 0.6, x - halfW * 0.2, tipY, x, tipY);
  nosePath.bezierCurveTo(x + halfW * 0.2, tipY, x + halfW * 0.96, baseY - noseH * 0.6, x + halfW * 0.96, baseY);
  nosePath.closePath();

  // Gradient fill
  const noseGrad = ctx.createLinearGradient(x - halfW, tipY, x + halfW, tipY);
  noseGrad.addColorStop(0, "#d07a10");
  noseGrad.addColorStop(0.3, "#f59415");
  noseGrad.addColorStop(0.55, "#fca64e");
  noseGrad.addColorStop(0.75, "#f59415");
  noseGrad.addColorStop(1, "#c06a08");

  ctx.fillStyle = noseGrad;
  ctx.fill(nosePath);

  // Specular highlight on nose
  ctx.save();
  ctx.globalAlpha = 0.3;
  const highlightPath = new Path2D();
  const hx = x - halfW * 0.2;
  const hy = tipY + noseH * 0.3;
  highlightPath.moveTo(hx, hy);
  highlightPath.bezierCurveTo(
    hx - halfW * 0.3,
    hy + noseH * 0.2,
    hx - halfW * 0.15,
    hy + noseH * 0.5,
    hx + halfW * 0.1,
    hy + noseH * 0.4
  );
  highlightPath.bezierCurveTo(hx + halfW * 0.2, hy + noseH * 0.1, hx + halfW * 0.1, hy - noseH * 0.05, hx, hy);
  highlightPath.closePath();
  ctx.fillStyle = "#ffffff";
  ctx.fill(highlightPath);
  ctx.restore();
}

function drawFin(
  ctx: CanvasRenderingContext2D,
  x: number,
  bodyTop: number,
  bodyBottom: number,
  halfW: number,
  finH: number,
  side: -1 | 1 // -1 = left, 1 = right
) {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowBlur = 6;
  ctx.shadowOffsetX = side * 2;
  ctx.shadowOffsetY = 2;

  const finPath = new Path2D();
  const attachTop = bodyTop + (bodyBottom - bodyTop) * 0.55;
  const attachBottom = bodyBottom;
  const tipX = x + side * halfW * 1.8;
  const tipY = bodyBottom + finH * 0.7;

  finPath.moveTo(x + side * halfW * 0.9, attachTop);
  finPath.lineTo(x + side * halfW * 0.9, attachBottom);
  finPath.bezierCurveTo(x + side * halfW * 1.0, attachBottom + finH * 0.3, tipX - side * halfW * 0.2, tipY, tipX, tipY);
  finPath.bezierCurveTo(
    tipX - side * halfW * 0.1,
    tipY - finH * 0.3,
    x + side * halfW * 1.2,
    attachTop + (attachBottom - attachTop) * 0.2,
    x + side * halfW * 0.9,
    attachTop
  );
  finPath.closePath();

  const finGrad = ctx.createLinearGradient(x, attachTop, x + side * halfW * 1.8, tipY);
  finGrad.addColorStop(0, "#cc2929");
  finGrad.addColorStop(0.5, "#e04040");
  finGrad.addColorStop(1, "#991f1f");
  ctx.fillStyle = finGrad;
  ctx.fill(finPath);

  ctx.restore();
  resetShadow(ctx);
}

function drawNozzle(
  ctx: CanvasRenderingContext2D,
  x: number,
  bodyBottom: number,
  halfW: number,
  nozzleH: number,
  progress: number
) {
  // Flared bell shape
  const nozzlePath = new Path2D();
  const topW = halfW * 0.7;
  const bottomW = halfW * 1.0;

  nozzlePath.moveTo(x - topW, bodyBottom);
  nozzlePath.bezierCurveTo(
    x - topW,
    bodyBottom + nozzleH * 0.4,
    x - bottomW * 1.1,
    bodyBottom + nozzleH * 0.8,
    x - bottomW,
    bodyBottom + nozzleH
  );
  nozzlePath.lineTo(x + bottomW, bodyBottom + nozzleH);
  nozzlePath.bezierCurveTo(
    x + bottomW * 1.1,
    bodyBottom + nozzleH * 0.8,
    x + topW,
    bodyBottom + nozzleH * 0.4,
    x + topW,
    bodyBottom
  );
  nozzlePath.closePath();

  const nozzleGrad = ctx.createLinearGradient(x - bottomW, bodyBottom, x + bottomW, bodyBottom);
  nozzleGrad.addColorStop(0, "#3a3a3a");
  nozzleGrad.addColorStop(0.3, "#888888");
  nozzleGrad.addColorStop(0.5, "#a6a6a6");
  nozzleGrad.addColorStop(0.7, "#888888");
  nozzleGrad.addColorStop(1, "#3a3a3a");
  ctx.fillStyle = nozzleGrad;
  ctx.fill(nozzlePath);

  // Inner glow during ignition/launch
  if (progress > 0.15) {
    const glowIntensity = Math.min(1, (progress - 0.15) / 0.3);
    const innerGlow = ctx.createRadialGradient(
      x,
      bodyBottom + nozzleH * 0.8,
      0,
      x,
      bodyBottom + nozzleH * 0.8,
      bottomW * 0.8
    );
    innerGlow.addColorStop(0, `rgba(255, 224, 78, ${0.8 * glowIntensity})`);
    innerGlow.addColorStop(0.4, `rgba(245, 148, 21, ${0.6 * glowIntensity})`);
    innerGlow.addColorStop(0.7, `rgba(204, 41, 41, ${0.3 * glowIntensity})`);
    innerGlow.addColorStop(1, "transparent");

    ctx.save();
    ctx.clip(nozzlePath);
    ctx.fillStyle = innerGlow;
    ctx.fillRect(x - bottomW, bodyBottom, bottomW * 2, nozzleH);
    ctx.restore();
  }
}

function drawPorthole(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  // Layer 1: Metal frame ring
  const frameGrad = ctx.createLinearGradient(x - radius * 1.3, y, x + radius * 1.3, y);
  frameGrad.addColorStop(0, "#595959");
  frameGrad.addColorStop(0.5, "#a6a6a6");
  frameGrad.addColorStop(1, "#595959");
  ctx.fillStyle = frameGrad;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.2, 0, Math.PI * 2);
  ctx.fill();

  // Layer 2: Orange glow ring
  const glowGrad = ctx.createRadialGradient(x, y, radius * 0.6, x, y, radius * 1.05);
  glowGrad.addColorStop(0, "#f59415");
  glowGrad.addColorStop(1, "#d07a10");
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.05, 0, Math.PI * 2);
  ctx.fill();

  // Layer 3: Glass interior with offset highlight
  const glassGrad = ctx.createRadialGradient(x - radius * 0.2, y - radius * 0.2, radius * 0.1, x, y, radius * 0.85);
  glassGrad.addColorStop(0, "#d8dce8");
  glassGrad.addColorStop(0.4, "#8a9ab0");
  glassGrad.addColorStop(1, "#4a6a8a");
  ctx.fillStyle = glassGrad;
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.85, 0, Math.PI * 2);
  ctx.fill();

  // Layer 4: Specular glint
  ctx.save();
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x - radius * 0.3, y - radius * 0.3, radius * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// ── Vignette ──

export function drawVignette(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const cx = width / 2;
  const cy = height / 2;
  const outerR = Math.sqrt(cx * cx + cy * cy);
  const vig = ctx.createRadialGradient(cx, cy, outerR * 0.4, cx, cy, outerR);
  vig.addColorStop(0, "transparent");
  vig.addColorStop(1, "rgba(0, 0, 0, 0.3)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, width, height);
}

// ── Particle System ──

const EXHAUST_COLORS_PHASE1 = [PRIMARY];
const EXHAUST_COLORS_PHASE2 = [PRIMARY, "#ff6b35", "#ffcc00"];
const EXHAUST_COLORS_PHASE3 = [PRIMARY, "#ff6b35", "#ffcc00", "#888888", "#666666"];

export function spawnParticles(
  particles: Particle[],
  progress: number,
  rocketBaseY: number,
  centerX: number,
  rocketW: number
): void {
  let spawnCount: number;
  let colors: string[];
  let sizeRange: [number, number];
  let lifeRange: [number, number];
  let velocityScale: number;
  let spread: number;

  if (progress < 0.3) {
    spawnCount = Math.random() < 0.5 ? 1 : 2;
    colors = EXHAUST_COLORS_PHASE1;
    sizeRange = [1, 3];
    lifeRange = [15, 30];
    velocityScale = 1.5;
    spread = rocketW * 0.5;
  } else if (progress < 0.6) {
    spawnCount = 4 + Math.floor(Math.random() * 4);
    colors = EXHAUST_COLORS_PHASE2;
    sizeRange = [2, 5];
    lifeRange = [20, 45];
    velocityScale = 2.5;
    spread = rocketW * 0.8;
  } else {
    spawnCount = 10 + Math.floor(Math.random() * 8);
    colors = EXHAUST_COLORS_PHASE3;
    sizeRange = [3, 8];
    lifeRange = [30, 60];
    velocityScale = 4;
    spread = rocketW * 1.5;
  }

  for (let i = 0; i < spawnCount; i++) {
    const dead = particles.find(p => p.life <= 0);
    if (!dead) break;

    const life = lifeRange[0] + Math.random() * (lifeRange[1] - lifeRange[0]);
    dead.x = centerX + (Math.random() - 0.5) * spread;
    dead.y = rocketBaseY;
    dead.vx = (Math.random() - 0.5) * velocityScale;
    dead.vy = 1 + Math.random() * velocityScale;
    dead.life = life;
    dead.maxLife = life;
    dead.size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    dead.color = colors[Math.floor(Math.random() * colors.length)];
  }
}

export function updateParticles(particles: Particle[]): void {
  for (const p of particles) {
    if (p.life <= 0) continue;
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.1;
    p.vx *= 0.98;
    p.life -= 1;
  }
}

export function drawExhaust(ctx: CanvasRenderingContext2D, particles: Particle[], width: number) {
  const isMobile = width < 768;

  for (const p of particles) {
    if (p.life <= 0) continue;
    const alpha = p.life / p.maxLife;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.color;

    if (!isMobile) {
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
  ctx.globalAlpha = 1;
}

export function createParticlePool(width: number): Particle[] {
  const count = width < 768 ? 100 : 200;
  return Array.from({ length: count }, () => ({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    life: 0,
    maxLife: 0,
    size: 0,
    color: PRIMARY
  }));
}
