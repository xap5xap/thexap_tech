import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import DevelopmentProcessItem from "./DevelopmentProcessItem";

const DevelopmentProcessImage = () => {
  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={4} sx={{ position: "relative" }}>
        <Box
          sx={{
            transform: "rotate(34deg)",
            position: "absolute",
            bottom: 0,
            right: 0
          }}
        >
          <Image src="/images/arrow.svg" alt="arrow" width={100} height="100"></Image>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <DevelopmentProcessItem imageSrc="/images/testsJest.svg" text="Jest Unit Tests" />
      </Grid>
      <Grid item xs={4} sx={{ position: "relative" }}>
        <Box
          sx={{
            transform: "rotate(125deg)",
            position: "absolute",
            bottom: 0,
            left: 0
          }}
        >
          <Image src="/images/arrow.svg" alt="arrow" width={100} height="100"></Image>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <DevelopmentProcessItem imageSrc="/images/e2e.svg" text="Cypress e2e Tests" />
      </Grid>
      <Grid item xs={6}>
        <DevelopmentProcessItem imageSrc="/images/development.svg" text="React - NextJS Development" />
      </Grid>
      <Grid item xs={4} sx={{ height: "100px" }}></Grid>
      <Grid item xs={4} sx={{ position: "relative" }}>
        <Box
          sx={{
            transform: "rotate(255deg)",
            position: "absolute",
            top: 0,
            left: "40%"
          }}
        >
          <Image src="/images/arrow.svg" alt="arrow" width={100} height="100"></Image>
        </Box>
      </Grid>
    </Grid>
  );
};

// const DevelopmentProcessImage = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <DevelopmentProcessItem
//           imageSrc="/images/testsJest.svg"
//           text="Jest Unit Tests"
//         />
//       </Grid>
//       <Grid item xs={6}>
//         <DevelopmentProcessItem
//           imageSrc="/images/e2e.svg"
//           text="Cypress e2e Tests"
//         />
//       </Grid>
//       <Grid item xs={6}>
//         <DevelopmentProcessItem
//           imageSrc="/images/development.svg"
//           text="React - NextJS Development"
//         />
//       </Grid>

//     </Grid>
//   );
// };

// const DevelopmentProcessImage = () => {
//   return (
//     <Box sx={{ position: "relative" }}>
//       <Box>
//         <DevelopmentProcessItem
//           imageSrc="/images/testsJest.svg"
//           text="Jest Unit Tests"
//         />
//       </Box>
//       <Box>
//         <DevelopmentProcessItem
//           imageSrc="/images/development.svg"
//           text="React - NextJS Development"
//         />
//         <DevelopmentProcessItem
//           imageSrc="/images/e2e.svg"
//           text="Cypress e2e Tests"
//         />
//       </Box>
//     </Box>
//   );
// };

export default DevelopmentProcessImage;
