import Head from "next/head";
import type { PageMetadata } from "../content/portfolio/metadata";

type Props = {
  metadata: PageMetadata;
};

const SITE_ORIGIN = "https://www.thexap.com";
const SITE_NAME = "Xavier Perez";

const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();

const SiteMetadata = ({ metadata }: Props) => {
  const canonicalUrl = absoluteUrl(metadata.canonicalPath);
  const imageUrl = absoluteUrl(metadata.image.src);
  const robots = metadata.indexable
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : "noindex,nofollow";

  return (
    <Head>
      <title>{metadata.documentTitle}</title>
      <meta name="description" content={metadata.description} key="description" />
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      <meta name="robots" content={robots} key="robots" />
      <meta name="googlebot" content={robots} key="googlebot" />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:locale" content="en_US" key="og:locale" />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:url" content={canonicalUrl} key="og:url" />
      <meta property="og:title" content={metadata.shareTitle} key="og:title" />
      <meta property="og:description" content={metadata.description} key="og:description" />
      <meta property="og:image" content={imageUrl} key="og:image" />
      <meta property="og:image:secure_url" content={imageUrl} key="og:image:secure_url" />
      <meta property="og:image:type" content={metadata.image.contentType} key="og:image:type" />
      {metadata.image.width ? (
        <meta property="og:image:width" content={String(metadata.image.width)} key="og:image:width" />
      ) : null}
      {metadata.image.height ? (
        <meta property="og:image:height" content={String(metadata.image.height)} key="og:image:height" />
      ) : null}
      <meta property="og:image:alt" content={metadata.image.alt} key="og:image:alt" />

      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={metadata.shareTitle} key="twitter:title" />
      <meta name="twitter:description" content={metadata.description} key="twitter:description" />
      <meta name="twitter:image" content={imageUrl} key="twitter:image" />
      <meta name="twitter:image:alt" content={metadata.image.alt} key="twitter:image:alt" />
    </Head>
  );
};

export default SiteMetadata;
