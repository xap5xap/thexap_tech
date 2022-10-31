import { FC, ReactNode } from "react";
import Head from "next/head";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
};

const HeaderFooterLayout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Xavier Perez</title>
        <meta name="I help you build beautiful React websites, mobile apps and NodeJS backends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader></AppHeader>
      {children}
      <AppFooter />
    </Box>
  );
};

export default HeaderFooterLayout;
