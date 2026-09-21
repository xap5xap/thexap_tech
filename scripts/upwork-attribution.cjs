#!/usr/bin/env node

const fs = require("node:fs");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true
    }
  });
  module._compile(result.outputText, filename);
};

const { publishedEngagements } = require("../src/content/portfolio/engagements/index.ts");

const CANONICAL_ORIGIN = "https://www.thexap.com";
const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content"];
const ALIAS_PATTERN = /^p[a-z0-9]{6}$/;
const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;
const ENGAGEMENT_SLUGS = new Set(publishedEngagements.map(record => record.identity.slug));
const PUBLIC_ANCHORS = new Set([
  "featured-heading",
  "upwork-experience",
  "upwork-heading",
  "case-study-result",
  "product-cycle",
  "transformation",
  "audience",
  "productBet",
  "ownership",
  "experienceAndSystem",
  "decisions",
  "launchAndDistribution",
  "evidenceAndValidation",
  "learningAndNextIteration",
  "feedback-heading",
  "client-situation",
  "personal-contribution",
  "engagement-scope",
  "technology-heading"
]);

const fail = message => {
  throw new Error(message);
};

const canonicalPath = pathname => (pathname === "/" ? pathname : pathname.replace(/\/$/, ""));

const destinationFor = url => {
  if (url.origin !== CANONICAL_ORIGIN || url.protocol !== "https:" || url.username || url.password) {
    fail(`URL must use ${CANONICAL_ORIGIN}.`);
  }
  const pathname = canonicalPath(url.pathname);
  if (pathname === "/") return { pathname, content: "home_link" };
  if (pathname === "/projects") return { pathname, content: "projects_link" };
  if (pathname === "/projects/armonia") return { pathname, content: "armonia_link" };

  const match = pathname.match(/^\/projects\/upwork\/([a-z0-9]+(?:-[a-z0-9]+)*)$/);
  if (match && ENGAGEMENT_SLUGS.has(match[1])) {
    return { pathname, content: `engagement_${match[1]}_link` };
  }
  fail("URL path is not a supported public attribution destination.");
};

const validatedHash = hash => {
  if (!hash) return "";
  let value;
  try {
    value = decodeURIComponent(hash.slice(1));
  } catch {
    fail("URL hash is malformed.");
  }
  if (!PUBLIC_ANCHORS.has(value)) fail("URL hash is not a supported public section anchor.");
  return `#${value}`;
};

const campaignValues = ({ month, alias, content }) => {
  if (!MONTH_PATTERN.test(month)) fail("Month must use YYYY-MM with a valid month.");
  if (!ALIAS_PATTERN.test(alias)) fail("Alias must be p followed by six lowercase letters or digits.");
  return {
    utm_source: "upwork",
    utm_medium: "referral",
    utm_campaign: `proposal_${month.replace("-", "_")}`,
    utm_id: alias,
    utm_content: content
  };
};

const ensureSafeExistingQuery = (url, expected) => {
  for (const key of new Set(url.searchParams.keys())) {
    if (!CAMPAIGN_KEYS.includes(key)) fail(`Unsupported query parameter: ${key}.`);
    const values = url.searchParams.getAll(key);
    if (values.length !== 1) fail(`Duplicate query parameter: ${key}.`);
    if (values[0] !== expected[key]) fail(`Existing ${key} does not match the requested campaign.`);
  }
};

const buildTaggedUrl = ({ inputUrl, month, alias }) => {
  let input;
  try {
    input = new URL(inputUrl);
  } catch {
    fail("Input URL is malformed.");
  }
  const destination = destinationFor(input);
  const expected = campaignValues({ month, alias, content: destination.content });
  ensureSafeExistingQuery(input, expected);
  const hash = validatedHash(input.hash);
  const output = new URL(destination.pathname, CANONICAL_ORIGIN);
  for (const key of CAMPAIGN_KEYS) output.searchParams.set(key, expected[key]);
  output.hash = hash;
  return output.toString();
};

const validateTaggedUrl = inputUrl => {
  let url;
  try {
    url = new URL(inputUrl);
  } catch {
    fail("Input URL is malformed.");
  }
  const destination = destinationFor(url);
  validatedHash(url.hash);
  for (const key of CAMPAIGN_KEYS) {
    if (url.searchParams.getAll(key).length !== 1) fail(`Tagged URL must contain ${key} exactly once.`);
  }
  if ([...url.searchParams.keys()].some(key => !CAMPAIGN_KEYS.includes(key))) {
    fail("Tagged URL contains an unsupported query parameter.");
  }
  const campaign = url.searchParams.get("utm_campaign");
  const match = campaign?.match(/^proposal_(\d{4})_(0[1-9]|1[0-2])$/);
  if (!match) fail("Tagged URL has an invalid proposal campaign.");
  const rebuilt = buildTaggedUrl({
    inputUrl: `${CANONICAL_ORIGIN}${destination.pathname}${url.search}${url.hash}`,
    month: `${match[1]}-${match[2]}`,
    alias: url.searchParams.get("utm_id")
  });
  if (rebuilt !== url.toString()) fail("Tagged URL is not canonical.");
  return true;
};

const parseArgs = values => {
  const result = {};
  for (let index = 0; index < values.length; index += 2) {
    const key = values[index];
    const value = values[index + 1];
    if (!key?.startsWith("--") || value === undefined) fail("Arguments must use --name value pairs.");
    result[key.slice(2)] = value;
  }
  return result;
};

if (require.main === module) {
  try {
    const [command, ...values] = process.argv.slice(2);
    const args = parseArgs(values);
    if (command === "build") {
      process.stdout.write(`${buildTaggedUrl({ inputUrl: args.url, month: args.month, alias: args.alias })}\n`);
    } else if (command === "validate") {
      validateTaggedUrl(args.url);
      process.stdout.write("Valid tagged Upwork URL.\n");
    } else {
      fail("Use build or validate.");
    }
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = {
  ALIAS_PATTERN,
  CAMPAIGN_KEYS,
  CANONICAL_ORIGIN,
  buildTaggedUrl,
  validateTaggedUrl
};
