import HeadlineSection from "../src/components/AboutMe/HeadlineSection";
import ReassureSection from "../src/components/AboutMe/ReasureSection";
import StrokeSection from "../src/components/AboutMe/StrokeSection";
import TrackRecordSection from "../src/components/AboutMe/TrackRecordSection";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";
import HireLaunchSection from "../src/components/HireLaunchSection";
import { aboutMetadata } from "../src/content/portfolio/metadata";

const AboutMePage = () => {
  return (
    <HeaderFooterLayout metadata={aboutMetadata}>
      <HeadlineSection />
      <ReassureSection />
      <TrackRecordSection />
      <StrokeSection />
      <HireLaunchSection />
    </HeaderFooterLayout>
  );
};

export default AboutMePage;
