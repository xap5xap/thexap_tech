import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Stake from "./Stake";

const planData = [
  {
    icon: <SearchIcon sx={{ fontSize: 94 }} />,
    title: "1. Bring the current state and consequence",
    description: [
      "Share what exists now, who it serves, what the next outcome needs to change, and why that outcome matters."
    ]
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 94 }} />,
    title: "2. Define the owned outcome and boundaries",
    description: [
      "We establish the product state to own, the decisions inside and outside the engagement, and the evidence that will count as complete."
    ]
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 94 }} />,
    title: "3. Connect, verify, release or hand off",
    description: [
      "I carry the connected product and system decisions within the agreed scope, make verification visible, and release or hand off the agreed state."
    ]
  }
];

const PlanSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 6
        }}
      >
        <Typography component="h2" variant="h3" textAlign="center">
          A clear path to the agreed next state.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: 6
          }}
        >
          {planData.map(el => (
            <Stake
              key={el.title}
              title={el.title}
              description={el.description}
              icon={el.icon}
              color="primary"
              asList={false}
            />
          ))}
        </Box>
        <Typography color="text.secondary" textAlign="center" sx={{ maxWidth: 900 }}>
          The exact engagement depends on the product state and agreed scope. This plan does not promise a fixed
          diagnostic, duration, price, turnaround time, or permanent product outcome.
        </Typography>
      </Container>
    </Box>
  );
};

export default PlanSection;
