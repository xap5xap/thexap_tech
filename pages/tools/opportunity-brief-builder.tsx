import HeaderFooterLayout from "../../src/components/HeaderFooterLayout";
import OpportunityBriefBuilder from "../../src/components/OpportunityBriefBuilder";
import { opportunityBriefBuilderMetadata } from "../../src/content/portfolio/metadata";

const OpportunityBriefBuilderPage = () => (
  <HeaderFooterLayout metadata={opportunityBriefBuilderMetadata}>
    <OpportunityBriefBuilder />
  </HeaderFooterLayout>
);

export default OpportunityBriefBuilderPage;
