import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import Hero from "../src/components/Hero";
import AppHeader from "../src/components/AppHeader";
import WhatYouGetSection from "../src/components/WhatYouGetSection";
import AppFooter from "../src/components/AppFooter";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>theXap</title>
        <meta name="I help you build beautiful React websites, mobile apps and NodeJS backends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader></AppHeader>
      <main>
        <Hero />
        <Container sx={{ my: 4 }}>
          <WhatYouGetSection />
        </Container>
      </main>
      <AppFooter />
    </Box>
  );
};

export default Home;
