import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { routes } from "../../src/lib/routes";
import { flagshipCaseStudies } from "../../src/content/portfolio";
import { portfolioIndexMetadata } from "../../src/content/portfolio/metadata";

const WORK_TYPE_LABELS = {
  "client-work": "Client work",
  "owned-product-experiment": "Owned product / experiment",
  "concept-product": "Concept product"
} as const;

const ProjectsPage = () => {
  return (
    <HeaderFooterLayout metadata={portfolioIndexMetadata}>
      <Box sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
        <Container>
          <Typography variant="h3" component="h1">
            Selected products and systems
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          paddingY: 9,
          textAlign: "center"
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            columnGap: 5,
            rowGap: 5,
            flexWrap: "wrap"
          }}
        >
          {flagshipCaseStudies.map((caseStudy, index) => {
            const primaryVisual = caseStudy.assets.find(asset => asset.id === caseStudy.presentation.primaryVisualId);

            return (
              <Link
                key={caseStudy.identity.id}
                component={NextLink}
                href={`${routes.projects.path}/${caseStudy.identity.slug}`}
                underline="none"
                color="inherit"
              >
                <Card sx={{ width: { xs: "100%", sm: 360 }, textAlign: "left" }}>
                  <Box>
                    {primaryVisual ? (
                      <Box sx={{ position: "relative", aspectRatio: "16 / 9" }}>
                        <Image
                          src={primaryVisual.src}
                          alt={primaryVisual.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 600px) 100vw, 360px"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    ) : null}
                    <CardContent>
                      <Typography variant="overline" color="primary">
                        {WORK_TYPE_LABELS[caseStudy.identity.workType]}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {caseStudy.identity.name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {caseStudy.identity.conciseSummary}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Link>
            );
          })}
        </Box>
      </Container>
    </HeaderFooterLayout>
  );
};

export default ProjectsPage;
