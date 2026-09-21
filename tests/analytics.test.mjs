import assert from "node:assert/strict";
import test from "node:test";
import {
  ANALYTICS_CONSENT_MAX_AGE,
  PRODUCTION_GA4_MEASUREMENT_ID,
  buildPageSnapshot,
  canonicalPathname,
  classifyPage,
  consentCookieValue,
  isProductionAnalyticsEnvironment,
  readConsentCookie,
  sanitizePageLocation,
  sanitizeReferrer,
  validateProjectContext
} from "../src/analytics/contract.ts";
import { PageviewController } from "../src/analytics/pageviewController.ts";
import {
  buildPortfolioEventPayload,
  canCollectAnalyticsEvent,
  canonicalTechnology,
  filterCategoryFromLabel,
  projectCategoryFromLabel,
  sanitizePortfolioEvent,
  targetTypeForDimensions
} from "../src/analytics/events.ts";
import { CALENDLY_ORIGIN, CalendlyMessageSequence, sanitizeCalendlyMessage } from "../src/analytics/calendly.ts";
import { initializeGoogleTag } from "../src/analytics/googleTag.ts";

const home = (location = "https://www.thexap.com/") =>
  buildPageSnapshot({
    location,
    title: "  Xavier Perez  ",
    referrer: "https://search.example/results?q=private",
    context: classifyPage("/")
  });

const engagement = (slug, id = "UW-01") => {
  const project = { project_id: id, project_slug: slug, project_category: "full_stack_cloud" };
  return buildPageSnapshot({
    location: `https://www.thexap.com/projects/upwork/${slug}`,
    title: `${slug} | Xavier Perez`,
    context: classifyPage(`/projects/upwork/${slug}`, project)
  });
};

test("canonical path ignores query, hash, duplicate slashes, and trailing slash", () => {
  assert.equal(canonicalPathname("/projects//armonia/?x=1#proof"), "/projects/armonia");
  assert.equal(canonicalPathname("/"), "/");
});

test("page location retains only individually valid campaign parameters in contract order", () => {
  const value = sanitizePageLocation(
    "https://evil.example/projects?utm_content=engagement_senior-react-nextjs-2022_link&utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&email=private%40example.com#secret"
  );
  assert.equal(
    value,
    "https://www.thexap.com/projects?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=engagement_senior-react-nextjs-2022_link"
  );
});

test("invalid and duplicate campaign values are dropped without retaining other query data", () => {
  const value = sanitizePageLocation(
    "https://www.thexap.com/?utm_source=upwork&utm_source=other&utm_medium=cpc&utm_campaign=proposal_2026_13&utm_id=client-42&utm_content=anything&name=Person"
  );
  assert.equal(value, "https://www.thexap.com/");
});

test("same-origin referrers keep only canonical path and external referrers keep only origin", () => {
  assert.equal(
    sanitizeReferrer("https://www.thexap.com/projects/?token=secret#section"),
    "https://www.thexap.com/projects"
  );
  assert.equal(sanitizeReferrer("https://search.example/results?q=private"), "https://search.example");
  assert.equal(sanitizeReferrer("javascript:alert(1)"), undefined);
});

test("route classification requires public context for dynamic project and blog routes", () => {
  const flagship = { project_id: "armonia", project_slug: "armonia", project_category: "featured" };
  assert.deepEqual(classifyPage("/projects/armonia", flagship), {
    content_group: "portfolio",
    page_type: "flagship",
    project: flagship
  });
  assert.equal(classifyPage("/projects/private-project").page_type, "not_found");
  assert.equal(classifyPage("/blog/public-post", undefined, true).page_type, "blog_post");
  assert.equal(classifyPage("/blog/missing", undefined, false).page_type, "not_found");
});

test("project context rejects unknown IDs, invalid slugs, and flagship/category mismatches", () => {
  assert.equal(
    validateProjectContext({ project_id: "client-private", project_slug: "private", project_category: "web_product" }),
    undefined
  );
  assert.equal(
    validateProjectContext({ project_id: "UW-01", project_slug: "bad slug", project_category: "web_product" }),
    undefined
  );
  assert.equal(
    validateProjectContext({ project_id: "UW-01", project_slug: "valid-slug", project_category: "featured" }),
    undefined
  );
});

