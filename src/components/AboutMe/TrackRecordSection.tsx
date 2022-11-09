import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import UpworkAchievements from "../UpworkAchievements";
import UpworkReviews from "../UpworkReviews";

const TrackRecordSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 5
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 3,
            alignItems: "center"
          }}
        >
          <Box>
            <p>
              I’m Xavier Perez, a Full Stack developer that specializes in Javascript technologies. You know,
              Typescript, NodeJS, and React.
            </p>
            <p>
              I have been developing software for the past 14 years but for the past 5 years I have been freelancing and
              helping innovative entrepreneurs complete their applications.
            </p>
            <p>
              I am grateful for having helped more than 26 projects, with 100% job success. Because of this, Upwork has
              awarded me with a top rated freelancer badge.
            </p>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/codeImage.jpg" alt="code image" width={450} height={333} />
          </Box>
        </Box>
        <UpworkAchievements />
        <UpworkReviews />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 3,
            alignItems: "center"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/passion.jpg" alt="passion image" width={450} height={300} />
          </Box>
          <Box>
            <p>Being part of a dream is great. </p>
            <p>
              I understand all the effort you are doing to create this project. The stakes are high! But you are not
              alone, I will be with you in this journey and I will do my best to make your project a success.
            </p>
            <p>I will take care you project and your users like I did for the great entrepreneurs I’ve helped.</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrackRecordSection;
