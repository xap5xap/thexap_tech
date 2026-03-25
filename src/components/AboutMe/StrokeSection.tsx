import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

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
          <p>Available 8am to 7pm EST, Monday to Friday.</p>
          <p>
            Good AI architecture starts with clear communication. Before writing a single line of code, I make sure we
            align on what the AI should do, how it fits into your product, and what success looks like.
          </p>
          <p>
            I work iteratively — shipping working software early and often so you can see progress, give feedback, and
            course-correct before it gets expensive to change direction.
          </p>
          <p>Schedule a meeting and let&apos;s talk about what AI can do for your product.</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src="/images/something.jpg" alt="do something amazing image" width={450} height={300} />
        </Box>
      </Container>
    </Box>
  );
};

export default StrokeSection;
