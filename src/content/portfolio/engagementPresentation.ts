import type { EngagementPageContent } from "./engagementTypes";

export const engagementPath = (slug: string) => `/projects/upwork/${slug}`;

export const formatEngagementDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));

export const formatContractPeriod = (identity: EngagementPageContent["identity"]) =>
  `${formatEngagementDate(identity.startDate)} to ${identity.endDate ? formatEngagementDate(identity.endDate) : "open on Upwork"}`;

export const engagementStatus = (record: Pick<EngagementPageContent, "contract" | "delivery">) => {
  if (record.contract.state === "open") {
    return record.delivery.state === "delivered" ? "Work delivered; contract open" : "Contract open";
  }
  return "Completed contract";
};
