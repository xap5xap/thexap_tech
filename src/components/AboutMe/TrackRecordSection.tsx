import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import UpworkAchievements from "../UpworkAchievements";
import UpworkReviews from "../UpworkReviews";

const TrackRecordSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 5
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 3,
            alignItems: "center"
          }}
        >
          <Box>
            <p>
              I&apos;m Xavier Perez — an AI Solutions Architect with 9 years of fullstack development experience in
              React, TypeScript, Node.js, and AWS.
            </p>
            <p>
              I&apos;ve spent those years freelancing and helping teams ship real products. Now I bring that same
              delivery mindset to AI-powered applications: agentic systems, model orchestration, MCP integrations, and
              production-grade AI architecture.
            </p>
            <p>
              28+ projects delivered with 100% job success on Upwork. Top Rated freelancer. The track record speaks for
              itself.
            </p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/codeImage.jpg" alt="code image" width={450} height={333} />
          </Box>
        </Box>
        <UpworkAchievements />
        <UpworkReviews />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 3,
            alignItems: "center"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/passion.jpg" alt="passion image" width={450} height={300} />
          </Box>
          <Box>
            <p>Building AI into a product is a high-stakes decision.</p>
            <p>
              I understand the pressure — the budget, the timeline, the need to get it right the first time. I treat
              every project like my own and bring the same care and intensity that earned me 100% job success across 28
              projects.
            </p>
            <p>
              Whether you&apos;re adding AI to an existing product or building something new from scratch, I&apos;ll be
              with you from architecture to deployment.
            </p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrackRecordSection;
