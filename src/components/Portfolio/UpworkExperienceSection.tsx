import { useMemo, useRef, useState } from "react";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import type { EngagementSummary } from "../../content/portfolio/engagementTypes";
import type { EngagementCategory } from "../../content/portfolio/engagementShowcase";
import { engagementPath } from "../../content/portfolio/engagementPresentation";
import { upworkProfile } from "../../content/portfolio/upworkProfile";
import { TechnologyVisual } from "./TechnologyVisual";
import { useAnalytics } from "../../analytics/AnalyticsProvider";
import {
  filterCategoryFromLabel,
  interactionTrackingAttributes,
  projectCategoryFromLabel
} from "../../analytics/events";
import { useProjectLinkTracking } from "../../analytics/usePortfolioTracking";

const filters: Array<"All work" | EngagementCategory> = [
  "All work",
  "Web & product",
  "Full stack & cloud",
  "Mobile",
  "Testing & reliability",
  "Data & workflows"
];
const cardPeriod = (record: EngagementSummary) => {
  const start = record.identity.startDate.slice(0, 4);
  const end = record.identity.endDate?.slice(0, 4);
  return !end
    ? `${start} · ${record.delivery.state === "delivered" ? "work delivered" : "contract open"}`
    : start === end
      ? start
      : `${start} - ${end}`;
};

const EngagementCard = ({ record }: { record: EngagementSummary }) => {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const project = useMemo(
    () => ({
      project_id: record.identity.id,
      project_slug: record.identity.slug,
      project_category: projectCategoryFromLabel(record.showcase.category)!
    }),
    [record.identity.id, record.identity.slug, record.showcase.category]
  );
  const tracking = useProjectLinkTracking({ project, placement: "projects_grid", cardRef, titleRef });

  return (
    <Box component="li" role="listitem" sx={{ minWidth: 0 }}>
      <Link
        ref={cardRef}
        component={NextLink}
        prefetch={false}
        href={engagementPath(record.identity.slug)}
        color="inherit"
        underline="none"
        aria-label={`${record.showcase.headline} View ${record.identity.name}`}
        onClick={tracking.onClick}
        onAuxClick={tracking.onAuxClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          borderRadius: "18px",
          bgcolor: "background.paper",
          transition: "transform 180ms ease, border-color 180ms ease",
          "&:hover": { transform: "translateY(-5px)", borderColor: "primary.main" },
          "@media (prefers-reduced-motion: reduce)": { transition: "none", "&:hover": { transform: "none" } }
        }}
      >
        <Box sx={{ height: 220 }}>
          <TechnologyVisual technologies={record.technologies} showcase={record.showcase} />
        </Box>
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 2
            }}
          >
            <Typography sx={{ color: "primary.main", fontSize: 11, fontWeight: 700 }}>
              {record.showcase.category}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontFamily: "monospace", fontSize: 10 }}>
              {cardPeriod(record)}
            </Typography>
          </Box>
          <Typography
            ref={titleRef}
            component="h3"
            sx={{ fontSize: 23, letterSpacing: "-.025em", lineHeight: 1.22, fontWeight: 700, mb: 1.5 }}
          >
            {record.showcase.headline}
          </Typography>
          <Typography sx={{ fontSize: 14, lineHeight: 1.65, color: "text.secondary", mb: 3 }}>
            {record.summary}
          </Typography>
          <Box
            sx={{
              mt: "auto",
              pt: 2,
              borderTop: 1,
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2
            }}
          >
            <Typography sx={{ fontSize: 12, fontWeight: 500 }}>{record.showcase.role}</Typography>
            <ArrowOutwardRounded sx={{ fontSize: 20, color: "primary.main", flexShrink: 0 }} />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

const UpworkExperienceSection = ({ engagements }: { engagements: EngagementSummary[] }) => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const { trackEvent } = useAnalytics();
  if (!engagements.length) return null;
  const visible = engagements.filter(record => filter === "All work" || record.showcase.category === filter);
  const chooseFilter = (label: (typeof filters)[number]) => {
    if (label === filter) return;
    const category = filterCategoryFromLabel(label);
    if (!category) return;
    const resultCount = engagements.filter(record => label === "All work" || record.showcase.category === label).length;
    trackEvent("portfolio_filter", { filter_category: category, result_count: resultCount });
    setFilter(label);
  };
  return (
    <Box
      component="section"
      id="upwork-experience"
      aria-labelledby="upwork-heading"
      sx={{ py: { xs: 7, md: 11 }, scrollMarginTop: 90 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 3, flexWrap: "wrap", mb: 4 }}
        >
          <Box sx={{ maxWidth: 670 }}>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                mb: 2
              }}
            >
              The client portfolio
            </Typography>
            <Typography
              id="upwork-heading"
              component="h2"
              sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 750, letterSpacing: "-.035em", lineHeight: 1.1 }}
            >
              Different challenges.
              <br />
              The same commitment.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 580 }}>
              28 engagements across web, mobile, cloud, and testing. Explore the work that matches what your product
              needs next.
            </Typography>
          </Box>
          <Link
            href={upworkProfile.href}
            {...interactionTrackingAttributes("outbound_click", "upwork_profile", "upwork_profile")}
            color="inherit"
            sx={{ fontSize: 14, display: "inline-flex", alignItems: "center", gap: 1, minHeight: 44 }}
          >
            View my Upwork history <ArrowOutwardRounded sx={{ fontSize: 17 }} />
          </Link>
        </Box>
        <Box role="group" aria-label="Filter client work" sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {filters.map(label => (
            <Button
              key={label}
              aria-pressed={filter === label}
              onClick={() => chooseFilter(label)}
              variant={filter === label ? "contained" : "outlined"}
              sx={{
                minHeight: 44,
                px: 2,
                fontSize: 13,
                color: filter === label ? "primary.contrastText" : "text.secondary",
                borderColor: "divider",
                borderRadius: "8px"
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Typography aria-live="polite" variant="caption" color="text.secondary" sx={{ mb: 3 }}>
          {visible.length} {visible.length === 1 ? "engagement" : "engagements"} · newest first
        </Typography>
        <Box
          component="ul"
          role="list"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0,1fr)", sm: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))" },
            gap: 3,
            listStyle: "none",
            m: 0,
            p: 0
          }}
        >
          {visible.map(record => (
            <EngagementCard key={record.identity.id} record={record} />
          ))}
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 3 }}>
          Each card represents one engagement. Repeat contracts have separate pages. The introductory call is excluded.
        </Typography>
      </Container>
    </Box>
  );
};
export default UpworkExperienceSection;
