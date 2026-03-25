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
          columnGap: 3
        }}
      >
        <Box>
          <Image src="/images/yo.jpg" alt="my picture" height={300} width={267} />
        </Box>
        <Box>
          <Typography variant="h4">
            You know AI can transform your product. You just need the right architect.
          </Typography>
          <Box>
            <p>
              Maybe you&apos;ve experimented with ChatGPT wrappers. Maybe your team has prototyped something promising
              but can&apos;t get it to production. Or maybe you&apos;re starting fresh and want AI built in from the
              ground up.
            </p>
            <p>
              You&apos;ve done the hard part: you see the opportunity. Now you need someone who can turn that vision
              into a real product — someone who understands both the AI layer and the full application stack underneath
              it.
            </p>
            <p>
              I design and build AI-powered applications end-to-end. Agentic workflows, model orchestration, tool
              integration, and the React + Node.js + AWS infrastructure to support it all.
            </p>
            <p>That&apos;s where I come in.</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadlineSection;
