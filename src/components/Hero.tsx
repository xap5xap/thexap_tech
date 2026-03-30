import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { lightPalette } from "../theme/brandingTheme";
import NextLink from "next/link";
import { routes } from "../lib/routes";
import dynamic from "next/dynamic";

const HeroCanvasContainer = dynamic(() => import("./ScrollAnimation/HeroCanvasContainer"), {
  ssr: false
});

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        height: "calc(100vh - 150px)",
        overflow: "hidden"
      }}
    >
      <HeroCanvasContainer />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 100,
          background: "linear-gradient(to top, rgba(10,10,26,0.85) 0%, rgba(10,10,26,0.4) 40%, transparent 70%)",
          pointerEvents: "none"
        }}
      />
      <Box
        sx={{
          zIndex: 200,
          mb: { xs: "25px", md: "24px" },
          textAlign: "center"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: lightPalette.text.primary,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)"
          }}
        >
          Your next app needs AI. Let&apos;s architect it right.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: lightPalette.text.primary,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)"
          }}
        >
          Don&apos;t let AI become the most expensive experiment your product never shipped.
        </Typography>
        <Button component={NextLink} href={routes.scheduleMeeting.path} sx={{ mt: 2 }}>
          SCHEDULE A MEETING
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
