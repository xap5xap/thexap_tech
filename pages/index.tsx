import type { NextPage } from "next";
import Hero from "../src/components/Hero";
import StakesSection from "../src/components/StakesSection";
import ValuesSection from "../src/components/ValuesSection";
import GuideSection from "../src/components/GuideSection";
import PlanSection from "../src/components/PlanSection";
import HireLaunchSection from "../src/components/HireLaunchSection";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";

const Home: NextPage = () => {
  return (
    <HeaderFooterLayout>
      <main>
        <Hero />
        <StakesSection />
        <ValuesSection />
        <GuideSection />
        <PlanSection />
        <HireLaunchSection />
      </main>
    </HeaderFooterLayout>
  );
};

export default Home;