test("environment gate accepts only the verified destination on the canonical production host", () => {
  assert.equal(isProductionAnalyticsEnvironment(PRODUCTION_GA4_MEASUREMENT_ID, "www.thexap.com"), true);
  assert.equal(isProductionAnalyticsEnvironment(PRODUCTION_GA4_MEASUREMENT_ID, "thexap.com"), false);
  assert.equal(isProductionAnalyticsEnvironment(PRODUCTION_GA4_MEASUREMENT_ID, "localhost"), false);
  assert.equal(isProductionAnalyticsEnvironment("G-OTHER", "www.thexap.com"), false);
  assert.equal(isProductionAnalyticsEnvironment(undefined, "www.thexap.com"), false);
});

test("Google tag commands use the arguments objects required by gtag.js", async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const listeners = new Map();
  const script = {
    dataset: {},
    addEventListener: (name, listener) => listeners.set(name, listener),
    remove: () => undefined
  };

  globalThis.window = {};
  globalThis.document = {
    getElementById: () => null,
    createElement: () => script,
    head: { appendChild: () => undefined }
  };

  try {
    const loading = initializeGoogleTag(PRODUCTION_GA4_MEASUREMENT_ID);
    assert.equal(window.dataLayer.length, 4);
    assert.equal(window.dataLayer.every(entry => Object.prototype.toString.call(entry) === "[object Arguments]"), true);
    assert.equal(window.dataLayer.some(Array.isArray), false);
    listeners.get("load")();
    await loading;
  } finally {
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
  }
});

test("consent cookie accepts only the versioned values and emits the frozen attributes", () => {
  assert.equal(readConsentCookie("a=1; thexap_analytics_consent=v1.granted; b=2"), "granted");
  assert.equal(readConsentCookie("thexap_analytics_consent=v1.denied"), "denied");
  assert.equal(readConsentCookie("thexap_analytics_consent=granted"), null);
  assert.equal(
    consentCookieValue("granted", true),
    `thexap_analytics_consent=v1.granted; Max-Age=${ANALYTICS_CONSENT_MAX_AGE}; Path=/; SameSite=Lax; Secure`
  );
});

test("delayed consent sends the current page once and never replays an earlier page", () => {
  const sent = [];
  const controller = new PageviewController(payload => sent.push(payload));
  controller.observe(home());
  controller.observe(engagement("senior-react-nextjs-2022"));
  controller.flush();
  assert.equal(sent.length, 0);
  controller.grant();
  controller.flush();
  assert.equal(sent.length, 1);
  assert.equal(sent[0].project_slug, "senior-react-nextjs-2022");
  assert.equal(sent[0].page_referrer, undefined);
});

test("query-only, hash-only, repeated observation, and remount-style observation do not duplicate a pageview", () => {
  const sent = [];
  const controller = new PageviewController(payload => sent.push(payload));
  controller.observe(home());
  controller.grant();
  controller.flush();
  controller.observe(home("https://www.thexap.com/?utm_source=upwork#proof"));
  controller.observe(home("https://www.thexap.com/?query=ignored"));
  controller.flush();
  assert.equal(sent.length, 1);
});

test("completed sibling-slug and back navigation each send once with the prior canonical referrer", () => {
  const sent = [];
  const controller = new PageviewController(payload => sent.push(payload));
  const first = engagement("senior-react-nextjs-2022", "UW-01");
  const second = engagement("react-webapp-2020-oct", "UW-02");
  controller.observe(first);
  controller.grant();
  controller.flush();
  controller.observe(second);
  controller.flush();
  controller.observe(first);
  controller.flush();
  assert.equal(sent.length, 3);
  assert.equal(sent[1].page_referrer, first.page_location);
  assert.equal(sent[2].page_referrer, second.page_location);
});

test("late tag readiness preserves consented rapid completed navigations in order", () => {
  const sent = [];
  const controller = new PageviewController(payload => sent.push(payload));
  controller.observe(home());
  controller.grant();
  controller.observe(engagement("senior-react-nextjs-2022", "UW-01"));
  controller.observe(engagement("react-webapp-2020-oct", "UW-02"));
  assert.equal(sent.length, 0);
  controller.flush();
  assert.deepEqual(
    sent.map(payload => payload.page_type === "home" ? "home" : payload.project_id),
    ["home", "UW-01", "UW-02"]
  );
});

