import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ReassureSection = () => {
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
        <Typography variant="h4" textAlign="left">
          I help innovative entrepreneurs complete their React app by writing clear, maintainable code and tests so they
          can launch an stellar product that users will love
        </Typography>
      </Container>
    </Box>
  );
};

export default ReassureSection;
