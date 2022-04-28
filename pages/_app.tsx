import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/theme/createEmotionCache";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "../src/context/ThemeContext";
import GoogleAnalytics from "../src/lib/GoogleAnalytics";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider>
          <CssBaseline></CssBaseline>
          <Component {...pageProps} />
          <GoogleAnalytics />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
