import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Value from "./Value";

const valueData = [
  {
    title: "Save time",
    description: [
      "You deserve quick responses.",
      "Being in the same timezone will improve the communication and complete the tasks faster"
    ],
    imageSrc: "/images/communication.svg"
  },
  {
    title: "Reduce the risk",
    description: [
      "Let’s build a quality app with maintainable code",
      "Invest the budget on specialists in the technology your app is being built"
    ],
    imageSrc: "/images/Ethical.svg"
  },
  {
    title: "Keep the project alive",
    description: [
      "Let’s deploy the app constantly with excellent quality to get feedback fast",
      "Launch an usable app and generate profits or get that new round of funding"
    ],
    imageSrc: "/images/QC2.svg"
  }
];
const ValuesSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 9
        }}
      >
        <Typography variant="h3" textAlign="center">
          Act now and actually deploy your app
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 8
          }}
        >
          {valueData.map((el, idx) => (
            <Value
              key={idx}
              reverse={idx % 2 !== 0}
              title={el.title}
              description={el.description}
              imageSrc={el.imageSrc}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ValuesSection;
