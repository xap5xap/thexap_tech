const assert = require("node:assert/strict");
const test = require("node:test");
const { buildTaggedUrl, validateTaggedUrl } = require("../scripts/upwork-attribution.cjs");

const input = {
  month: "2026-09",
  alias: "p7k2m4q"
};

test("builds canonical home, projects, Armonía, and public engagement variants", () => {
  assert.equal(
    buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/" }),
    "https://www.thexap.com/?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=home_link"
  );
  assert.match(buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/projects" }), /utm_content=projects_link$/);
  assert.match(
    buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/projects/armonia" }),
    /utm_content=armonia_link$/
  );
  assert.match(
    buildTaggedUrl({
      ...input,
      inputUrl: "https://www.thexap.com/projects/upwork/senior-react-nextjs-2022"
    }),
    /utm_content=engagement_senior-react-nextjs-2022_link$/
  );
});
test("encodes campaign values in stable order and preserves a supported public hash", () => {
  const url = buildTaggedUrl({
    ...input,
    inputUrl: "https://www.thexap.com/projects/armonia#evidenceAndValidation"
  });
  assert.equal(
    url,
    "https://www.thexap.com/projects/armonia?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=armonia_link#evidenceAndValidation"
  );
  assert.equal(validateTaggedUrl(url), true);
});

test("accepts an already matching safe campaign without duplicating parameters", () => {
  const tagged = buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/projects" });
  assert.equal(buildTaggedUrl({ ...input, inputUrl: tagged }), tagged);
  const parsed = new URL(tagged);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content"]) {
    assert.equal(parsed.searchParams.getAll(key).length, 1);
  }
});

test("rejects apex, foreign, insecure, credentialed, private-query, and unsupported paths", () => {
  for (const inputUrl of [
    "https://thexap.com/projects",
    "https://example.com/projects",
    "http://www.thexap.com/projects",
    "https://person@example.com/projects",
    "https://www.thexap.com/projects?email=person%40example.com",
    "https://www.thexap.com/private-client",
    "https://www.thexap.com/projects/upwork/not-a-published-engagement"
  ]) {
    assert.throws(() => buildTaggedUrl({ ...input, inputUrl }));
  }
});

test("rejects invalid aliases, cohorts, unsupported hashes, mismatches, and duplicates", () => {
  assert.throws(() => buildTaggedUrl({ ...input, alias: "client42", inputUrl: "https://www.thexap.com/" }), /Alias/);
  assert.throws(() => buildTaggedUrl({ ...input, month: "2026-13", inputUrl: "https://www.thexap.com/" }), /Month/);
  assert.throws(
    () => buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/projects#private-client" }),
    /hash/
  );
  assert.throws(
    () =>
      buildTaggedUrl({
        ...input,
        inputUrl: "https://www.thexap.com/projects?utm_source=upwork&utm_source=upwork"
      }),
    /Duplicate/
  );
  assert.throws(
    () => buildTaggedUrl({ ...input, inputUrl: "https://www.thexap.com/projects?utm_source=google" }),
    /does not match/
  );
});

test("validator rejects missing, extra, malformed, and noncanonical campaign values", () => {
  assert.throws(() => validateTaggedUrl("https://www.thexap.com/projects"), /exactly once/);
  assert.throws(
    () =>
      validateTaggedUrl(
        "https://www.thexap.com/projects?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_09&utm_id=p7k2m4q&utm_content=projects_link&name=private"
      ),
    /unsupported/
  );
  assert.throws(
    () =>
      validateTaggedUrl(
        "https://www.thexap.com/projects?utm_source=upwork&utm_medium=referral&utm_campaign=proposal_2026_99&utm_id=p7k2m4q&utm_content=projects_link"
      ),
    /invalid proposal campaign/
  );
});
