import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/theme/createEmotionCache";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "../src/context/ThemeContext";
import "../styles/prism.css";
import { AnalyticsProvider } from "../src/analytics/AnalyticsProvider";
import { classifyPage, type ProjectContext } from "../src/analytics/contract";
import { projectCategoryFromLabel } from "../src/analytics/events";

const clientSideEmotionCache = createEmotionCache();

const getProjectContext = (pageProps: Record<string, unknown>): ProjectContext | undefined => {
  const caseStudy = pageProps.caseStudy as { identity?: { id?: unknown; slug?: unknown } } | undefined;
  if (caseStudy?.identity?.id === "armonia" && caseStudy.identity.slug === "armonia") {
    return { project_id: "armonia", project_slug: "armonia", project_category: "featured" };
  }

  const engagement = pageProps.engagement as
    | { identity?: { id?: unknown; slug?: unknown }; showcase?: { category?: unknown } }
    | undefined;
  if (
    typeof engagement?.identity?.id === "string" &&
    typeof engagement.identity.slug === "string" &&
    typeof engagement.showcase?.category === "string" &&
    projectCategoryFromLabel(engagement.showcase.category)
  ) {
    return {
      project_id: engagement.identity.id,
      project_slug: engagement.identity.slug,
      project_category: projectCategoryFromLabel(engagement.showcase.category)!
    };
  }
  return undefined;
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const project = getProjectContext(pageProps);
  const pageContext = classifyPage(router.asPath, project, Boolean(pageProps.blog));
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider>
          <CssBaseline></CssBaseline>
          <AnalyticsProvider pageContext={pageContext}>
            <Component {...pageProps} />
          </AnalyticsProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
