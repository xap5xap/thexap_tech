import { parseVisualTutorialAssetTitle, protocolMatchesArticle, RichTextAssetShape } from "./visualTutorial";

const SITE_ORIGIN = "https://www.thexap.com";
const SITE_NAME = "Xavier Perez";

export type BlogArticleMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  publishedTime?: string;
  siteName: string;
  locale: "en_US";
  image: {
    url: string;
    alt: string;
    contentType?: string;
    width?: number;
    height?: number;
  };
};

export const getBlogArticleMetadata = ({
  title,
  excerpt,
  slug,
  date,
  image
}: {
  title: string;
  excerpt?: string | null;
  slug: string;
  date?: string | null;
  image: RichTextAssetShape;
}): BlogArticleMetadata => {
  const protocol = parseVisualTutorialAssetTitle(image.title);
  const tutorialHero = protocolMatchesArticle(protocol, slug, "hero");
  const description = excerpt?.trim() || title;
  const imageAlt = tutorialHero ? image.description?.trim() || "" : `Cover image for ${title}`;

  return {
    title,
    description,
    canonicalUrl: new URL(`/blog/${slug}`, SITE_ORIGIN).toString(),
    publishedTime: date || undefined,
    siteName: SITE_NAME,
    locale: "en_US",
    image: {
      url: image.url || "",
      alt: imageAlt,
      contentType: image.contentType || undefined,
      width: image.width || undefined,
      height: image.height || undefined
    }
  };
};
