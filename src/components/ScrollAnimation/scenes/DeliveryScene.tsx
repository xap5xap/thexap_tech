import { useEffect, useRef } from "react";

const PRIMARY = "#f59415";
const BG = "#ffffff";
const CHROME_BG = "#f0f0f0";
const SIDEBAR_BG = "#1a1a2e";
const CARD_BG = "#f8f9fa";
const GREEN = "#4ade80";
const BLUE = "#3b82f6";
const PURPLE = "#8b5cf6";

interface Props {
  progress: number;
  width: number;
  height: number;
}

export default function DeliveryScene({ progress, width, height }: Props) {
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
    const chromeH = 24;
    const winW = width - pad * 2;
    const winH = height - pad * 2;
    const winX = pad;
    const winY = pad;

    // Outer background
    ctx.fillStyle = "#303136";
    ctx.fillRect(0, 0, width, height);

    // Browser window
    const windowAlpha = Math.min(1, progress * 5);
    ctx.globalAlpha = windowAlpha;

    // Window background
    ctx.fillStyle = BG;
    roundRect(ctx, winX, winY, winW, winH, 8);
    ctx.fill();

    // Chrome bar
    ctx.fillStyle = CHROME_BG;
    roundRectTop(ctx, winX, winY, winW, chromeH, 8);
    ctx.fill();

    // URL bar
    if (progress > 0.05) {
      ctx.fillStyle = "#fff";
      const urlBarW = winW * 0.5;
      roundRect(ctx, winX + (winW - urlBarW) / 2, winY + 5, urlBarW, 14, 4);
      ctx.fill();

      ctx.font = `${Math.max(7, Math.min(9, width * 0.02))}px monospace`;
      ctx.fillStyle = "#666";
      ctx.textAlign = "center";
      ctx.fillText("app.production.io", winX + winW / 2, winY + 15);
    }

    // Window dots
    const dotY = winY + chromeH / 2;
    ["#ef4444", "#facc15", "#4ade80"].forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(winX + 12 + i * 12, dotY, 3, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    const contentX = winX;
    const contentY = winY + chromeH;
    const contentW = winW;
    const contentH = winH - chromeH;

    // Sidebar (appears at progress 0.1)
    const sidebarW = contentW * 0.2;
    if (progress > 0.1) {
      const sidebarAlpha = Math.min(1, (progress - 0.1) / 0.1);
      ctx.globalAlpha = sidebarAlpha * windowAlpha;
      ctx.fillStyle = SIDEBAR_BG;
      ctx.fillRect(contentX, contentY, sidebarW, contentH);

      // Sidebar nav items
      const navItems = 5;
      for (let i = 0; i < navItems; i++) {
        const itemY = contentY + 20 + i * 22;
        const itemAlpha = Math.max(0, Math.min(1, (progress - 0.15 - i * 0.03) / 0.05));
        if (itemAlpha <= 0) continue;
        ctx.globalAlpha = itemAlpha * windowAlpha;
        ctx.fillStyle = i === 0 ? PRIMARY : "rgba(255,255,255,0.4)";
        roundRect(ctx, contentX + 8, itemY, sidebarW - 16, 12, 3);
        ctx.fill();
      }
    }

    ctx.globalAlpha = windowAlpha;

    // Main content area
    const mainX = contentX + sidebarW + 8;
    const mainW = contentW - sidebarW - 16;
    const mainY = contentY + 8;

    // Header bar (progress 0.2)
    if (progress > 0.2) {
      const headerAlpha = Math.min(1, (progress - 0.2) / 0.1);
      ctx.globalAlpha = headerAlpha * windowAlpha;

      // Title
      ctx.fillStyle = "#333";
      roundRect(ctx, mainX, mainY, mainW * 0.35, 12, 3);
      ctx.fill();

      // Header action buttons
      ctx.fillStyle = PRIMARY;
      roundRect(ctx, mainX + mainW - 50, mainY, 42, 14, 4);
      ctx.fill();
    }

    // Stats cards row (progress 0.3)
    const cardsY = mainY + 24;
    const cardCount = 3;
    const cardGap = 6;
    const cardW = (mainW - cardGap * (cardCount - 1)) / cardCount;
    const cardH = contentH * 0.18;

    if (progress > 0.3) {
      const colors = [GREEN, BLUE, PURPLE];
      for (let i = 0; i < cardCount; i++) {
        const cardAlpha = Math.max(0, Math.min(1, (progress - 0.3 - i * 0.05) / 0.08));
        if (cardAlpha <= 0) continue;
        ctx.globalAlpha = cardAlpha * windowAlpha;

        const cx = mainX + i * (cardW + cardGap);
        ctx.fillStyle = CARD_BG;
        roundRect(ctx, cx, cardsY, cardW, cardH, 6);
        ctx.fill();

        // Card accent bar
        ctx.fillStyle = colors[i];
        roundRect(ctx, cx, cardsY, cardW, 3, 2);
        ctx.fill();

        // Card number
        ctx.fillStyle = "#333";
        roundRect(ctx, cx + 8, cardsY + 12, cardW * 0.4, 10, 2);
        ctx.fill();

        // Card sublabel
        ctx.fillStyle = "#ccc";
        roundRect(ctx, cx + 8, cardsY + 28, cardW * 0.6, 6, 2);
        ctx.fill();
      }
    }

    // Chart area (progress 0.5)
    const chartY = cardsY + cardH + 12;
    const chartH = contentH * 0.35;

    if (progress > 0.5) {
      const chartAlpha = Math.min(1, (progress - 0.5) / 0.1);
      ctx.globalAlpha = chartAlpha * windowAlpha;

      ctx.fillStyle = CARD_BG;
      roundRect(ctx, mainX, chartY, mainW, chartH, 6);
      ctx.fill();

      // Chart bars
      const barCount = 7;
      const barGap = 6;
      const barAreaW = mainW - 40;
      const barW = (barAreaW - barGap * (barCount - 1)) / barCount;
      const maxBarH = chartH - 30;

      for (let i = 0; i < barCount; i++) {
        const barAlpha = Math.max(0, Math.min(1, (progress - 0.55 - i * 0.03) / 0.05));
        if (barAlpha <= 0) continue;
        ctx.globalAlpha = barAlpha * windowAlpha;

        const bx = mainX + 20 + i * (barW + barGap);
        const bh = (0.3 + Math.sin(i * 1.2) * 0.3 + 0.4 * (i / barCount)) * maxBarH * barAlpha;
        const by = chartY + chartH - 12 - bh;

        ctx.fillStyle = i === barCount - 1 ? PRIMARY : BLUE;
        ctx.globalAlpha = (i === barCount - 1 ? 1 : 0.6) * barAlpha * windowAlpha;
        roundRect(ctx, bx, by, barW, bh, 3);
        ctx.fill();
      }
    }

    // Table rows (progress 0.7)
    const tableY = chartY + chartH + 10;
    const rowH = 14;

    if (progress > 0.7) {
      const rows = 3;
      for (let i = 0; i < rows; i++) {
        const rowAlpha = Math.max(0, Math.min(1, (progress - 0.7 - i * 0.04) / 0.06));
        if (rowAlpha <= 0) continue;
        ctx.globalAlpha = rowAlpha * windowAlpha;

        const ry = tableY + i * (rowH + 4);
        ctx.fillStyle = i % 2 === 0 ? CARD_BG : "#fff";
        roundRect(ctx, mainX, ry, mainW, rowH, 2);
        ctx.fill();

        // Row cells
        ctx.fillStyle = "#ccc";
        roundRect(ctx, mainX + 6, ry + 4, mainW * 0.25, 6, 2);
        ctx.fill();
        ctx.fillStyle = "#ddd";
        roundRect(ctx, mainX + mainW * 0.35, ry + 4, mainW * 0.2, 6, 2);
        ctx.fill();

        // Status badge
        ctx.fillStyle = GREEN;
        roundRect(ctx, mainX + mainW - 40, ry + 3, 30, 8, 4);
        ctx.fill();
      }
    }

    // Final shimmer effect (progress > 0.9)
    if (progress > 0.9) {
      const shimmerProgress = (progress - 0.9) / 0.1;
      const shimmerX = winX + shimmerProgress * winW * 1.5 - winW * 0.25;
      const gradient = ctx.createLinearGradient(shimmerX, winY, shimmerX + winW * 0.25, winY);
      gradient.addColorStop(0, "rgba(245, 148, 21, 0)");
      gradient.addColorStop(0.5, `rgba(245, 148, 21, ${0.08 * (1 - shimmerProgress)})`);
      gradient.addColorStop(1, "rgba(245, 148, 21, 0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;
      roundRect(ctx, winX, winY, winW, winH, 8);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
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
