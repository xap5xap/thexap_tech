import type { NextPage } from "next";
import Hero from "../src/components/Hero";
import StakesSection from "../src/components/StakesSection";
import ValuesSection from "../src/components/ValuesSection";
import GuideSection from "../src/components/GuideSection";
import PlanSection from "../src/components/PlanSection";
import HireLaunchSection from "../src/components/HireLaunchSection";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";
import ProofSection from "../src/components/ProofSection";
import { homeMetadata } from "../src/content/portfolio/metadata";

const Home: NextPage = () => {
  return (
    <HeaderFooterLayout metadata={homeMetadata}>
      <Hero />
      <StakesSection />
      <ValuesSection />
      <GuideSection />
      <PlanSection />
      <ProofSection />
      <HireLaunchSection showSelectedWork={false} />
    </HeaderFooterLayout>
  );
};

export default Home;
