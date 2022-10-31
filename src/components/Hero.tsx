import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { lightPalette } from "../theme/brandingTheme";

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
      }}
    >
      <Image
        priority
        src="/images/hero.svg"
        alt="thexap"
        layout="fill"
        objectFit="cover"
      />
      <Box
        sx={{
          zIndex: 200,
          mb: { xs: "25px", md: "24px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={(theme) => {
            return {
              color:
                theme.palette.mode === "dark"
                  ? lightPalette.text.primary
                  : "inherit",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.6rem",
              },
            };
          }}
        >
          Launch your React app on time
        </Typography>
        <Typography
          variant="h4"
          sx={(theme) => ({
            color:
              theme.palette.mode === "dark"
                ? lightPalette.text.primary
                : "inherit",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.2rem",
            },
          })}
        >
          Helping you complete the app your users will love to use
        </Typography>
        <Button
          sx={{ mt: 2 }}
          href="https://www.upwork.com/freelancers/xavierperez"
        >
          SCHEDULE A MEETING
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
