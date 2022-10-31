import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KnowMeItem from "./KnowMeItem";

const UpworkAchievements = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        rowGap: 3,
      }}
    >
      <Typography color="text.secondary" textAlign="center">
        Since 2016 I have been helping innovative startups and companies like
        yours in Upwork
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          rowGap: 2,
        }}
      >
        <KnowMeItem primaryText="28" secondaryText="Projects completed" />
        <KnowMeItem primaryText="9000+" secondaryText="Worked hours" />
        <KnowMeItem primaryText="100%" secondaryText="Job Success" />
        <KnowMeItem
          primaryText="5"
          secondaryText="Years Top Rated freelancer"
        />
      </Box>
    </Box>
  );
};

export default UpworkAchievements;
