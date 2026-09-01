/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any };
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any };
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = _Node & {
  __typename?: "Asset";
  _id: Scalars["ID"]["output"];
  contentType?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetCursorCollection = {
  __typename?: "AssetCursorCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  authorCollection?: Maybe<AuthorCollection>;
  authorCursorCollection?: Maybe<AuthorCursorCollection>;
  blogCollection?: Maybe<BlogCollection>;
  blogCursorCollection?: Maybe<BlogCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  postCollection?: Maybe<PostCollection>;
  postCursorCollection?: Maybe<PostCursorCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsAuthorCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsBlogCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsBlogCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsPostCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC"
}

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/author) */
export type Author = Entry &
  _Node & {
    __typename?: "Author";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    linkedFrom?: Maybe<AuthorLinkingCollections>;
    name?: Maybe<Scalars["String"]["output"]>;
    picture?: Maybe<Asset>;
    sys: Sys;
  };

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/author) */
export type AuthorPictureArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AuthorCollection = {
  __typename?: "AuthorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AuthorCursorCollection = {
  __typename?: "AuthorCursorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"]["output"];
  pages: CursorPages;
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  picture_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: "AuthorLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  postCollection?: Maybe<PostCollection>;
  postCursorCollection?: Maybe<PostCursorCollection>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AuthorLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AuthorLinkingCollectionsPostCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsPostCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum AuthorLinkingCollectionsPostCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export enum AuthorLinkingCollectionsPostCursorCollectionOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export enum AuthorOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC"
}

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type Blog = Entry &
  _Node & {
    __typename?: "Blog";
    _id: Scalars["ID"]["output"];
    body?: Maybe<BlogBody>;
    contentfulMetadata: ContentfulMetadata;
    date?: Maybe<Scalars["DateTime"]["output"]>;
    excerpt?: Maybe<Scalars["String"]["output"]>;
    featuredImage?: Maybe<Asset>;
    linkedFrom?: Maybe<BlogLinkingCollections>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    tags?: Maybe<Scalars["String"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogExcerptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogTagsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/blog) */
export type BlogTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlogBody = {
  __typename?: "BlogBody";
  json: Scalars["JSON"]["output"];
  links: BlogBodyLinks;
};

export type BlogBodyAssets = {
  __typename?: "BlogBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogBodyEntries = {
  __typename?: "BlogBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogBodyLinks = {
  __typename?: "BlogBodyLinks";
  assets: BlogBodyAssets;
  entries: BlogBodyEntries;
  resources: BlogBodyResources;
};

export type BlogBodyResources = {
  __typename?: "BlogBodyResources";
  block: Array<BlogBodyResourcesBlock>;
  hyperlink: Array<BlogBodyResourcesHyperlink>;
  inline: Array<BlogBodyResourcesInline>;
};

export type BlogBodyResourcesBlock = ResourceLink & {
  __typename?: "BlogBodyResourcesBlock";
  sys: ResourceSys;
};

export type BlogBodyResourcesHyperlink = ResourceLink & {
  __typename?: "BlogBodyResourcesHyperlink";
  sys: ResourceSys;
};

export type BlogBodyResourcesInline = ResourceLink & {
  __typename?: "BlogBodyResourcesInline";
  sys: ResourceSys;
};

export type BlogCollection = {
  __typename?: "BlogCollection";
  items: Array<Maybe<Blog>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlogCursorCollection = {
  __typename?: "BlogCursorCollection";
  items: Array<Maybe<Blog>>;
  limit: Scalars["Int"]["output"];
  pages: CursorPages;
};

export type BlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  tags?: InputMaybe<Scalars["String"]["input"]>;
  tags_contains?: InputMaybe<Scalars["String"]["input"]>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tags_not?: InputMaybe<Scalars["String"]["input"]>;
  tags_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tags_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogLinkingCollections = {
  __typename?: "BlogLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};

export type BlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlogLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum BlogOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TagsAsc = "tags_ASC",
  TagsDesc = "tags_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type CursorPages = {
  __typename?: "CursorPages";
  next?: Maybe<Scalars["String"]["output"]>;
  prev?: Maybe<Scalars["String"]["output"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryCursorCollection = {
  __typename?: "EntryCursorCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC"
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP"
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT"
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB"
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type Post = Entry &
  _Node & {
    __typename?: "Post";
    _id: Scalars["ID"]["output"];
    author?: Maybe<Author>;
    content?: Maybe<PostContent>;
    contentfulMetadata: ContentfulMetadata;
    coverImage?: Maybe<Asset>;
    date?: Maybe<Scalars["DateTime"]["output"]>;
    excerpt?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<PostLinkingCollections>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostContentArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostCoverImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostExcerptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/vhorpptky45n/content_types/post) */
export type PostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostCollection = {
  __typename?: "PostCollection";
  items: Array<Maybe<Post>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PostContent = {
  __typename?: "PostContent";
  json: Scalars["JSON"]["output"];
  links: PostContentLinks;
};

export type PostContentAssets = {
  __typename?: "PostContentAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostContentEntries = {
  __typename?: "PostContentEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostContentLinks = {
  __typename?: "PostContentLinks";
  assets: PostContentAssets;
  entries: PostContentEntries;
  resources: PostContentResources;
};

export type PostContentResources = {
  __typename?: "PostContentResources";
  block: Array<PostContentResourcesBlock>;
  hyperlink: Array<PostContentResourcesHyperlink>;
  inline: Array<PostContentResourcesInline>;
};

export type PostContentResourcesBlock = ResourceLink & {
  __typename?: "PostContentResourcesBlock";
  sys: ResourceSys;
};

export type PostContentResourcesHyperlink = ResourceLink & {
  __typename?: "PostContentResourcesHyperlink";
  sys: ResourceSys;
};

export type PostContentResourcesInline = ResourceLink & {
  __typename?: "PostContentResourcesInline";
  sys: ResourceSys;
};

export type PostCursorCollection = {
  __typename?: "PostCursorCollection";
  items: Array<Maybe<Post>>;
  limit: Scalars["Int"]["output"];
  pages: CursorPages;
};

export type PostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PostLinkingCollections = {
  __typename?: "PostLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};

export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PostLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum PostOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  ExcerptAsc = "excerpt_ASC",
  ExcerptDesc = "excerpt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC"
}

export type Query = {
  __typename?: "Query";
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  authorCursorCollection?: Maybe<AuthorCursorCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  blogCursorCollection?: Maybe<BlogCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
  postCursorCollection?: Maybe<PostCursorCollection>;
};

export type Query_NodeArgs = {
  id: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query_NodesArgs = {
  ids: Array<Scalars["ID"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryAuthorCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryBlogArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlogCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlogFilter>;
};

export type QueryBlogCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlogFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PostFilter>;
};

export type QueryPostCursorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  pageNext?: InputMaybe<Scalars["String"]["input"]>;
  pagePrev?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PostFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  /** The locale that was requested. */
  locale?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion?: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: "TaxonomyConcept";
  id?: Maybe<Scalars["String"]["output"]>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars["String"]["input"]>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type _Node = {
  _id: Scalars["ID"]["output"];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  picture_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type GetAllPostsWithSlugQueryVariables = Exact<{
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GetAllPostsWithSlugQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{ __typename?: "Blog"; slug?: string | null } | null>;
  } | null;
};

export type GetIncompleteBlogEntriesQueryVariables = Exact<{
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GetIncompleteBlogEntriesQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{
      __typename?: "Blog";
      title?: string | null;
      slug?: string | null;
      body?: { __typename?: "BlogBody"; json: any } | null;
      featuredImage?: { __typename?: "Asset"; url?: string | null } | null;
    } | null>;
  } | null;
};

export type GetMorePostsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GetMorePostsQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{
      __typename?: "Blog";
      title?: string | null;
      slug?: string | null;
      featuredImage?: { __typename?: "Asset"; url?: string | null } | null;
      contentfulMetadata: {
        __typename?: "ContentfulMetadata";
        tags: Array<{ __typename?: "ContentfulTag"; id?: string | null; name?: string | null } | null>;
      };
    } | null>;
  } | null;
};

export type GetPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GetPostBySlugQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{
      __typename?: "Blog";
      title?: string | null;
      date?: any | null;
      slug?: string | null;
      body?: {
        __typename?: "BlogBody";
        json: any;
        links: {
          __typename?: "BlogBodyLinks";
          entries: {
            __typename?: "BlogBodyEntries";
            hyperlink: Array<
              | { __typename?: "Author"; sys: { __typename?: "Sys"; id: string } }
              | {
                  __typename?: "Blog";
                  title?: string | null;
                  slug?: string | null;
                  sys: { __typename?: "Sys"; id: string };
                }
              | { __typename?: "Post"; sys: { __typename?: "Sys"; id: string } }
              | null
            >;
          };
          assets: {
            __typename?: "BlogBodyAssets";
            block: Array<{
              __typename?: "Asset";
              url?: string | null;
              description?: string | null;
              width?: number | null;
              height?: number | null;
              sys: { __typename?: "Sys"; id: string };
            } | null>;
          };
        };
      } | null;
      featuredImage?: {
        __typename?: "Asset";
        url?: string | null;
        description?: string | null;
        width?: number | null;
        height?: number | null;
      } | null;
      contentfulMetadata: {
        __typename?: "ContentfulMetadata";
        tags: Array<{ __typename?: "ContentfulTag"; id?: string | null; name?: string | null } | null>;
      };
    } | null>;
  } | null;
};

export type BlogListForHomeQueryVariables = Exact<{
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type BlogListForHomeQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{
      __typename?: "Blog";
      title?: string | null;
      slug?: string | null;
      excerpt?: string | null;
      featuredImage?: { __typename?: "Asset"; url?: string | null } | null;
      contentfulMetadata: {
        __typename?: "ContentfulMetadata";
        tags: Array<{ __typename?: "ContentfulTag"; id?: string | null; name?: string | null } | null>;
      };
    } | null>;
  } | null;
};

export const GetAllPostsWithSlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllPostsWithSlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "preview" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "body_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "featuredImage_exists" },
                      value: { kind: "BooleanValue", value: true }
                    }
                  ]
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "date_DESC" }
              },
              { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "200" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: { kind: "Variable", name: { kind: "Name", value: "preview" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "slug" } }]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetAllPostsWithSlugQuery, GetAllPostsWithSlugQueryVariables>;
export const GetIncompleteBlogEntriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getIncompleteBlogEntries" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "preview" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "OR" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "slug_exists" },
                                value: { kind: "BooleanValue", value: false }
                              }
                            ]
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "title_exists" },
                                value: { kind: "BooleanValue", value: false }
                              }
                            ]
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "body_exists" },
                                value: { kind: "BooleanValue", value: false }
                              }
                            ]
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "featuredImage_exists" },
                                value: { kind: "BooleanValue", value: false }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "200" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: { kind: "Variable", name: { kind: "Name", value: "preview" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "body" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "json" } }]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetIncompleteBlogEntriesQuery, GetIncompleteBlogEntriesQueryVariables>;
export const GetMorePostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getMorePosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "preview" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_not" },
                      value: { kind: "Variable", name: { kind: "Name", value: "slug" } }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "body_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "featuredImage_exists" },
                      value: { kind: "BooleanValue", value: true }
                    }
                  ]
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "date_DESC" }
              },
              { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "2" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: { kind: "Variable", name: { kind: "Name", value: "preview" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contentfulMetadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetMorePostsQuery, GetMorePostsQueryVariables>;
export const GetPostBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPostBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } }
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "preview" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: { kind: "Variable", name: { kind: "Name", value: "slug" } }
                    }
                  ]
                }
              },
              { kind: "Argument", name: { kind: "Name", value: "limit" }, value: { kind: "IntValue", value: "1" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: { kind: "Variable", name: { kind: "Name", value: "preview" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "body" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "json" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "links" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "entries" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "hyperlink" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "sys" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
                                                }
                                              },
                                              {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                  kind: "NamedType",
                                                  name: { kind: "Name", value: "Blog" }
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "title" } },
                                                    { kind: "Field", name: { kind: "Name", value: "slug" } }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "assets" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "block" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "sys" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }]
                                                }
                                              },
                                              { kind: "Field", name: { kind: "Name", value: "url" } },
                                              { kind: "Field", name: { kind: "Name", value: "description" } },
                                              { kind: "Field", name: { kind: "Name", value: "width" } },
                                              { kind: "Field", name: { kind: "Name", value: "height" } }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "url" } },
                            { kind: "Field", name: { kind: "Name", value: "description" } },
                            { kind: "Field", name: { kind: "Name", value: "width" } },
                            { kind: "Field", name: { kind: "Name", value: "height" } }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contentfulMetadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const BlogListForHomeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "blogListForHome" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "preview" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "body_exists" },
                      value: { kind: "BooleanValue", value: true }
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "featuredImage_exists" },
                      value: { kind: "BooleanValue", value: true }
                    }
                  ]
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "date_DESC" }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "preview" },
                value: { kind: "Variable", name: { kind: "Name", value: "preview" } }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "excerpt" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "featuredImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contentfulMetadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<BlogListForHomeQuery, BlogListForHomeQueryVariables>;
