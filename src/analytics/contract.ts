export const PRODUCTION_GA4_MEASUREMENT_ID = "G-S3WGC5C6QX";
export const PRODUCTION_HOSTNAME = "www.thexap.com";
export const PRODUCTION_ORIGIN = `https://${PRODUCTION_HOSTNAME}`;

export const ANALYTICS_CONSENT_COOKIE = "thexap_analytics_consent";
export const ANALYTICS_CONSENT_MAX_AGE = 15_552_000;

export type AnalyticsConsent = "granted" | "denied" | null;
export type ContentGroup = "marketing" | "portfolio" | "editorial" | "conversion" | "utility";
export type PageType =
  | "home"
  | "about"
  | "projects_index"
  | "flagship"
  | "upwork_engagement"
  | "blog_index"
  | "blog_post"
  | "schedule"
  | "not_found";

export type ProjectCategory =
  | "featured"
  | "web_product"
  | "full_stack_cloud"
  | "mobile"
  | "testing_reliability"
  | "data_workflows";

export type ProjectContext = {
  project_id: string;
  project_slug: string;
  project_category: ProjectCategory;
};

export type PageContext = {
  content_group: ContentGroup;
  page_type: PageType;
  project?: ProjectContext;
};

export type PageSnapshot = PageContext & {
  page_location: string;
  page_title: string;
  page_referrer?: string;
};

export type PageViewPayload = {
  page_location: string;
  page_title: string;
  page_referrer?: string;
  content_group: ContentGroup;
  page_type: PageType;
  project_id?: string;
  project_slug?: string;
  project_category?: ProjectCategory;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content"] as const;
type UtmKey = (typeof UTM_KEYS)[number];

const isAcceptedUtm = (key: UtmKey, value: string): boolean => {
  if (key === "utm_source") return value === "upwork";
  if (key === "utm_medium") return value === "referral";
  if (key === "utm_campaign") return /^proposal_\d{4}_(0[1-9]|1[0-2])$/.test(value);
  if (key === "utm_id") return /^p[a-z0-9]{6}$/.test(value);
  return /^(home|projects|armonia)_link$/.test(value) || /^engagement_[a-z0-9]+(?:-[a-z0-9]+)*_link$/.test(value);
};

export const canonicalPathname = (value: string): string => {
  try {
    const parsed = new URL(value, PRODUCTION_ORIGIN);
    const pathname = parsed.pathname.replace(/\/{2,}/g, "/");
    if (!pathname.startsWith("/")) return "/";
    return pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  } catch {
    return "/";
  }
};

export const sanitizePageLocation = (value: string): string => {
  let parsed: URL;
  try {
    parsed = new URL(value, PRODUCTION_ORIGIN);
  } catch {
    return PRODUCTION_ORIGIN;
  }

  const output = new URL(canonicalPathname(parsed.pathname), PRODUCTION_ORIGIN);
  for (const key of UTM_KEYS) {
    const values = parsed.searchParams.getAll(key);
    if (values.length === 1 && isAcceptedUtm(key, values[0])) output.searchParams.set(key, values[0]);
  }
  return output.toString();
};

export const sanitizeReferrer = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return undefined;
    if (parsed.origin === PRODUCTION_ORIGIN) return `${PRODUCTION_ORIGIN}${canonicalPathname(parsed.pathname)}`;
    return parsed.origin;
  } catch {
    return undefined;
  }
};

export const sanitizePageTitle = (value: string): string => {
  const title = value.trim().slice(0, 300);
  return title || "Xavier Perez";
};

const isProjectId = (value: string): boolean => value === "armonia" || /^UW-\d{2}$/.test(value);
const isProjectSlug = (value: string): boolean => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

export const validateProjectContext = (value: ProjectContext | undefined): ProjectContext | undefined => {
  if (!value || !isProjectId(value.project_id) || !isProjectSlug(value.project_slug)) return undefined;
  if (value.project_id === "armonia") {
    return value.project_slug === "armonia" && value.project_category === "featured" ? value : undefined;
  }
  return value.project_category === "featured" ? undefined : value;
};

export const classifyPage = (pathnameValue: string, project?: ProjectContext, hasBlogPost = false): PageContext => {
  const pathname = canonicalPathname(pathnameValue);
  const validProject = validateProjectContext(project);

  if (pathname === "/") return { content_group: "marketing", page_type: "home" };
  if (pathname === "/about-me") return { content_group: "marketing", page_type: "about" };
  if (pathname === "/projects") return { content_group: "portfolio", page_type: "projects_index" };
  if (pathname === "/blog") return { content_group: "editorial", page_type: "blog_index" };
  if (pathname === "/schedule-meeting") return { content_group: "conversion", page_type: "schedule" };
  if (/^\/blog\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(pathname) && hasBlogPost) {
    return { content_group: "editorial", page_type: "blog_post" };
  }
  if (validProject && pathname === `/projects/${validProject.project_slug}` && validProject.project_id === "armonia") {
    return { content_group: "portfolio", page_type: "flagship", project: validProject };
  }
  if (
    validProject &&
    pathname === `/projects/upwork/${validProject.project_slug}` &&
    validProject.project_id !== "armonia"
  ) {
    return { content_group: "portfolio", page_type: "upwork_engagement", project: validProject };
  }
  return { content_group: "utility", page_type: "not_found" };
};

export const buildPageSnapshot = ({
  location,
  title,
  referrer,
  context
}: {
  location: string;
  title: string;
  referrer?: string;
  context: PageContext;
}): PageSnapshot => ({
  page_location: sanitizePageLocation(location),
  page_title: sanitizePageTitle(title),
  page_referrer: sanitizeReferrer(referrer),
  ...context
});

export const toPageViewPayload = (snapshot: PageSnapshot): PageViewPayload => ({
  page_location: snapshot.page_location,
  page_title: snapshot.page_title,
  ...(snapshot.page_referrer ? { page_referrer: snapshot.page_referrer } : {}),
  content_group: snapshot.content_group,
  page_type: snapshot.page_type,
  ...(snapshot.project || {})
});

export const isProductionAnalyticsEnvironment = (measurementId: string | undefined, hostname: string): boolean =>
  measurementId === PRODUCTION_GA4_MEASUREMENT_ID && hostname === PRODUCTION_HOSTNAME;

export const readConsentCookie = (cookieHeader: string): AnalyticsConsent => {
  const entry = cookieHeader
    .split(";")
    .map(part => part.trim())
    .find(part => part.startsWith(`${ANALYTICS_CONSENT_COOKIE}=`));
  if (!entry) return null;
  const value = entry.slice(ANALYTICS_CONSENT_COOKIE.length + 1);
  if (value === "v1.granted") return "granted";
  if (value === "v1.denied") return "denied";
  return null;
};

export const consentCookieValue = (consent: Exclude<AnalyticsConsent, null>, secure: boolean): string =>
  `${ANALYTICS_CONSENT_COOKIE}=v1.${consent}; Max-Age=${ANALYTICS_CONSENT_MAX_AGE}; Path=/; SameSite=Lax${
    secure ? "; Secure" : ""
  }`;
