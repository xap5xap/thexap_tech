import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Value from "./Value";

const valueData = [
  {
    title: "Architecture-first AI",
    description: [
      "AI features that are designed into your system from the ground up, not patched on after the fact.",
      "Agentic workflows, tool integration, and model orchestration built on solid foundations."
    ],
    imageSrc: "/images/communication.svg"
  },
  {
    title: "Production-ready from day one",
    description: [
      "No prototypes that fall apart under real traffic. Every AI feature is built to handle production workloads.",
      "Proper error handling, evaluation, and monitoring so your AI actually works when users depend on it."
    ],
    imageSrc: "/images/Ethical.svg"
  },
  {
    title: "End-to-end delivery",
    description: [
      "From frontend to agentic backend, the entire stack is covered. No handoffs, no gaps.",
      "9 years of fullstack experience means your AI-powered app ships complete, not half-built."
    ],
    imageSrc: "/images/QC2.svg"
  }
];
const ValuesSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 9
        }}
      >
        <Typography variant="h3" textAlign="center">
          AI that works in production, not just in demos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 8
          }}
        >
          {valueData.map((el, idx) => (
            <Value
              key={idx}
              reverse={idx % 2 !== 0}
              title={el.title}
              description={el.description}
              imageSrc={el.imageSrc}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ValuesSection;
