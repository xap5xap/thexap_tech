import { Box, Container } from "@mui/material";
import { greyDark } from "../theme/brandingTheme";
import DevelopmentProcessImage from "./DevelopmentProcessImage";
import SectionTitle from "./SectionTitle";

const DevelopmentProcessSection = () => {
  return (
    <Box component="section" sx={{ backgroundColor: greyDark[400], py: 5 }}>
      <SectionTitle
        title="What you get"
        subTitle="This process will guarantee the best quality of your app"
      />
      <Container sx={{ mt: 5 }}>
        <DevelopmentProcessImage></DevelopmentProcessImage>
      </Container>
    </Box>
  );
};

export default DevelopmentProcessSection;
