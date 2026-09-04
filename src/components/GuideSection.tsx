import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const GuideSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h3" textAlign="center">
          Direct senior ownership for the agreed next state.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography>
            You should not have to translate the same product consequence across disconnected tasks or carry every
            product and engineering decision yourself.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            I am Xavier Perez, a Senior Full-Stack Product Engineer and independent product partner. I work directly
            with founders and product teams to clarify the next owned outcome, connect decisions across the agreed
            scope, and make the evidence for release or handoff visible.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            My strongest public proof is a long full-stack production record, dated platform trust signals, client
            feedback about how I work, and an approved end-to-end product case. I use AI-assisted tools where they help,
            while remaining accountable for judgment, verification, and the delivered work.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSection;
