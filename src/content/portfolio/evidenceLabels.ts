import type { EvidenceState } from "./types";

export const EVIDENCE_LABELS: Record<EvidenceState, string> = {
  observed: "Observed",
  "verified-outcome": "Verified outcome",
  assumption: "Assumption",
  hypothesis: "Hypothesis",
  illustrative: "Illustrative",
  planned: "Planned"
};
