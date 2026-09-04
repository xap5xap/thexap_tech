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
        rowGap: 3
      }}
    >
      <Typography component="h3" variant="h5" textAlign="center">
        Dated Upwork record
      </Typography>
      <Typography color="text.secondary" textAlign="center">
        As captured on 2026-09-04: 29 total jobs, 28 completed jobs, one job in progress, 15,309 hours, 100% Job
        Success, and Top Rated Plus.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          rowGap: 2
        }}
      >
        <KnowMeItem primaryText="29" secondaryText="Total jobs" />
        <KnowMeItem primaryText="15,309" secondaryText="Total hours" />
        <KnowMeItem primaryText="100%" secondaryText="Job Success" />
        <KnowMeItem primaryText="Top Rated Plus" secondaryText="Upwork status" />
      </Box>
    </Box>
  );
};

export default UpworkAchievements;
