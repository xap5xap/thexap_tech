import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import type {
  CaseStudy,
  CaseStudyNarrative,
  CurrentStatus,
  OwnershipArea,
  ProductCycleStage,
  WorkType
} from "../../content/portfolio/types";
import { routes } from "../../lib/routes";
import HeaderFooterLayout from "../HeaderFooterLayout";
import CaseStudyNarrativeSection from "./CaseStudyNarrativeSection";

type Props = {
  caseStudy: CaseStudy;
};

const WORK_TYPE_LABELS: Record<WorkType, string> = {
  "client-work": "Client work",
  "owned-product-experiment": "Owned product / experiment",
  "concept-product": "Concept product"
};

const STATUS_LABELS: Record<CurrentStatus, string> = {
  live: "Live",
  "in-active-use": "In active use",
  "in-validation": "In validation",
  prototype: "Prototype",
  "no-longer-active": "No longer active"
};

const OWNERSHIP_LABELS: Record<OwnershipArea, string> = {
  "product-strategy": "Product strategy",
  brand: "Brand",
  ux: "UX",
  engineering: "Engineering",
  "ai-system": "AI system",
  film: "Film",
  launch: "Launch",
  distribution: "Distribution"
};

const STAGE_LABELS: Record<ProductCycleStage, string> = {
  discover: "Discover",
  position: "Position",
  design: "Design",
  build: "Build",
  launch: "Launch",
  distribute: "Distribute",
  learn: "Learn"
};

const NARRATIVE_SECTIONS: Array<{
  key: keyof CaseStudyNarrative;
  eyebrow: string;
  title: string;
}> = [
  {
    key: "transformation",
    eyebrow: "01 / What changed",
    title: "The operating model changed, not just the interface."
  },
  { key: "audience", eyebrow: "02 / For whom", title: "Two audiences. Two surfaces. One coherent practice." },
  { key: "productBet", eyebrow: "03 / Why this product", title: "Research before software." },
  { key: "ownership", eyebrow: "04 / My role", title: "End-to-end product ownership, with Carla as the decider." },
  {
    key: "experienceAndSystem",
    eyebrow: "05 / How it works",
    title: "Trust begins in public. Operations continue in private."
  },
  { key: "decisions", eyebrow: "06 / Decisions", title: "The choices that shaped adoption and trust." },
  {
    key: "launchAndDistribution",
    eyebrow: "07 / Reaching people",
    title: "A launch story designed as part of the product."
  },
  {
    key: "evidenceAndValidation",
    eyebrow: "08 / Evidence",
    title: "What can be shown, and what is deliberately withheld."
  },
  {
    key: "learningAndNextIteration",
    eyebrow: "09 / Learning",
    title: "Keep the chain from evidence to decision intact."
  }
];

