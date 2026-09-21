import {
  toPageViewPayload,
  validateProjectContext,
  type AnalyticsConsent,
  type PageSnapshot,
  type ProjectCategory,
  type ProjectContext
} from "./contract.ts";

export const canCollectAnalyticsEvent = (consent: AnalyticsConsent, environmentAllowed: boolean): boolean =>
  consent === "granted" && environmentAllowed;

export const SOURCE_PLACEMENTS = [
  "header",
  "footer",
  "homepage_proof",
  "projects_featured",
  "projects_grid",
  "projects_hero",
  "portfolio_contact",
  "related_projects",
  "flagship_artifact",
  "engagement_artifact",
  "engagement_feedback",
  "upwork_profile",
  "technology_section",
  "schedule_page"
] as const;
export type SourcePlacement = (typeof SOURCE_PLACEMENTS)[number];

export const FILTER_CATEGORIES = [
  "all_work",
  "web_product",
  "full_stack_cloud",
  "mobile",
  "testing_reliability",
  "data_workflows"
] as const;
export type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export type ProjectTargetType = "project_card" | "project_title_link";
export const OUTBOUND_DESTINATIONS = [
  "live_product",
  "upwork_profile",
  "github",
  "linkedin",
  "x",
  "evidence_source"
] as const;
export type OutboundDestination = (typeof OUTBOUND_DESTINATIONS)[number];
export type InteractionEventName = "contact_click" | "outbound_click";
export type ConversionEventName = "meeting_step" | "generate_lead";
export type AnalyticsEventName =
  | "project_impression"
  | "select_content"
  | "portfolio_filter"
  | "technology_exposure"
  | InteractionEventName
  | ConversionEventName;

const categoryByLabel: Record<string, ProjectCategory> = {
  "Web & product": "web_product",
  "Full stack & cloud": "full_stack_cloud",
  Mobile: "mobile",
  "Testing & reliability": "testing_reliability",
  "Data & workflows": "data_workflows"
};

const filterByLabel: Record<string, FilterCategory> = {
  "All work": "all_work",
  ...categoryByLabel
};

export const projectCategoryFromLabel = (value: string): ProjectCategory | undefined => categoryByLabel[value];
export const filterCategoryFromLabel = (value: string): FilterCategory | undefined => filterByLabel[value];

export const TECHNOLOGY_DICTIONARY = {
  "Amazon API Gateway": "amazon_api_gateway",
  "Amazon EventBridge": "amazon_eventbridge",
  "AWS CDK": "aws_cdk",
  "AWS Lambda": "aws_lambda",
  Clerk: "clerk",
  Cloudflare: "cloudflare",
  Contentful: "contentful",
  Cypress: "cypress",
  "Drizzle ORM": "drizzle_orm",
  Firebase: "firebase",
  "Google Analytics": "google_analytics",
  "Google Flow": "google_flow",
  GraphQL: "graphql",
  Hono: "hono",
  Ionic: "ionic",
  Linux: "linux",
  MongoDB: "mongodb",
  "MUI v5": "mui_v5",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  Nx: "nx",
  PostgreSQL: "postgresql",
  React: "react",
  "React Native": "react_native",
  Redux: "redux",
  Relay: "relay",
  TypeScript: "typescript",
  Vite: "vite",
  WhatsApp: "whatsapp"
} as const;

export const canonicalTechnology = (label: string): string | undefined =>
  TECHNOLOGY_DICTIONARY[label as keyof typeof TECHNOLOGY_DICTIONARY];

const isPlacement = (value: unknown): value is SourcePlacement =>
  typeof value === "string" && SOURCE_PLACEMENTS.includes(value as SourcePlacement);
const isTargetType = (value: unknown): value is ProjectTargetType =>
  value === "project_card" || value === "project_title_link";
const isOutboundDestination = (value: unknown): value is OutboundDestination =>
  typeof value === "string" && OUTBOUND_DESTINATIONS.includes(value as OutboundDestination);

