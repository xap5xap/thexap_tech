import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { greyDark } from "../theme/brandingTheme";

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
        height: "calc(100vh - 5rem)",
      }}
    >
      <Image
        src="/images/hero.svg"
        alt="thexap"
        layout="fill"
        objectFit="cover"
      />
      <Box
        sx={{
          zIndex: 200,
          mb: "50px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? greyDark[700] : "inherit",
          }}
        >
          Launch your Web App
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mt: 2,
            color: (theme) =>
              theme.palette.mode === "dark" ? greyDark[400] : "inherit",
          }}
        >
          I help you migrate your React app to NextJS
        </Typography>
        <Button sx={{ mt: 2 }}>Contact me</Button>
      </Box>
    </Box>
  );
};

export default Hero;
