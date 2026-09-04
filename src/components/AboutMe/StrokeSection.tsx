import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const StrokeSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          columnGap: 3,
          alignItems: "center"
        }}
      >
        <Box>
          <Typography component="h2" variant="h4">
            Clear communication starts before implementation.
          </Typography>
          <Typography sx={{ mt: 3 }}>
            We align on the current product state, the next owned outcome, decision boundaries, and what evidence will
            count as complete.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            If your working product needs clearer ownership for its next state, schedule an initial fit conversation or
            review selected work first.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/something.jpg"
            alt="Product decisions mapped before implementation"
            width={450}
            height={300}
            style={{ width: "100%", maxWidth: 450, height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default StrokeSection;
