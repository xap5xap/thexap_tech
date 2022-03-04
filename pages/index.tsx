import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import Hero from "../src/components/Hero";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Box sx={{ height: "400px", width: "100%" }}>bla</Box>
    </Box>
  );
};

export default Home;
