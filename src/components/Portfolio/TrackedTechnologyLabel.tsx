import type { ReactNode } from "react";
import { useTechnologyExposure } from "../../analytics/usePortfolioTracking";

export const TrackedTechnologyLabel = ({ label, children }: { label: string; children: ReactNode }) => {
  const ref = useTechnologyExposure(label);
  return <span ref={ref}>{children}</span>;
};
