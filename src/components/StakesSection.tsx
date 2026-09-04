import Stake from "./Stake";
import LoopIcon from "@mui/icons-material/Loop";
import HubIcon from "@mui/icons-material/Hub";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const stakesData = [
  {
    icon: <LoopIcon sx={{ fontSize: 40 }} />,
    title: "The next outcome keeps reopening",
    description: ["Priorities, scope, and completion criteria are not yet owned as one product decision."]
  },
  {
    icon: <HubIcon sx={{ fontSize: 40 }} />,
    title: "Product and system decisions are separated",
    description: [
      "UX, application, integration, infrastructure, and release choices are handled as disconnected tasks."
    ]
  },
  {
    icon: <FactCheckIcon sx={{ fontSize: 40 }} />,
    title: "Verification is hard to see",
    description: ["It is not clear what evidence will show that the agreed state is ready to release or hand off."]
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
        <Typography component="h2" variant="h3" textAlign="center">
          When the product has outgrown &quot;it works,&quot; ownership needs to catch up.
        </Typography>
        <Box sx={{ maxWidth: 900, textAlign: "center" }}>
          <Typography>
            You may have a working prototype, a live product, or a consequential next release. The harder question is
            who owns the connected product, system, verification, and release decisions needed to move it forward.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            When those decisions remain split or keep falling back to you, the product can be working while its next
            state is still difficult to define, verify, release, or hand off.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            rowGap: 6
          }}
        >
          {stakesData.map(el => (
            <Stake key={el.title} title={el.title} description={el.description} icon={el.icon} asList={false} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StakesSection;
