import HeadlineSection from "../src/components/AboutMe/HeadlineSection";
import ReassureSection from "../src/components/AboutMe/ReasureSection";
import StrokeSection from "../src/components/AboutMe/StrokeSection";
import TrackRecordSection from "../src/components/AboutMe/TrackRecordSection";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";
import HireLaunchSection from "../src/components/HireLaunchSection";

const AboutMePage = () => {
  return (
    <HeaderFooterLayout>
      <main>
        <HeadlineSection />
        <ReassureSection />
        <TrackRecordSection />
        <StrokeSection />
        <HireLaunchSection />
      </main>
    </HeaderFooterLayout>
  );
};

export default AboutMePage;
