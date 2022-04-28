import { Box, Button, Container, Typography } from "@mui/material";
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
        height: "calc(100vh - 150px)",
      }}
    >
      <Image
        src="/images/hero.svg"
        alt="thexap"
        layout="fill"
        objectFit="cover"
      />
      <Container
        sx={{
          zIndex: 200,
          mb: { xs: "25px", md: "50px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={(theme) => ({
            color: theme.palette.mode === "dark" ? greyDark[700] : "inherit",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.6rem",
            },
          })}
        >
          Launch your Web App
        </Typography>
        <Typography
          variant="h3"
          sx={(theme) => ({
            mt: 2,
            color: theme.palette.mode === "dark" ? greyDark[400] : "inherit",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.2rem",
            },
          })}
        >
          I help you migrate your React app to NextJS
        </Typography>
        <Button
          sx={{ mt: 2 }}
          href="https://www.upwork.com/freelancers/xavierperez"
        >
          Contact me
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
