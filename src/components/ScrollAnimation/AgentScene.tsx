import { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ArchitectureScene from "./scenes/ArchitectureScene";
import ProductionScene from "./scenes/ProductionScene";
import DeliveryScene from "./scenes/DeliveryScene";

interface AgentSceneProps {
  sceneIndex: number;
  progress: number;
}

export default function AgentScene({ sceneIndex, progress }: AgentSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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

  const sceneProps = { progress, width: size.width, height: size.height };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: { xs: 250, md: 350 },
        position: "relative"
      }}
    >
      {size.width > 0 && size.height > 0 && (
        <>
          {sceneIndex === 0 && <ArchitectureScene {...sceneProps} />}
          {sceneIndex === 1 && <ProductionScene {...sceneProps} />}
          {sceneIndex === 2 && <DeliveryScene {...sceneProps} />}
        </>
      )}
    </Box>
  );
}
