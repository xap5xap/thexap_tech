import Stake from "./Stake";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import BugReportIcon from "@mui/icons-material/BugReport";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const stakesData = [
  {
    icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
    title: "Time = Money = Timezone",
    description: [
      "Avoid features and bug fixes that take days to complete because of timezone gap communication. ",
    ],
  },
  {
    icon: <MoneyOffIcon sx={{ fontSize: 40 }} />,
    title: "Invest wisely",
    description: [
      "There are developers that learn in your project and the ones that use their knowledge to actually complete your project.",
      "When the budget is limited, don't pay others to learn. The app will take more time, and in the long run, more money.",
    ],
  },
  {
    icon: <BugReportIcon sx={{ fontSize: 40 }} />,
    title: "Buggy apps",
    description: [
      "You can be coding for months just to realize the app is too buggy to been used",
      "Even worse, there are no tests in the app",
    ],
  },
];
const StakesSection = () => {
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
        <Typography variant="h3" textAlign="center">
          Unsuccessful projects are too common
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: 6,
          }}
        >
          {stakesData.map((el, idx) => (
            <Stake
              key={idx}
              title={el.title}
              description={el.description}
              icon={el.icon}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StakesSection;
