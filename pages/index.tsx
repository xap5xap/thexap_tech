import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Hero from "../src/components/Hero";
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
import DevelopmentProcessSection from "../src/components/DevelopmentProcessSection";
import KnowMeSection from "../src/components/KnowMeSection";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>thexap</title>
        <meta name="I help you build beautiful React websites, mobile apps and NodeJS backends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader></AppHeader>
      <main>
        <Hero />
        {/* <WhatYouGetSection /> */}
        <DevelopmentProcessSection></DevelopmentProcessSection>
        <KnowMeSection />
      </main>
      <AppFooter />
    </Box>
  );
};

export default Home;