test("denial and withdrawal clear queued work; a later grant sends only the then-current page", () => {
  const sent = [];
  const controller = new PageviewController(payload => sent.push(payload));
  controller.observe(home());
  controller.grant();
  const firstGrantKey = controller.getVisitKey();
  controller.deny();
  controller.flush();
  controller.observe(engagement("senior-react-nextjs-2022", "UW-01"));
  controller.flush();
  assert.equal(sent.length, 0);
  controller.grant();
  assert.notEqual(controller.getVisitKey(), firstGrantKey);
  controller.flush();
  assert.equal(sent.length, 1);
  assert.equal(sent[0].project_id, "UW-01");
});

test("public presentation labels map only to the frozen reporting categories", () => {
  assert.equal(projectCategoryFromLabel("Full stack & cloud"), "full_stack_cloud");
  assert.equal(projectCategoryFromLabel("Unknown"), undefined);
  assert.equal(filterCategoryFromLabel("All work"), "all_work");
  assert.equal(filterCategoryFromLabel("React"), undefined);
});

test("technology labels resolve through the frozen dictionary and unknown labels are rejected", () => {
  assert.equal(canonicalTechnology("Amazon EventBridge"), "amazon_eventbridge");
  assert.equal(canonicalTechnology("React Native"), "react_native");
  assert.equal(canonicalTechnology("Illustrative framework"), undefined);
});

test("portfolio event payloads keep bounded project, placement, visibility, and CTR fields", () => {
  const snapshot = engagement("senior-react-nextjs-2022", "UW-01");
  assert.deepEqual(
    buildPortfolioEventPayload(
      "select_content",
      {
        ...snapshot.project,
        source_placement: "projects_grid",
        target_type: "project_card",
        content_type: "project",
        item_id: "UW-01",
        impression_eligible: true,
        is_first_selection: true,
        destination_url: "https://private.example/job?id=42"
      },
      snapshot
    ),
    {
      page_location: snapshot.page_location,
      page_title: snapshot.page_title,
      content_group: "portfolio",
      page_type: "upwork_engagement",
      project_id: "UW-01",
      project_slug: "senior-react-nextjs-2022",
      project_category: "full_stack_cloud",
      source_placement: "projects_grid",
      target_type: "project_card",
      content_type: "project",
      item_id: "UW-01",
      impression_eligible: true,
      is_first_selection: true
    }
  );
});

test("invalid project IDs, placements, filters, counts, and technology values emit no event", () => {
  assert.equal(
    sanitizePortfolioEvent("project_impression", {
      project_id: "private-client",
      project_slug: "private",
      project_category: "web_product",
      source_placement: "arbitrary_component",
      target_type: "project_card"
    }),
    undefined
  );
  assert.equal(
    sanitizePortfolioEvent("portfolio_filter", { filter_category: "react", result_count: -1 }),
    undefined
  );
  assert.equal(
    sanitizePortfolioEvent("technology_exposure", {
      project_id: "UW-01",
      project_slug: "senior-react-nextjs-2022",
      project_category: "full_stack_cloud",
      technology: "unknown",
      source_placement: "technology_section",
      target_type: "technology_label"
    }),
    undefined
  );
});

test("tall-card fallback selects the title target only when half the card cannot fit", () => {
  assert.equal(targetTypeForDimensions(800, 600), "project_card");
  assert.equal(targetTypeForDimensions(1300, 600), "project_title_link");
});

