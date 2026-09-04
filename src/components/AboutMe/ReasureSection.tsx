import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ReassureSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h4">
          Product judgment, full-stack delivery, and accountable use of AI.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          My primary category is Senior Full-Stack Product Engineer. I bring at least nine years of production delivery
          across product interfaces, application systems, integrations, testing, and cloud infrastructure.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          I use AI-assisted workflows to coordinate research, implementation, and review across the agreed technology
          scope. I remain accountable for product and system decisions, verification, the delivered work, and the limits
          of what the evidence supports. AI is part of the method, not the primary category and not a claim that every
          product needs an AI runtime.
        </Typography>
      </Container>
    </Box>
  );
};

export default ReassureSection;
