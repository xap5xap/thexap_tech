import { useEffect, useRef, useState, RefObject, useCallback } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface EnergyPipeProps {
  progress: number;
  imageRefs: RefObject<HTMLDivElement | null>[];
  containerRef: RefObject<HTMLElement | null>;
}

const PRIMARY_COLOR = "#f59415";

function buildPath(containerRect: DOMRect, imageRects: DOMRect[]): string {
  if (imageRects.length < 3) return "";

  const relX = (rect: DOMRect) => rect.left - containerRect.left + rect.width / 2;
  const relY = (rect: DOMRect) => rect.top - containerRect.top + rect.height / 2;

  const startX = containerRect.width / 2;
  const startY = 0;

  const p1x = relX(imageRects[0]);
  const p1y = relY(imageRects[0]);
  const p2x = relX(imageRects[1]);
  const p2y = relY(imageRects[1]);
  const p3x = relX(imageRects[2]);
  const p3y = relY(imageRects[2]);

  const endX = containerRect.width / 2;
  const endY = containerRect.height;

  return [
    `M ${startX} ${startY}`,
    `C ${startX} ${p1y * 0.4}, ${p1x} ${p1y * 0.6}, ${p1x} ${p1y}`,
    `C ${p1x} ${p1y + (p2y - p1y) * 0.4}, ${p2x} ${p1y + (p2y - p1y) * 0.6}, ${p2x} ${p2y}`,
    `C ${p2x} ${p2y + (p3y - p2y) * 0.4}, ${p3x} ${p2y + (p3y - p2y) * 0.6}, ${p3x} ${p3y}`,
    `C ${p3x} ${p3y + (endY - p3y) * 0.4}, ${endX} ${p3y + (endY - p3y) * 0.6}, ${endX} ${endY}`
  ].join(" ");
}

export default function EnergyPipe({ progress, imageRefs, containerRef }: EnergyPipeProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);
  const [pathD, setPathD] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const computePath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const imageRects = imageRefs
      .map(ref => ref.current?.getBoundingClientRect())
      .filter((r): r is DOMRect => r != null);

    if (imageRects.length < 3) return;

    setDimensions({ width: containerRect.width, height: containerRect.height });
    setPathD(buildPath(containerRect, imageRects));
  }, [containerRef, imageRefs]);

  useEffect(() => {
    computePath();
    let timeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(computePath, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [computePath]);

  useEffect(() => {
    const path = pathRef.current;
    const head = headRef.current;
    if (!path || !pathD) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

    if (head) {
      const point = path.getPointAtLength(totalLength * progress);
      head.setAttribute("cx", `${point.x}`);
      head.setAttribute("cy", `${point.y}`);
      head.style.opacity = progress > 0.01 ? "1" : "0";
    }
  }, [progress, pathD]);

  if (isMobile || !pathD) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <filter id="pipe-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="head-gradient">
            <stop offset="0%" stopColor={PRIMARY_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={PRIMARY_COLOR} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow layer */}
        <path
          d={pathD}
          fill="none"
          stroke={PRIMARY_COLOR}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.3"
          filter="url(#pipe-glow)"
          ref={pathRef}
        />

        {/* Main line */}
        <path
          d={pathD}
          fill="none"
          stroke={PRIMARY_COLOR}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
          style={{
            strokeDasharray: pathRef.current ? `${pathRef.current.getTotalLength()}` : "0",
            strokeDashoffset: pathRef.current ? `${pathRef.current.getTotalLength() * (1 - progress)}` : "0"
          }}
        />

        {/* Bright head */}
        <circle ref={headRef} r="8" fill="url(#head-gradient)" opacity="0" />
      </svg>
    </Box>
  );
}
