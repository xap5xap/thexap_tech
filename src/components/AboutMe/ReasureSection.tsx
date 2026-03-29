import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ReassureSection = () => {
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
        <Typography variant="h4" textAlign="left">
          I help teams architect and ship AI-powered applications — from intelligent features to full agentic systems —
          built on 9 years of production fullstack experience
        </Typography>
      </Container>
    </Box>
  );
};

export default ReassureSection;
