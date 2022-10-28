import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Hero from "../src/components/Hero";
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
import StakesSection from "../src/components/StakesSection";
import ValuesSection from "../src/components/ValuesSection";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Xavier Perez</title>
        <meta name="I help you build beautiful React websites, mobile apps and NodeJS backends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader></AppHeader>
      <main>
        <Hero />
        <StakesSection />
        <ValuesSection />
        {/* <KnowMeSection /> */}
      </main>
      <AppFooter />
    </Box>
  );
};

export default Home;
