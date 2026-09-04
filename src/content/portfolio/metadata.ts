import type { CaseStudy } from "./types";

const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

export type PageMetadata = {
  documentTitle: string;
  shareTitle: string;
  description: string;
  shareDescription?: string;
  canonicalPath: string;
  indexable: boolean;
  image: {
    src: string;
    alt: string;
    contentType: "image/jpeg" | "image/png" | "image/webp";
    width?: number;
    height?: number;
  };
};

const defaultSocialImage: PageMetadata["image"] = {
  src: "/images/projects/social-preview.jpg",
  alt: "A warm orange signal connects product stages and expands into a network of audience touchpoints.",
  contentType: "image/jpeg",
  width: SOCIAL_IMAGE_WIDTH,
  height: SOCIAL_IMAGE_HEIGHT
};

export const homeMetadata: PageMetadata = {
  documentTitle: "Xavier Perez | Senior Full-Stack Product Engineer",
  shareTitle: "Xavier Perez | Senior Full-Stack Product Engineer",
  description:
    "Independent product partner helping founders and product teams move working software toward a dependable release with clear ownership and visible verification.",
  shareDescription:
    "Move from a working product to a dependable release with direct senior ownership, connected product decisions, and visible verification.",
  canonicalPath: "/",
  indexable: true,
  image: defaultSocialImage
};

export const aboutMetadata: PageMetadata = {
  documentTitle: "About Xavier Perez | Senior Full-Stack Product Engineer",
  shareTitle: "About Xavier Perez | Senior Full-Stack Product Engineer",
  description:
    "Meet Xavier Perez, an independent product partner with at least nine years of full-stack production delivery for founders and product teams.",
  canonicalPath: "/about-me",
  indexable: true,
  image: defaultSocialImage
};

export const scheduleMeetingMetadata: PageMetadata = {
  documentTitle: "Schedule a meeting | Xavier Perez",
  shareTitle: "Schedule a meeting with Xavier Perez",
  description:
    "Bring the current product state, the outcome that matters next, and where ownership is unclear. Start with a bounded fit conversation.",
  canonicalPath: "/schedule-meeting",
  indexable: true,
  image: defaultSocialImage
};

export const portfolioIndexMetadata: PageMetadata = {
  documentTitle: "Selected products and systems | Xavier Perez",
  shareTitle: "Selected products and systems",
  description:
    "Case studies showing Xavier's work across product strategy, design, engineering, launch, and distribution, from idea to audience.",
  canonicalPath: "/projects",
  indexable: true,
  image: defaultSocialImage
};

const getDisclosure = (caseStudy: CaseStudy) => {
  const disclosures: string[] = [];

  if (caseStudy.identity.workType === "owned-product-experiment") {
    disclosures.push("Owned product or experiment.");
  }

  if (caseStudy.identity.workType === "concept-product") {
    disclosures.push("Concept product.");

    const conceptStatus = {
      live: "Live.",
      "in-active-use": "In active use.",
      "in-validation": "In validation.",
      prototype: "Prototype.",
      "no-longer-active": ""
    }[caseStudy.identity.currentStatus];

    if (conceptStatus) {
      disclosures.push(conceptStatus);
    }
  }

  if (caseStudy.identity.currentStatus === "no-longer-active") {
    disclosures.push("No longer active.");
  }

  return disclosures.join(" ");
};

const getImageContentType = (src: string): PageMetadata["image"]["contentType"] => {
  if (src.endsWith(".png")) {
    return "image/png";
  }

  if (src.endsWith(".webp")) {
    return "image/webp";
  }

  return "image/jpeg";
};

export const getCaseStudyMetadata = (caseStudy: CaseStudy): PageMetadata => {
  const { identity, presentation, assets } = caseStudy;
  const hasDedicatedSocialImage = Boolean(presentation.socialImageId);
  const socialImageId = presentation.socialImageId || presentation.primaryVisualId;
  const socialImage = assets.find(asset => asset.id === socialImageId);

  if (!socialImage) {
    throw new Error(`Case study "${identity.slug}" has no social-preview asset.`);
  }

  const disclosure = getDisclosure(caseStudy);
  const description = [disclosure, presentation.shareDescription].filter(Boolean).join(" ");

  return {
    documentTitle: `${presentation.shareTitle} | Xavier Perez`,
    shareTitle: presentation.shareTitle,
    description,
    canonicalPath: `/projects/${identity.slug}`,
    indexable: true,
    image: {
      src: socialImage.src,
      alt: socialImage.alt,
      contentType: getImageContentType(socialImage.src),
      width: hasDedicatedSocialImage ? SOCIAL_IMAGE_WIDTH : undefined,
      height: hasDedicatedSocialImage ? SOCIAL_IMAGE_HEIGHT : undefined
    }
  };
};
