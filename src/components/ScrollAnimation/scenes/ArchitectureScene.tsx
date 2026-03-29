import { useEffect, useRef } from "react";

const PRIMARY = "#f59415";
const DIM = "rgba(245, 148, 21, 0.15)";
const MID = "rgba(245, 148, 21, 0.5)";
const BG = "#303136";

interface Node {
  x: number;
  y: number;
  label: string;
  appear: number;
}

interface Edge {
  from: number;
  to: number;
  appear: number;
}

const NODES: Node[] = [
  { x: 0.5, y: 0.12, label: "User", appear: 0.15 },
  { x: 0.25, y: 0.32, label: "API Gateway", appear: 0.2 },
  { x: 0.75, y: 0.32, label: "Agent", appear: 0.25 },
  { x: 0.15, y: 0.55, label: "Auth", appear: 0.35 },
  { x: 0.5, y: 0.55, label: "Orchestrator", appear: 0.3 },
  { x: 0.85, y: 0.55, label: "Tools", appear: 0.4 },
  { x: 0.3, y: 0.78, label: "Database", appear: 0.5 },
  { x: 0.7, y: 0.78, label: "Model", appear: 0.55 },
  { x: 0.5, y: 0.92, label: "Monitoring", appear: 0.65 }
];

const EDGES: Edge[] = [
  { from: 0, to: 1, appear: 0.22 },
  { from: 0, to: 2, appear: 0.27 },
  { from: 1, to: 3, appear: 0.37 },
  { from: 1, to: 4, appear: 0.32 },
  { from: 2, to: 4, appear: 0.33 },
  { from: 2, to: 5, appear: 0.42 },
  { from: 4, to: 6, appear: 0.52 },
  { from: 4, to: 7, appear: 0.57 },
  { from: 3, to: 6, appear: 0.53 },
  { from: 5, to: 7, appear: 0.58 },
  { from: 6, to: 8, appear: 0.67 },
  { from: 7, to: 8, appear: 0.68 }
];

interface Props {
  progress: number;
  width: number;
  height: number;
}

export default function ArchitectureScene({ progress, width, height }: Props) {
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

    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    const gridOpacity = Math.min(progress * 3, 1) * 0.1;
    if (gridOpacity > 0) {
      ctx.strokeStyle = `rgba(245, 148, 21, ${gridOpacity})`;
      ctx.lineWidth = 0.5;
      const spacing = 30;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    const pad = 20;
    const drawW = width - pad * 2;
    const drawH = height - pad * 2;

    // Draw edges
    for (const edge of EDGES) {
      const edgeProgress = Math.max(0, Math.min(1, (progress - edge.appear) / 0.08));
      if (edgeProgress <= 0) continue;

      const fromNode = NODES[edge.from];
      const toNode = NODES[edge.to];
      const fx = pad + fromNode.x * drawW;
      const fy = pad + fromNode.y * drawH;
      const tx = pad + toNode.x * drawW;
      const ty = pad + toNode.y * drawH;

      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx + (tx - fx) * edgeProgress, fy + (ty - fy) * edgeProgress);
      ctx.strokeStyle = edgeProgress >= 1 ? MID : DIM;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw nodes
    for (const node of NODES) {
      const nodeProgress = Math.max(0, Math.min(1, (progress - node.appear) / 0.1));
      if (nodeProgress <= 0) continue;

      const nx = pad + node.x * drawW;
      const ny = pad + node.y * drawH;
      const radius = 6 * nodeProgress;

      // Glow
      ctx.beginPath();
      ctx.arc(nx, ny, radius + 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 148, 21, ${0.15 * nodeProgress})`;
      ctx.fill();

      // Node circle
      ctx.beginPath();
      ctx.arc(nx, ny, radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeProgress >= 1 ? PRIMARY : MID;
      ctx.fill();

      // Label
      if (nodeProgress > 0.5) {
        const labelOpacity = (nodeProgress - 0.5) * 2;
        ctx.font = `${Math.max(10, Math.min(12, width * 0.028))}px monospace`;
        ctx.fillStyle = `rgba(245, 148, 21, ${labelOpacity * 0.8})`;
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny - radius - 8);
      }
    }

    // Title at top
    if (progress > 0.05) {
      const titleOpacity = Math.min(1, (progress - 0.05) / 0.15);
      ctx.font = `bold ${Math.max(12, Math.min(16, width * 0.035))}px monospace`;
      ctx.fillStyle = `rgba(245, 148, 21, ${titleOpacity})`;
      ctx.textAlign = "center";
      ctx.fillText("SYSTEM ARCHITECTURE", width / 2, 20);
    }
  }, [progress, width, height]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", borderRadius: 12 }} />;
}
