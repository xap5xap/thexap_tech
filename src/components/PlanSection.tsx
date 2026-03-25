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
    title: "1. Discovery",
    description: [
      "Understand your product, your users, and where AI creates real value.",
      "Identify the right AI patterns: agentic workflows, RAG, tool use, or model orchestration.",
      "Define scope so we build what matters first."
    ]
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 94 }} />,
    title: "2. Architecture & Build",
    description: [
      "Design the system end-to-end: frontend, AI backend, integrations, and infrastructure.",
      "Build with production in mind from day one — evaluation, error handling, and monitoring included.",
      "Iterate fast with working software, not slide decks."
    ]
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 94 }} />,
    title: "3. Ship & Iterate",
    description: [
      "Deploy to production with confidence. Real users, real feedback.",
      "Measure AI performance and optimize based on actual usage.",
      "Continuous improvement so your AI gets better over time."
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
        <Typography variant="h3" textAlign="center">
          How we bring your AI-powered app to life
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
          {planData.map((el, idx) => (
            <Stake key={idx} title={el.title} description={el.description} icon={el.icon} color="primary" />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PlanSection;
