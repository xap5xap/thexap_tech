import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import KnowMeItem from "./KnowMeItem";
import ReviewCard from "./ReviewCard";

const reviewData = [
  {
    name: "Johannes Stiehler",
    review:
      "Just like the last time we engaged with him, Xavier helped us out reliably and efficiently. He specifically supported us in improving our unit and integration tests integrating emulators for our backend services into the test process.",
  },
  {
    name: "Karan Dhingra",
    review:
      "Xavier is a talented frontend developer, who supported our project for months and took our ideas from a google doc to an actual product/prototype. Xavier is fun to work with, a great team player and very accountable. We are a remote team, and Xavier just fit right into our team culture.",
  },
  {
    name: "Jake Glass",
    review:
      "Xavier is a talented software engineer who took our React/Redux project from 0 to 100 in record time. Xavier was able to quickly and expertly solve every problem we came across throughout the development process, which has resulted in a stellar end product. He has an eye for design and UX that sped up development significantly.",
  },
  {
    name: "Alli McKee",
    review:
      "Xavier was an invaluable part of our team, using his React expertise to bring pixel perfect screens to life as promised. Of all of the React developers we've worked with - on Upwork and otherwise - Xavier was one of the very top engineers with whom we've been lucky enough to have on our team.",
  },
  {
    name: "Sanjay Mahadi",
    review:
      "Xavier is not a typical fly-by freelancer, his commitment to success of our project was amazing. Xavier's technical skills especially in React application development can be compared to a world class developer. His methodical approach to writing code resulted in a easily maintainable code that my company can continue to use it as an asset going forward. Xavier's work ethics is one of the best I have seen across all kinds of staffing models, he is very direct and gives honest feedback on ideas that he thinks will work or not work.",
  },
  {
    name: "Adam Tratt",
    review:
      "Xavier was an outstanding addition to the team. Easy to work with, great communication. We asked Xavier to help us with our complex Node.js web app working with React, Relay, and GraphQL. He ramped up on our application very quickly and immediately added value to the project... It was as if he had been a member of the team all along. Worked efficiently and followed development processes like a true professional. We would definitely hire Xavier again in the future",
  },
];
const GuideSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 6,
        }}
      >
        <Box>
          <Typography variant="h3" textAlign="center">
            Join other successful projects that have launched their apps
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            Check out these nice things people are saying about me
          </Typography>
        </Box>
        <Box
          sx={{
            overflowX: "scroll",
            width: "100%",
            paddingBottom: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              columnGap: 3,
            }}
          >
            {reviewData.map((el, idx) => (
              <ReviewCard name={el.name} review={el.review} key={idx} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "100%",
            rowGap: 2,
          }}
        >
          <KnowMeItem primaryText="28" secondaryText="Projects completed" />
          <KnowMeItem primaryText="9000+" secondaryText="Worked hours" />
          <KnowMeItem primaryText="100%" secondaryText="Job Success" />
          <KnowMeItem
            primaryText="5"
            secondaryText="Years Top Rated freelancer"
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="outlined">About me</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GuideSection;
