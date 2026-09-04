import { FC, ReactNode } from "react";
import Head from "next/head";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Box from "@mui/material/Box";
import SiteMetadata from "./SiteMetadata";
import type { PageMetadata } from "../content/portfolio/metadata";

type Props = {
  children: ReactNode;
  metadata?: PageMetadata;
};

const HeaderFooterLayout: FC<Props> = ({ children, metadata }) => {
  return (
    <Box>
      <Head>
        {metadata ? null : <title>Xavier Perez</title>}
        {metadata ? null : (
          <meta
            name="description"
            content="Independent product partner helping founders and product teams move working software toward a dependable release with clear ownership and visible verification."
          />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {metadata ? <SiteMetadata metadata={metadata} /> : null}
      <Box component="a" href="#main-content" className="skip-link">
        Skip to main content
      </Box>
      <AppHeader></AppHeader>
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{ position: "relative", minHeight: "calc(100vh - 70px - 94px)" }}
      >
        {children}
      </Box>
      <AppFooter />
    </Box>
  );
};

export default HeaderFooterLayout;