const CaseStudyPage = ({ caseStudy }: Props) => {
  const { identity, ownership, presentation, narrative, evidence, assets, links, supportingDetails } = caseStudy;
  const assetsById = new Map(assets.map(asset => [asset.id, asset]));
  const evidenceById = new Map(evidence.map(item => [item.id, item]));
  const primaryVisual = assetsById.get(presentation.primaryVisualId);
  const cardEvidence = evidenceById.get(presentation.cardEvidenceId);

  return (
    <HeaderFooterLayout>
      <Box component="article">
        <Box sx={{ backgroundColor: "background.paper", pt: { xs: 4, md: 7 }, pb: { xs: 7, md: 11 } }}>
          <Container maxWidth="lg">
            <Link
              component={NextLink}
              href={routes.projects.path}
              color="inherit"
              underline="hover"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: { xs: 5, md: 8 } }}
            >
              <ArrowBackRounded fontSize="small" />
              All projects
            </Link>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1, mb: 3 }}>
              <Chip label={WORK_TYPE_LABELS[identity.workType]} color="primary" />
              <Chip label={STATUS_LABELS[identity.currentStatus]} variant="outlined" />
            </Stack>
            <Typography component="h1" variant="h1" sx={{ maxWidth: 950 }}>
              {identity.name}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: 820, fontWeight: 400 }}
            >
              {identity.conciseSummary}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: 3,
                mt: { xs: 5, md: 7 },
                maxWidth: 820
              }}
            >
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 0.75 }}>
                  Audience
                </Typography>
                <Typography>{identity.audience}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 0.75 }}>
                  Timeframe
                </Typography>
                <Typography>{identity.timeframe}</Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {primaryVisual && (
          <Container maxWidth="lg" sx={{ mt: { xs: -3, md: -6 } }}>
            <Box component="figure" sx={{ m: 0 }}>
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: { xs: 1, md: 2 },
                  backgroundColor: "common.black",
                  boxShadow: 8
                }}
              >
                <Image
                  src={primaryVisual.src}
                  alt={primaryVisual.alt}
                  width={1280}
                  height={712}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </Box>
              {primaryVisual.caption && (
                <Typography component="figcaption" variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                  {primaryVisual.caption}
                </Typography>
              )}
            </Box>
          </Container>
        )}

        <Container maxWidth="lg">
          <Box
            component="section"
            aria-labelledby="case-study-result"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(180px, 0.5fr) minmax(0, 1.5fr)" },
              gap: { xs: 2, md: 7 },
              py: { xs: 8, md: 12 }
            }}
          >
            <Typography component="p" color="primary.main" variant="subtitle1" sx={{ fontWeight: 700 }}>
              The result
            </Typography>
            <Box>
              <Typography id="case-study-result" variant="h3" component="h2" sx={{ maxWidth: 900 }}>
                {identity.transformation}
              </Typography>
              {cardEvidence && (
                <Box sx={{ mt: 4, borderLeft: 3, borderColor: "primary.main", pl: 2.5 }}>
                  <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700, mb: 0.5 }}>
                    Verified outcome
                  </Typography>
                  <Typography color="text.secondary">{cardEvidence.statement}</Typography>
                </Box>
              )}
            </Box>
          </Box>

          <Divider />

          <Box component="section" aria-labelledby="product-cycle" sx={{ py: { xs: 7, md: 9 } }}>
            <Typography id="product-cycle" variant="h5" component="h2" sx={{ mb: 4 }}>
              Product cycle
            </Typography>
            <Box
              component="ol"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "repeat(7, minmax(0, 1fr))" },
                gap: 1.5,
                p: 0,
                m: 0,
                listStyle: "none"
              }}
            >
              {ownership.productCycleStages.map((item, index) => (
                <Box
                  component="li"
                  key={item.stage}
                  sx={{ p: 2, borderRadius: 1, backgroundColor: "background.paper" }}
                >
                  <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.75 }}>
                    {STAGE_LABELS[item.stage]}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1, mt: 4 }}>
              {ownership.areas.map(area => (
                <Chip key={area} label={OWNERSHIP_LABELS[area]} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>

          <Divider />

          {NARRATIVE_SECTIONS.map((section, index) => (
            <Box key={section.key}>
              <CaseStudyNarrativeSection
                id={section.key}
                eyebrow={section.eyebrow}
                title={section.title}
                section={narrative[section.key]}
                assetsById={assetsById}
                evidenceById={evidenceById}
              />
              {index < NARRATIVE_SECTIONS.length - 1 && <Divider />}
            </Box>
          ))}
        </Container>

        <Box sx={{ backgroundColor: "background.paper", py: { xs: 8, md: 11 } }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.2fr) minmax(280px, 0.8fr)" },
                gap: { xs: 6, md: 10 }
              }}
            >
              <Box>
                <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                  Explore Armonía
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 620, mb: 4 }}>
                  The public links below show the live product and launch story. The private application link opens only
                  its public login surface.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ alignItems: { xs: "stretch", sm: "center" } }}
                >
                  {links.map(link => (
                    <Button
                      key={link.href}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardRounded />}
                      variant={link.kind === "product" ? "contained" : "outlined"}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Box>
              {supportingDetails && (
                <Box>
                  <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Supporting technology
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {[...(supportingDetails.technologies || []), ...(supportingDetails.services || [])].join(" · ")}
                  </Typography>
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </HeaderFooterLayout>
  );
};

export default CaseStudyPage;