test("contact and outbound events retain only allowlisted dimensions and current project context", () => {
  const snapshot = engagement("senior-react-nextjs-2022", "UW-01");
  assert.deepEqual(
    buildPortfolioEventPayload(
      "contact_click",
      {
        destination_type: "schedule_meeting",
        source_placement: "portfolio_contact",
        destination_url: "https://private.example/contact?email=person@example.com"
      },
      snapshot
    ),
    {
      page_location: snapshot.page_location,
      page_title: snapshot.page_title,
      content_group: "portfolio",
      page_type: "upwork_engagement",
      project_id: "UW-01",
      project_slug: "senior-react-nextjs-2022",
      project_category: "full_stack_cloud",
      destination_type: "schedule_meeting",
      source_placement: "portfolio_contact"
    }
  );
  assert.equal(
    buildPortfolioEventPayload(
      "outbound_click",
      { destination_type: "private_client", source_placement: "engagement_artifact" },
      snapshot
    ),
    undefined
  );
});

test("meeting events are accepted only on the schedule page with frozen values", () => {
  const schedule = buildPageSnapshot({
    location: "https://www.thexap.com/schedule-meeting",
    title: "Schedule a meeting",
    context: classifyPage("/schedule-meeting")
  });
  assert.deepEqual(buildPortfolioEventPayload("meeting_step", { meeting_step: "event_type_viewed" }, schedule), {
    page_location: schedule.page_location,
    page_title: schedule.page_title,
    content_group: "conversion",
    page_type: "schedule",
    meeting_step: "event_type_viewed"
  });
  assert.equal(buildPortfolioEventPayload("generate_lead", { method: "calendly" }, home()), undefined);
  assert.equal(buildPortfolioEventPayload("meeting_step", { meeting_step: "invitee_created" }, schedule), undefined);
});

test("custom events require granted consent and the production environment gate", () => {
  assert.equal(canCollectAnalyticsEvent(null, true), false);
  assert.equal(canCollectAnalyticsEvent("denied", true), false);
  assert.equal(canCollectAnalyticsEvent("granted", false), false);
  assert.equal(canCollectAnalyticsEvent("granted", true), true);
});

test("Calendly messages require the exact origin, active source, object data, and allowlisted event", () => {
  const activeFrame = {};
  const valid = { origin: CALENDLY_ORIGIN, source: activeFrame, data: { event: "calendly.event_scheduled", payload: { email: "private@example.com" } } };
  assert.deepEqual(sanitizeCalendlyMessage(valid, activeFrame), {
    event: "calendly.event_scheduled",
    analytics: { name: "generate_lead", params: { method: "calendly" } }
  });
  assert.equal(sanitizeCalendlyMessage({ ...valid, origin: "https://evil.example" }, activeFrame), undefined);
  assert.equal(sanitizeCalendlyMessage({ ...valid, source: {} }, activeFrame), undefined);
  assert.equal(sanitizeCalendlyMessage({ ...valid, data: null }, activeFrame), undefined);
  assert.equal(
    sanitizeCalendlyMessage({ ...valid, data: { event: "calendly.profile_page_viewed" } }, activeFrame),
    undefined
  );
});

test("Calendly sequence deduplicates each stage, resets after completion, and resets on remount", () => {
  const activeFrame = {};
  const message = event => ({ origin: CALENDLY_ORIGIN, source: activeFrame, data: { event, payload: { uri: "private" } } });
  const sequence = new CalendlyMessageSequence();

  assert.deepEqual(sequence.consume(message("calendly.event_type_viewed"), activeFrame), {
    name: "meeting_step",
    params: { meeting_step: "event_type_viewed" }
  });
  assert.equal(sequence.consume(message("calendly.event_type_viewed"), activeFrame), undefined);
  assert.deepEqual(sequence.consume(message("calendly.date_and_time_selected"), activeFrame), {
    name: "meeting_step",
    params: { meeting_step: "date_and_time_selected" }
  });
  assert.deepEqual(sequence.consume(message("calendly.event_scheduled"), activeFrame), {
    name: "generate_lead",
    params: { method: "calendly" }
  });
  assert.equal(sequence.consume(message("calendly.event_scheduled"), activeFrame), undefined);
  assert.deepEqual(sequence.consume(message("calendly.event_type_viewed"), activeFrame), {
    name: "meeting_step",
    params: { meeting_step: "event_type_viewed" }
  });

  const remounted = new CalendlyMessageSequence();
  assert.deepEqual(remounted.consume(message("calendly.event_type_viewed"), activeFrame), {
    name: "meeting_step",
    params: { meeting_step: "event_type_viewed" }
  });
});
