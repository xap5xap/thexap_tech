import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/theme/createEmotionCache";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

export default MyApp;
