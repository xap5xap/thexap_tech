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
          rowGap: 6,
        }}
      >
        <Box>
          <Typography variant="h3" textAlign="center">
            Join other successful projects that have launched their apps
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            Check out these nice things people are saying about me
          </Typography>
        </Box>
        <UpworkReviews />
        <UpworkAchievements />
        <Box sx={{ textAlign: "center" }}>
          <NextLink href={routes.aboutMe.path} passHref>
            <Button variant="outlined">About me</Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSection;
