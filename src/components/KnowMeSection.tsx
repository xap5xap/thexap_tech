import { Box, Button, Container } from "@mui/material";
import KnowMeItem from "./KnowMeItem";
import SectionTitle from "./SectionTitle";

const KnowMeSection = () => {
  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container>
        <SectionTitle
          title="Know me"
          subTitle="Let’s talk about your project to see how I can help you."
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            my: 5,
            rowGap: 2,
          }}
        >
          <KnowMeItem primaryText="26" secondaryText="Projects completed" />
          <KnowMeItem primaryText="8000+" secondaryText="Worked hours" />
          <KnowMeItem primaryText="100%" secondaryText="Job Success" />
          <KnowMeItem
            primaryText="5"
            secondaryText="Years Top Rated freelancer"
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{ mt: 2 }}
            href="https://www.upwork.com/freelancers/xavierperez"
          >
            Let&#39;s talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default KnowMeSection;
