import Box from "@mui/material/Box";
import Script from "next/script";
import HeaderFooterLayout from "../src/components/HeaderFooterLayout";

const ScheduleMeetingPage = () => {
  return (
    <HeaderFooterLayout>
      <Script src="https://assets.calendly.com/assets/external/widget.js"></Script>
      <Box sx={{ height: "calc(100vh - 70px - 94px)", backgroundColor: "fff" }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", flex: 1, width: "100%", height: "100%" }}
          className="calendly-inline-widget"
          data-url="https://calendly.com/xavier-perez-dev/30min?background_color=303136&text_color=ffffff&primary_color=f59415"
        ></Box>
      </Box>
    </HeaderFooterLayout>
  );
};

export default ScheduleMeetingPage;
