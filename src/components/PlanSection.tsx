import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SpokeIcon from "@mui/icons-material/Spoke";
import CodeIcon from "@mui/icons-material/Code";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Stake from "./Stake";

const planData = [
  {
    icon: <SpokeIcon sx={{ fontSize: 94 }} />,
    title: "1. Organization / Communication",
    description: [
      "Scrum to deliver value incrementally in a collaborative manner.",
      "Good communication: messages, calls, videos",
      "Understand requirements with wireframes, prototypes, mockups",
    ],
  },
  {
    icon: <CodeIcon sx={{ fontSize: 94 }} />,
    title: "2. Is time to code",
    description: [
      "Bring designs to life with React and NextJS",
      "Create unit test with Jest",
      "Create e2e tests with Cypress",
    ],
  },
  {
    icon: <AutorenewIcon sx={{ fontSize: 94 }} />,
    title: "3. Continuous deployments",
    description: [
      "Deploy the app quickly and constantly to get feedback fast",
      "Give your users value",
      "Start generating profit fast",
    ],
  },
];

const PlanSection = () => {
  return (
    <Box
      component="section"
      sx={{ paddingY: 9, backgroundColor: "background.paper" }}
    >
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
          How is your app going to be completed?
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
          {planData.map((el, idx) => (
            <Stake
              key={idx}
              title={el.title}
              description={el.description}
              icon={el.icon}
              color="primary"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PlanSection;