const projectFromParams = (params: Record<string, unknown>): ProjectContext | undefined =>
  validateProjectContext({
    project_id: String(params.project_id || ""),
    project_slug: String(params.project_slug || ""),
    project_category: params.project_category as ProjectCategory
  });

export const sanitizePortfolioEvent = (
  name: AnalyticsEventName,
  params: Record<string, unknown>,
  currentProject?: ProjectContext
): Record<string, unknown> | undefined => {
  if (name === "contact_click") {
    if (params.destination_type !== "schedule_meeting" || !isPlacement(params.source_placement)) return undefined;
    return {
      ...(validateProjectContext(currentProject) || {}),
      destination_type: "schedule_meeting",
      source_placement: params.source_placement
    };
  }

  if (name === "outbound_click") {
    if (!isOutboundDestination(params.destination_type) || !isPlacement(params.source_placement)) return undefined;
    return {
      ...(validateProjectContext(currentProject) || {}),
      destination_type: params.destination_type,
      source_placement: params.source_placement
    };
  }

  if (name === "meeting_step") {
    if (params.meeting_step !== "event_type_viewed" && params.meeting_step !== "date_and_time_selected") {
      return undefined;
    }
    return { meeting_step: params.meeting_step };
  }

  if (name === "generate_lead") {
    return params.method === "calendly" ? { method: "calendly" } : undefined;
  }

  if (name === "portfolio_filter") {
    const filter = params.filter_category;
    const count = params.result_count;
    if (
      typeof filter !== "string" ||
      !FILTER_CATEGORIES.includes(filter as FilterCategory) ||
      !Number.isInteger(count) ||
      Number(count) < 0 ||
      Number(count) > 500
    ) {
      return undefined;
    }
    return { filter_category: filter, result_count: count };
  }

  const project = projectFromParams(params) || validateProjectContext(currentProject);
  if (!project) return undefined;

  if (name === "technology_exposure") {
    const technology = params.technology;
    if (
      typeof technology !== "string" ||
      !Object.values(TECHNOLOGY_DICTIONARY).includes(technology as never) ||
      params.source_placement !== "technology_section" ||
      params.target_type !== "technology_label"
    ) {
      return undefined;
    }
    return { ...project, technology, source_placement: "technology_section", target_type: "technology_label" };
  }

  if (!isPlacement(params.source_placement) || !isTargetType(params.target_type)) return undefined;
  const base = { ...project, source_placement: params.source_placement, target_type: params.target_type };
  if (name === "project_impression") return base;

  if (
    params.content_type !== "project" ||
    params.item_id !== project.project_id ||
    typeof params.impression_eligible !== "boolean" ||
    typeof params.is_first_selection !== "boolean"
  ) {
    return undefined;
  }
  return {
    ...base,
    content_type: "project",
    item_id: project.project_id,
    impression_eligible: params.impression_eligible,
    is_first_selection: params.is_first_selection
  };
};

export const buildPortfolioEventPayload = (
  name: AnalyticsEventName,
  params: Record<string, unknown>,
  snapshot: PageSnapshot
): Record<string, unknown> | undefined => {
  if ((name === "meeting_step" || name === "generate_lead") && snapshot.page_type !== "schedule") return undefined;
  const event = sanitizePortfolioEvent(name, params, snapshot.project);
  if (!event) return undefined;
  return { ...toPageViewPayload(snapshot), ...event };
};

export const targetTypeForDimensions = (cardHeight: number, viewportHeight: number): ProjectTargetType =>
  cardHeight * 0.5 <= viewportHeight ? "project_card" : "project_title_link";

export const interactionTrackingAttributes = (
  event: InteractionEventName,
  destination: "schedule_meeting" | OutboundDestination,
  placement: SourcePlacement
) => ({
  "data-analytics-event": event,
  "data-analytics-destination": destination,
  "data-analytics-placement": placement
});
