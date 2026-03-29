import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { routes } from "../lib/routes";
import UpworkAchievements from "./UpworkAchievements";
import UpworkReviews from "./UpworkReviews";
import NextLink from "next/link";

const GuideSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 6
        }}
      >
        <Box>
          <Typography variant="h3" textAlign="center">
            Trusted by teams that needed to ship
          </Typography>
          <Typography variant="subtitle1" textAlign="center" color="text.secondary">
            What clients say about working with me
          </Typography>
        </Box>
        <UpworkReviews />
        <UpworkAchievements />
        <Box sx={{ textAlign: "center" }}>
          <Button component={NextLink} href={routes.aboutMe.path} variant="outlined">
            About me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSection;
