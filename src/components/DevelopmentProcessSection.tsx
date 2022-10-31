import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DevelopmentProcessImage from "./DevelopmentProcessImage";
import SectionTitle from "./SectionTitle";

const DevelopmentProcessSection = () => {
  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container>
        <SectionTitle
          title="What you get"
          subTitle="This process will guarantee the best quality of your app"
        />

        <DevelopmentProcessImage></DevelopmentProcessImage>
      </Container>
    </Box>
  );
};

export default DevelopmentProcessSection;
