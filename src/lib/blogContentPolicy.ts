type BlogCardShape = {
  title?: string | null;
  slug?: string | null;
  featuredImage?: {
    url?: string | null;
  } | null;
};

type BlogEntryShape = BlogCardShape & {
  body?: {
    json?: unknown;
  } | null;
};

type RenderableBlogCard<T extends BlogCardShape> = T & {
  title: string;
  slug: string;
  featuredImage: NonNullable<T["featuredImage"]> & { url: string };
};

type RenderableBlogEntry<T extends BlogEntryShape> = T & {
  title: string;
  slug: string;
  body: NonNullable<T["body"]> & { json: unknown };
  featuredImage: NonNullable<T["featuredImage"]> & { url: string };
};

export const getMissingBlogCardFields = (entry: BlogCardShape | null | undefined): string[] => {
  if (!entry) {
    return ["entry"];
  }

  const missingFields: string[] = [];

  if (!entry.slug?.trim()) missingFields.push("slug");
  if (!entry.title?.trim()) missingFields.push("title");
  if (!entry.featuredImage?.url?.trim()) missingFields.push("featuredImage");

  return missingFields;
};

export const isRenderableBlogCard = <T extends BlogCardShape>(
  entry: T | null | undefined
): entry is RenderableBlogCard<T> => getMissingBlogCardFields(entry).length === 0;

export const getMissingBlogEntryFields = (entry: BlogEntryShape | null | undefined): string[] => {
  const missingFields = getMissingBlogCardFields(entry);

  if (entry && entry.body?.json == null) missingFields.push("body");

  return missingFields;
};

export const isRenderableBlogEntry = <T extends BlogEntryShape>(
  entry: T | null | undefined
): entry is RenderableBlogEntry<T> => getMissingBlogEntryFields(entry).length === 0;
