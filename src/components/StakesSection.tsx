import Stake from "./Stake";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const stakesData = [
  {
    icon: <MoneyOffIcon sx={{ fontSize: 40 }} />,
    title: "Burning budget on AI that never ships",
    description: [
      "Teams spend months experimenting with AI features that never make it to production.",
      "Without the right architecture, AI becomes the most expensive line item with nothing to show for it."
    ]
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: "AI bolted on, not built in",
    description: [
      "Wrapping an API call around a language model is not an AI product.",
      "Without proper architecture, you end up with brittle integrations that break under real-world usage."
    ]
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: "No AI expertise on the team",
    description: [
      "Your developers are great at building apps, but AI architecture is a different skill set.",
      "Agentic workflows, model orchestration, and tool integration require specialized knowledge."
    ]
  }
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
          rowGap: 6
        }}
      >
        <Typography variant="h3" textAlign="center">
          Most AI integrations fail before they launch
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
          {stakesData.map((el, idx) => (
            <Stake key={idx} title={el.title} description={el.description} icon={el.icon} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StakesSection;
