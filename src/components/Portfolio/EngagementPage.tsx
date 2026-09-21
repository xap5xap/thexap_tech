import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import type { EngagementPageContent, PublicEngagementSection } from "../../content/portfolio/engagementTypes";
import {
  engagementPath,
  engagementStatus,
  formatContractPeriod,
  formatEngagementDate
} from "../../content/portfolio/engagementPresentation";
import { getEngagementMetadata } from "../../content/portfolio/metadata";
import HeaderFooterLayout from "../HeaderFooterLayout";
import PortfolioContact from "./PortfolioContact";
import { TechnologyMap, TechnologyVisual } from "./TechnologyVisual";
import { useMemo, useRef } from "react";
import type { ProjectCategory } from "../../analytics/contract";
import { useProjectLinkTracking } from "../../analytics/usePortfolioTracking";
import { interactionTrackingAttributes } from "../../analytics/events";
import { upworkProfile } from "../../content/portfolio/upworkProfile";

export type RelatedEngagement = { id: string; slug: string; name: string; category: ProjectCategory };
type Props = { engagement: EngagementPageContent; related: RelatedEngagement[] };
const Copy = ({ section }: { section: PublicEngagementSection }) => (
  <>
    {section.paragraphs.map((paragraph, index) => (
      <Typography key={index} color="text.secondary" sx={{ mt: index ? 2 : 0, fontSize: 16, lineHeight: 1.8 }}>
        {paragraph}
      </Typography>
    ))}
  </>
);

const RelatedEngagementLink = ({ item }: { item: RelatedEngagement }) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const project = useMemo(
    () => ({ project_id: item.id, project_slug: item.slug, project_category: item.category }),
    [item.category, item.id, item.slug]
  );
  const tracking = useProjectLinkTracking({
    project,
    placement: "related_projects",
    cardRef: linkRef,
    titleRef: linkRef,
    forceTargetType: "project_title_link"
  });
  return (
    <Button
      ref={linkRef}
      component={NextLink}
      href={engagementPath(item.slug)}
      variant="text"
      onClick={tracking.onClick}
      onAuxClick={tracking.onAuxClick}
    >
      {item.name}
    </Button>
  );
};

