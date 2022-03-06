import { Box, Stack, Typography } from "@mui/material";
import WhatYouGetItem from "./WhatYouGetItem";

const textSection1 = [
  "Fast initial render pages",
  "Improved SEO",
  "Website that works for all of your users",
  "Great developer experience for future developers ",
];

const textSection2 = [
  "Above 70% code coverage promised.",
  "This will ensure that all code meets quality standards before it’s deployed.",
  "Unit testing saves time and money in the long run",
];

const textSection3 = [
  "This ensures your entire app is healthy and working correctly",
  "You will have a reliable app",
  "Reduces the numbers of errors found in production",
];

const WhatYouGetSection = () => {
  return (
    <Box component="section">
      <Typography textAlign="center" variant="h3">
        What you get
      </Typography>
      <Stack sx={{ mt: 4 }} direction="column" spacing={3}>
        <WhatYouGetItem
          imageSrc="/images/QC2.svg"
          text={textSection1}
          title="Excellent website performance"
        ></WhatYouGetItem>
        <WhatYouGetItem
          reverse
          imageSrc="/images/Ethical.svg"
          text={textSection2}
          title="Jest Unit Tests"
        ></WhatYouGetItem>
        <WhatYouGetItem
          imageSrc="/images/communication.svg"
          text={textSection3}
          title="e2e Cypress test"
        ></WhatYouGetItem>
      </Stack>
    </Box>
  );
};

export default WhatYouGetSection;
