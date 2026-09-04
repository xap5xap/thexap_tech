import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";
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
            <Typography component="h2" variant="h4">
              What direct ownership looks like.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              I work best when a founder or product lead has a meaningful product consequence, a working state to
              understand, and a next outcome that needs one accountable senior owner.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              We make the scope and decision boundaries explicit. I connect the product and system decisions I own, show
              the evidence behind completion, and release or hand off the agreed state. The engagement keeps ownership
              inside and outside the scope visible.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              A bounded specialist, lower-cost provider, agency, internal employee, or AI-assisted DIY approach may be
              the better fit when the work is well specified, already well led, easily verified, or requires continuous
              team capacity. The goal is fit, not provider theater.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/codeImage.jpg"
              alt="Code editor showing full-stack product work"
              width={450}
              height={333}
              style={{ width: "100%", maxWidth: 450, height: "auto" }}
            />
          </Box>
        </Box>
        <Box sx={{ maxWidth: 900, textAlign: "center", mt: 4 }}>
          <Typography component="h2" variant="h4">
            Established full-stack delivery, honestly scoped.
          </Typography>
          <Typography sx={{ mt: 3 }}>
            The strongest public evidence is a dated Upwork record, client feedback about how I work, and the approved
            Armonía product case.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            As captured on 2026-09-04, Upwork showed 29 total jobs, 28 completed jobs, one job in progress, 15,309
            hours, 100% Job Success, and Top Rated Plus. Client feedback supports autonomy, reliability, quality,
            communication, testing, UX judgment, maintainability, and launch contribution.
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Those facts support full-stack production judgment and direct ownership. They do not establish nine years of
            AI-product work or repeated production agents, RAG, evaluations, regulated AI, or AI-built-app rescue
            outcomes.
          </Typography>
        </Box>
        <UpworkAchievements />
        <UpworkReviews />
      </Container>
    </Box>
  );
};

export default TrackRecordSection;
