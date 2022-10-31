import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const HeadlineSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: 3,
        }}
      >
        <Box>
          <Image
            src="/images/yo.jpg"
            alt="my picture"
            height={300}
            width={267}
          />
        </Box>
        <Box>
          <Typography variant="h4">
            So you have an idea, and you’re are ready to get started.
          </Typography>
          <Box>
            <p>
              Maybe you already researched the market, designed some wireframes
              or maybe you have a prototype .
            </p>
            <p>
              You have completed most of the steps many people don't do. You are
              a true innovative entrepreneur and take this project very
              seriously. Now you have to complete that dream. That app is going
              to help many people, make the internet a better place and help you
              make profits.
            </p>
            <p>
              I know you have a limited budget and want to invest that money in
              the best resources that will provide the best quality. However,
              you want to minimize the risks, you want to hire a freelancer so
              you don't have to hire a full time employee and all the legal
              obligations that come with that decision.
            </p>
            <p>Oh, you’re in just the right place!</p>
            <p>That’s where I come in to help you build that app.</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadlineSection;
