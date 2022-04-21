import { Box, Container, Typography } from "@mui/material";
import { greyDark } from "../theme/brandingTheme";
import DevelopmentProcessImage from "./DevelopmentProcessImage";

const DevelopmentProcessSection = () => {
  return (
    <Box component="section" sx={{ backgroundColor: greyDark[400], py: 5 }}>
      <Typography textAlign="center" variant="h3">
        What you get
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        This process will guarantee the best quality of your app
      </Typography>
      <Container sx={{ mt: 5 }}>
        <DevelopmentProcessImage></DevelopmentProcessImage>
      </Container>
    </Box>
  );
};

export default DevelopmentProcessSection;
