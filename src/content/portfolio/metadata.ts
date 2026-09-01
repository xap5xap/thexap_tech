import type { CaseStudy } from "./types";

const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 630;

export type PageMetadata = {
  documentTitle: string;
  shareTitle: string;
  description: string;
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

export const portfolioIndexMetadata: PageMetadata = {
  documentTitle: "Selected products and systems | Xavier Perez",
  shareTitle: "Selected products and systems",
  description:
    "Case studies showing Xavier's work across product strategy, design, engineering, launch, and distribution, from idea to audience.",
  canonicalPath: "/projects",
  indexable: true,
  image: {
    src: "/images/projects/social-preview.jpg",
    alt: "A warm orange signal moves through connected product stages and expands into a network of audience touchpoints.",
    contentType: "image/jpeg",
    width: SOCIAL_IMAGE_WIDTH,
    height: SOCIAL_IMAGE_HEIGHT
  }
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
