import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { lightPalette } from "../theme/brandingTheme";
import NextLink from "next/link";
import { routes } from "../lib/routes";
import dynamic from "next/dynamic";

const HeroAgentSpark = dynamic(() => import("./ScrollAnimation/HeroAgentSpark"), { ssr: false });

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
        height: "calc(100vh - 150px)"
      }}
    >
      <Image priority src="/images/hero.svg" alt="thexap" fill style={{ objectFit: "cover" }} />
      <Box
        sx={{
          zIndex: 200,
          mb: { xs: "25px", md: "24px" },
          textAlign: "center"
        }}
      >
        <Typography
          variant="h1"
          sx={theme => {
            return {
              color: theme.palette.mode === "dark" ? lightPalette.text.primary : "inherit"
            };
          }}
        >
          Your next app needs AI. Let&apos;s architect it right.
        </Typography>
        <Typography
          variant="h4"
          sx={theme => ({
            color: theme.palette.mode === "dark" ? lightPalette.text.primary : "inherit"
          })}
        >
          Don&apos;t let AI become the most expensive experiment your product never shipped.
        </Typography>
        <Button component={NextLink} href={routes.scheduleMeeting.path} sx={{ mt: 2 }}>
          SCHEDULE A MEETING
        </Button>
      </Box>
      <HeroAgentSpark />
    </Box>
  );
};

export default Hero;
