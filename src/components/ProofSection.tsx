import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UpworkAchievements from "./UpworkAchievements";
import UpworkReviews from "./UpworkReviews";

const proofItems = [
  {
    title: "What public client feedback supports",
    body: "Public feedback supports a pattern of autonomous work, reliability, clear communication, testing discipline, UX judgment, maintainable engineering, and contribution from early ideas through a working product."
  },
  {
    title: "Full-stack production experience",
    body: "At least nine years of delivery across product interfaces, application systems, integrations, testing, and cloud infrastructure."
  },
  {
    title: "AI-assisted delivery with accountable judgment",
    body: "AI tools support research, implementation, and review where appropriate. Xavier remains responsible for decisions and verification. The AWS Certified AI Practitioner credential supports foundational AI knowledge, not proof of production agents, RAG, evaluations, or regulated-AI systems."
  }
];

const ProofSection = () => {
  return (
    <Box component="section" sx={{ py: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 6
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: 900 }}>
          <Typography component="h2" variant="h3">
            A production track record you can inspect.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Senior product ownership, backed by at least nine years of full-stack production delivery.
          </Typography>
        </Box>

        <UpworkAchievements />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 3,
            width: "100%"
          }}
        >
          {proofItems.map(item => (
            <Box key={item.title} sx={{ p: 3, borderRadius: 2, backgroundColor: "background.paper" }}>
              <Typography component="h3" variant="h6">
                {item.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                {item.body}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography component="h3" variant="h5" textAlign="center" sx={{ mb: 3 }}>
            What public client feedback supports
          </Typography>
          <UpworkReviews />
        </Box>
      </Container>
    </Box>
  );
};

export default ProofSection;
