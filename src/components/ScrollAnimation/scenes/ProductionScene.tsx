import { useEffect, useRef } from "react";

const BG = "#1e1e2e";
const CHROME_BG = "#2d2d3d";
const GREEN = "#4ade80";
const RED_DOT = "#ef4444";
const YELLOW_DOT = "#facc15";
const GREEN_DOT = "#4ade80";

const CODE_LINES = [
  { indent: 0, width: 0.45, color: "#c678dd" },
  { indent: 1, width: 0.6, color: "#e06c75" },
  { indent: 2, width: 0.5, color: "#98c379" },
  { indent: 2, width: 0.35, color: "#61afef" },
  { indent: 2, width: 0.55, color: "#98c379" },
  { indent: 1, width: 0.3, color: "#c678dd" },
  { indent: 0, width: 0.1, color: "#abb2bf" },
  { indent: 0, width: 0.5, color: "#c678dd" },
  { indent: 1, width: 0.65, color: "#e5c07b" },
  { indent: 2, width: 0.4, color: "#61afef" },
  { indent: 2, width: 0.55, color: "#98c379" },
  { indent: 1, width: 0.3, color: "#c678dd" },
  { indent: 0, width: 0.1, color: "#abb2bf" }
];

const STATUS_ITEMS = [
  { label: "Lint", appear: 0.6 },
  { label: "Tests", appear: 0.7 },
  { label: "Build", appear: 0.8 },
  { label: "Deploy", appear: 0.9 }
];

interface Props {
  progress: number;
  width: number;
  height: number;
}

export default function ProductionScene({ progress, width, height }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const pad = 12;
    const chromeH = 28;
    const termW = width - pad * 2;
    const termH = height - pad * 2;

    // Background
    ctx.fillStyle = "#303136";
    ctx.fillRect(0, 0, width, height);

    // Terminal window
    const termX = pad;
    const termY = pad;
    ctx.fillStyle = BG;
    roundRect(ctx, termX, termY, termW, termH, 8);
    ctx.fill();

    // Chrome bar
    ctx.fillStyle = CHROME_BG;
    roundRectTop(ctx, termX, termY, termW, chromeH, 8);
    ctx.fill();

    // Window dots
    const dotY = termY + chromeH / 2;
    [RED_DOT, YELLOW_DOT, GREEN_DOT].forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(termX + 16 + i * 16, dotY, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // Terminal title
    ctx.font = `${Math.max(9, Math.min(11, width * 0.025))}px monospace`;
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.textAlign = "center";
    ctx.fillText("agent-build.sh", termX + termW / 2, dotY + 4);

    // Code area
    const codeStartY = termY + chromeH + 12;
    const lineHeight = Math.min(18, (termH - chromeH - 80) / CODE_LINES.length);
    const codeX = termX + 16;
    const maxCodeW = termW - 50;

    const visibleLines = Math.floor(progress * CODE_LINES.length * 1.8);

    for (let i = 0; i < Math.min(visibleLines, CODE_LINES.length); i++) {
      const line = CODE_LINES[i];
      const lineY = codeStartY + i * lineHeight;
      const indentPx = line.indent * 16;
      const barW = line.width * maxCodeW * 0.6;

      // Line number
      ctx.font = `${Math.max(8, Math.min(10, width * 0.022))}px monospace`;
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.textAlign = "right";
      ctx.fillText(`${i + 1}`, codeX - 4, lineY + 10);

      // Code bar (syntax highlight colors)
      ctx.fillStyle = line.color;
      ctx.globalAlpha = 0.7;
      roundRect(ctx, codeX + indentPx, lineY + 2, barW, 8, 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Progress bar at bottom
    const barY = termY + termH - 36;
    const barX = termX + 16;
    const barW = termW - 32;
    const barH = 6;

    ctx.fillStyle = "rgba(255,255,255,0.1)";
    roundRect(ctx, barX, barY, barW, barH, 3);
    ctx.fill();

    const fillProgress = Math.max(0, (progress - 0.3) / 0.7);
    if (fillProgress > 0) {
      ctx.fillStyle = GREEN;
      roundRect(ctx, barX, barY, barW * fillProgress, barH, 3);
      ctx.fill();
    }

    // Status indicators
    const statusY = barY + 16;
    const statusSpacing = termW / (STATUS_ITEMS.length + 1);
    ctx.font = `bold ${Math.max(8, Math.min(10, width * 0.022))}px monospace`;

    for (let i = 0; i < STATUS_ITEMS.length; i++) {
      const item = STATUS_ITEMS[i];
      const itemProgress = Math.max(0, Math.min(1, (progress - item.appear) / 0.1));
      if (itemProgress <= 0) continue;

      const sx = termX + statusSpacing * (i + 1);
      ctx.textAlign = "center";
      ctx.fillStyle = itemProgress >= 1 ? GREEN : `rgba(74, 222, 128, ${itemProgress})`;
      ctx.fillText(itemProgress >= 1 ? `${item.label} ✓` : item.label, sx, statusY + 10);
    }
  }, [progress, width, height]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", borderRadius: 12 }} />;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function roundRectTop(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
