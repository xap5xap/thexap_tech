import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const HireLaunchSection = () => {
  return (
    <Box component="section" sx={{ paddingY: 9 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 2,
        }}
      >
        <Image
          alt="launch rocket"
          src="/images/rocket.svg"
          width={100}
          height={100}
        />
        <Typography color="text.secondary">Launch you app now</Typography>
        <Button size="large">Schedule a meeting</Button>
      </Container>
    </Box>
  );
};

export default HireLaunchSection;
