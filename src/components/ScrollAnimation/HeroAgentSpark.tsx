import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
`;

const outerPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
`;

export default function HeroAgentSpark() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: -8,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10
      }}
    >
      {/* Outer ring pulse */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 40,
          height: 40,
          marginTop: "-20px",
          marginLeft: "-20px",
          borderRadius: "50%",
          backgroundColor: "#f59415",
          animation: `${outerPulse} 2s ease-in-out infinite`
        }}
      />
      {/* Core orb */}
      <Box
        sx={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "#f59415",
          boxShadow: "0 0 20px rgba(245, 148, 21, 0.8), 0 0 40px rgba(245, 148, 21, 0.4)",
          animation: `${pulse} 2s ease-in-out infinite`
        }}
      />
    </Box>
  );
}
