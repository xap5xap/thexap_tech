import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const HeadlineSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", md: "auto 1fr" },
          columnGap: 5,
          rowGap: 4,
          alignItems: "center"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Image
            src="/images/yo.jpg"
            alt="Xavier Perez"
            height={300}
            width={267}
            style={{ width: "100%", maxWidth: 267, height: "auto" }}
          />
        </Box>
        <Box>
          <Typography component="h1" variant="h3">
            A senior product engineer for the stage after &quot;it works.&quot;
          </Typography>
          <Typography sx={{ mt: 3 }}>
            I help founders, product leads, and small product teams move a working prototype or existing product toward
            an agreed dependable release with clearer ownership and visible verification.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            I work as an independent product partner. That means I do more than complete isolated tickets: I help define
            the next owned outcome, connect product and system decisions within the agreed scope, and make the handoff
            or release state explicit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadlineSection;