const EngagementPage = ({ engagement, related }: Props) => {
  const {
    identity,
    showcase,
    summary,
    situation,
    contribution,
    scope,
    technicalContext,
    implementation,
    technologies,
    contract,
    delivery,
    product,
    feedback,
    links
  } = engagement;
  return (
    <HeaderFooterLayout metadata={getEngagementMetadata(engagement)}>
      <Box component="article">
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              pt: 4,
              pb: { xs: 4, md: 6 }
            }}
          >
            <Link
              component={NextLink}
              href="/projects#upwork-experience"
              color="inherit"
              underline="hover"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontSize: 13, minHeight: 44 }}
            >
              <ArrowBackRounded sx={{ fontSize: 17 }} />
              All Upwork engagements
            </Link>
            <Typography sx={{ fontFamily: "monospace", fontSize: 11, color: "text.secondary" }}>
              {formatContractPeriod(identity)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0,1fr)", md: "minmax(0,1.15fr) minmax(0,1fr)" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              pb: { xs: 5, md: 8 }
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: 11,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: ".13em",
                  mb: 2
                }}
              >
                {showcase.category} / Client work
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 40, sm: 54, md: 60 },
                  lineHeight: 1.08,
                  letterSpacing: "-.045em",
                  overflowWrap: "anywhere"
                }}
              >
                {showcase.headline}
              </Typography>
              <Typography sx={{ mt: 3, color: "text.secondary", fontSize: 18, lineHeight: 1.75, maxWidth: 560 }}>
                {summary}
              </Typography>
              <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {showcase.strengths.map(strength => (
                  <Typography
                    key={strength}
                    sx={{ px: 1.25, py: 0.5, fontSize: 11, border: 1, borderColor: "divider", borderRadius: "6px" }}
                  >
                    {strength}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box sx={{ borderRadius: "20px", overflow: "hidden", border: 1, borderColor: "divider" }}>
              <TechnologyVisual technologies={technologies} showcase={showcase} large />
              <Box
                sx={{
                  bgcolor: "background.paper",
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: ".12em",
                      color: "text.secondary",
                      mb: 0.75
                    }}
                  >
                    My role
                  </Typography>
                  <Typography sx={{ fontSize: 18, fontWeight: 650, lineHeight: 1.3 }}>{showcase.role}</Typography>
                </Box>
                <ArrowOutwardRounded sx={{ color: "primary.main", fontSize: 28 }} />
              </Box>
            </Box>
          </Box>
          {feedback.state === "available" && (
            <Box
              component="section"
              aria-labelledby="feedback-heading"
              sx={{
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderRadius: "18px",
                p: { xs: 3, md: 4 },
                mb: { xs: 5, md: 8 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "180px minmax(0,1fr)" },
                gap: 3
              }}
            >
              <Box>
                <Typography id="feedback-heading" component="h2" sx={{ fontSize: 13, fontWeight: 700, mb: 1 }}>
                  Client perspective
                </Typography>
                <Typography
                  sx={{ color: "primary.main", fontSize: 12, display: "flex", alignItems: "center", gap: 0.5 }}
                >
                  <StarRounded sx={{ fontSize: 16 }} />
                  {feedback.attribution}
                </Typography>
              </Box>
              <Box>
                <Typography
                  component={feedback.quote ? "blockquote" : "p"}
                  sx={{
                    m: 0,
                    fontSize: { xs: 19, md: 24 },
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: "-.015em"
                  }}
                >
                  {feedback.quote ? `“${feedback.quote}”` : feedback.summary}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                  {feedback.sourceHref ? (
                    <Link
                      href={feedback.sourceHref}
                      color="inherit"
                      {...interactionTrackingAttributes("outbound_click", "evidence_source", "engagement_feedback")}
                    >
                      Read the work history on Upwork
                    </Link>
                  ) : (
                    feedback.attribution
                  )}{" "}
                  · Checked {formatEngagementDate(feedback.observedAt)}
                </Typography>
              </Box>
            </Box>
          )}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 7 },
              mb: { xs: 6, md: 9 }
            }}
          >
            <Box component="section" aria-labelledby="client-situation">
              <Typography sx={{ color: "primary.main", fontFamily: "monospace", fontSize: 11, mb: 1.5 }}>
                01 / THE CONTEXT
              </Typography>
              <Typography
                id="client-situation"
                component="h2"
                sx={{ fontSize: 26, fontWeight: 650, mb: 2, letterSpacing: "-.025em" }}
              >
                The challenge.
              </Typography>
              <Copy section={situation} />
            </Box>
            <Box component="section" aria-labelledby={contribution ? "personal-contribution" : "engagement-scope"}>
              <Typography sx={{ color: "primary.main", fontFamily: "monospace", fontSize: 11, mb: 1.5 }}>
                02 / {contribution ? "MY CONTRIBUTION" : "ENGAGEMENT FOCUS"}
              </Typography>
              <Typography
                id={contribution ? "personal-contribution" : "engagement-scope"}
                component="h2"
                sx={{ fontSize: 26, fontWeight: 650, mb: 2, letterSpacing: "-.025em" }}
              >
                {contribution?.title || "Where the work focused."}
              </Typography>
              {(contribution || scope) && <Copy section={(contribution || scope)!} />}
            </Box>
          </Box>
          {(technologies.length > 0 || technicalContext || implementation.length > 0) && (
            <Box
              component="section"
              aria-labelledby="technology-heading"
              sx={{ borderTop: 1, borderColor: "divider", pt: { xs: 4, md: 6 }, mb: { xs: 5, md: 8 } }}
            >
              <Typography sx={{ color: "primary.main", fontFamily: "monospace", fontSize: 11, mb: 1.5 }}>
                03 / THE ENGINEERING
              </Typography>
              <Typography
                id="technology-heading"
                component="h2"
                sx={{
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 700,
                  letterSpacing: "-.03em",
                  mb: 4,
                  scrollMarginTop: 100
                }}
              >
                Technology & trade-offs.
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr)",
                  gap: { xs: 4, md: 6 },
                  alignItems: "start"
                }}
              >
                {technologies.length > 0 && <TechnologyMap technologies={technologies} />}
                <Box>
                  {technicalContext && (
                    <>
                      <Typography color="text.secondary" sx={{ fontSize: 14, mb: 3 }}>
                        My engineering perspective: what each approach helps solve, and what needs care.
                      </Typography>
                      <Box
                        sx={{
                          display: "grid",
                          gap: 2,
                          gridTemplateColumns: {
                            xs: "minmax(0,1fr)",
                            md: `repeat(${Math.min(technicalContext.points.length, 3)}, minmax(0,1fr))`
                          }
                        }}
                      >
                        {technicalContext.points.map(point => (
                          <Box
                            key={point.title}
                            sx={{ p: { xs: 2.5, md: 3 }, border: 1, borderColor: "divider", borderRadius: "14px" }}
                          >
                            <Typography component="h3" sx={{ fontSize: 19, fontWeight: 650, lineHeight: 1.4, mb: 1.5 }}>
                              {point.title}
                            </Typography>
                            <Typography color="text.secondary" sx={{ fontSize: 15, lineHeight: 1.75 }}>
                              {point.explanation}
                            </Typography>
                            <Typography color="text.secondary" sx={{ fontSize: 13, lineHeight: 1.7, mt: 2 }}>
                              <Box component="span" sx={{ fontWeight: 650, color: "primary.main" }}>
                                The trade-off:{" "}
                              </Box>
                              {point.tradeoff}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      {technicalContext.examples.length > 0 && (
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                          Example tools: {technicalContext.examples.join(" · ")}. These illustrate the reasoning;
                          historical use on this project is not established.
                        </Typography>
                      )}
                    </>
                  )}
                  {implementation.length > 0 && (
                    <Box sx={{ mt: technicalContext ? 4 : 0 }}>
                      {implementation.map((section, i) => (
                        <Box key={i} sx={{ mb: 3 }}>
                          <Typography component="h3" sx={{ fontSize: 20, fontWeight: 650, mb: 2 }}>
                            {section.title}
                          </Typography>
                          <Copy section={section} />
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          )}
          <Box
            component="details"
            sx={{
              borderTop: 1,
              borderBottom: 1,
              borderColor: "divider",
              py: 2.5,
              mb: 3,
              "& summary": { cursor: "pointer", fontSize: 13, minHeight: 44, alignContent: "center" },
              "& summary:focus-visible": { outline: "3px solid", outlineColor: "primary.main", outlineOffset: 3 }
            }}
          >
            <Box component="summary">Contract details and sources</Box>
            <Typography sx={{ fontSize: 15, fontWeight: 600, my: 2 }}>{identity.name}</Typography>
            {engagement.format === "engagement-brief" && (
              <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
                Engagement brief based on the original job title and available description.
              </Typography>
            )}
            <Box
              component="dl"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "150px 1fr" },
                gap: 1.5,
                fontSize: 13,
                "& dt": { color: "text.secondary" },
                "& dd": { m: 0 }
              }}
            >
              <Box component="dt">Contract period</Box>
              <Box component="dd">{formatContractPeriod(identity)}</Box>
              <Box component="dt">Upwork status</Box>
              <Box component="dd">
                {engagementStatus(engagement)} · Checked {formatEngagementDate(contract.observedAt)}
              </Box>
              <Box component="dt">Work delivery</Box>
              <Box component="dd">
                {delivery.state === "delivered"
                  ? `Delivered${delivery.completedAt ? ` on ${formatEngagementDate(delivery.completedAt)}` : "; exact end date not recorded"}`
                  : "Delivery date not recorded."}
              </Box>
              <Box component="dt">Product today</Box>
              <Box component="dd">
                {product.state === "not-verified"
                  ? "Current availability not verified"
                  : product.state.replace(/-/g, " ")}
              </Box>
              {feedback.state !== "available" && (
                <>
                  <Box component="dt">Client feedback</Box>
                  <Box component="dd">
                    {feedback.state === "removed"
                      ? "Feedback removed on Upwork"
                      : feedback.state === "not-yet-left"
                        ? "No closing feedback while the contract remains open"
                        : "No client feedback recorded"}
                  </Box>
                </>
              )}
            </Box>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                color="inherit"
                {...interactionTrackingAttributes(
                  "outbound_click",
                  link.href === upworkProfile.href ? "upwork_profile" : "evidence_source",
                  "engagement_artifact"
                )}
                sx={{ display: "inline-block", py: 1.5, fontSize: 13 }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
          {related.length > 0 && (
            <Box component="nav" aria-label="Related engagements" sx={{ py: 3 }}>
              {related.map(item => (
                <RelatedEngagementLink key={item.slug} item={item} />
              ))}
            </Box>
          )}
        </Container>
      </Box>
      <PortfolioContact />
    </HeaderFooterLayout>
  );
};
export default EngagementPage;
