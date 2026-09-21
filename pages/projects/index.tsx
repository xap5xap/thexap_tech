import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { flagshipCaseStudies } from "../../src/content/portfolio";
import { portfolioIndexMetadata } from "../../src/content/portfolio/metadata";
import type { GetStaticProps } from "next";
import UpworkExperienceSection from "../../src/components/Portfolio/UpworkExperienceSection";
import PortfolioContact from "../../src/components/Portfolio/PortfolioContact";
import type { EngagementSummary } from "../../src/content/portfolio/engagementTypes";
import { getEngagementSummary, publishedEngagements } from "../../src/content/portfolio/engagements";
import { upworkProfile } from "../../src/content/portfolio/upworkProfile";
import { useMemo, useRef } from "react";
import type { CaseStudy } from "../../src/content/portfolio/types";
import { useProjectLinkTracking } from "../../src/analytics/usePortfolioTracking";

const FeaturedProject = ({ study }: { study: CaseStudy }) => {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const project = useMemo(
    () => ({ project_id: study.identity.id, project_slug: study.identity.slug, project_category: "featured" as const }),
    [study.identity.id, study.identity.slug]
  );
  const tracking = useProjectLinkTracking({
    project,
    placement: "projects_featured",
    cardRef,
    titleRef
  });
  const visual = study.assets.find(asset => asset.id === study.presentation.primaryVisualId)!;

  return (
    <Link
      ref={cardRef}
      component={NextLink}
      href={`/projects/${study.identity.slug}`}
      color="inherit"
      underline="none"
      onClick={tracking.onClick}
      onAuxClick={tracking.onAuxClick}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" },
        border: 1,
        borderColor: "divider",
        borderRadius: "22px",
        overflow: "hidden",
        bgcolor: "background.paper",
        "&:hover": { borderColor: "primary.main" }
      }}
    >
      <Box sx={{ position: "relative", minHeight: { xs: 230, md: 370 } }}>
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          priority
          sizes="(max-width:900px) 100vw, 650px"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography sx={{ color: "primary.main", fontSize: 12, mb: 2 }}>
          Product strategy · Experience · Full-stack engineering
        </Typography>
        <Typography
          ref={titleRef}
          component="h3"
          sx={{ fontSize: { xs: 34, md: 46 }, letterSpacing: "-.035em", fontWeight: 750 }}
        >
          {study.identity.name}
        </Typography>
        <Typography sx={{ fontSize: { xs: 19, md: 23 }, lineHeight: 1.35, fontWeight: 600, mt: 1 }}>
          From practice research to a system used every day.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, fontSize: 15 }}>
          {study.identity.conciseSummary}
        </Typography>
        <Typography sx={{ mt: 3, fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 1 }}>
          Explore the product story <ArrowOutwardRounded sx={{ fontSize: 18, color: "primary.main" }} />
        </Typography>
      </Box>
    </Link>
  );
};

const ProjectsPage = ({ engagements }: { engagements: EngagementSummary[] }) => (
  <HeaderFooterLayout metadata={portfolioIndexMetadata}>
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 7, md: 12 }, pb: { xs: 6, md: 9 } }}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".13em",
            textTransform: "uppercase",
            mb: 3
          }}
        >
          Xavier Perez / Senior Full-Stack Product Engineer
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 43, sm: 62, md: 78 },
            lineHeight: 1.03,
            letterSpacing: "-.055em",
            fontWeight: 800,
            maxWidth: 1000
          }}
        >
          From complex problems <br />
          to{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            products people use.
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            mt: 4
          }}
        >
          <Typography color="text.secondary" sx={{ maxWidth: 585, fontSize: { xs: 17, md: 19 }, lineHeight: 1.7 }}>
            I help founders and product teams build, improve, and ship software. Product judgment, thoughtful
            interfaces, and hands-on engineering across the stack.
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            <Button
              component={NextLink}
              href="/schedule-meeting"
              endIcon={<ArrowOutwardRounded />}
              sx={{ minHeight: 48, borderRadius: "10px", px: 2.5 }}
            >
              Let’s talk
            </Button>
            <Button
              component="a"
              href="#upwork-experience"
              variant="outlined"
              endIcon={<ArrowDownwardRounded />}
              sx={{ minHeight: 48, borderColor: "divider", color: "text.primary", borderRadius: "10px", px: 2.5 }}
            >
              Explore the work
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
          py: 3,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(3,minmax(0,1fr))", md: "1fr 1fr 1fr 1.3fr" },
          gap: { xs: 2, md: 4 },
          mb: { xs: 6, md: 9 }
        }}
      >
        {[
          { value: "100%", label: "Job Success" },
          { value: "15,309", label: "hours on Upwork" },
          { value: "Top Rated", label: "Plus on Upwork" }
        ].map(item => (
          <Box key={item.label}>
            <Typography
              sx={{ fontSize: { xs: 23, md: 32 }, fontWeight: 750, letterSpacing: "-.035em", lineHeight: 1.15 }}
            >
              {item.value}
            </Typography>
            <Typography sx={{ fontSize: { xs: 11, md: 13 }, color: "text.secondary", mt: 0.75 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
        <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, alignSelf: "center" }}>
          <Link href={upworkProfile.href} color="inherit" sx={{ fontSize: 12 }}>
            29 jobs. A track record you can check.
          </Link>
          <Typography sx={{ fontSize: 10, color: "text.secondary", mt: 0.75 }}>
            Profile checked September 20, 2026
          </Typography>
        </Box>
      </Box>
      <Box component="section" aria-labelledby="featured-heading">
        <Typography
          id="featured-heading"
          component="h2"
          sx={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "text.secondary",
            mb: 3
          }}
        >
          Featured product story
        </Typography>
        {flagshipCaseStudies.map(study => (
          <FeaturedProject key={study.identity.id} study={study} />
        ))}
      </Box>
    </Container>
    <UpworkExperienceSection engagements={engagements} />
    <PortfolioContact />
  </HeaderFooterLayout>
);
export default ProjectsPage;
export const getStaticProps: GetStaticProps<{ engagements: EngagementSummary[] }> = async () => ({
  props: { engagements: publishedEngagements.map(getEngagementSummary) }
});
