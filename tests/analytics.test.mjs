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
  controller.deny();
  controller.flush();
  controller.observe(engagement("senior-react-nextjs-2022", "UW-01"));
  controller.flush();
  assert.equal(sent.length, 0);
  controller.grant();
  controller.flush();
  assert.equal(sent.length, 1);
  assert.equal(sent[0].project_id, "UW-01");
});
