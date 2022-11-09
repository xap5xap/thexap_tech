export const getPreviewFromEnv = () => {
  return process.env.CONTENTFUL_PREVIEW === "true";
};
