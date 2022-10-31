import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

const StrokeSection = () => {
  return (
    <Box
      component="section"
      sx={{ paddingY: 9, backgroundColor: "background.paper" }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          columnGap: 3,
          alignItems: "center",
        }}
      >
        <Box>
          <p>I am available from 8am to 7pm EST Monday to Friday. </p>
          <p>
            I think one of the keys to a project's success is organization and
            communication.
          </p>
          <p>
            Having clear requirements before coding is very important, there is
            where having good communication is important. Being in the same time
            zone, we can chat in real time or have a quick call or video call.
            The important thing is that you don't waste money with coded
            features that users don't find valuable because of misunderstandings
            with the requirements..
          </p>
          <p>Feel free to schedule a meeting to see how I can help you.</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/something.jpg"
            alt="do something amazing image"
            width={450}
            height={300}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default StrokeSection;
