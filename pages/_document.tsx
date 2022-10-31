import Document, { Html, Head, NextScript, Main } from "next/document";
import { getMetaThemeColor } from "../src/theme/brandingTheme";
import createEmotionCache from "../src/theme/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import React from "react";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="theme-color"
            content={getMetaThemeColor("light")}
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content={getMetaThemeColor("dark")}
            media="(prefers-color-scheme: dark)"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* iOS Icon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/180x180.png"
          />
          {/* SEO */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                window.ga('create','${GOOGLE_ANALYTICS_ID}');
              `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
