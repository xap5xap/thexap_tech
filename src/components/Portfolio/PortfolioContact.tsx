import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

const PortfolioContact = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
    <Box
      sx={{
        p: { xs: 4, md: 7 },
        border: 1,
        borderColor: "divider",
        borderRadius: "24px",
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap"
      }}
    >
      <Box sx={{ maxWidth: 650 }}>
        <Typography
          sx={{ color: "primary.main", fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em", mb: 2 }}
        >
          Your next project
        </Typography>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: 32, md: 45 }, fontWeight: 750, lineHeight: 1.12, letterSpacing: "-.035em" }}
        >
          Bring me the hard part.
          <br />
          Let’s work out what’s next.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 520 }}>
          A new product, a stalled release, or a system that needs a stronger foundation. Tell me where you are and
          where you want to go.
        </Typography>
      </Box>
      <Button
        component={NextLink}
        href="/schedule-meeting"
        endIcon={<ArrowOutwardRounded />}
        size="large"
        sx={{ minHeight: 52, px: 3, borderRadius: "10px", flexShrink: 0 }}
      >
        Let’s talk about your project
      </Button>
    </Box>
  </Container>
);
export default PortfolioContact;
