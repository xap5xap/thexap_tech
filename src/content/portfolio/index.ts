import { armoniaCaseStudy } from "./caseStudies/armonia";
import type { CaseStudy } from "./types";
import { validateCaseStudyRegistry } from "./validateCaseStudy";

export const flagshipCaseStudies: CaseStudy[] = validateCaseStudyRegistry([armoniaCaseStudy]);

export const caseStudiesBySlug = new Map(flagshipCaseStudies.map(caseStudy => [caseStudy.identity.slug, caseStudy]));

export type { CaseStudy } from "./types";
