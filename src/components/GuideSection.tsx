import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UpworkAchievements from "./UpworkAchievements";
import UpworkReviews from "./UpworkReviews";

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
          <Button variant="outlined">About me</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSection;
