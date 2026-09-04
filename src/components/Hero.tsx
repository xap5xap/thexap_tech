import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
        minHeight: { xs: "calc(100svh - 70px)", md: "calc(100vh - 70px)" },
        overflow: "hidden"
      }}
    >
      <HeroCanvasContainer />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 100,
          background: "linear-gradient(to top, rgba(32,33,36,0.96) 0%, rgba(32,33,36,0.68) 48%, transparent 88%)",
          pointerEvents: "none"
        }}
      />
      <Box
        sx={{
          zIndex: 200,
          width: "100%",
          px: 2,
          pb: { xs: 4, md: 6 },
          textAlign: "center"
        }}
      >
        <Typography
          component="p"
          variant="overline"
          sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.08em" }}
        >
          For founders, product leads, and small product teams
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            color: "#ffffff",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            maxWidth: 1120,
            mx: "auto",
            mt: 1,
            fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.5rem" },
            lineHeight: 1.06
          }}
        >
          A clear path to your next release
        </Typography>
        <Typography
          component="p"
          variant="h6"
          sx={{
            color: "#ffffff",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            maxWidth: 900,
            mx: "auto",
            mt: 2,
            fontSize: { xs: "1.05rem", sm: "1.25rem", md: "1.45rem" },
            lineHeight: 1.45
          }}
        >
          Work directly with a Senior Full-Stack Product Engineer who helps you decide what comes next, connect product
          and engineering decisions, and make the path to release clear.
        </Typography>
        <Button component={NextLink} href={routes.scheduleMeeting.path} size="large" sx={{ mt: 3 }}>
          Schedule a meeting
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
